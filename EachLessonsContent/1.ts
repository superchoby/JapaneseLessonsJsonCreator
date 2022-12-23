import {
  ROMAJI_QUESTION_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  HIRAGANA_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  VOCABULARY_CONCEPT_TYPE,
  LessonsContentDictType
} from './SharedVariables'

export const Content: LessonsContentDictType = {
  'あ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'あ',
      explanationHeader: 'Romaji',
      explanation: 'a',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "ah" in "ah, I got it"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'あ',
        answers: [{
          answer: 'a',
          distanceToAllow: 0
        }],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'い-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'い',
      explanationHeader: 'Romaji',
      explanation: 'i',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Just like the letter "e"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'い',
        answers: [{
          answer: 'i',
          distanceToAllow: 0
        }],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]

  },
  'う-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'う',
      explanationHeader: 'Romaji',
      explanation: 'u',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "u" in "Uber" the company'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'う',
        answers: [{
          answer: 'u',
          distanceToAllow: 0
        }],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'え-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'え',
      explanationHeader: 'Romaji',
      explanation: 'e',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: "Pronounce it like the 'e' in \"egg\""
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'え',
        answers: [{
          answer: 'e',
          distanceToAllow: 0
        }],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]

  },
  'お-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'お',
      explanationHeader: 'Romaji',
      explanation: 'o',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "o" in "old"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'お',
        answers: [{
          answer: 'o',
          distanceToAllow: 0
        }],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]

  },
  '青-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あお',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Blue',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Blue',
        answers: [
          {
            answer: 'あお',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あお',
        answers: [
          {
            answer: 'blue',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '愛-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'あい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Love',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Love',
        answers: [
          {
            answer: 'あい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'あい',
        answers: [
          {
            answer: 'love',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '上-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'うえ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Above',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Above',
        answers: [
          {
            answer: 'うえ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'うえ',
        answers: [
          {
            answer: 'above',
            distanceToAllow: 1
          },
          {
            answer: 'on top',
            distanceToAllow: 2
          },
          {
            answer: 'on top of',
            distanceToAllow: 2
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'いい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good',
        answers: [
          {
            answer: 'いい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いい',
        answers: [
          {
            answer: 'good',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  '王-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'King',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'King',
        answers: [
          {
            answer: 'おう',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おう',
        answers: [
          {
            answer: 'king',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'follow',
            acceptableResponseIsJapanese: false,
            whyNotLookingFor: "おう does have this meaning but we are looking for another. (Hint: it's a noun)"
          },
          {
            acceptableResponse: 'to follow',
            acceptableResponseIsJapanese: false,
            whyNotLookingFor: "おう does have this meaning but we are looking for another. (Hint: it's a noun)"
          }
        ],
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
            distanceToAllow: 1
          },
          {
            answer: 'say',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'いいえ-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いいえ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'No (formal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いいえ',
        answers: [
          {
            answer: 'no',
            distanceToAllow: 1
          },
          {
            answer: 'no formal',
            distanceToAllow: 3
          },
          {
            answer: 'no (formal)',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'No (formal)',
        answers: [
          {
            answer: 'いいえ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  '家-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いえ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'House',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いえ',
        answers: [
          {
            answer: 'home',
            distanceToAllow: 0
          },
          {
            answer: 'house',
            distanceToAllow: 1
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'House/Home',
        answers: [
          {
            answer: 'いえ',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      }
    ]
  },
  '絵-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'え',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Painting',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Drawing/Painting',
        answers: [
          {
            answer: 'え',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'え',
        answers: [
          {
            answer: 'drawing',
            distanceToAllow: 3
          },
          {
            answer: 'painting',
            distanceToAllow: 3
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false
      }
    ]
  },
  'おい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Hey',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Hey',
        answers: [
          {
            answer: 'おい',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おい',
        answers: [
          {
            answer: 'hey',
            distanceToAllow: 0
          }
        ],
        acceptableResponsesButNotWhatLookingFor: [
          {
            acceptableResponse: 'nephew',
            whyNotLookingFor: 'Although they use the same hiragana, in this question we are looking for the word that is an expression',
            acceptableResponseIsJapanese: false
          }
        ],
        answerIsInJapanese: false
      }
    ]
  }
}

export default Content
