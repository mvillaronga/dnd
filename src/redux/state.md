```
  {
    npcs: list of npcs
    refs: reference lists
    {
      spells: array of objects
      [
        {
          name: 
          level:
          school:
          time: 
          {
              number: 1,
              unit: action
          }
          range: {
            type: 
            distance: {
              type: 
              amount: 
            }
          },
          components: {
            v: bool
            s: bool
            m: Description of the component
          },
          duration: [
            {
              type: 
            }
          ],
          classes: {
            fromClassList: [
              {
                name:
                source: 
              },
              ...
            ]
          },
          source: PHB,
          page: 211,
          entries: [
            descriptive text,
            ....
          ],
          damageInflict: [
            damage type,
            ...
          ],
          savingThrow: [
            saving thow type,
            ...
          ],
          areaTags: [
            ST,
            MT
          ],
          backgrounds: [
            {
              name: name of the backgorund,
              source: source of the background
            },
            ....
          ],
          miscTags: [
            sometag,
            ...
          ]
        },
        ...
      ]
    }
  }
```