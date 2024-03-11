
import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react';
function App() {
  const [watches, setWatches] = useState([]);
  // from  public folder json load data
  /* useEffect(() => {
     fetch('watches.json')
     .then(res => res.json())
     .then(data => setWatches(data))
  }, []) */


  // from git hub json file load data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/tofayeLL/watches-data/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
 }, [])

  /*   const watches = [
      {id: 1, name: 'Apple Watch', price: 400},
      {id: 2, name: 'Samsung Watch', price:300},
      {id: 3, name: 'Mi Watch', price: 200}
    ]
     */

  /*  const watches = [
     {
       id: 'AW7',
       name: 'Apple Watch Series 7',
       price: 399.99
     },
     {
       id: 'GW4',
       name: 'Samsung Galaxy Watch 4',
       price: 349.99
     },
     {
       id: 'FS',
       name: 'Fitbit Sense',
       price: 299.95
     },
     {
       id: 'GV2',
       name: 'Garmin Venu 2',
       price: 399.99
     },
     {
       id: 'AG3',
       name: 'Amazfit GTR 3',
       price: 249.99
     }
   ]; */

  return (
    <>

      <h1>Vite + React</h1>
      {
        watches.map((watch) => <Watch key={watch.id} watch={watch}></Watch>)
      }


    </>
  )
}

export default App
