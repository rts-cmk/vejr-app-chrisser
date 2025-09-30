import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherForecast({ city }) {
    const [forecast, setForecast] = useState(null);
}