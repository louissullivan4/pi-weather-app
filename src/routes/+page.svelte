<script>
    import WiThermometer from 'svelte-icons/wi/WiThermometer.svelte'
    import WiStrongWind from 'svelte-icons/wi/WiStrongWind.svelte'
    import WiNightClear from 'svelte-icons/wi/WiNightClear.svelte'
    import { returnWeatherIcon } from '../utils/weatherCode.js'
    import { onMount } from "svelte"

    export let currentWeather = undefined;
    export let timeString = undefined;
    export let weatherIcon = undefined;

    onMount(async () => {
        await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.8969&longitude=-8.4863&hourly=temperature_2m&current_weather=true&timezone=auto')
        .then(response => response.json())
        .then(data => {
            console.log(data.current_weather)
            currentWeather = data.current_weather;
            timeString = new Date(currentWeather.time).toLocaleString('en-GB', { timeZone: 'Europe/London' })
            weatherIcon = returnWeatherIcon(currentWeather.weathercode)
        })
    });

</script>
<body>
    <section>
        {#if currentWeather}
            <p>{timeString}</p>
            <div class="icon">
                <!-- <svelte:component this={weatherIcon} /> -->
                <WiNightClear/>
            </div>
            <p style="desc">Clear</p>
            <div class="inline-column">
                <div class="inline-temp">
                    <div class="temp-icon">
                        <WiThermometer/>
                    </div>
                    <p class="temp">{currentWeather.temperature}°C</p>
                </div>
                <div class="inline-temp">
                    <div class="temp-icon">
                        <WiStrongWind/>
                    </div>
                <p class="wind">{currentWeather.windspeed}km/h</p>
                </div>
            </div>
        {:else}
            <p>Loading...</p>
        {/if}
    </section>
</body>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: #06283D;
        font-family: 'Roboto', sans-serif;
        font-size: 1.25em;
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 550px;
        border-radius: 10px;
    }
   .icon {
        width: 220px;
        height: 220px;
        color: #6999b8;
    }
    .inline-column {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80%;
        color: #6999b8;
    }
    .inline-temp {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .temp-icon {
        width: 50px;
        height: 50px;
        color: #6999b8;
    }
</style>





