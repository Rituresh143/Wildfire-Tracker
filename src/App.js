import { useState, useEffect } from "react";
import Map from "./components/Map"
import Loader from './components/Loader'
import Header from "./components/Header";


function App() {
  const [eventData, setEvenData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEvenData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  return (
    <div>
      <Header/>
     { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
