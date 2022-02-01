import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import UseGifs from "../../Hooks/useGifs"

export default function SearchResult ({params}) {
    const {keyword} = params
    const {loading, gifs } = UseGifs({keyword})

    return <>
    {
        loading ? <div>loading...</div> : <ListOfGifs gifs={gifs}/>
    }
    </>
}