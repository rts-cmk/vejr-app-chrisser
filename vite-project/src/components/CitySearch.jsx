export default function CitySearch({ result }) {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.GEO_API_URL;

    const sumbitHandler = async event => {
        event.preventDefault();

        const formElement = event.target;
        const formData = new FormData(formElement);
        const city = formData.get('city');

        console.log(formData.get('city'));

        const url = new URL(API_URL);

        url.searchParams.set('appid', API_KEY)
        url.searchParams.set('q', `${city},dk`)

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);


    }

    return (
        <form onSubmit={submitHandler}>
            <input name="search" name="city" />
            <input type="submit" value="søg" />
        </form>

    )
}