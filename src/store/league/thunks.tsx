import { setTeams, addNewTeam, loadTeams } from "./leagueSlice";
import { useFetchGetTeams } from "../../hooks/useFetchGetTeams";
import { Dispatch } from "@reduxjs/toolkit";
// import { RootState } from "../store";

export interface createNewTeamProp {
    id?: number,
    name: string,
    slogan: string,
    players?: number[],
}

export const startLoadingTeams = () => {
    return async( dispatch:Dispatch ) => {
        
        const {teams} = await useFetchGetTeams();

        dispatch(setTeams(teams))

    }
}

export const createNewTeam = ({name,slogan}:createNewTeamProp) => {
    return async( dispatch:Dispatch ) => {

        
        const newTeam:createNewTeamProp = {
            name: name,
            slogan: slogan,
        }

        fetch(import.meta.env.VITE_SERVERURL+"/teams", {
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

//    const newPlayer = {
//     name: '',
//     age: null,
//     position: '',
//     team_id: null
// }