import Layout from "pages/Layout/Layout"
import WeatherApp from "pages/WeatherApp/WeatherApp"
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Layout>
      <WeatherApp />
      </Layout>
    </BrowserRouter>
  )
}
export default App
