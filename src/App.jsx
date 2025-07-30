import { useState } from 'react'
import './App.css'
import Tour from './component/Tour'
import Data from './Data'

function App() {

  const [tours, setTours] = useState(Data);

  function removeTour(id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  function refreshbtn(){
    return setTours(Data);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={refreshbtn}>
          refresh
        </button>
      </div>
    )
  }

  return (
    <div className='App'>
      <Tour tours = {tours} removeTour = {removeTour}/> 
    </div>
  )
}

export default App
