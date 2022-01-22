import { useEffect, useState } from "react";
import ListOfGifs from "../../ListOfGifs/ListOfGifs";
import GetGifs from "../../../services/GetGifs/getGifs";

export default function SearchResult ({params}) {
    const {keyword} = params
    const [loanding, setLoanding]= useState(false)
    const [gifs, setGifs] =useState([])
    
    useEffect(function() {
        setLoanding(true)
        GetGifs({keyword})
          .then(gifs=>{
              setGifs(gifs)
              setLoanding(false)
          })
    }, [keyword])

    return <>
    { 
        loanding ? <div>loanding...</div> : <ListOfGifs gifs={gifs}/>
    }
    </>
}