import { useEffect } from "react";

export default function WeahterDisplay({ city }) {

    useEffect(() => {
        if (city === null) return;


        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_URL = import.meta.env.WEATHER_API_URL;

        const fetchData = async () => {
            const url = new URL(API_URL);
            const { lon, lat } = city;
            const units = 'metric';
            const lang = 'da';

            url.search = new URLSearchParams({ lon, lat, units, appid: API_KEY });

            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

        }

        fetchData();


    }, [city]);

    return (
        <p>{city?.name}</p>
    )

}