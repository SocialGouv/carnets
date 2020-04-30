import React from "react"

const Mood = ({ field }) => {
  const onClick = (mood) =>
    field.onChange({
      persist: () => {},
      target: { name: "mood", value: mood, type: "change" },
    })

  return (
    <div className="moods">
      {["😤", "😓", "😐", "😁", "🤩"].map((mood, i) => (
        <div
          key={i}
          id="mood"
          value={mood}
          tabIndex={0}
          role="menuitem"
          onClick={() => onClick(mood)}
          onKeyPress={() => onClick(mood)}
          className={`mood${field.value === mood ? " selected" : ""}`}
        >
          {mood}
        </div>
      ))}
    </div>
  )
}

export default Mood
