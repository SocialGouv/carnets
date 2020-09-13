import React from "react"
import { Cloud, CloudRain, Sun } from "react-feather"

const Weather = ({ status }) => {
  const mapping = {
    average: <Cloud className="icon-cloud" />,
    bad: <CloudRain className="icon-rain" />,
    good: <Sun className="icon-sun" />,
  }

  return <div className="mood">{mapping[status]}</div>
}

export default Weather
