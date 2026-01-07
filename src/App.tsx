import './App.css'
import {client} from "./shared/api/client";

function App() {

    client.GET('/playlists')

    return (
        <>
            Hello!!!
        </>
    )
}

export default App
