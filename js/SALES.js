var myChart1 = echarts.init(document.getElementById('leftCharts'));
option = {
    title: {
        text: 'SALES ANALYTICS'
    },
    color:["#e1f7f8","#23dadd","#f6dca0"],
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            // type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            } 
        }
    },
    legend: {
        data:['Iphone','Ipad','Itouch']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2010','2011','2012','2013','2014','2015','2016']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Iphone',
            type:'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data:[0, 50, 90, 50, 70, 120, 70]
        },
        {
            name:'Ipad',
            type:'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data:[0, 40, 70, 40, 50, 90, 50]
        },
        {
            name:'Itouch',
            type:'line',
            smooth: true,
            stack: '总量',
            areaStyle: {},
            data:[0, 30, 60, 30, 30, 60, 30]
        },
       
    ]
};
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option);

  $(window).resize(function(){
        myChart1.resize();
    })