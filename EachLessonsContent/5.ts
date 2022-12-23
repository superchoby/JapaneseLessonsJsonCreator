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
  'ら-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ら',
      explanationHeader: 'Romaji',
      explanation: 'ra',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Similar to the "rah" sound found in the "ro" in "rotten"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ら',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ra',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'り-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'り',
      explanationHeader: 'Romaji',
      explanation: 'ri',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Similar to the "ri" sound from the "re" in "revenge"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'り',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ri',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'る-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'る',
      explanationHeader: 'Romaji',
      explanation: 'ru',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Similar to the "ru" sound found in the "ro" in "room"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'る',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ru',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'れ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'れ',
      explanationHeader: 'Romaji',
      explanation: 're',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Similar to the "re" in "rental"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'れ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 're',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ろ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ろ',
      explanationHeader: 'Romaji',
      explanation: 'ro',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Similar to the "ro" in "rope"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ろ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ro',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '空-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'そら',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Sky',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Sky',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'そら',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'そら',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'sky',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '見せる-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'みせる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To show (an object)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To show (an object)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'みせる',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'みせる',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'to show',
            distanceToAllow: 2
          },
          {
            answer: 'to show (an object)',
            distanceToAllow: 4
          }
        ]
      }
    ]
  },
  '古い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ふるい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Old',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Old',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ふるい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ふるい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'old',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '車-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くるま',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Car',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Car',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'くるま',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くるま',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'car',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '開ける-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あける',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'To open',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'To open',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'あける',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あける',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'to open',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '広い-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ひろい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Spacious, Wide',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Spacious, Wide',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ひろい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ひろい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'wide',
            distanceToAllow: 1
          },
          {
            answer: 'spacious',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  '色-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いろ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Color',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Color',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いろ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いろ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'color',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '新しい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あたらしい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'New',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'New',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'あたらしい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あたらしい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'new',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '夜-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'よる',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Night',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Night',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'よる',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よる',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'night',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '理由-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'りゆう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Reason',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Reason',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'りゆう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'りゆう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'reason',
            distanceToAllow: 1
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
