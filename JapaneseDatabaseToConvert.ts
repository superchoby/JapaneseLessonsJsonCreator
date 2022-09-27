// type verbGroups = "五段" | "一段" | "Irregular"
// interface JapaneseWord {
//     kanaVersion: string
//     conjugations: string[]
// }

// interface JapaneseVerb extends JapaneseWord {
//     verbGroup: verbGroups
// }

// type JapaneseDatabaseType = {
//     [word: string]: JapaneseVerb
// }
// import {
//     ICHIDAN_GROUP,
//     GODAN_GROUP,
//     getIchidanVerbConjugations,
// } from './JapaneseDatabaseTypes'

import { 
    ICHIDAN_GROUP,
    GODAN_GROUP,
    getIchidanVerbConjugations,
    JapaneseDatabaseType,
} from "./JapaneseDatabaseTypes"

export const JapaneseDatabase: JapaneseDatabaseType = {
    "食べる": {
        kanaVersion: "たべる",
        verbGroup: ICHIDAN_GROUP,
        conjugations: {
            ...getIchidanVerbConjugations('食べる', 'たべる')
        }
    }
}
