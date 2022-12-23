import {
  ROMAJI_QUESTION_PROMPT,
  EXPLANATION_EXPLANATIONS_HEADER,
  HIRAGANA_CONCEPT_TYPE,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  LessonsContentDictType
} from './SharedVariables'

const THIS_LESSONS_CONTENT: LessonsContentDictType = {
  'ゃ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ゃ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Small や',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'きゃ -> kya, にゃ -> nya, ひゃ - hya, ぴゃ - pya'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'みゃ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'mya',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'りゃ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'rya',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ゅ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ゅ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Small ゆ',
      extraInfoList: [
        {
          header: 'Examples:',
          explanation: 'きゅ -> kyu, にゅ -> nyu, ひゅ - hyu, ぴゅ - pyu'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'みゅん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'myun',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'しゅ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'shu',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'ょ-ひらがな': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'ょ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Small よ',
      extraInfoList: [
        {
          header: 'Examples',
          explanation: 'きょ -> kyo, にょ -> nyo, ひょ - hyo, ぴょ - pyo'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'きょ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'kyo',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: ROMAJI_QUESTION_PROMPT,
        question: 'びょ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'byo',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'っ-単語': {
    conceptType: HIRAGANA_CONCEPT_TYPE,
    isFastReviewCard: true,
    Learning: {
      concept: 'っ',
      explanationHeader: EXPLANATION_EXPLANATIONS_HEADER,
      explanation: 'Small つ',
      extraInfoList: [
        {
          header: 'Pronunciation Tip',
          explanation: 'Emphasis the sound that comes after the small つ'
        },
        {
          header: 'Examples',
          explanation: 'かっぱ -> kappa, はって -> hatte, ぶっけ -> kakke'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'らっく',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'rakku',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'だっき',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'dakki',
            distanceToAllow: 0
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
