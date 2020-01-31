const getCharacters = () => {
  return fetch('https://anapioficeandfire.com/api/characters')
    .then(res => res.JSON())
    .then(characters => characters.map(({ url, name, gender, culture, titles, books, allegiances, aliases }) => ({
      url,
      name,
      gender,
      culture,
      titles,
      books,
      allegiances,
      aliases
    })));
};
  

export default getCharacters;
