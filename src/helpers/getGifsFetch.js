
export const getGifsFetch = async( category='' ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=e0A4a8Me9FiEBhzd4nUhlExUciODVwI2`;

    const res = await fetch(url);

    const {data} = await res.json();

    const gifs = data.map( gif => ({
        id:gif.id,
        title:gif.title,
        url:gif.images?.downsized_medium.url
    }))

    return gifs;

}