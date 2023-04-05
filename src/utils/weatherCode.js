import WiCloud from 'svelte-icons/wi/WiCloud.svelte'
import WiRain from 'svelte-icons/wi/WiRain.svelte'
import WiSnow from 'svelte-icons/wi/WiSnow.svelte'
import WiDaySunny from 'svelte-icons/wi/WiDaySunny.svelte'
import WiFog from 'svelte-icons/wi/WiFog.svelte'
import WiThunderstorm from 'svelte-icons/wi/WiThunderstorm.svelte'


export const returnWeatherIcon = (code) => {
        if (code >= 0 && code <= 9) {
            return WiDaySunny
        } else if (code >= 10 && code <= 19) {
            return WiCloud
        } else if (code >= 20 && code <= 25) {
            return WiRain 
        } else if (code >= 26 && code <= 27) {
            return WiSnow
        } else if (code == 28) {
            return WiFog
        } else if (code >= 29 && code <= 39) {
            return WiThunderstorm
        } else if (code >= 40 && code <= 49) {
            return WiFog
        } else if (code >= 50 && code <= 94) {
            return WiRain
        } else if (code >= 95 && code <= 99) {
            return WiThunderstorm
        } else {
            return WiCloud
        }
}

