var myChart = echarts.init(document.getElementById('chart'));
option = {
    title : {
        // text: '某站点用户访问来源',
        // subtext: '纯属虚构',
        // x:'center'
    },
    color:['#c1232b','#27727b','#fcce10','#e87c25','#b5c334'],
    tooltip : {
        trigger: 'item',
        // formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle:{
            color:'white'
        },
        data: ['重点人口','刑侦勘察','刑侦重点','吸毒人口','人口调查'],
        // fontColor:['white']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'重点人口'},
                {value:310, name:'刑侦勘察'},
                {value:234, name:'刑侦重点'},
                {value:135, name:'吸毒人口'},
                {value:1548, name:'人口调查'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);