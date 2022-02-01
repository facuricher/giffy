import { useState } from "react"
import {Link, useLocation} from "wouter"
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import UseGifs from "../../Hooks/useGifs"


const POPULAR_GIFS = ['Matrix', 'Germany', 'España', 'Noruega', 'programing']

export default function Home () {
 const [keyword, setKeyword] =  useState('')
 const [path, pushLocation] = useLocation()
 const {loading, gifs } = UseGifs()

 // <---------------------------
 //console.log(path,loading)
// <-----------------------------
 const handleSubmit = evt =>{
    evt.preventDefault()
    //navegar a otra ruta
    pushLocation(`/search/${keyword}`)
 }

 const handleChange = evt =>{
     setKeyword(evt.target.value)
 }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Search a Gif here..." onChange={handleChange} type="text" value={keyword} />
        </form>
        <h3>ultima busqueda</h3>
        <ListOfGifs gifs={gifs}/>
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