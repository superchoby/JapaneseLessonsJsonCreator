import {
  VOCABULARY_CONCEPT_TYPE,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  'おはよう-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おはよう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good Morning (casual)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good Morning (casual)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おはよう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おはよう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'good morning',
            distanceToAllow: 3
          },
          {
            answer: 'good morning (casual)',
            distanceToAllow: 5
          }
        ]
      }
    ]
  },
  'おはようございます-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おはようございます',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good Morning (formal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good Morning (formal)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おはようございます',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おはようございます',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'good morning',
            distanceToAllow: 3
          },
          {
            answer: 'Good Morning (formal)',
            distanceToAllow: 5
          }
        ]
      }
    ]
  },
  'こんにちは-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'こんにちは',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good Afternoon',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'The は in this word is actually pronounced as わ'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good Afternoon',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'こんにちは',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'こんにちは',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'good afternoon',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  'こんばんは-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'こんばんは',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good Evening',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good Evening',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'こんばんは',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'こんばんは',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'Good Evening',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  'さようなら-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'さようなら',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Goodbye',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Goodbye',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'さようなら',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さようなら',
        acceptableResponsesButNotWhatLookingFor: [{
          acceptableResponse: 'bye',
          whyNotLookingFor: "さようなら has a stronger meaning implying that you won't see them again for a while and \"bye\" is a bit too light",
          acceptableResponseIsJapanese: false
        }],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'goodbye',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  'おやすみなさい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おやすみなさい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good Night (formal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good Night (formal)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おやすみなさい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おやすみなさい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'good night',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  'ありがとう-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ありがとう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thank You (casual)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thank You (casual)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ありがとう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ありがとう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'Thank You',
            distanceToAllow: 2
          },
          {
            answer: 'Thank You (casual)',
            distanceToAllow: 5
          }
        ]
      }
    ]
  },
  'ありがとうございます-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ありがとうございます',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thank You (formal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thank You (formal)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ありがとうございます',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ありがとうございます',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'thank you',
            distanceToAllow: 3
          },
          {
            answer: 'thank you (formal)',
            distanceToAllow: 5
          }
        ]
      }
    ]
  },
  'すみません-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'すみません',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Excuse Me, Pardon Me',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Excuse Me, Pardon Me',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'すみません',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'すみません',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'excuse me',
            distanceToAllow: 3
          },
          {
            answer: 'pardon me',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  'いってきます-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いってきます',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'See you later (When leaving home)',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Only say this when leaving the house for work, school etc.'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'See you later (When leaving home)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いってきます',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いってきます',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'see you later',
            distanceToAllow: 4
          },
          {
            answer: 'see you later (when leaving home)',
            distanceToAllow: 8
          }
        ]
      }
    ]
  },
  'いってらっしゃい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いってらっしゃい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Have a Good Day',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Only say in response to いってきます'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Have a Good Day',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いってらっしゃい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いってらっしゃい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'have a good day',
            distanceToAllow: 6
          }
        ]
      }
    ]
  },
  'ただいま-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ただいま',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: "I'm home, I'm back",
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Only say when coming back home from school, work, etc.'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: "I'm home, I'm back",
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ただいま',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ただいま',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: "i'm home",
            distanceToAllow: 3
          },
          {
            answer: "i'm back",
            distanceToAllow: 3
          },
          {
            answer: 'im home',
            distanceToAllow: 2
          },
          {
            answer: 'im back',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  'お帰りなさい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おかえりなさい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Welcome Home',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Only say when a family member has returned home from school or work'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Welcome Home',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おかえりなさい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おかえりなさい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'welcome home',
            distanceToAllow: 5
          }
        ]
      }
    ]
  },
  'いただきます-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いただきます',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thank you for the meal (Before Eating)',
      extraInfoList: [
        {
          header: 'Culture Note',
          explanation: `This is said to express gratitude
                    towards the sacrifices it took for you to receive
                    your food. For example, the sacrifice of an animal or plants life.`
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thank you for the meal (Before Eating)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いただきます',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いただきます',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'thank you for the meal',
            distanceToAllow: 6
          },
          {
            answer: 'thank you for the meal (before eating)',
            distanceToAllow: 10
          }
        ]
      }
    ]
  },
  'ごちそうさまでした-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ごちそうさまでした',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Thank you for the meal (After Eating)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Thank you for the meal (After Eating)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ごちそうさまでした',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごちそうさまでした',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'thank you for the meal',
            distanceToAllow: 6
          },
          {
            answer: 'thank you for the meal (after eating)',
            distanceToAllow: 9
          }
        ]
      }
    ]
  },
  'はじめまして-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'はじめまして',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'I am glad to meet you (formal)​',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Often the very first word you say when you meet someone in a formal situation'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'I am glad to meet you​ (formal)​',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'はじめまして',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はじめまして',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'i am glad to meet you​',
            distanceToAllow: 8
          },
          {
            answer: 'I am glad to meet you​ (formal)',
            distanceToAllow: 11
          }
        ]
      }
    ]
  },
  'よろしくおねがいします-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'よろしくおねがいします',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'I look forward to working with you (formal)​',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Often the second word you say when you meet someone in a formal situation after はじめまして'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'I look forward to working with you (formal)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'よろしくおねがいします',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'よろしくおねがいします',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'i look forward to working with you',
            distanceToAllow: 9
          },
          {
            answer: 'i look forward to working with you (formal)',
            distanceToAllow: 11
          }
        ]
      }
    ]
  },
  'はい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'はい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Yes (formal)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Yes (formal)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'はい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'はい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'yes',
            distanceToAllow: 0
          },
          {
            answer: 'yes (formal)',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  'うん-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'うん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Yes (casual)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Yes (casual)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'うん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'うん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'yes',
            distanceToAllow: 0
          },
          {
            answer: 'yes (casual)',
            distanceToAllow: 3
          }
        ]
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
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'No (formal)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いいえ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いいえ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'no',
            distanceToAllow: 0
          },
          {
            answer: 'no (formal)',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  'ううん-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ううん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'No (casual)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'No (casual)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ううん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ううん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'no',
            distanceToAllow: 0
          },
          {
            answer: 'no (casual)',
            distanceToAllow: 3
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
