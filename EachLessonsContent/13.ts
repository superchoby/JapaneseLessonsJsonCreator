import {
  CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
  KATAKANA_CONCEPT_TYPE,
  CORRESPONDING_HIRAGANA_HEADER,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  VOCABULARY_CONCEPT_TYPE,
  LessonsContentDictType,
  MEANING_EXPLANATIONS_HEADER
} from './SharedVariables'

export const Content: LessonsContentDictType = {
  'ナ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ナ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'な',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ナ',
        answers: [
          {
            answer: 'な',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ニ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ニ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'に',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ニ',
        answers: [
          {
            answer: 'に',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ヌ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ヌ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'ぬ',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ヌ',
        answers: [
          {
            answer: 'ぬ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ネ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ネ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'ね',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ネ',
        answers: [
          {
            answer: 'ね',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ノ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ノ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'の',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ノ',
        answers: [
          {
            answer: 'の',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ハ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ハ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'は',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ハ',
        answers: [
          {
            answer: 'は',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ヒ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ヒ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'ひ',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ヒ',
        answers: [
          {
            answer: 'ひ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'フ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'フ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'ふ',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'フ',
        answers: [
          {
            answer: 'ふ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'へ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'へ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'へ',
      extraInfoList: [
        {
          header: 'hint',
          explanation: 'They are the exact same'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'へ',
        answers: [
          {
            answer: 'へ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ホ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ホ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'ほ',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ホ',
        answers: [
          {
            answer: 'ほ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'マ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'マ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'ま',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'マ',
        answers: [
          {
            answer: 'ま',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ミ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ミ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'み',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ミ',
        answers: [
          {
            answer: 'み',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ム-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ム',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'む',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'ム',
        answers: [
          {
            answer: 'む',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'メ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'メ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'め',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'メ',
        answers: [
          {
            answer: 'め',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'モ-カタカナ': {
    conceptType: KATAKANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'モ',
      explanationHeader: CORRESPONDING_HIRAGANA_HEADER,
      explanation: 'も',
      extraInfoList: [
        {
          header: 'hint',
          explanation: 'They are very similar except モ has much more sharper edges (as is normal with katakana)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: CONVERT_KATAKANA_TO_HIRAGANA_PROMPT,
        question: 'モ',
        answers: [
          {
            answer: 'も',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  'ネクタイ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ネクタイ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Tie, Necktie',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Tie, Necktie',
        answers: [
          {
            answer: 'ネクタイ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ネクタイ',
        answers: [
          {
            answer: 'tie',
            distanceToAllow: 0
          },
          {
            answer: 'necktie',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'マイク-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'マイク',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Mic, Microphone',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Mic, Microphone',
        answers: [
          {
            answer: 'マイク',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'マイク',
        answers: [
          {
            answer: 'mic',
            distanceToAllow: 0
          },
          {
            answer: 'microphone',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'マイナス-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'マイナス',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Minus, Negative (number)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Minus, Negative (number)',
        answers: [
          {
            answer: 'マイナス',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'マイナス',
        answers: [
          {
            answer: 'minus',
            distanceToAllow: 1
          },
          {
            answer: 'negative',
            distanceToAllow: 3
          },
          {
            answer: 'negative (number)',
            distanceToAllow: 5
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'メモ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'メモ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Note, Memo',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Note, Memo',
        answers: [
          {
            answer: 'メモ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'メモ',
        answers: [
          {
            answer: 'note',
            distanceToAllow: 1
          },
          {
            answer: 'memo',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'マスク-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'マスク',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Face Mask 😷, Mask',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Face Mask 😷, Mask',
        answers: [
          {
            answer: 'マスク',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'マスク',
        answers: [
          {
            answer: 'face mask',
            distanceToAllow: 3
          },
          {
            answer: 'mask',
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
