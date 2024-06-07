import { useEffect, useState } from "react";
import { createNewTeamProp } from "../store/league/thunks";

export const useUpdateMembers = async(teamId:number, newTeam:createNewTeamProp) => {
    const [teams, setteams] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVERURL+"/teams/"+teamId, {
            method: "PUT",
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newTeam),
        })
        .then(data => data.json())
        .then(json => {
            setteams(json);
        })
        .finally();
    }, []);

    return {teams}
}
