import * as fs from 'fs'
import { JapaneseLessonsDatabase } from './EachLessonsContent/JapaneseLessonsDatabase'
import JapaneseVocabDatabase from './JapaneseVocabDatabase'

const japaneseLessonsJson = JSON.stringify(JapaneseLessonsDatabase(JapaneseVocabDatabase), (key, value) => {
    return typeof value === 'symbol' ? `$$Symbol:${Symbol.keyFor(value) ?? ''}` : value
})

fs.writeFile('./JapaneseLessonsDatabase.json', japaneseLessonsJson, err => {
    if (err) {
        console.log(err)
    }
    console.log("Finished Writing the json!")
})
