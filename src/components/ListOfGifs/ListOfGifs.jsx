import Gif from '../Gif/Gif'

export default function ListOfGifs ({gifs}) {
    return <div>
        {
            gifs.map(({id, title, url})=>{
                return <Gif
                id={id}
                title={title}
                url={url}
                />
            }
            )
        }
    </div>
}