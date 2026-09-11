if (window.ECA?.clubs) {
  const hide = new Set(["增益班", "WebSems", "日本文化研究", "公益少年團", "生成式AI隊", "生成式AI", "沉浸式科技隊"]);
  ECA.clubs = ECA.clubs.filter((c) => !hide.has(c.id) && !hide.has(c.nameZh) && !hide.has(c.nameEn));
}

const TEACHER_EN = {
  王麗愉: "Wong Lai Yu",
  丘健: "Yau Kin",
  伍卓鍵: "Ng Cheuk Kin",
  朱會強: "Chu Wui Keung",
  何慧欣: "Ho Wai Yan",
  何靜妍: "Ho Ching Yin",
  吳華峰: "Ng Wah Fung",
  吳燕萍: "Ng Yin Ping",
  吳諾文: "Ng Lok Man",
  呂詩恩: "Lui Sze Yan",
  李日東: "Lee Yat Tung",
  李麗娟: "Li Lai Kuen",
  周柏言: "Chow Pak Yin",
  林子華: "Lam Chi Wah",
  林至泰: "Lam Chi Tai",
  林紀彤: "Lam Kei Tung",
  姚嘉宏: "Iu Ka Wang",
  范嘉楊: "Fan Ka Yeung Nicholas",
  范㬢文: "Fan Hei Man",
  范曦文: "Fan Hei Man",
  徐治文: "Hsu Chi Man",
  袁德璋: "Yuen Tak Cheung",
  馬嘉雯: "Ma Ka Man",
  馬穎嫻: "Ma Wing Han",
  張允樂: "Cheung Wan Lok",
  張永泰: "Cheung Wing Tai",
  張思華: "Cheung Sze Wa",
  張敬才: "Cheung King Choi",
  曹思思: "Cao Sisi",
  梁國龍: "Leung Kwok Lung",
  梁康姬: "Leung Hong Kei",
  莫菁兒: "Mok Ching Yee",
  郭家銘: "Kwok Ka Ming",
  郭鳳萍: "Kwok Fung Ping",
  陳秋雲: "Chan Chau Wan",
  陳紀筠: "Chan Kei Kwan",
  陳家仁: "Chan Ka Yan",
  陳振華: "Chan Chun Wa",
  陳浩云: "Howard Chan",
  陳珮儀: "Chan Pui Yee",
  陳曼湖: "Chan Man Wu",
  陳梃浠: "Chan Ting Hei",
  陳淑真: "Chen Shu Zhen",
  陳麗嫻: "Chan Lai Han",
  陳艷芬: "Chan Yim Fun",
  陸平中: "Felix Luk",
  馮耀强: "Fung Yiu Keung",
  黃子傑: "Wong Tsz Kit",
  黃子毅: "Wong Tsz Ngai",
  黃天異: "Wong Tin Yee",
  黃守宏: "Wong Max Sau Wang",
  黃俊偉: "Wong Chun Wai",
  黃栢君: "Wong Pak Kwan",
  黃詠淇: "Wong Wing Ki",
  黃轉鳳: "Wong Chuen Fung",
  黃麗娜: "Wong Lai Na",
  萬嘉傑: "Man Ka Kit",
  雷俊曜: "Lui Chun Yiu",
  廖淑君: "Liu Shuk Kwan",
  劉以皓: "Lau Yee Ho",
  劉倩慈: "Lau Sin Chi",
  劉麗芳: "Lau Lai Fong",
  歐陽佩霞: "Au Yeung Pui Ha",
  鄧嶧碖: "Tang Yik Lun",
  鄧鵠耀: "Tang Kuk Yiu",
  鄭敬宏: "Cheng King Wang",
  盧澤境: "Lu ZeJing",
  蕭潤貞: "Siu Yun Ching",
  謝頴雯: "Tse Wing Man",
  韓卓穎: "Hon Cheuk Wing",
  羅祉臻: "Law Tsz Chun Ethan",
  Wayne: "Wayne van der Merwe",
  Roisin: "Roisin Marie Flynn",
  Raman: "Ramandeep Kaur",
  Ramen: "Ramandeep Kaur",
  Wang: "Heumil Wang",
  Mirza: "Mirza Muhammad Faran Ashraf Baig",
  Scott: "Scott Robert Wildgen",
  Scot: "Scott Robert Wildgen",
  Dari: "Mustafa Dari",
  Johan: "Johan Herman Kamper",
};

const DAY = {
  mon: { zh: "星期一", en: "Mon" },
  tue: { zh: "星期二", en: "Tue" },
  wed: { zh: "星期三", en: "Wed" },
  thu: { zh: "星期四", en: "Thu" },
  fri: { zh: "星期五", en: "Fri" },
  sat: { zh: "星期六", en: "Sat" },
};
const DAY_ORDER = ["mon", "tue", "wed", "thu", "fri", "sat"];

const I18N = {
  zh: {
    school: "萬鈞伯裘書院",
    title: "課外活動",
    clubs: "課外活動",
    news: "最新消息",
    noNews: "本期暫無刊登。",
    backNews: "返回最新消息",
    newsTrial: "選拔",
    paperDept: "學生發展部",
    paperMore: "各版消息",
    paperTick: "頭條",
    timetable: "時間表",
    s1zone: "中一同學專區",
    s1guide: "課外活動須知",
    apply: "課外活動報名",
    contact: "聯絡我們",
    teams: "校隊專區",
    calTitle: "比賽月曆",
    resultsTitle: "學界比賽賽況",
    noFixture: "本月未有已公布的校隊比賽。",
    pendingResult: "暫未公布",
    win: "勝",
    lose: "負",
    draw: "和",
    tabHome: "首頁",
    tabClubs: "活動",
    tabTime: "時間表",
    tabS1: "中一安排",
    lang: "English",
    homeLead: "發掘潛能、團隊、溝通與協作。2026–2027 課外活動總覽。",
    cats: "活動類別",
    week: "本週重點",
    noticeLabel: "通告",
    notice: "中一級同學須於星期一至五出席課外活動。星期二為科創活動，稍後由老師安排，無須選報。報名日期為2026年9月15日至19日，詳見中一同學專區。",
    noWeek: "本週沒有已公布的選拔。可按校徽回首頁，或到課外活動瀏覽所有組別。",
    search: "搜尋組別",
    allCat: "所有類別",
    allDay: "所有星期",
    noResult: "沒有符合的組別。",
    introSoon: "簡介即將更新。",
    teachers: "負責老師",
    whenWhere: "時間及地點",
    noSession: "時間地點待總表更新。",
    photos: "相片",
    noPhoto: "各組專屬相片尚未繳交，封面顯示即將推出。",
    s1Badge: "中一可選",
    back: "返回目錄",
    source: "時間表由總表自動產生，請勿另存一份清單。",
    weekTable: "一週總表",
    s1Remark: "標「中一可選」者與中一報名表該日可選活動相同。星期二為科創，不標中一可選。",
    s1tt: "中一級報名時間表",
    s1ttLead: "下表與報名系統可選活動相同。星期一、三、四、五每日填三個志願。星期二為科創活動，稍後由老師安排，無須選報。標「面試」者僅已獲選拔同學可選。一般時間 16:00–17:30。",
    s1ttInterview: "面試",
    s1ttLevel: "須填級別",
    tueSteam: "科創 · 稍後由老師安排",
    count: (n) => `共 ${n} 組`,
  },
  en: {
    school: "Man Kwan Pak Kau College",
    title: "Extracurricular Activities",
    clubs: "Extracurricular Activities",
    news: "News",
    noNews: "Nothing in this edition.",
    backNews: "Back to news",
    newsTrial: "Trial",
    paperDept: "Student Affairs",
    paperMore: "More stories",
    paperTick: "Headlines",
    timetable: "Timetable",
    s1zone: "S1 area",
    s1guide: "ECA notes",
    apply: "ECA sign-up",
    contact: "Contact",
    teams: "School teams",
    calTitle: "Match calendar",
    resultsTitle: "Inter-school results",
    noFixture: "No published matches this month.",
    pendingResult: "Not yet published",
    win: "W",
    lose: "L",
    draw: "D",
    tabHome: "Home",
    tabClubs: "Clubs",
    tabTime: "Times",
    tabS1: "S1 plan",
    lang: "中文",
    homeLead: "Discover potential, teamwork, and collaboration. 2026–2027 ECA overview.",
    cats: "Categories",
    week: "This week",
    noticeLabel: "Notice",
    notice: "S1 students shall attend ECA from Monday to Friday. Tuesday is InnoTech, to be arranged by teachers later; students need not choose a Tuesday activity. Applications are accepted from 15 to 19 September 2026. Please refer to the S1 area.",
    noWeek: "No published selections this week. Browse all clubs in the directory.",
    search: "Search clubs",
    allCat: "All categories",
    allDay: "All days",
    noResult: "No clubs match.",
    introSoon: "Introduction coming soon.",
    teachers: "Teacher-in-charge",
    whenWhere: "Time & venue",
    noSession: "Schedule not yet on the master sheet.",
    photos: "Photos",
    noPhoto: "Club photo folders are still empty; covers show Coming Soon.",
    s1Badge: "Open to S1",
    back: "Back to directory",
    source: "This timetable is generated from the master sheet. Do not keep a second copy.",
    weekTable: "Week overview",
    s1Remark: "“Open to S1” matches that day’s options on the application form. Tuesday is InnoTech and is not marked Open to S1.",
    s1tt: "S1 application timetable",
    s1ttLead: "This table matches the activities on the application form. Enter three preferences for Monday, Wednesday, Thursday and Friday. Tuesday is InnoTech, to be arranged by teachers later; students need not choose a Tuesday activity. Items marked Trial are only for students already selected. Usual time is 16:00–17:30.",
    s1ttInterview: "Trial",
    s1ttLevel: "Level required",
    tueSteam: "InnoTech · to be arranged",
    count: (n) => `${n} clubs`,
  },
};

function lang() {
  return localStorage.getItem("eca-lang") === "en" ? "en" : "zh";
}
function t() {
  return I18N[lang()];
}
function catLabel(id) {
  const c = ECA.categories.find((x) => x.id === id);
  return c ? (lang() === "en" ? c.en : c.zh) : id;
}
function clubName(c) {
  return lang() === "en" ? c.nameEn : c.nameZh;
}
function teacherLabel(name) {
  const ta = /\(TA\)/i.test(name);
  const n = String(name)
    .replace(/老師$/, "")
    .replace(/\s*\(TA\)\s*/gi, "")
    .replace(/\s*\([^)]*\)\s*/g, "")
    .trim();
  if (lang() === "en") {
    const en = TEACHER_EN[n] || n;
    return ta ? en + " (TA)" : en;
  }
  if (/老師$|主任$|先生$/.test(String(name).trim())) return String(name).trim();
  return n + "老師";
}
function teachersText(c) {
  return (c.teachers || []).map(teacherLabel).join(lang() === "en" ? ", " : "、");
}
function clubSessions(c) {
  let ss = c.sessions || [];
  if (c.id === "桌上遊戲" || c.nameZh === "桌上遊戲") return ss.filter((s) => s.day === "mon");
  const board = findClub("桌上遊戲");
  if (c.id === "腦力攻防戰" || c.nameZh === "腦力攻防戰") {
    const extra = (board?.sessions || []).filter((s) => s.day === "wed").map((s) => ({ ...s, label: c.nameZh }));
    return ss.concat(extra);
  }
  if (c.id === "桌樂冒險家" || c.nameZh === "桌樂冒險家") {
    const extra = (board?.sessions || []).filter((s) => s.day === "thu").map((s) => ({ ...s, label: c.nameZh }));
    return ss.concat(extra);
  }
  return ss;
}

function daysText(c) {
  const ds = [...new Set(clubSessions(c).map((s) => s.day))];
  if (c.category === "steam" && !ds.includes("tue")) ds.push("tue");
  ds.sort((a, b) => DAY_ORDER.indexOf(a) - DAY_ORDER.indexOf(b));
  return ds.map((d) => DAY[d][lang()]).join("、") || "—";
}
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}
function encodeId(id) {
  return encodeURIComponent(id);
}

function parseRoute() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const [path, query] = raw.split("?");
  const parts = (path || "/").split("/").filter(Boolean);
  const params = new URLSearchParams(query || "");
  if (parts[0] === "club") return { page: "club", id: decodeURIComponent(parts.slice(1).join("/") || "") };
  if (parts[0] === "clubs") return { page: "clubs", params };
  if (parts[0] === "news" && parts[1]) return { page: "story", id: decodeURIComponent(parts.slice(1).join("/")) };
  if (parts[0] === "news") return { page: "news" };
  if (parts[0] === "timetable") return { page: "timetable", params };
  if (parts[0] === "teams") return { page: "teams", params };
  if (parts[0] === "s1") return { page: "s1", params };
  if (parts[0] === "apply") return { page: "apply" };
  if (parts[0] === "contact") return { page: "contact" };
  return { page: "home" };
}

function weekHighlights() {
  const now = new Date();
  const day = (now.getDay() + 6) % 7;
  const start = new Date(now);
  start.setDate(now.getDate() - day);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  return (ECA.highlights || []).filter((h) => {
    const d = new Date(h.date + "T00:00:00");
    return d >= start && d < end;
  });
}

function nav(page) {
  const L = t();
  const on = (id) =>
    page === id || (id === "clubs" && page === "club") || (id === "news" && page === "story")
      ? ' aria-current="page"'
      : "";
  const item = (href, key, id) => `<a href="${href}"${on(id)}>${L[key]}</a>`;
  const tab = (href, key, id) => `<a href="${href}"${on(id)}><span>${L[key]}</span></a>`;
  const zoneOn = page === "s1" || page === "apply";
  const zone = (label) => `<div class="nav-drop${zoneOn ? " is-on" : ""}">
      <span class="nav-drop-lab" tabindex="0" aria-haspopup="true">${label}</span>
      <div class="nav-drop-menu">
        <a href="#/s1"${page === "s1" ? ' aria-current="page"' : ""}>${L.s1guide}</a>
        <a href="#/apply"${page === "apply" ? ' aria-current="page"' : ""}>${L.apply}</a>
      </div>
    </div>`;
  return `<header class="${page === "home" ? "is-overlay" : ""}">
    <div class="topbar">
      <a class="brand" href="#/">
        <img src="img/logo.png" alt="" />
        <span class="brand-text">
          <span class="brand-zh">萬鈞伯裘書院</span>
          <span class="brand-en">MAN KWAN PAK KAU COLLEGE</span>
        </span>
      </a>
      <nav class="nav-desk">
        ${item("#/clubs", "clubs", "clubs")}
        ${item("#/timetable", "timetable", "timetable")}
        ${zone(L.s1zone)}
        ${item("#/contact", "contact", "contact")}
      </nav>
      <div class="top-tools">
        <button class="lang" type="button" id="langBtn">${L.lang}</button>
        <img class="motto" src="img/motto.jpg" alt="人人可教 All Are Educable" />
      </div>
    </div>
  </header>
  <nav class="tabbar" aria-label="${L.title}">
    ${tab("#/", "tabHome", "home")}
    ${tab("#/clubs", "tabClubs", "clubs")}
    ${tab("#/timetable", "tabTime", "timetable")}
    ${zone(L.tabS1)}
  </nav>`;
}

function cover(c, extra) {
  if (c.cover) {
    return `<div class="cover ${escapeHtml(c.category)}${extra ? " " + extra : ""}" style="background-image:url('${encodeURI(c.cover)}')" aria-hidden="true"></div>`;
  }
  return `<div class="cover soon${extra ? " " + extra : ""}" aria-hidden="true"></div>`;
}

function sessionTime(c, s) {
  if ((c.id === "女子排球" || c.nameZh === "女子排球") && s.day === "sat") return "10:00–13:00";
  return s.time || "16:00–17:30";
}

function cleanIntro(raw) {
  raw = String(raw || "")
    .replace(/\(about 80 words\)/gi, "")
    .replace(/Teacher in charge/gi, "")
    .replace(/\(約100字\)/g, "")
    .replace(/負責老師/g, "")
    .trim();
  return raw.length < 8 ? "" : raw;
}

function blurb(c) {
  const raw = cleanIntro(lang() === "en" ? c.introEn || c.introZh : c.introZh || c.introEn);
  if (!raw) return c.teachers.length ? teachersText(c) : "";
  const line = raw.split("\n").map((s) => s.trim()).find(Boolean) || raw;
  return line.length > 72 ? line.slice(0, 72) + "…" : line;
}

function clubFromHighlight(h) {
  const name = String(h.titleZh || "").replace(/\s*選拔\s*$/, "").trim();
  const key = { 跳舞: "舞蹈組", 游泳: "游泳隊" }[name] || name;
  const exact = ECA.clubs.find((x) => x.id === key || x.nameZh === key);
  if (exact) return exact;
  const hits = ECA.clubs.filter((x) => x.nameZh.includes(key));
  return hits.length === 1 ? hits[0] : null;
}
function highlightHref(h) {
  const exact = clubFromHighlight(h);
  if (exact) return `#/club/${encodeId(exact.id)}`;
  const name = String(h.titleZh || "").replace(/\s*選拔\s*$/, "").trim();
  return `#/clubs?q=${encodeURIComponent(name)}`;
}

function home() {
  const L = t();
  const hls = weekHighlights();
  return `${nav("home")}
    <section class="hero" style="background-image:url('img/hero.jpg')">
      <div class="hero-inner">
        <h1>${L.title}</h1>
        <p>${L.homeLead}</p>
      </div>
    </section>
    <div class="hero-bar" role="status">
      <strong>${L.noticeLabel}</strong>
      <div class="marquee">
        <div class="marquee-track">
          <span>${L.notice}</span>
          <span aria-hidden="true">${L.notice}</span>
        </div>
      </div>
    </div>
    <main>
    <h2>${L.cats}</h2>
    <div class="grid">
      ${ECA.categories
        .map((c) => {
          const n = ECA.clubs.filter((x) => x.category === c.id).length;
          return `<a class="cat ${c.id}" href="#/clubs?cat=${c.id}"><span>${lang() === "en" ? c.en : c.zh}</span><small>${L.count(n)}</small></a>`;
        })
        .join("")}
    </div>
    <h2 style="margin-top:36px">${L.week}</h2>
    ${
      hls.length
        ? `<div class="list">${hls
            .map(
              (h) =>
                `<a class="hl" href="${highlightHref(h)}"><time>${h.date}</time><span>${escapeHtml(lang() === "en" ? h.titleEn : h.titleZh)}</span></a>`
            )
            .join("")}</div>`
        : `<p class="empty">${L.noWeek}</p>`
    }
  </main>`;
}

function clubCard(c) {
  const L = t();
  return `<a class="card" href="#/club/${encodeId(c.id)}">
    ${cover(c)}
    <div class="body">
      <h3>${escapeHtml(clubName(c))}</h3>
      <div class="meta">
        <span class="badge">${escapeHtml(catLabel(c.category))}</span>
        ${daysText(c)}
        ${isS1Open(c) ? ` · ${L.s1Badge}` : ""}
      </div>
      ${blurb(c) ? `<p class="meta">${escapeHtml(blurb(c))}</p>` : ""}
    </div>
  </a>`;
}

function clubsPage(params) {
  const L = t();
  params = params || new URLSearchParams();
  const cat = params.get("cat") || "";
  const day = params.get("day") || "";
  const q = (params.get("q") || "").trim().toLowerCase();
  let rows = ECA.clubs;
  if (cat) rows = rows.filter((c) => c.category === cat);
  if (day) {
    rows = rows.filter((c) => clubSessions(c).some((s) => s.day === day) || (day === "tue" && c.category === "steam"));
  }
  if (q) {
    rows = rows.filter((c) =>
      [c.nameZh, c.nameEn, c.teachers.join(" "), catLabel(c.category), c.introZh, c.introEn].join(" ").toLowerCase().includes(q)
    );
  }
  return `${nav("clubs")}<main>
    <h1>${cat ? escapeHtml(catLabel(cat)) : L.clubs}</h1>
    <p class="lead">${L.count(rows.length)}</p>
    <div class="filters">
      <input id="q" type="search" placeholder="${L.search}" value="${escapeHtml(params.get("q") || "")}" />
      <select id="cat">${["", ...ECA.categories.map((c) => c.id)]
        .map((id) => `<option value="${id}" ${cat === id ? "selected" : ""}>${id ? catLabel(id) : L.allCat}</option>`)
        .join("")}</select>
      <select id="day">${["", ...DAY_ORDER]
        .map((d) => `<option value="${d}" ${day === d ? "selected" : ""}>${d ? DAY[d][lang()] : L.allDay}</option>`)
        .join("")}</select>
    </div>
    <div class="cards">${rows.map(clubCard).join("") || `<p class="empty">${L.noResult}</p>`}</div>
  </main>`;
}

function clubPage(id) {
  const L = t();
  const c = ECA.clubs.find((x) => x.id === id);
  if (!c) return `${nav("clubs")}<main><p>${L.noResult}</p></main>`;
  let sess = clubSessions(c)
    .map((s) => {
      const extra = s.label && s.label !== c.nameZh ? ` · ${escapeHtml(s.label)}` : "";
      return `<li>${DAY[s.day][lang()]} · ${escapeHtml(s.venue)}${extra} · ${sessionTime(c, s)}</li>`;
    })
    .join("");
  if (c.category === "steam" && !clubSessions(c).some((s) => s.day === "tue")) {
    sess += `<li>${DAY.tue[lang()]} · ${L.tueSteam}</li>`;
  }
  const intro = cleanIntro(lang() === "en" ? c.introEn || c.introZh : c.introZh || c.introEn);
  const coverHtml = c.cover
    ? `<div class="cover ${escapeHtml(c.category)} hero zoom" data-full="${encodeURI(c.cover)}" style="background-image:url('${encodeURI(c.cover)}')"></div>`
    : cover(c, "hero");
  const gallery = (c.photos || [])
    .map((p) => `<img src="${encodeURI(p)}" alt="${escapeHtml(clubName(c))}" data-full="${encodeURI(p)}" />`)
    .join("");
  return `${nav("clubs")}<main>
    <a class="back" href="#/clubs">${L.back}</a>
    <h1>${escapeHtml(clubName(c))}</h1>
    <p class="lead">${escapeHtml(lang() === "en" ? c.nameZh : c.nameEn)} · ${escapeHtml(catLabel(c.category))}${isS1Open(c) ? " · " + L.s1Badge : ""}</p>
    ${coverHtml}
    <div class="prose">
      <h2>${L.whenWhere}</h2>
      ${sess ? `<ul>${sess}</ul><p>${lang() === "en" ? ECA.timeNoteEn : ECA.timeNoteZh}</p>` : `<p>${L.noSession}</p>`}
      <h2>${L.teachers}</h2>
      <p>${c.teachers.length ? escapeHtml(teachersText(c)) : "—"}</p>
      <h2>${lang() === "en" ? "Introduction" : "簡介"}</h2>
      <p>${intro ? escapeHtml(intro).replace(/\n/g, "<br>") : L.introSoon}</p>
      ${gallery ? `<h2>${L.photos}</h2><div class="gallery">${gallery}</div>` : ""}
    </div>
  </main>`;
}

function todayKey() {
  return DAY_ORDER[(new Date().getDay() + 6) % 7] || "mon";
}

function sessionBits(c, s) {
  const lab = s.label || "";
  const show =
    lab &&
    lab !== c.nameZh &&
    lab !== c.id &&
    !lab.includes(c.nameZh) &&
    !c.nameZh.includes(lab) &&
    !/^男女/.test(lab);
  const clock = sessionTime(c, s);
  return [s.venue, show ? lab : "", clock === "16:00–17:30" ? "" : clock].filter(Boolean).join(" · ");
}

function dayEntries(day, cat, onlyS1) {
  const rows = [];
  for (const c of ECA.clubs) {
    if (onlyS1 && !isS1OpenOnDay(c, day)) continue;
    if (cat && c.category !== cat) continue;
    const ss = clubSessions(c).filter((s) => s.day === day);
    if (ss.length) {
      const where = [...new Set(ss.map((s) => sessionBits(c, s)))].join("、");
      rows.push({ c, where });
      continue;
    }
    if (day === "tue" && c.category === "steam") rows.push({ c, where: t().tueSteam });
  }
  rows.sort(
    (a, b) =>
      a.c.category.localeCompare(b.c.category) ||
      clubName(a.c).localeCompare(clubName(b.c), lang() === "en" ? "en" : "zh-Hant")
  );
  return rows;
}

function timetablePage(params) {
  const L = t();
  params = params || new URLSearchParams();
  const day = DAY_ORDER.includes(params.get("day")) ? params.get("day") : todayKey();
  const cat = params.get("cat") || "";
  const rows = dayEntries(day, cat);
  const qs = (d) => {
    const p = new URLSearchParams();
    p.set("day", d);
    if (cat) p.set("cat", cat);
    return "#/timetable?" + p.toString();
  };
  let last = "";
  const list = rows
    .map(({ c, where }) => {
      const head = c.category !== last ? ((last = c.category), `<h3 class="tt-cat">${escapeHtml(catLabel(c.category))}</h3>`) : "";
      return `${head}<a class="tt-row" href="#/club/${encodeId(c.id)}"><span><strong>${escapeHtml(clubName(c))}</strong><span class="meta">${escapeHtml(where)}</span></span>${isS1OpenOnDay(c, day) ? `<span class="badge">${L.s1Badge}</span>` : ""}</a>`;
    })
    .join("");
  return `${nav("timetable")}<main>
    <h1>${L.timetable}</h1>
    <p class="lead">16:00–17:30 · ${L.source}<br>${L.s1Remark}</p>
    <div class="filters">
      <select id="cat">${["", ...ECA.categories.map((c) => c.id)]
        .map((id) => `<option value="${id}" ${cat === id ? "selected" : ""}>${id ? catLabel(id) : L.allCat}</option>`)
        .join("")}</select>
    </div>
    <h2 class="tt-wide-title">${L.weekTable}</h2>
    <div class="tt-wide">
      <table>
        <thead><tr>${DAY_ORDER.map(
          (d) => `<th>${DAY[d][lang()]}</th>`
        ).join("")}</tr></thead>
        <tbody><tr>${DAY_ORDER.map((d) => {
          const cell = dayEntries(d, cat)
            .map(
              ({ c, where }) =>
                `<a href="#/club/${encodeId(c.id)}">${escapeHtml(clubName(c))}${isS1OpenOnDay(c, d) ? ` <span class="badge">${L.s1Badge}</span>` : ""}<span class="meta">${escapeHtml(where)}</span></a>`
            )
            .join("");
          return `<td>${cell || "—"}</td>`;
        }).join("")}</tr></tbody>
      </table>
    </div>
    <div class="tt-pills">${DAY_ORDER.map(
      (d) => `<a href="${qs(d)}"${d === day ? ' aria-current="page"' : ""}>${DAY[d][lang()]}</a>`
    ).join("")}</div>
    <p class="lead">${DAY[day][lang()]} · ${L.count(rows.length)}</p>
    <div class="tt-list">${list || `<p class="empty">${L.noResult}</p>`}</div>
  </main>`;
}

function s1Form() {
  return window.ECA_S1_FORM || { dayOrder: [], days: {}, activities: {}, interview: [], needLevel: [], clubAlias: {}, cat: {} };
}

function s1OpenIds() {
  const f = s1Form();
  const extra = { 男女子排球: ["女子排球", "男子排球"] };
  const ids = new Set();
  for (const day of f.dayOrder || []) {
    for (const row of f.activities[day] || []) {
      const id = row[3] || row[0];
      for (const name of extra[id] || [f.clubAlias[id] || id]) {
        const club = findClub(name);
        if (club) ids.add(club.id);
      }
    }
  }
  return ids;
}

function isS1Open(c) {
  return s1OpenIds().has(c.id);
}

function isS1OpenOnDay(c, day) {
  if (day === "tue") return false;
  const f = s1Form();
  const extra = { 男女子排球: ["女子排球", "男子排球"] };
  for (const row of f.activities[day] || []) {
    const id = row[3] || row[0];
    for (const name of extra[id] || [f.clubAlias[id] || id]) {
      if (c.id === name || c.nameZh === name) return true;
    }
  }
  return false;
}

function s1FormClub(id) {
  const f = s1Form();
  return findClub(f.clubAlias[id] || id);
}

function s1FormItem(a) {
  const L = t();
  const f = s1Form();
  const name = lang() === "en" ? a.en : a.zh;
  const cat = f.cat[a.cat] ? f.cat[a.cat][lang()] : a.cat;
  const bits = [cat];
  if ((f.interview || []).includes(a.id)) bits.push(L.s1ttInterview);
  if ((f.needLevel || []).includes(a.id)) bits.push(L.s1ttLevel);
  const inner = `<strong>${escapeHtml(name)}</strong><span class="meta">${escapeHtml(bits.join(" · "))}</span>`;
  const club = s1FormClub(a.id);
  return club
    ? `<a class="s1-tt-item" href="#/club/${encodeId(club.id)}">${inner}</a>`
    : `<div class="s1-tt-item">${inner}</div>`;
}

function s1DayActs(day) {
  return (s1Form().activities[day] || []).map((row) => ({
    zh: row[0],
    en: row[1],
    cat: row[2],
    id: row[3] || row[0],
  }));
}

const S1_CAT_ORDER = ["學術", "體育", "藝術", "制服"];

function s1SortActs(acts) {
  return acts.slice().sort(
    (a, b) =>
      S1_CAT_ORDER.indexOf(a.cat) - S1_CAT_ORDER.indexOf(b.cat) ||
      (lang() === "en" ? a.en : a.zh).localeCompare(lang() === "en" ? b.en : b.zh, lang() === "en" ? "en" : "zh-Hant")
  );
}

function s1PickDay(params, days) {
  const d = params?.get("day") || "";
  if (days.includes(d)) return d;
  const today = todayKey();
  return days.includes(today) ? today : days[0] || "mon";
}

function s1TimetableHtml(params) {
  const L = t();
  const f = s1Form();
  const days = f.dayOrder || [];
  const head = (d) => (lang() === "en" ? f.days[d].en : f.days[d].zh);
  const day = s1PickDay(params, days);
  const cat = params?.get("cat") || "";
  let acts = s1SortActs(s1DayActs(day));
  if (cat) acts = acts.filter((a) => a.cat === cat);
  const qs = (d) => {
    const p = new URLSearchParams();
    p.set("day", d);
    if (cat) p.set("cat", cat);
    return "#/s1?" + p.toString();
  };
  let last = "";
  const list = acts
    .map((a) => {
      const lab = f.cat[a.cat] ? f.cat[a.cat][lang()] : a.cat;
      const headCat = a.cat !== last ? ((last = a.cat), `<h3 class="tt-cat">${escapeHtml(lab)}</h3>`) : "";
      return headCat + s1FormItem(a);
    })
    .join("");
  const note = lang() === "en" ? f.days[day]?.noteEn : f.days[day]?.noteZh;
  const stack = `<div class="tt-pills">${days
    .map((d) => `<a href="${qs(d)}"${d === day ? ' aria-current="page"' : ""}>${escapeHtml(head(d))}</a>`)
    .join("")}</div>
    <div class="filters">
      <select id="s1cat">${["", ...S1_CAT_ORDER]
        .map((id) => {
          const lab = id ? (f.cat[id] ? f.cat[id][lang()] : id) : L.allCat;
          return `<option value="${id}" ${cat === id ? "selected" : ""}>${escapeHtml(lab)}</option>`;
        })
        .join("")}</select>
    </div>
    ${note ? `<p class="s1-tt-note">${escapeHtml(note)}</p>` : ""}
    <div class="tt-list">${list || `<p class="empty">${L.noResult}</p>`}</div>`;
  const wide = `<div class="s1-tt-wide"><table>
    <thead><tr>${days.map((d) => `<th>${escapeHtml(head(d))}</th>`).join("")}</tr></thead>
    <tbody><tr>${days
      .map((d) => {
        const n = lang() === "en" ? f.days[d].noteEn : f.days[d].noteZh;
        return `<td>${n ? `<p class="s1-tt-note">${escapeHtml(n)}</p>` : ""}${s1DayActs(d).map(s1FormItem).join("")}</td>`;
      })
      .join("")}</tr></tbody>
  </table></div>`;
  return `<h2>${L.s1tt}</h2>
    <p>${L.s1ttLead}</p>
    ${wide}
    <div class="s1-tt-stack">${stack}</div>`;
}

function s1Page(params) {
  const zh = `<div class="prose">
    <h2>參加安排</h2>
    <p>中一級同學須於<strong>星期一至五</strong>出席課外活動。<strong>星期二</strong>為科創活動，稍後由老師安排，同學無須選報。</p>
    <h2>時間</h2>
    <p>一般課外活動為課後 <strong>16:00–17:30</strong>。校隊訓練時間以負責老師安排為準，或會超過 17:30，最遲至 <strong>19:00</strong>。場地請參閱各組時間表；外借場地（例如田徑、足球、欖球）以當日負責老師指示為準。</p>
    ${s1TimetableHtml(params)}
    <h2>活動類別</h2>
    <p>以下分類與報名系統相同，用以核對星期一、四、五第一志願須涵蓋至少兩個範疇。</p>
    <ul>
      <li>學術：Debate Team、中文辯論、法文班、腦力攻防戰、Drama Club、社會服務團、日文班、Newspaper Club、英文集誦、德文班、韓文班</li>
      <li>體育：女子籃球、男子籃球、羽毛球、田徑、足球、男女子排球、單輪車、乒乓球、跳繩、滑板、欖球、匹克球、劍擊、棍網球</li>
      <li>藝術及音樂：手鈴、視覺藝術小組、桌上遊戲、MKPC On Air 廣播隊、樂器班、無伴奏合唱團、跳舞、手鐘、桌樂冒險家、合唱團、樂團、氣球造型班、管樂班</li>
      <li>制服團隊（星期三）：女童軍、基督少年軍、交通安全隊、童軍、銀樂隊、升旗隊。星期三不計入上述兩個範疇。</li>
    </ul>
    <h2>出席</h2>
    <p>點名及請假按學校／組別負責老師安排。報名詳情見「<a href="#/apply">課外活動報名</a>」。</p>
    <h2>查詢</h2>
    <p>學生發展部（課外活動）。學校網站：<a href="https://www.mkpc.edu.hk/">mkpc.edu.hk</a>。</p>
  </div>`;
  const en = `<div class="prose">
    <h2>Participation</h2>
    <p>All Secondary 1 students shall attend extracurricular activities from <strong>Monday to Friday</strong>. <strong>Tuesday</strong> is InnoTech, to be arranged by teachers later. Students need not choose a Tuesday activity.</p>
    <h2>Time</h2>
    <p>Regular sessions are held after school from <strong>16:00 to 17:30</strong>. School-team training shall follow the arrangement of the teacher-in-charge and may extend beyond 17:30, until <strong>19:00</strong> at the latest. Venues are set out in the timetable. Off-campus venues (for example athletics, football and rugby) shall follow the instructions of the teacher-in-charge on the day.</p>
    ${s1TimetableHtml(params)}
    <h2>Categories</h2>
    <p>These groups match the application system. First preferences on Monday, Thursday and Friday shall cover at least two domains.</p>
    <ul>
      <li>Academic: Debate Team, Chinese Debating, French, Brain Battle, Drama Club, Social Service Group, Japanese, Newspaper Club, English choral speaking, German, Korean</li>
      <li>Sports: girls’/boys’ basketball, badminton, athletics, football, volleyball, unicycle, table tennis, rope skipping, skateboarding, rugby, pickleball, fencing, lacrosse</li>
      <li>Arts and music: handbells, visual arts, board games, MKPC On Air, instrumental classes, a cappella, dance, handchimes, tabletop adventure, choir, school band, balloon twisting, wind band</li>
      <li>Uniformed groups (Wednesday): Girl Guides, Boys’ Brigade, Road Safety Patrol, Scouts, Marching Band, Flag-guards. Wednesday does not count toward the two-domain rule.</li>
    </ul>
    <h2>Attendance</h2>
    <p>Roll call and applications for leave shall follow the arrangements of the school or the teacher-in-charge. Please refer to <a href="#/apply">ECA application</a>.</p>
    <h2>Enquiries</h2>
    <p>Department of Student Affairs (Extracurricular Activities). School website: <a href="https://www.mkpc.edu.hk/">mkpc.edu.hk</a>.</p>
  </div>`;
  return `${nav("s1")}<main><h1>${t().s1guide}</h1>${lang() === "en" ? en : zh}</main>`;
}

function applyPage() {
  const zh = `<div class="prose">
    <p>中一級課外活動報名，須以學校 <strong>MKPC Google 帳戶</strong>登入系統提交：<a href="https://attendance-of-ex.web.app/eca-registration/?lang=zh" rel="noopener" target="_blank">https://attendance-of-ex.web.app/eca-registration/?lang=zh</a>。每個帳戶只可遞交一份表格；報名期內可修改後再儲存。本網頁僅供說明，並不收集個人資料。</p>
    <h2>步驟</h2>
    <ol>
      <li>請先細閱「<a href="#/s1">課外活動須知</a>」，並核對班別、學號及姓名。各組時間及地點載於「<a href="#/clubs">課外活動</a>」。</li>
      <li>報名日期：<strong>2026年9月15日至19日</strong>（香港時間）。期滿後不得再作修改。</li>
      <li>星期一、三、四及五，每日須填報<strong>三個志願</strong>，不得重複。星期二為科創活動，稍後由老師安排，無須選報。</li>
      <li>星期一、四及五之第一志願，須涵蓋至少兩個範疇（學術、體育、藝術／音樂），不得三日均選體育，或三日均選音樂／藝術。</li>
      <li>跨天活動（女子籃球、男子籃球、跳舞、田徑、足球）如選作第一志願，其他開班日子將一併鎖定。手鈴與手鐘屬不同活動。</li>
      <li>須面試／選拔之隊伍，僅已獲選拔之同學方可選報；尚未面試或未獲選者，只可選報無需面試之活動。已獲選拔者可選報該隊，亦可選報其他活動；如將該隊填作第一志願，編配時將予優先。</li>
      <li>部分樂器班須填報級別。填妥後請按「確認並儲存」。</li>
    </ol>
    <h2>查詢</h2>
    <p>學生發展部（課外活動）。學校網站：<a href="https://www.mkpc.edu.hk/">mkpc.edu.hk</a>。</p>
  </div>`;
  const en = `<div class="prose">
    <p>Secondary 1 students shall submit their extracurricular activity applications, using a school <strong>MKPC Google account</strong>, at <a href="https://attendance-of-ex.web.app/eca-registration/?lang=en" rel="noopener" target="_blank">https://attendance-of-ex.web.app/eca-registration/?lang=en</a>. Each account may submit one form only. Amendments may be saved during the application period. This webpage is for information only and does not collect personal data.</p>
    <h2>Procedure</h2>
    <ol>
      <li>Students shall first read the <a href="#/s1">ECA notes</a> and verify their class, student number and name. Times and venues are set out under <a href="#/clubs">clubs</a>.</li>
      <li>Application period: <strong>15 to 19 September 2026</strong> (Hong Kong time). No amendment will be accepted after the closing date.</li>
      <li>On Monday, Wednesday, Thursday and Friday, students shall enter <strong>three preferences</strong> for each day. Duplication on the same day is not permitted. Tuesday is InnoTech, to be arranged by teachers later; students need not choose a Tuesday activity.</li>
      <li>First preferences on Monday, Thursday and Friday shall cover at least two domains (academic, sports, and arts/music). Students shall not select sports as the first preference on all three days, nor arts/music as the first preference on all three days.</li>
      <li>Where a multi-day activity (Girls’ Basketball, Boys’ Basketball, Dance, Athletics or Football) is entered as the first preference, the remaining scheduled days of that activity will be locked accordingly. Handbells and handchimes are distinct activities.</li>
      <li>Activities requiring an interview or trial may be selected only by students who have already been offered a place. Students who have not attended or have not been selected may choose only activities that do not require a trial. Students who have been selected may still choose other activities; if the team concerned is entered as the first preference, allocation will give it priority.</li>
      <li>Certain instrumental classes require a stated level. Students shall then select “Confirm and save”.</li>
    </ol>
    <h2>Enquiries</h2>
    <p>Department of Student Affairs (Extracurricular Activities). School website: <a href="https://www.mkpc.edu.hk/">mkpc.edu.hk</a>.</p>
  </div>`;
  return `${nav("apply")}<main><h1>${t().apply}</h1>${lang() === "en" ? en : zh}</main>`;
}
function teamsStore() {
  return window.ECA_TEAMS || { events: [], results: [] };
}
function pad2(n) {
  return String(n).padStart(2, "0");
}
function ymParts(params) {
  const now = new Date();
  const m = String(params?.get("ym") || "").match(/^(\d{4})-(\d{2})$/);
  let y = m ? +m[1] : now.getFullYear();
  let mo = m ? +m[2] : now.getMonth() + 1;
  if (mo < 1) {
    mo = 12;
    y--;
  }
  if (mo > 12) {
    mo = 1;
    y++;
  }
  return { y, mo };
}
function shiftYm(y, mo, d) {
  mo += d;
  if (mo < 1) {
    mo = 12;
    y--;
  }
  if (mo > 12) {
    mo = 1;
    y++;
  }
  return `${y}-${pad2(mo)}`;
}
function teamsPage(params) {
  const L = t();
  const { y, mo } = ymParts(params);
  const events = teamsStore().events || [];
  const results = teamsStore().results || [];
  const prefix = `${y}-${pad2(mo)}-`;
  const monthEvents = events.filter((e) => String(e.date).startsWith(prefix));
  const byDay = new Map();
  for (const e of monthEvents) {
    const d = String(e.date).slice(8, 10);
    if (!byDay.has(d)) byDay.set(d, []);
    byDay.get(d).push(e);
  }
  const first = new Date(y, mo - 1, 1);
  const dim = new Date(y, mo, 0).getDate();
  const today = new Date();
  const isThis = today.getFullYear() === y && today.getMonth() + 1 === mo;
  const wd = lang() === "en" ? ["S", "M", "T", "W", "T", "F", "S"] : ["日", "一", "二", "三", "四", "五", "六"];
  const title =
    lang() === "en" ? first.toLocaleString("en", { month: "long", year: "numeric" }) : `${y}年${mo}月`;
  const cells = [];
  for (let i = 0; i < first.getDay(); i++) cells.push(`<div class="cal-cell is-pad"></div>`);
  for (let d = 1; d <= dim; d++) {
    const evs = byDay.get(pad2(d)) || [];
    const cls = ["cal-cell", evs.length ? "has-ev" : "", isThis && today.getDate() === d ? "is-today" : ""]
      .filter(Boolean)
      .join(" ");
    const bits = evs
      .map((e) => {
        const club = findClub(e.team);
        const name = club ? clubName(club) : e.team;
        const tt = lang() === "en" ? e.titleEn || e.titleZh : e.titleZh || e.titleEn;
        return `<span class="cal-ev">${escapeHtml(name)}${tt ? " · " + escapeHtml(tt) : ""}</span>`;
      })
      .join("");
    cells.push(`<div class="${cls}"><span class="cal-d">${d}</span>${bits}</div>`);
  }
  const monthList = monthEvents
    .slice()
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))
    .map((e) => {
      const club = findClub(e.team);
      const name = club ? clubName(club) : e.team;
      const tt = lang() === "en" ? e.titleEn || e.titleZh : e.titleZh || e.titleEn;
      const href = club ? `#/club/${encodeId(club.id)}` : "#/teams";
      return `<a class="hl" href="${href}"><time>${escapeHtml(e.date)}</time><span>${escapeHtml(name)}${tt ? ` · ${escapeHtml(tt)}` : ""}${e.venue ? `<span class="meta">${escapeHtml(e.venue)}</span>` : ""}</span></a>`;
    })
    .join("");
  const sports = ECA.clubs.filter((c) => c.category === "sports");
  const extra = [];
  for (const r of results) {
    if (!sports.some((c) => c.id === r.team || c.nameZh === r.team || c.nameEn === r.team)) {
      extra.push({ id: r.team, nameZh: r.team, nameEn: r.team, category: "sports" });
    }
  }
  const cards = [...sports, ...extra]
    .map((c) => {
      const r = results.find((x) => x.team === c.id || x.team === c.nameZh || x.team === c.nameEn);
      const status = r
        ? lang() === "en"
          ? r.statusEn || r.statusZh
          : r.statusZh || r.statusEn
        : L.pendingResult;
      const matches = (r?.matches || [])
        .map((m) => {
          const vs = lang() === "en" ? m.vsEn || m.vsZh : m.vsZh || m.vsEn;
          let out = "";
          if (m.win === true) out = L.win;
          else if (m.win === false) out = L.lose;
          else if (m.draw) out = L.draw;
          return `<li><time>${escapeHtml(m.date || "")}</time> ${escapeHtml(vs || "")}${m.score ? ` ${escapeHtml(m.score)}` : ""}${out ? ` · ${out}` : ""}</li>`;
        })
        .join("");
      const href = findClub(c.id) ? `#/club/${encodeId(c.id)}` : "#/teams";
      return `<article class="team-card">
        <h3><a href="${href}">${escapeHtml(clubName(c))}</a></h3>
        <p class="meta">${escapeHtml(status || L.pendingResult)}</p>
        ${matches ? `<ul class="team-matches">${matches}</ul>` : ""}
      </article>`;
    })
    .join("");
  return `${nav("teams")}<main>
    <h1>${L.teams}</h1>
    <h2>${L.calTitle}</h2>
    <div class="cal-nav">
      <a href="#/teams?ym=${shiftYm(y, mo, -1)}">‹</a>
      <span>${escapeHtml(title)}</span>
      <a href="#/teams?ym=${shiftYm(y, mo, 1)}">›</a>
    </div>
    <div class="cal-grid">
      ${wd.map((w) => `<div class="cal-wd">${w}</div>`).join("")}
      ${cells.join("")}
    </div>
    ${monthList ? `<div class="list" style="margin-top:16px">${monthList}</div>` : `<p class="empty">${L.noFixture}</p>`}
    <h2 style="margin-top:36px">${L.resultsTitle}</h2>
    <div class="team-list">${cards}</div>
  </main>`;
}

function contactPage() {
  const zh = `<div class="prose">
    <h2>學生發展部（課外活動）</h2>
    <p>組別內容請先問負責老師。一般查詢可經校務處轉學生發展部。</p>
    <h2>學校</h2>
    <p>萬鈞伯裘書院<br>新界元朗天水圍天華路 51 號</p>
    <p>電話：<a href="tel:+85224482960">2448 2960</a><br>
    電郵：<a href="mailto:enquiries@mkpc.edu.hk">enquiries@mkpc.edu.hk</a><br>
    傳真：2447 1924</p>
    <p>辦公時間：星期一至五 08:30–17:00；星期六 09:00–12:30</p>
    <p>網站：<a href="https://www.mkpc.edu.hk/">mkpc.edu.hk</a></p>
  </div>`;
  const en = `<div class="prose">
    <h2>Department of Student Affairs (ECA)</h2>
    <p>Ask the teacher-in-charge about a club. General enquiries go through the General Office.</p>
    <h2>School</h2>
    <p>Man Kwan Pak Kau College<br>51 Tin Wah Road, Tin Shui Wai, Yuen Long, N.T.</p>
    <p>Tel: <a href="tel:+85224482960">2448 2960</a><br>
    Email: <a href="mailto:enquiries@mkpc.edu.hk">enquiries@mkpc.edu.hk</a><br>
    Fax: 2447 1924</p>
    <p>Office hours: Mon–Fri 08:30–17:00; Sat 09:00–12:30</p>
    <p>Website: <a href="https://www.mkpc.edu.hk/">mkpc.edu.hk</a></p>
  </div>`;
  return `${nav("contact")}<main><h1>${t().contact}</h1>${lang() === "en" ? en : zh}</main>`;
}

function postedNews() {
  return window.ECA_NEWS || [];
}

function findClub(name) {
  return ECA.clubs.find((x) => x.id === name || x.nameZh === name || x.nameEn === name);
}

function paperDate(iso) {
  const d = iso ? new Date(iso + "T00:00:00") : new Date();
  if (Number.isNaN(d.getTime())) return iso || "";
  if (lang() === "en") {
    return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 · 星期${"日一二三四五六"[d.getDay()]}`;
}

function newsImg(club) {
  return club?.cover || (club?.photos && club.photos[0]) || "img/coming-soon.jpg";
}

function newsItems() {
  const posts = postedNews().map((p) => {
    const club = p.club ? findClub(p.club) : null;
    return {
      date: p.date,
      title: lang() === "en" ? p.titleEn || p.titleZh : p.titleZh || p.titleEn,
      href: p.id ? `#/news/${encodeId(p.id)}` : club ? `#/club/${encodeId(club.id)}` : "#/news",
      extra: lang() === "en" ? p.bodyEn || p.bodyZh : p.bodyZh || p.bodyEn,
      trial: false,
      img: p.photo || newsImg(club),
    };
  });
  const trials = (ECA.highlights || []).map((h) => {
    const club = clubFromHighlight(h);
    return {
      date: h.date,
      title: lang() === "en" ? h.titleEn || h.titleZh : h.titleZh,
      href: highlightHref(h),
      extra: "",
      trial: true,
      img: newsImg(club),
    };
  });
  return [...posts, ...trials].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function newsDek(n, max) {
  const extra = n.extra ? n.extra.split("\n").map((s) => s.trim()).find(Boolean) || "" : "";
  if (extra) return extra.length > max ? extra.slice(0, max) + "…" : extra;
  return n.trial
    ? lang() === "en"
      ? `Selection: ${paperDate(n.date)}.`
      : `選拔日期：${paperDate(n.date)}。`
    : "";
}

function npCard(n, kind) {
  const L = t();
  const dek = newsDek(n, kind === "hero" ? 120 : 64);
  const h = kind === "hero" ? "h2" : "h3";
  return `<a class="np-${kind}" href="${n.href}">
    <img src="${encodeURI(n.img)}" alt="" />
    <div>
      <span class="np-tag">${n.trial ? L.newsTrial : L.news}</span>
      <${h}>${escapeHtml(n.title)}</${h}>
      ${kind === "row" ? "" : dek ? `<p>${escapeHtml(dek)}</p>` : ""}
      <time>${escapeHtml(n.date)}</time>
    </div>
  </a>`;
}

function newsPage() {
  const L = t();
  const items = newsItems();
  if (!items.length) {
    return `${nav("news")}<main class="np"><div class="np-mast"><h1>${L.news}</h1><span>${paperDate()}</span></div><p class="empty">${L.noNews}</p></main>`;
  }
  const hero = items[0];
  const rail = items.slice(1, 5);
  const cards = items.slice(5, 9);
  const rest = items.slice(9);
  const tick = items
    .slice(0, 6)
    .map((n) => `<a href="${n.href}">${escapeHtml(n.title)}</a>`)
    .join("<span>·</span>");
  return `${nav("news")}<main class="np">
    <div class="np-mast">
      <div>
        <p class="np-kicker">${escapeHtml(L.school)} · ${escapeHtml(L.paperDept)}</p>
        <h1>${L.news}</h1>
      </div>
      <span>${paperDate()}</span>
    </div>
    <div class="np-tick"><b>${L.paperTick}</b>${tick}</div>
    <div class="np-front">
      ${npCard(hero, "hero")}
      <div class="np-rail">${rail.map((n) => npCard(n, "rail")).join("")}</div>
    </div>
    ${cards.length ? `<h2 class="np-more">${L.paperMore}</h2><div class="np-cards">${cards.map((n) => npCard(n, "card")).join("")}</div>` : ""}
    ${rest.length ? `<div class="np-list">${rest.map((n) => npCard(n, "row")).join("")}</div>` : ""}
  </main>`;
}

function storyPage(id) {
  const L = t();
  const p = postedNews().find((x) => x.id === id);
  if (!p) {
    return `${nav("story")}<main class="np"><p class="empty">${L.noNews}</p><p><a class="back" href="#/news">${L.backNews}</a></p></main>`;
  }
  const title = lang() === "en" ? p.titleEn || p.titleZh : p.titleZh || p.titleEn;
  const body = lang() === "en" ? p.bodyEn || p.bodyZh : p.bodyZh || p.bodyEn;
  const club = p.club ? findClub(p.club) : null;
  const img = p.photo || newsImg(club);
  return `${nav("story")}<main class="np np-article">
    <a class="back" href="#/news">${L.backNews}</a>
    <p class="np-tag">${L.news}</p>
    <h1>${escapeHtml(title)}</h1>
    <p class="np-byline">${escapeHtml(paperDate(p.date))}${club ? ` · <a href="#/club/${encodeId(club.id)}">${escapeHtml(clubName(club))}</a>` : ""}</p>
    <img class="np-wide" src="${encodeURI(img)}" alt="" />
    <div class="np-body">${body ? `<p>${escapeHtml(body).replace(/\n/g, "<br>")}</p>` : ""}</div>
  </main>`;
}

function footer() {
  return `<footer><span>© ${new Date().getFullYear()} <a href="https://www.mkpc.edu.hk/">萬鈞伯裘書院</a> · 學生發展部 · ${ECA.generated}</span></footer>`;
}

function bind() {
  document.getElementById("langBtn")?.addEventListener("click", () => {
    localStorage.setItem("eca-lang", lang() === "zh" ? "en" : "zh");
    render();
  });
  const r = parseRoute();
  const s1cat = document.getElementById("s1cat");
  if (r.page === "s1" && s1cat) {
    s1cat.addEventListener("change", () => {
      const p = new URLSearchParams();
      p.set("day", s1PickDay(r.params, s1Form().dayOrder || []));
      if (s1cat.value) p.set("cat", s1cat.value);
      location.hash = "#/s1?" + p.toString();
    });
  }
  const q = document.getElementById("q");
  const cat = document.getElementById("cat");
  const day = document.getElementById("day");
  const sync = () => {
    const p = new URLSearchParams();
    if (r.page === "timetable") {
      p.set("day", r.params?.get("day") || todayKey());
      if (cat?.value) p.set("cat", cat.value);
      location.hash = "#/timetable?" + p.toString();
      return;
    }
    if (q?.value) p.set("q", q.value);
    if (cat?.value) p.set("cat", cat.value);
    if (day?.value) p.set("day", day.value);
    const qs = p.toString();
    location.hash = "#/clubs" + (qs ? "?" + qs : "");
  };
  q?.addEventListener("input", () => {
    clearTimeout(q._t);
    q._t = setTimeout(sync, 200);
  });
  cat?.addEventListener("change", sync);
  day?.addEventListener("change", sync);
  const lb = document.getElementById("lb");
  document.querySelectorAll("[data-full]").forEach((el) => {
    el.addEventListener("click", () => {
      if (!lb) return;
      lb.querySelector("img").src = el.getAttribute("data-full") || el.src;
      lb.showModal();
    });
  });
  if (lb && !lb.onclick) lb.onclick = () => lb.close();
}

function render() {
  const r = parseRoute();
  let html = "";
  if (r.page === "clubs") html = clubsPage(r.params);
  else if (r.page === "club") html = clubPage(r.id);
  else if (r.page === "timetable") html = timetablePage(r.params);
  else if (r.page === "s1") html = s1Page(r.params);
  else if (r.page === "apply") html = applyPage();
  else if (r.page === "contact") html = contactPage();
  else html = home();
  document.getElementById("app").innerHTML = html + footer();
  document.title = (lang() === "en" ? "ECA" : "課外活動") + " · MKPC";
  bind();
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
