import React, { useState, useEffect } from 'react';
import { Button, Row } from 'reactstrap';
import styled from "styled-components";
// import './App.css';

    const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
    const apiKey = "7cbd1dba95b77fca2ed0bf2e02d04965";
    // 7cbd1dba95b77fca2ed0bf2e02d04965
  const Header = styled.header`
      text-align: left;
  `

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


const WeatherApp = (props) => {

  const [description, setDescription] = useState('');
  const [temp, setTemp] = useState('');
  const [cloudyness, setCloudyness] = useState('');
  const [humidity, setHumidity] = useState('');
  const [feelsLike, setFeelsLike] = useState('');
  const [name, setName] = useState('');
  const [unit, setUnit] = useState(true);

  console.log(props);

  const url = baseURL + "?lat=" + props.coords.lat + "&lon=" + props.coords.long + "&units=imperial&appid=" + apiKey

  // let baseURL = `api.openweathermap.org/data/2.5/weather?q={Chicago}&appid=${apiKey}`;

    // const fetchResults =  async() => {
    //   // console.log(url)

    // fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(data => console.log(data))
    //     .then(data => {
    //       console.log('DATA', data);
    //       // tunnel down into the api
    //       setDescription(data.weather[0].descripion);
    //       setCloudyness(data.clouds.all);
    //       setTemp(Math.floor(data.main.temp));
    //       setHumidity(data.main.humidity);
    //       setFeelsLike(data.main.feels_like);
    //       setName(data.name);
    //     })
    //     .catch(err => console.log(err))
    // }

    const fetchResults = async() => {
      console.log("fetchResults1")
      const res = await fetch(url);
      console.log(res)
      const data = await res.json();
      console.log(data)

      // tunnel down into the api
       setDescription(data.weather[0].descripion);
      console.log(data.weather[0].descripion);
      setCloudyness(data.clouds.all);
      console.log(data.clouds.all);
      setTemp(Math.floor(data.main.temp));
      console.log(Math.floor(data.main.temp));
      setHumidity(data.main.humidity);
      console.log(data.main.humidity);
      setFeelsLike(data.main.feels_like);
      console.log(data.main.feels_like);
      setName(data.name);
      console.log(data.name);
      
    }

    // useEffect(() => { //makes sure that fetchResults() is called only once.
    //   fetchResults();
    // }, []);

    const toggle = () => setUnit(unit => !unit);

    return(
      <div>
          <Header className="title">Current Weather in {name}</Header>
          <br />
          <Row>
            <h6>{unit ? Math.round(temp) : Math.round((temp - 32) / 1.8)}°
              <Button onClick={toggle}>toggle</Button>
            </h6>
          </Row>
          <Row>
            <h6>Feels like {feelsLike}°</h6>
          </Row>
          <Row>
            <h6>{humidity}% Humidity</h6>
          </Row>
          <Row>
            <h6>{cloudyness}% Cloudy</h6>
          </Row>
          <Row>
            <h6>Description {description}</h6>
          </Row>

          <Button onClick ={fetchResults}>FETCH BUTTON</Button>

      </div>
    )

}

export default WeatherApp;