//给图表一个盒子
var myChart = echarts.init(document.getElementById('rightCharts'));

    option = {
    title: {
        text: 'TOTAL REVENUE'
    },
    color:["#03a9f3","#ffaa00"],
    tooltip: {},
    legend: {
        data:['SectionA','SectionB']

    },
    xAxis: {
        data: ["2010","2011","2012","2013","2014","2015","2016"]
    },
    yAxis: {},
    series: [
        {
        name: 'SectionA',
        type: 'bar',
        data: [30, 60, 85, 100, 60,75,100]
        },
        {
        name: 'SectionB',
        type: 'bar',
        data: [25, 40, 65, 90, 50,65,90]

        }
]
};   
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

 $(window).resize(function(){
    myChart.resize();
})