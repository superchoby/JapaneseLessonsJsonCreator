import {
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  VOCABULARY_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  '前-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'まえ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Before, In front of',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Before, In front of',
        answers: [
          {
            answer: 'まえ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'まえ',
        answers: [
          {
            answer: 'before',
            distanceToAllow: 2
          },
          {
            answer: 'in front of',
            distanceToAllow: 4
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'とんかつ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'とんかつ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Tonkatsu, Pork Cutlet',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Tonkatsu, Pork Cutlet',
        answers: [
          {
            answer: 'とんかつ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'とんかつ',
        answers: [
          {
            answer: 'tonkatsu',
            distanceToAllow: 1
          },
          {
            answer: 'pork cutlet',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '肉-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'にく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Meat',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Meat',
        answers: [
          {
            answer: 'にく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'にく',
        answers: [
          {
            answer: 'meat',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'メニュー-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'メニュー',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Menu',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Menu',
        answers: [
          {
            answer: 'メニュー',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'メニュー',
        answers: [
          {
            answer: 'menu',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '野菜-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'やさい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Vegetable',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Vegetable',
        answers: [
          {
            answer: 'やさい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'やさい',
        answers: [
          {
            answer: 'vegetable',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '鉛筆-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'えんぴつ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Pencil',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Pencil',
        answers: [
          {
            answer: 'えんぴつ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'えんぴつ',
        answers: [
          {
            answer: 'pencil',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '傘-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かさ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Umbrella',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Umbrella',
        answers: [
          {
            answer: 'かさ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かさ',
        answers: [
          {
            answer: 'umbrella',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'かばん-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かばん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Bag, Satchel, Briefcase',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Bag, Satchel, Briefcase',
        answers: [
          {
            answer: 'かばん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かばん',
        answers: [
          {
            answer: 'bag',
            distanceToAllow: 0
          },
          {
            answer: 'satchel',
            distanceToAllow: 2
          },
          {
            answer: 'briefcase',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '靴-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くつ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Shoe, Shoes',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Shoe, Shoes',
        answers: [
          {
            answer: 'くつ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くつ',
        answers: [
          {
            answer: 'shoe',
            distanceToAllow: 1
          },
          {
            answer: 'shoes',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '財布-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'さいふ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Wallet',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Wallet',
        answers: [
          {
            answer: 'さいふ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さいふ',
        answers: [
          {
            answer: 'wallet',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ジーンズ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ジーンズ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Jeans',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Jeans',
        answers: [
          {
            answer: 'ジーンズ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ジーンズ',
        answers: [
          {
            answer: 'jeans',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '辞書-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じしょ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Dictionary',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Dictionary',
        answers: [
          {
            answer: 'じしょ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じしょ',
        answers: [
          {
            answer: 'dictionary',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '自転車-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じてんしゃ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Bicycle, Bike',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Bicycle, Bike',
        answers: [
          {
            answer: 'じてんしゃ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じてんしゃ',
        answers: [
          {
            answer: 'bicycle',
            distanceToAllow: 2
          },
          {
            answer: 'bike',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '新聞-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しんぶん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Newspaper',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Newspaper',
        answers: [
          {
            answer: 'しんぶん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しんぶん',
        answers: [
          {
            answer: 'newspaper',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '時計-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'とけい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Clock',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Clock',
        answers: [
          {
            answer: 'とけい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'とけい',
        answers: [
          {
            answer: 'clock',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'テープ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'テープ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Tape',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Tape',
        answers: [
          {
            answer: 'テープ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'テープ',
        answers: [
          {
            answer: 'tape',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'トレーナー-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'トレーナー',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Trainer',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Trainer',
        answers: [
          {
            answer: 'トレーナー',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'トレーナー',
        answers: [
          {
            answer: 'trainer',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ノート-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ノート',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Notebook',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Notebook',
        answers: [
          {
            answer: 'ノート',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ノート',
        answers: [
          {
            answer: 'notebook',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '帽子-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ぼうし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Hat, Cap',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Hat, Cap',
        answers: [
          {
            answer: 'ぼうし',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ぼうし',
        answers: [
          {
            answer: 'hat',
            distanceToAllow: 0
          },
          {
            answer: 'cap',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '本-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ほん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Book',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Book',
        answers: [
          {
            answer: 'ほん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ほん',
        answers: [
          {
            answer: 'book',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'お手洗い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おてあらい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Restroom',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Restroom',
        answers: [
          {
            answer: 'おてあらい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おてあらい',
        answers: [
          {
            answer: 'restroom',
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
    isFastReviewCard: false,
    Learning: {
      concept: 'きっさてん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Coffee Shop',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Coffee Shop',
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
            distanceToAllow: 4
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '銀行-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
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
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '図書館-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
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
    isFastReviewCard: false,
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
  '経済-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'けいざい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Economy, Economics',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Economy, Economics',
        answers: [
          {
            answer: 'けいざい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'けいざい',
        answers: [
          {
            answer: 'economy',
            distanceToAllow: 2
          },
          {
            answer: 'economics',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'いくら-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いくら',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'How much',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'How much',
        answers: [
          {
            answer: 'いくら',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いくら',
        answers: [
          {
            answer: 'how much',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '〜円-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: '〜えん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Counter for yen',
      extraInfoList: [
        {
          header: 'Example',
          explanation: 'ひゃくえん -> 100 yen'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '1 yen',
        answers: [
          {
            answer: 'いちえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '5 yen',
        answers: [
          {
            answer: 'ごえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '10 yen',
        answers: [
          {
            answer: 'じゅうえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '50 yen',
        answers: [
          {
            answer: 'ごじゅうえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '100 yen',
        answers: [
          {
            answer: 'ひゃくえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '500 yen',
        answers: [
          {
            answer: 'ごひゃくえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '1000 yen',
        answers: [
          {
            answer: 'せんえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: '10000 yen',
        answers: [
          {
            answer: 'いちまんえん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いちえん',
        answers: [
          {
            answer: '1 yen',
            distanceToAllow: 0
          },
          {
            answer: 'one yen',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごえん',
        answers: [
          {
            answer: '5 yen',
            distanceToAllow: 0
          },
          {
            answer: 'five yen',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうえん',
        answers: [
          {
            answer: '10 yen',
            distanceToAllow: 0
          },
          {
            answer: 'ten yen',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ひゃくえん',
        answers: [
          {
            answer: '100 yen',
            distanceToAllow: 0
          },
          {
            answer: 'one hundred yen',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごひゃくえん',
        answers: [
          {
            answer: '500 yen',
            distanceToAllow: 0
          },
          {
            answer: 'five hundred yen',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'せんえん',
        answers: [
          {
            answer: '1000 yen',
            distanceToAllow: 0
          },
          {
            answer: 'one thousand yen',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごじゅうえん',
        answers: [
          {
            answer: '50 yen',
            distanceToAllow: 0
          },
          {
            answer: 'fifty yen',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いちまんえん',
        answers: [
          {
            answer: '10000 yen',
            distanceToAllow: 0
          },
          {
            answer: 'ten thousand yen',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'いらっしゃいませ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いらっしゃいませ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Welcome',
      extraInfoList: [
        {
          header: 'Situations used in',
          explanation: 'This is used by shops, restaurants, etc when a customer enters'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Welcome',
        answers: [
          {
            answer: 'いらっしゃいませ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いらっしゃいませ',
        answers: [
          {
            answer: 'welcome',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'おねがいします-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おねがいします',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Please, Please (very formall)',
      extraInfoList: [
        {
          header: 'Examples where this is used',
          explanation: 'When you are at a restaurant asking the server for a check'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Please',
        answers: [
          {
            answer: 'おねがいします',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おねがいします',
        answers: [
          {
            answer: 'please',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ください-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ください',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Please, Please (formal)',
      extraInfoList: [
        {
          header: 'Examples where this is used',
          explanation: "When you are making a request to someone you don't know"
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Please',
        answers: [
          {
            answer: 'ください',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ください',
        answers: [
          {
            answer: 'please',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'じゃあ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゃあ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Then, Well, So, Well then',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Then, Well, So, Well then',
        answers: [
          {
            answer: 'じゃあ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゃあ',
        answers: [
          {
            answer: 'then',
            distanceToAllow: 1
          },
          {
            answer: 'well',
            distanceToAllow: 1
          },
          {
            answer: 'so',
            distanceToAllow: 0
          },
          {
            answer: 'well then',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'どうぞ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'どうぞ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Here you go, Go ahead',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Here you go, Go ahead',
        answers: [
          {
            answer: 'どうぞ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'どうぞ',
        answers: [
          {
            answer: 'here you go',
            distanceToAllow: 4
          },
          {
            answer: 'go ahead',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'どうも-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'どうも',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thank you (more casual)',
      extraInfoList: [
        {
          header: 'どうも vs ありがとう',
          explanation: 'どうも is more casual'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thank you (more casual)',
        answers: [
          {
            answer: 'どうも',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'ありがとう',
            whyNotLookingFor: 'We are looking for something even more casual',
            acceptableResponseIsJapanese: true
          }
        ],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'どうも',
        answers: [
          {
            answer: 'thank you',
            distanceToAllow: 3
          },
          {
            answer: 'thank you (more casual)',
            distanceToAllow: 6
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '番号-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ばんごう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Number',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Number',
        answers: [
          {
            answer: 'ばんごう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ばんごう',
        answers: [
          {
            answer: 'number',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '留学-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'りゅうがく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Study abroad, Studying abroad',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Study abroad, Studying abroad',
        answers: [
          {
            answer: 'りゅうがく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'りゅうがく',
        answers: [
          {
            answer: 'study abroad',
            distanceToAllow: 4
          },
          {
            answer: 'studying abroad',
            distanceToAllow: 5
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '留学生-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'りゅうがくせい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Study abroad student, Exchange student',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Study abroad student, Exchange student',
        answers: [
          {
            answer: 'りゅうがくせい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'りゅうがくせい',
        answers: [
          {
            answer: 'study abroad student',
            distanceToAllow: 8
          },
          {
            answer: 'exchange student',
            distanceToAllow: 7
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '科学-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かがく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Science',
      extraInfoList: [
        {
          header: 'Important note',
          explanation: 'This word also means chemistry however their kanji is different and we are focused on the "science" meaning for this case'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Science',
        answers: [
          {
            answer: 'かがく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かがく',
        answers: [
          {
            answer: 'science',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'chemistry',
            whyNotLookingFor: 'Although the hiragana for "chemistry" is かがく we are looking for a different, but related word',
            acceptableResponseIsJapanese: false
          }
        ],
        answerIsInJapanese: false
      }
    ]
  },
  'コンピューター-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'コンピューター',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Computer',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Computer',
        answers: [
          {
            answer: 'コンピューター',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'コンピューター',
        answers: [
          {
            answer: 'computer',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '政治-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'せいじ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Politics',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Politics',
        answers: [
          {
            answer: 'せいじ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'せいじ',
        answers: [
          {
            answer: 'politics',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'ビジネス-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ビジネス',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Business',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Business',
        answers: [
          {
            answer: 'ビジネス',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ビジネス',
        answers: [
          {
            answer: 'business',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '文学-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ぶんがく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Literature',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Literature',
        answers: [
          {
            answer: 'ぶんがく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ぶんがく',
        answers: [
          {
            answer: 'literature',
            distanceToAllow: 4
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '歴史-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'れきし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'History',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'History',
        answers: [
          {
            answer: 'れきし',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'れきし',
        answers: [
          {
            answer: 'history',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '数学-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'すうがく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Mathematics',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Mathematics',
        answers: [
          {
            answer: 'すうがく',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'すうがく',
        answers: [
          {
            answer: 'mathematics',
            distanceToAllow: 4
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '医者-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いしゃ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Doctor, Physician',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Doctor, Physician',
        answers: [
          {
            answer: 'いしゃ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いしゃ',
        answers: [
          {
            answer: 'doctor',
            distanceToAllow: 2
          },
          {
            answer: 'physician',
            distanceToAllow: 4
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '会社員-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かいしゃいん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Company employee, Office worker',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Company employee, Office worker',
        answers: [
          {
            answer: 'かいしゃいん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かいしゃいん',
        answers: [
          {
            answer: 'Company employee',
            distanceToAllow: 6
          },
          {
            answer: 'Office worker',
            distanceToAllow: 5
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '主婦-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しゅふ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Housewife, Househusband',
      extraInfoList: [
        {
          header: 'Note on Kanji',
          explanation: 'The word for housewife and househusband use the same hiragana but different kanji'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Housewife, Househusband',
        answers: [
          {
            answer: 'しゅふ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しゅふ',
        answers: [
          {
            answer: 'housewife',
            distanceToAllow: 3
          },
          {
            answer: 'househusband',
            distanceToAllow: 4
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '大学院-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'だいがくいん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Graduate school',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Graduate school',
        answers: [
          {
            answer: 'だいがくいん',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'だいがくいん',
        answers: [
          {
            answer: 'graduate school',
            distanceToAllow: 6
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '大学院生-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'だいがくいんせい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Graduate student',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Graduate student',
        answers: [
          {
            answer: 'だいがくいんせい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'だいがくいんせい',
        answers: [
          {
            answer: 'graduate student',
            distanceToAllow: 6
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '弁護士-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'べんごし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Lawyer, Attorney',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Lawyer, Attorney',
        answers: [
          {
            answer: 'べんごし',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'べんごし',
        answers: [
          {
            answer: 'lawyer',
            distanceToAllow: 2
          },
          {
            answer: 'attorney',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
