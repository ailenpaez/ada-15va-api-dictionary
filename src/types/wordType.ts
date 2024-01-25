interface Word {
  word: string;
  phonetics: object[];
  meanings: [object[], object[]];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

export { Word };