var myChart = echarts.init(document.getElementById('threeChart'));
option = {
    xAxis: {
        type: 'category',
        data: ['6:00-9:00', '10:00-12:00', '13:00-15:00', '16:00-18:00', '21:00-24:00'],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#5aac1d'
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#5aac1d'
            }
        },
        
    },
    grid: {
        left: '3%',
        right: '4%',
        top:'5%',
        bottom: '3%',
        containLabel: true
    },
    series: [{
        data: [800, 300, 500,800,300],
        type: 'line',
        color:'#5aac1d',
        smooth: true
    }]
};
myChart.setOption(option);