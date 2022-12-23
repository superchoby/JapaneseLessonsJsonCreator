import {
  VOCABULARY_CONCEPT_TYPE,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  '一-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'One',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'one',
            distanceToAllow: 0
          },
          {
            answer: '1',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'One',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いち',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '二-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'に',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Two',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Two',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'に',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'に',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'two',
            distanceToAllow: 0
          },
          {
            answer: '2',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '三-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'さん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Three',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Three',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'さん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'three',
            distanceToAllow: 1
          },
          {
            answer: '3',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '四-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'よん, し',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Four',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Four',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'よん',
            distanceToAllow: 0
          },
          {
            answer: 'し',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よん, し',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'four',
            distanceToAllow: 0
          },
          {
            answer: '4',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '五-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ご',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Five',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Five',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ご',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ご',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'five',
            distanceToAllow: 0
          },
          {
            answer: '5',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '六-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ろく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Six',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Six',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ろく',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ろく',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'six',
            distanceToAllow: 0
          },
          {
            answer: '6',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '七-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'なな, しち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Seven',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Seven',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'なな',
            distanceToAllow: 0
          },
          {
            answer: 'しち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'なな, しち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'seven',
            distanceToAllow: 1
          },
          {
            answer: '7',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '八-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'はち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Eight',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Eight',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'はち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'eight',
            distanceToAllow: 0
          },
          {
            answer: '8',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '九-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'きゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Nine',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Nine',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'きゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'nine',
            distanceToAllow: 0
          },
          {
            answer: '9',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Ten',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Ten',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ten',
            distanceToAllow: 0
          },
          {
            answer: '10',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十一-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅういち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Eleven',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Eleven',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅういち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅういち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'eleven',
            distanceToAllow: 1
          },
          {
            answer: '11',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十二-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうに',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Twelve',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Twelve',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうに',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうに',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'twelve',
            distanceToAllow: 1
          },
          {
            answer: '12',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十三-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうさん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thirteen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thirteen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうさん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうさん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'thirteen',
            distanceToAllow: 2
          },
          {
            answer: '13',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十四-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうよん, じゅうし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fourteen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fourteen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうよん',
            distanceToAllow: 0
          },
          {
            answer: 'じゅうし',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうよん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'fourteen',
            distanceToAllow: 2
          },
          {
            answer: '14',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十五-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうご',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fifteen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fifteen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうご',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうご',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'fifteen',
            distanceToAllow: 2
          },
          {
            answer: '15',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十六-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうろく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Sixteen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Sixteen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうろく',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうろく',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'sixteen',
            distanceToAllow: 2
          },
          {
            answer: '16',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十七-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうなな, じゅうしち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Seventeen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Seventeen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうなな',
            distanceToAllow: 0
          },
          {
            answer: 'じゅうしち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうなな',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'seventeen',
            distanceToAllow: 2
          },
          {
            answer: '17',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十八-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうはち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Eighteen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Eighteen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうはち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうはち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'eighteen',
            distanceToAllow: 2
          },
          {
            answer: '18',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '十九-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'じゅうきゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Nineteen',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Nineteen',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'じゅうきゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'じゅうきゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'nineteen',
            distanceToAllow: 2
          },
          {
            answer: '19',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '二十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'にじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Twenty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Twenty',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'にじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'にじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'twenty',
            distanceToAllow: 1
          },
          {
            answer: '20',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '三十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'さんじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thirty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thirty',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'さんじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さんじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'thirty',
            distanceToAllow: 1
          },
          {
            answer: '30',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '四十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'よんじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Forty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Forty',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'よんじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よんじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'forty',
            distanceToAllow: 1
          },
          {
            answer: '40',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '五十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ごじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fifty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fifty',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ごじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'fifty',
            distanceToAllow: 1
          },
          {
            answer: '50',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '六十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ろくじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Sixty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Sixty',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ろくじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ろくじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'sixty',
            distanceToAllow: 1
          },
          {
            answer: '60',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '七十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ななじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Seventy',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Seventy',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ななじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ななじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'seventy',
            distanceToAllow: 1
          },
          {
            answer: '70',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '八十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'はちじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Eighty',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Eighty',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'はちじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はちじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'eighty',
            distanceToAllow: 1
          },
          {
            answer: '80',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '九十-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'きゅうじゅう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Ninety',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Ninety',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'きゅうじゅう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きゅうじゅう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ninety',
            distanceToAllow: 1
          },
          {
            answer: '90',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '百-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ひゃく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Hundred',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Hundred',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ひゃく',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ひゃく',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'hundred',
            distanceToAllow: 2
          },
          {
            answer: '100',
            distanceToAllow: 0
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
