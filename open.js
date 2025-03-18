const apiKey = "37fa85ab932da167a0df4337c6d68207"; // Reemplaza con tu clave de API real

document.getElementById('searchButton').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"37fa85ab932da167a0df4337c6d68207"}&units=metric`);
            const data = await response.json();

            if (data.cod === 200) {
                const temperature = data.main.temp;
                document.getElementById('weatherInfo').textContent = `La temperatura en ${city} es de ${temperature}°C`;
            } else if (data.cod === 404) {
                document.getElementById('weatherInfo').textContent = 'Ciudad no encontrada.';
            } else {
              document.getElementById('weatherInfo').textContent = 'Error al obtener el clima.';
            }

        } catch (error) {
            console.error('Error:', error);
            document.getElementById('weatherInfo').textContent = 'Error al obtener el clima.';
        }
    } else {
        document.getElementById('weatherInfo').textContent = 'Ingresa una ciudad.';
    }
});