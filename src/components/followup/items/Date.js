import moment from "moment"
import React from "react"
import DatePicker from "react-datepicker"

const Write = ({ item }) => (
  <>
    <div>{item.label}</div>
    <DatePicker name={`${item.fieldIndex}.date`} selected={item.date} />
  </>
)

const Read = ({ item }) => (
  <>
    <div className="label">{item.label}</div>
    <div className="text">{moment(item.date).format("D/MM/YYYY")}</div>
  </>
)

const Date = ({ item, edit }) => (
  <div className="item date">
    {edit ? <Write item={item} /> : <Read item={item} />}
  </div>
)

export default Date
