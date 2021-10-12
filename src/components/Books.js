import React from "react"

export default function Books(props) {
  return (
    <div>
      <div>{props?.data?.titles.en}</div>
    </div>
  )
}
