import { useEffect, useState } from "react";
import GetGifs from "../services/GetGifs/getGifs"

export default function UseGifs ({keyword} = {keyword : null}) {
    const [loading, setLoanding]= useState(false)
    const [gifs, setGifs] =useState([])

    useEffect(function() {
        setLoanding(true)
        //recuperamos la keyword del localStorage
        const keywordTouse = keyword || localStorage.getItem(`lastKeyword`) || 'random'

        GetGifs({keyword : keywordTouse})
          .then(gifs=>{
              setGifs(gifs)
              setLoanding(false)
              //guardamos la keyword en el localStorage
              localStorage.setItem(`lastKeyword` , keyword)
          })
    }, [keyword])

    return {loading, gifs}

}