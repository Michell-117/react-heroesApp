import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import {getHeroeByName} from "../../helpers/getHeroeByName";
import HeroeCard from "../components/HeroeCard";


export default function SearchPages() {

    const navigate = useNavigate();
    const location = useLocation();

    const {q=''} = queryString.parse(location.search)

    const heroeEncontrado = getHeroeByName(q);
    // console.log(heroeEncontrado);
    

    const {heroSearch, actualizarFormulario, resetearFormulario} = useForm({heroSearch:q})

    const buscarHero = (e)=>{
        e.preventDefault();
        if(heroSearch.trim().length<=1){
            console.log('Ingresa mas de dos caracteres');
            return 
        }
        const urlHero = heroSearch.trim().toLowerCase();
        // console.log(urlHero);
        navigate(`?q=${urlHero}`)

    }

    const hay_q = (q.length===0)
    const noHeroe = (q.length>0) && heroeEncontrado.length ===0 

    return (
        <>
            <h1>Search Pages</h1>
            <hr />
            
            <div className="row">

                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={buscarHero}>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="heroSearch"
                            autoComplete="off"
                            value={heroSearch}
                            onChange={actualizarFormulario}
                        />

                        <button 
                            className="btn btn-outline-primary mt-3"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className="alert alert-primary" style={{display:hay_q ? '':'none'}}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger" style={{display: noHeroe ? '':'none'}}>
                        No hero with <b>{q}</b>
                    </div>

                    {
                        heroeEncontrado.map(h=>{
                            return <HeroeCard key={h.id} heroe={h} />
                        })
                    }

                </div>

            </div>
            

        </>
    )
}
