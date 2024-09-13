import { heroes } from "../heroes/Data/heroes";


export default function getHeroeByPublisher(publisher) {
    const validPublishers = ['DC Comics', 'Marvel Comics']

    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no es un valor correcto`)
    }

    return heroes.filter(heroe=>heroe.publisher===publisher)
    
}
