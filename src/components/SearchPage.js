import { useEffect, useState } from "react"
import Books from "./Books"
import React from "react"

function Search(props) {
  const { data } = props
  const [input, setInput] = useState("")

  const searchHandler = e => {
    const val = e.target.value
    setInput(val)
  }
  const search = e => {
    data.find(x => {
      return x
    })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Anime here"
        onChange={searchHandler}
      />

      <button onClick={search}>Search</button>

      <div>
        {props.data &&
          props.data.map((data, i) => (
            <div>
              <Books data={data} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Search
