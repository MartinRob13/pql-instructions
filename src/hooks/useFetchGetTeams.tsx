import { useEffect, useState } from "react";
import { teamInterface } from "../utils/Interfaces";

export const useFetchGetTeams = async() => {
  
    const [allTeams, setteams] = useState<teamInterface[]>([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVERURL+"/teams", {
            method: "GET"})
        .then(data => data.json())
        .then(json => {
            setteams(json);
        })
        .finally();
    }, []);
    return {allTeams}
}
