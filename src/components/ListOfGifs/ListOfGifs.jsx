import Gif from '../Gif/Gif'
import { GifsDiv } from './styled'


export default function ListOfGifs ({gifs}) {
    return <GifsDiv>
        {
            gifs.map(({id, title, url})=>
                <Gif
                key={id}
                id={id}
                title={title}
                url={url}
                />
            )
        }
    </GifsDiv>
}