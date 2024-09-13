import { Route, Routes } from "react-router-dom"
import NavBar from "../../ui/components/NavBar"
import Home from "../../router/Home"
import MarvelPages from "../pages/MarvelPages"
import DcPages from "../pages/DcPages"
import SearchPages from "../pages/SearchPages"
import HeroesPages from "../pages/HeroesPages"


export default function HeroesRoutes() {
    return (
        <>
            <NavBar/>
            <div className="container">
                
                <Routes>
                    <Route path="/" element={<Home/>} />

                    <Route path="marvel" element={<MarvelPages/>} />
                    <Route path="dc" element={<DcPages/>} />

                    <Route path="search" element={<SearchPages/>} />
                    <Route path="heroe/:heroeId" element={<HeroesPages/>} />

                    <Route path="/*" element={<Home/>} />
                </Routes>
            </div>
        </>
    )
}
