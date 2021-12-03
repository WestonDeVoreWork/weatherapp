import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { Container, Row, Col } from "reactstrap";
// import TickerMasterApp from "./Apps/TicketMaster";
import WeatherApp from './Apps/WeatherApp';
import React, { useEffect, useState } from 'react';
import TicketMasterApp from './Apps/TicketMasterApp';

function App() {
  const [lat, setLat] = useState(null);
  const [long, setLon] = useState(null);

  const getLocation = () => {

    // grab navigator.geolocation from node_modules  
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(null);
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }
      )
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

//   return (
//     <div>
//       <WeatherApp />
//     </div>
//   );
// }

 return (

    <div>
      <WeatherApp />
      {/* <TicketMasterApp /> */}
    
      <h6>Coords:</h6>
      <p>{lat}, {long}</p>
    </div>
);
}
export default App;