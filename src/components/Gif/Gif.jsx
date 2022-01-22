import React from "react"

export default function Gif ({title, url, id}){
    return(
        <a href={`${id}`}>
            <img src={url} alt={title}/>
            <h4>{title}</h4>
          </a>
    )
}