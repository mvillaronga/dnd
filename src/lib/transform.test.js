import transformSpells from './tranform'

const sp = require('../../data/spells/spells-phb.json')

const spells = [		{
  "name": "Magic Missile",
  "level": 1,
  "school": "V",
  "time": [
    {
      "number": 1,
      "unit": "action"
    }
  ],
  "range": {
    "type": "point",
    "distance": {
      "type": "feet",
      "amount": 120
    }
  },
  "components": {
    "v": true,
    "s": true
  },
  "duration": [
    {
      "type": "instant"
    }
  ],
  "classes": {
    "fromClassList": [
      {
        "name": "Sorcerer",
        "source": "PHB"
      },
      {
        "name": "Wizard",
        "source": "PHB"
      }
    ],
    "fromSubclass": [
      {
        "class": {
          "name": "Cleric",
          "source": "PHB"
        },
        "subclass": {
          "name": "Arcana",
          "source": "SCAG"
        }
      }
    ]
  },
  "source": "PHB",
  "entries": [
    "You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals {@dice 1d4 + 1} force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several."
  ],
  "entriesHigherLevel": [
    {
      "type": "entries",
      "name": "At Higher Levels",
      "entries": [
        "When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
      ]
    }
  ],
  "page": 257,
  "damageInflict": [
    "force"
  ],
  "races": [
    {
      "name": "Tiefling (Abyssal)",
      "source": "UAThatOldBlackMagic",
      "baseName": "Tiefling",
      "baseSource": "PHB"
    },
    {
      "name": "Tiefling (Mephistopheles)",
      "source": "UAFiendishOptions",
      "baseName": "Tiefling",
      "baseSource": "PHB"
    }
  ],
  "areaTags": [
    "ST",
    "MT"
  ],
  "miscTags": [
    "SGT"
  ]
}]

const formatted = [
  {
    "count": 1,
    "title": "Magic Missile",
    "contents": [
      "subtitle | 1st-level evocation",
      "rule",
      "property | Casting time | 1 action",
      "property | Range | 120 feet",
      "property | Range | V,S",
      "property | Duration | instant",
      "rule",
      "text | You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.",
      "fill | 2",
      "section | At higher levels",
      "text | When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st."
    ],
    "tags": [
      "1st",
      "Sorcerer",
      "Wizard",
      "Cleric",
      "evocation"
    ],
    "color": "maroon",
    "icon": "white-book-1",
    "icon_back": "wizard-staff"
  }
]
describe('Transform spell list', () => {

  it('should transform a spell array into proper output', () => {
    const output = transformSpells(spells)
    expect(output).toEqual(formatted)
  })

})