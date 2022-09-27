export const ICHIDAN_GROUP = "一段"
export const GODAN_GROUP = "五段"

// exports.ICHIDAN_GROUP = ICHIDAN_GROUP
// exports.GODAN_GROUP = GODAN_GROUP

type verbGroups = typeof GODAN_GROUP | typeof ICHIDAN_GROUP | "Irregular"

type KanjiAndKanaVersion = {
    kanji: string
    kana: string
}

type VerbConjugations = {
    masuForm: KanjiAndKanaVersion
    naiForm: KanjiAndKanaVersion
    masenForm: KanjiAndKanaVersion
    taForm: KanjiAndKanaVersion
    teForm: KanjiAndKanaVersion
}

interface JapaneseWord {
    kanaVersion: string
    conjugations: VerbConjugations
}

interface JapaneseVerb extends JapaneseWord {
    verbGroup: verbGroups
}

export type JapaneseDatabaseType = {
    [word: string]: JapaneseVerb
}

export const getIchidanVerbConjugations = (ichidanVerbKanji: string, ichidanVerbKana: string): VerbConjugations => {
    const verbStemKanji = ichidanVerbKanji.substring(0, ichidanVerbKanji.length - 1)
    const verbStemKana = ichidanVerbKana.substring(0, ichidanVerbKana.length - 1)

    const masuEnding = 'ます'
    const naiEnding = 'ない'
    const masenEnding = 'ません'
    const taEnding = 'た'
    const teEnding = 'て'
    return {
        masuForm: {
            kanji: verbStemKanji + masuEnding,
            kana: verbStemKana + masuEnding,
        },
        naiForm: {
            kanji: verbStemKanji + naiEnding,
            kana: verbStemKana + naiEnding,
        },
        masenForm: {
            kanji: verbStemKanji + masenEnding,
            kana: verbStemKana + masenEnding,
        },
        taForm: {
            kanji: verbStemKanji + taEnding,
            kana: verbStemKana + taEnding,
        },
        teForm: {
            kanji: verbStemKanji + teEnding,
            kana: verbStemKana + teEnding,
        },
    }
}
