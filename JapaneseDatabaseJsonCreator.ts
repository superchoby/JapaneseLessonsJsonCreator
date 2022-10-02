import { JapaneseDatabase } from './JapaneseDatabaseToConvert'
import fs from 'fs'
import { 
    getVerbConjugations,
    JapaneseDatabaseType,
} from "./JapaneseDatabaseTypes"

for (const [key, {word, kanaVersion, verbGroup}] of Object.entries(JapaneseDatabase)) {
    JapaneseDatabase[key].conjugations = getVerbConjugations(word, kanaVersion, verbGroup)
}

const sorted = Object.keys(JapaneseDatabase)
  .sort()
  .reduce((accumulator: JapaneseDatabaseType, key) => {
    accumulator[key] = JapaneseDatabase[key];

    return accumulator;
  }, {});

fs.writeFile('./JapaneseDatabase.json', JSON.stringify(JapaneseDatabase, null, 2), err => {
    if (err) {
        console.log(err)
    }
    console.log("Finished Writing the json!")
})
