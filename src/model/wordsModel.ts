const getDataWord = async (url: URL) => {
  const response = await fetch(url);

  try {
    if (response.status === 404) {
      throw new Error("Not found");
    }
    const word = await response.json();
    return word;
  } catch (error: any) {
    return error;
  }
};

const getSynonymsWord = async (url: URL) => {
  const dataword = await getDataWord(url);

  try {
    if (!dataword.length) {
      throw new Error("Not found");
    }
    return dataword[0].meanings[0].synonyms;
  } catch (error) {
    return error;
  }
};

const getDefinitionsWord = async (url: URL) => {
  const dataword = await getDataWord(url);

  try {
    if (!dataword.length) {
      throw new Error("Not found");
    }

    const arrayDefinitions = dataword[0].meanings[1].definitions;
    const mappedDefinitions = arrayDefinitions.map(
      (definition: any) => definition.definition
    );

    return mappedDefinitions;
  } catch (error) {
    return error;
  }
};

const getAudiosWord = async (url: URL) => {
  const dataword = await getDataWord(url);

  try {
    if (!dataword.length) {
      throw new Error("Not found");
    }

    const arrayAudios = dataword[0].phonetics;
    const mappedAudios = arrayAudios.filter((audio: any) => {
      if (audio.audio) {
        return audio;
      }
    });

    const audios = mappedAudios.map((audio: any) => audio.audio);

    return audios;
  } catch (error) {
    return error;
  }
};

export { getDataWord, getSynonymsWord, getDefinitionsWord, getAudiosWord };
