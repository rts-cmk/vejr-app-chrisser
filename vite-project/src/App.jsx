import { useState } from "react"
import CitySearch from "./components/CitySearch"
import WeahterDisplay from "./components/CitySearch/Components/WeatherDisplay";

function App() {
  const [cityData, setCityData] = useState(null);

  return (
    <>
      <CitySearch result={setCityData} />
      <WeahterDisplay city={cityData} />
    </>
  )
}

export default App
