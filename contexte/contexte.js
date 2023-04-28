import { createContext , useState} from "react"


export const ArtContexte = createContext();

export function ArtContexteProvider(props){

    const [artAModifier , setArtAModifier] = useState({titre : "", contenu : "" , id : 0})

    function modifier(art){
        setArtAModifier(art)
    }
    function viderArt(){
        setArtAModifier({titre : "", contenu : "" , id : 0})
    }

    return <ArtContexte.Provider value={{modifier , artAModifier , viderArt}}>
        {props.children}
    </ArtContexte.Provider>

}