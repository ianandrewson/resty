//https://anapioficeandfire.com/api/characters


const makeRequest = (url, method, body) => {
  const options = {};
  options.method = method;
  if(body) options.body = body;

  return (
    fetch(url, options)
      .then(res => res.json())
      .then(characters => characters.map(({ url, name, gender, culture, titles, books, allegiances, aliases }) => ({
        url,
        name,
        gender,
        culture,
        titles,
        books,
        allegiances,
        aliases
      }))));
};
  

export default makeRequest;
