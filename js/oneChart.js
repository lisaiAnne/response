var charts1= echarts.init(document.getElementById('oneChart')); 
option = {
    color:['#c1232b','#27727b','#fcce10','#e87c25','#b5c334','#fe8463'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        left:"4%",
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','搜索引擎'],
        textStyle:{
            color:'white'
        },
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
charts1.setOption(option);

