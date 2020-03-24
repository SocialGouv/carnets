import React, { useState, useEffect } from "react"

const Mood = ({ handleChange, value }) => {
  const [selectedMood, setSelectedMood] = useState(value || "😐")

  const update = () =>
    handleChange({ target: { name: "mood", value: selectedMood } })

  useEffect(() => update(), []) // eslint-disable-line react-hooks/exhaustive-deps

  const onClick = mood => {
    setSelectedMood(mood)
    update()
  }

  return (
    <div className="moods">
      {["😤", "😓", "😐", "😁", "🤩"].map((mood, i) => (
        <div
          key={i}
          tabIndex={0}
          role="menuitem"
          onClick={() => onClick(mood)}
          onKeyPress={() => onClick(mood)}
          className={`mood${selectedMood === mood ? " selected" : ""}`}
        >
          {mood}
        </div>
      ))}
    </div>
  )
}
export default Mood
