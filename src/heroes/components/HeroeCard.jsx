import { Link } from "react-router-dom"


export default function HeroeCard({heroe}) {

    const heroImgUrl = `../../../assets/heroes/${heroe.id}.jpg`

    return (
        <div className="col animate__animated animate__fadeIn">

            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4 ">
                        <img src={heroImgUrl}className="card-img" alt={heroe.superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{heroe.superhero}</h5>
                            <p className="card-text">{heroe.alter_ego}</p>
                            {/* {
                                (heroe.alter_ego !== heroe.characters) && (<p>{heroe.characters}</p>)
                            } */}

                            {
                                (heroe.alter_ego !== heroe.characters) ? <p>{heroe.characters}</p> : <></>
                            }

                            <p className="text-muted">{heroe.first_appearance}</p>

                            <Link to={`/heroe/${heroe.id}`}>Más...</Link>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
