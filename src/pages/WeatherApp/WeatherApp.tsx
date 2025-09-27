import { Routes, Route } from "react-router-dom"

import Home from "../Home/Home"
import Weathers from "../Weathers/Weathers"
import { ROUTES } from "../constants/navMenuRoutes"

function WeatherApp() {
  return (
    <Routes>
      <Route path={ROUTES.WEATHERS} element={<Weathers/>} />
      <Route path={ROUTES.HOME} element={<Home/>} />
    </Routes>
  )
}

export default WeatherApp