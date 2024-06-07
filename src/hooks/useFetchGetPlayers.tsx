import { useEffect, useState } from "react"
import { playerInterface } from "../utils/Interfaces";

export const useFetchGetPlayers = () => {
    const [allPlayers, setAllPlayers] = useState<playerInterface[]>([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_SERVERURL+"/players", {
            method: "GET"})
        .then(data => data.json())
        .then(json => {
            setAllPlayers(json);
        })
        .finally();
    }, [])
    

    return {allPlayers}
}
