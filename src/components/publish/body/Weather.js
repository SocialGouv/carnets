import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSun,
  faCloudSun,
  faCloudShowersHeavy
} from "@fortawesome/free-solid-svg-icons"

const Weather = ({ handleChange, value }) => {
  const [selectedWeather, setSelectedWeather] = useState(value || "😐")

  const onClick = weather => {
    console.log("selectedWeather", selectedWeather)
    setSelectedWeather(weather)
    handleChange({ target: { name: "weather", value: weather } })
  }

  return (
    <div className="weathers">
      <FontAwesomeIcon
        icon={faCloudShowersHeavy}
        onClick={() => onClick("rainy")}
        mask={["far", "circle"]}
      />
      <FontAwesomeIcon
        icon={faCloudSun}
        onClick={() => onClick("cloudy")}
        listItem
      />
      <FontAwesomeIcon
        icon={faSun}
        onClick={() => onClick("sunny")}
        size="6x"
      />
    </div>
  )
}
export default Weather
