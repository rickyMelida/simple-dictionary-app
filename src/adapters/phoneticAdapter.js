const audioAdapter = (dictionaryData) => {
  try {
    const audioData = dictionaryData[0].phonetics.find(
      (ele) => ele.audio != ''
    );

    return audioData.audio;
  } catch (err) {
    return [];
  }
};

const phoneticAdapter = (dictionaryData) => {
  try {
    const phoneticData = dictionaryData[0].phonetics.find(
      (ele) => ele.audio != ''
    );

    return phoneticData.text;
  } catch (err) {
    return [];
  }
};

export { audioAdapter, phoneticAdapter };
