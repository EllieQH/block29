import { useState } from 'react'
import AllPlayerList  from './components/AllPlayerList'
import './App.css'
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import {Routes, Route} from 'react-router'
function App() {
const [allPlayers, setallPlayers] = useState( [] );

  return (
    <>
    <h1> Hello </h1>

{/* <Routes>

<Route path='/' element={<AllPlayerList allPlayers={allPlayers}/>} />
<Route path='/' players={<AllPlayerList allPlayers={allPlayers} />} />
<Route path='/'id element={<SinglePlayer/>} />

</Routes> */}

    </>
  )
  
}

export default App
