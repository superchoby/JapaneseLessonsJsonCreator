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
  'な-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'な',
      explanationHeader: 'Romaji',
      explanation: 'na',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "na" in "naughty"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'な',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'na',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'に-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'に',
      explanationHeader: 'Romaji',
      explanation: 'ni',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "nea" in "neat"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'に',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ni',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ぬ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ぬ',
      explanationHeader: 'Romaji',
      explanation: 'nu',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "ne" in "new"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ぬ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'nu',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ね-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ね',
      explanationHeader: 'Romaji',
      explanation: 'ne',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "ne" in "nest"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'ね',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'ne',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'の-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'の',
      explanationHeader: 'Romaji',
      explanation: 'no',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Pronounce it like the "no" in "annoyed"'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'の',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'no',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'お金-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おかね',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Money',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おかね',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'money',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Money',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おかね',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '大人-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'おとな',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Adult',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Adult',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'おとな',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'おとな',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'adult',
            distanceToAllow: 0
          },
          {
            answer: 'grown-up',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '何-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'なに, なん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'What, What is it',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'What',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'なに',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'なに',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'what',
            distanceToAllow: 0
          },
          {
            answer: 'what is it',
            distanceToAllow: 3
          },
          {
            answer: 'what/what is it',
            distanceToAllow: 4
          }
        ]
      }
    ]
  },
  '魚-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'さかな',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fish',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fish',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'さかな',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'さかな',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'fish',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '国-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'くに',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Country',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Country',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'くに',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'くに',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'country',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '楽しい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'たのしい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Fun',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Fun',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'たのしい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'たのしい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'fun',
            distanceToAllow: 0
          },
          {
            answer: 'enjoyable',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '夏-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'なつ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Summer',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Summer',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'なつ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'なつ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'summer',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '犬-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いぬ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Dog',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Dog',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いぬ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いぬ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'dog',
            distanceToAllow: 0
          }
        ]
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
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'にく',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'にく',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'meat',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '昨日-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'きのう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Yesterday',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Yesterday',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'きのう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'きのう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'yesterday',
            distanceToAllow: 0
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
