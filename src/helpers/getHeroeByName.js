import { heroes } from "../heroes/Data/heroes"


export const getHeroeByName = (hero = '')=>{
    if(hero.length===0)return []
    // console.log(hero);
    // console.log(heroes);
    // const arr = heroes.filter(h=>h.superhero.toLowerCase().includes(hero) )
    return heroes.filter(h=>h.superhero.toLowerCase().includes(hero) )
    // console.log(arr);
}
