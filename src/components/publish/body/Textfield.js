import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { Eye, EyeOff } from "react-feather"

const Textfield = ({ field, label, form: { touched, errors }, ...props }) => {
  const [preview, setPreview] = useState(false)

  return (
    <label>
      {label}
      <a
        tabIndex={0}
        role="button"
        className="preview"
        onClick={() => setPreview(!preview)}
        title={preview ? "Edition" : "Aperçu"}
        onKeyPress={() => setPreview(!preview)}
      >
        {preview ? (
          <EyeOff color="darkblue" size={16} />
        ) : (
          <Eye color="darkblue" size={16} />
        )}
      </a>
      {preview ? (
        <div className="markdown-body">
          <ReactMarkdown source={field.value} />
        </div>
      ) : (
        <textarea
          rows="8"
          {...field}
          {...props}
          className={touched[field.name] && errors[field.name] ? "error" : ""}
        />
      )}
    </label>
  )
}
export default Textfield
