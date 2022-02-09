import React from "react"
import { Link } from "wouter"
import { Gifs, Img, GifH4} from './styledGif'

export default function Gif ({title, url, id}){
    return(
        <Gifs>
            <Link to={`/gif/${id}`}>
                <Img src={url} alt={title}/>
                <GifH4>{title}</GifH4>
            </Link>
        </Gifs>
    )
}