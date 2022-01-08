import React from "react"

export default function Gif ({title, url}){
    return(
        <div>
            <img src={url} alt={title}/>
            <h4>{title}</h4>
          </div>
    )
}