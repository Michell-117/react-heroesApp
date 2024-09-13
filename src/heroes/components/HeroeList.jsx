import { useMemo } from "react"
import getHeroeByPublisher from "../../helpers/getHeroeByPublisher"
import HeroeCard from "./HeroeCard"


export default function HeroeList({publisher}) {
    
    const heroes = useMemo( ()=> getHeroeByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {heroes.map(h=>{
                return(
                    <HeroeCard key={h.id} heroe={h}/>
                )
            })}
        </div>
    )
}
