import { Field } from "formik"
import React from "react"
import ReactMarkdown from "react-markdown"

const Write = ({ item }) => (
  <>
    <div className="label">{item.label}</div>
    <Field rows="8" name={`${item.fieldIndex}.text`} component="textarea" />
  </>
)

const Read = ({ item }) => (
  <>
    {item.text && (
      <>
        <div className="label">{item.label}</div>
        <div className="text">
          <ReactMarkdown className="markdown-body" source={item.text} />
        </div>
      </>
    )}
  </>
)

const Comment = ({ item, edit }) => (
  <div className="item comment">
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default Comment
