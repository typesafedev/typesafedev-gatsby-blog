import { Router } from "@reach/router"
import React from "react"
import { RandomPerson } from "../modules/RandomPerson"

// setup reach router
const App = () => {
  return (
    <Router>
      <RandomPerson path="/app/random-person/:results"></RandomPerson>
      <RandomPerson path="/app/random-person"></RandomPerson>
    </Router>
  )
}

export default App
