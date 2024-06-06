import { Route, Routes } from "react-router"
import { PlayersPage } from "../pages/PlayersPage"
import { TeamsPage } from "../pages/TeamsPage"
import { PlayerPage } from "../pages/PlayerPage"
import { HomePage } from "../pages/HomePage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="players" element={<PlayersPage /> }/>
            <Route path="tems" element={ <TeamsPage /> }/>

            <Route path="player/:id" element={<PlayerPage /> }/>


        </Routes>
    </>
  )
}
