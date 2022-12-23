import { 
    ICHIDAN_GROUP,
    GODAN_GROUP,
    IRREGULAR_VERB_GROUP,
    // JapaneseDatabaseType,
    getVerbConjugations,
} from "./JapaneseDatabaseTypes"
import { JapaneseDatabaseType } from "./EachLessonsContent/SharedVariables"
// import { 
//     ,
// } from "./JapaneseDatabaseTypes"

const JapaneseVocabDatabase: any = {
    "食べる": {
        word: "食べる",
        kanaVersion: "たべる",
        verbGroup: ICHIDAN_GROUP,
    },
    "寝る": {
        word: "寝る",
        kanaVersion: "ねる",
        verbGroup: ICHIDAN_GROUP,
    },
    "見る": {
        word: "見る",
        kanaVersion: "みる",
        verbGroup: ICHIDAN_GROUP,
    },
    "考える": {
        word: "考える",
        kanaVersion: "かんがえる",
        verbGroup: ICHIDAN_GROUP,
    },
    "起きる": {
        word: "起きる",
        kanaVersion: "おきる",
        verbGroup: ICHIDAN_GROUP,
    },
    "出る": {
        word: "出る",
        kanaVersion: "でる",
        verbGroup: ICHIDAN_GROUP,
    },
    "借りる": {
        word: "借りる",
        kanaVersion: "かりる",
        verbGroup: ICHIDAN_GROUP,
    },
    "聞く": {
        word: "聞く",
        kanaVersion: "きく",
        verbGroup: GODAN_GROUP,
    },
    "泳ぐ": {
        word: "泳ぐ",
        kanaVersion: "およぐ",
        verbGroup: GODAN_GROUP,
    },
    "遊ぶ": {
        word: "遊ぶ",
        kanaVersion: "あそぶ",
        verbGroup: GODAN_GROUP,
    },
    "飲む": {
        word: "飲む",
        kanaVersion: "のむ",
        verbGroup: GODAN_GROUP,
    },
    "買う": {
        word: "買う",
        kanaVersion: "かう",
        verbGroup: GODAN_GROUP,
    },
    "読む": {
        word: "読む",
        kanaVersion: "よむ",
        verbGroup: GODAN_GROUP,
    },
    "する": {
        word: "する",
        kanaVersion: "する",
        verbGroup: IRREGULAR_VERB_GROUP,
    },
    "来る": {
        word: "来る",
        kanaVersion: "くる",
        verbGroup: IRREGULAR_VERB_GROUP,
    },
}

for (const [key, {word, kanaVersion, verbGroup}] of Object.entries(JapaneseVocabDatabase as JapaneseDatabaseType)) {
    JapaneseVocabDatabase[key].conjugations = getVerbConjugations(word, kanaVersion, verbGroup)
}

export default JapaneseVocabDatabase
