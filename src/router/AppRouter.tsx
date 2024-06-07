import { Route, Routes } from "react-router"
import { PlayersPage } from "../pages/PlayersPage"
import { TeamsPage } from "../pages/TeamsPage"
import { PlayerPage } from "../pages/PlayerPage"
import { HomePage } from "../pages/HomePage"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { startLoadingPlayers, startLoadingTeams } from "../store/league/thunks"

export const AppRouter = () => {
  const dispatch = useAppDispatch();

  dispatch( startLoadingTeams() );
  dispatch( startLoadingPlayers() );

  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="players" element={<PlayersPage /> }/>
            <Route path="teams" element={ <TeamsPage /> }/>

            <Route path="player/:id" element={<PlayerPage /> }/>


        </Routes>
    </>
  )
}
