import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sheetsFile = fs.existsSync(path.join(__dirname, ".cache", "sheets.json"))
  ? path.join(__dirname, ".cache", "sheets.json")
  : path.join(__dirname, "data", "sheets.json");
const sheets = JSON.parse(fs.readFileSync(sheetsFile, "utf8"));
const folderRoot = path.join(__dirname, "..", "各課外活動組別檔案");

const EN = {
  AI科學研究隊: "AI Science Team",
  AI編程隊: "AI Coding Team",
  "Drama Club": "Drama Club",
  "IT Prefect": "IT Prefect",
  "MKPC On Air": "MKPC On Air",
  "Newspaper Club": "Newspaper Club",
  "Steam Club": "STEAM Club",
  WebSems: "WebSems",
  中文辯論: "Chinese Debate",
  乒乓球: "Table Tennis",
  交通安全隊: "Road Safety Patrol",
  公益少年團: "Community Youth Club",
  劇社: "Drama Society",
  劍擊: "Fencing",
  匹克球: "Pickleball",
  升旗隊: "Flag-guards",
  合唱團: "Choir",
  單車: "Cycling",
  單輪車: "Unicycle",
  園藝大使: "Horticulture Ambassadors",
  圖書館管理隊: "Library Management Team",
  基督少年軍: "The Boys' Brigade",
  增益班: "Enrichment Class",
  日本文化研究: "Japanese Culture Club",
  菲林小組: "Film Club",
  女子手球: "Girls' Handball",
  女子排球: "Girls' Volleyball",
  女子籃球: "Girls' Basketball",
  女童軍: "Girl Guides",
  學生會: "Student Union",
  德文班: "German",
  手鈴: "Handbells",
  手鐘: "Handchimes",
  拉丁舞: "Latin Dance",
  拍攝小組: "Photography Team",
  日文班: "Japanese",
  未來生活科創隊: "Future Living Innovators",
  校園大使: "Campus Ambassadors",
  桌上遊戲: "Board Games",
  桌樂冒險家: "Tabletop Adventurers",
  棍網球: "Lacrosse",
  樂團: "Orchestra",
  機械人隊: "Robotics Team",
  欖球: "Rugby",
  武術: "Martial Arts",
  氣球造型班: "Balloon Modelling",
  沉浸式科技隊: "Immersive Tech Team",
  法文班: "French",
  游泳隊: "Swimming",
  滑板: "Skateboarding",
  無人機隊: "Drone Team",
  無伴奏合唱團: "A Cappella",
  生成式AI隊: "Generative AI Team",
  生物科技隊: "Biotechnology Team",
  田徑: "Track and Field",
  男子手球: "Boys' Handball",
  男子排球: "Boys' Volleyball",
  男子籃球: "Boys' Basketball",
  社會服務團: "Social Service Group",
  童軍: "Scouts",
  管弦樂班: "Orchestral Classes",
  羽毛球: "Badminton",
  腦力攻防戰: "Mind Challenge",
  舞蹈組: "Dance Team",
  英文大使: "English Ambassadors",
  英文辯論: "English Debate",
  英文集誦: "English Choral Speaking",
  視覺藝術小組: "Visual Arts Group",
  足球: "Football",
  跳繩: "Jump Rope",
  銀樂隊: "Marching Band",
  韓文班: "Korean",
  領袖生: "Prefects",
  科創時段: "InnoTech Genius Hour",
  手球: "Handball",
  籃球: "Basketball",
};

const ALIAS = {
  "Debate Team": "英文辯論",
  跳舞: "舞蹈組",
  游泳: "游泳隊",
  "小提琴(1)": "管弦樂班",
  "小提琴(2)": "管弦樂班",
  大提琴: "管弦樂班",
  單簧管: "管弦樂班",
  長笛: "管弦樂班",
  銅管樂: "管弦樂班",
  管樂班: "管弦樂班",
  "田徑(田項)": "田徑",
  銀樂: "銀樂隊",
  "Drama Club": "劇社",
};

const SKIP = new Set([
  "S.1功課輔導班",
  "S2-S5功課輔導班",
  "S4 資訊及通訊科技精要",
  "S5 資訊及通訊科技精要",
  "S4 多媒體故事",
  "S5 多媒體故事",
  "S4 人工智能與機械人",
  "S5 人工智能與機械人",
  "制服團隊",
  "手球",
  "男女子手球",
  "男女子排球",
  "科創時段",
  "科創",
  "藝術及音樂",
  "增益班",
  "WebSems",
]);

const CAT_HEADER = {
  學術: "academic",
  其他: "other",
  興趣學會: "interest",
  體育: "sports",
  "藝術 / 音樂": "arts",
  藝術: "arts",
  Steam: "steam",
  服務隊伍: "service",
  制服隊伍: "team",
};

function headerId(cell) {
  if (CAT_HEADER[cell]) return CAT_HEADER[cell];
  for (const [k, id] of Object.entries(CAT_HEADER)) {
    if (k === "Steam") continue;
    if (cell.startsWith(k + " ") || cell.startsWith(k + "(") || cell.startsWith(k + "（")) return id;
  }
  return null;
}

function isCatHeader(cell) {
  return Boolean(headerId(cell));
}

const DAYS = ["", "mon", "tue", "wed", "thu", "fri", "sat"];
const clubs = new Map();

function norm(n) {
  n = (n || "").replace(/\s+/g, " ").trim().replace(/_done.*$/i, "");
  return ALIAS[n] || n;
}

function ensure(name, cat, overwrite = false) {
  name = norm(name);
  if (!name || SKIP.has(name)) return null;
  if (/^(負責老師|學術|體育|藝術 \/ 音樂|藝術|Steam|其他|制服隊伍|制服團隊|服務隊伍|科創|藝術及音樂|興趣學會)$/.test(name)) return null;
  if (/課外活動分工|萬鈞伯裘/.test(name)) return null;
  if (!clubs.has(name)) {
    clubs.set(name, {
      id: name,
      nameZh: name,
      nameEn: EN[name] || name,
      category: cat || "other",
      teachers: [],
      sessions: [],
      s1: false,
      introZh: "",
      introEn: "",
      cover: "",
      photos: [],
    });
  } else if (cat && overwrite) {
    clubs.get(name).category = cat;
  }
  return clubs.get(name);
}

function addTeacher(c, t) {
  if (!t || /負責老師|TA2/.test(t)) return;
  if (!c.teachers.includes(t)) c.teachers.push(t);
}

const duty = sheets["老師分工"];
let leftCat = "",
  rightCat = "";
for (const row of duty) {
  const a = row[0] || "",
    e = row[4] || "";
  const hidA = headerId(a);
  const hidE = headerId(e);
  if (hidA) leftCat = hidA;
  if (hidE) rightCat = hidE;
  if (a && !isCatHeader(a)) {
    const c = ensure(a, leftCat, true);
    if (c) [row[1], row[2], row[3]].forEach((t) => addTeacher(c, t));
  }
  if (e && !isCatHeader(e)) {
    const c = ensure(e, rightCat, true);
    if (c) [row[5], row[6], row[7]].forEach((t) => addTeacher(c, t));
  }
}

function addSession(cobj, day, venue, label) {
  if (!cobj || !day) return;
  if (cobj.sessions.some((s) => s.day === day && s.venue === venue)) return;
  cobj.sessions.push({ day, venue, label });
}

function walkGrid(grid, maxDay, markS1) {
  let venue = "";
  for (const row of grid) {
    if (row[1] === "星期一") continue;
    if (row[0]) venue = row[0];
    for (let c = 1; c <= maxDay; c++) {
      const raw = row[c];
      if (!raw) continue;
      const mapped = [
        ...(raw === "男女子手球" || raw === "手球" ? ["男子手球", "女子手球"] : []),
        ...(raw === "男女子排球" ? ["男子排球", "女子排球"] : []),
      ];
      const names = mapped.length ? mapped : [norm(raw)];
      for (const n of names) {
        const cobj = ensure(n, mapped.length ? "sports" : null, mapped.length ? true : false);
        if (!cobj) continue;
        if (markS1) cobj.s1 = true;
        else addSession(cobj, DAYS[c], venue, raw);
      }
    }
  }
}

walkGrid(sheets["總表 (分配課室)"], 6, false);
walkGrid(sheets["中一總表"], 5, true);

if (clubs.has("籃球")) {
  for (const n of ["男子籃球", "女子籃球"]) {
    const x = ensure(n, "sports", true);
    for (const t of clubs.get("籃球").teachers) addTeacher(x, t);
  }
}

const guessRe = [
  [/籃球|足球|排球|乒乓|跳繩|劍擊|棍網|手球|欖球|單輪|游泳|滑板|匹克|田徑|單車|武術/, "sports"],
  [/AI|Steam|機械|無人|生物|科創|沉浸|生成式/, "steam"],
  [/日本文化|菲林/, "interest"],
  [/桌上|桌樂|腦力|氣球/, "other"],
  [/辯論|日文|德文|法文|韓文|Newspaper|Drama|集誦|On Air|增益/, "academic"],
  [/合唱|舞|手鈴|手鐘|樂團|視覺|拉丁|劇社|管弦/, "arts"],
  [/學生會|領袖|圖書館|校園|園藝|公益|拍攝|IT Prefect|WebSems|英文大使/, "service"],
  [/童軍|女童|交通|基督|升旗|銀樂/, "team"],
];

const highlights = [];
const sel = sheets["選拔"];
for (let r = 0; r < sel.length; r++) {
  const row = sel[r];
  const dates = [];
  for (let c = 1; c <= 5; c++) {
    const m = (row[c] || "").match(/(\d+)月(\d+)日/);
    if (m) dates.push({ col: c, iso: `2026-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}` });
  }
  if (!dates.length) continue;
  for (let k = r + 1; k < sel.length; k++) {
    const nrow = sel[k];
    if (/月/.test(nrow[1] || "") || /月/.test(nrow[2] || "")) break;
    let empty = true;
    for (const d of dates) {
      const nm = nrow[d.col];
      if (nm) {
        empty = false;
        highlights.push({
          date: d.iso,
          titleZh: `${nm} 選拔`,
          titleEn: `${EN[norm(nm)] || nm} selection`,
        });
      }
    }
    if (empty && k > r + 1) break;
  }
}

const foldersPath = path.join(__dirname, "data", "folders.json");
const FOLDER_CAT = {
  學術: "academic",
  藝術及音樂: "arts",
  科創: "steam",
  體育: "sports",
  制服團隊: "team",
  服務隊伍: "service",
  其他: "other",
  興趣學會: "interest",
};
function parseIntro(raw) {
  raw = (raw || "").replace(/\u0000/g, "").trim();
  if (!raw) return { introZh: "", introEn: "" };
  const enMark = "English Introduction";
  const zhMark = "中文簡介";
  let zh = "", en = "";
  const ei = raw.indexOf(enMark);
  if (ei >= 0) {
    en = raw.slice(ei + enMark.length).trim();
    const before = raw.slice(0, ei);
    const zi = before.lastIndexOf(zhMark);
    zh = (zi >= 0 ? before.slice(zi + zhMark.length) : before).trim();
  } else {
    const zi = raw.indexOf(zhMark);
    zh = (zi >= 0 ? raw.slice(zi + zhMark.length) : raw).trim();
    const split = zh.search(/[。！？]\s*(?=[A-Z])/);
    if (split >= 0) {
      en = zh.slice(split + 1).trim();
      zh = zh.slice(0, split + 1).trim();
    }
  }
  zh = zh.replace(/組別名稱\s*\/\s*Group Name/g, "").replace(/\(約100字\)/g, "").replace(/負責老師/g, "").replace(/\bGroup Name\b/g, "").trim();
  en = en.replace(/Please write[^\n]*/gi, "").replace(/^\(about 80 words\)/i, "").replace(/Teacher in charge.*$/i, "").trim();
  if (/請在此填寫|請填寫/.test(zh) || zh.length < 8) zh = "";
  if (/Please write/i.test(en) || en.length < 40) en = "";
  return { introZh: zh, introEn: en };
}

if (fs.existsSync(foldersPath)) {
  const folders = JSON.parse(fs.readFileSync(foldersPath, "utf8"));
  for (const [name, f] of Object.entries(folders)) {
    const cat = FOLDER_CAT[f.folderCat];
    const c = ensure(name, cat || null, Boolean(cat));
    if (!c) continue;
    if (cat) c.category = cat;
    const parsed = parseIntro(f.introRaw || "");
    if (f.introZh || parsed.introZh) c.introZh = f.introZh || parsed.introZh;
    if (f.introEn || parsed.introEn) c.introEn = f.introEn || parsed.introEn;
    if (f.cover) c.cover = f.cover;
    if (f.photos?.length) c.photos = f.photos;
  }
}

const list = [...clubs.values()]
  .filter((c) => c.nameZh !== "籃球")
  .sort((a, b) => a.nameZh.localeCompare(b.nameZh, "zh-Hant"));

if (list.length < 40) throw new Error(`expected 40+ clubs, got ${list.length}`);

const data = {
  generated: new Date().toISOString().slice(0, 10),
  source: "2627_課外活動總表 V5.xlsx",
  timeNoteZh: "一般課外活動為 16:00–17:30。校隊或會至最遲 19:00，以負責老師為準。",
  timeNoteEn: "Usual ECA is 16:00–17:30. School teams may run until 19:00 as the teacher directs.",
  categories: [
    { id: "academic", zh: "學術", en: "Academics" },
    { id: "arts", zh: "藝術及音樂", en: "Arts & Music" },
    { id: "steam", zh: "科創", en: "InnoTech" },
    { id: "sports", zh: "體育", en: "Sports" },
    { id: "team", zh: "制服團隊", en: "Uniformed Groups" },
    { id: "service", zh: "服務隊伍", en: "Service Teams" },
    { id: "interest", zh: "興趣學會", en: "Interest Clubs" },
    { id: "other", zh: "其他", en: "Others" },
  ],
  clubs: list,
  highlights,
};

const json = JSON.stringify(data, null, 2);
fs.writeFileSync(path.join(__dirname, "data", "eca.json"), json);
fs.writeFileSync(path.join(__dirname, "data.js"), "window.ECA = " + json + ";\n");
const counts = {};
for (const c of list) counts[c.category] = (counts[c.category] || 0) + 1;
console.log(`Wrote ${list.length} clubs, ${highlights.length} highlights`, counts);
