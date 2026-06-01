"use strict";
;
/// <reference path="domain/models/types.ts" />
const theme = {
    "gameTitle": "源平盛衰記 〜血戦源義経〜",
    "factions": {
        "Genji": { "id": "Genji", "name": "源氏", "themeColor": { "primary": "#3b82f6", "bgLight": "#dbeafe", "text": "#1e3a8a" } },
        "Heishi": { "id": "Heishi", "name": "平氏", "themeColor": { "primary": "#ef4444", "bgLight": "#fee2e2", "text": "#7f1d1d" } },
        "Neutral": { "id": "Neutral", "name": "諸国", "themeColor": { "primary": "#10b981", "bgLight": "#d1fae5", "text": "#065f46" } }
    },
    "territories": {
        "ou": { "id": "ou", "name": "奥羽", "subName": "平泉", "vpPerTurn": 0, "connections": [{ "targetId": "bandou", "routeType": "Normal" }] },
        "bandou": { "id": "bandou", "name": "坂東", "subName": "鎌倉", "vpPerTurn": 0, "connections": [{ "targetId": "ou", "routeType": "Normal" }, { "targetId": "toukai", "routeType": "Normal" }] },
        "toukai": { "id": "toukai", "name": "東海", "subName": "富士川・墨俣川", "vpPerTurn": 0, "connections": [{ "targetId": "bandou", "routeType": "Normal" }, { "targetId": "kinai", "routeType": "Normal" }, { "targetId": "hokuriku", "routeType": "Normal" }] },
        "hokuriku": { "id": "hokuriku", "name": "北陸", "subName": "倶利伽羅峠", "vpPerTurn": 0, "connections": [{ "targetId": "toukai", "routeType": "Normal" }, { "targetId": "kinai", "routeType": "Normal" }] },
        "kinai": { "id": "kinai", "name": "畿内", "subName": "京・一の谷", "vpPerTurn": 1, "connections": [{ "targetId": "toukai", "routeType": "Normal" }, { "targetId": "hokuriku", "routeType": "Normal" }, { "targetId": "chuugoku", "routeType": "Normal" }, { "targetId": "shikoku", "routeType": "Restricted" }] },
        "chuugoku": { "id": "chuugoku", "name": "中国", "subName": "壇の浦", "vpPerTurn": 0, "connections": [{ "targetId": "kinai", "routeType": "Normal" }, { "targetId": "kyuushu", "routeType": "Normal" }, { "targetId": "shikoku", "routeType": "Restricted" }] },
        "shikoku": { "id": "shikoku", "name": "四国", "subName": "屋島", "vpPerTurn": 0, "connections": [{ "targetId": "kinai", "routeType": "Restricted" }, { "targetId": "chuugoku", "routeType": "Restricted" }] },
        "kyuushu": { "id": "kyuushu", "name": "九州", "subName": "太宰府", "vpPerTurn": 0, "connections": [{ "targetId": "chuugoku", "routeType": "Normal" }] }
    },
    "generals": {
        "yoritomo": { id: "yoritomo", name: "源頼朝", currentFaction: "Genji", originalFaction: "Genji", locationId: "bandou", forces: 3, combat: 1, command: 6, rank: 3, homeRegionId: "bandou", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "noriyori": { id: "noriyori", name: "源範頼", currentFaction: "Genji", originalFaction: "Genji", locationId: "bandou", forces: 2, combat: 2, command: 4, rank: 2, homeRegionId: "toukai", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "yoshitsune": { id: "yoshitsune", name: "源義経", currentFaction: "Genji", originalFaction: "Genji", locationId: "bandou", forces: 1, combat: 4, command: 3, rank: 1, homeRegionId: "ou", moveSpeed: 2, movesLeft: 2, isFlipped: false },
        "munemori": { id: "munemori", name: "平宗盛", currentFaction: "Heishi", originalFaction: "Heishi", locationId: "kinai", forces: 3, combat: 1, command: 5, rank: 3, homeRegionId: "kinai", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "tomomori": { id: "tomomori", name: "平知盛", currentFaction: "Heishi", originalFaction: "Heishi", locationId: "kinai", forces: 2, combat: 2, command: 6, rank: 2, homeRegionId: "shikoku", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "noritsune": { id: "noritsune", name: "平教経", currentFaction: "Heishi", originalFaction: "Heishi", locationId: "kinai", forces: 0, combat: 3, command: 3, rank: 1, homeRegionId: "chuugoku", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "goshirakawa": { id: "goshirakawa", name: "後白河院", currentFaction: "Heishi", originalFaction: "Neutral", locationId: "kinai", forces: 0, combat: 1, command: 3, rank: 3, homeRegionId: "kinai", moveSpeed: 0, movesLeft: 0, isFlipped: false },
        "tokimasa": { id: "tokimasa", name: "北条時政", currentFaction: "Genji", originalFaction: "Genji", locationId: "Genji_Reserves", forces: 0, combat: 1, command: 1, rank: 5, homeRegionId: "bandou", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "sanetira": { id: "sanetira", name: "土肥実平", currentFaction: "Genji", originalFaction: "Genji", locationId: "Genji_Reserves", forces: 0, combat: 2, command: 3, rank: 1, homeRegionId: "bandou", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "kagetoki": { id: "kagetoki", name: "梶原景時", currentFaction: "Genji", originalFaction: "Genji", locationId: "Genji_Reserves", forces: 0, combat: 2, command: 4, rank: 1, homeRegionId: "bandou", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "kiyomune": { id: "kiyomune", name: "平清宗", currentFaction: "Heishi", originalFaction: "Heishi", locationId: "Heishi_Reserves", forces: 0, combat: 1, command: 1, rank: 3, homeRegionId: "kyuushu", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "shigehira": { id: "shigehira", name: "平重衡", currentFaction: "Heishi", originalFaction: "Heishi", locationId: "Heishi_Reserves", forces: 0, combat: 2, command: 3, rank: 1, homeRegionId: "kinai", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "tokitada": { id: "tokitada", name: "平時忠", currentFaction: "Heishi", originalFaction: "Heishi", locationId: "Heishi_Reserves", forces: 0, combat: 2, command: 4, rank: 1, homeRegionId: "hokuriku", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "yoshinaka": { id: "yoshinaka", name: "木曽義仲", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "hokuriku", forces: 0, combat: 3, command: 4, rank: 2, homeRegionId: "hokuriku", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "hidehira": { id: "hidehira", name: "藤原秀衡", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "ou", forces: 0, combat: 2, command: 3, rank: 2, homeRegionId: "ou", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "shigeyoshi": { id: "shigeyoshi", name: "阿波成良", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "shikoku", forces: 0, combat: 1, command: 1, rank: 5, homeRegionId: "shikoku", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "hirotsune": { id: "hirotsune", name: "上総広常", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "Pool", forces: 0, combat: 2, command: 2, rank: 1, homeRegionId: "bandou", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "yasuda": { id: "yasuda", name: "安田義定", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "Pool", forces: 0, combat: 1, command: 1, rank: 4, homeRegionId: "toukai", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "senoo": { id: "senoo", name: "妹尾兼康", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "Pool", forces: 0, combat: 1, command: 1, rank: 3, homeRegionId: "chuugoku", moveSpeed: 1, movesLeft: 1, isFlipped: false },
        "ogata": { id: "ogata", name: "緒方惟義", currentFaction: "Neutral", originalFaction: "Neutral", locationId: "Pool", forces: 0, combat: 1, command: 2, rank: 3, homeRegionId: "kyuushu", moveSpeed: 1, movesLeft: 1, isFlipped: false }
    },
    "timeline": [
        { "label": "一：1180年 治承四年" }, { "label": "ニ：1181年 養和元年" }, { "label": "三：1182年 寿永元年" },
        { "label": "四：1183年 寿永二年" }, { "label": "五：1184年 元暦元年" }, { "label": "六：1185年 文治元年" }
    ]
};
let state = {
    currentTurnIndex: 0, currentPhase: "Setup", activeFactionId: "Genji", scoreVP: { "Genji": 0, "Heishi": 0 },
    territories: {
        "ou": { id: "ou", garrisonForces: {} }, "bandou": { id: "bandou", garrisonForces: {} }, "toukai": { id: "toukai", garrisonForces: {} },
        "hokuriku": { id: "hokuriku", garrisonForces: { "Neutral": 1 } }, "kinai": { id: "kinai", garrisonForces: {} },
        "chuugoku": { id: "chuugoku", garrisonForces: {} }, "shikoku": { id: "shikoku", garrisonForces: { "Heishi": 1 } },
        "kyuushu": { id: "kyuushu", garrisonForces: {} }
    },
    generals: JSON.parse(JSON.stringify(theme.generals)),
    combatQueue: [], activeBattle: null
};
const territoryOwners = { "bandou": "Genji", "kinai": "Heishi", "shikoku": "Heishi", "hokuriku": "Neutral", "ou": "Neutral" };
const reinforcementPool = { "Genji": 0, "Heishi": 0 };
const hasReinforcedThisTurn = {};
const hasIntriguedThisTurn = {};
let selectedGeneralId = null;
function log(msg, color) {
    const logArea = document.getElementById('log-area');
    if (logArea) {
        const div = document.createElement('div');
        div.innerHTML = "> " + msg;
        if (color)
            div.style.color = color;
        logArea.appendChild(div);
        logArea.scrollTop = logArea.scrollHeight;
    }
}
function updateTimelineUI() {
    const turnInfo = document.getElementById('turn-info');
    if (turnInfo)
        turnInfo.textContent = theme.timeline[state.currentTurnIndex].label;
}
function resolveInitiative() {
    log("【主導権判定】", "#facc15");
    const gR = Math.floor(Math.random() * 6) + 1;
    const hR = Math.floor(Math.random() * 6) + 1;
    log(`源氏: [${gR}] / 平氏: [${hR}]`);
    state.activeFactionId = (gR >= hR) ? "Genji" : "Heishi";
    log(`${theme.factions[state.activeFactionId].name}が主導権を獲得！`);
    state.currentPhase = "Reinforcement";
    renderList();
    renderMap();
}
function getSupplyLines(faction) {
    const reachable = new Set();
    const queue = [];
    Object.keys(theme.territories).forEach(tid => {
        const isFriendly = (state.territories[tid].garrisonForces[faction] || 0) > 0 || Object.values(state.generals).some(g => g.locationId === tid && g.currentFaction === faction);
        if (isFriendly)
            queue.push(tid);
    });
    while (queue.length > 0) {
        const cur = queue.shift();
        if (reachable.has(cur))
            continue;
        reachable.add(cur);
        theme.territories[cur].connections.forEach(conn => {
            const n = conn.targetId;
            const isF = (state.territories[n].garrisonForces[faction] || 0) > 0 || Object.values(state.generals).some(g => g.locationId === n && g.currentFaction === faction);
            const isE = Object.keys(state.territories[n].garrisonForces).some(f => f !== faction && f !== "Neutral" && state.territories[n].garrisonForces[f] > 0) || Object.values(state.generals).some(g => g.locationId === n && g.currentFaction !== faction && g.currentFaction !== "Neutral");
            if (isF && !isE && !reachable.has(n))
                queue.push(n);
        });
    }
    return reachable;
}
function processReinforcement(tid) {
    if (state.currentPhase !== "Reinforcement")
        return;
    if (hasReinforcedThisTurn[tid]) {
        log("徴兵済み");
        return;
    }
    const f = state.activeFactionId;
    const gens = Object.values(state.generals).filter(g => g.locationId === tid && g.currentFaction === f);
    if (gens.length === 0) {
        log("武将不在につき徴兵不可");
        return;
    }
    const forces = Math.max(...gens.map(g => g.rank));
    reinforcementPool[f] += forces;
    hasReinforcedThisTurn[tid] = true;
    log(`${theme.territories[tid].name} で ${forces} 兵を獲得（プール: ${reinforcementPool[f]}）`);
    renderList();
    renderMap();
}
function assignToTerritory(tid) {
    const f = state.activeFactionId;
    if (reinforcementPool[f] <= 0)
        return;
    // 補給線チェックの追加
    const supplyLines = getSupplyLines(f);
    if (!supplyLines.has(tid)) {
        log("その領地には補給線が繋がっていません。");
        return;
    }
    state.territories[tid].garrisonForces[f] = (state.territories[tid].garrisonForces[f] || 0) + 1;
    reinforcementPool[f]--;
    log(`${theme.territories[tid].name} に 1 兵を配備`);
    renderList();
    renderMap();
}
function assignForce(gid) {
    const f = state.activeFactionId;
    const g = state.generals[gid];
    if (g.currentFaction !== f || reinforcementPool[f] <= 0)
        return;
    reinforcementPool[f]--;
    g.forces++;
    log(`${g.name} に配属`);
    renderList();
}
function attemptIntrigue(gid) {
    const f = state.activeFactionId;
    if (hasIntriguedThisTurn[f]) {
        log("調略は1ターンに1回までです。");
        return;
    }
    const g = state.generals[gid];
    if (g.currentFaction !== "Neutral")
        return;
    hasIntriguedThisTurn[f] = true;
    log(`【調略】 ${theme.factions[f].name} -> ${g.name}`, "#facc15");
    const r = Math.floor(Math.random() * 6) + 1;
    const target = 4 + g.rank;
    log(`判定: [${r}] / [${target}以上]で成功`);
    if (r >= target || r === 6) {
        g.currentFaction = f;
        log("成功！", "#60a5fa");
    }
    else
        log("失敗...");
    renderList();
}
function startNextCombat() {
    if (state.combatQueue.length === 0) {
        state.currentPhase = "Evaluation";
        log("全合戦が終了。判定へ。", "#10b981");
        evaluate();
        renderList();
        renderMap();
        return;
    }
    const tid = state.combatQueue.shift();
    state.activeBattle = { tid, round: 1, retreatDeclared: null };
    log(`--- ${theme.territories[tid].name} 合戦開始 ---`, "#ef4444");
    battleRound();
}
function battleRound() {
    if (!state.activeBattle)
        return;
    const { tid, round } = state.activeBattle;
    const att = selectCmd(tid, "Genji");
    const def = selectCmd(tid, "Heishi");
    if (!att || !def) {
        finalizeBattle(tid, att ? "Genji" : "Heishi", att ? "Heishi" : "Genji");
        return;
    }
    log(`【第 ${round} 合戦】 ${att.name} vs ${def.name}`);
    const aR = Array.from({ length: att.command }, () => Math.floor(Math.random() * 6) + 1);
    const dR = Array.from({ length: def.command }, () => Math.floor(Math.random() * 6) + 1);
    const aH = aR.filter(v => getHits(att.combat, def.combat).includes(v)).length;
    const dH = dR.filter(v => getHits(def.combat, att.combat).includes(v)).length;
    log(`源氏:[${aR}]->${aH} / 平氏:[${dR}]->${dH}`);
    dmg(tid, "Heishi", aH);
    dmg(tid, "Genji", dH);
    state.activeBattle.round++;
    renderList();
    renderMap();
    const aL = getForceSum(tid, "Genji");
    const dL = getForceSum(tid, "Heishi");
    if (aL <= 0 || dL <= 0) {
        finalizeBattle(tid, aL > 0 ? "Genji" : "Heishi", aL > 0 ? "Heishi" : "Genji");
    }
    else {
        log("「退却」するか「進める」か選んでください。");
        showRetreatControls(tid);
    }
}
function showRetreatControls(tid) {
    const logArea = document.getElementById('log-area');
    const div = document.createElement('div');
    div.style.margin = "5px 0";
    div.innerHTML = `
        <button onclick="declareRetreat('${tid}', 'Genji')">源氏退却</button>
        <button onclick="declareRetreat('${tid}', 'Heishi')">平氏退却</button>
    `;
    logArea.appendChild(div);
    logArea.scrollTop = logArea.scrollHeight;
}
window.declareRetreat = (tid, faction) => {
    log(`${theme.factions[faction].name}が退却を宣言！`);
    const winner = faction === "Genji" ? "Heishi" : "Genji";
    finalizeBattle(tid, winner, faction);
};
function getForceSum(tid, f) {
    return (state.territories[tid].garrisonForces[f] || 0) + Object.values(state.generals).filter(g => g.locationId === tid && g.currentFaction === f).reduce((s, g) => s + g.forces, 0);
}
function dmg(tid, f, h) {
    let r = h;
    const g = state.territories[tid].garrisonForces[f] || 0;
    const gL = Math.min(g, r);
    state.territories[tid].garrisonForces[f] -= gL;
    r -= gL;
    if (r > 0) {
        const gens = Object.values(state.generals).filter(g => g.locationId === tid && g.currentFaction === f);
        for (const gen of gens) {
            const fL = Math.min(gen.forces, r);
            gen.forces -= fL;
            r -= fL;
            if (r <= 0)
                break;
        }
    }
    if (r > 0) {
        const gens = Object.values(state.generals).filter(g => g.locationId === tid && g.currentFaction === f);
        for (let i = 0; i < r; i++)
            if (gens.length > 0)
                cas(gens[i % gens.length]);
    }
}
function cas(g) {
    const r = Math.floor(Math.random() * 6) + 1;
    log(`討取判定 (${g.name}): [${r}]`);
    if (r <= 2)
        log("生存");
    else {
        g.locationId = "Removed";
        log(`${r <= 4 ? "捕縛" : "討取"}！`, "#ef4444");
    }
}
function finalizeBattle(tid, w, l) {
    log(`*** ${theme.territories[tid].name} 決着 ***`, "#fbbf24");
    const losers = Object.values(state.generals).filter(g => g.locationId === tid && g.currentFaction === l && g.id !== "goshirakawa");
    const rt = theme.territories[tid].connections.find(c => !Object.keys(state.territories[c.targetId].garrisonForces).some(f => f !== l && state.territories[c.targetId].garrisonForces[f] > 0));
    if (rt) {
        losers.forEach(g => { g.locationId = rt.targetId; log(`${g.name} 退却。`); });
        state.territories[rt.targetId].garrisonForces[l] = (state.territories[rt.targetId].garrisonForces[l] || 0) + (state.territories[tid].garrisonForces[l] || 0);
    }
    else
        losers.forEach(g => { g.locationId = "Removed"; log(`${g.name} 全滅。`); });
    state.territories[tid].garrisonForces[l] = 0;
    territoryOwners[tid] = w;
    Object.values(state.generals).forEach(g => {
        if (g.locationId === tid) {
            if (g.id === "goshirakawa" && g.currentFaction !== w) {
                g.currentFaction = w;
                log("後白河院確保！", "#60a5fa");
            }
            else if (g.currentFaction === "Neutral") {
                g.isFlipped = true;
                g.combat = 1;
                g.command = 1;
                g.rank = 1;
                g.name = `${theme.territories[tid].name}武者`;
                log(`${g.name} 誕生。`);
            }
        }
    });
    state.activeBattle = null;
    startNextCombat();
}
function evaluate() {
    log("【評定フェイズ】", "#10b981");
    Object.keys(theme.territories).forEach(tid => {
        const f = state.territories[tid].garrisonForces;
        const gens = Object.values(state.generals).filter(g => g.locationId === tid);
        if (f["Genji"] > 0 || gens.some(g => g.currentFaction === "Genji"))
            territoryOwners[tid] = "Genji";
        else if (f["Heishi"] > 0 || gens.some(g => g.currentFaction === "Heishi"))
            territoryOwners[tid] = "Heishi";
        // データ駆動型 VP 加算
        const owner = territoryOwners[tid];
        if (owner && theme.territories[tid].vpPerTurn > 0) {
            state.scoreVP[owner] += theme.territories[tid].vpPerTurn;
            log(`${theme.factions[owner].name}：${theme.territories[tid].name}支配 ${theme.territories[tid].vpPerTurn} VP獲得`);
        }
    });
    const y = state.generals["yoshinaka"];
    const i = state.generals["goshirakawa"];
    if (y.currentFaction === i.currentFaction && y.locationId !== "Removed") {
        const r = Math.floor(Math.random() * 6) + 1;
        log(`義仲裏切り判定: [${r}]`);
        if (r === 1) {
            const prevF = y.currentFaction;
            const nextF = prevF === "Genji" ? "Heishi" : "Genji";
            y.currentFaction = nextF;
            log(`義仲が寝返った！`, "#f43f5e");
            const loc = y.locationId;
            if (loc && state.territories[loc]) {
                const f = state.territories[loc].garrisonForces;
                const forces = f[prevF] || 0;
                f[prevF] = 0;
                f[nextF] = (f[nextF] || 0) + forces;
                territoryOwners[loc] = nextF;
                log(`${theme.territories[loc].name}の軍勢も寝返った！`);
            }
        }
    }
}
function selectCmd(tid, f) {
    const gens = Object.values(state.generals).filter(g => g.locationId === tid && g.currentFaction === f);
    if (gens.length === 0)
        return null;
    const emp = gens.find(g => g.id === "goshirakawa");
    if (emp)
        return emp;
    return gens.reduce((p, c) => (c.rank > p.rank ? c : p));
}
function getHits(a, d) {
    const diff = a - d;
    if (diff >= 5)
        return [1, 2, 3, 4, 5, 6];
    if (diff === 4)
        return [2, 3, 4, 5, 6];
    if (diff === 3)
        return [3, 4, 5, 6];
    if (diff === 2)
        return [4, 5, 6];
    if (diff === 1)
        return [5, 6];
    return [6];
}
function moveGeneral(generalId, targetId) {
    var _a;
    if (generalId === "goshirakawa") {
        log("後白河院は移動できません。");
        return;
    }
    const g = state.generals[generalId];
    const originId = g.locationId;
    const conn = (_a = theme.territories[originId]) === null || _a === void 0 ? void 0 : _a.connections.find((c) => c.targetId === targetId);
    if (!conn)
        return;
    const gar = state.territories[originId].garrisonForces[g.currentFaction] || 0;
    if (gar > 0) {
        state.territories[originId].garrisonForces[g.currentFaction] = 0;
        g.forces += gar;
        log(`${g.name}が軍勢${gar}を吸収`);
    }
    g.locationId = targetId;
    log(`${g.name}移動`);
    if (g.movesLeft === undefined)
        g.movesLeft = g.moveSpeed;
    const enemy = Object.keys(state.territories[targetId].garrisonForces).some(f => f !== "Neutral" && f !== g.currentFaction && state.territories[targetId].garrisonForces[f] > 0);
    if (enemy || conn.routeType === "Restricted")
        g.movesLeft = 0;
    else
        g.movesLeft -= 1;
    if (g.movesLeft <= 0)
        selectedGeneralId = null;
    renderMap();
    renderList();
}
function renderMap() {
    const area = document.getElementById('map-area');
    area.innerHTML = '';
    const coords = { "ou": { x: 700, y: 50 }, "bandou": { x: 600, y: 150 }, "toukai": { x: 500, y: 250 }, "hokuriku": { x: 400, y: 150 }, "kinai": { x: 350, y: 300 }, "chuugoku": { x: 200, y: 350 }, "shikoku": { x: 250, y: 450 }, "kyuushu": { x: 100, y: 500 } };
    let svg = '<svg>';
    Object.entries(theme.territories).forEach(([id, t]) => {
        t.connections.forEach(conn => {
            const s = coords[id];
            const e = coords[conn.targetId];
            if (s && e)
                svg += `<line x1="${s.x + 40}" y1="${s.y + 30}" x2="${e.x + 40}" y2="${e.y + 30}" stroke="${conn.routeType === 'Restricted' ? '#f59e0b' : '#555'}" stroke-width="3" ${conn.routeType === 'Restricted' ? 'stroke-dasharray="5,5"' : ''} />`;
        });
    });
    area.innerHTML = svg + '</svg>';
    const f = state.activeFactionId;
    const supplyLines = state.currentPhase === "Reinforcement" ? getSupplyLines(f) : new Set();
    Object.entries(theme.territories).forEach(([id, t]) => {
        const node = document.createElement('div');
        node.className = 'territory-node';
        node.style.left = coords[id].x + 'px';
        node.style.top = coords[id].y + 'px';
        if (selectedGeneralId && state.generals[selectedGeneralId].locationId === id)
            node.style.borderColor = "#facc15";
        if (selectedGeneralId && state.currentPhase === "Action") {
            if (theme.territories[state.generals[selectedGeneralId].locationId].connections.some(c => c.targetId === id))
                node.style.boxShadow = "0 0 15px #facc15";
        }
        else if (state.currentPhase === "Reinforcement" && reinforcementPool[f] > 0 && supplyLines.has(id))
            node.style.boxShadow = "0 0 15px #10b981";
        node.onclick = () => {
            if (state.currentPhase === "Reinforcement") {
                if (reinforcementPool[f] > 0 && supplyLines.has(id))
                    assignToTerritory(id);
                else
                    processReinforcement(id);
            }
            else if (state.currentPhase === "Action") {
                if (selectedGeneralId) {
                    if (selectedGeneralId === "goshirakawa") {
                        selectedGeneralId = null;
                        renderMap();
                        renderList();
                        return;
                    }
                    moveGeneral(selectedGeneralId, id);
                }
                else {
                    const g = Object.values(state.generals).find(x => x.locationId === id && x.currentFaction === state.activeFactionId && (x.movesLeft === undefined || x.movesLeft > 0) && x.id !== "goshirakawa");
                    if (g) {
                        selectedGeneralId = g.id;
                        renderMap();
                        renderList();
                    }
                }
            }
        };
        const owner = territoryOwners[id];
        if (owner && theme.factions[owner])
            node.style.backgroundColor = theme.factions[owner].themeColor.primary;
        node.innerHTML = `<strong>${t.name}</strong><br><small>${t.subName}</small><br>兵:${Object.values(state.territories[id].garrisonForces).reduce((a, b) => a + b, 0)}`;
        area.appendChild(node);
    });
}
function renderList() {
    var _a;
    const list = document.getElementById('general-list');
    const fColor = ((_a = theme.factions[state.activeFactionId]) === null || _a === void 0 ? void 0 : _a.themeColor.primary) || "#333";
    const sorted = Object.values(state.generals).filter(g => g.locationId !== "Removed" && g.locationId !== "Pool" && !g.locationId.includes("Reserves")).sort((a, b) => a.name.localeCompare(b.name));
    let header = `<div style="margin-bottom:10px; padding:10px; border:3px solid ${fColor}; background:#111; text-align:center;">
        <div style="font-weight:bold; color:${fColor}">${theme.factions[state.activeFactionId].name}の番</div>
        <div style="font-size:0.8rem">フェイズ: ${state.currentPhase}</div>
        ${state.currentPhase === "Reinforcement" ? `プール: ${reinforcementPool[state.activeFactionId]}` : ""}
        <div style="font-size:0.7rem; margin-top:5px; border-top:1px solid #444;">VP: 源氏 ${state.scoreVP.Genji} / 平氏 ${state.scoreVP.Heishi}</div></div>`;
    list.innerHTML = header + `<table style="width:100%; font-size:0.7rem;"><thead><tr><th>陣営</th><th>武将</th><th>場所</th><th>兵</th><th>操作</th></tr></thead><tbody>` +
        sorted.map(g => {
            var _a, _b;
            let act = "";
            if (state.currentPhase === "Reinforcement" && reinforcementPool[state.activeFactionId] > 0 && g.currentFaction === state.activeFactionId)
                act = `<button onclick="assignForce('${g.id}')">配属</button>`;
            else if (state.currentPhase === "Action" && g.currentFaction === state.activeFactionId && (g.movesLeft === undefined || g.movesLeft > 0) && g.id !== "goshirakawa")
                act = `<button onclick="selectedGeneralId='${g.id}'; renderMap(); renderList();">選択</button>`;
            else if (state.currentPhase === "Intrigue" && g.currentFaction === "Neutral" && !hasIntriguedThisTurn[state.activeFactionId])
                act = `<button onclick="attemptIntrigue('${g.id}')">調略</button>`;
            return `<tr><td><span class="badge" style="background-color:${(_a = theme.factions[g.currentFaction]) === null || _a === void 0 ? void 0 : _a.themeColor.primary}">${g.currentFaction}</span></td><td>${g.name}${g.isFlipped ? " (武者)" : ""}</td><td>${(_b = theme.territories[g.locationId]) === null || _b === void 0 ? void 0 : _b.name}</td><td style="text-align:center;">${g.forces}</td><td>${act}</td></tr>`;
        }).join('') + `</tbody></table>`;
}
function initApp() {
    const c = document.getElementById('log-area').parentElement;
    const btn = document.createElement('button');
    btn.textContent = "新規開始";
    btn.onclick = () => {
        const p = ["hirotsune", "yasuda", "senoo", "ogata"];
        p.sort(() => Math.random() - 0.5);
        state.generals[p[0]].currentFaction = "Genji";
        state.generals[p[0]].locationId = state.generals[p[0]].homeRegionId;
        state.generals[p[1]].currentFaction = "Heishi";
        state.generals[p[1]].locationId = state.generals[p[1]].homeRegionId;
        [p[2], p[3]].forEach(id => {
            const g = state.generals[id];
            g.locationId = g.homeRegionId;
            const isWest = ["kinai", "chuugoku", "shikoku", "kyuushu"].includes(g.homeRegionId);
            if (!isWest)
                log(`${g.name}が東国で挙兵（中立）`);
            else
                log(`${g.name}が西国で挙兵（中立）`);
        });
        state.currentTurnIndex = 0;
        updateTimelineUI();
        resolveInitiative();
        btn.remove();
        document.getElementById('end-turn-btn').style.display = "inline-block";
    };
    c.insertBefore(btn, c.firstChild);
    const endBtn = document.createElement('button');
    endBtn.id = "end-turn-btn";
    endBtn.textContent = "進める / 手番終了";
    endBtn.style.display = "none";
    endBtn.onclick = () => {
        if (state.activeBattle) {
            battleRound();
            return;
        }
        if (state.currentPhase === "Reinforcement") {
            if (state.activeFactionId === "Genji") {
                state.activeFactionId = "Heishi";
                log("補充(平氏)");
            }
            else {
                state.currentPhase = "Intrigue";
                state.activeFactionId = "Genji";
                log("調略(源氏)");
            }
        }
        else if (state.currentPhase === "Intrigue") {
            if (state.activeFactionId === "Genji") {
                state.activeFactionId = "Heishi";
                log("調略(平氏)");
            }
            else {
                state.currentPhase = "Action";
                state.activeFactionId = "Genji";
                log("行動(源氏)");
            }
        }
        else if (state.currentPhase === "Action") {
            if (state.activeFactionId === "Genji") {
                state.activeFactionId = "Heishi";
                log("行動(平氏)");
            }
            else {
                state.currentPhase = "Combat";
                log("合戦解決...");
                state.combatQueue = Object.keys(theme.territories).filter(tid => { const fs = Array.from(new Set([...Object.keys(state.territories[tid].garrisonForces).filter(f => state.territories[tid].garrisonForces[f] > 0), ...Object.values(state.generals).filter(g => g.locationId === tid).map(g => g.currentFaction)])).filter(f => f === "Genji" || f === "Heishi"); return fs.length >= 2; });
                startNextCombat();
            }
        }
        else if (state.currentPhase === "Combat") {
            state.currentPhase = "Evaluation";
            log("判定開始");
        }
        else if (state.currentPhase === "Evaluation") {
            state.currentTurnIndex++;
            if (state.currentTurnIndex >= theme.timeline.length) {
                const winner = state.scoreVP.Genji > state.scoreVP.Heishi ? "源氏" : (state.scoreVP.Heishi > state.scoreVP.Genji ? "平氏" : "引き分け");
                log(`*** ゲーム終了：${winner}の勝利！ ***`, "#fbbf24");
                return;
            }
            state.currentPhase = "Initiative";
            resolveInitiative();
            updateTimelineUI();
        }
        Object.keys(hasReinforcedThisTurn).forEach(k => delete hasReinforcedThisTurn[k]);
        Object.keys(hasIntriguedThisTurn).forEach(k => delete hasIntriguedThisTurn[k]);
        Object.values(state.generals).forEach(g => g.movesLeft = g.moveSpeed);
        selectedGeneralId = null;
        renderList();
        renderMap();
    };
    c.insertBefore(endBtn, c.firstChild);
    renderMap();
    renderList();
    log("「新規開始」を押してください。");
}
window.assignForce = assignForce;
window.attemptIntrigue = attemptIntrigue;
window.assignToTerritory = assignToTerritory;
window.addEventListener('load', initApp);
/// <reference path="../domain/models/types.ts" />
// ...
