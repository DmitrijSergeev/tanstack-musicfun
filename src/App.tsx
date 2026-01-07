import './App.css'
import {useEffect} from "react";
import {client} from "./shared/api/client.ts";

function App() {

    useEffect(() => {

client.

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists',
            {
                headers: {
                    'API-KEY': '3897f0cc-ec64-4ebd-9093-9d4dbb072be0'
                }
            }
        ).then(res => res.json()).then(
            res => console.log(res)
        )
    }, [])

    return (
        <>
            Hello!!!
        </>
    )
}

export default App
