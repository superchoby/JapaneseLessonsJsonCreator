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
  '食べる-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'たべる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To eat',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To eat',
        answers: [
          {
            answer: 'たべる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'たべる',
        answers: [
          {
            answer: 'to eat',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'わかる-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'わかる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To understand',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To understand',
        answers: [
          {
            answer: 'わかる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'わかる',
        answers: [
          {
            answer: 'to understand',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '見る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'みる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To see',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To see',
        answers: [
          {
            answer: 'みる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'みる',
        answers: [
          {
            answer: 'to see',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '寝る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ねる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To sleep',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To sleep',
        answers: [
          {
            answer: 'ねる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ねる',
        answers: [
          {
            answer: 'to sleep',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '起きる-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おきる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To wake up, To occur, To happen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To wake up, To occur, To happen',
        answers: [
          {
            answer: 'おきる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おきる',
        answers: [
          {
            answer: 'to wake up',
            distanceToAllow: 2
          },
          {
            answer: 'to occur',
            distanceToAllow: 2
          },
          {
            answer: 'to happen',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '考える-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かんがえる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To consider',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To consider',
        answers: [
          {
            answer: 'かんがえる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かんがえる',
        answers: [
          {
            answer: 'to consider',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '出る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'でる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To leave, To come out',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To leave, To come out',
        answers: [
          {
            answer: 'でる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'でる',
        answers: [
          {
            answer: 'to leave',
            distanceToAllow: 1
          },
          {
            answer: 'to come out',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '借りる-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かりる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To borrow, To rent',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To borrow, To rent',
        answers: [
          {
            answer: 'かりる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かりる',
        answers: [
          {
            answer: 'to borrow',
            distanceToAllow: 2
          },
          {
            answer: 'to rent',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '着る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'きる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To wear (for upper body clothing)',
      extraInfoList: [{
        header: 'Examples',
        explanation: 'This word is used for clothes such as shirts, jackets, tank tops etc.'
      }]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To wear (for upper body clothing)',
        answers: [
          {
            answer: 'きる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きる',
        answers: [
          {
            answer: 'to wear',
            distanceToAllow: 1
          },
          {
            answer: 'to wear (for upper body clothing)',
            distanceToAllow: 5
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '聞く-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'きく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To hear, To listen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To hear, To listen',
        answers: [
          {
            answer: 'きく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きく',
        answers: [
          {
            answer: 'to hear',
            distanceToAllow: 1
          },
          {
            answer: 'to listen',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '泳ぐ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'およぐ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To swim',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To swim',
        answers: [
          {
            answer: 'およぐ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'およぐ',
        answers: [
          {
            answer: 'to swim',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '遊ぶ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あそぶ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To play',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To play',
        answers: [
          {
            answer: 'あそぶ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あそぶ',
        answers: [
          {
            answer: 'to play',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '飲む-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'のむ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To drink',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To drink',
        answers: [
          {
            answer: 'のむ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'のむ',
        answers: [
          {
            answer: 'to drink',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '買う-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To buy',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To buy',
        answers: [
          {
            answer: 'かう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かう',
        answers: [
          {
            answer: 'to buy',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'する-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'する',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To do',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To do',
        answers: [
          {
            answer: 'する',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'する',
        answers: [
          {
            answer: 'to do',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '死ぬ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しぬ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To die, To pass away',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To die, To pass away',
        answers: [
          {
            answer: 'しぬ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しぬ',
        answers: [
          {
            answer: 'to die',
            distanceToAllow: 0
          },
          {
            answer: 'to pass away',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '来る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To come',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To come',
        answers: [
          {
            answer: 'くる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くる',
        answers: [
          {
            answer: 'to come',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '読む-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'よむ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To read',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To read',
        answers: [
          {
            answer: 'よむ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よむ',
        answers: [
          {
            answer: 'to read',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '帰る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かえる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To return, To come home, To go home',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To return, To come home, To go home',
        answers: [
          {
            answer: 'かえる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かえる',
        answers: [
          {
            answer: 'to return',
            distanceToAllow: 2
          },
          {
            answer: 'to come home',
            distanceToAllow: 2
          },
          {
            answer: 'to go home',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'to change',
            whyNotLookingFor: 'Although かえる in Hiragana can have this meaning as well, we are looking for a different meaning',
            acceptableResponseIsJapanese: false
          }
        ],
        answerIsInJapanese: false
      }
    ]
  },
  '行く-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To go',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To go',
        answers: [
          {
            answer: 'いく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いく',
        answers: [
          {
            answer: 'to go',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '使う-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'つかう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To use',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To use',
        answers: [
          {
            answer: 'つかう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'つかう',
        answers: [
          {
            answer: 'to use',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '作る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'つくる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To make',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To make',
        answers: [
          {
            answer: 'つくる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'つくる',
        answers: [
          {
            answer: 'to make',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '言う-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To say',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To say',
        answers: [
          {
            answer: 'いう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いう',
        answers: [
          {
            answer: 'to say',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '思う-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おもう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To think',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To think',
        answers: [
          {
            answer: 'おもう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おもう',
        answers: [
          {
            answer: 'to think',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '知る-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To know',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To know',
        answers: [
          {
            answer: 'しる',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しる',
        answers: [
          {
            answer: 'to know',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ここ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ここ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Here, This place',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'ここはわたしのこうこうです (This place is my highschool)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はわたしのいえです。'],
        answer: ['ここ'],
        explanationIfUserGetsIncorrect: `
                    We are talking about a place that is close to you (here) so 
                    ここ is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'This place'
          },
          {
            partToTranslate: false,
            text: ' is my house.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'ひとはたのしいです。'],
        answer: ['ここの'],
        explanationIfUserGetsIncorrect: `
                    More specifically than here, we are talking about 
                    the people here so you use ここ and add a の
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The people '
          },
          {
            partToTranslate: true,
            text: 'here'
          },
          {
            partToTranslate: false,
            text: ' are fun.'
          }
        ]
      }
    ]
  },
  'そこ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'そこ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'There, That Place',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'そこのひとはやさしいです。(The people there are nice)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'ゆうびんきょくはふるいです。'],
        answer: ['そこの'],
        explanationIfUserGetsIncorrect: `
                    More specifically than there, we are talking about 
                    the post office there so you use そこ and add a の
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The post office '
          },
          {
            partToTranslate: true,
            text: 'there'
          },
          {
            partToTranslate: false,
            text: ' is old.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'としょかんのひとはこわいです。'],
        answer: ['そこの'],
        explanationIfUserGetsIncorrect: `
                    More specifically than there, we are talking about 
                    the library there so you use そこ and add a の
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The people in that library '
          },
          {
            partToTranslate: true,
            text: 'there'
          },
          {
            partToTranslate: false,
            text: ' are scary.'
          }
        ]
      }
    ]
  },
  'あそこ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あそこ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: '(over) there, That place (over there)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'あそこはあぶないです。 (It is dangerous over there)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'だいがくはきれいです。'],
        answer: ['あそこの'],
        explanationIfUserGetsIncorrect: `
                    More specifically than over there, we are talking about
                    the library over there so we use あそこ and add a の
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The university '
          },
          {
            partToTranslate: true,
            text: 'over there'
          },
          {
            partToTranslate: false,
            text: ' is pretty.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'のきっさてんはたかいです。'],
        answer: ['あそこ'],
        explanationIfUserGetsIncorrect: `
                    More specifically than over there, we are talking about
                    the coffee shop over there so we use あそこ and add a の
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The coffee shop '
          },
          {
            partToTranslate: true,
            text: 'over there'
          },
          {
            partToTranslate: false,
            text: ' is expensive.'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', 'はあついです。'],
        answer: ['あそこ'],
        explanationIfUserGetsIncorrect: `
                    We are talking about a place over there so あそこ is used
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'That place (over there)'
          },
          {
            partToTranslate: false,
            text: ' is hot.'
          }
        ]
      }
    ]
  },
  'どこ-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'どこ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Where',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'うみはどこですか？ (Where is the ocean?)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['ねこは', '', 'ですか？'],
        answer: ['どこ'],
        explanationIfUserGetsIncorrect: `
                    Since we are asking "where", どこ is used.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Where'
          },
          {
            partToTranslate: false,
            text: ' is the cat?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['つくえは', '', 'ですか？'],
        answer: ['どこ'],
        explanationIfUserGetsIncorrect: `
                    Since we are asking "where", どこ is used.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Where'
          },
          {
            partToTranslate: false,
            text: ' is the desk?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あなたのいえは', '', 'ですか？'],
        answer: ['どこ'],
        explanationIfUserGetsIncorrect: `
                    Since we are asking "where", どこ is used.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Where'
          },
          {
            partToTranslate: false,
            text: ' is your house?'
          }
        ]
      }
    ]
  },
  'だれの-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'だれの + noun',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Whose X',
      extraInfoList: [
        {
          header: 'Breakdown',
          explanation: 'This is a combination of the word for who (だれ) and the の particle indicating possession'
        },
        {
          header: 'Example 1',
          explanation: 'それはだれのほんですか (Whose book is that)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あれは', '', 'くるまですか'],
        answer: ['だれの'],
        explanationIfUserGetsIncorrect: `
                We are asking about whose car it is, so we use だれの。
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Whose'
          },
          {
            partToTranslate: false,
            text: ' car is that?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['これは', '', 'へやですか'],
        answer: ['だれの'],
        explanationIfUserGetsIncorrect: `
                We are asking about whose room it is, so we use だれの。
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Whose'
          },
          {
            partToTranslate: false,
            text: ' room is this?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['それは', '', 'とけいですか'],
        answer: ['だれの'],
        explanationIfUserGetsIncorrect: `
                We are asking about whose watch it is, so we use だれの
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Whose'
          },
          {
            partToTranslate: false,
            text: ' watch is that?'
          }
        ]
      }
    ]
  },
  'じゃないです-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゃないです',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Not (formal for nouns and な adjectives)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'わたしはがくせいじゃないです。(I am not a student)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['これはわたしのしゅくだい', '', '。'],
        answer: ['じゃないです'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal but not very formal
                    and we are talking about homework, which is a noun, 
                    じゃないです is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'This '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' my homework. (formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、ここはきっさてん', '', '。'],
        answer: ['いいえ', 'じゃないです'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal but not very formal
                    and we are talking about a coffee shop, which is a noun, じゃないです is used. 
                    Also, for non-casual sentences, いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', this place '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' a coffee shop. (formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、ぼくはえいごのせんせい', '', '。'],
        answer: ['いいえ', 'じゃないです'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal but not very formal 
                    and we are talking about being an English teacher, which is a noun, 
                    じゃないです is used. Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', I '
          },
          {
            partToTranslate: true,
            text: 'am not'
          },
          {
            partToTranslate: false,
            text: ' an English teacher. (formal)'
          }
        ]
      }
    ]
  },
  'ではありません-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ではありません',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Not (very formal for nouns and な adjectives)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'わたしはがくせいではありません。 (I am not a student)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、これはわたしのしゅくだい', '', '。'],
        answer: ['いいえ', 'ではありません'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is very formal and we are 
                    talking about homework, which is a noun,
                    ではありません is used. Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', this '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' my homework. (very formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['ここはきっさてん', '', '。'],
        answer: ['ではありません'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is very formal and we are talking 
                    about a coffee shop, which is a noun, 
                    ではありません is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'This place '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' a coffee shop. (very formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、わたしのりょうしんはえいごのせんせい', '', '。'],
        answer: ['いいえ', 'ではありません'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is very formal and we are 
                    talking about parents being an English teacher, which is a noun,
                    ではありません is used. Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', my parents '
          },
          {
            partToTranslate: true,
            text: 'are not'
          },
          {
            partToTranslate: false,
            text: ' English teachers. (very formal)'
          }
        ]
      }
    ]
  },
  'じゃない-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゃない',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Not (casual  for nouns and な adjectives)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'あれはくまじゃない。 (That over there is not a bear)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['おれはいしゃ', '', '。'],
        answer: ['じゃない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual
                    and we are talking about being a doctor, 
                    which is a noun, じゃない is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'I '
          },
          {
            partToTranslate: true,
            text: 'am not'
          },
          {
            partToTranslate: false,
            text: ' a doctor. (casual)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、そこのひとはこども', '', '。'],
        answer: ['ううん', 'じゃない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual and we are talking 
                    about kids, which is a noun, 
                    じゃない is used. Also, for casual sentences,
                    ううん is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', the people there '
          },
          {
            partToTranslate: true,
            text: 'are not'
          },
          {
            partToTranslate: false,
            text: ' kids. (casual)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、それはおれのなまえ', '', '。'],
        answer: ['ううん', 'じゃない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual and we are talking 
                    about someone's name which is a noun, 
                    じゃない is used. Also, for casual sentences,
                    ううん is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', that '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' my name. (casual)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['それはすこし', '', '。'],
        answer: ['じゃない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual
                    and we are talking about something being a small amount, 
                    which is a な-adjective, 
                    じゃない is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'That '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' a little. (casual)'
          }
        ]
      }
    ]
  },
  'くない-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くない',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Not (casual for い-adjectives)',
      extraInfoList: [
        {
          header: 'Rule',
          explanation: 'Remove the い and replace it with くない, e.g. よわい -> よわくない'
        },
        {
          header: 'Example 1',
          explanation: 'ううん、えいごはたのしくない (No, English is not fun)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['ぼくは', '', '。'],
        answer: ['ちいさくない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual and ちいさい 
                    is a い-adjective, くない is used. To make ちいさい
                    negative: ちいさい -> ちいさくない
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'I '
          },
          {
            partToTranslate: true,
            text: 'am not small'
          },
          {
            partToTranslate: false,
            text: ' . (casual)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、いまは', '', '。'],
        answer: ['ううん', 'わるくない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual and わるい is 
                    an い-adjective, くない is used. To make 
                    わるい negative: わるい -> わるくない
                    Also, for casual sentences,
                    ううん is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', right now '
          },
          {
            partToTranslate: true,
            text: 'is not bad'
          },
          {
            partToTranslate: false,
            text: '. (casual)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、いまのわたしのくるまは', '', '。'],
        answer: ['ううん', 'ふるくない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual and ふるい is 
                    an い-adjective, くない is used. To make 
                    ふるい negative: ふるい -> ふるくない
                    Also, for casual sentences,
                    ううん is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', my current car '
          },
          {
            partToTranslate: true,
            text: 'is not old'
          },
          {
            partToTranslate: false,
            text: '. (casual)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['それはすこし', '', '。'],
        answer: ['じゃない'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is casual
                    and we are talking about something being a small amount, 
                    which is a な-adjective, 
                    じゃない is used.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'That '
          },
          {
            partToTranslate: true,
            text: 'is not'
          },
          {
            partToTranslate: false,
            text: ' a little. (casual)'
          }
        ]
      }
    ]
  },
  'くないです-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くないです',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Not (formal for い-adjectives)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'くまはこわくないです (Bears are not scary)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あのぎんこうは', '', '。'],
        answer: ['ちいさくないです'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal but not very formal and ちいさい 
                    is a い-adjective, くないです is used. To make ちいさい
                    negative: ちいさい -> ちいさくない
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'That bank '
          },
          {
            partToTranslate: true,
            text: 'is not small'
          },
          {
            partToTranslate: false,
            text: '. (formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、あのゆうびんきょくは', '', '。'],
        answer: ['いいえ', 'ちかくないです'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal and ちかい is 
                    an い-adjective, くないです is used. To make 
                    ちかい negative: ちかい -> ちかくないです
                    Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', that post office '
          },
          {
            partToTranslate: true,
            text: 'is not close'
          },
          {
            partToTranslate: false,
            text: '. (formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、わたしのともだちは', '', '。'],
        answer: ['いいえ', 'よわくないです'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal and よわい is 
                    an い-adjective, くないです is used. To make 
                    よわい negative: よわい -> よわくない
                    Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', my friend '
          },
          {
            partToTranslate: true,
            text: 'is not weak'
          },
          {
            partToTranslate: false,
            text: '. (formal)'
          }
        ]
      }
    ]
  },
  'くありません-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くありません',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Not (very formal for い-adjectives)',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'あしたはさむくありません。(Tomorrow is not cold)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['あのくには', '', '。'],
        answer: ['とおくありません'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is very formal and and とおい 
                    is a い-adjective, くありません is used. To make とおい
                    negative: とおい -> とおくありません
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'That country '
          },
          {
            partToTranslate: true,
            text: 'is not far'
          },
          {
            partToTranslate: false,
            text: '. (very formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、そのりゆうは', '', '。'],
        answer: ['いいえ', 'わるくありません'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal and わるい is 
                    an い-adjective, くありません is used. To make 
                    わるい negative: わるい -> わるくありません
                    Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', that reason'
          },
          {
            partToTranslate: true,
            text: ' is not bad'
          },
          {
            partToTranslate: false,
            text: '. (very formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['', '、このみせは', '', '。'],
        answer: ['いいえ', 'たかくありません'],
        explanationIfUserGetsIncorrect: `
                    Since this sentence is formal and たかい is 
                    an い-adjective, くありません is used. To make 
                    たかい negative: たかい -> たかくありません
                    Also, for non-casual sentences,
                    いいえ is used for no.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'No'
          },
          {
            partToTranslate: false,
            text: ', this shop '
          },
          {
            partToTranslate: true,
            text: 'is not expensive'
          },
          {
            partToTranslate: false,
            text: '. (very formal)'
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
