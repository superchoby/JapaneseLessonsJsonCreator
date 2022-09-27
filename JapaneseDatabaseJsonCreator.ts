import { JapaneseDatabase } from './JapaneseDatabaseToConvert'
import fs from 'fs'

// console.log(JapaneseDatabase)

fs.writeFile('./JapaneseDatabase.json', JSON.stringify(JapaneseDatabase), err => {
    if (err) {
        console.log(err)
    }
    console.log("Finished Writing the json!")
})
