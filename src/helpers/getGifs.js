
export const getGifs = async ( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=2&api_key=l2jskVVvaxZExQNCnyaXQ1eU3UasbhOg`;
        const resp = await fetch(`${ url }`);
        //resp.ok
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        //setImages(gifs);
        return gifs;

    }