import {
  ROMAJI_QUESTION_PROMPT,
  VOCABULARY_CONCEPT_TYPE,
  HIRAGANA_CONCEPT_TYPE,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  'や-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'や',
      explanationHeader: 'Romaji',
      explanation: 'ya',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "ya" sound in "yacht"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'や',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ya',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ゆ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ゆ',
      explanationHeader: 'Romaji',
      explanation: 'yu',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the word "you"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ゆ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'yu',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'よ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'よ',
      explanationHeader: 'Romaji',
      explanation: 'yo',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "Yo" in "Yo what is up" with a softer "y" sound'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'よ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'yo',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'わ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'わ',
      explanationHeader: 'Romaji',
      explanation: 'wa',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Same as the "wa" in "want"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'わ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'wa',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'を-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'を',
      explanationHeader: 'Romaji',
      explanation: 'wo',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounced the same as the Hiragana お'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'を',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'wo',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ん-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ん',
      explanationHeader: 'Romaji',
      explanation: 'n',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounced like "n" part of "no"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'n',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '安い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'やすい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Cheap',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Cheap',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'やすい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'やすい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'cheap',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '山-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'やま',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Mountain',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Mountain',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'やま',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'やま',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'mountain',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '強い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'つよい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Strong',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Strong',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'つよい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'つよい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'strong',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '速い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'はやい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fast',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fast',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'はやい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はやい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'fast',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '冬-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ふゆ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Winter',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Winter',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ふゆ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ふゆ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'winter',
            distanceToAllow: 1
          }
        ]
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
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'やさい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'やさい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'vegetable',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '部屋-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'へや',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Room',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Room',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'へや',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'へや',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'room',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '先生-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'せんせい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Teacher, Instructor',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Teacher, Instructor',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'せんせい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'せんせい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'teacher',
            distanceToAllow: 2
          },
          {
            answer: 'instructor',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  '天気-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'てんき',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Weather',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Weather',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'てんき',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'てんき',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'weather',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '悪い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'わるい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Bad',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Bad',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'わるい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'わるい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'bad',
            distanceToAllow: 0
          }
        ]
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
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ほん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ほん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'book',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '可愛い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かわいい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Cute',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Cute',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'かわいい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かわいい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'cute',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '変-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'へん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Weird',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Weird',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'へん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'へん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'weird',
            distanceToAllow: 1
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
