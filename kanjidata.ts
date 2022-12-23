fetch('https://raw.githubusercontent.com/davidluzgouveia/kanji-data/master/kanji.json')
  .then((response) => response.json())
  .then((data) => {
    const kanjiData = data
    const kanjiList = Object.keys(kanjiData)
    console.log(kanjiList.sort((a, b)  => (
        kanjiData[a].strokes - kanjiData[b].strokes
    )))
  });

