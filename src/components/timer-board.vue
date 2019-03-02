<template>
    <label>{{ elapsed }}</label>
</template>

<script>
const secondsPerHour = 3600
const secondsPerMinute = 60

function secondsToReadableTime(elapsedSeconds) {
    let hh = 0
    let mm = 0
    let ss = 0

    let calcSeconds = elapsedSeconds
    if (calcSeconds >= secondsPerHour) {
        hh = Math.floor(calcSeconds / secondsPerHour)
        calcSeconds -= secondsPerHour * hh
    }

    if (calcSeconds >= secondsPerMinute) {
        mm = Math.floor(calcSeconds / secondsPerMinute)
        calcSeconds -= secondsPerMinute * mm
    }

    ss = calcSeconds

    let result = hh.toString().padStart(2, '0') + ' : ' +
        mm.toString().padStart(2, '0') + ' : ' +
        ss.toString().padStart(2, '0')

    return result
}

export default {
    data: function() {
        return {
            elapsedSeconds: 0,
            ticker: null
        }
    },
    computed: {
        elapsed: function() {
            return secondsToReadableTime(this.elapsedSeconds)
        }
    },
    methods: {
        start: function() {
            if (this.ticker != null) {
                clearInterval(this.ticker)
            }

            this.ticker = setInterval(() => {
                this.elapsedSeconds += 1
            }, 1000)
        },
        stop: function() {
            if (this.ticker != null) {
                clearInterval(this.ticker)
            }
        }
    }
}
</script>
