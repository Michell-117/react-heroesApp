import { Navigate, redirect, useNavigate, useParams } from "react-router-dom"
import getHeroeById from "../../helpers/getHeroeById"
import { useMemo } from "react"

export default function HeroesPages() {

    const {heroeId} = useParams()
    // const {id,superhero,publisher,alter_ego,first_appearance,characters} = getHeroeById(heroeId)
    const heroe = useMemo( ()=>getHeroeById(heroeId), [heroeId] );

    const heroImgUrl = `../../../assets/heroes/${heroe.id}.jpg`

    const navigate = useNavigate()

    const onNavigateback = ()=>{
        navigate(-1);
    }

    if(!heroe){
        return <Navigate to={"/"}/>
    }


    return (
        <div className="row mt-5">
            <div className="col-4 animate__animated animate__backInLeft">
                <img 
                    src={heroImgUrl} 
                    alt={`${heroe.superhero}`}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {heroe.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {heroe.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {heroe.first_appearance}</li>
                </ul>

                <h3 className="mt-3">Characters</h3>
                <p>{heroe.characters}</p>

                <button className="btn btn-outline-primary" onClick={onNavigateback}>Regresar</button>

            </div>
        </div>
    )
}
