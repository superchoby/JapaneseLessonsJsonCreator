import {
  TRANSLATE_ENGLISH_VOCAB_PROMPT,
  TRANSLATE_JAPANESE_VOCAB_PROMPT,
  VOCABULARY_CONCEPT_TYPE,
  MEANING_EXPLANATIONS_HEADER,
  LessonsContentDictType,
  CONJUGATION_CONCEPT_TYPE,
  CONVERT_WORD_CONJUGATION_PROMPT,
  JapaneseDatabaseType,
  ICHIDAN_GROUP,
  GODAN_GROUP,
  IRREGULAR_VERB_GROUP,
  verbGroups
} from './SharedVariables'

const verbNaiConjugationExplanation = (verb: string, answer: string, verbGroup: verbGroups): JSX.Element | string => {
  if (verbGroup === ICHIDAN_GROUP) {
    return (
      <span>
        Since this is a る verb, we just remove the る and add a ない.&nbsp;
        {verb} -&#62; {verb.slice(0, -1)}<span style={{ textDecoration: 'line-through' }}>{verb.charAt(verb.length - 1)}</span> + ない
      </span>
    )
  } else if (verbGroup === GODAN_GROUP) {
    return (
      <span>
        Since this is a う verb, we grab the last character and
        convert it to an あ sound and add a ない.&nbsp;
        {verb} -&#62; {verb.slice(0, -1)}<span style={{ textDecoration: 'line-through' }}>{verb.charAt(verb.length - 1)}</span>{answer.charAt(answer.length - 3)} + ない
      </span>
    )
  } else if (verb === 'する') {
    return `Since this is a irregular verb, we can just memorize 
    the fact that the ない form of する is しない`
  } else {
    return `Since this is a irregular verb, we can just memorize 
    the fact that the ない form of くる is こない`
  }
}

const politeWayToAddressFamilyMember = (informalVersion: string, meaning: string): {
  extraInfo: {
    header: string
    explanation: string
  }
  acceptableResponse: {
    acceptableResponse: string
    whyNotLookingFor: string
    acceptableResponseIsJapanese: boolean
  }
} => {
  return {
    extraInfo: {
      header: 'Note',
      explanation: `The お is added for politeness. ${informalVersion} has the same meaning as well but not with the same level of politeness`
    },
    acceptableResponse: {
      acceptableResponse: informalVersion,
      whyNotLookingFor: `What is the more polite way to say ${meaning}?`,
      acceptableResponseIsJapanese: true
    }

  }
}

const motherInfo = politeWayToAddressFamilyMember('かあさん', 'mother')
const fatherInfo = politeWayToAddressFamilyMember('とうさん', 'father')
const olderSisterInfo = politeWayToAddressFamilyMember('ねえさん', 'older sister')
const olderBrotherInfo = politeWayToAddressFamilyMember('おにいさん', 'older brother')

const Content = (japaneseDatabase: JapaneseDatabaseType): LessonsContentDictType => {
  return {
    'お母さん-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おかあさん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Mother, Mom',
        extraInfoList: [
          motherInfo.extraInfo
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Mother, Mom',
          answers: [
            {
              answer: 'おかあさん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            motherInfo.acceptableResponse
          ],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おかあさん',
          answers: [
            {
              answer: 'mother',
              distanceToAllow: 2
            },
            {
              answer: 'mom',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'お父さん-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おとうさん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Father, Dad',
        extraInfoList: [
          fatherInfo.extraInfo
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Father, Dad',
          answers: [
            {
              answer: 'おとうさん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            fatherInfo.acceptableResponse
          ],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おとうさん',
          answers: [
            {
              answer: 'father',
              distanceToAllow: 1
            },
            {
              answer: 'dad',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'お姉さん-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おねえさん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Older sister',
        extraInfoList: [
          olderSisterInfo.extraInfo
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Older sister',
          answers: [
            {
              answer: 'おねえさん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            olderSisterInfo.acceptableResponse
          ],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おねえさん',
          answers: [
            {
              answer: 'older sister',
              distanceToAllow: 4
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'お兄さん-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おにいさん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Older brother',
        extraInfoList: [
          olderBrotherInfo.extraInfo
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Older brother',
          answers: [
            {
              answer: 'おにいさん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            olderBrotherInfo.acceptableResponse
          ],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おにいさん',
          answers: [
            {
              answer: 'older brother',
              distanceToAllow: 4
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '妹-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'いもうと',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Younger sister, Little sister',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Younger sister, Little sister',
          answers: [
            {
              answer: 'いもうと',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'いもうと',
          answers: [
            {
              answer: 'younger sister',
              distanceToAllow: 4
            },
            {
              answer: 'little sister',
              distanceToAllow: 4
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '弟-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おとうと',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Younger brother, Little brother',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Younger brother, Little brother',
          answers: [
            {
              answer: 'おとうと',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おとうと',
          answers: [
            {
              answer: 'younger brother',
              distanceToAllow: 4
            },
            {
              answer: 'little brother',
              distanceToAllow: 4
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '姪-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'めい',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Niece',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Niece',
          answers: [
            {
              answer: 'めい',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'めい',
          answers: [
            {
              answer: 'niece',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '甥-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おい',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Nephew',
        extraInfoList: [
          {
            header: 'Same Hiragana',
            explanation: 'This word has the same hiragana as the word "hey" but the kanji are different'
          }
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Nephew',
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
              answer: 'nephew',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            {
              acceptableResponse: 'hey',
              whyNotLookingFor: 'Although they use the same hiragana, in this question we are looking for the word that is related to family',
              acceptableResponseIsJapanese: false
            }
          ],
          answerIsInJapanese: false
        }
      ]
    },
    'いとこ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'いとこ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Cousin',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Cousin',
          answers: [
            {
              answer: 'いとこ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'いとこ',
          answers: [
            {
              answer: 'cousin',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '映画-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'えいが',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Movie',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Movie',
          answers: [
            {
              answer: 'えいが',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'えいが',
          answers: [
            {
              answer: 'movie',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '音楽-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おんがく',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Music',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Music',
          answers: [
            {
              answer: 'おんがく',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おんがく',
          answers: [
            {
              answer: 'music',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'スポーツ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'スポーツ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Sport, Sports',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Sport, Sports',
          answers: [
            {
              answer: 'スポーツ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'スポーツ',
          answers: [
            {
              answer: 'sport',
              distanceToAllow: 2
            },
            {
              answer: 'sports',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'テニス-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'テニス',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Tennis',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Tennis',
          answers: [
            {
              answer: 'テニス',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'テニス',
          answers: [
            {
              answer: 'tennis',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'サッカー-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'サッカー',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Soccer, Football',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Soccer, Football',
          answers: [
            {
              answer: 'サッカー',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'サッカー',
          answers: [
            {
              answer: 'soccer',
              distanceToAllow: 2
            },
            {
              answer: 'football',
              distanceToAllow: 3
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ゴルフ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ゴルフ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Golf',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Golf',
          answers: [
            {
              answer: 'ゴルフ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ゴルフ',
          answers: [
            {
              answer: 'golf',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '野球-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'やきゅう',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Baseball',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Baseball',
          answers: [
            {
              answer: 'やきゅう',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'やきゅう',
          answers: [
            {
              answer: 'baseball',
              distanceToAllow: 3
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'デート-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'デート',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Date',
        extraInfoList: [
          {
            header: 'context',
            explanation: 'This is used in the romantic sense. E.g "Date with my partner"'
          }
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Date',
          answers: [
            {
              answer: 'デート',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'デート',
          answers: [
            {
              answer: 'date',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'テレビ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'テレビ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Television, TV',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Television, TV',
          answers: [
            {
              answer: 'テレビ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'テレビ',
          answers: [
            {
              answer: 'television',
              distanceToAllow: 4
            },
            {
              answer: 'tv',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ビデオ-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ビデオ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Video',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Video',
          answers: [
            {
              answer: 'ビデオ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ビデオ',
          answers: [
            {
              answer: 'video',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '朝ご飯-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'あさごはん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Breakfast',
        extraInfoList: [
          {
            header: 'Formality',
            explanation: 'This is the casual way to say "breakfast"'
          }
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Breakfast',
          answers: [
            {
              answer: 'あさごはん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            {
              acceptableResponse: 'ちょうしょく',
              whyNotLookingFor: 'What is a more casual way to say breakfast?',
              acceptableResponseIsJapanese: true
            }
          ],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'あさごはん',
          answers: [
            {
              answer: 'breakfast',
              distanceToAllow: 3
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    '昼ご飯-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ひるごはん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Lunch',
        extraInfoList: [
          {
            header: 'Formality',
            explanation: 'This is the casual way to say "lunch"'
          }
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Lunch',
          answers: [
            {
              answer: 'ひるごはん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ひるごはん',
          answers: [
            {
              answer: 'lunch',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            {
              acceptableResponse: 'ちゅうしょく',
              whyNotLookingFor: 'What is a more casual way to say breakfast?',
              acceptableResponseIsJapanese: true
            }
          ],
          answerIsInJapanese: false
        }
      ]
    },
    '晩御飯-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ばんごはん',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Dinner',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Dinner',
          answers: [
            {
              answer: 'ばんごはん',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ばんごはん',
          answers: [
            {
              answer: 'dinner',
              distanceToAllow: 1
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'お茶-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'おちゃ',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Tea',
        extraInfoList: [
          {
            header: 'formality',
            explanation: `
            Although the お is for formality and ちゃ is 
            also technically correct, practically speaking, 
            nobody says ちゃ so it would be best to always use おちゃ
            `
          }
        ]
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Tea',
          answers: [
            {
              answer: 'おちゃ',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [
            {
              acceptableResponse: 'ちゃ',
              whyNotLookingFor: 'Although this doesn mean "tea", this way of saying it is very used. What is the more common way?',
              acceptableResponseIsJapanese: true
            }
          ],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'おちゃ',
          answers: [
            {
              answer: 'tea',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'コーヒー-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'コーヒー',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Coffee',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Coffee',
          answers: [
            {
              answer: 'コーヒー',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'コーヒー',
          answers: [
            {
              answer: 'coffee',
              distanceToAllow: 2
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'ハンバーガー-単語': {
      conceptType: VOCABULARY_CONCEPT_TYPE,
      isFastReviewCard: false,
      Learning: {
        concept: 'ハンバーガー',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Hamburger',
        extraInfoList: []
      },
      Questions: [
        {
          questionPrompt: TRANSLATE_ENGLISH_VOCAB_PROMPT,
          question: 'Hamburger',
          answers: [
            {
              answer: 'ハンバーガー',
              distanceToAllow: 0
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: true
        },
        {
          questionPrompt: TRANSLATE_JAPANESE_VOCAB_PROMPT,
          question: 'ハンバーガー',
          answers: [
            {
              answer: 'Hamburger',
              distanceToAllow: 3
            }
          ],
          acceptableResponsesButNotWhatLookingFor: [],
          answerIsInJapanese: false
        }
      ]
    },
    'Converting an う Verb to Casual Present Negative Tense (ない Form)-文法': {
      conceptType: CONJUGATION_CONCEPT_TYPE,
      conjugationType: 'ない',
      Learning: {
        concept: 'Converting an う Verb to Casual Present Negative Tense (ない Form)',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Change the last character of the verb to its あ sound and add ない. This changes the verb to mean to "not" do something',
        extraInfoList: [
          {
            header: 'Example 1',
            explanation:
                        <span key='Example 1'>
                            <ruby>
                                読<rt>よ</rt>む
                            </ruby>
                            -&gt;
                            <ruby>
                                読<rt>よ</rt>まない
                            </ruby> (not read)
                            &nbsp;The む is turned into a ま.
                        </span>
          }
        ]
      },
      Questions: [
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not hear, Not listen (casual)',
          answer: japaneseDatabase['聞く'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['聞く'].kanaVersion, japaneseDatabase['聞く'].conjugations.naiForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not swim (casual)',
          answer: japaneseDatabase['泳ぐ'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['泳ぐ'].kanaVersion, japaneseDatabase['泳ぐ'].conjugations.naiForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not play (casual)',
          answer: japaneseDatabase['遊ぶ'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['遊ぶ'].kanaVersion, japaneseDatabase['遊ぶ'].conjugations.naiForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not drink (casual)',
          answer: japaneseDatabase['飲む'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['飲む'].kanaVersion, japaneseDatabase['飲む'].conjugations.naiForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not buy (casual)',
          answer: japaneseDatabase['買う'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['買う'].kanaVersion, japaneseDatabase['買う'].conjugations.naiForm.kana, GODAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not read (casual)',
          answer: japaneseDatabase['読む'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['読む'].kanaVersion, japaneseDatabase['読む'].conjugations.naiForm.kana, GODAN_GROUP)
        }
      ]
    },
    'Converting an る Verb to Casual Present Negative Tense (ない Form)-文法': {
      conceptType: CONJUGATION_CONCEPT_TYPE,
      conjugationType: 'ない',
      Learning: {
        concept: 'Converting an る Verb to Casual Present Negative Tense (ない Form)',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'Remove the last character of the verb and add ない. This changes the verb to mean to "not" do something.',
        extraInfoList: [
          {
            header: 'Example 1',
            explanation:
                        <span key='Example 1'>
                          <ruby>
                            見<rt>み</rt>る
                          </ruby>
                          -&gt;
                          <ruby>
                            見<rt>み</rt>ない
                          </ruby>
                          &nbsp;The る is removed and a ない is added.
                      </span>
          }
        ]
      },
      Questions: [
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not eat (casual)',
          answer: japaneseDatabase['食べる'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['食べる'].kanaVersion, japaneseDatabase['食べる'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not sleep (casual)',
          answer: japaneseDatabase['寝る'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['寝る'].kanaVersion, japaneseDatabase['寝る'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not see (casual)',
          answer: japaneseDatabase['見る'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['見る'].kanaVersion, japaneseDatabase['見る'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not consider (casual)',
          answer: japaneseDatabase['考える'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['考える'].kanaVersion, japaneseDatabase['考える'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not wake up (casual)',
          answer: japaneseDatabase['起きる'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['起きる'].kanaVersion, japaneseDatabase['起きる'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not leave, Not come out (casual)',
          answer: japaneseDatabase['出る'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['出る'].kanaVersion, japaneseDatabase['出る'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not borrow, Not rent (casual)',
          answer: japaneseDatabase['借りる'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['借りる'].kanaVersion, japaneseDatabase['借りる'].conjugations.naiForm.kana, ICHIDAN_GROUP)
        }
      ]
    },
    'Converting an Irregular Verb to Casual Present Negative Tense (ない Form)-文法': {
      conceptType: CONJUGATION_CONCEPT_TYPE,
      conjugationType: 'ない',
      Learning: {
        concept: 'Converting an Irregular Verb to Casual Present Negative Tense (ない Form)',
        explanationHeader: MEANING_EXPLANATIONS_HEADER,
        explanation: 'There is no pattern, you just memorize the 2 rules in the below examples. This changes the verb to mean to "not" do something',
        extraInfoList: [
          {
            header: 'First Verb',
            explanation: (
              <span>
                  する
                  -&gt;
                  しない
              </span>

            )
          },
          {
            header: 'Second Verb',
            explanation: (
              <span>
                  <ruby>
                    来<rt>く</rt>る
                  </ruby>
                  -&gt;
                  <ruby>
                    来<rt>こ</rt>ない
                  </ruby>
              </span>
            )
          }
        ]
      },
      Questions: [
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not do (casual)',
          answer: japaneseDatabase['する'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['する'].kanaVersion, japaneseDatabase['する'].conjugations.naiForm.kana, IRREGULAR_VERB_GROUP)
        },
        {
          questionPrompt: CONVERT_WORD_CONJUGATION_PROMPT,
          question: 'Not come (casual)',
          answer: japaneseDatabase['来る'].conjugations.naiForm,
          explanationIfUserGetsIncorrect: verbNaiConjugationExplanation(japaneseDatabase['来る'].kanaVersion, japaneseDatabase['来る'].conjugations.naiForm.kana, IRREGULAR_VERB_GROUP)
        }
      ]
    }
  }
}

export default Content
