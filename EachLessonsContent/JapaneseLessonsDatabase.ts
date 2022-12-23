import LessonOneContent from './1'
import LessonOnePointFiveContent from './1.5'
import LessonTwoContent from './2'
import LessonTwoPoint5Content from './2.5'
import LessonThreeContent from './3'
import LessonThreePointFiveContent from './3.5'
import LessonFourContent from './4'
import LessonFourPointFiveContent from './4.5'
import LessonFiveContent from './5'
import LessonFivePointFiveContent from './5.5'
import LessonSixContent from './6'
import LessonSevenContent from './7'
import LessonEightContent from './8'
import LessonNineContent from './9'
import LessonTenContent from './10'
import LessonElevenContent from './11'
import LessonTwelveContent from './12'
import LessonThirteenContent from './13'
import LessonFourteenContent from './14'
import LessonFourteenPointFiveContent from './14.5'
import LessonFifteenContent from './15'
import getLessonSixteenContent from './16'
import LessonSeventeenContent from './17'
import getLessonEighteenContent from './18'
import { LessonsContentDictType, JapaneseDatabaseType } from './SharedVariables'
import { toRomaji } from 'wanakana'

export const JapaneseLessonsDatabase = (JapaneseDatabase: JapaneseDatabaseType): LessonsContentDictType => {
  const LessonsDatabase: LessonsContentDictType = {
    ...LessonOneContent,
    ...LessonOnePointFiveContent,
    ...LessonTwoContent,
    ...LessonTwoPoint5Content,
    ...LessonThreeContent,
    ...LessonThreePointFiveContent,
    ...LessonFourContent,
    ...LessonFourPointFiveContent,
    ...LessonFiveContent,
    ...LessonFivePointFiveContent,
    ...LessonSixContent,
    ...LessonSevenContent,
    ...LessonEightContent,
    ...LessonNineContent,
    ...LessonTenContent,
    ...LessonElevenContent,
    ...LessonTwelveContent,
    ...LessonThirteenContent,
    ...LessonFourteenContent,
    ...LessonFourteenPointFiveContent,
    ...LessonFifteenContent,
    ...getLessonSixteenContent(JapaneseDatabase),
    ...LessonSeventeenContent,
    ...getLessonEighteenContent(JapaneseDatabase)
  }

  const isJapanese = (char: String): boolean => {
    return char >= '\u3040' && char <= '\u9faf'
  }

  for (const object of Object.values(LessonsDatabase)) {
    const {
      conceptType,
      Questions
    } = object
    if (conceptType === 'Vocabulary') {
      for (const question of Questions) {
        const {
          question: questionText,
          acceptableResponsesButNotWhatLookingFor
        } = question
        if (typeof questionText === 'string' && isJapanese(questionText[0]) && questionText !== 'さけ') {
          acceptableResponsesButNotWhatLookingFor.push({
            acceptableResponse: toRomaji(questionText),
            whyNotLookingFor: "Please enter the vocabulary's meaning",
            acceptableResponseIsJapanese: false
          })
          break
        }
      }
    }
  }

  return LessonsDatabase
}
