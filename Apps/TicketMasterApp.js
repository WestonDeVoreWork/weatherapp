import React, { useState, useEffect } from 'react';
// import { Row } from 'reactstrap';
// import styled from "styled-components";

const baseURL = `https://app.ticketmaster.com/discovery/v2/events`;
const apiKey = "cqqxAqPnWXvUecao3UpzShcaoyfL0qr5";
// https://app.ticketmaster.com/discovery/v2/events?apikey=cqqxAqPnWXvUecao3UpzShcaoyfL0qr5&latlong=43.7599,-79.4112&radius=20&locale=*


const TicketMasterApp = (props) => {

let url = `${baseURL}.json?apikey=${apiKey}&latlong=${props.lat},${props.long}&radius=20&locale=en-us`

const [name, setName] = useState('');

  const ticketMasterFetch =  () => {
    fetch(url, {
            mode: "no-cors"
        })
        .then(res => res.json())
        .then(data => {
          setName(data._embedded.events[0].name)

          // return(data ? JSON.parse(data) : {})
          // console.log(data);
        })
        .catch(err => console.log(err))
  }

    useEffect(() => { //makes sure that fetchResults() is called only once.
        ticketMasterFetch();
    });

    return(
      <div>
          <h1>    </h1>


      </div>
    )

}

    export default TicketMasterApp;