import { useContext} from "react";
import GifsContext from  "../contex/GifsContext"

export default function useGlobalGifs () {
    return useContext(GifsContext).gifs
    
}