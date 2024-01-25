// Recibimos el parametro y se lo enviamos al modelo.
// El model le devuelve al index el resultado.
// El index lo muestra en consola.
import dotenv from "dotenv";
import {
  getDataWord,
  getSynonymsWord,
  getDefinitionsWord,
  getAudiosWord,
} from "./model/wordsModel";
dotenv.config();

const urlApi = process.env.BASE_URL_API;
const word = process.argv[2];
const urlWithParams = new URL(`${urlApi}${word}`);

const main = async () => {
  const data = await getDataWord(urlWithParams);
  const synonyms = await getSynonymsWord(urlWithParams);
  const stringWithSynonyms = synonyms.join(", ");

  const definitions = await getDefinitionsWord(urlWithParams);

  definitions.forEach((definition: any, index: number) => {
    // console.log(`In the ${index + 1} position are: ${definition}.`);
  });

  const audios = await getAudiosWord(urlWithParams);
  console.log(audios);

  // console.log(`The synonyms of ${word} are: ${stringWithSynonyms}.`);
};

main();