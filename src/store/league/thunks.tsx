import { setTeams, addNewTeam, loadTeams, setPlayers, deletePlayerById, deleteTeamById, addNewPlayer } from "./leagueSlice";
import { useFetchGetTeams } from "../../hooks/useFetchGetTeams";
import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { useFetchGetPlayers } from "../../hooks/useFetchGetPlayers";
import { useDeletePlayer } from "../../hooks/useDeletePlayer";

export interface updateNewTeamProp {
    id?: number,
    name: string,
    slogan: string,
    players: number[],
}

export interface createNewTeamProp {
    id?: number,
    name: string,
    slogan: string,
    players?: number[],
}

export interface createNewPlayerProp {
    id?: number,
    name: string,
    age: 12,
    position: string;
}

export interface updateMembersTeamProps {
    teamId: number,
    players: number[],
}

export const startLoadingTeams = () => {
    return async( dispatch:AppDispatch ) => {
        
        const {allTeams} = await useFetchGetTeams();

        dispatch(setTeams( allTeams))

    }
}

export const updateMembersTeam = (team: updateNewTeamProp) => {
    return async( dispatch:AppDispatch, getState: RootState ) => {
        const {players} = getState().league;
        
        //deuda tecnica aqui, ya mande los id de usuario que se deben de modificar, solo falta hacer uno por uno

        console.log(players,team.id);
        
        
        // await fetch(import.meta.env.VITE_SERVERURL+"/teams/"+team.id, {
        //     method: "PUT",
        //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: "same-origin", // include, *same-origin, omit
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(teamModified),
        // })
        // .then(res => res.json())
        // .then(json => console.log(json))
        // .catch(err => console.error(err))
        // .finally(() =>  {
        //     dispatch(updateTeam(teamsToApi))
        // });   
        

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

export const createNewPlayer = (player: createNewPlayerProp) => {
    return async( dispatch:Dispatch) => {
        await fetch(import.meta.env.VITE_SERVERURL+"/players", {
            method: "POST",
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(player),
        })
        .then(res => res.json())
        .then(json => {{
            player.id = json.id;
            dispatch(addNewPlayer(player));
        }
        }).catch(err => console.error(err))
        .finally(() =>  {
            
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
