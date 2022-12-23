import {
  VOCABULARY_CONCEPT_TYPE,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  LessonsContentDictType,
  GRAMMAR_CONCEPT_TYPE,
  GRAMMAR_QUESTION_PROMPT,
  MEANING_EXPLANATIONS_HEADER
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  '〜時-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: '〜じ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: "(blank) o'clock",
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "one o'clock, 1:00",
        answers: [
          {
            answer: 'いちじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いちじ',
        answers: [
          {
            answer: "one o'clock",
            distanceToAllow: 2
          },
          {
            answer: '1:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "two o'clock, 2:00",
        answers: [
          {
            answer: 'にじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'にじ',
        answers: [
          {
            answer: "two o'clock",
            distanceToAllow: 2
          },
          {
            answer: '2:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "three o'clock, 3:00",
        answers: [
          {
            answer: 'さんじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さんじ',
        answers: [
          {
            answer: "three o'clock",
            distanceToAllow: 3
          },
          {
            answer: '3:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "five o'clock, 5:00",
        answers: [
          {
            answer: 'ごじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごじ',
        answers: [
          {
            answer: "five o'clock",
            distanceToAllow: 3
          },
          {
            answer: '5:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "six o'clock, 6:00",
        answers: [
          {
            answer: 'ろくじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ろくじ',
        answers: [
          {
            answer: "six o'clock",
            distanceToAllow: 2
          },
          {
            answer: '6:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "eight o'clock, 8:00",
        answers: [
          {
            answer: 'はちじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はちじ',
        answers: [
          {
            answer: "eight o'clock",
            distanceToAllow: 3
          },
          {
            answer: '8:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "ten o'clock, 10:00",
        answers: [
          {
            answer: 'じゅうじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうじ',
        answers: [
          {
            answer: "ten o'clock",
            distanceToAllow: 2
          },
          {
            answer: '10:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "eleven o'clock, 11:00",
        answers: [
          {
            answer: 'じゅういちじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅういちじ',
        answers: [
          {
            answer: "eleven o'clock",
            distanceToAllow: 3
          },
          {
            answer: '11:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "twelve o'clock, 12:00",
        answers: [
          {
            answer: 'じゅうにじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうにじ',
        answers: [
          {
            answer: "twelve o'clock",
            distanceToAllow: 3
          },
          {
            answer: '12:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '四時-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'よじ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: "four o'clock, 4:00",
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "four o'clock, 4:00",
        answers: [
          {
            answer: 'よじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よじ',
        answers: [
          {
            answer: "four o'clock",
            distanceToAllow: 3
          },
          {
            answer: '4:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '七時-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'しちじ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: "seven o'clock, 7:00",
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "seven o'clock, 7:00",
        answers: [
          {
            answer: 'しちじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しちじ',
        answers: [
          {
            answer: "seven o'clock",
            distanceToAllow: 3
          },
          {
            answer: '7:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '九時-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'くじ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: "nine o'clock, 9:00",
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "nine o'clock, 9:00",
        answers: [
          {
            answer: 'くじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くじ',
        answers: [
          {
            answer: "nine o'clock",
            distanceToAllow: 2
          },
          {
            answer: '9:00',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '何時-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'なんじ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'what time, which hour',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'what time, which hour',
        answers: [
          {
            answer: 'なんじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'なんじ',
        answers: [
          {
            answer: 'what time',
            distanceToAllow: 2
          },
          {
            answer: 'which hour',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '〜分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: '〜ふん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Counter for minutes',
      extraInfoList: [
        {
          header: 'Example',
          explanation: 'にふん -> 2 minutes'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'two minutes',
        answers: [
          {
            answer: 'にふん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'にふん',
        answers: [
          {
            answer: 'two minutes',
            distanceToAllow: 1
          },
          {
            answer: '2 minutes',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'four minutes',
        answers: [
          {
            answer: 'よんふん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よんふん',
        answers: [
          {
            answer: 'four minutes',
            distanceToAllow: 1
          },
          {
            answer: '4 minutes',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'five minutes',
        answers: [
          {
            answer: 'ごふん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごふん',
        answers: [
          {
            answer: 'five minutes',
            distanceToAllow: 1
          },
          {
            answer: '5 minutes',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'seven minutes',
        answers: [
          {
            answer: 'ななふん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ななふん',
        answers: [
          {
            answer: 'seven minutes',
            distanceToAllow: 1
          },
          {
            answer: '7 minutes',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'nine minutes',
        answers: [
          {
            answer: 'きゅうふん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きゅうふん',
        answers: [
          {
            answer: 'nine minutes',
            distanceToAllow: 1
          },
          {
            answer: '9 minutes',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '一分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'いっぷん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'one minute',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'one minute',
        answers: [
          {
            answer: 'いっぷん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いっぷん',
        answers: [
          {
            answer: 'one minute',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '三分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'さんぷん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'three minutes',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'three minutes',
        answers: [
          {
            answer: 'さんぷん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さんぷん',
        answers: [
          {
            answer: 'three minutes',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '六分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ろっぷん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'six minutes',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'six minutes',
        answers: [
          {
            answer: 'ろっぷん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ろっぷん',
        answers: [
          {
            answer: 'six minutes',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '八分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'はっぷん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'eight minutes',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'eight minutes',
        answers: [
          {
            answer: 'はっぷん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はっぷん',
        answers: [
          {
            answer: 'eight minutes',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '十分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'じゅっぷん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'ten minutes',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'ten minutes',
        answers: [
          {
            answer: 'じゅっぷん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅっぷん',
        answers: [
          {
            answer: 'ten minutes',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '何分-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'なんぷん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'How Many Minutes',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'How Many Minutes',
        answers: [
          {
            answer: 'なんぷん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'なんぷん',
        answers: [
          {
            answer: 'how many minutes',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '喫茶店-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'きっさてん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Coffee Shop, Cafe',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Coffee Shop, Cafe',
        answers: [
          {
            answer: 'きっさてん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きっさてん',
        answers: [
          {
            answer: 'coffee shop',
            distanceToAllow: 3
          },
          {
            answer: 'cafe',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '銀行-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ぎんこう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Bank',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Bank',
        answers: [
          {
            answer: 'ぎんこう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ぎんこう',
        answers: [
          {
            answer: 'bank',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '図書館-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'としょかん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Library',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Library',
        answers: [
          {
            answer: 'としょかん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'としょかん',
        answers: [
          {
            answer: 'library',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '郵便局-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ゆうびんきょく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Post Office',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Post Office',
        answers: [
          {
            answer: 'ゆうびんきょく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ゆうびんきょく',
        answers: [
          {
            answer: 'post office',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'うん-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'うん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Yes (informal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Yes (informal)',
        answers: [
          {
            answer: 'うん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'うん',
        answers: [
          {
            answer: 'yes',
            distanceToAllow: 0
          },
          {
            answer: 'yes (informal)',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ううん-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ううん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'No (Informal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'No (Informal)',
        answers: [
          {
            answer: 'ううん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ううん',
        answers: [
          {
            answer: 'no',
            distanceToAllow: 0
          },
          {
            answer: 'no (informal)',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '僕-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ぼく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'I, Me (Used more often by men)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'I, Me (Used more often by men)',
        answers: [
          {
            answer: 'ぼく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ぼく',
        answers: [
          {
            answer: 'I',
            distanceToAllow: 0
          },
          {
            answer: 'Me',
            distanceToAllow: 0
          },
          {
            answer: 'I (Used more often by men)',
            distanceToAllow: 6
          },
          {
            answer: 'Me (Used more often by men)',
            distanceToAllow: 6
          },
          {
            answer: 'I, Me (Used more often by men)',
            distanceToAllow: 6
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'おれ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'おれ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'I, Me (Used more often by men, esp. younger ones)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'I, Me (Used more often by men, esp. younger ones)',
        answers: [
          {
            answer: 'おれ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おれ',
        answers: [
          {
            answer: 'I',
            distanceToAllow: 0
          },
          {
            answer: 'Me',
            distanceToAllow: 0
          },
          {
            answer: 'I (Used more often by men. younger ones)',
            distanceToAllow: 6
          },
          {
            answer: 'Me (Used more often by men. younger ones)',
            distanceToAllow: 6
          },
          {
            answer: 'I, Me (Used more often by men. younger ones)',
            distanceToAllow: 6
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '熊-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'くま',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Bear',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Bear',
        answers: [
          {
            answer: 'くま',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くま',
        answers: [
          {
            answer: 'bear',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '綺麗-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'きれい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Pretty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Pretty',
        answers: [
          {
            answer: 'きれい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きれい',
        answers: [
          {
            answer: 'pretty',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '明るい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'あかるい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Bright',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Bright',
        answers: [
          {
            answer: 'あかるい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あかるい',
        answers: [
          {
            answer: 'bright',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '子供-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'こども',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Child, Kid',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Child, Kid',
        answers: [
          {
            answer: 'こども',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'こども',
        answers: [
          {
            answer: 'child',
            distanceToAllow: 1
          },
          {
            answer: 'kid',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'うるさい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'うるさい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Annoying, Noisy',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Annoying, Noisy',
        answers: [
          {
            answer: 'うるさい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'うるさい',
        answers: [
          {
            answer: 'annoying',
            distanceToAllow: 3
          },
          {
            answer: 'noisy',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'こわい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'こわい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Scary',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Scary',
        answers: [
          {
            answer: 'こわい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'こわい',
        answers: [
          {
            answer: 'scary',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'よわい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'よわい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Weak',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Weak',
        answers: [
          {
            answer: 'よわい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よわい',
        answers: [
          {
            answer: 'weak',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '誰-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'だれ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Who',
      extraInfoList: [
        {
          header: 'Example',
          explanation: 'あなたはだれですか？ -> Who are you'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Who',
        answers: [
          {
            answer: 'だれ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'だれ',
        answers: [
          {
            answer: 'who',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'これ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'これ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'This (When referring to something close to you)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'これはおおきいですか？(Is this big?) -> You are asking if an object (close to you) is big'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はせいかくですか？'],
        answer: ['これ'],
        explanationIfUserGetsIncorrect: `
                This question refers to a guess 
                to an answer that you wrote so これ
                is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'Is '
          },
          {
            partToTranslate: true,
            text: 'this'
          },
          {
            partToTranslate: false,
            text: ' the correct answer?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はくまです。'],
        answer: ['これ'],
        explanationIfUserGetsIncorrect: `
                Using "this" in the sentence implies 
                that you are talking about a subject 
                that is near you so これ is used.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'This '
          },
          {
            partToTranslate: false,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' a bear.'
          }
        ]
      }
    ]
  },
  'それ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'それ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'That (When referring to something close to the person you are talking to)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'それはあなたのなまえですか(Is that your name?) -> In a way, their name is in their direction so you use それ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はへんですか？'],
        answer: ['それ'],
        explanationIfUserGetsIncorrect: `
                Since "that" is used, you are referring to something that is closer to the 
                person you are talking to so それ is used in this case.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'Is '
          },
          {
            partToTranslate: true,
            text: 'that'
          },
          {
            partToTranslate: false,
            text: ' weird?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はねこです。'],
        answer: ['それ'],
        explanationIfUserGetsIncorrect: `
                "That" refers to a subject that is closer to the 
                person you are talking to so それ is used.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That '
          },
          {
            partToTranslate: false,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' a cat.'
          }
        ]
      }
    ]
  },
  'あれ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あれ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'That lit. that over there (Used when talking about something far from you and the person you are talking to)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'あれはとしょかんです(That (over there) is a library) -> Using あれ implies that the library is far from you and the listener'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'は私の大学です。'],
        answer: ['あれ'],
        explanationIfUserGetsIncorrect: `
                This version of "that" implies that you are talking 
                about the college which is far away from both you and the 
                speaker so あれ is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That (over there) '
          },
          {
            partToTranslate: false,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' my university.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はやまですか？'],
        answer: ['あれ'],
        explanationIfUserGetsIncorrect: `
                This version of "that" implies that you are talking 
                about a mountain which is far away from both you and the 
                speaker so あれ is used
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'Is '
          },
          {
            partToTranslate: true,
            text: 'that (over there)'
          },
          {
            partToTranslate: false,
            text: ' a mountain？'
          }
        ]
      }
    ]
  },
  'どれ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'どれ(が)',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Which, Which one',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: ' どれがすきですか(Which do you like?) -> Question words such as which cannot be followed by a は particle so you must use が'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '', 'あなたのくるまですか。'],
        answer: ['どれ', 'が'],
        explanationIfUserGetsIncorrect: `
                Which/Which one corresponds to どれ and question words such as どれ are  
                followed by the particle が and not は
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Which one '
          },
          {
            partToTranslate: true,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' your car.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '', 'やすいですか'],
        answer: ['どれ', 'が'],
        explanationIfUserGetsIncorrect: `
                Which/Which one corresponds to どれ and question words such as どれ are  
                followed by the particle が and not は
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'Which one '
          },
          {
            partToTranslate: true,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' cheap'
          }
        ]
      }
    ]
  },
  'この-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'この',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'This (similar to これ but used when said right before a noun)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: ' このみせはたかいです。(This shop is expensive) -> Because "this" comes right before a noun, この is used and not これ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'がっこうはあたらしいです。'],
        answer: ['この'],
        explanationIfUserGetsIncorrect: `
                これ and この mean "this" but since the noun "school" comes right after,
                この is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'This'
          },
          {
            partToTranslate: false,
            text: ' school is new.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はなはきれいです。'],
        answer: ['この'],
        explanationIfUserGetsIncorrect: `
                これ and この mean "this" but since the noun "flower" comes right after,
                この is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'This'
          },
          {
            partToTranslate: false,
            text: ' flower is pretty.'
          }
        ]
      }
    ]
  },
  'その-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'その',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'That (Similar to それ but used when said right before a noun)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: ' そのさけはあたらしいです(That sake is new) -> Because "that" comes right before a noun, その is used and not それ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'みちはひろいです。'],
        answer: ['その'],
        explanationIfUserGetsIncorrect: `
                それ and その mean "that" but since the noun "street/road" comes right after,
                その is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That'
          },
          {
            partToTranslate: false,
            text: ' street/road is wide.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'りゆうはへんです。'],
        answer: ['その'],
        explanationIfUserGetsIncorrect: `
                それ and その mean "that" but since the noun "reason" comes right after,
                その is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That'
          },
          {
            partToTranslate: false,
            text: ' reason is weird.'
          }
        ]
      }
    ]
  },
  'あの-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あの',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'That over there (Similar to あれ but used when said right before a noun)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: ' あのほしはおおきいです(That star (over there) is big) -> Because "that (over there)" comes right before a noun, あの is used and not あれ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'ひとはちいさいです'],
        answer: ['あの'],
        explanationIfUserGetsIncorrect: `
                あれ and あの mean "that" but since the noun "street/road" comes right after,
                あの is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That'
          },
          {
            partToTranslate: false,
            text: ' person (over there) is small.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'ほしはまぶしいです'],
        answer: ['あの'],
        explanationIfUserGetsIncorrect: `
                あれ and あの mean "that" but since the noun "star" comes right after,
                あの is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That'
          },
          {
            partToTranslate: false,
            text: ' star (over there) is bright.'
          }
        ]
      }
    ]
  },
  'どの-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'どの',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'That over there (Similar to どれ but used when said right before a noun)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: ' どのいぬがつよいですか？(Which dog is strong?) -> Because "which" comes right before a noun, どの is used and not どれ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'さかな', '', 'おいしいですか？'],
        answer: ['どの', 'が'],
        explanationIfUserGetsIncorrect: `
                どれ and どの mean "which" but since the noun "fish" comes right after,
                どの is used. Also, が must be used for question words like どの.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Which'
          },
          {
            partToTranslate: false,
            text: ' fish '
          },
          {
            partToTranslate: true,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' delicious?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'かいしゃ', '', 'いいですか？'],
        answer: ['どの', 'が'],
        explanationIfUserGetsIncorrect: `
                どれ and どの mean "which" but since the noun "company" comes right after,
                どの is used. Also, が must be used for question words like どの.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Which'
          },
          {
            partToTranslate: false,
            text: ' company '
          },
          {
            partToTranslate: true,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' good?'
          }
        ]
      }
    ]
  },
  'も Also Particle-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'も Also/Too/As Well Particle',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'A particle similar to は except it adds the meaning "also," "too," or "as well." Can be used to connect multiple verbs',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: ' あなたもかわいいです。(You are also cute)'
        },
        {
          header: 'Example 2',
          explanation: 'ふくもとけいもたかいです。(Clothes and watches are expensive too)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あなたのいけん', '', 'ふつうです。'],
        answer: ['も'],
        explanationIfUserGetsIncorrect: `
                Since this sentence is talking about your opinion 
                being normal too, も is used. 
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'Your opinion is normal '
          },
          {
            partToTranslate: true,
            text: 'too.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['わたしのいぬ', '', 'つよいです。'],
        answer: ['も'],
        explanationIfUserGetsIncorrect: `
                Since this sentence is talking about your dog also being strong,
                も is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'My dog is '
          },
          {
            partToTranslate: true,
            text: 'also'
          },
          {
            partToTranslate: false,
            text: ' strong.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['えいごのしゅくだい', '', 'むずかしいです。'],
        answer: ['も'],
        explanationIfUserGetsIncorrect: `
                Since this sentence is talking about English homework
                also being hard, も is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'English homework is '
          },
          {
            partToTranslate: true,
            text: 'also'
          },
          {
            partToTranslate: false,
            text: ' hard.'
          }
        ]
      }
    ]
  },
  'も Both Particle-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ＡもＢも',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Both A and B',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'ふくもとけいもたかいです。(Both clothes and watches are expensive)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あお', '', 'あか', '', 'いいです。'],
        answer: ['も', 'も'],
        explanationIfUserGetsIncorrect: `
                    Since we are talking about both blue and 
                    red being good, the も particle is used 
                    after both nouns.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Both'
          },
          {
            partToTranslate: false,
            text: ' blue and red are good.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あなた', '', 'わたしのともだち', '', 'いしゃです。'],
        answer: ['も', 'も'],
        explanationIfUserGetsIncorrect: `
                    Since we are talking about both you and my
                    friend being doctors, the も particle is 
                    used after both nouns.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Both'
          },
          {
            partToTranslate: false,
            text: ' you and my friend are doctors.'
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
