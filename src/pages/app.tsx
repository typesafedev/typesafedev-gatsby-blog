import { Router as MyRouter } from "@reach/router"
import React from "react"
import { RandomPerson } from "../modules/RandomPerson"

// setup reach router
const Router = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:results"></RandomPerson>
      <RandomPerson path="/app/random-person"></RandomPerson>
    </MyRouter>
  )
}

export default Router
