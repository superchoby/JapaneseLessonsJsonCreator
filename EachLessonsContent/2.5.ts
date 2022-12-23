import {
  ROMAJI_QUESTION_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  LessonsContentDictType,
  VOCABULARY_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  HIRAGANA_CONCEPT_TYPE
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  'た-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'た',
      explanationHeader: 'Romaji',
      explanation: 'ta',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "ta" in "taught"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'た',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ta',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ち-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ち',
      explanationHeader: 'Romaji',
      explanation: 'chi',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "chea" in "cheap"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'chi',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'つ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'つ',
      explanationHeader: 'Romaji',
      explanation: 'tsu',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "tsu" in "jiujitsu"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'つ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'tsu',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'て-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'て',
      explanationHeader: 'Romaji',
      explanation: 'te',

      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "te" in "tell"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'て',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'te',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'と-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'と',
      explanationHeader: 'Romaji',
      explanation: 'to',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like "toe" except with a softer \'t\''
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'と',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'to',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '口-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Mouth',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Mouth',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'くち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'mouth',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '小さい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ちいさい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Small, Little, Tiny',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Small, Little, Tiny',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ちいさい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ちいさい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'small',
            distanceToAllow: 1
          },
          {
            answer: 'little',
            distanceToAllow: 1
          },
          {
            answer: 'tiny',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '高い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'たかい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Expensive, Tall, High',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Expensive, Tall, High',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'たかい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'たかい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'expensive',
            distanceToAllow: 3
          },
          {
            answer: 'tall',
            distanceToAllow: 0
          },
          {
            answer: 'high',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '机-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'つくえ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Desk',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Desk',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'つくえ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'つくえ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'desk',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '手-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'て',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Hand',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Hand',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'て',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'て',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'hand',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '遠い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'とおい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Far',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Far',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'とおい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'とおい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'far',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '近い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ちかい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Close (distance), Near',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Close (distance), Near',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ちかい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ちかい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'close',
            distanceToAllow: 0
          },
          {
            answer: 'close (distance)',
            distanceToAllow: 3
          },
          {
            answer: 'near',
            distanceToAllow: 0
          }
        ]
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
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'とけい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'とけい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'clock',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '明日-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あした',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Tomorrow',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Tomorrow',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'あした',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あした',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'tomorrow',
            distanceToAllow: 2
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
