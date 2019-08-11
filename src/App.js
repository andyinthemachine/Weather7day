import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchBar from "./components/SearchBar";
import DayCard from "./components/DayCard";
import DayDetail from "./components/DayDetail";

// import data from "./data/sample.json";
import moment from "moment";
import API from './utils/API'


class App extends Component {
  state = {
    days: [],
    // days: data.data,
    selectedDay: null,
    searchedLoc: ""

  }

  componentDidMount() {
    this.getWeather('Phoenix, AR');
  }


  getWeather = location => {
    API.getWeather(location)
      .then(res => {
        this.setState({
          days: res.data.data,
          searchedLoc: `${res.data.city_name}, ${res.data.state_code}`
        })
      })
      .catch(err => console.log(err));
  }


  selectDay = day => {
    this.setState({ selectedDay: day })
  }


  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ searchedLoc: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchedLoc) {
      this.getWeather(this.state.searchedLoc);
    }
  };


  render() {
    return (
      <Container>
        <Row>
          <Col md={7}>
            <h2 style={{ color: "palevioletred" }}>{this.state.searchedLoc}</h2>
          </Col>

          <Col md={5}>
            {/* <h2 style={{ color: "palevioletred" }}>SearchBar</h2> */}

{/* 
            <form className="form">
              <input
                value={this.state.searchedLoc}
                name="searchedLoc"
                onChange={this.handleInputChange}
                type="text"
                placeholder="City, State/Country"
              />
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form> */}

            <SearchBar
              value={this.state.searchedLoc}
              name="searchedLoc"
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>

        <Row>
          {this.state.days.map(day => (
            <DayCard
              key={day.ts}
              current={day.temp}
              high={day.max_temp}
              low={day.min_temp}
              precip={day.pop}
              icon={day.weather.icon}
              description={day.weather.description}
              day={moment(day.datetime, "YYYY-MM-DD").format("dddd")}
              selectDay={() => this.selectDay(day)}
              isActive={this.state.selectedDay === day}
            />
          ))}
        </Row>

        <Row>
          <Col md={4}>
            {this.state.selectedDay ? (
              <DayDetail
                current={this.state.selectedDay.temp}
                high={this.state.selectedDay.max_temp}
                low={this.state.selectedDay.min_temp}
                precip={this.state.selectedDay.pop}
                icon={this.state.selectedDay.weather.icon}
                description={this.state.selectedDay.weather.description}
                windspeed={this.state.selectedDay.wind_spd}
                relhumidity={this.state.selectedDay.rh}
                // sunrise={moment(this.state.selectedDay.sunrise_ts, "YYYY-MM-DD").format("LT")}
                ozone={this.state.selectedDay.ozone}
                day={moment(this.state.selectedDay.datetime, "YYYY-MM-DD").format("MMMM Do, YYYY")} />
            ) : (
                <h3 style={{ color: "palevioletred" }}>No day selected</h3>
              )}
          </Col>
        </Row>

      </Container>
    )
  }
}

export default App;
