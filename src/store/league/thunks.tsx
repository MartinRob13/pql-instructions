import { setTeams, addNewTeam, loadTeams, setPlayers, deletePlayerById, deleteTeamById } from "./leagueSlice";
import { useFetchGetTeams } from "../../hooks/useFetchGetTeams";
import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { useFetchGetPlayers } from "../../hooks/useFetchGetPlayers";
import { useDeletePlayer } from "../../hooks/useDeletePlayer";

export interface createNewTeamProp {
    id?: number,
    name: string,
    slogan: string,
    players?: number[],
}

export const startLoadingTeams = () => {
    return async( dispatch:AppDispatch ) => {
        
        const {allTeams} = await useFetchGetTeams();

        dispatch(setTeams( allTeams))

    }
}

export const createNewTeam = ({name,slogan}:createNewTeamProp) => {
    return async( dispatch:Dispatch ) => {

        
        const newTeam:createNewTeamProp = {
            name: name,
            slogan: slogan,
        }

        await fetch(import.meta.env.VITE_SERVERURL+"/teams", {
            method: "POST",
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newTeam),
        })
        .then(res => res.json())
        .then(json => {{
            newTeam.id = json.id;
            dispatch(addNewTeam(newTeam));
        }
        }).catch(err => console.error(err))
        .finally(() =>  {
            dispatch(loadTeams())
        });    
       
    }
}

export const dispatchDeletePlayerById = (id:number) => {
    return async( dispatch:Dispatch) => {

        await useDeletePlayer(id).finally(() => dispatch(deleteTeamById( id)));
        dispatch( deletePlayerById(id) );
    }
}


export const startLoadingPlayers = () => {
    return async( dispatch:Dispatch) => {
         
        const {allPlayers} = await useFetchGetPlayers();
        dispatch(setPlayers(allPlayers))
    }
    
}
