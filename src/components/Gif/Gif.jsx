import React from "react"
import { Link } from "wouter"

export default function Gif ({title, url, id}){
    return(
        <div>
            <Link to={`/gif/${id}`}>
                <img src={url} alt={title}/>
                <h4>{title}</h4>
            </Link>
        </div>
    )
}