<template>
    <div>
        <div id="container" style="width:100%; height:400px;"></div>
    </div>
</template>

<script>
import { query } from '../services/scoreService'

export default {
    props: [ 'userId' ],
    data: function() {
        return {
            ctx: null,
            chart: null,
            scores: null
        }
    },
    watch: {
        userId: function(val) {
            if (!val) return

            query.equalTo('userId', val)
            query.find().then(r => {
                const dates = r.map(d => new Date(d.createdAt))
                const values = r.map(d => d.attributes.score)

                this.chart = Highcharts.chart('container', {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: '测试曲线图'
                    },
                    xAxis: {
                        categories: dates,
                        type: 'datetime',
                        labels: {
                            format: '{value:%Y-%b-%e}'
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Scores'
                        }
                    },
                    series: [{
                        name: 'Score',
                        data: values
                    }]
                });
            })
        }
    }
}
</script>

