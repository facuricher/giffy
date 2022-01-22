const apiKey = `6ckZ7zNXOGYgw50Fcblge7drFhPJwV4d`

export default function GetGifs ({keyword = `morty`} = {}) {

const apiUrl= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data}= response
      if (Array.isArray(data)){
        const gifs = data.map(Image=>{
          const {images,title, id}=Image
          const{ url } = images.downsized_medium
          return {title, id, url}
        })
        return gifs
      }
    })
}