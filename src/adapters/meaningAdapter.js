const wordAdapter = (dictionaryData) => {
  try {
    return dictionaryData[0].word;
  } catch (err) {
    return '';
  }
};

const partOfSpeechAdapter = (dictionaryData) => {
  try {
    return dictionaryData[0].meanings[0].partOfSpeech;
  } catch (err) {
    return;
  }
};

const definitionAdapter = (dictionaryData) => {
  try {
    const definitonsData = dictionaryData[0].meanings[0].definitions;

    return definitonsData.map((element) => element.definition);
  } catch (err) {
    return [];
  }
};

const synonymsAdapter = (dictionaryData) => {
  try {
    const synonymsData = dictionaryData[0].meanings.find(
      (element) => element.synonyms.length !== 0
    );

    return synonymsData.synonyms;
  } catch (err) {
    return [];
  }
};

const antonymsAdapter = (dictionaryData) => {
  try {
    const antonymsData = dictionaryData[0].meanings.find(
      (element) => element.antonyms.length != 0
    );

    return antonymsData.antonyms;
  } catch (err) {
    return [];
  }
};

export {
  definitionAdapter,
  synonymsAdapter,
  antonymsAdapter,
  wordAdapter,
  partOfSpeechAdapter,
};
