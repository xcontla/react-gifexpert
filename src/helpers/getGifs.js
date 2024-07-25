export const getGifs = async (category) => {
  
  const apiKey = '9XomWkMwx57ZBPrFNY9wQZbbmrKUroKR';
 // const urlrandom = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
  const urlsearch = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

  try {
    const resp = await fetch(urlsearch);
    const {data = []} =await resp.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs;
  
}catch(e){
    console.error(e);
  }
}