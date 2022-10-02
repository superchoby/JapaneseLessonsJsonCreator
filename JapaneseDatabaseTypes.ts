export const ICHIDAN_GROUP = "一段"
export const GODAN_GROUP = "五段"
export const IRREGULAR_VERB_GROUP = "Irregular"

type verbGroups = typeof GODAN_GROUP | typeof ICHIDAN_GROUP | typeof IRREGULAR_VERB_GROUP

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
    word: string
    kanaVersion: string
    conjugations?: VerbConjugations
}

interface JapaneseVerb extends JapaneseWord {
    verbGroup: verbGroups
}

export type JapaneseDatabaseType = {
    [word: string]: JapaneseVerb
}

const うCharToDiffCharObj = {
    'う': {
        あ: 'あ',
        い: 'い',
        charBeforeTe: 'っ',
        endsWithATe: true,
    },
    'く': {
        あ: 'か',
        い: 'き',
        charBeforeTe: 'い',
        endsWithATe: true,
    },
    'す': {
        あ: 'さ',
        い: 'し',
        charBeforeTe: 'し',
        endsWithATe: true,
    },
    'つ': {
        あ: 'た',
        い: 'ち',
        charBeforeTe: 'っ',
        endsWithATe: true,
    },
    'ぬ': {
        あ: 'な',
        い: 'に',
        charBeforeTe: 'ん',
        endsWithATe: false,
    },
    'む': {
        あ: 'ま',
        い: 'み',
        charBeforeTe: 'ん',
        endsWithATe: false,
    },
    'る': {
        あ: 'ら',
        い: 'り',
        charBeforeTe: 'っ',
        endsWithATe: true,
    },
    'ぐ': {
        あ: 'が',
        い: 'ぎ',
        charBeforeTe: 'い',
        endsWithATe: false,
    },
    'ぶ': {
        あ: 'ば',
        い: 'び',
        charBeforeTe: 'ん',
        endsWithATe: false,
    },
}

export const getVerbConjugations = (verbKanji: string, verbKana: string, verbType: verbGroups): VerbConjugations => {
    const masuEnding = 'ます'
    const naiEnding = 'ない'
    const masenEnding = 'ません'
    const taEnding = 'た'
    const teEnding = 'て'

    if (verbType === ICHIDAN_GROUP) {
        const verbStemKanji = verbKanji.substring(0, verbKanji.length - 1)
        const verbStemKana = verbKana.substring(0, verbKana.length - 1)

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
    } else if (verbType === GODAN_GROUP) {
        const lastChar = verbKanji.slice(-1) as keyof typeof うCharToDiffCharObj

        const wordUpToLastCharKanji = verbKanji.substring(0, verbKana.length - 1)
        const wordUpToLastCharKana = verbKanji.substring(0, verbKana.length - 1)

        const {
            い: いSound,
            あ: あSound,
            charBeforeTe,
            endsWithATe,
        } = うCharToDiffCharObj[lastChar]

        return {
            masuForm: {
                kanji: wordUpToLastCharKanji + いSound + masuEnding,
                kana: wordUpToLastCharKana + いSound + masuEnding,
            },
            naiForm: {
                kanji: wordUpToLastCharKanji + あSound + naiEnding,
                kana: wordUpToLastCharKana + あSound + naiEnding,
            },
            masenForm: {
                kanji: wordUpToLastCharKanji + いSound + masenEnding,
                kana: wordUpToLastCharKana + いSound + masenEnding,
            },
            taForm: {
                kanji: wordUpToLastCharKanji + charBeforeTe + (endsWithATe ? 'て' : 'で'),
                kana: wordUpToLastCharKana + charBeforeTe + (endsWithATe ? 'て' : 'で'),
            },
            teForm: {
                kanji: wordUpToLastCharKanji + charBeforeTe + (endsWithATe ? 'た' : 'だ'),
                kana: wordUpToLastCharKana + charBeforeTe + (endsWithATe ? 'た' : 'だ'),
            },
        }
    } else {
        const するStem = 'し'
        const くるStemKana = 'き'
        const くるStemKanji = '来'
        const wordIsする = verbKana === 'する'
        
        return {
            masuForm: {
                kanji: (wordIsする ? するStem : くるStemKanji) + masuEnding,
                kana: (wordIsする ? するStem : くるStemKana) + masuEnding,
            },
            naiForm: {
                kanji: (wordIsする ? するStem : くるStemKanji) + naiEnding,
                kana: (wordIsする ? するStem : 'こ') + naiEnding,
            },
            masenForm: {
                kanji: (wordIsする ? するStem : くるStemKanji) + masenEnding,
                kana: (wordIsする ? するStem : くるStemKana) + masenEnding,
            },
            taForm: {
                kanji: (wordIsする ? するStem : くるStemKanji) + taEnding,
                kana: (wordIsする ? するStem : くるStemKana) + taEnding,
            },
            teForm: {
                kanji: (wordIsする ? するStem : くるStemKanji) + teEnding,
                kana: (wordIsする ? するStem : くるStemKana) + teEnding,
            },
        }
    }
}
