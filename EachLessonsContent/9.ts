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
  '会社-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かいしゃ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Company',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Company',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'かいしゃ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かいしゃ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'company',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '学校-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'がっこう',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'School',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'School',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'がっこう',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'がっこう',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'school',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  'かっこいい-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'かっこいい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Good Looking, Cool',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Good Looking, Cool',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'かっこいい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'かっこいい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'good looking',
            distanceToAllow: 3
          },
          {
            answer: 'cool',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '英語-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'えいご',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'English',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'English',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'えいご',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'えいご',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'english',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '医者-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'いしゃ',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Doctor',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Doctor',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'いしゃ',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'いしゃ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'doctor',
            distanceToAllow: 2
          }
        ]
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
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'としょかん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'としょかん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'library',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '高校生-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'こうこうせい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'High School Student',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'High School Student',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'こうこうせい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'こうこうせい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'high school student',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  '宿題-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しゅくだい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Homework',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Homework',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'しゅくだい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しゅくだい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'homework',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '両親-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'りょうしん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Parents (both)',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Parents (both)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'りょうしん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'りょうしん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'parents',
            distanceToAllow: 2
          },
          {
            answer: 'parents (both)',
            distanceToAllow: 4
          }
        ]
      }
    ]
  },
  '午前-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ごぜん',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'a.m. (time)',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Opposite from English, you say ごぜん before the actual time'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'a.m. (time)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ごぜん',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごぜん',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'a.m.',
            distanceToAllow: 0
          },
          {
            answer: 'am',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '午後-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ごご',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'p.m. (time)',
      extraInfoList: [
        {
          header: 'Note',
          explanation: 'Opposite from English, you say ごご before the actual time'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'p.m. (time)',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ごご',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ごご',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'p.m.',
            distanceToAllow: 0
          },
          {
            answer: 'pm',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '友達-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'ともだち',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Friend',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Friend',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'ともだち',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'ともだち',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'friend',
            distanceToAllow: 1
          }
        ]
      }
    ]
  },
  '仕事-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'しごと',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Job',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Job',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'しごと',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しごと',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'job',
            distanceToAllow: 0
          }
        ]
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
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Housewife, Househusband',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'しゅふ',
            distanceToAllow: 2
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'しゅふ',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'housewife',
            distanceToAllow: 3
          },
          {
            answer: 'househusband',
            distanceToAllow: 4
          }
        ]
      }
    ]
  },
  'そうです-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'そうです',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'That is Right, That is So',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'That is Right, That is So',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'そうです',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'そうです',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'that is right',
            distanceToAllow: 3
          },
          {
            answer: 'that is so',
            distanceToAllow: 3
          }
        ]
      }
    ]
  },
  '大学-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'だいがく',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'University, College',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'University, College',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'だいがく',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'だいがく',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'university',
            distanceToAllow: 3
          },
          {
            answer: 'college',
            distanceToAllow: 2
          }
        ]
      }
    ]
  },
  '私-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'わたし',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'I, Me',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'I, Me',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'わたし',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'わたし',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'i',
            distanceToAllow: 0
          },
          {
            answer: 'me',
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  '学生-単語': {
    conceptType: VOCABULARY_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'がくせい',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'School Student',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'School Student',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: true,
        answers: [
          {
            answer: 'がくせい',
            distanceToAllow: 0
          }
        ]
      },
      {
        questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
        question: 'がくせい',
        acceptableResponsesButNotWhatLookingFor: [],
        answerIsInJapanese: false,
        answers: [
          {
            answer: 'school student',
            distanceToAllow: 4
          },
          {
            answer: 'student',
            distanceToAllow: 2
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
      explanation: 'Teacher',
      extraInfoList: []
    },
    Questions: [
      {
        questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
        question: 'Teacher',
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
            distanceToAllow: 0
          }
        ]
      }
    ]
  },
  'X は Y です-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'X は Y です',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'は marks the subject of the sentence and です is the formal way to end a statement.',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'ともだちはいしゃです。(My friend is a doctor) -> ともだち is the subject and the statement is the いしゃです part'
        },
        {
          header: 'Example 2',
          explanation: 'いぬはかわいいです。(Dogs are cute) -> いぬ is the subject and the statement is the かわいいです part'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['わたし', '', 'がくせい', '', '。'],
        answer: ['は', 'です'],
        explanationIfUserGetsIncorrect: `
                The は particle is needed to indicate that わたし is
                the subject of the sentence and です is needed
                to complete the statement of being a がくせい
                in a formal sentence.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'I '
          },
          {
            partToTranslate: true,
            text: 'am'
          },
          {
            partToTranslate: false,
            text: ' a school student. (Formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['ともだち', '', 'しゅふ', '', '。'],
        answer: ['は', 'です'],
        explanationIfUserGetsIncorrect: `
                The は particle is needed to indicate that ともだち is
                the subject of the sentence and です is needed
                to complete the statement of being a しゅふ
                in a formal sentence.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'My friend '
          },
          {
            partToTranslate: true,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' a housewife. (Formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['さかな', '', 'おいしい', '', '。'],
        answer: ['は', 'です'],
        explanationIfUserGetsIncorrect: `
                The は particle is needed to indicate that さかな is
                the subject of the sentence and です is needed
                to complete the statement of being おいしい
                in a formal sentence.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'Fish '
          },
          {
            partToTranslate: true,
            text: 'is'
          },
          {
            partToTranslate: false,
            text: ' delicious. (Formal)'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['りょうしん', '', 'せんせい', '', '。'],
        answer: ['は', 'です'],
        explanationIfUserGetsIncorrect: `
                The は particle is needed to indicate that りょうしん is
                the subject of the sentence and です is needed
                to complete the statement of being a せんせい
                in a formal sentence.
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'My parents '
          },
          {
            partToTranslate: true,
            text: 'are'
          },
          {
            partToTranslate: false,
            text: ' teachers. (Formal)'
          }
        ]
      }
    ]
  },
  'の Particle Possessive-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'の Particle Indicating Possession',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: `
            One use of the の particle is to
            indicate that one entity owns another
            in the format XのY. Can sometimes be
            interchangeable with the の particle to
            connect nouns`,
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: "にほんのやま (Japan's mountains) -> Japan possesses the mountains"
        },
        {
          header: 'Example 2',
          explanation: "だいがくのとしょかんのほん (The college's library's book) -> The college possesses the library which possesses the book"
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['そら', '', 'いろ'],
        answer: ['の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to express the concept of a そら possessed by the いろ
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The sky '
          },
          {
            partToTranslate: true,
            text: "'s"
          },
          {
            partToTranslate: false,
            text: ' color'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['わたし', '', 'ともだち', '', 'いしゃ'],
        answer: ['の', 'の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to express the idea of not just anybodies friend but your friend and
                that you are not just talking about any doctor but your friend's doctor
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'My'
          },
          {
            partToTranslate: false,
            text: ' friend '
          },
          {
            partToTranslate: true,
            text: "'s"
          },
          {
            partToTranslate: false,
            text: ' doctor'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['わたし', '', 'いぬ'],
        answer: ['の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to express the concept of a いぬ possessed by you (わたし)
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'My '
          },
          {
            partToTranslate: false,
            text: 'dog'
          }
        ]
      }
    ]
  },
  'の Particle Connecting Nouns-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'の Particle For Connecting Nouns',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: `
            One use of the の particle is to connect
            two nouns into one. Can even be used to
            connect more if you use more の particles.
            Can sometimes be interchangeable with the
            の particle for possession
            `,
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'いまのわたし (The current me)'
        },
        {
          header: 'Example 2',
          // grammar not weird but english sentence is whack
          explanation: 'にほんのふねのみせ (The Japanese boat shop)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['がっこう', '', 'せいと'],
        answer: ['の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to connect the nouns "school" and "student" to create the noun "school student"
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The'
          },
          {
            partToTranslate: true,
            text: ' school student'
          }
        ]
        // englishTranslation: "The school student",
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['ふゆ', '', 'ほし'],
        answer: ['の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to connect the nouns "winter" and "star" to create the noun "winter star"
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The '
          },
          {
            partToTranslate: true,
            text: 'winter star'
          }
        ]
        // englishTranslation: "The winter star",
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['くるま', '', 'かいしゃ'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to connect the nouns "car" and "company" to create the noun "car company"
                `,
        answer: ['の'],
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The'
          },
          {
            partToTranslate: true,
            text: ' car company'
          }
        ]
        // englishTranslation: "The summer clothes",
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['とけい', '', 'かいしゃ'],
        answer: ['の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to connect the nouns "clock" and "company" to create the noun "clock company"
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The'
          },
          {
            partToTranslate: true,
            text: ' clock company'
          }
        ]
        // englishTranslation: "The clock company",
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['だいがく', '', 'えいご', '', 'せんせい'],
        answer: ['の', 'の'],
        explanationIfUserGetsIncorrect: `
                The の particle is needed to connect the nouns "English" and "teacher"
                to create the noun "English teacher" and then you connect
                this noun to "University" with the の particle to make the noun
                "university English teacher"
                `,
        englishTranslation: [
          {
            partToTranslate: false,
            text: 'The'
          },
          {
            partToTranslate: true,
            text: ' university English teacher'
          }
        ]
      }
    ]
  },
  'か Question Particle-文法': {
    conceptType: GRAMMAR_CONCEPT_TYPE,
    isFastReviewCard: false,
    Learning: {
      concept: 'か Question Particle',
      explanationHeader: MEANING_EXPLANATIONS_HEADER,
      explanation: 'Add it to the end of the sentence to make it a question',
      extraInfoList: [
        {
          header: 'Example 1',
          explanation: 'しゅくだいはなんですか？ (What is the homework?)'
        },
        {
          header: 'Example 2',
          explanation: 'へやはさむいですか？ (Is the room cold?)'
        }
      ]
    },
    Questions: [
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['そうです', '', '？'],
        answer: ['か'],
        explanationIfUserGetsIncorrect: `
                The か particle is needed after the です to turn the statement, "That is so"
                into the question "Is that so?"
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Is'
          },
          {
            partToTranslate: false,
            text: ' that so'
          },
          {
            partToTranslate: true,
            text: '?'
          }
        ]
        // englishTranslation: "Is that so?",
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['こうこうせいです', '', '？'],
        answer: ['か'],
        explanationIfUserGetsIncorrect: `
                The か particle is needed after the です to turn the statement, "You are a highschool student"
                into the question "Are you a highschool student?"
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Are'
          },
          {
            partToTranslate: false,
            text: ' you a high school student'
          },
          {
            partToTranslate: true,
            text: '?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['くるまはふつうです', '', '？'],
        answer: ['か'],
        explanationIfUserGetsIncorrect: `
                The か particle is needed after the です to turn the statement, "The car is normal."
                into the question "Is the car normal?"
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Is'
          },
          {
            partToTranslate: false,
            text: ' the car normal'
          },
          {
            partToTranslate: true,
            text: '?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['りゆうはなんです', '', '？'],
        answer: ['か'],
        explanationIfUserGetsIncorrect: `
                As なん means "what", this generally implies
                that the sentence is a question and such,
                the か particle should be added after the です
                to properly end a formal question in Japanese.
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'What'
          },
          {
            partToTranslate: false,
            text: ' is the reason'
          },
          {
            partToTranslate: true,
            text: '?'
          }
        ]
      },
      {
        questionPrompt: GRAMMAR_QUESTION_PROMPT,
        question: ['にほんはおおきいです', '', '？'],
        answer: ['か'],
        explanationIfUserGetsIncorrect: `
                The か particle is needed after the です to turn the statement, "Japan is big."
                into the question "Is Japan big?"
                `,
        englishTranslation: [
          {
            partToTranslate: true,
            text: 'Is'
          },
          {
            partToTranslate: false,
            text: ' Japan big'
          },
          {
            partToTranslate: true,
            text: '?'
          }
        ]
      }
    ]
  }
}

export default THIS_LESSONS_CONTENT
