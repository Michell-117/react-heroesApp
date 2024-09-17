import { Route, Routes } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import HeroesRoutes from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoutes } from "./PublicRoutes"





export default function AppRouter() {

    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoutes>
                        <LoginPage/>
                    </PublicRoutes>
                } />

                
                {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
