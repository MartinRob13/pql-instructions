import { useEffect, useState } from "react";
import { teamInterface } from "../utils/Interfaces";

export const useFetchGetTeams = () => {
  
    const [teams, setteams] = useState<teamInterface[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/teams', {
            method: "GET"})
        .then(data => data.json())
        .then(json => {
            setteams(json);
        })
        .finally();
    }, []);

    return {teams}
}
