  // {
  //   "count": 1,
  //   "title": "Magic Missile",
  //   "contents": [
  //     "subtitle | 1st-level evocation",
  //     "rule",
  //     "property | Casting time | 1 action",
  //     "property | Range | 120 feet",
  //     "property | Components | V,S",
  //     "property | Duration | Instantaneous",
  //     "rule",
  //     "text | You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
  //     "fill | 2",
  //     "section | At higher levels",
  //     "text | When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.",
  //     ""
  //   ],
  //   "tags": [
  //     "1st",
  //     "wizard",
  //     "evocation"
  //   ],
  //   "color": "maroon",
  //   "icon": "white-book-1",
  //   "icon_back": "wizard-staff"
  // }

const transformSpells = (spells) => {
  let ret = [];
  spells.forEach((spell) => {
    ret.push({
      count: 1,
      title: spell.name,
      contents: tContents(spell),
      tags: tTags(spell),
      color: 'maroon',
      icon: tIcon(spell),
      icon_back: "wizard-staff"
    })
  })

  return ret
}

const tContents = (spell) => {
  let ret = []
  ret.push(`subtitle | ${longSpellLevel(spell.level)}-level ${spellSchools[spell.school]}`)
  ret.push("rule")
  ret.push(`property | Casting time | ${tCastingTime(spell.time)}`)
  ret.push(`property | Range | ${tRange(spell.range)}`)
  ret.push(`property | Range | ${tComponents(spell.components)}`)
  ret.push(`property | Duration | ${tDuration(spell.duration[0])}`)
  ret.push("rule")
  spell.entries.forEach((entry) => ret.push(tDesc(entry)))
  if (spell.hasOwnProperty('entriesHigherLevel')) {
    ret.push("fill | 2")
    ret.push("section | At higher levels")
    spell.entriesHigherLevel[0].entries.forEach((entry) => ret.push(tDesc(entry)))
  }

  return ret
}

const tCastingTime = (time) => {
  //reactions have more but not implementing as I hope its in the spell
  return `${time[0].number} ${time[0].unit}`
}

const tRange = (range) => {
  switch (range.type) {
    case 'point':
      switch (range.distance.type) {
        case 'self':
        case 'sight':
        case 'touch':
          return `${range.distance.type}`
        case 'feet':
        case 'miles':
          return `${range.distance.amount} ${range.distance.type}`
        default:
          return `UNKNOWN RANGE ${JSON.stringify(range)}`
      }
    case 'line':
    case 'radius':
    case 'cone':
      return `${range.type}, ${range.distance.amount} ${range.distance.type}`
    default:
      return `UNKNOWN RANGE ${JSON.stringify(range)}`
  }
}

const tComponents = (comps) => {
  let ret = []

  comps.v && ret.push("V")
  comps.s && ret.push("S")
  comps.m && ret.push(`M (${comps.m})`)

  return ret.join()
}
const tTags = (spell) => {
  let ret = []

  ret.push(longSpellLevel(spell.level))

  spell.classes.fromClassList && spell.classes.fromClassList.forEach((item) => ret.push(item.name))
  spell.classes.fromSubclass && spell.classes.fromSubclass.forEach((item) => ret.push(item.class.name))

  ret.push(spellSchools[spell.school])

  return Array.from(new Set(ret))
}

const tDuration = (dur) => {
  const concentration = dur.concentration && ", Concentration"
  switch (dur.type) {
    case "timed":
      return `${dur.duration.amount} ${dur.duration.type}${concentration}`
    case "instant":
    case "permanant":
      return `${dur.type}`
    default:
      return `UNKNOWN DURATION ${JSON.stringify(dur)}`
  }
}

const tDesc = (ent) => {

  return `text | ${ent.replace(' {@dice', '').replace('}','')}`
}

const tIcon = (spell) => `white-book-${spell.level}`

const spellSchools = {
  "V": "evocation"
}

const longSpellLevel = (lvl) => {
  switch (lvl) {
    case 0:
      return "cantrip"
    case 1:
      return `${lvl}st`
    case 2:
      return `${lvl}nd`
    case 3:
      return `${lvl}rd`
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return `${lvl}tf`
    default:
      return ``
  }
}

export default transformSpells