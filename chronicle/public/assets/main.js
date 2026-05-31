"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // src/Frontend/config/gameConfig.ts
  var namesConfig = Object.freeze({
    "ancient_china": Object.freeze({
      "surnames": Object.freeze(["\u674E", "\u738B", "\u5F35", "\u5289", "\u9673", "\u694A", "\u8D99", "\u9EC4", "\u5468", "\u5449", "\u66F9", "\u5B6B", "\u8881", "\u516C\u5B6B", "\u53F8\u99AC", "\u590F\u4FAF", "\u8AF8\u845B", "\u95A2", "\u99AC", "\u6797", "\u5F90", "\u6731", "\u9AD8", "\u90ED", "\u4F55", "\u912D", "\u80E1", "\u4E01", "\u8463", "\u59DC", "\u5D14", "\u859B", "\u6F58", "\u5F6D", "\u5442", "\u76E7", "\u9B4F", "\u848B", "\u97D3", "\u5510", "\u99AE", "\u4E8E", "\u6C88", "\u9127", "\u66FE", "\u856D", "\u7A0B", "\u8521", "\u8A31", "\u8881"]),
      "given_names": Object.freeze(["\u5049", "\u82B3", "\u5091", "\u82F1", "\u6D69", "\u5F37", "\u4EAE", "\u52C7", "\u8276", "\u9E97", "\u64CD", "\u6A29", "\u5099", "\u7D39", "\u8853", "\u8CDB", "\u61FF", "\u6566", "\u6DF5", "\u96F2", "\u98DB", "\u8D85", "\u745C", "\u7B56", "\u747E", "\u905C", "\u7D71", "\u7DAD", "\u5FE0", "\u5E73", "\u5BE7", "\u662D", "\u7FFC", "\u6717", "\u606A", "\u8987", "\u7C9B", "\u5100", "\u8A95", "\u7433", "\u55AC", "\u5CB3", "\u8B19", "\u7155", "\u5950"]),
      "given_name_chars": Object.freeze(["\u5B50", "\u6587", "\u4EF2", "\u4F2F", "\u5143", "\u516C", "\u5FB3", "\u5B5D", "\u660E", "\u7384", "\u627F", "\u666F", "\u4EE4", "\u9577", "\u6C38", "\u5B89", "\u5B9A", "\u6B63", "\u5EFA", "\u8208", "\u826F", "\u9F8D", "\u9CF3", "\u745E", "\u5929", "\u5C1A", "\u5609", "\u6804", "\u6176", "\u6CF0", "\u9053", "\u7FA9", "\u4FE1", "\u9054", "\u6210", "\u8CE2", "\u7965", "\u4FCA", "\u656C", "\u5EC9"])
    }),
    "medieval_europe": Object.freeze({
      "surnames": Object.freeze(["\u30B9\u30DF\u30B9", "\u30B8\u30E7\u30F3\u30BD\u30F3", "\u30A6\u30A3\u30EA\u30A2\u30E0\u30BA", "\u30D6\u30E9\u30A6\u30F3", "\u30B8\u30E7\u30FC\u30F3\u30BA", "\u30DF\u30E9\u30FC", "\u30C7\u30A4\u30D3\u30B9", "\u30AC\u30EB\u30B7\u30A2", "\u30ED\u30C9\u30EA\u30B2\u30B9", "\u30A6\u30A3\u30EB\u30BD\u30F3", "\u30A2\u30F3\u30C0\u30FC\u30BD\u30F3", "\u30C6\u30A4\u30E9\u30FC", "\u30C8\u30FC\u30DE\u30B9", "\u30E0\u30FC\u30A2", "\u30DE\u30FC\u30C6\u30A3\u30F3", "\u30B8\u30E3\u30AF\u30BD\u30F3", "\u30C8\u30F3\u30D7\u30BD\u30F3", "\u30DB\u30EF\u30A4\u30C8", "\u30ED\u30DA\u30B9", "\u30EA\u30FC", "\u30B4\u30F3\u30B6\u30EC\u30B9", "\u30CF\u30EA\u30B9", "\u30AF\u30E9\u30FC\u30AF", "\u30EB\u30A4\u30B9", "\u30ED\u30D3\u30F3\u30BD\u30F3", "\u30A6\u30A9\u30FC\u30AB\u30FC", "\u30DA\u30EC\u30B9", "\u30DB\u30FC\u30EB", "\u30E4\u30F3\u30B0", "\u30A2\u30EC\u30F3", "\u30B5\u30F3\u30C1\u30A7\u30B9", "\u30E9\u30A4\u30C8", "\u30AD\u30F3\u30B0", "\u30B9\u30B3\u30C3\u30C8", "\u30B0\u30EA\u30FC\u30F3", "\u30D9\u30A4\u30AB\u30FC", "\u30A2\u30C0\u30E0\u30B9", "\u30CD\u30EB\u30BD\u30F3", "\u30D2\u30EB", "\u30E9\u30DF\u30EC\u30B9", "\u30AD\u30E3\u30F3\u30D9\u30EB", "\u30DF\u30C3\u30C1\u30A7\u30EB", "\u30ED\u30D0\u30FC\u30C4", "\u30AB\u30FC\u30BF\u30FC", "\u30D5\u30A3\u30EA\u30C3\u30D7\u30B9", "\u30A8\u30F4\u30A1\u30F3\u30B9", "\u30BF\u30FC\u30CA\u30FC", "\u30C8\u30FC\u30EC\u30B9", "\u30D1\u30FC\u30AB\u30FC", "\u30B3\u30EA\u30F3\u30BA"]),
      "given_names": Object.freeze(["\u30B8\u30E7\u30F3", "\u30A6\u30A3\u30EA\u30A2\u30E0", "\u30B8\u30A7\u30FC\u30E0\u30BA", "\u30B8\u30E7\u30FC\u30B8", "\u30C1\u30E3\u30FC\u30EB\u30BA", "\u30D8\u30F3\u30EA\u30FC", "\u30EA\u30C1\u30E3\u30FC\u30C9", "\u30A8\u30C9\u30EF\u30FC\u30C9", "\u30ED\u30D0\u30FC\u30C8", "\u30C8\u30FC\u30DE\u30B9", "\u30DE\u30A4\u30B1\u30EB", "\u30C7\u30D3\u30C3\u30C9", "\u30AF\u30EA\u30B9\u30C8\u30D5\u30A1\u30FC", "\u30C0\u30CB\u30A8\u30EB", "\u30DD\u30FC\u30EB", "\u30DE\u30FC\u30AF", "\u30B9\u30C6\u30A3\u30FC\u30D6\u30F3", "\u30B1\u30D3\u30F3", "\u30D6\u30E9\u30A4\u30A2\u30F3", "\u30A2\u30F3\u30BD\u30CB\u30FC"])
    })
  });
  var territoryChars = Object.freeze(
    Array.from(new Set("\u6D1B\u967D\u9577\u5B89\u8944\u6F22\u4E2D\u6210\u90FD\u5EFA\u696D\u5F90\u5DDE\u9134\u5317\u5E73\u664B\u8A31\u660C\u5BFF\u6625\u6C5F\u9675\u67F4\u6851\u4F1A\u7A3D\u5449\u858A\u5357\u76AE\u6D77\u6FEE\u9673\u7559\u5F18\u8FB2\u5B9B\u65B0\u91CE\u590F\u5EEC\u5E83\u4E0B\u90B3\u5C0F\u6C9B\u6B66\u5A01\u6DBC\u76CA\u5E7D\u5180\u9752\u5157\u8C6B\u63DA\u834A\u4EA4\u5E76\u53F8\u96CD\u8D8A\u8700\u5DF4\u907C\u6E24\u4EE3\u96C1\u9580\u96F2\u6714\u539F\u515A\u592A\u6E05\u5DE8\u9E7F\u5E38\u4FE1\u697D\u6E08\u840A\u7405\u90AA\u5F6D\u6C5D\u6F41\u9B6F\u6881\u9670\u4EFB\u6CF0\u6842\u96F6\u6797\u8C61\u4E5D\u771F\u65E5")).join("")
  );
  var medievalTerritorySyllables = Object.freeze(
    ["\u30A2\u30EB", "\u30D6\u30EB", "\u30D9\u30EB", "\u30C1\u30A7", "\u30B9\u30BF\u30FC", "\u30C8\u30F3", "\u30D5\u30A9\u30FC\u30C9", "\u30D0\u30FC\u30B0", "\u30E9\u30F3\u30C9", "\u30F4\u30A3\u30EB", "\u30A6\u30A3\u30AF", "\u30DD\u30FC\u30C8", "\u30E2\u30A2", "\u30C7\u30A4\u30EB", "\u30A6\u30C3\u30C9", "\u30D2\u30EB", "\u30B9\u30C8\u30FC\u30F3", "\u30D6\u30EA\u30C3\u30B8", "\u30D5\u30A3\u30FC\u30EB\u30C9", "\u30DE\u30A6\u30F3\u30C8", "\u30CB\u30E5\u30FC", "\u30AA\u30FC\u30EB\u30C9", "\u30B5\u30F3", "\u30B5\u30F3\u30BF"]
  );
  var ranksConfig = Object.freeze({
    "ancient_china": Object.freeze(["\u58EB", "\u4E0A\u58EB", "\u4E0B\u5927\u592B", "\u4E2D\u5927\u592B", "\u4E0A\u5927\u592B", "\u537F", "\u516C", "\u738B", "\u7687\u5E1D"]),
    "medieval_europe": Object.freeze(["\u4E00\u822C", "\u5F93\u8005", "\u9A0E\u58EB", "\u7537\u7235", "\u4F2F\u7235", "\u516C\u7235", "\u56FD\u738B"])
  });
  var ancientEmpireNames = Object.freeze([
    "\u79E6",
    "\u6F22",
    "\u9B4F",
    "\u8700",
    "\u5449",
    "\u664B",
    "\u968F",
    "\u5510",
    "\u5B8B",
    "\u5143",
    "\u660E",
    "\u6E05",
    "\u6589",
    "\u695A",
    "\u71D5",
    "\u8D99",
    "\u97D3",
    "\u6881",
    "\u9673",
    "\u907C",
    "\u91D1",
    "\u590F",
    "\u5468",
    "\u8D8A",
    "\u9B6F",
    "\u885B",
    "\u912D",
    "\u5B8B",
    "\u66F9",
    "\u8A31",
    "\u9673",
    "\u8521",
    "\u8392",
    "\u6ED5",
    "\u859B",
    "\u7D00",
    "\u675E",
    "\u90A2",
    "\u8B5A",
    "\u9042",
    "\u5411",
    "\u51E1",
    "\u8523",
    "\u90DC",
    "\u5BBF",
    "\u8076",
    "\u7533",
    "\u9127",
    "\u9116",
    "\u96A8",
    "\u5510",
    "\u8521",
    "\u606F",
    "\u9EC4",
    "\u6C88",
    "\u5442",
    "\u540E",
    "\u6BB7",
    "\u865E",
    "\u590F"
  ]);
  var empirePrefixes = Object.freeze(["\u6771", "\u897F", "\u5357", "\u5317", "\u524D", "\u5F8C", "\u5927", "\u65B0", "\u5317"]);

  // src/Frontend/domain/models.ts
  function createPerson(params) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
    return {
      id: params.id,
      nation_id: (_a = params.nation_id) != null ? _a : null,
      name: (_b = params.name) != null ? _b : "",
      surname: (_c = params.surname) != null ? _c : "",
      given_name: (_d = params.given_name) != null ? _d : "",
      role: (_e = params.role) != null ? _e : "Free",
      military: (_f = params.military) != null ? _f : 0,
      intellect: (_g = params.intellect) != null ? _g : 0,
      ambition: (_h = params.ambition) != null ? _h : 0,
      loyalty: (_i = params.loyalty) != null ? _i : 0,
      rank_level: (_j = params.rank_level) != null ? _j : 1,
      is_dead: (_k = params.is_dead) != null ? _k : false,
      birth_year: (_l = params.birth_year) != null ? _l : 0,
      death_year: (_m = params.death_year) != null ? _m : null,
      father_id: (_n = params.father_id) != null ? _n : null,
      clan_id: params.clan_id,
      is_chancellor: (_o = params.is_chancellor) != null ? _o : false,
      growth_type: (_p = params.growth_type) != null ? _p : "Standard",
      base_military: (_r = params.base_military) != null ? _r : (_q = params.military) != null ? _q : 0,
      base_intellect: (_t = params.base_intellect) != null ? _t : (_s = params.intellect) != null ? _s : 0,
      base_ambition: (_v = params.base_ambition) != null ? _v : (_u = params.ambition) != null ? _u : 0,
      max_rank_level: (_x = params.max_rank_level) != null ? _x : (_w = params.rank_level) != null ? _w : 1,
      death_cause: (_y = params.death_cause) != null ? _y : "",
      final_rank_name: (_z = params.final_rank_name) != null ? _z : "",
      is_unifier: (_A = params.is_unifier) != null ? _A : false,
      is_heir_succession: (_B = params.is_heir_succession) != null ? _B : false,
      is_usurper: (_C = params.is_usurper) != null ? _C : false,
      had_chancellor_experience: (_D = params.had_chancellor_experience) != null ? _D : false,
      epithet: (_E = params.epithet) != null ? _E : null,
      is_adopted: (_F = params.is_adopted) != null ? _F : false
    };
  }
  function createNation(params) {
    var _a, _b;
    return {
      id: params.id,
      name: "",
      stability: (_a = params.stability) != null ? _a : 50,
      current_ruler_id: params.currentRulerId,
      is_empire: (_b = params.is_empire) != null ? _b : false,
      color: params.color,
      ruler_history: [],
      chancellor_history: [],
      name_history: []
    };
  }
  function createTerritory(params) {
    var _a, _b, _c, _d, _e;
    return {
      id: params.id,
      name: params.name,
      owner_nation_id: (_a = params.owner_nation_id) != null ? _a : null,
      is_capital: (_b = params.is_capital) != null ? _b : false,
      x: (_c = params.x) != null ? _c : 0,
      y: (_d = params.y) != null ? _d : 0,
      connectedIds: (_e = params.connectedIds) != null ? _e : []
    };
  }

  // src/Frontend/domain/nameGenerator.ts
  function generateChineseGivenName(getRandomInt) {
    const config = namesConfig["ancient_china"];
    const givenNames = config.given_names;
    const chars = config.given_name_chars;
    if (getRandomInt(1, 100) <= 20 && chars && chars.length >= 2) {
      const c1 = chars[getRandomInt(0, chars.length - 1)];
      let c2;
      let attempts = 0;
      do {
        c2 = chars[getRandomInt(0, chars.length - 1)];
        attempts++;
      } while (c1 === c2 && attempts < 50);
      return c1 + c2;
    } else {
      return givenNames[getRandomInt(0, givenNames.length - 1)];
    }
  }
  function generateGivenName(era, fatherId, people, getRandomInt) {
    const config = namesConfig[era];
    const givenNames = config.given_names;
    if (era === "ancient_china" && fatherId) {
      const familyGivenNames = people.filter((p) => p.id === fatherId || p.father_id === fatherId).map((p) => p.given_name);
      let givenName;
      let attempts = 0;
      do {
        givenName = generateChineseGivenName(getRandomInt);
        attempts++;
      } while (familyGivenNames.includes(givenName) && attempts < 30);
      return givenName;
    } else if (era === "ancient_china") {
      return generateChineseGivenName(getRandomInt);
    } else {
      return givenNames[getRandomInt(0, givenNames.length - 1)];
    }
  }
  function formatName(surname, givenName, era) {
    if (era === "medieval_europe")
      return givenName + " " + surname;
    return surname + givenName;
  }
  function generateTerritoryName(era, usedCombinations, getRandomInt) {
    let p1, p2, tName, comboKey;
    if (era === "ancient_china") {
      p1 = territoryChars[getRandomInt(0, territoryChars.length - 1)];
      do {
        p2 = territoryChars[getRandomInt(0, territoryChars.length - 1)];
      } while (p1 === p2);
      tName = p1 + p2;
      comboKey = [p1, p2].sort().join("");
    } else {
      p1 = medievalTerritorySyllables[getRandomInt(0, medievalTerritorySyllables.length - 1)];
      do {
        p2 = medievalTerritorySyllables[getRandomInt(0, medievalTerritorySyllables.length - 1)];
      } while (p1 === p2);
      tName = p1 + p2;
      comboKey = [p1, p2].sort().join("-");
    }
    if (usedCombinations.has(comboKey))
      return null;
    return { tName, comboKey };
  }
  function getUniqueNationName(capName, surname, suffix, era, rulerPerson, nations, getRandomInt) {
    let name = capName + surname + suffix;
    if (!nations.some((n) => n.name === name))
      return name;
    name = "\u65B0" + capName + surname + suffix;
    if (!nations.some((n) => n.name === name))
      return name;
    const surnames = namesConfig[era].surnames;
    let newSurname;
    let attempts = 0;
    do {
      newSurname = surnames[getRandomInt(0, surnames.length - 1)];
      name = capName + newSurname + suffix;
      attempts++;
      if (attempts > 30) {
        name = "\u65B0\u751F" + name;
        break;
      }
    } while (nations.some((n) => n.name === name));
    rulerPerson.surname = newSurname;
    rulerPerson.name = formatName(newSurname, rulerPerson.given_name, era);
    return name;
  }
  function getUniqueRebelName(capName, rebelName, nations, era) {
    const base = capName + rebelName;
    if (!nations.some((n) => n.name === base))
      return base;
    const prefixes = era === "ancient_china" ? ["\u6771", "\u897F", "\u5357", "\u5317", "\u524D", "\u5F8C"] : ["\u6771", "\u897F", "\u5357", "\u5317"];
    for (const p of prefixes) {
      const n = p + base;
      if (!nations.some((nn) => nn.name === n))
        return n;
    }
    let attempt = "\u65B0" + base;
    if (!nations.some((n) => n.name === attempt))
      return attempt;
    return "\u65B0\u751F" + base;
  }

  // src/Frontend/domain/battleResolver.ts
  function getArmy(nation, people) {
    const potentialGenerals = people.filter((p) => p.nation_id === nation.id && !p.is_dead && p.role !== "Child");
    if (potentialGenerals.length === 0)
      return null;
    potentialGenerals.sort((a, b) => b.military - a.military);
    const commander = potentialGenerals[0];
    const others = potentialGenerals.slice(1);
    others.sort((a, b) => b.intellect - a.intellect);
    const strategist = others.length > 0 && others[0].intellect >= 70 ? others.shift() : null;
    others.sort((a, b) => b.military - a.military);
    const lieutenants = others.slice(0, 2);
    return {
      commander,
      strategist,
      lieutenants,
      all: [commander, strategist, ...lieutenants].filter((x) => x !== null)
    };
  }
  function calcPower(army, nation) {
    let power = army.commander.military;
    if (army.strategist)
      power += army.strategist.intellect * 0.6;
    army.lieutenants.forEach((l) => power += l.military * 0.3);
    power += nation.stability * 0.4;
    return power;
  }
  function armyDesc(army) {
    let s = `\u3010\u7DCF\u5927\u5C06\u3011${army.commander.name}`;
    if (army.strategist)
      s += ` \u3010\u53C2\u8B00\u3011${army.strategist.name}`;
    if (army.lieutenants.length > 0)
      s += ` \u3010\u526F\u5C06\u3011${army.lieutenants.map((l) => l.name).join("\u30FB")}`;
    return s;
  }
  function resolveBattle(ctx) {
    const { year, era, attackerNation, defenderNation, people, territories, addEvent, getRandomInt, handleRulerDeath } = ctx;
    const attackerArmy = getArmy(attackerNation, people);
    const defenderArmy = getArmy(defenderNation, people);
    if (!attackerArmy || !defenderArmy)
      return;
    let aPower = calcPower(attackerArmy, attackerNation);
    let dPower = calcPower(defenderArmy, defenderNation);
    let attackerCommanderFled = false;
    let defenderCommanderFled = false;
    const checkCasualties = (army, nation, isAttacker) => {
      army.all.forEach((p) => {
        if (getRandomInt(1, 1e3) <= 20) {
          const isCommander = p.id === army.commander.id;
          if (isCommander) {
            if (getRandomInt(1, 100) <= 40 && army.lieutenants.length > 0) {
              const nextLead = army.lieutenants.find((l) => !l.is_dead) || army.lieutenants[0];
              addEvent(year, `\u6FC0\u6226\u306E\u4E2D\u3001${nation.name}\u306E\u7DCF\u5927\u5C06${p.name}\u304C\u8A0E\u6B7B\uFF01 \u526F\u5C06${nextLead.name}\u304C\u6307\u63EE\u3092\u5F15\u304D\u7D99\u304E\u3001\u8ECD\u306F\u8E0F\u307F\u3068\u3069\u307E\u3063\u305F\u3002`, nation.id, [p.id, nextLead.id]);
              if (isAttacker)
                aPower *= 0.7;
              else
                dPower *= 0.7;
            } else {
              addEvent(year, `${nation.name}\u306E\u7DCF\u5927\u5C06${p.name}\u304C\u8A0E\u6B7B\uFF01 \u6307\u5C0E\u8005\u3092\u5931\u3063\u305F\u8ECD\u306F\u7DCF\u5D29\u308C\u3068\u306A\u3063\u305F\u3002`, nation.id, [p.id]);
              if (isAttacker) {
                aPower = 0;
                attackerCommanderFled = true;
              } else {
                dPower = 0;
                defenderCommanderFled = true;
              }
            }
          } else {
            const title = army.strategist && p.id === army.strategist.id ? "\u53C2\u8B00" : "\u526F\u5C06";
            addEvent(year, `${nation.name}\u306E${title}${p.name}\u304C\u6226\u5834\u306B\u6563\u3063\u305F\u3002`, nation.id, [p.id]);
            if (isAttacker)
              aPower *= 0.9;
            else
              dPower *= 0.9;
          }
          p.is_dead = true;
          p.death_year = year;
          p.death_cause = "\u8A0E\u6B7B";
          p.final_rank_name = ranksConfig[era][p.rank_level] || (p.role === "Ruler" ? "\u541B\u4E3B" : "\u4E00\u822C");
          if (p.id === nation.current_ruler_id)
            handleRulerDeath(year, p, era);
        }
      });
    };
    checkCasualties(attackerArmy, attackerNation, true);
    checkCasualties(defenderArmy, defenderNation, false);
    const isWin = getRandomInt(1, 100) <= 50 + (aPower - dPower) / 2;
    const eventPersonIds = [...attackerArmy.all.map((p) => p.id), ...defenderArmy.all.map((p) => p.id)];
    const targetTerrs = territories.filter((t) => t.owner_nation_id === defenderNation.id);
    if (isWin && !attackerCommanderFled && targetTerrs.length > 0) {
      const territory = targetTerrs[getRandomInt(0, targetTerrs.length - 1)];
      territory.owner_nation_id = attackerNation.id;
      if (territory.is_capital) {
        territory.is_capital = false;
        const remain = territories.filter((t) => t.owner_nation_id === defenderNation.id);
        if (remain.length > 0)
          remain[0].is_capital = true;
      }
      addEvent(year, `${attackerNation.name}\u8ECD\uFF08${armyDesc(attackerArmy)}\uFF09\u304C${defenderNation.name}\u8ECD\uFF08${armyDesc(defenderArmy)}\uFF09\u3092\u7834\u308A\u3001${territory.name}\u3092\u5236\u5727\uFF01`, attackerNation.id, eventPersonIds, [territory.id]);
      attackerNation.stability += 5;
      defenderNation.stability -= 10;
    } else {
      const msg = defenderCommanderFled ? `${attackerNation.name}\u8ECD\u304C\u3001\u7DCF\u5927\u5C06\u3092\u5931\u3044\u6F70\u8D70\u3059\u308B${defenderNation.name}\u8ECD\u3092\u8FFD\u6483\u3057\u305F\u304C\u3001\u6C7A\u5B9A\u7684\u306A\u6210\u679C\u306F\u5F97\u3089\u308C\u306A\u304B\u3063\u305F\u3002` : `${defenderNation.name}\u8ECD\uFF08${armyDesc(defenderArmy)}\uFF09\u304C${attackerNation.name}\u8ECD\u306E\u4FB5\u653B\u3092\u5B8C\u74A7\u306B\u9632\u304E\u5207\u3063\u305F\u3002`;
      addEvent(year, msg, isWin ? attackerNation.id : defenderNation.id, eventPersonIds);
      attackerNation.stability -= 5;
      defenderNation.stability += 5;
    }
  }

  // src/Frontend/config/epithetConfig.ts
  var epithetCandidates = [
    { name: "\u8C6A\u80C6", description: "\u6050\u308C\u3092\u77E5\u3089\u306C\u52C7\u6C17\u3092\u6301\u3064", category: "Military" },
    { name: "\u7AEF\u9E97", description: "\u5BB9\u59FF\u304C\u7F8E\u3057\u304F\u512A\u96C5\u3067\u3042\u308B", category: "Personal" },
    { name: "\u5F81\u670D", description: "\u591A\u304F\u306E\u9818\u571F\u3092\u6253\u3061\u8CA0\u304B\u3057\u305F", category: "Military" },
    { name: "\u6B20\u5730", description: "\u9818\u571F\u3092\u5931\u3063\u305F\u3001\u3042\u308B\u3044\u306F\u6301\u305F\u3056\u308B", category: "Personal" },
    { name: "\u7345\u5B50\u5FC3", description: "\u767E\u7363\u306E\u738B\u306E\u5982\u304D\u52C7\u731B\u3055", category: "Military" },
    { name: "\u8CE2\u660E", description: "\u512A\u308C\u305F\u77E5\u6075\u3068\u5224\u65AD\u529B\u3092\u6301\u3064", category: "Political" },
    { name: "\u6B63\u7FA9", description: "\u6CD5\u3068\u9053\u5FB3\u3092\u91CD\u3093\u3058\u308B", category: "Political" },
    { name: "\u6148\u60B2", description: "\u60C5\u3051\u6DF1\u304F\u3001\u5F31\u8005\u3092\u3044\u305F\u308F\u308B", category: "Personal" },
    { name: "\u72C2\u6C17", description: "\u5E38\u8ECC\u3092\u9038\u3057\u305F\u884C\u52D5\u304C\u76EE\u7ACB\u3064", category: "Personal" },
    { name: "\u7121\u80FD", description: "\u5B9F\u7E3E\u306B\u4E4F\u3057\u304F\u3001\u6307\u5C0E\u529B\u306B\u6B20\u3051\u308B", category: "Political" },
    { name: "\u9AD8\u6F54", description: "\u5FD7\u304C\u9AD8\u304F\u3001\u6C5A\u308C\u304C\u306A\u3044", category: "Personal" },
    { name: "\u5049\u5927", description: "\u6B74\u53F2\u306B\u6B8B\u308B\u591A\u5927\u306A\u529F\u7E3E", category: "Special" },
    { name: "\u5BE1\u9ED9", description: "\u53E3\u6570\u304C\u5C11\u306A\u304F\u3001\u601D\u616E\u6DF1\u3044", category: "Personal" },
    { name: "\u5CFB\u70C8", description: "\u53B3\u3057\u304F\u3001\u5BB9\u8D66\u304C\u306A\u3044", category: "Political" },
    { name: "\u8056\u660E", description: "\u795E\u8056\u3067\u660E\u6670\u306A\u77E5\u529B\u3092\u6301\u3064", category: "Political" },
    { name: "\u6B66\u52C7", description: "\u6B66\u82B8\u306B\u79C0\u3067\u3001\u6226\u5834\u3067\u8F1D\u304F", category: "Military" },
    { name: "\u52DD\u5229", description: "\u4E0D\u6557\u3092\u8A87\u308A\u3001\u52DD\u3061\u7D9A\u3051\u308B", category: "Military" },
    { name: "\u5E73\u548C", description: "\u6226\u4E71\u3092\u907F\u3051\u3001\u5B89\u5BE7\u3092\u3082\u305F\u3089\u3057\u305F", category: "Political" },
    { name: "\u77ED\u8EAF", description: "\u8EAB\u4F53\u304C\u5C0F\u3055\u304F\u3001\u4FCA\u654F\u3067\u3042\u308B", category: "Personal" },
    { name: "\u8D64\u9AED", description: "\u7279\u5FB4\u7684\u306A\u8D64\u3044\u9AED\u3092\u6301\u3064", category: "Personal" },
    { name: "\u9244\u69CC", description: "\u6575\u3092\u7C89\u7815\u3059\u308B\u7834\u58CA\u529B", category: "Military" },
    { name: "\u72EC\u773C", description: "\u7247\u76EE\u3092\u5931\u3044\u306A\u304C\u3089\u3082\u52C7\u731B", category: "Personal" },
    { name: "\u5FE0\u7FA9", description: "\u4E3B\u541B\u306B\u5BFE\u3057\u3066\u7D76\u5BFE\u306E\u5FE0\u8AA0", category: "Political" },
    { name: "\u51B7\u9177", description: "\u611F\u60C5\u306B\u6D41\u3055\u308C\u305A\u3001\u51B7\u5FB9\u3067\u3042\u308B", category: "Personal" },
    { name: "\u83EF\u9E97", description: "\u7ACB\u3061\u632F\u308B\u821E\u3044\u304C\u83EF\u3084\u304B\u3067\u3042\u308B", category: "Personal" },
    { name: "\u75E9\u8EAB", description: "\u8EAB\u4F53\u304C\u7D30\u304F\u3001\u92ED\u3044\u5370\u8C61", category: "Personal" },
    { name: "\u80A5\u6E80", description: "\u6070\u5E45\u304C\u826F\u304F\u3001\u5A01\u53B3\u304C\u3042\u308B", category: "Personal" },
    { name: "\u7F8E\u9AEF", description: "\u898B\u4E8B\u306A\u9AED\u3092\u84C4\u3048\u3066\u3044\u308B", category: "Personal" },
    { name: "\u667A\u8B00", description: "\u8A08\u7565\u306B\u9577\u3051\u3001\u8ECD\u7565\u3092\u5DE1\u3089\u3059", category: "Military" },
    { name: "\u525B\u8155", description: "\u8155\u529B\u304C\u5F37\u304F\u3001\u529B\u3067\u62BC\u3057\u5207\u308B", category: "Military" },
    { name: "\u4E0D\u6B7B", description: "\u5371\u6A5F\u3092\u4F55\u5EA6\u3082\u8131\u3057\u305F", category: "Special" },
    { name: "\u75BE\u98A8", description: "\u7D20\u65E9\u3044\u9032\u8ECD\u3068\u653B\u6483", category: "Military" },
    { name: "\u92FC\u9244", description: "\u4E0D\u5C48\u306E\u610F\u5FD7\u3068\u5805\u5B9F\u306A\u5B88\u308A", category: "Military" },
    { name: "\u9EC4\u91D1", description: "\u5BCC\u3092\u7BC9\u304D\u3001\u7E41\u6804\u3092\u3082\u305F\u3089\u3057\u305F", category: "Political" },
    { name: "\u9CF3\u51F0", description: "\u512A\u96C5\u3067\u9AD8\u8CB4\u306A\u8C61\u5FB4", category: "Special" },
    { name: "\u81E5\u9F8D", description: "\u96A0\u308C\u305F\u624D\u80FD\u3001\u3042\u308B\u3044\u306F\u6A5F\u3092\u5F85\u3064", category: "Political" },
    { name: "\u8056\u8005", description: "\u5FB3\u304C\u9AD8\u304F\u3001\u4EBA\u3005\u304B\u3089\u5D07\u3081\u3089\u308C\u308B", category: "Personal" },
    { name: "\u8987\u9053", description: "\u6B66\u529B\u3068\u6A29\u8B00\u3067\u4E16\u3092\u652F\u914D\u3059\u308B", category: "Special" },
    { name: "\u6551\u4E16", description: "\u6EC5\u4EA1\u306E\u5371\u6A5F\u304B\u3089\u4EBA\u3005\u3092\u6551\u3063\u305F", category: "Special" },
    { name: "\u51A5\u5E9C", description: "\u6050\u308C\u3089\u308C\u3001\u6B7B\u3092\u8C61\u5FB4\u3059\u308B", category: "Special" },
    { name: "\u9B3C\u795E", description: "\u4EBA\u77E5\u3092\u8D85\u3048\u305F\u6B66\u306E\u5316\u8EAB", category: "Military" },
    { name: "\u8FC5\u96F7", description: "\u96FB\u5149\u77F3\u706B\u306E\u6C7A\u65AD\u3068\u884C\u52D5", category: "Military" },
    { name: "\u6D41\u9E97", description: "\u6D17\u7DF4\u3055\u308C\u305F\u7F8E\u3057\u3055\u3092\u6301\u3064", category: "Personal" },
    { name: "\u5F37\u6B32", description: "\u5BCC\u3068\u6A29\u529B\u3078\u306E\u98FD\u304F\u306A\u304D\u57F7\u7740", category: "Political" },
    { name: "\u5FCD\u8010", description: "\u82E6\u5883\u3092\u3058\u3063\u3068\u8010\u3048\u5FCD\u3093\u3060", category: "Personal" },
    { name: "\u72E1\u733E", description: "\u305A\u308B\u8CE2\u304F\u3001\u88CF\u3092\u304B\u304F", category: "Political" },
    { name: "\u96C4\u9081", description: "\u6C17\u6027\u304C\u6FC0\u3057\u304F\u3001\u91CE\u5FC3\u7684\u3067\u3042\u308B", category: "Personal" },
    { name: "\u58EE\u9E97", description: "\u58EE\u5927\u3067\u7F8E\u3057\u3044\u529F\u7E3E\u3092\u6B8B\u3057\u305F", category: "Special" },
    { name: "\u70C8\u706B", description: "\u6FC0\u3057\u304F\u71C3\u3048\u4E0A\u304C\u308B\u60C5\u71B1", category: "Military" },
    { name: "\u9759\u8B10", description: "\u7A4F\u3084\u304B\u3067\u3001\u6DF7\u4E71\u3092\u93AE\u3081\u305F", category: "Political" }
  ];

  // src/Frontend/domain/simulationConfig.ts
  var defaultConfig = {
    birthRate: 0.02,
    deathBaseProb: 2e-3,
    deathAgeThreshold: 65,
    rebellionChance: 0.05,
    usurpationChance: 0.1,
    assassinationChance: 2e-3,
    plagueChance: 0.05,
    recruitmentRate: 0.06,
    promotionRate: 0.1,
    adoptionRate: 0.05,
    warDeclarationChance: 0.4,
    stabilityGainBond: 0.5
  };

  // src/Frontend/domain/SimulationEngine.ts
  var SimulationEngine = class {
    constructor() {
      this.nations = [];
      this.territories = [];
      this.people = [];
      this.events = [];
      this.nextNationId = 1;
      this.nextTerritoryId = 1;
      this.nextPersonId = 1;
      this.diplomacy = {};
      this.relationships = {};
      this.config = __spreadValues({}, defaultConfig);
      this.reset();
    }
    reset() {
      this.nations = [];
      this.territories = [];
      this.people = [];
      this.events = [];
      this.nextNationId = 1;
      this.nextTerritoryId = 1;
      this.nextPersonId = 1;
      this.diplomacy = {};
      this.relationships = {};
      this.config = __spreadValues({}, defaultConfig);
    }
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomColor() {
      const h = this.getRandomInt(0, 360);
      const s = this.getRandomInt(60, 90);
      const l = this.getRandomInt(45, 65);
      return `hsl(${h}, ${s}%, ${l}%)`;
    }
    getDipKey(id1, id2) {
      const a = Math.min(id1, id2);
      const b = Math.max(id1, id2);
      return `${a}-${b}`;
    }
    getDipRelation(id1, id2) {
      const key = this.getDipKey(id1, id2);
      if (!this.diplomacy[key]) {
        this.diplomacy[key] = { status: "Peace", affinity: 0 };
      }
      return this.diplomacy[key];
    }
    getPersonalRelation(id1, id2) {
      const a = Math.min(id1, id2);
      const b = Math.max(id1, id2);
      const key = `${a}-${b}`;
      if (!this.relationships[key]) {
        this.relationships[key] = { affinity: 0, tags: [] };
      }
      return this.relationships[key];
    }
    modifyPersonalRelation(id1, id2, amount) {
      const rel = this.getPersonalRelation(id1, id2);
      rel.affinity += amount;
      if (rel.affinity >= 50 && !rel.tags.includes("Bond")) {
        rel.tags.push("Bond");
      }
      if (rel.affinity <= -50 && !rel.tags.includes("Hate")) {
        rel.tags.push("Hate");
      }
    }
    addRelationTag(id1, id2, tag) {
      const rel = this.getPersonalRelation(id1, id2);
      if (!rel.tags.includes(tag)) {
        rel.tags.push(tag);
      }
    }
    isClanMember(p, other) {
      return p.clan_id === other.clan_id;
    }
    addEvent(year, description, nationId, personIds = [], territoryIds = []) {
      this.events.push({ year, description, nation_id: nationId, person_ids: personIds, territory_ids: territoryIds });
    }
    getActiveNations() {
      const activeIds = new Set(this.territories.map((t) => t.owner_nation_id).filter((id) => id !== null));
      return this.nations.filter((n) => activeIds.has(n.id));
    }
    updateRuler(nation, newRuler, year) {
      this.terminateRuler(nation, year);
      nation.current_ruler_id = newRuler.id;
      newRuler.role = "Ruler";
      newRuler.rank_level = nation.is_empire ? 8 : 6;
      if (newRuler.rank_level > newRuler.max_rank_level)
        newRuler.max_rank_level = newRuler.rank_level;
      newRuler.is_chancellor = false;
      if (!nation.ruler_history)
        nation.ruler_history = [];
      nation.ruler_history.push({ id: newRuler.id, name: newRuler.name, start: year });
    }
    terminateRuler(nation, year) {
      if (!nation.ruler_history || nation.ruler_history.length === 0)
        return;
      const last = nation.ruler_history[nation.ruler_history.length - 1];
      if (!last.end) {
        last.end = year;
      }
    }
    assignEpithet(person, year, era) {
      if (person.epithet || person.is_dead)
        return;
      let candidates = epithetCandidates;
      if (person.is_unifier) {
        candidates = candidates.filter((c) => ["\u5F81\u670D", "\u5049\u5927", "\u52DD\u5229", "\u8987\u9053", "\u6551\u4E16"].includes(c.name));
      } else if (person.is_chancellor) {
        candidates = candidates.filter((c) => ["\u8CE2\u660E", "\u6B63\u7FA9", "\u6148\u60B2", "\u9AD8\u6F54", "\u8056\u660E", "\u5E73\u548C", "\u667A\u8B00", "\u9759\u8B10"].includes(c.name));
      } else if (person.role === "Ruler" || person.role === "General") {
        candidates = candidates.filter((c) => c.category === "Military" || c.category === "Political" || c.category === "Personal");
      }
      if (candidates.length === 0)
        candidates = epithetCandidates;
      const chosen = candidates[this.getRandomInt(0, candidates.length - 1)];
      let suffix = "\u5C06";
      if (person.rank_level === 8)
        suffix = "\u5E1D";
      else if (person.rank_level === 7)
        suffix = "\u738B";
      else if (person.rank_level === 6)
        suffix = "\u516C";
      else if (person.role === "General")
        suffix = "\u5C06";
      else
        suffix = "";
      person.epithet = `${chosen.name}${suffix}`;
      this.addEvent(year, `\u3053\u306E\u3053\u308D\u304B\u3089${person.name}\u304C\u300C${person.epithet}\u300D\u3068\u547C\u3070\u308C\u308B\u3088\u3046\u306B\u306A\u3063\u305F\u3002`, person.nation_id, [person.id]);
    }
    generateEmpireName(ruler, nation) {
      const candidates = [...ancientEmpireNames];
      let base = candidates[this.getRandomInt(0, candidates.length - 1)];
      const activeEmpires = this.getActiveNations().filter((n) => n.is_empire && n.id !== nation.id);
      let prefix = "";
      if (activeEmpires.some((n) => n.empire_name_base === base)) {
        prefix = empirePrefixes[this.getRandomInt(0, empirePrefixes.length - 1)];
      }
      nation.empire_name_base = base;
      return `${ruler.surname}\u671D${prefix}${base}\u5E1D\u56FD`;
    }
    updateNationName(nation, newName) {
      if (!nation.name_history)
        nation.name_history = [];
      if (!nation.name_history.includes(newName)) {
        nation.name_history.push(newName);
      }
      nation.name = newName;
    }
    updateChancellor(nation, newChancellor, year) {
      this.terminateChancellor(nation, year);
      newChancellor.is_chancellor = true;
      newChancellor.had_chancellor_experience = true;
      if (!nation.chancellor_history)
        nation.chancellor_history = [];
      nation.chancellor_history.push({ id: newChancellor.id, name: newChancellor.name, start: year });
    }
    terminateChancellor(nation, year) {
      const current = this.people.find((p) => p.nation_id === nation.id && p.is_chancellor);
      if (current) {
        current.is_chancellor = false;
      }
      if (!nation.chancellor_history || nation.chancellor_history.length === 0)
        return;
      const last = nation.chancellor_history[nation.chancellor_history.length - 1];
      if (!last.end) {
        last.end = year;
      }
    }
    generatePersonStats() {
      const roll = () => this.getRandomInt(1, 100);
      return {
        military: Math.floor((roll() + roll()) / 2),
        intellect: Math.floor((roll() + roll()) / 2),
        ambition: Math.floor((roll() + roll()) / 2),
        loyalty: Math.floor((roll() + roll()) / 2)
      };
    }
    isGrandchild(p, ruler) {
      if (!p.father_id)
        return false;
      const father = this.people.find((f) => f.id === p.father_id);
      return father !== void 0 && father.father_id === ruler.id;
    }
    generatePerson(era, role, rankLevel, currentYear, nationId = null, fatherId = null, forcedSurname = null) {
      const surnames = namesConfig[era].surnames;
      const surname = forcedSurname || surnames[this.getRandomInt(0, surnames.length - 1)];
      const givenName = generateGivenName(era, fatherId, this.people, (min, max) => this.getRandomInt(min, max));
      const stats = this.generatePersonStats();
      const growthTypes = ["Standard", "Early", "Late", "Genius", "Steady"];
      const growthType = growthTypes[this.getRandomInt(0, growthTypes.length - 1)];
      let age = role === "Child" ? 0 : this.getRandomInt(15, 50);
      const father = fatherId ? this.people.find((p) => p.id === fatherId) : null;
      const person = createPerson({
        id: this.nextPersonId++,
        nation_id: nationId,
        name: formatName(surname, givenName, era),
        surname,
        given_name: givenName,
        role,
        military: stats.military,
        intellect: stats.intellect,
        ambition: stats.ambition,
        loyalty: stats.loyalty,
        rank_level: rankLevel,
        birth_year: currentYear - age,
        father_id: fatherId,
        clan_id: father ? father.clan_id : this.nextPersonId - 1,
        growth_type: growthType,
        base_military: stats.military,
        base_intellect: stats.intellect,
        base_ambition: stats.ambition
      });
      this.updatePersonGrowth(person, currentYear);
      this.people.push(person);
      return person;
    }
    updatePersonGrowth(p, currentYear) {
      const age = currentYear - p.birth_year;
      if (age < 0)
        return;
      let milMod = 1;
      let intMod = 1;
      let ambMod = 1;
      switch (p.growth_type) {
        case "Early":
          milMod = age < 20 ? 0.9 : age < 35 ? 1.1 : Math.max(0.4, 1.1 - (age - 35) * 0.03);
          intMod = age < 30 ? 1 : Math.max(0.5, 1 - (age - 30) * 0.015);
          ambMod = age < 40 ? 1 : Math.max(0.3, 1 - (age - 40) * 0.02);
          break;
        case "Late":
          milMod = age < 30 ? 0.5 : age < 50 ? 0.5 + (age - 30) * 0.025 : 1;
          intMod = age < 40 ? 0.6 : age < 60 ? 0.6 + (age - 40) * 0.02 : 1;
          ambMod = age < 50 ? 0.7 : 1.1;
          break;
        case "Genius":
          milMod = age < 20 ? 0.9 : age < 55 ? 1.1 : Math.max(0.7, 1.1 - (age - 55) * 0.015);
          intMod = age < 25 ? 1 : age < 70 ? 1.1 : 1;
          ambMod = 1.1;
          break;
        case "Steady":
          milMod = age < 20 ? 0.8 : age < 60 ? 0.95 : 0.8;
          intMod = age < 20 ? 0.8 : 1;
          ambMod = 0.9;
          break;
        default:
          milMod = age < 25 ? 0.7 : age < 45 ? 1 : Math.max(0.5, 1 - (age - 45) * 0.02);
          intMod = age < 30 ? 0.8 : age < 60 ? 1 : Math.max(0.6, 1 - (age - 60) * 0.01);
          ambMod = age < 50 ? 1 : Math.max(0.4, 1 - (age - 50) * 0.015);
          break;
      }
      if (age > 65) {
        const isWise = p.id % 3 === 0;
        if (isWise)
          intMod = Math.max(intMod, 1.05);
        else
          intMod = Math.min(intMod, 0.7);
        const isObsessed = p.id % 4 === 0;
        if (isObsessed)
          ambMod = Math.max(ambMod, 1.1);
        else
          ambMod = Math.min(ambMod, 0.5);
      }
      p.military = Math.floor(p.base_military * milMod);
      p.intellect = Math.floor(p.base_intellect * intMod);
      p.ambition = Math.floor(p.base_ambition * ambMod);
      p.military = Math.max(1, p.military);
      p.intellect = Math.max(1, p.intellect);
    }
    handleRulerDeath(year, ruler, era) {
      const nation = this.nations.find((n) => n.id === ruler.nation_id);
      if (!nation)
        return;
      if (ruler.role === "Rebel") {
        this._handleRebelDeath(year, ruler, nation);
        return;
      }
      const { heir, isMinorRuler } = this._findHeir(year, ruler, nation);
      if (heir) {
        this._handleHeirSuccession(year, era, ruler, nation, heir, isMinorRuler);
      } else {
        this._handleNationCollapse(year, ruler, nation);
        return;
      }
      if (nation.stability < 40) {
        this._handleNationSplit(year, era, ruler, nation, heir);
      }
    }
    _handleRebelDeath(year, ruler, nation) {
      this.addEvent(year, `\u6307\u5C0E\u8005${ruler.name}\u306E\u6B7B\u306B\u3088\u308A\u3001${nation.name}\u306F\u70CF\u5408\u306E\u8846\u3068\u5316\u3057\u3066\u6EC5\u4EA1\u3057\u305F\u3002`, null, [ruler.id]);
      ruler.death_cause = ruler.death_cause || "\u6025\u6B7B";
      ruler.final_rank_name = "\u6307\u5C0E\u8005";
      this.territories.forEach((t) => {
        if (t.owner_nation_id === nation.id) {
          t.owner_nation_id = null;
          t.is_capital = false;
        }
      });
      this.people.forEach((p) => {
        if (p.nation_id === nation.id && !p.is_dead) {
          p.nation_id = null;
          p.role = "Free";
          p.rank_level = 1;
          p.is_chancellor = false;
        }
      });
    }
    _findHeir(year, ruler, nation) {
      const descendants = this.people.filter((p) => p.clan_id === ruler.clan_id && !p.is_dead && p.id !== ruler.id && (p.father_id === ruler.id || this.isGrandchild(p, ruler)));
      const adults = descendants.filter((p) => year - p.birth_year >= 15);
      const minors = descendants.filter((p) => year - p.birth_year < 15);
      let heir = null;
      let isMinorRuler = false;
      if (adults.length > 0) {
        adults.sort((a, b) => {
          if (a.is_adopted !== b.is_adopted)
            return a.is_adopted ? 1 : -1;
          return a.birth_year - b.birth_year;
        });
        if (adults.length > 1 && this.getRandomInt(1, 100) > 90) {
          heir = adults[this.getRandomInt(1, adults.length - 1)];
        } else {
          heir = adults[0];
        }
      } else if (minors.length > 0) {
        minors.sort((a, b) => {
          if (a.is_adopted !== b.is_adopted)
            return a.is_adopted ? 1 : -1;
          return a.birth_year - b.birth_year;
        });
        if (minors.length > 1 && this.getRandomInt(1, 100) > 90) {
          heir = minors[this.getRandomInt(1, minors.length - 1)];
        } else {
          heir = minors[0];
        }
        isMinorRuler = true;
      } else {
        const generals = this.people.filter((p) => p.nation_id === nation.id && (p.role === "General" || p.is_chancellor) && !p.is_dead);
        if (generals.length > 0) {
          generals.sort((a, b) => b.loyalty - a.loyalty);
          heir = generals[0];
        }
      }
      return { heir, isMinorRuler };
    }
    _handleHeirSuccession(year, era, ruler, nation, heir, isMinorRuler) {
      var _a;
      heir.nation_id = nation.id;
      this.updateRuler(nation, heir, year);
      if (isMinorRuler) {
        const age = year - heir.birth_year;
        this.addEvent(year, `\u5148\u4EE3\u306E\u6025\u901D\u306B\u3088\u308A\u3001\u308F\u305A\u304B${age}\u6B73\u306E${heir.name}\u304C\u5E7C\u5E1D\u3068\u3057\u3066\u5373\u4F4D\u3057\u305F\u3002\u56FD\u5185\u306F\u52D5\u63FA\u306B\u5305\u307E\u308C\u3066\u3044\u308B\u3002`, nation.id, [heir.id, ruler.id]);
        nation.stability -= 25;
      } else if (heir.clan_id === ruler.clan_id) {
        this.addEvent(year, `\u5148\u4EE3\u306E\u907A\u5FD7\u3092\u7D99\u304E\u3001\u305D\u306E\u8840\u3092\u5F15\u304F${heir.name}\u304C${nation.name}\u306E\u541B\u4E3B\u3068\u306A\u3063\u305F\u3002`, nation.id, [heir.id, ruler.id]);
      } else {
        if (nation.is_empire && heir.surname !== ruler.surname) {
          const newName = this.generateEmpireName(heir, nation);
          this.updateNationName(nation, newName);
          heir.is_usurper = true;
          heir.rank_level = 8;
          this.addEvent(year, `\u5B9F\u529B\u8005\u306E${heir.name}\u304C\u56FD\u3092\u638C\u63E1\u3057\u3066${nation.name}\u3092\u8208\u3057\u3001\u738B\u671D\u304C\u4EA4\u4EE3\u3057\u305F\u3002`, nation.id, [heir.id, ruler.id]);
        } else if (heir.surname !== ruler.surname) {
          const suffix = era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
          const capName = ((_a = this.territories.find((t) => t.owner_nation_id === nation.id && t.is_capital)) == null ? void 0 : _a.name) || "\u4E0D\u660E";
          this.updateNationName(nation, getUniqueNationName(capName, heir.surname, suffix, era, heir, this.nations, (min, max) => this.getRandomInt(min, max)));
          this.addEvent(year, `\u5F8C\u7D99\u8005\u4E0D\u5728\u306E\u305F\u3081\u3001\u5B9F\u529B\u8005\u306E${heir.name}\u304C${nation.name}\u3092\u307E\u3068\u3081\u4E0A\u3052\u3066\u305D\u306E\u5F8C\u3092\u7D99\u3044\u3060\u3002`, nation.id, [heir.id, ruler.id]);
        } else {
          this.addEvent(year, `\u5B9F\u529B\u8005\u306E${heir.name}\u304C${nation.name}\u306E\u65B0\u305F\u306A\u541B\u4E3B\u306B\u9078\u3070\u308C\u305F\u3002`, nation.id, [heir.id, ruler.id]);
        }
      }
      heir.is_heir_succession = true;
    }
    _handleNationCollapse(year, ruler, nation) {
      this.addEvent(year, `\u5F8C\u7D99\u8005\u304C\u4E00\u4EBA\u3082\u3044\u306A\u304F\u306A\u3063\u305F\u305F\u3081\u3001${nation.name}\u306F\u74E6\u89E3\u3057\u6EC5\u4EA1\u3057\u305F\u3002`, null, [ruler.id]);
      ruler.death_cause = ruler.death_cause || "\u75C5\u6B7B";
      ruler.final_rank_name = "\u541B\u4E3B";
      this.territories.forEach((t) => {
        if (t.owner_nation_id === nation.id) {
          t.owner_nation_id = null;
          t.is_capital = false;
        }
      });
      this.people.forEach((p) => {
        if (p.nation_id === nation.id && !p.is_dead) {
          p.nation_id = null;
          p.role = "Free";
          p.rank_level = 1;
          p.is_chancellor = false;
        }
      });
    }
    _handleNationSplit(year, era, ruler, nation, heir) {
      const nationTerritories = this.territories.filter((t) => t.owner_nation_id === nation.id);
      if (nationTerritories.length <= 1) {
        this.addEvent(year, `${heir.name}\u304C${nation.name}\u306E\u541B\u4E3B\u306E\u5EA7\u3092\u7D99\u627F\u3057\u305F\u3002\u56FD\u5185\u306B\u4E0D\u6E80\u306F\u3042\u308B\u304C\u3001\u9818\u571F\u304C\u72ED\u304F\u5206\u88C2\u306B\u306F\u81F3\u3089\u306A\u304B\u3063\u305F\u3002`, nation.id, [heir.id, ruler.id]);
        return;
      }
      nation.stability -= 10;
      const oldName = nation.name;
      let capital = nationTerritories.find((t) => t.is_capital) || nationTerritories[0];
      capital.is_capital = true;
      const capName = capital.name;
      let newNationId = this.nextNationId++;
      let heir2;
      let newNationName = "";
      let newIsEmpire = nation.is_empire;
      if (heir.surname !== ruler.surname) {
        const suffix = nation.is_empire ? "\u5E1D\u56FD" : era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
        const newName = nation.is_empire ? this.generateEmpireName(heir, nation) : getUniqueNationName(capName, heir.surname, suffix, era, heir, this.nations, (min, max) => this.getRandomInt(min, max));
        this.updateNationName(nation, newName);
        this.addEvent(year, `${heir.name}\u304C\u5B9F\u6A29\u3092\u63E1\u308A\u3001\u56FD\u53F7\u3092${nation.name}\u306B\u6539\u3081\u305F\u3002\u3057\u304B\u3057\u65E7\u52E2\u529B\u3084\u4E0D\u6E80\u5206\u5B50\u304C\u5206\u88C2\uFF01`, nation.id, [heir.id, ruler.id]);
        heir2 = this.generatePerson(era, "Ruler", 6, year, newNationId);
        if (nation.is_empire && this.getRandomInt(1, 100) <= 20) {
          newIsEmpire = false;
          const kingSuffix = era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
          newNationName = getUniqueNationName(capName, heir2.surname, kingSuffix, era, heir2, this.nations, (min, max) => this.getRandomInt(min, max));
        } else {
          newNationName = nation.is_empire ? this.generateEmpireName(heir2, nation) : getUniqueNationName(capName, heir2.surname, suffix, era, heir2, this.nations, (min, max) => this.getRandomInt(min, max));
        }
      } else {
        let p1 = era === "ancient_china" ? "\u6771" : "\u6771\u306E";
        let p2 = era === "ancient_china" ? "\u897F" : "\u897F\u306E";
        if (oldName.includes("\u6771") || oldName.includes("\u897F")) {
          p1 = era === "ancient_china" ? "\u5357" : "\u5357\u306E";
          p2 = era === "ancient_china" ? "\u5317" : "\u5317\u306E";
        }
        if (oldName.includes("\u5357") || oldName.includes("\u5317")) {
          p1 = "";
          p2 = "";
        }
        if (nation.is_empire && nation.empire_name_base) {
          const base = nation.empire_name_base;
          this.updateNationName(nation, `${heir.surname}\u671D${p1}${base}\u5E1D\u56FD`);
          this.addEvent(year, `${heir.name}\u304C\u7D99\u627F\u3057\u305F\u304C\u3001\u4E00\u65CF\u306E\u5BFE\u7ACB\u306B\u3088\u308A${oldName}\u306F\u5206\u88C2\u3057\u305F\uFF01`, nation.id, [heir.id, ruler.id]);
          heir2 = this.generatePerson(era, "Ruler", 6, year, newNationId, ruler.id, ruler.surname);
          newNationName = `${heir2.surname}\u671D${p2}${base}\u5E1D\u56FD`;
        } else {
          if (!p1 && !p2) {
            const suffix = nation.is_empire ? "\u5E1D\u56FD" : era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
            this.updateNationName(nation, getUniqueNationName(capName, heir.surname, suffix, era, heir, this.nations, (min, max) => this.getRandomInt(min, max)));
          } else {
            this.updateNationName(nation, p1 + oldName);
          }
          this.addEvent(year, `${heir.name}\u304C\u7D99\u627F\u3057\u305F\u304C\u3001\u4E00\u65CF\u306E\u5BFE\u7ACB\u306B\u3088\u308A${oldName}\u306F\u5206\u88C2\u3057\u305F\uFF01`, nation.id, [heir.id, ruler.id]);
          heir2 = this.generatePerson(era, "Ruler", 6, year, newNationId, ruler.id, ruler.surname);
          newNationName = p2 ? p2 + oldName : nation.is_empire ? this.generateEmpireName(heir2, nation) : getUniqueNationName(capName, heir2.surname, era === "ancient_china" ? "\u56FD" : "\u738B\u56FD", era, heir2, this.nations, (min, max) => this.getRandomInt(min, max));
        }
      }
      const newNation = createNation({
        id: newNationId,
        stability: nation.stability,
        currentRulerId: heir2.id,
        color: this.getRandomColor()
      });
      this.nations.push(newNation);
      this.updateNationName(newNation, newNationName);
      heir2.nation_id = newNationId;
      this.updateRuler(newNation, heir2, year);
      this.addEvent(year, `${heir2.name}\u304C${heir.name}\u306B\u5BFE\u6297\u3057\u3066${newNationName}\u3092\u72EC\u7ACB\u3055\u305B\u305F\uFF01`, newNationId, [heir2.id, heir.id]);
      const empireTerritories = this.territories.filter((t) => t.owner_nation_id === nation.id);
      const splitCount = Math.floor(empireTerritories.length / 2);
      for (let i = 0; i < splitCount; i++) {
        if (!empireTerritories[i].is_capital) {
          empireTerritories[i].owner_nation_id = newNationId;
        }
      }
      const newNationTerritories = this.territories.filter((t) => t.owner_nation_id === newNationId);
      if (newNationTerritories.length > 0)
        newNationTerritories[0].is_capital = true;
    }
    generate(era, startYear, years, initialNationsCount, numTerritories) {
      this.reset();
      let tCount = numTerritories != null ? numTerritories : this.getRandomInt(20, 30);
      tCount = Math.max(15, Math.min(30, tCount));
      const generatedTerritories = [];
      const usedCombinations = /* @__PURE__ */ new Set();
      for (let i = 0; i < tCount; i++) {
        let result = generateTerritoryName(era, usedCombinations, (min, max) => this.getRandomInt(min, max));
        while (!result) {
          result = generateTerritoryName(era, usedCombinations, (min, max) => this.getRandomInt(min, max));
        }
        usedCombinations.add(result.comboKey);
        generatedTerritories.push(result.tName);
      }
      const mapSeed = this.getRandomInt(1, 1e6);
      let s = mapSeed;
      const rng = () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
      };
      const blobs = [];
      const blobCount = Math.floor(rng() * 4) + 3;
      for (let i = 0; i < blobCount; i++) {
        blobs.push({ x: 0.3 + rng() * 0.4, y: 0.3 + rng() * 0.4, r: 0.1 + rng() * 0.2 });
      }
      const isInside = (x, y) => {
        const centerX = 0.5;
        const centerY = 0.5;
        const dx = x - centerX;
        const dy = y - centerY;
        const angle = Math.atan2(dy, dx);
        const dist = Math.sqrt(dx * dx + dy * dy);
        let maxR = 0;
        blobs.forEach((b) => {
          const bDx = Math.cos(angle);
          const bDy = Math.sin(angle);
          const distToB = Math.sqrt(Math.pow(b.x - centerX, 2) + Math.pow(b.y - centerY, 2));
          const angleToB = Math.atan2(b.y - centerY, b.x - centerX);
          const diffA = Math.cos(angle - angleToB);
          const rAtA = Math.max(0, b.r - distToB * (1 - diffA));
          maxR = Math.max(maxR, rAtA + distToB * diffA);
        });
        const noise = Math.sin(angle * 10 + rng()) * 0.02 + Math.cos(angle * 25) * 0.01;
        return dist < maxR + noise;
      };
      let islandCount = 0;
      const placedPoints = [];
      this.territories = generatedTerritories.map((name) => {
        let bestX = 0.5, bestY = 0.5;
        let maxMinDist = -1;
        let finalIsIsland = false;
        const numCandidates = 20;
        for (let c = 0; c < numCandidates; c++) {
          let tx = 0.15 + rng() * 0.7;
          let ty = 0.15 + rng() * 0.7;
          let inside = isInside(tx, ty);
          let currentIsIsland = false;
          if (!inside) {
            if (islandCount < 2 && rng() < 0.05) {
              currentIsIsland = true;
            } else {
              continue;
            }
          }
          let minDist = 1e9;
          for (const p of placedPoints) {
            const d = Math.sqrt(Math.pow(tx - p.x, 2) + Math.pow(ty - p.y, 2));
            if (d < minDist)
              minDist = d;
          }
          if (minDist > maxMinDist) {
            maxMinDist = minDist;
            bestX = tx;
            bestY = ty;
            finalIsIsland = currentIsIsland;
          }
        }
        if (finalIsIsland)
          islandCount++;
        placedPoints.push({ x: bestX, y: bestY });
        return createTerritory({ id: this.nextTerritoryId++, name, x: bestX, y: bestY });
      });
      const edges = [];
      for (let i = 0; i < this.territories.length; i++) {
        for (let j = i + 1; j < this.territories.length; j++) {
          const t1 = this.territories[i];
          const t2 = this.territories[j];
          const dist = Math.sqrt(Math.pow(t1.x - t2.x, 2) + Math.pow(t1.y - t2.y, 2));
          edges.push({ t1, t2, dist });
        }
      }
      edges.sort((a, b) => a.dist - b.dist);
      const parent = /* @__PURE__ */ new Map();
      this.territories.forEach((t) => parent.set(t.id, t.id));
      const find = (id) => {
        if (parent.get(id) === id)
          return id;
        const root = find(parent.get(id));
        parent.set(id, root);
        return root;
      };
      const union = (id1, id2) => {
        const r1 = find(id1);
        const r2 = find(id2);
        if (r1 !== r2)
          parent.set(r1, r2);
      };
      let connectionsCount = 0;
      for (const edge of edges) {
        if (find(edge.t1.id) !== find(edge.t2.id)) {
          edge.t1.connectedIds.push(edge.t2.id);
          edge.t2.connectedIds.push(edge.t1.id);
          union(edge.t1.id, edge.t2.id);
          connectionsCount++;
        }
        if (connectionsCount >= this.territories.length - 1)
          break;
      }
      this.territories.forEach((t) => {
        const nearby = edges.filter((e) => e.t1.id === t.id || e.t2.id === t.id).slice(0, 2);
        nearby.forEach((e) => {
          const other = e.t1.id === t.id ? e.t2 : e.t1;
          if (!t.connectedIds.includes(other.id)) {
            t.connectedIds.push(other.id);
            other.connectedIds.push(t.id);
          }
        });
      });
      let availableTerritories = [...this.territories];
      for (let i = 0; i < initialNationsCount; i++) {
        if (availableTerritories.length === 0)
          break;
        const capitalIndex = this.getRandomInt(0, availableTerritories.length - 1);
        const capital = availableTerritories[capitalIndex];
        availableTerritories.splice(capitalIndex, 1);
        const nationId = this.nextNationId++;
        const ruler = this.generatePerson(era, "Ruler", 6, startYear, nationId);
        capital.is_capital = true;
        capital.owner_nation_id = nationId;
        const suffix = era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
        const nationName = getUniqueNationName(capital.name, ruler.surname, suffix, era, ruler, this.nations, (min, max) => this.getRandomInt(min, max));
        const newNation = createNation({
          id: nationId,
          stability: 50,
          currentRulerId: ruler.id,
          color: this.getRandomColor()
        });
        this.nations.push(newNation);
        this.updateNationName(newNation, nationName);
        this.updateRuler(newNation, ruler, startYear);
      }
      for (const t of availableTerritories) {
        const randomNation = this.nations[this.getRandomInt(0, this.nations.length - 1)];
        t.owner_nation_id = randomNation.id;
      }
      for (let i = 0; i < initialNationsCount * 5; i++) {
        const randomNation = this.nations[this.getRandomInt(0, this.nations.length - 1)];
        this.generatePerson(era, "General", 3, startYear, randomNation.id);
      }
      for (let i = 0; i < initialNationsCount * 3; i++) {
        this.generatePerson(era, "Free", 1, startYear, null);
      }
      this.addEvent(startYear, "\u7FA4\u96C4\u5272\u62E0\u306E\u6642\u4EE3\u304C\u59CB\u307E\u3063\u305F\u3002", null);
      for (const nation of this.nations) {
        const ruler = this.people.find((p) => p.id === nation.current_ruler_id);
        if (ruler) {
          const age = startYear - ruler.birth_year;
          const cap = this.territories.find((t) => t.owner_nation_id === nation.id && t.is_capital) || this.territories.find((t) => t.owner_nation_id === nation.id);
          this.addEvent(startYear, `${ruler.name}\u304C${nation.name}\u3092\u5EFA\u56FD\u3057\u305F\u3002\uFF08\u5F53\u6642${age}\u6B73\uFF09`, nation.id, [ruler.id], cap ? [cap.id] : []);
        }
      }
      let unified = false;
      const endYear = startYear + years - 1;
      for (let year = startYear + 1; year <= endYear; year++) {
        unified = this._simulateYear(year, era, unified);
      }
      return { era, startYear, nations: this.nations, territories: this.territories, people: this.people, events: this.events, diplomacy: this.diplomacy, relationships: this.relationships, config: this.config, mapSeed };
    }
    _simulateYear(year, era, unified) {
      const livingPeople = this.people.filter((p) => !p.is_dead);
      unified = this._phaseRestoration(year, era, unified);
      let activeNations = this.getActiveNations();
      if (activeNations.length === 0 && livingPeople.length === 0)
        return unified;
      this._phaseDiplomacy(year, activeNations);
      const globalRoll = this._phaseGlobalEvents(year, activeNations);
      this._phasePeople(year, era, livingPeople, activeNations, globalRoll);
      this._phasePersonnel(year, era, activeNations);
      this._phasePoliticalEvents(year, activeNations);
      unified = this._phaseConflicts(year, era, activeNations, unified);
      this._phaseCleanup(year, activeNations);
      unified = this._phaseUnificationCheck(year, era, unified);
      this._phaseEpithets(year, era);
      return unified;
    }
    _phaseRestoration(year, era, unified) {
      const activeNations = this.getActiveNations();
      const livingPeople = this.people.filter((p) => !p.is_dead);
      if (activeNations.length === 0) {
        if (livingPeople.length === 0) {
          this.addEvent(year, "\u4E16\u754C\u306F\u8352\u5EC3\u3057\u3001\u8A18\u9332\u306F\u9014\u7D76\u3048\u305F\u3002", null);
          return unified;
        } else {
          const candidates = livingPeople.filter((p) => p.role === "General" || p.role === "Free" || p.role === "Ruler" || p.role === "Rebel");
          if (candidates.length > 0) {
            const hero = candidates.sort((a, b) => b.ambition - a.ambition)[0];
            const neutralTerrs = this.territories.filter((t) => t.owner_nation_id === null);
            if (neutralTerrs.length > 0) {
              const territory = neutralTerrs[this.getRandomInt(0, neutralTerrs.length - 1)];
              const nationId = this.nextNationId++;
              const suffix = era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
              const nationName = getUniqueNationName(territory.name, hero.surname, suffix, era, hero, this.nations, (min, max) => this.getRandomInt(min, max));
              const newNation = createNation({
                id: nationId,
                stability: 60,
                currentRulerId: hero.id,
                color: this.getRandomColor()
              });
              this.nations.push(newNation);
              this.updateNationName(newNation, nationName);
              hero.nation_id = nationId;
              this.updateRuler(newNation, hero, year);
              this.addEvent(year, `${hero.name}\u304C${territory.name}\u306B\u62E0\u3063\u3066\u65D7\u63DA\u3052\u3057\u3001${nationName}\u3092\u5EFA\u56FD\u3057\u305F\uFF01`, nationId, [hero.id], [territory.id]);
              return false;
            }
          }
        }
      }
      return unified;
    }
    _phaseDiplomacy(year, activeNations) {
      const nationPairs = [];
      for (let i = 0; i < activeNations.length; i++) {
        for (let j = i + 1; j < activeNations.length; j++) {
          nationPairs.push([activeNations[i], activeNations[j]]);
        }
      }
      for (const nation of activeNations) {
        const ruler = this.people.find((r) => r.id === nation.current_ruler_id);
        if (ruler) {
          const innerCircle = this.people.filter((p) => p.nation_id === nation.id && !p.is_dead && p.role !== "Ruler");
          innerCircle.forEach((p) => {
            const rel = this.getPersonalRelation(p.id, ruler.id);
            if (rel.tags.includes("Bond")) {
              nation.stability += this.config.stabilityGainBond;
            }
          });
        }
      }
      nationPairs.forEach(([n1, n2]) => {
        if (this.getRandomInt(1, 100) > 10)
          return;
        const rel = this.getDipRelation(n1.id, n2.id);
        const roll = this.getRandomInt(1, 100);
        if (rel.status === "War") {
          if (roll <= 20) {
            rel.status = "Peace";
            rel.affinity = 0;
            this.addEvent(year, `${n1.name}\u3068${n2.name}\u306E\u9593\u3067\u8B1B\u548C\u304C\u6210\u7ACB\u3002`, null);
          }
        } else if (rel.status === "Alliance") {
          if (roll <= 10) {
            rel.status = "Peace";
            rel.affinity -= 20;
            this.addEvent(year, `${n1.name}\u3068${n2.name}\u306E\u540C\u76DF\u304C\u89E3\u6D88\u3002`, null);
          } else {
            rel.affinity += 5;
            n1.stability += 2;
            n2.stability += 2;
          }
        } else {
          if (roll <= 10) {
            rel.status = "War";
            rel.affinity -= 50;
            this.addEvent(year, `${n1.name}\u304C${n2.name}\u306B\u5BA3\u6226\u5E03\u544A\u3001\u6226\u4E89\u72B6\u614B\u3068\u306A\u3063\u305F\uFF01`, null);
          } else if (roll <= 25) {
            rel.affinity -= 15;
            this.addEvent(year, `${n1.name}\u304C${n2.name}\u306B\u9593\u8ADC\u3092\u9001\u308A\u8FBC\u3093\u3060\u3053\u3068\u304C\u9732\u898B\u3057\u3001\u4E0D\u4FE1\u611F\u304C\u52DF\u3063\u305F\u3002`, null);
          } else if (roll <= 45) {
            rel.status = "Alliance";
            rel.affinity += 40;
            this.addEvent(year, `${n1.name}\u3068${n2.name}\u304C\u540C\u76DF\u3092\u7DE0\u7D50\u3057\u305F\u3002`, null);
          } else if (roll <= 65) {
            rel.affinity += 10;
            this.addEvent(year, `${n1.name}\u3068${n2.name}\u306E\u9593\u3067\u4EA4\u6613\u304C\u76DB\u3093\u306B\u884C\u308F\u308C\u3066\u3044\u308B\u3002`, null);
          }
        }
      });
    }
    _phaseGlobalEvents(year, activeNations) {
      const globalRoll = this.getRandomInt(1, 100);
      if (globalRoll <= this.config.plagueChance * 100) {
        if (this.getRandomInt(1, 2) === 1) {
          this.addEvent(year, "\u672A\u66FE\u6709\u306E\u7570\u5E38\u6C17\u8C61\u304C\u4E16\u754C\u3092\u8972\u3044\u3001\u5404\u5730\u3067\u98E2\u9949\u304C\u767A\u751F\u3057\u305F\u3002", null);
          activeNations.forEach((n) => n.stability -= 15);
        } else {
          this.addEvent(year, "\u6050\u308D\u3057\u3044\u75AB\u75C5\u304C\u4E16\u754C\u898F\u6A21\u3067\u5927\u6D41\u884C\u3057\u3001\u591A\u304F\u306E\u547D\u304C\u596A\u308F\u308C\u305F\u3002", null);
          activeNations.forEach((n) => n.stability -= 10);
        }
      }
      return globalRoll;
    }
    _phasePeople(year, era, livingPeople, activeNations, globalRoll) {
      for (const p of livingPeople) {
        this.updatePersonGrowth(p, year);
        const age = year - p.birth_year;
        if (age === 15 && p.role === "Child") {
          this._handleGenpuku(year, p);
        }
        if (this._handleDeath(year, era, p, age, globalRoll, activeNations)) {
          continue;
        }
        this._handleLoyaltyImpact(p);
        if (age >= 20 && age <= 50 && this.getRandomInt(1, 100) <= this.config.birthRate * 100) {
          const child = this.generatePerson(era, "Child", 0, year, null, p.id, p.surname);
          this.addEvent(year, `${p.name}\u306B\u5B50\uFF08\u5F8C\u306E${child.name}\uFF09\u304C\u8A95\u751F\u3057\u305F\u3002`, p.nation_id, [p.id, child.id]);
        }
        if (age >= 60 && (p.role === "Ruler" || p.rank_level >= 5)) {
          this._handleAdoption(year, era, p, age);
        }
      }
    }
    _handleGenpuku(year, p) {
      var _a;
      const father = this.people.find((f) => f.id === p.father_id);
      if (father && !father.is_dead && father.nation_id) {
        p.role = "General";
        p.rank_level = 2;
        p.nation_id = father.nation_id;
        const nName = ((_a = this.nations.find((n) => n.id === p.nation_id)) == null ? void 0 : _a.name) || "\u8ECD";
        this.addEvent(year, `${father.name}\u306E\u5B50\u3001${p.name}\u304C\u5143\u670D\u3057\u3001${nName}\u306B\u4ED5\u5B98\u3057\u305F\u3002`, p.nation_id, [p.id, father.id]);
      } else {
        p.role = "Free";
        p.rank_level = 1;
        this.addEvent(year, `${p.name}\u304C\u5143\u670D\u3057\u3001\u5728\u91CE\u306E\u58EB\u3068\u306A\u3063\u305F\u3002`, null, [p.id]);
      }
    }
    _handleDeath(year, era, p, age, globalRoll, activeNations) {
      let deathProb = age >= this.config.deathAgeThreshold ? (age - (this.config.deathAgeThreshold - 5)) * 1.5 : this.config.deathBaseProb * 100;
      if (globalRoll <= this.config.plagueChance * 100)
        deathProb += 5;
      if (this.getRandomInt(1, 1e3) <= deathProb * 10) {
        const cause = globalRoll <= 5 ? "\u75AB\u75C5" : age < 15 ? "\u592D\u6298" : age < 50 ? "\u75C5\u6B7B" : "\u8001\u8870";
        this._terminatePerson(p, year, era, cause);
        return true;
      }
      const roll = this.getRandomInt(1, 1e3);
      if (roll <= this.config.assassinationChance * 1e3 && age >= 15) {
        this._terminatePerson(p, year, era, "\u6697\u6BBA");
        return true;
      } else if (roll <= (this.config.assassinationChance + this.config.recruitmentRate) * 1e3 && p.role === "Free" && activeNations.length > 0) {
        const nation = activeNations[this.getRandomInt(0, activeNations.length - 1)];
        p.nation_id = nation.id;
        p.role = "General";
        p.rank_level = 2;
        this.addEvent(year, `\u5728\u91CE\u306E\u58EB\u3067\u3042\u308B${p.name}\u304C${nation.name}\u306B\u4ED5\u5B98\u3057\u305F\u3002`, nation.id, [p.id]);
      } else if (roll <= (this.config.assassinationChance + this.config.recruitmentRate + this.config.promotionRate) * 1e3 && p.role === "General") {
        this._handlePromotion(year, era, p, age);
      }
      return false;
    }
    _terminatePerson(p, year, era, cause) {
      if (p.is_chancellor) {
        const n = this.nations.find((nn) => nn.id === p.nation_id);
        if (n)
          this.terminateChancellor(n, year);
      }
      p.is_dead = true;
      p.death_year = year;
      p.death_cause = cause;
      p.final_rank_name = ranksConfig[era][p.rank_level] || (p.role === "Ruler" ? "\u541B\u4E3B" : "\u4E00\u822C");
      const age = year - p.birth_year;
      if (cause === "\u6697\u6BBA") {
        this.addEvent(year, `${p.name}\u304C\u4F55\u8005\u304B\u306B\u3088\u3063\u3066\u6697\u6BBA\u3055\u308C\u305F\uFF01\uFF08\u4EAB\u5E74${age}\uFF09`, p.nation_id, [p.id]);
      } else {
        this.addEvent(year, `${p.name}\u304C\u3053\u306E\u4E16\u3092\u53BB\u3063\u305F\u3002\uFF08\u4EAB\u5E74${age}\u3001\u6B7B\u56E0\uFF1A${cause}\uFF09`, p.nation_id, [p.id]);
      }
      if (p.role === "Ruler" || p.role === "Rebel")
        this.handleRulerDeath(year, p, era);
    }
    _handlePromotion(year, era, p, age) {
      p.loyalty += 10;
      if (p.loyalty > 100)
        p.loyalty = 100;
      const maxRank = era === "ancient_china" ? ranksConfig[era].indexOf("\u537F") : ranksConfig[era].indexOf("\u516C\u7235");
      if (p.rank_level < maxRank) {
        p.rank_level++;
        if (p.rank_level > p.max_rank_level)
          p.max_rank_level = p.rank_level;
        const rankName = ranksConfig[era][p.rank_level] || "\u4E00\u822C";
        const nation = this.nations.find((n) => n.id === p.nation_id);
        if (nation) {
          this.addEvent(year, `${nation.name}\u306E${p.name}\u304C\u6B66\u529F\u3092\u7ACB\u3066\u3001${rankName}\u306B\u6607\u9032\u3057\u305F\u3002\uFF08\u5F53\u6642${age}\u6B73\uFF09`, nation.id, [p.id]);
        }
      }
    }
    _handleLoyaltyImpact(p) {
      if (p.nation_id !== null && p.role !== "Ruler") {
        const nation = this.nations.find((n) => n.id === p.nation_id);
        if (nation) {
          const ruler = this.people.find((r) => r.id === nation.current_ruler_id);
          if (ruler) {
            const rel = this.getPersonalRelation(p.id, ruler.id);
            if (rel.tags.includes("KilledParent") || rel.tags.includes("Usurper") || rel.tags.includes("Hate")) {
              p.loyalty -= 3 + this.getRandomInt(0, 3);
            } else if (rel.tags.includes("Bond")) {
              p.loyalty += 2;
            }
          }
        }
      }
    }
    _handleAdoption(year, era, p, age) {
      const hasChild = this.people.some((child) => child.father_id === p.id && !child.is_dead);
      if (!hasChild && this.getRandomInt(1, 100) <= this.config.adoptionRate * 100) {
        const adopted = this.generatePerson(era, "General", 2, year, p.nation_id, p.id, p.surname);
        const adoptedAge = this.getRandomInt(15, 25);
        adopted.birth_year = year - adoptedAge;
        adopted.is_adopted = true;
        this.addEvent(year, `\u8DE1\u7D99\u304E\u306E\u3044\u306A\u3044${p.name}\uFF08\u5F53\u6642${age}\u6B73\uFF09\u306F\u3001\u5BB6\u9580\u3092\u7DAD\u6301\u3059\u308B\u305F\u3081${adopted.name}\uFF08\u5F53\u6642${adoptedAge}\u6B73\uFF09\u3092\u990A\u5B50\u306B\u8FCE\u3048\u305F\u3002`, p.nation_id, [p.id, adopted.id]);
      }
    }
    _phasePersonnel(year, era, activeNations) {
      for (const nation of activeNations) {
        const nationTerrs = this.territories.filter((t) => t.owner_nation_id === nation.id);
        const targetCount = nationTerrs.length + 1;
        let subordinates = this.people.filter((p) => p.nation_id === nation.id && (p.role === "General" || p.is_chancellor) && !p.is_dead);
        if (subordinates.length < 2) {
          this._hireSubordinates(year, era, nation, subordinates, 2);
          subordinates = this.people.filter((p) => p.nation_id === nation.id && (p.role === "General" || p.is_chancellor) && !p.is_dead);
        }
        if (subordinates.length < targetCount) {
          this._hireSubordinates(year, era, nation, subordinates, targetCount);
        }
        this._appointChancellor(year, era, nation);
      }
    }
    _hireSubordinates(year, era, nation, subordinates, target) {
      const freePeople = this.people.filter((p) => p.role === "Free" && !p.is_dead);
      const ruler = this.people.find((r) => r.id === nation.current_ruler_id);
      for (let i = subordinates.length; i < target; i++) {
        let hire = null;
        if (freePeople.length > 0) {
          const candidate = freePeople[this.getRandomInt(0, freePeople.length - 1)];
          if (ruler) {
            const rel = this.getPersonalRelation(candidate.id, ruler.id);
            if (!rel.tags.includes("KilledParent") && !rel.tags.includes("Usurper")) {
              hire = candidate;
              freePeople.splice(freePeople.indexOf(candidate), 1);
            }
          } else {
            hire = candidate;
            freePeople.splice(freePeople.indexOf(candidate), 1);
          }
        }
        if (hire) {
          hire.nation_id = nation.id;
          hire.role = "General";
          hire.rank_level = 2;
          this.addEvent(year, `${nation.name}\u306E\u541B\u4E3B\u306F\u52E2\u529B\u62E1\u5927\u306E\u305F\u3081\u3001\u5728\u91CE\u306E${hire.name}\u3092\u65B0\u305F\u306B\u767B\u7528\u3057\u305F\u3002`, nation.id, [hire.id]);
        } else {
          const newGen = this.generatePerson(era, "General", 2, year, nation.id);
          this.addEvent(year, `${nation.name}\u306E\u52E2\u529B\u62E1\u5927\u306B\u4F34\u3044\u3001\u65B0\u305F\u306A\u624D\u899A\u3092\u6301\u3064${newGen.name}\u304C\u4ED5\u5B98\u3057\u305F\u3002`, nation.id, [newGen.id]);
        }
      }
    }
    _appointChancellor(year, era, nation) {
      const currentChancellor = this.people.find((p) => p.nation_id === nation.id && p.is_chancellor && !p.is_dead);
      if (!currentChancellor) {
        const qingRank = 5;
        const candidates = this.people.filter((p) => p.nation_id === nation.id && p.rank_level >= qingRank && !p.is_dead && p.role === "General");
        if (candidates.length > 0) {
          const appointee = candidates.sort((a, b) => b.intellect - a.intellect)[0];
          this.updateChancellor(nation, appointee, year);
          const title = era === "ancient_china" ? "\u4E1E\u76F8" : "\u5BB0\u76F8";
          const ruler = this.people.find((p) => p.id === nation.current_ruler_id);
          this.addEvent(year, `${nation.name}\u306E\u541B\u4E3B${ruler ? ruler.name : "\u541B\u4E3B"}\u306F${appointee.name}\u3092\u65B0\u305F\u306B${title}\u306B\u4EFB\u547D\u3057\u305F\u3002`, nation.id, [appointee.id, ruler ? ruler.id : null]);
        }
      }
    }
    _phasePoliticalEvents(year, activeNations) {
      for (const nation of activeNations) {
        const roll = this.getRandomInt(1, 100);
        if (roll <= 5) {
          this._handleGoodRulerEvent(year, nation);
        } else if (roll <= 10) {
          this._handleBadRulerEvent(year, nation);
        } else if (roll <= 20) {
          this._handleGeneralRelations(year, nation);
        }
      }
    }
    _handleGoodRulerEvent(year, nation) {
      nation.stability += 15;
      const ruler = this.people.find((p) => p.id === nation.current_ruler_id && !p.is_dead);
      if (ruler) {
        const goodEvents = ["\u5927\u898F\u6A21\u306A\u6CBB\u6C34\u5DE5\u4E8B\u3092\u6210\u529F\u3055\u305B\u3001\u56FD\u306F\u8C4A\u4F5C\u306B\u6CB8\u3044\u305F", "\u7A0E\u3092\u6E1B\u514D\u3057\u3001\u6C11\u306E\u66AE\u3089\u3057\u306F\u5927\u304D\u304F\u5411\u4E0A\u3057\u305F", "\u8857\u9053\u3092\u6574\u5099\u3057\u3001\u4EA4\u6613\u304C\u76DB\u3093\u306B\u884C\u308F\u308C\u3066\u56FD\u306F\u7E41\u6804\u3057\u305F", "\u8CE2\u4EBA\u3092\u767B\u7528\u3057\u3001\u516C\u6B63\u306A\u88C1\u5224\u3092\u884C\u3063\u305F\u3053\u3068\u3067\u56FD\u306F\u5B89\u5B9A\u3057\u305F"];
        this.addEvent(year, `${nation.name}\u306E\u541B\u4E3B${ruler.name}\u304C${goodEvents[this.getRandomInt(0, goodEvents.length - 1)]}\u3002\uFF08\u5F53\u6642${year - ruler.birth_year}\u6B73\uFF09`, nation.id, [ruler.id]);
      }
    }
    _handleBadRulerEvent(year, nation) {
      nation.stability -= 15;
      const ruler = this.people.find((p) => p.id === nation.current_ruler_id && !p.is_dead);
      if (ruler) {
        const badEvents = ["\u91CD\u7A0E\u3092\u8AB2\u3057\u3001\u6C11\u306E\u751F\u6D3B\u306F\u56F0\u7AAE\u3092\u6975\u3081\u305F", "\u79C1\u5229\u79C1\u6B32\u306E\u305F\u3081\u306B\u5927\u5BAE\u6BBF\u3092\u5EFA\u8A2D\u3057\u3001\u56FD\u5EAB\u304C\u7A7A\u306B\u306A\u3063\u305F", "\u8AEB\u8A00\u3059\u308B\u5FE0\u81E3\u3092\u6B21\u3005\u3068\u51E6\u5211\u3057\u3001\u5BAE\u5EF7\u306F\u6050\u6016\u306B\u5305\u307E\u308C\u305F", "\u9152\u6C60\u8089\u6797\u306E\u5BB4\u3092\u9023\u65E5\u958B\u304D\u3001\u653F\u52D9\u306F\u5B8C\u5168\u306B\u505C\u6EDE\u3057\u305F"];
        this.addEvent(year, `${nation.name}\u306E\u541B\u4E3B${ruler.name}\u304C${badEvents[this.getRandomInt(0, badEvents.length - 1)]}\u3002\uFF08\u5F53\u6642${year - ruler.birth_year}\u6B73\uFF09`, nation.id, [ruler.id]);
      }
    }
    _handleGeneralRelations(year, nation) {
      const generals = this.people.filter((p) => p.nation_id === nation.id && (p.role === "General" || p.is_chancellor) && !p.is_dead);
      if (generals.length >= 2) {
        const g1 = generals[this.getRandomInt(0, generals.length - 1)];
        const g2 = generals.find((g) => g.id !== g1.id) || generals[0];
        if (g1.id !== g2.id) {
          const eventRoll = this.getRandomInt(1, 100);
          if (eventRoll <= 40) {
            this._handleGeneralBond(year, nation, g1, g2);
          } else if (eventRoll <= 80) {
            this._handleGeneralHate(year, nation, g1, g2);
          } else {
            this._handlePowerStruggle(year, nation, g1, g2);
          }
        }
      }
    }
    _handleGeneralBond(year, nation, g1, g2) {
      const bondEvents = [
        "\u5171\u540C\u3067\u306E\u6226\u529F\u3092\u8B83\u3048\u5408\u3044\u3001\u7FA9\u5144\u5F1F\u306E\u5951\u308A\u3092\u7D50\u3093\u3060",
        "\u6226\u5834\u3067\u7AAE\u5730\u306B\u9665\u3063\u305F\u3068\u3053\u308D\u3092\u6551\u308F\u308C\u3001\u6DF1\u3044\u4FE1\u983C\u95A2\u4FC2\u3092\u7BC9\u3044\u305F",
        "\u4E92\u3044\u306E\u624D\u80FD\u3092\u8A8D\u3081\u5408\u3044\u3001\u56FD\u306E\u5C06\u6765\u3092\u5171\u306B\u8A9E\u308A\u660E\u304B\u3057\u305F",
        "\u9577\u5E74\u306E\u5354\u529B\u95A2\u4FC2\u3092\u7D4C\u3066\u3001\u7121\u4E8C\u306E\u89AA\u53CB\u3068\u306A\u3063\u305F",
        "\u653F\u7B56\u3092\u5DE1\u308B\u8B70\u8AD6\u306E\u672B\u3001\u4E92\u3044\u3092\u4E0D\u53EF\u6B20\u306A\u7406\u89E3\u8005\u3068\u8A8D\u3081\u305F"
      ];
      g1.loyalty += 15;
      g2.loyalty += 15;
      this.modifyPersonalRelation(g1.id, g2.id, 20);
      this.addEvent(year, `${nation.name}\u306E\u5C06\u3001${g1.name}\u3068${g2.name}\u304C${bondEvents[this.getRandomInt(0, bondEvents.length - 1)]}\u3002`, nation.id, [g1.id, g2.id]);
    }
    _handleGeneralHate(year, nation, g1, g2) {
      const hateEvents = [
        "\u529F\u7E3E\u3092\u5DE1\u3063\u3066\u6FC0\u3057\u304F\u5BFE\u7ACB\u3057\u3001\u4E92\u3044\u306B\u4E0D\u4FE1\u611F\u3092\u62B1\u304F\u3088\u3046\u306B\u306A\u3063\u305F",
        "\u4E9B\u7D30\u306A\u610F\u898B\u306E\u76F8\u9055\u304B\u3089\u611F\u60C5\u7684\u306A\u5BFE\u7ACB\u306B\u767A\u5C55\u3057\u3001\u4E0D\u4EF2\u3068\u306A\u3063\u305F",
        "\u4E00\u65B9\u306E\u51FA\u4E16\u3092\u5AC9\u307F\u3001\u516C\u7136\u3068\u8AB9\u8B17\u4E2D\u50B7\u3059\u308B\u3088\u3046\u306B\u306A\u3063\u305F",
        "\u65B9\u91DD\u3092\u5DE1\u3063\u3066\u771F\u3063\u5411\u304B\u3089\u5BFE\u7ACB\u3057\u3001\u6C7A\u5B9A\u7684\u306A\u6E9D\u304C\u751F\u307E\u308C\u305F",
        "\u904E\u53BB\u306E\u5931\u614B\u3092\u84B8\u3057\u8FD4\u3055\u308C\u3001\u4FEE\u5FA9\u4E0D\u53EF\u80FD\u306A\u95A2\u4FC2\u3068\u306A\u3063\u305F"
      ];
      g1.loyalty -= 15;
      g2.loyalty -= 15;
      nation.stability -= 5;
      this.modifyPersonalRelation(g1.id, g2.id, -20);
      this.addEvent(year, `${nation.name}\u306E\u5BAE\u5EF7\u3067${g1.name}\u3068${g2.name}\u304C${hateEvents[this.getRandomInt(0, hateEvents.length - 1)]}\u3002`, nation.id, [g1.id, g2.id]);
    }
    _handlePowerStruggle(year, nation, g1, g2) {
      g1.loyalty -= 20;
      g2.loyalty -= 20;
      nation.stability -= 10;
      this.modifyPersonalRelation(g1.id, g2.id, -30);
      this.addEvent(year, `${nation.name}\u306E\u5BAE\u5EF7\u3067${g1.name}\u3068${g2.name}\u306B\u3088\u308B\u6FC0\u3057\u3044\u6A29\u529B\u95D8\u4E89\u304C\u767A\u751F\u3057\u305F\u3002`, nation.id, [g1.id, g2.id]);
    }
    _phaseConflicts(year, era, activeNations, unified) {
      for (const nation of activeNations) {
        if (!unified && this.getRandomInt(1, 100) > 40) {
          this._handleBattle(year, era, nation);
        } else if (unified && this.getRandomInt(1, 100) <= this.config.rebellionChance * 100 && nation.stability < 60) {
          unified = this._handleRebellion(year, era, nation);
        } else if (unified && this.getRandomInt(1, 100) <= this.config.usurpationChance * 100 && nation.stability < 80) {
          this._handleUsurpation(year, era, nation);
        } else if (unified && this.getRandomInt(1, 1e3) <= 5 && nation.stability >= 80) {
          this._handleZenjou(year, era, nation);
        }
      }
      return unified;
    }
    _handleBattle(year, era, attacker) {
      const targets = this.getActiveNations().filter((n) => n.id !== attacker.id);
      if (targets.length === 0)
        return;
      const targetScores = targets.map((t) => {
        const rel = this.getDipRelation(attacker.id, t.id);
        let score = 10;
        if (rel.status === "War")
          score += 50;
        if (rel.status === "Alliance")
          score -= 100;
        score -= rel.affinity / 2;
        return { target: t, score: Math.max(1, score) };
      });
      const totalScore = targetScores.reduce((sum, ts) => sum + ts.score, 0);
      let r = this.getRandomInt(1, totalScore);
      let target;
      for (const ts of targetScores) {
        r -= ts.score;
        if (r <= 0) {
          target = ts.target;
          break;
        }
      }
      if (!target)
        target = targets[0];
      resolveBattle({
        year,
        era,
        attackerNation: attacker,
        defenderNation: target,
        people: this.people,
        territories: this.territories,
        addEvent: (y, d, nid, pids, tids) => this.addEvent(y, d, nid, pids, tids),
        getRandomInt: (min, max) => this.getRandomInt(min, max),
        handleRulerDeath: (y, r2, e) => this.handleRulerDeath(y, r2, e)
      });
    }
    _handleRebellion(year, era, nation) {
      const rebelLeader = this.generatePerson(era, "Rebel", 3, year, null);
      const rebelNationId = this.nextNationId++;
      rebelLeader.nation_id = rebelNationId;
      const rebelNameCandidates = era === "ancient_china" ? ["\u9EC4\u5DFE\u8ECD", "\u8D64\u7709\u8ECD", "\u7DD1\u6797\u8ECD", "\u9ED2\u5C71\u8ECD", "\u767D\u6CE2\u8ECD", "\u7D05\u5DFE\u8ECD"] : ["\u8FB2\u6C11\u53CD\u4E71\u8ECD", "\u30B8\u30E3\u30C3\u30AF\u30EA\u30FC\u8ECD", "\u4E16\u76F4\u3057\u4E00\u63C6", "\u81EA\u7531\u8FB2\u6C11\u8ECD", "\u6551\u4E16\u4E3B\u306E\u8ECD", "\u7FA9\u8CCA\u56E3"];
      const rebelName = rebelNameCandidates[this.getRandomInt(0, rebelNameCandidates.length - 1)];
      const tt = this.territories.filter((t) => t.owner_nation_id === nation.id);
      if (tt.length > 0) {
        const stolenCap = tt[this.getRandomInt(0, tt.length - 1)];
        stolenCap.owner_nation_id = rebelNationId;
        stolenCap.is_capital = true;
        const rebelNation = createNation({
          id: rebelNationId,
          stability: 40,
          currentRulerId: rebelLeader.id,
          color: "#eab308"
        });
        this.nations.push(rebelNation);
        const rebelNameFinal = getUniqueRebelName(stolenCap.name, rebelName, this.nations, era);
        this.updateNationName(rebelNation, rebelNameFinal);
        this.updateRuler(rebelNation, rebelLeader, year);
        this.addEvent(year, `\u82DB\u653F\u306B\u8010\u3048\u304B\u306D\u305F\u8FB2\u6C11\u305F\u3061\u304C${stolenCap.name}\u3067\u8702\u8D77\u3057\u3001${rebelLeader.name}\u3092\u6307\u5C0E\u8005\u3068\u3059\u308B${rebelNameFinal}\u304C\u7D50\u6210\u3055\u308C\u305F\uFF01`, rebelNationId, [rebelLeader.id], [stolenCap.id]);
        nation.stability -= 30;
        const remain = this.territories.filter((t) => t.owner_nation_id === nation.id && !t.is_capital);
        for (let i = 0; i < 2 && remain.length > 0; i++) {
          const idx = this.getRandomInt(0, remain.length - 1);
          remain[idx].owner_nation_id = rebelNationId;
          remain.splice(idx, 1);
        }
        return false;
      }
      return true;
    }
    _handleUsurpation(year, era, nation) {
      const generals = this.people.filter((p) => p.nation_id === nation.id && p.role === "General" && !p.is_dead);
      if (generals.length === 0)
        return;
      const potentialUsurpers = generals.filter((g) => {
        const ruler = this.people.find((r) => r.id === nation.current_ruler_id);
        const rel = ruler ? this.getPersonalRelation(g.id, ruler.id) : null;
        const resentment = rel ? rel.tags.includes("Usurper") || rel.tags.includes("KilledParent") || rel.tags.includes("Hate") ? 40 : 0 : 0;
        return g.ambition + resentment > 110 || g.ambition > 70 && nation.stability < 30;
      });
      if (potentialUsurpers.length > 0) {
        const usurper = potentialUsurpers[this.getRandomInt(0, potentialUsurpers.length - 1)];
        const oldRuler = this.people.find((p) => p.id === nation.current_ruler_id);
        const nationTerrs = this.territories.filter((t) => t.owner_nation_id === nation.id);
        let capital = nationTerrs.find((t) => t.is_capital) || nationTerrs[0];
        capital.is_capital = true;
        const capName = capital.name;
        const suffix = era === "ancient_china" ? "\u56FD" : "\u738B\u56FD";
        usurper.is_usurper = true;
        usurper.rank_level = 8;
        if (oldRuler) {
          this.people.filter((p) => this.isClanMember(p, oldRuler)).forEach((p) => {
            this.addRelationTag(p.id, usurper.id, "Usurper");
            this.modifyPersonalRelation(p.id, usurper.id, -50);
          });
        }
        this.addEvent(year, `\u91CE\u5FC3\u306B\u71C3\u3048\u308B\u6B66\u5C06\u3001${usurper.name}\u304C${oldRuler ? oldRuler.name : "\u541B\u4E3B"}\u64C1\u3059\u308B${nation.name}\u306E\u9996\u90FD${capName}\u3092\u5236\u5727\u3057\u3001\u65B0\u738B\u671D\u3092\u6253\u3061\u7ACB\u3066\u305F\uFF01\uFF08\u5F53\u6642${year - usurper.birth_year}\u6B73\uFF09`, nation.id, [usurper.id, oldRuler ? oldRuler.id : null], [capital.id]);
        if (oldRuler) {
          if (this.getRandomInt(1, 100) <= 80) {
            oldRuler.is_dead = true;
            oldRuler.death_year = year;
            oldRuler.death_cause = "\u51E6\u5211";
            this.people.filter((p) => p.father_id === oldRuler.id).forEach((child) => {
              this.addRelationTag(child.id, usurper.id, "KilledParent");
              this.modifyPersonalRelation(child.id, usurper.id, -50);
            });
            this.addEvent(year, `${oldRuler.name}\u306F\u6355\u3089\u3048\u3089\u308C\u3001\u6DF7\u4E71\u306E\u4E2D\u3067\u51E6\u5211\u3055\u308C\u305F\u3002`, nation.id, [oldRuler.id]);
          } else {
            oldRuler.role = "Free";
            oldRuler.rank_level = 1;
            this.addEvent(year, `${oldRuler.name}\u306F\u547D\u304B\u3089\u304C\u3089\u90FD\u3092\u8131\u51FA\u3057\u3001\u91CE\u306B\u4E0B\u3063\u305F\u3002`, nation.id, [oldRuler.id]);
          }
        }
        this.updateRuler(nation, usurper, year);
        const newName = nation.is_empire ? this.generateEmpireName(usurper, nation) : getUniqueNationName(capName, usurper.surname, suffix, era, usurper, this.nations, (min, max) => this.getRandomInt(min, max));
        this.updateNationName(nation, newName);
        nation.stability = 30;
      }
    }
    _handleZenjou(year, era, nation) {
      const share = this.territories.filter((t) => t.owner_nation_id === nation.id).length / this.territories.length;
      if (share < 0.8)
        return;
      const chancellor = this.people.find((p) => p.nation_id === nation.id && p.is_chancellor && !p.is_dead);
      if (chancellor && chancellor.ambition > 80) {
        const oldRuler = this.people.find((p) => p.id === nation.current_ruler_id);
        const nationTerrs = this.territories.filter((t) => t.owner_nation_id === nation.id);
        let capital = nationTerrs.find((t) => t.is_capital) || nationTerrs[0];
        capital.is_capital = true;
        this.addEvent(year, `${nation.name}\u306E\u4E1E\u76F8\u3001${chancellor.name}\u306E\u6A29\u52E2\u306F\u6975\u307E\u308A\u3001${oldRuler ? oldRuler.name : "\u541B\u4E3B"}\u304B\u3089\u4F4D\u3092\u8B72\u308A\u53D7\u3051\u305F\uFF08\u7985\u8B72\uFF09\u3002`, nation.id, [chancellor.id, oldRuler ? oldRuler.id : null]);
        if (oldRuler) {
          oldRuler.role = "Free";
          oldRuler.rank_level = 1;
          this.people.filter((p) => this.isClanMember(p, oldRuler)).forEach((p) => {
            this.addRelationTag(p.id, chancellor.id, "Usurper");
            this.modifyPersonalRelation(p.id, chancellor.id, -30);
          });
        }
        chancellor.is_usurper = true;
        this.updateRuler(nation, chancellor, year);
        nation.is_empire = true;
        const newName = this.generateEmpireName(chancellor, nation);
        this.updateNationName(nation, newName);
        nation.stability = 70;
      }
    }
    _phaseCleanup(year, activeNations) {
      for (const nation of activeNations) {
        const hasTerritory = this.territories.some((t) => t.owner_nation_id === nation.id);
        if (!hasTerritory) {
          this.addEvent(year, `${nation.name}\u306F\u5168\u3066\u306E\u9818\u571F\u3092\u5931\u3044\u3001\u6EC5\u4EA1\u3057\u305F\u3002`, null);
          this.terminateRuler(nation, year);
          this.terminateChancellor(nation, year);
          this.people.forEach((p) => {
            if (p.nation_id === nation.id && !p.is_dead) {
              p.nation_id = null;
              p.role = "Free";
              p.rank_level = 1;
              p.is_chancellor = false;
            }
          });
        }
      }
    }
    _phaseUnificationCheck(year, era, unified) {
      const activeNationsNow = this.getActiveNations();
      const hasNeutral = this.territories.some((t) => t.owner_nation_id === null);
      if (activeNationsNow.length === 1 && !hasNeutral) {
        const winner = activeNationsNow[0];
        if (!unified) {
          this._handleUnification(winner, year, era);
          return true;
        }
      } else {
        return false;
      }
      return unified;
    }
    _handleUnification(winner, year, era) {
      const ruler = this.people.find((p) => p.id === winner.current_ruler_id);
      if (!winner.is_empire) {
        const nationTerrs = this.territories.filter((t) => t.owner_nation_id === winner.id);
        let capital = nationTerrs.find((t) => t.is_capital) || nationTerrs[0];
        capital.is_capital = true;
        const oldName = winner.name;
        const newName = ruler ? this.generateEmpireName(ruler, winner) : getUniqueNationName(capital.name, "\u65B0", "\u5E1D\u56FD", era, null, this.nations, (min, max) => this.getRandomInt(min, max));
        this.updateNationName(winner, newName);
        winner.is_empire = true;
        this.people.forEach((p) => {
          if (p.nation_id === winner.id && !p.is_dead) {
            if (p.id === winner.current_ruler_id)
              p.role = "Ruler";
            else if (p.role === "Rebel")
              p.role = "General";
          }
        });
        if (ruler) {
          ruler.is_unifier = true;
          ruler.rank_level = 8;
          this.assignEpithet(ruler, year, era);
        }
        this.addEvent(year, `${ruler ? ruler.name : oldName}\u304C\u5929\u4E0B\u3092\u7D71\u4E00\u3057\u3001\u65B0\u305F\u306B${winner.name}\u3092\u5EFA\u56FD\u3057\u305F\uFF01\u6226\u4E71\u306E\u4E16\u306F\u7D42\u308F\u3063\u305F\u3002\uFF08\u5F53\u6642${ruler ? year - ruler.birth_year : "?"}\u6B73\uFF09`, winner.id, ruler ? [ruler.id] : []);
      } else {
        this.addEvent(year, `${winner.name}\u304C\u518D\u3073\u4E16\u754C\u3092\u7D71\u4E00\u3057\u3001\u5E73\u548C\u304C\u8A2A\u308C\u305F\u3002`, winner.id, ruler ? [ruler.id] : []);
      }
    }
    _phaseEpithets(year, era) {
      this.people.filter((p) => !p.is_dead && !p.epithet && p.nation_id !== null).forEach((p) => {
        const chance = p.role === "Ruler" || p.is_chancellor ? 1 : 0.5;
        if (this.getRandomInt(1, 2e3) <= 10 * chance) {
          this.assignEpithet(p, year, era);
        }
      });
    }
    continueGenerate(existingData, additionalYears) {
      this.nations = existingData.nations;
      this.territories = existingData.territories;
      this.people = existingData.people;
      this.events = existingData.events;
      this.diplomacy = existingData.diplomacy || {};
      this.relationships = existingData.relationships || {};
      if (existingData.config)
        this.config = existingData.config;
      this.nextNationId = Math.max(...this.nations.map((n) => n.id), 0) + 1;
      this.nextTerritoryId = Math.max(...this.territories.map((t) => t.id), 0) + 1;
      this.nextPersonId = Math.max(...this.people.map((p) => p.id), 0) + 1;
      const era = existingData.era;
      const lastYear = Math.max(...this.events.map((e) => e.year));
      const fromYear = lastYear + 1;
      const toYear = fromYear + additionalYears - 1;
      let unified = this.getActiveNations().length <= 1;
      this.addEvent(fromYear, `\u65B0\u305F\u306A\u6642\u4EE3\u306E\u5E55\u304C\u4E0A\u304C\u3063\u305F\u3002\u6B74\u53F2\u306E\u7D9A\u304D\u304C\u7D21\u304C\u308C\u308B\u3002`, null);
      for (let year = fromYear; year <= toYear; year++) {
        unified = this._simulateYear(year, era, unified);
      }
      const eraResult = era || "ancient_china";
      const mapSeed = existingData.mapSeed;
      return {
        era: eraResult,
        startYear: existingData.startYear,
        nations: this.nations,
        territories: this.territories,
        people: this.people,
        events: this.events,
        diplomacy: this.diplomacy,
        relationships: this.relationships,
        mapSeed
      };
    }
  };

  // src/Frontend/infrastructure/persistence.ts
  async function setupSQLite() {
    if (!window.initSqlJs) {
      console.error("sql.js not loaded");
      return null;
    }
    const SQL2 = await window.initSqlJs({
      locateFile: (file) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    });
    return SQL2;
  }
  function exportToSQLite(SQL2, currentData3) {
    if (!currentData3)
      return;
    const exportDb = new SQL2.Database();
    exportDb.run("CREATE TABLE meta (key TEXT, value TEXT);");
    exportDb.run(`INSERT INTO meta VALUES ('era', ?), ('startYear', ?), ('mapSeed', ?), ('config', ?)`, [
      currentData3.era,
      currentData3.startYear.toString(),
      currentData3.mapSeed.toString(),
      JSON.stringify(currentData3.config || {})
    ]);
    exportDb.run("CREATE TABLE nations (id INTEGER PRIMARY KEY, name TEXT, stability INTEGER, current_ruler_id INTEGER, is_empire INTEGER, ruler_history TEXT, chancellor_history TEXT, name_history TEXT);");
    exportDb.run("CREATE TABLE territories (id INTEGER PRIMARY KEY, name TEXT, owner_nation_id INTEGER, is_capital INTEGER, x REAL, y REAL);");
    exportDb.run("CREATE TABLE people (id INTEGER PRIMARY KEY, nation_id INTEGER, name TEXT, surname TEXT, given_name TEXT, role TEXT, military INTEGER, intellect INTEGER, ambition INTEGER, loyalty INTEGER, rank_level INTEGER, is_dead INTEGER, birth_year INTEGER, death_year INTEGER, father_id INTEGER, clan_id INTEGER, is_chancellor INTEGER, epithet TEXT, is_adopted INTEGER);");
    exportDb.run("CREATE TABLE events (year INTEGER, description TEXT, nation_id INTEGER, person_ids TEXT);");
    exportDb.run("CREATE TABLE diplomacy (pair_key TEXT PRIMARY KEY, status TEXT, affinity INTEGER);");
    exportDb.run("CREATE TABLE relationships (pair_key TEXT PRIMARY KEY, affinity INTEGER, tags TEXT);");
    currentData3.nations.forEach((n) => {
      exportDb.run(`INSERT INTO nations VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [
        n.id,
        n.name,
        n.stability,
        n.current_ruler_id,
        n.is_empire ? 1 : 0,
        JSON.stringify(n.ruler_history || []),
        JSON.stringify(n.chancellor_history || []),
        JSON.stringify(n.name_history || [])
      ]);
    });
    currentData3.territories.forEach((t) => {
      exportDb.run(`INSERT INTO territories VALUES (?, ?, ?, ?, ?, ?)`, [t.id, t.name, t.owner_nation_id, t.is_capital ? 1 : 0, t.x, t.y]);
    });
    currentData3.people.forEach((p) => {
      exportDb.run(`INSERT INTO people VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
        p.id,
        p.nation_id,
        p.name,
        p.surname,
        p.given_name,
        p.role,
        p.military,
        p.intellect,
        p.ambition,
        p.loyalty,
        p.rank_level,
        p.is_dead ? 1 : 0,
        p.birth_year,
        p.death_year,
        p.father_id,
        p.clan_id,
        p.is_chancellor ? 1 : 0,
        p.epithet,
        p.is_adopted ? 1 : 0
      ]);
    });
    currentData3.events.forEach((e) => {
      exportDb.run(`INSERT INTO events VALUES (?, ?, ?, ?)`, [e.year, e.description, e.nation_id, JSON.stringify(e.person_ids)]);
    });
    Object.entries(currentData3.diplomacy).forEach(([key, val]) => {
      exportDb.run(`INSERT INTO diplomacy VALUES (?, ?, ?)`, [key, val.status, val.affinity]);
    });
    Object.entries(currentData3.relationships || {}).forEach(([key, rel]) => {
      exportDb.run(`INSERT INTO relationships VALUES (?, ?, ?)`, [key, rel.affinity, rel.tags.join(",")]);
    });
    const data = exportDb.export();
    const blob = new Blob([data], { type: "application/x-sqlite3" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chronicle_save_${Date.now()}.sqlite`;
    a.click();
    URL.revokeObjectURL(url);
  }
  function importFromSQLite(db2) {
    var _a, _b, _c, _d;
    const getRows = (table) => {
      const stmt = db2.prepare(`SELECT * FROM ${table}`);
      const rows = [];
      while (stmt.step())
        rows.push(stmt.getAsObject());
      stmt.free();
      return rows;
    };
    const meta = getRows("meta");
    const era = ((_a = meta.find((m) => m.key === "era")) == null ? void 0 : _a.value) || "ancient_china";
    const startYear = parseInt(((_b = meta.find((m) => m.key === "startYear")) == null ? void 0 : _b.value) || "1", 10);
    const mapSeed = parseInt(((_c = meta.find((m) => m.key === "mapSeed")) == null ? void 0 : _c.value) || Math.floor(Math.random() * 1e6).toString(), 10);
    const configStr = (_d = meta.find((m) => m.key === "config")) == null ? void 0 : _d.value;
    const config = configStr ? JSON.parse(configStr) : void 0;
    const nRows = getRows("nations");
    const nations = nRows.map((r) => __spreadProps(__spreadValues({}, r), {
      is_empire: r.is_empire === 1,
      ruler_history: JSON.parse(r.ruler_history || "[]"),
      chancellor_history: JSON.parse(r.chancellor_history || "[]"),
      name_history: JSON.parse(r.name_history || "[]")
    }));
    nations.forEach((n) => {
      if (!n.name_history || n.name_history.length === 0) {
        n.name_history = [n.name];
      }
    });
    const tRows = getRows("territories");
    const territories = tRows.map((r) => __spreadProps(__spreadValues({}, r), {
      is_capital: r.is_capital === 1,
      x: r.x !== void 0 ? r.x : 0,
      y: r.y !== void 0 ? r.y : 0
    }));
    const pRows = getRows("people");
    const people = pRows.map((r) => __spreadProps(__spreadValues({}, r), {
      is_dead: r.is_dead === 1,
      is_chancellor: r.is_chancellor === 1,
      is_adopted: r.is_adopted === 1,
      epithet: r.epithet || null
    }));
    people.sort((a, b) => a.id - b.id);
    people.forEach((p) => {
      if (p.clan_id === void 0 || p.clan_id === null) {
        const father = p.father_id ? people.find((f) => f.id === p.father_id) : null;
        p.clan_id = father ? father.clan_id : p.id;
      }
    });
    nations.forEach((n) => {
      const history = n.chancellor_history || [];
      if (history.length > 0) {
        const last = history[history.length - 1];
        if (!last.end) {
          const chancellor = people.find((p) => p.id === last.id);
          if (chancellor && !chancellor.is_dead) {
            chancellor.is_chancellor = true;
          }
        }
      }
    });
    const eRows = getRows("events");
    const events = eRows.map((r) => __spreadProps(__spreadValues({}, r), { person_ids: JSON.parse(r.person_ids || "[]") }));
    const dipRows = getRows("diplomacy");
    const diplomacy = {};
    dipRows.forEach((r) => {
      diplomacy[r.pair_key] = { status: r.status, affinity: r.affinity };
    });
    const relationships = {};
    getRows("relationships").forEach((r) => {
      relationships[r.pair_key] = { affinity: r.affinity, tags: r.tags ? r.tags.split(",") : [] };
    });
    return { era, startYear, nations, territories, people, events, diplomacy, relationships, config, mapSeed };
  }

  // src/Frontend/domain/biographyGenerator.ts
  function generateBiography(p, allPeople, nations, era) {
    const lines = [];
    const ageAtDeath = p.is_dead && p.death_year ? p.death_year - p.birth_year : 999;
    if (ageAtDeath < 15) {
      lines.push("\u5C06\u6765\u3092\u5631\u671B\u3055\u308C\u305F\u304C\u3001\u305D\u306E\u624D\u80FD\u3092\u958B\u82B1\u3055\u305B\u308B\u3053\u3068\u306A\u304F\u3001\u5E7C\u304F\u3057\u3066\u3053\u306E\u4E16\u3092\u53BB\u3063\u305F\u3002");
      if (p.max_rank_level >= 8) {
        lines.push("\u5E7C\u5E1D\u3068\u3057\u3066\u305D\u306E\u91CD\u8CAC\u3092\u62C5\u3063\u305F\u304C\u3001\u4E71\u4E16\u306E\u8352\u6CE2\u306B\u6297\u3046\u3053\u3068\u306F\u53F6\u308F\u306A\u304B\u3063\u305F\u3002");
      } else if (p.role === "Ruler" || p.max_rank_level >= 6) {
        lines.push("\u5E7C\u304F\u3057\u3066\u5BB6\u9580\u3092\u7D99\u3044\u3060\u304C\u3001\u4F55\u4E8B\u3082\u6210\u3059\u524D\u306B\u305D\u306E\u751F\u6DAF\u3092\u7D42\u3048\u305F\u3002");
      } else {
        lines.push("\u4F55\u4E8B\u3082\u6210\u3059\u524D\u306B\u3001\u9759\u304B\u306B\u305D\u306E\u751F\u6DAF\u3092\u9589\u3058\u305F\u3002");
      }
      const cause = p.death_cause || "\u4E16\u3092\u53BB\u3063\u305F";
      const causeText = cause === "\u4E16\u3092\u53BB\u3063\u305F" ? "\u65E9\u4E16\u3057\u305F" : `${cause}\u306B\u3088\u308A\u65E9\u4E16\u3057\u305F`;
      lines.push(`\u6700\u671F\u306F${ageAtDeath}\u6B73\u306E\u82E5\u3055\u3067${causeText}\u3002`);
      return lines.join("");
    }
    const growthDesc = {
      "Standard": "\u5805\u5B9F\u306A\u6B69\u307F\u3092\u8FBF\u3063\u305F\u4EBA\u7269\u3002",
      "Early": "\u82E5\u304F\u3057\u3066\u305D\u306E\u624D\u3092\u73FE\u3057\u3001\u65E9\u719F\u306E\u5929\u624D\u3068\u8B33\u308F\u308C\u305F\u3002",
      "Late": "\u5927\u5668\u6669\u6210\u3092\u5730\u3067\u884C\u304D\u3001\u8001\u5883\u306B\u5165\u3063\u3066\u304B\u3089\u771F\u4FA1\u3092\u767A\u63EE\u3057\u305F\u3002",
      "Genius": "\u985E\u307E\u308C\u306A\u308B\u5929\u8CE6\u306E\u624D\u306B\u6075\u307E\u308C\u3001\u751F\u6DAF\u3092\u901A\u3058\u3066\u5091\u51FA\u3057\u305F\u5B9F\u529B\u3092\u793A\u3057\u305F\u3002",
      "Steady": "\u6D6E\u6C88\u306E\u6FC0\u3057\u3044\u4E71\u4E16\u306B\u3042\u3063\u3066\u3001\u5E38\u306B\u5B89\u5B9A\u3057\u305F\u5B9F\u529B\u3092\u4FDD\u3061\u7D9A\u3051\u305F\u3002"
    };
    lines.push(growthDesc[p.growth_type] || "\u6CE2\u4E71\u306E\u6642\u4EE3\u3092\u751F\u304D\u629C\u3044\u305F\u4EBA\u7269\u3002");
    let achievement = "";
    const eraName = era === "ancient_china" ? "\u4E2D\u83EF" : "\u5927\u9678";
    const rankName = ranksConfig[era][p.max_rank_level] || "\u91CD\u8077";
    if (p.role === "Rebel") {
      achievement = "\u82DB\u653F\u306B\u6297\u3046\u3079\u304F\u53CD\u4E71\u306E\u65D7\u3092\u63B2\u3052\u3001\u6C11\u8846\u3092\u7387\u3044\u3066\u4E00\u52E2\u529B\u3092\u7BC9\u304D\u4E0A\u3052\u305F\u3002";
    } else if (p.is_unifier) {
      achievement = `\u9577\u304D\u306B\u308F\u305F\u308B\u6226\u4E71\u306E\u4E16\u3092\u7D42\u7D50\u3055\u305B\u3001${eraName}\u7D71\u4E00\u306E\u5049\u696D\u3092\u6210\u3057\u9042\u3052\u305F\u5275\u696D\u306E\u7956\u3068\u3057\u3066\u3001\u6B74\u53F2\u306B\u4E0D\u6EC5\u306E\u8DB3\u8DE1\u3092\u523B\u3093\u3060\u3002`;
    } else if (p.max_rank_level >= 8) {
      let prefix = "\u4E00\u56FD\u306E\u4E3B\u304B\u3089";
      if (p.is_usurper)
        prefix = "\u52D5\u4E71\u306B\u4E57\u3058\u3066\u524D\u738B\u671D\u3092\u8986\u3057\u3001";
      else if (p.is_heir_succession) {
        achievement = `\u6B63\u5F53\u306A\u5F8C\u7D99\u8005\u3068\u3057\u3066${eraName}\u3092\u7D71\u3079\u308B\u7687\u5E1D\u306E\u5EA7\u3092\u7D99\u627F\u3057\u3001\u9577\u304F\u4E16\u3092\u6CBB\u3081\u305F\u3002`;
      }
      if (!achievement) {
        achievement = `${prefix}${eraName}\u3092\u7D71\u3079\u308B\u7687\u5E1D\u3068\u3057\u3066\u3001\u4E71\u4E16\u306B\u8987\u3092\u5531\u3048\u305F\u3002`;
      }
    } else if (p.had_chancellor_experience || p.is_chancellor) {
      const cTitle = era === "ancient_china" ? "\u4E1E\u76F8" : "\u5BB0\u76F8";
      achievement = `\u4E00\u56FD\u306E${cTitle}\u3068\u3057\u3066\u56FD\u653F\u3092\u638C\u308A\u3001${rankName}\u3092\u8D85\u3048\u308B\u6A29\u52E2\u3092\u632F\u308B\u3063\u3066\u56FD\u5BB6\u306E\u5C4B\u53F0\u9AA8\u3092\u652F\u3048\u305F\u3002`;
    } else if (p.role === "Ruler" || p.max_rank_level >= 6) {
      let prefix = "\u4E00\u56FD\u306E\u541B\u4E3B\u3068\u3057\u3066\u3001";
      if (p.is_usurper)
        prefix = "\u524D\u738B\u671D\u306B\u4EE3\u308F\u3063\u3066\u5B9F\u6A29\u3092\u638C\u63E1\u3057\u3001";
      else if (p.is_heir_succession)
        prefix = "\u6B63\u5F53\u306A\u5F8C\u7D99\u8005\u3068\u3057\u3066\u5BB6\u9580\u3092\u7D99\u304E\u3001";
      achievement = `${prefix}${rankName}\u3068\u3057\u3066\u4E71\u4E16\u306B\u8987\u3092\u5531\u3048\u305F\u3002`;
    } else if (p.max_rank_level >= 2) {
      achievement = `\u305D\u306E\u624D\u899A\u3092\u8A8D\u3081\u3089\u308C\u3001\u6700\u9AD8\u4F4D\u306F${rankName}\u306B\u307E\u3067\u767B\u308A\u8A70\u3081\u305F\u3002`;
    } else {
      achievement = "\u751F\u6DAF\u3092\u91CE\u306B\u4E0B\u3063\u3066\u904E\u3054\u3057\u305F\u3002";
    }
    lines.push(achievement);
    if (p.epithet) {
      lines.push(`\u305D\u306E\u969B\u7ACB\u3063\u305F\u6D3B\u8E8D\u304B\u3089\u3001\u5F8C\u4E16\u306B\u306F\u300C${p.epithet}\u300D\u306E\u7570\u540D\u3067\u8A9E\u308A\u7D99\u304C\u308C\u308B\u3053\u3068\u3068\u306A\u3063\u305F\u3002`);
    }
    if (p.is_dead) {
      let finalTitle = p.final_rank_name || "\u4E00\u822C";
      if (p.role === "Rebel")
        finalTitle = "\u53CD\u4E71\u8ECD\u6307\u5C0E\u8005";
      const cause = p.death_cause || "\u4E16\u3092\u53BB\u3063\u305F";
      let deathLine = "";
      if (cause === "\u51E6\u5211") {
        deathLine = `\u6700\u5F8C\u306F\u53CD\u4E71\u306B\u3088\u308A\u6355\u3089\u3048\u3089\u308C\u3001\u6DF7\u4E71\u306E\u4E2D\u3067\u51E6\u5211\u3055\u308C\u305F\u3002`;
      } else if (p.final_rank_name === "\u7687\u5E1D") {
        const causeText = cause === "\u4E16\u3092\u53BB\u3063\u305F" ? "\u5D29\u3058\u305F" : `${cause}\u306B\u3088\u308A\u5D29\u3058\u305F`;
        deathLine = `\u6700\u671F\u306F\u7687\u5E1D\u3068\u3057\u3066\u305D\u306E\u6804\u83EF\u3092\u6975\u3081\u3001${causeText}\u3002`;
      } else if (p.final_rank_name === "\u738B" || p.final_rank_name === "\u516C" || p.final_rank_name === "\u516C\u7235") {
        const causeText = cause === "\u4E16\u3092\u53BB\u3063\u305F" ? "\u305D\u306E\u751F\u6DAF\u3092\u9589\u3058\u305F" : `${cause}\u306B\u3088\u3063\u3066\u305D\u306E\u751F\u6DAF\u3092\u9589\u3058\u305F`;
        deathLine = `\u6700\u671F\u306F${finalTitle}\u3068\u3057\u3066\u4E00\u6642\u4EE3\u3092\u7BC9\u304D\u3001${causeText}\u3002`;
      } else if (p.role === "Rebel") {
        const causeText = cause === "\u4E16\u3092\u53BB\u3063\u305F" ? "\u305D\u306E\u6CE2\u4E71\u306B\u6E80\u3061\u305F\u751F\u6DAF\u3092\u7D42\u3048\u305F" : `${cause}\u306B\u3088\u308A\u305D\u306E\u6CE2\u4E71\u306B\u6E80\u3061\u305F\u751F\u6DAF\u3092\u7D42\u3048\u305F`;
        deathLine = `\u6700\u671F\u306F\u53CD\u4E71\u8ECD\u6307\u5C0E\u8005\u3068\u3057\u3066\u53CD\u4E71\u306E\u5FD7\u534A\u3070\u306B\u3057\u3066\u3001${causeText}\u3002`;
      } else {
        const causeText = cause === "\u4E16\u3092\u53BB\u3063\u305F" ? "\u3053\u306E\u4E16\u3092\u53BB\u3063\u305F" : `${cause}\u306B\u3088\u308A\u3053\u306E\u4E16\u3092\u53BB\u3063\u305F`;
        deathLine = `\u6700\u671F\u306F${finalTitle}\u306E\u8EAB\u3067${causeText}\u3002`;
      }
      lines.push(deathLine);
    }
    const descendants = allPeople.filter((desc) => desc.father_id === p.id);
    const notableDescendants = descendants.filter((desc) => desc.role === "Ruler" || desc.rank_level >= 5);
    if (notableDescendants.length > 0) {
      const descNames = notableDescendants.map((d) => d.name).slice(0, 2).join("\u3084");
      lines.push(`\u305D\u306E\u8840\u8108\u306F\u7D76\u3048\u305A\u3001${descNames}\u3068\u3044\u3063\u305F\u5091\u51FA\u3057\u305F\u5B50\u5B6B\u3092\u8F29\u51FA\u3057\u3066\u5BB6\u9580\u3092\u7E41\u6804\u3055\u305B\u305F\u3002`);
    } else if (descendants.length > 0) {
      lines.push("\u591A\u304F\u306E\u5B50\u3092\u907A\u3057\u3001\u305D\u306E\u8840\u8108\u3092\u5F8C\u4E16\u3078\u3068\u7E4B\u3044\u3060\u3002");
    }
    return lines.join("");
  }

  // src/Frontend/ui/renderer.ts
  var currentData = null;
  var currentSortCol = "";
  var currentSortAsc = true;
  var elements = {
    nationList: null,
    territoryList: null,
    historyLog: null,
    peopleList: null,
    peopleModal: null,
    detailModal: null,
    detailModalTitle: null,
    detailModalHeader: null,
    detailHistoryLog: null,
    nationSuccessionContainer: null,
    mapCanvas: null,
    territoryMarkers: null
  };
  function initUI() {
    Object.keys(elements).forEach((id) => {
      elements[id] = document.getElementById(id);
    });
    document.querySelectorAll("th[data-sort]").forEach((th) => {
      th.addEventListener("click", () => {
        const col = th.getAttribute("data-sort");
        if (!col)
          return;
        if (currentSortCol === col) {
          currentSortAsc = !currentSortAsc;
        } else {
          currentSortCol = col;
          currentSortAsc = true;
        }
        if (currentData)
          renderPeopleTable(currentData.people, currentData.nations);
      });
    });
    window.showPersonDetail = (id) => showPersonDetail(id);
    window.showNationDetail = (id) => showNationDetail(id);
    window.showNationRulers = (id, endYear) => showNationSuccessors(id, "ruler", endYear);
    window.showNationChancellors = (id, endYear) => showNationSuccessors(id, "chancellor", endYear);
    window.showTerritoryDetail = (id) => showTerritoryDetail(id);
    window.toggleFamilyTree = (clanId) => toggleFamilyTree(clanId);
  }
  function render(data) {
    currentData = data;
    renderNations(data.nations, data.territories);
    renderMap(data.territories, data.nations);
    renderEvents(data.events);
  }
  function renderNations(nations, territories) {
    if (!elements.nationList)
      return;
    elements.nationList.innerHTML = "";
    nations.forEach((n) => {
      const hasTerritory = territories.some((t) => t.owner_nation_id === n.id);
      const isFallen = !hasTerritory;
      const div = document.createElement("div");
      div.className = `p-3 rounded border flex justify-between items-center cursor-pointer transition ${isFallen ? "bg-stone-200 border-stone-300 opacity-60" : "border-stone-200 hover:brightness-95"}`;
      if (!isFallen)
        div.style.backgroundColor = n.color || "#f5f5f4";
      div.onclick = () => showNationDetail(n.id);
      const nameDisplay = isFallen ? `<span class="font-bold text-lg text-stone-600 line-through">${n.name}</span> <span class="text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded ml-2 shadow-sm">\u6EC5\u4EA1</span>` : `<span class="font-bold text-lg text-white drop-shadow-md">${n.name}</span>`;
      const stabilityDisplay = isFallen ? '<span class="text-xs text-stone-500 italic">\u6B74\u53F2\u306E\u5F7C\u65B9\u3078</span>' : `<span class="text-xs bg-white/30 text-white font-bold px-2 py-1 rounded backdrop-blur-sm">\u5B89\u5B9A\u5EA6: ${n.stability}</span>`;
      div.innerHTML = `
            <div class="pointer-events-none">${nameDisplay}</div>
            <div class="pointer-events-none">${stabilityDisplay}</div>
        `;
      elements.nationList.appendChild(div);
    });
  }
  function renderMap(territories, nations) {
    const canvas = elements.mapCanvas;
    const markerContainer = elements.territoryMarkers;
    if (!canvas || !markerContainer || !currentData)
      return;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    let seed = currentData.mapSeed;
    const rng = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    const w = rect.width;
    const h = rect.height;
    const V_SIZE = 1e3;
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(0, 0, w, h);
    const blobs = [];
    const blobCount = Math.floor(rng() * 4) + 3;
    for (let i = 0; i < blobCount; i++) {
      blobs.push({
        x: V_SIZE * (0.3 + rng() * 0.4),
        y: V_SIZE * (0.3 + rng() * 0.4),
        r: V_SIZE * (0.1 + rng() * 0.2)
      });
    }
    ctx.beginPath();
    const points = 200;
    const vCenterX = V_SIZE / 2;
    const vCenterY = V_SIZE / 2;
    for (let i = 0; i <= points; i++) {
      const angle = i / points * Math.PI * 2;
      let maxR = 0;
      blobs.forEach((b) => {
        const distToBlobCenter = Math.sqrt(Math.pow(b.x - vCenterX, 2) + Math.pow(b.y - vCenterY, 2));
        const angleToBlob = Math.atan2(b.y - vCenterY, b.x - vCenterX);
        const diffAngle = Math.cos(angle - angleToBlob);
        const rAtAngle = Math.max(0, b.r - distToBlobCenter * (1 - diffAngle));
        maxR = Math.max(maxR, rAtAngle + distToBlobCenter * diffAngle);
      });
      const noise = Math.sin(angle * 10 + rng()) * (V_SIZE * 0.01) + Math.cos(angle * 25) * (V_SIZE * 5e-3);
      const finalR = Math.max(V_SIZE * 0.02, maxR + noise);
      const px = (vCenterX + Math.cos(angle) * finalR) * (w / V_SIZE);
      const py = (vCenterY + Math.sin(angle) * finalR) * (h / V_SIZE);
      if (i === 0)
        ctx.moveTo(px, py);
      else
        ctx.lineTo(px, py);
    }
    ctx.closePath();
    const landGrad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.5);
    landGrad.addColorStop(0, "#f8fafc");
    landGrad.addColorStop(1, "#e2e8f0");
    ctx.fillStyle = landGrad;
    ctx.fill();
    ctx.beginPath();
    ctx.strokeStyle = "#cbd5e1";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    const drawnConnections = /* @__PURE__ */ new Set();
    territories.forEach((t) => {
      if (!t.connectedIds)
        return;
      t.connectedIds.forEach((targetId) => {
        const pairId = [t.id, targetId].sort().join("-");
        if (drawnConnections.has(pairId))
          return;
        const target = territories.find((t2) => t2.id === targetId);
        if (target) {
          ctx.moveTo(t.x * w, t.y * h);
          ctx.lineTo(target.x * w, target.y * h);
          drawnConnections.add(pairId);
        }
      });
    });
    ctx.stroke();
    ctx.setLineDash([]);
    territories.forEach((t) => {
      ctx.beginPath();
      ctx.arc(t.x * w, t.y * h, 15, 0, Math.PI * 2);
      ctx.fillStyle = "#f1f5f9";
      ctx.fill();
      ctx.strokeStyle = "#94a3b8";
      ctx.lineWidth = 1;
      ctx.stroke();
    });
    ctx.strokeStyle = "#64748b";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    markerContainer.innerHTML = "";
    territories.forEach((t) => {
      const nation = nations.find((n) => n.id === t.owner_nation_id);
      const color = nation ? nation.color : "#a8a29e";
      const marker = document.createElement("div");
      marker.className = "absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group pointer-events-auto cursor-pointer";
      marker.style.left = `${t.x * 100}%`;
      marker.style.top = `${t.y * 100}%`;
      marker.innerHTML = `
            <div class="relative">
                <div class="w-4 h-4 rounded-full border-2 border-white shadow-lg transition-transform group-hover:scale-125" style="background-color: ${color}"></div>
                ${t.is_capital ? '<div class="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full border border-white"></div>' : ""}
            </div>
            <span class="mt-1 px-1.5 py-0.5 bg-white/90 rounded text-[10px] font-bold text-stone-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">${t.name}</span>
            <span class="text-[9px] font-medium text-stone-600/80 pointer-events-none drop-shadow-sm group-hover:hidden">${t.name}</span>
        `;
      marker.onclick = () => {
        showTerritoryDetail(t.id);
      };
      markerContainer.appendChild(marker);
    });
  }
  function renderEvents(events) {
    if (!elements.historyLog)
      return;
    elements.historyLog.innerHTML = "";
    events.forEach((e) => {
      const div = document.createElement("div");
      div.className = "flex gap-4 items-start pb-4 border-b border-stone-100 last:border-0";
      div.innerHTML = `
            <div class="w-16 flex-shrink-0 font-mono text-stone-400 text-sm pt-1">${e.year}\u5E74</div>
            <div class="text-stone-800">${formatEventDescription(e)}</div>
        `;
      elements.historyLog.appendChild(div);
    });
  }
  function renderPeopleTable(people, nations) {
    if (!elements.peopleList)
      return;
    let sorted = [...people];
    if (currentSortCol && currentData) {
      sorted.sort((a, b) => {
        var _a, _b, _c, _d;
        let valA, valB;
        const nA = ((_a = nations.find((n) => n.id === a.nation_id)) == null ? void 0 : _a.name) || "\u5728\u91CE";
        const nB = ((_b = nations.find((n) => n.id === b.nation_id)) == null ? void 0 : _b.name) || "\u5728\u91CE";
        const fA = ((_c = people.find((p) => p.id === a.father_id)) == null ? void 0 : _c.name) || "";
        const fB = ((_d = people.find((p) => p.id === b.father_id)) == null ? void 0 : _d.name) || "";
        if (currentSortCol === "name") {
          valA = a.name;
          valB = b.name;
        } else if (currentSortCol === "role") {
          valA = a.role;
          valB = b.role;
        } else if (currentSortCol === "rank") {
          valA = a.rank_level;
          valB = b.rank_level;
        } else if (currentSortCol === "nation") {
          valA = nA;
          valB = nB;
        } else if (currentSortCol === "birth") {
          valA = a.birth_year;
          valB = b.birth_year;
        } else if (currentSortCol === "death") {
          valA = a.death_year || 9999;
          valB = b.death_year || 9999;
        } else if (currentSortCol === "parent") {
          valA = fA;
          valB = fB;
        }
        if (valA < valB)
          return currentSortAsc ? -1 : 1;
        if (valA > valB)
          return currentSortAsc ? 1 : -1;
        return 0;
      });
    }
    elements.peopleList.innerHTML = "";
    sorted.forEach((p) => {
      var _a;
      const nation = nations.find((n) => n.id === p.nation_id);
      const nationName = nation ? nation.name : "\u5728\u91CE/\u6EC5\u4EA1";
      let roleName = "\u5728\u91CE";
      if (p.role === "Ruler")
        roleName = "\u541B\u4E3B";
      else if (p.role === "General") {
        if (p.is_chancellor) {
          roleName = (currentData == null ? void 0 : currentData.era) === "ancient_china" ? "\u4E1E\u76F8" : "\u5BB0\u76F8";
        } else {
          roleName = "\u6B66\u5C06";
        }
      } else if (p.role === "Rebel")
        roleName = "\u53CD\u4E71\u6307\u5C0E\u8005";
      else if (p.role === "Child")
        roleName = "\u672A\u6210\u5E74";
      const era = (currentData == null ? void 0 : currentData.era) || "ancient_china";
      const rankName = ranksConfig[era][p.rank_level] || "\u4E00\u822C";
      let ageStr = "";
      if (p.is_dead) {
        ageStr = `${p.death_year}\u5E74 (\u4EAB\u5E74 ${p.death_year - p.birth_year})`;
      } else {
        const currentYear = ((_a = currentData == null ? void 0 : currentData.events[currentData.events.length - 1]) == null ? void 0 : _a.year) || (currentData == null ? void 0 : currentData.startYear) || 0;
        ageStr = `\u751F\u5B58 (${currentYear - p.birth_year}\u6B73)`;
      }
      let fatherText = "-";
      if (p.father_id) {
        const father = people.find((f) => f.id === p.father_id);
        if (father)
          fatherText = father.name;
      }
      const tr = document.createElement("tr");
      tr.className = "hover:bg-stone-50 cursor-pointer transition";
      tr.onclick = () => showPersonDetail(p.id);
      const nameCol = p.is_dead ? `<span class="text-stone-500">${p.name} <span class="text-red-500 text-xs">(\u6B7B)</span></span>` : `<span class="font-bold text-stone-800">${p.name}</span>`;
      tr.innerHTML = `
            <td class="py-3 px-4 border-b border-stone-200">${nameCol}</td>
            <td class="py-3 px-4 border-b border-stone-200"><span class="text-xs font-semibold px-2 py-1 bg-stone-100 rounded text-stone-600">${roleName}</span></td>
            <td class="py-3 px-4 border-b border-stone-200 text-sm">${rankName}</td>
            <td class="py-3 px-4 border-b border-stone-200 text-sm">${nationName}</td>
            <td class="py-3 px-4 border-b border-stone-200 text-sm font-mono">${p.birth_year}\u5E74</td>
            <td class="py-3 px-4 border-b border-stone-200 text-sm font-mono">${ageStr}</td>
            <td class="py-3 px-4 border-b border-stone-200 text-sm">${fatherText}</td>
        `;
      elements.peopleList.appendChild(tr);
    });
  }
  function formatEventDescription(eObj) {
    if (!currentData)
      return eObj.description;
    let desc = eObj.description;
    const allNationsNames = [];
    currentData.nations.forEach((n) => {
      const names = n.name_history || [n.name];
      names.forEach((name) => {
        allNationsNames.push({ id: n.id, name });
      });
    });
    allNationsNames.sort((a, b) => b.name.length - a.name.length);
    allNationsNames.forEach((n) => {
      if (desc.includes(n.name)) {
        const replacement = `<span class="text-stone-700 hover:underline cursor-pointer font-bold border-b border-dotted border-stone-400" onclick="event.stopPropagation(); window.showNationDetail(${n.id})">${n.name}</span>`;
        desc = desc.split(n.name).join(replacement);
      }
    });
    if (!eObj.person_ids || eObj.person_ids.length === 0)
      return desc;
    const persons = eObj.person_ids.map((id) => currentData.people.find((p) => p.id === id)).filter((p) => p !== void 0);
    persons.sort((a, b) => b.name.length - a.name.length);
    persons.forEach((p) => {
      const replacement = `<span class="text-blue-600 hover:underline cursor-pointer font-bold" onclick="event.stopPropagation(); window.showPersonDetail(${p.id})">${p.name}</span>`;
      desc = desc.split(p.name).join(replacement);
    });
    return desc;
  }
  function showPersonDetail(personId) {
    if (!currentData)
      return;
    const person = currentData.people.find((p) => p.id === personId);
    if (!person)
      return;
    showDetailModal(`${person.name} \u5217\u4F1D`, (e) => e.person_ids !== void 0 && e.person_ids.includes(person.id), person);
  }
  function showNationDetail(nationId) {
    if (!currentData)
      return;
    const nation = currentData.nations.find((n) => n.id === nationId);
    if (!nation)
      return;
    showDetailModal(`${nation.name} \u306E\u6B74\u53F2`, (e) => e.nation_id === nation.id || e.description !== void 0 && e.description.includes(nation.name), null, nation);
  }
  function showTerritoryDetail(territoryId) {
    if (!currentData)
      return;
    const territory = currentData.territories.find((t) => t.id === territoryId);
    if (!territory)
      return;
    showDetailModal(`${territory.name} \u306E\u5730\u53F2`, (e) => e.territory_ids !== void 0 && e.territory_ids.includes(territoryId), null, null, territory);
  }
  function showDetailModal(title, filterFn, person = null, nation = null, territory = null) {
    if (!elements.detailModalTitle || !elements.detailHistoryLog || !elements.detailModalHeader || !elements.detailModal)
      return;
    elements.detailModalTitle.textContent = title;
    elements.detailHistoryLog.innerHTML = "";
    if (person && currentData) {
      elements.detailModalHeader.classList.remove("hidden");
      const nationObj = currentData.nations.find((n) => n.id === person.nation_id);
      const status = nationObj ? nationObj.name : person.is_dead ? "\u306A\u3057" : "\u5728\u91CE";
      const era = currentData.era || "ancient_china";
      const rank = ranksConfig[era][person.rank_level] || "\u4E00\u822C";
      const currentYear = currentData.events.length > 0 ? Math.max(...currentData.events.map((e) => e.year)) : person.birth_year;
      const age = person.is_dead ? person.death_year - person.birth_year : currentYear - person.birth_year;
      const ageLabel = person.is_dead ? `\u4EAB\u5E74${age}` : `\u73FE\u5728${age}\u6B73`;
      const lifespan = `${person.birth_year}\u5E74 \u301C ${person.is_dead ? person.death_year + "\u5E74" : "\u5B58\u547D\u4E2D"} (${ageLabel})`;
      elements.detailModalHeader.innerHTML = `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-sm">
                <div class="col-span-2 md:col-span-4 text-xl font-bold border-b border-stone-200 pb-1 mb-1 text-stone-800">${person.name}</div>
                <div><span class="text-stone-400 font-bold">\u751F\u6CA1\u5E74:</span> ${lifespan}</div>
                <div><span class="text-stone-400 font-bold">\u8EAB\u5206:</span> ${status}</div>
                <div><span class="text-stone-400 font-bold">\u968E\u7D1A:</span> ${rank}</div>
                <div><span class="text-stone-400 font-bold">\u6B66\u52C7:</span> ${person.military}</div>
                <div><span class="text-stone-400 font-bold">\u77E5\u7565:</span> ${person.intellect}</div>
                <div><span class="text-stone-400 font-bold">\u91CE\u5FC3:</span> ${person.ambition}</div>
                <div><span class="text-stone-400 font-bold">\u5FE0\u8AA0:</span> ${person.loyalty}</div>
                <div class="col-span-2 md:col-span-4 p-4 mt-2 bg-stone-50 border-l-4 border-stone-300 rounded text-stone-700 italic text-base leading-relaxed">
                    ${generateBiography(person, currentData.people, currentData.nations, era)}
                </div>
                <div class="col-span-2 md:col-span-4 mt-2">
                    <button onclick="window.toggleFamilyTree(${person.clan_id})" class="text-[10px] bg-stone-200 hover:bg-stone-300 px-3 py-1 rounded text-stone-600 font-bold transition flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        \u5BB6\u7CFB\u56F3\u3092\u8868\u793A/\u975E\u8868\u793A
                    </button>
                </div>
                <div id="familyTreeContainer" class="col-span-2 md:col-span-4 mt-2 hidden p-4 bg-white rounded border border-stone-200 max-h-[300px] overflow-y-auto">
                </div>
            </div>
        `;
      elements.familyTreeContainer = document.getElementById("familyTreeContainer");
    } else if (nation && currentData) {
      elements.detailModalHeader.classList.remove("hidden");
      const nationEvents = currentData.events.filter((e) => e.nation_id === nation.id || e.description.includes(nation.name) && e.description.includes("\u6EC5\u4EA1"));
      const startYear = nationEvents.length > 0 ? Math.min(...nationEvents.map((e) => e.year)) : 0;
      const hasTerritory = currentData.territories.some((t) => t.owner_nation_id === nation.id);
      let endYear = "\u73FE\u5728";
      if (!hasTerritory) {
        const fallen = nationEvents.find((e) => e.description.includes("\u6EC5\u4EA1"));
        endYear = fallen ? fallen.year : nationEvents.length > 0 ? Math.max(...nationEvents.map((e) => e.year)) : 0;
      }
      const duration = typeof endYear === "number" && typeof startYear === "number" ? endYear - startYear : currentData.events.length > 0 ? Math.max(...currentData.events.map((e) => e.year)) - startYear : 0;
      const lifespan = `${startYear}\u5E74 \u301C ${endYear === "\u73FE\u5728" ? "\u5B58\u7D9A\u4E2D" : endYear + "\u5E74"} (${duration}\u5E74\u9593)`;
      elements.detailModalHeader.innerHTML = `
            <div class="space-y-4">
                <div class="flex flex-col md:flex-row md:justify-between md:items-end border-b border-stone-200 pb-2">
                    <div class="text-2xl font-bold text-stone-800">${nation.name}</div>
                    <div class="text-stone-500 text-sm font-mono">${lifespan}</div>
                </div>
                <div class="flex gap-2">
                    <button onclick="window.showNationRulers(${nation.id}, '${endYear}')" class="bg-stone-200 hover:bg-stone-300 px-3 py-1 rounded text-[10px] font-bold text-stone-600 transition">\u6B74\u4EE3\u541B\u4E3B\u3092\u8868\u793A</button>
                    <button onclick="window.showNationChancellors(${nation.id}, '${endYear}')" class="bg-stone-200 hover:bg-stone-300 px-3 py-1 rounded text-[10px] font-bold text-stone-600 transition">\u6B74\u4EE3\u4E1E\u76F8\u3092\u8868\u793A</button>
                </div>
                <div id="nationSuccessionContainer" class="hidden mt-2 p-4 bg-white rounded border border-stone-200 max-h-[300px] overflow-y-auto">
                </div>
            </div>
        `;
      elements.nationSuccessionContainer = document.getElementById("nationSuccessionContainer");
    } else if (territory && currentData) {
      elements.detailModalHeader.classList.remove("hidden");
      const owner = currentData.nations.find((n) => n.id === territory.owner_nation_id);
      elements.detailModalHeader.innerHTML = `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 text-sm">
                <div class="col-span-2 md:col-span-4 flex items-center justify-between border-b border-stone-200 pb-2 mb-2">
                    <div class="text-2xl font-bold text-stone-800">${territory.name}</div>
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-stone-400 font-bold uppercase tracking-wider">\u9818\u4E3B:</span>
                        <span class="px-2 py-1 rounded text-xs font-bold text-white shadow-sm" style="background-color: ${owner ? owner.color : "#a8a29e"}">
                            ${owner ? owner.name : "\u5728\u91CE"}
                        </span>
                    </div>
                </div>
                
                <div class="bg-stone-50 p-3 rounded border border-stone-100">
                    <div class="text-[10px] text-stone-400 font-bold uppercase mb-1">\u4EBA\u53E3 (Population)</div>
                    <div class="text-lg font-mono font-bold text-stone-600">-</div>
                </div>
                <div class="bg-stone-50 p-3 rounded border border-stone-100">
                    <div class="text-[10px] text-stone-400 font-bold uppercase mb-1">\u8FB2\u696D (Agriculture)</div>
                    <div class="text-lg font-mono font-bold text-stone-600">-</div>
                </div>
                <div class="bg-stone-50 p-3 rounded border border-stone-100">
                    <div class="text-[10px] text-stone-400 font-bold uppercase mb-1">\u5546\u696D (Commerce)</div>
                    <div class="text-lg font-mono font-bold text-stone-600">-</div>
                </div>
                <div class="bg-stone-50 p-3 rounded border border-stone-100">
                    <div class="text-[10px] text-stone-400 font-bold uppercase mb-1">\u6CBB\u5B89 (Security)</div>
                    <div class="text-lg font-mono font-bold text-stone-600">-</div>
                </div>
            </div>
        `;
    } else {
      elements.detailModalHeader.classList.add("hidden");
    }
    const filteredEvents = (currentData == null ? void 0 : currentData.events.filter(filterFn)) || [];
    if (filteredEvents.length === 0) {
      elements.detailHistoryLog.innerHTML = '<p class="text-gray-400">\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093\u3002</p>';
    } else {
      filteredEvents.forEach((e) => {
        const div = document.createElement("div");
        div.className = "flex gap-4 items-start pb-4 border-b border-stone-100 last:border-0";
        div.innerHTML = `
                <div class="w-16 flex-shrink-0 font-mono text-stone-400 text-sm pt-1">${e.year}\u5E74</div>
                <div class="text-stone-800">${formatEventDescription(e)}</div>
            `;
        elements.detailHistoryLog.appendChild(div);
      });
    }
    elements.detailModal.classList.remove("hidden");
  }
  function showNationSuccessors(nationId, type, nationEndYear = "\u73FE\u5728") {
    const container = elements.nationSuccessionContainer;
    if (!container || !currentData)
      return;
    container.classList.remove("hidden");
    const nation = currentData.nations.find((n) => n.id === nationId);
    if (!nation)
      return;
    const title = type === "ruler" ? "\u6B74\u4EE3\u541B\u4E3B" : "\u6B74\u4EE3\u4E1E\u76F8";
    const history = type === "ruler" ? nation.ruler_history || [] : nation.chancellor_history || [];
    if (history.length === 0) {
      container.innerHTML = `<p class="text-stone-400 text-xs italic">\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093\u3002</p>`;
      return;
    }
    let html = `
        <table class="min-w-full text-xs">
            <thead>
                <tr class="border-b border-stone-200">
                    <th class="text-left py-1 text-stone-400">\u671F\u9593</th>
                    <th class="text-left py-1 text-stone-400">\u6C0F\u540D</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-stone-100">
    `;
    history.forEach((item) => {
      let end = item.end ? item.end + "\u5E74" : nationEndYear !== "\u73FE\u5728" ? nationEndYear + "\u5E74" : "\u73FE\u5728";
      const period = `${item.start}\u5E74 \u301C ${end}`;
      html += `
            <tr>
                <td class="py-2 font-mono text-stone-500 whitespace-nowrap">${period}</td>
                <td class="py-2 font-bold text-blue-700 hover:underline cursor-pointer" onclick="window.showPersonDetail(${item.id})">${item.name}</td>
            </tr>
        `;
    });
    html += `</tbody></table>`;
    container.innerHTML = `<div class="text-sm font-bold mb-2 text-stone-700 border-b pb-1">${title}</div>` + html;
  }
  function toggleFamilyTree(clanId) {
    const container = elements.familyTreeContainer;
    if (!container)
      return;
    if (!container.classList.contains("hidden")) {
      container.classList.add("hidden");
      return;
    }
    container.classList.remove("hidden");
    renderFamilyTree(clanId, container);
  }
  function renderFamilyTree(clanId, container) {
    if (!currentData)
      return;
    const clanMembers = currentData.people.filter((p) => p.clan_id === clanId);
    const root = clanMembers.find((p) => p.id === clanId) || [...clanMembers].sort((a, b) => a.birth_year - b.birth_year)[0];
    container.innerHTML = '<h3 class="text-xs font-bold mb-4 text-stone-500 uppercase tracking-wider">\u4E00\u65CF\u7CFB\u8B5C (Family Tree)</h3>';
    const buildNode = (person) => {
      const children = clanMembers.filter((p) => p.father_id === person.id).sort((a, b) => a.birth_year - b.birth_year);
      const isDead = person.is_dead;
      const nodeWrapper = document.createElement("div");
      nodeWrapper.className = "flex items-center relative py-1";
      const personCard = document.createElement("div");
      personCard.className = `flex-shrink-0 px-3 py-1.5 rounded text-[11px] transition cursor-pointer border shadow-sm z-10 ${isDead ? "bg-stone-50 text-stone-400 border-stone-200 line-through" : "bg-white text-blue-800 font-bold border-blue-300 hover:border-blue-500 hover:shadow-md"}`;
      personCard.onclick = (e) => {
        e.stopPropagation();
        showPersonDetail(person.id);
      };
      personCard.innerHTML = `<div class="whitespace-nowrap">${person.name}</div><div class="text-[9px] opacity-70 font-normal whitespace-nowrap">${person.birth_year}\u301C${person.death_year || ""}</div>`;
      nodeWrapper.appendChild(personCard);
      if (children.length > 0) {
        const connector = document.createElement("div");
        connector.className = "w-4 h-px bg-stone-300 flex-shrink-0";
        nodeWrapper.appendChild(connector);
        const childrenContainer = document.createElement("div");
        childrenContainer.className = "flex flex-col gap-2 border-l border-stone-300 pl-4 relative";
        children.forEach((child) => {
          childrenContainer.appendChild(buildNode(child));
        });
        nodeWrapper.appendChild(childrenContainer);
      }
      return nodeWrapper;
    };
    const treeBase = document.createElement("div");
    treeBase.className = "inline-block p-4";
    treeBase.appendChild(buildNode(root));
    container.appendChild(treeBase);
  }

  // src/Frontend/main.ts
  var currentData2 = null;
  var currentConfig = __spreadValues({}, defaultConfig);
  var db = null;
  var SQL = null;
  document.addEventListener("DOMContentLoaded", async () => {
    SQL = await setupSQLite();
    initUI();
    const savedConfig = localStorage.getItem("simulationConfig");
    if (savedConfig) {
      try {
        currentConfig = __spreadValues(__spreadValues({}, defaultConfig), JSON.parse(savedConfig));
      } catch (e) {
        console.error("Failed to load config", e);
      }
    }
    const startScreen = document.getElementById("startScreen");
    const mainApp = document.getElementById("mainApp");
    const newGameBtn = document.getElementById("newGameBtn");
    const loadGameBtn = document.getElementById("loadGameBtn");
    const loadGameInput = document.getElementById("loadGameInput");
    const generateBtn = document.getElementById("generateBtn");
    const saveBtn = document.getElementById("saveBtn");
    const statusMsg = document.getElementById("statusMsg");
    const peopleBtn = document.getElementById("peopleBtn");
    const peopleModal = document.getElementById("peopleModal");
    const closePeopleModal = document.getElementById("closePeopleModal");
    const detailModal = document.getElementById("detailModal");
    const closeDetailModal = document.getElementById("closeDetailModal");
    const continueBtn = document.getElementById("continueBtn");
    const continueControls = document.getElementById("continueControls");
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsModal = document.getElementById("settingsModal");
    const closeSettingsModal = document.getElementById("closeSettingsModal");
    const saveSettingsBtn = document.getElementById("saveSettingsBtn");
    const restoreDefaultsBtn = document.getElementById("restoreDefaultsBtn");
    const showStatus = (msg, isError = false) => {
      statusMsg.textContent = msg;
      statusMsg.className = isError ? "mt-4 text-sm font-medium text-red-600" : "mt-4 text-sm font-medium text-green-600";
    };
    newGameBtn.addEventListener("click", () => {
      startScreen.classList.add("hidden");
      mainApp.classList.remove("hidden");
    });
    loadGameBtn.addEventListener("click", () => {
      loadGameInput.click();
    });
    loadGameInput.addEventListener("change", (e) => {
      var _a;
      const target = e.target;
      const file = (_a = target.files) == null ? void 0 : _a[0];
      if (!file)
        return;
      const reader = new FileReader();
      reader.onload = function() {
        const Uints = new Uint8Array(reader.result);
        db = new SQL.Database(Uints);
        const data = importFromSQLite(db);
        currentData2 = data;
        if (currentData2 == null ? void 0 : currentData2.config) {
          currentConfig = __spreadValues({}, currentData2.config);
          localStorage.setItem("simulationConfig", JSON.stringify(currentConfig));
        }
        startScreen.classList.add("hidden");
        mainApp.classList.remove("hidden");
        peopleBtn.classList.remove("hidden");
        saveBtn.classList.remove("hidden");
        continueControls.classList.remove("hidden");
        render(currentData2);
        showStatus("\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F\u3002");
      };
      reader.readAsArrayBuffer(file);
    });
    const syncConfigToUI = () => {
      Object.keys(currentConfig).forEach((key) => {
        const input = document.getElementById(`config-${key}`);
        if (input) {
          input.value = currentConfig[key].toString();
          const display = document.getElementById(`val-${key}`);
          if (display) {
            let val = currentConfig[key];
            if (input.type === "range" && key !== "stabilityGainBond" && key !== "deathAgeThreshold" && key !== "warDeclarationChance") {
              display.textContent = (val * 100).toFixed(1) + "%";
            } else if (key === "warDeclarationChance") {
              display.textContent = (val * 100).toFixed(0) + "%";
            } else {
              display.textContent = val.toString();
            }
          }
        }
      });
    };
    settingsBtn.addEventListener("click", () => {
      syncConfigToUI();
      settingsModal.classList.remove("hidden");
    });
    closeSettingsModal.addEventListener("click", () => {
      settingsModal.classList.add("hidden");
    });
    settingsModal.querySelectorAll('input[type="range"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        const target = e.target;
        const key = target.id.replace("config-", "");
        const display = document.getElementById(`val-${key}`);
        if (display) {
          let val = parseFloat(target.value);
          if (key !== "stabilityGainBond" && key !== "warDeclarationChance") {
            display.textContent = (val * 100).toFixed(1) + "%";
          } else if (key === "warDeclarationChance") {
            display.textContent = (val * 100).toFixed(0) + "%";
          } else {
            display.textContent = val.toString();
          }
        }
      });
    });
    saveSettingsBtn.addEventListener("click", () => {
      const newConfig = __spreadValues({}, currentConfig);
      Object.keys(newConfig).forEach((key) => {
        const input = document.getElementById(`config-${key}`);
        if (input) {
          newConfig[key] = parseFloat(input.value);
        }
      });
      currentConfig = newConfig;
      localStorage.setItem("simulationConfig", JSON.stringify(currentConfig));
      settingsModal.classList.add("hidden");
      showStatus("\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F\u3002");
    });
    restoreDefaultsBtn.addEventListener("click", () => {
      if (confirm("\u8A2D\u5B9A\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u3057\u307E\u3059\u304B\uFF1F")) {
        currentConfig = __spreadValues({}, defaultConfig);
        syncConfigToUI();
      }
    });
    generateBtn.addEventListener("click", () => {
      try {
        showStatus("\u6B74\u53F2\u3092\u751F\u6210\u4E2D...");
        const era = document.getElementById("era").value;
        const startYear = parseInt(document.getElementById("startYear").value, 10) || 1;
        const years = parseInt(document.getElementById("years").value, 10);
        const nationsCount = parseInt(document.getElementById("nations").value, 10);
        const territoriesInput = document.getElementById("territories");
        const territoriesCount = territoriesInput.value ? parseInt(territoriesInput.value, 10) : void 0;
        setTimeout(() => {
          const engine = new SimulationEngine();
          engine.config = __spreadValues({}, currentConfig);
          const data = engine.generate(era, startYear, years, nationsCount, territoriesCount);
          currentData2 = data;
          showStatus("\u6B74\u53F2\u751F\u6210\u5B8C\u4E86\uFF01");
          peopleBtn.classList.remove("hidden");
          saveBtn.classList.remove("hidden");
          continueControls.classList.remove("hidden");
          render(currentData2);
        }, 50);
      } catch (e) {
        showStatus("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002", true);
        console.error(e);
      }
    });
    continueBtn.addEventListener("click", () => {
      if (!currentData2)
        return;
      try {
        showStatus("\u6B74\u53F2\u3092\u7D99\u7D9A\u751F\u6210\u4E2D...");
        const additionalYears = parseInt(document.getElementById("continueYears").value, 10) || 50;
        setTimeout(() => {
          const engine = new SimulationEngine();
          const data = engine.continueGenerate(currentData2, additionalYears);
          currentData2 = data;
          showStatus(`${additionalYears}\u5E74\u5206\u306E\u6B74\u53F2\u3092\u7D99\u7D9A\u751F\u6210\u3057\u307E\u3057\u305F\uFF01`);
          render(currentData2);
        }, 50);
      } catch (e) {
        showStatus("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002", true);
        console.error(e);
      }
    });
    saveBtn.addEventListener("click", () => {
      if (!currentData2)
        return;
      try {
        showStatus("\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u3092\u4F5C\u6210\u4E2D...");
        exportToSQLite(SQL, currentData2);
        showStatus("\u30BB\u30FC\u30D6\u5B8C\u4E86\uFF01");
      } catch (e) {
        console.error("Save failed:", e);
        showStatus("\u30BB\u30FC\u30D6\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002\u8A73\u7D30\u306F\u30B3\u30F3\u30BD\u30FC\u30EB\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002", true);
      }
    });
    peopleBtn.addEventListener("click", () => {
      if (!currentData2)
        return;
      renderPeopleTable(currentData2.people, currentData2.nations);
      peopleModal.classList.remove("hidden");
    });
    closePeopleModal.addEventListener("click", () => {
      peopleModal.classList.add("hidden");
    });
    peopleModal.addEventListener("click", (e) => {
      if (e.target === peopleModal)
        peopleModal.classList.add("hidden");
    });
    closeDetailModal.addEventListener("click", () => {
      detailModal.classList.add("hidden");
    });
    detailModal.addEventListener("click", (e) => {
      if (e.target === detailModal)
        detailModal.classList.add("hidden");
    });
  });
})();
