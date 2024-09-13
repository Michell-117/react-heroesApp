import { heroes } from "../heroes/Data/heroes"


export default function getHeroeById(id) {
    // // console.log({id});
    // let Heroe_r
    // heroes.forEach(hero => {
    //     if(hero.id===id)Heroe_r=hero;
    // });
    
    // return Heroe_r

    return heroes.find(h=>h.id===id)
}
