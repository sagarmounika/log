import React, { useEffect, useState } from "react"
import "./style.css"
import Search from "./components/SearchPage"

export default function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch("https://lspl-bookie.glitch.me/")
      .then(res => res.json())
      .then(res => setData(res))
  }, [])
  return (
    <div className="App">
      <Search data={data} />
    </div>
  )
}
