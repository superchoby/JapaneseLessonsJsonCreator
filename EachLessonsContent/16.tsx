import {
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  VOCABULARY_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType,
  CONVERT_WORD_CONJUGATION_PROMPT,
  CONJUGATION_CONCEPT_TYPE,
  JapaneseDatabaseType,
  ICHIDAN_GROUP,
  GODAN_GROUP,
  verbGroups,
  IRREGULAR_VERB_GROUP
} from './SharedVariables'

const verbMasuConjugationExplanation = (verb: string, answer: string, verbGroup: verbGroups): JSX.Element | string => {
  if (verbGroup === ICHIDAN_GROUP) {
    return (
      <span>
        Since this is a る verb, we just remove the る and add a ます.&nbsp;
        {verb} -&#62; {verb.slice(0, -1)}<span style={{ textDecoration: 'line-through' }}>{verb.charAt(verb.length - 1)}</span> + ます
      </span>
    )
  } else if (verbGroup === GODAN_GROUP) {
    return (
      <span>
        Since this is a う verb, we grab the last character and
        convert it to an い sound and add a ます.&nbsp;
        {verb} -&#62; {verb.slice(0, -1)}<span style={{ textDecoration: 'line-through' }}>{verb.charAt(verb.length - 1)}</span>{answer.charAt(answer.length - 3)} + ます
      </span>
    )
  } else if (verb === 'する') {
    return `Since this is a irregular verb, we can just memorize 
    the fact that the ます form of する is します`
  } else {
    return `Since this is a irregular verb, we can just memorize 
    the fact that the ます form of くる is きます`
  }
}

const Content = (japaneseDatabase: JapaneseDatabaseType): LessonsContentDictType => {
  return {
    'フランス-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'フランス',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'France',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'France',
          answers: [
            {
              answer: 'フランス',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'フランス',
          answers: [
            {
              answer: 'France',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'カナダ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'カナダ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Canada',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Canada',
          answers: [
            {
              answer: 'カナダ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'カナダ',
          answers: [
            {
              answer: 'Canada',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'メキシコ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'メキシコ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Mexico',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Mexico',
          answers: [
            {
              answer: 'メキシコ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'メキシコ',
          answers: [
            {
              answer: 'Mexico',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ちゅうごく-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ちゅうごく',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'China',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'China',
          answers: [
            {
              answer: 'ちゅうごく',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ちゅうごく',
          answers: [
            {
              answer: 'China',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'かんこく-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'かんこく',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Korea',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Korea',
          answers: [
            {
              answer: 'かんこく',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'かんこく',
          answers: [
            {
              answer: 'Korea',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'スペイン-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'スペイン',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Spain',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Spain',
          answers: [
            {
              answer: 'スペイン',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'スペイン',
          answers: [
            {
              answer: 'Spain',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'イタリア-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'イタリア',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Italy',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Italy',
          answers: [
            {
              answer: 'イタリア',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'イタリア',
          answers: [
            {
              answer: 'Italy',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ロシア-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ロシア',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Russia',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Russia',
          answers: [
            {
              answer: 'ロシア',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ロシア',
          answers: [
            {
              answer: 'Russia',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'オーストラリア-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'オーストラリア',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Australia',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Australia',
          answers: [
            {
              answer: 'オーストラリア',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'オーストラリア',
          answers: [
            {
              answer: 'Australia',
              distanceToAllow: 3
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ドイツ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ドイツ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Germany',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Germany',
          answers: [
            {
              answer: 'ドイツ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ドイツ',
          answers: [
            {
              answer: 'Germany',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'イギリス-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'イギリス',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'United Kingdom',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'United Kingdom',
          answers: [
            {
              answer: 'イギリス',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'イギリス',
          answers: [
            {
              answer: 'United Kingdom',
              distanceToAllow: 4
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'オーストリア-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'オーストリア',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Austria',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Austria',
          answers: [
            {
              answer: 'オーストリア',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'オーストリア',
          answers: [
            {
              answer: 'Austria',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'タイ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'タイ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Thailand',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Thailand',
          answers: [
            {
              answer: 'タイ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'タイ',
          answers: [
            {
              answer: 'Thailand',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'サウジアラビア-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'サウジアラビア',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Saudi Arabia',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Saudi Arabia',
          answers: [
            {
              answer: 'サウジアラビア',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'サウジアラビア',
          answers: [
            {
              answer: 'Saudi Arabia',
              distanceToAllow: 3
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ギリシャ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ギリシャ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Greece',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Greece',
          answers: [
            {
              answer: 'ギリシャ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ギリシャ',
          answers: [
            {
              answer: 'Greece',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'インド-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'インド',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'India',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'India',
          answers: [
            {
              answer: 'インド',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'インド',
          answers: [
            {
              answer: 'India',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ブラジル-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ブラジル',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Brazil',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Brazil',
          answers: [
            {
              answer: 'ブラジル',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ブラジル',
          answers: [
            {
              answer: 'Brazil',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ベトナム-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ベトナム',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Vietnam',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Vietnam',
          answers: [
            {
              answer: 'ベトナム',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ベトナム',
          answers: [
            {
              answer: 'Vietnam',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'アメリカ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'アメリカ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'America',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'America',
          answers: [
            {
              answer: 'アメリカ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'アメリカ',
          answers: [
            {
              answer: 'America',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'スウェーデン-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'スウェーデン',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Sweden',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Sweden',
          answers: [
            {
              answer: 'スウェーデン',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'スウェーデン',
          answers: [
            {
              answer: 'Sweden',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'Converting an う Verb to Formal Present Tense (ます Form)-文法': {
      conceptType: CONJUGATION_CONCEPT_TYPE,
      conjugationType: 'ます',
      Learning: {
        concept: 'Converting an う Verb to Formal Present Tense (ます Form)',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Change the last character of the verb to its い sound and add ます',
        extraInfoList: [
          {
            header: 'Example 1',
            explanation:
                        <span key='Example 1'>
                            <ruby>
                                読<rt>よ</rt>む
                            </ruby>
                            -&gt;
                            <ruby>
                                読<rt>よ</rt>みます
                            </ruby>
                            &nbsp;The み is turned into a む.
                        </span>

          },
        ]
      },
      Questions: [
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To hear, To listen (formal)',
          answer: japaneseDatabase['聞く'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['聞く'].kanaVersion, japaneseDatabase['聞く'].conjugations.masuForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To swim (formal)',
          answer: japaneseDatabase['泳ぐ'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['泳ぐ'].kanaVersion, japaneseDatabase['泳ぐ'].conjugations.masuForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To play (formal)',
          answer: japaneseDatabase['遊ぶ'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['遊ぶ'].kanaVersion, japaneseDatabase['遊ぶ'].conjugations.masuForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To drink (formal)',
          answer: japaneseDatabase['飲む'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['飲む'].kanaVersion, japaneseDatabase['飲む'].conjugations.masuForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To buy (formal)',
          answer: japaneseDatabase['買う'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['買う'].kanaVersion, japaneseDatabase['買う'].conjugations.masuForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To read (formal)',
          answer: japaneseDatabase['読む'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['読む'].kanaVersion, japaneseDatabase['読む'].conjugations.masuForm.kana, GODAN_GROUP)
        }
      ]
    },
    'Converting an る Verb to Formal Present Tense (ます Form)-文法': {
      conceptType: CONJUGATION_CONCEPT_TYPE,
      conjugationType: 'ます',
      Learning: {
        concept: 'Converting an る Verb to Formal Present Tense (ます Form)',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Remove the last character of the verb and add ます',
        extraInfoList: [
          {
            header: 'Example 1',
            explanation: (
              <span key='Example 1'>
                  <ruby>
                    見<rt>み</rt>る
                  </ruby>
                  -&gt;
                  <ruby>
                    見<rt>み</rt>ます
                  </ruby>
                  &nbsp;The る is removed and a ます is added.
              </span>

            )
          },
        ]
      },
      Questions: [
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To eat (formal)',
          answer: japaneseDatabase['食べる'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['食べる'].kanaVersion, japaneseDatabase['食べる'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To sleep (formal)',
          answer: japaneseDatabase['寝る'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['寝る'].kanaVersion, japaneseDatabase['寝る'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To see (formal)',
          answer: japaneseDatabase['見る'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['見る'].kanaVersion, japaneseDatabase['見る'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To consider (formal)',
          answer: japaneseDatabase['考える'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['考える'].kanaVersion, japaneseDatabase['考える'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To wake up (formal)',
          answer: japaneseDatabase['起きる'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['起きる'].kanaVersion, japaneseDatabase['起きる'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To leave, To come out (formal)',
          answer: japaneseDatabase['出る'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['出る'].kanaVersion, japaneseDatabase['出る'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To borrow, To rent (formal)',
          answer: japaneseDatabase['借りる'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['借りる'].kanaVersion, japaneseDatabase['借りる'].conjugations.masuForm.kana, ICHIDAN_GROUP)
        }
      ]
    },
    'Converting an Irregular Verb to Formal Present Tense (ます Form)-文法': {
      conceptType: CONJUGATION_CONCEPT_TYPE,
      conjugationType: 'ます',
      Learning: {
        concept: 'Converting an Irregular Verb to Formal Present Tense (ます Form)',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'There is no pattern, you just memorize the 2 rules in the below examples.',
        extraInfoList: [
          {
            header: 'First Verb',
            explanation: (
              <span>
                  する
                  -&gt;
                  します
              </span>

            )
          },
          {
            header: 'Second Verb',
            explanation: (
              <span>
                  <ruby>
                    来<rt>く</rt>る
                  </ruby>
                  -&gt;
                  <ruby>
                    来<rt>き</rt>ます
                  </ruby>
              </span>
            )
          },
        ]
      },
      Questions: [
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To do (formal)',
          answer: japaneseDatabase['する'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['する'].kanaVersion, japaneseDatabase['する'].conjugations.masuForm.kana, IRREGULAR_VERB_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'To come (formal)',
          answer: japaneseDatabase['来る'].conjugations.masuForm,
          explanationIfUserGetsIncorrect: verbMasuConjugationExplanation(japaneseDatabase['来る'].kanaVersion, japaneseDatabase['来る'].conjugations.masuForm.kana, IRREGULAR_VERB_GROUP)
        }
      ]
    }

  }
}

export default Content
