

export const useDeletePlayer = async(id:number) => {

        fetch(import.meta.env.VITE_SERVERURL+`/players/${id}`, {
            method: "DELETE",
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            },
            
        })
        .then(data => data.json())
        .then(json => {
            console.log('resp', json)
        })
        .finally()
        .catch(err => console.error(err));
    }

