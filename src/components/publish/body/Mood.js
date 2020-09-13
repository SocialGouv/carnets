import Weather from "@components/Weather"
import React from "react"

const Mood = ({ field }) => {
  const onClick = (mood) =>
    field.onChange({
      persist: () => {},
      target: { name: "mood", type: "change", value: mood },
    })

  return (
    <div className="moods">
      {["good", "average", "bad"].map((mood, i) => (
        <div
          key={i}
          id="mood"
          value={mood}
          tabIndex={0}
          role="menuitem"
          onClick={() => onClick(mood)}
          onKeyPress={() => onClick(mood)}
          className={`mood ${mood === field.value ? "" : "disabled"}`}
        >
          <Weather status={mood} />
        </div>
      ))}
    </div>
  )
}

export default Mood
