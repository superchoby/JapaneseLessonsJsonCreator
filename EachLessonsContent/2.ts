import {
  ROMAJI_QUESTION_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  HIRAGANA_CONCEPT_TYPE,
  VOCABULARY_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  'さ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'さ',
      explanationHeader: 'Romaji',
      explanation: 'sa',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "sa" in "saw"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'さ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'sa',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'し-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'し',
      explanationHeader: 'Romaji',
      explanation: 'shi',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like "she"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'し',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'shi',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'す-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'す',
      explanationHeader: 'Romaji',
      explanation: 'su',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "sou" in "good soup"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'す',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'su',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'せ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'せ',
      explanationHeader: 'Romaji',
      explanation: 'se',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "se" in "seven"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'せ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'se',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'そ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'そ',
      explanationHeader: 'Romaji',
      explanation: 'so',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like "so" in "soldier"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'そ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'so',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '酒-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: '(お)さけ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Alcohol, Sake',
      extraInfoList: [
        {
          header: 'Formality',
          explanation: 'The お is optional but can be added for politeness to make おさけ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Alcohol',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'さけ',
            distanceToAllow: 0
          },
          {
            answer: 'おさけ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: '(お)さけ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'alcohol',
            distanceToAllow: 2
          },
          {
            answer: 'sake',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '今朝-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'けさ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'This morning',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'This Morning',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'けさ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'けさ',
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'morning',
            whyNotLookingFor: 'けさ has a similar meaning but does not exactly mean morning',
            acceptableResponseIsJapanese: false
          }
        ],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'this morning',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  '朝-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あさ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Morning',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Morning',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'あさ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あさ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'morning',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '足-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Leg, Foot',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Foot, Leg',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'あし',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あし',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'foot',
            distanceToAllow: 0
          },
          {
            answer: 'leg',
            distanceToAllow: 0
          },
          {
            answer: 'feet',
            distanceToAllow: 0
          },
          {
            answer: 'legs',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '好き-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'すき',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Like (e.g I like food)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Like (e.g I like food)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'すき',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'すき',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'like',
            distanceToAllow: 0
          },
          {
            answer: 'to like',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '貸す-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かす',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To lend, To loan',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To lend, To loan',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'かす',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かす',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'to lend',
            distanceToAllow: 1
          },
          {
            answer: 'to loan',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  'うすい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'うすい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thin (For flat objects, e.g. thin like paper)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thin (For flat objects, e.g. thin like paper)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'うすい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'うすい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'thin',
            distanceToAllow: 0
          },
          {
            answer: 'thin (for flat objects, e.g. thin like paper)',
            distanceToAllow: 10
          }
        ]
      }
    ]
  },
  'すこし-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'すこし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'A little',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'A little',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'すこし',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'すこし',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'a little',
            distanceToAllow: 2
          },
          {
            answer: 'little bit',
            distanceToAllow: 2
          },
          {
            answer: 'a little bit',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  'おいしい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おいしい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Delicious, Tasty, Good Tasting',
      extraInfoList: [
        {
          header: 'Formality Note',
          explanation: 'Can be used for formal and informal situations'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Delicious (formal and informal)',
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'うまい',
            acceptableResponseIsJapanese: true,
            whyNotLookingFor: `While うまい does mean this, 
                        it is only used for informal situations.`
          }
        ],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おいしい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おいしい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'delicious',
            distanceToAllow: 2
          },
          {
            answer: 'good tasting',
            distanceToAllow: 2
          },
          {
            answer: 'tastes good',
            distanceToAllow: 2
          },
          {
            answer: 'yummy',
            distanceToAllow: 1
          },
          {
            answer: 'tasty',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '塩-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しお',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Salt',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Salt',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'しお',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しお',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'salt',
            distanceToAllow: 1
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
