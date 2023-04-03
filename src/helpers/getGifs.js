
export const getGifs = async (categoria) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=7Pb0BHA1li9hjSzxvy9gnJysWKxuNSKz&q=${categoria}&limit=${ 10 }&rating=pg-13`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const listaGifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(listaGifs);
    return listaGifs;

}