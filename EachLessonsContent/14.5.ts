import {
  KATAKANA_CONCEPT_TYPE,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
  EXPLANATION_EXPLANATIONS_HEADER,
  VOCABULARY_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType
} from './SharedVariables'

export const Content: LessonsContentDictType = {
  'ァ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ァ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Small ア',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'ファ -> fa, ツァ -> tsa'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ファ',
        answers: [
          {
            answer: 'fa',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ツァ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'tsa',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ィ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ィ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Small イ',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'ウィ -> wi, フィ -> fi, ディ -> di'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ウィ',
        answers: [
          {
            answer: 'wi',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'フィ',
        answers: [
          {
            answer: 'fi',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ディ',
        answers: [
          {
            answer: 'di',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ティ',
        answers: [
          {
            answer: 'ti',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ゥ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ゥ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'ウ',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'トゥ -> to (pronounced like two), ドゥ -> do (pronounced like dew)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'トゥ',
        answers: [
          {
            answer: 'to',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ドゥ',
        answers: [
          {
            answer: 'do',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ェ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ェ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'エ',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'ウェ -> we, シェ -> she,  ジェ -> je'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ウェ',
        answers: [
          {
            answer: 'we',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'シェ',
        answers: [
          {
            answer: 'she',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ジェ',
        answers: [
          {
            answer: 'je',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'フェ',
        answers: [
          {
            answer: 'fe',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'チェ',
        answers: [
          {
            answer: 'che',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ォ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ォ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'オ',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'フォ -> fo, ウォ -> wo'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'フォ',
        answers: [
          {
            answer: 'fo',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_ROMAJI_PROMPT,
        question: 'ウォ',
        answers: [
          {
            answer: 'wo',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ー-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ー (long vowel mark)',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Extends the consonant(あいうえお sound) right before it',
      extraInfoList: [
        {
          header: 'Pronunciation Examples:',
          explanation: 'イー -> いい, フー -> ふう, ター -> たあ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ユー',
        answers: [
          {
            answer: 'ゆう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ネー',
        answers: [
          {
            answer: 'ねえ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'マー',
        answers: [
          {
            answer: 'まあ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'シー',
        answers: [
          {
            answer: 'しい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'エー',
        answers: [
          {
            answer: 'ええ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ファイル-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ファイル',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'File',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'File',
        answers: [
          {
            answer: 'ファイル',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ファイル',
        answers: [
          {
            answer: 'file',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ファン-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ファン',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fan',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fan',
        answers: [
          {
            answer: 'ファン',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ファン',
        answers: [
          {
            answer: 'fan',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  // 'マイクロフォン-単語': {
  //     conceptType: VOCABULARY_CONCEPT_TYPE,
  //     isFastReviewCard: false,
  //     Learning: {
  //         concept: 'マイクロフォン',
  //         explanationHeader: MEANING_EXPLANATIONS_HEADER,
  //         explanation: 'Microphone',
  //         extraInfoList: [],
  //     },
  //     Questions: [
  //         {
  //             questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
  //             question: 'Microphone',
  //             answers: [
  //                 {
  //                     answer: 'マイクロフォン',
  //                     distanceToAllow: 0,
  //                 },
  //             ],
  //             acceptableResponsesButNotWhatLookingFor: [],
  //             answerIsInJapanese: true,
  //         },
  //         {
  //             questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
  //             question: 'マイクロフォン',
  //             answers: [
  //                 {
  //                     answer: 'microphone',
  //                     distanceToAllow: 4,
  //                 },
  //             ],
  //             acceptableResponsesButNotWhatLookingFor: [],
  //             answerIsInJapanese: false,
  //         },
  //     ]
  // },
  'アイスクリーム-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'アイスクリーム',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Ice Cream',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Ice Cream',
        answers: [
          {
            answer: 'アイスクリーム',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'アイスクリーム',
        answers: [
          {
            answer: 'ice cream',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'オーケー-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'オーケー',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Ok, Okay',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Ok, Okay',
        answers: [
          {
            answer: 'オーケー',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'オーケー',
        answers: [
          {
            answer: 'ok',
            distanceToAllow: 0
          },
          {
            answer: 'okay',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'スカート-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'スカート',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Skirt',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Skirt',
        answers: [
          {
            answer: 'スカート',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'スカート',
        answers: [
          {
            answer: 'skirt',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'タクシー-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'タクシー',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Taxi',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Taxi',
        answers: [
          {
            answer: 'タクシー',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'タクシー',
        answers: [
          {
            answer: 'taxi',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ソファー-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ソファー',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Sofa',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Sofa',
        answers: [
          {
            answer: 'ソファー',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ソファー',
        answers: [
          {
            answer: 'sofa',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'フォーク-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'フォーク',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fork',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fork',
        answers: [
          {
            answer: 'フォーク',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'フォーク',
        answers: [
          {
            answer: 'fork',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'モーテル-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'モーテル',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Motel',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Motel',
        answers: [
          {
            answer: 'モーテル',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'モーテル',
        answers: [
          {
            answer: 'motel',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  }
}

export default Content
