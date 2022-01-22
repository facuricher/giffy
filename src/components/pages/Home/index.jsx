import { useState} from "react"
import {Link, useLocation} from "wouter"

const POPULAR_GIFS = ['Matrix', 'Germany', 'España', 'Noruega', 'programing']

export default function Home () {
 const [keyword, setKeyword] =  useState('')
 const [path, pushLocation] = useLocation()
 
console.log(path)
 const handleSubmit = evt =>{
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
 }

 const handleChange = evt =>{
     setKeyword(evt.target.value)
 }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a gis here..." onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3>los gifs mas populares</h3>
        <ul>
            {
                POPULAR_GIFS.map((popularGif)=>(
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`} > Gifs de {popularGif}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    )
}