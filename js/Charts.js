
// 表一
var myChart = echarts.init(document.getElementById('leftFirst'));
// app.title = '坐标轴刻度与标签对齐';

option = {
    title: {
        text: 'BAR CHART',
        x:'20px',
        y:'20px'
    },
    color: ['#b1d1ee'],
    tooltip : {
        trigger: 'axis',
        // show:true,
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
            data : ['1', '2', '3', '4', '5', '6'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            min:0,
            max:30,
            type : 'value'
        }
    ],
    
    series : [
        {
            type:'bar',
            barWidth: '60%',
            data:[11, 15, 25, 24, 13, 18]
        }
    ]
};
myChart.setOption(option);

// 表二
var myChart1 = echarts.init(document.getElementById('rightFirst'));
// app.title = '坐标轴刻度与标签对齐';
option = {
    title: {
        text: 'LINE CHART',
        x:'20px',
        y:'20px'
    },
    color: ['#2bb3f0'],
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6']
    },
    yAxis: {
        min:10.0,
        max:27.5,
        type: 'value'
    },
    series: [{
        data: [11, 15, 25, 24, 13, 18],
        type: 'line'
    }]
};

myChart1.setOption(option);


// 表三
var myChart2 = echarts.init(document.getElementById('bottomLeft'));
option = {
    title : {
        text: 'PIE CHART',
        // subtext: '纯属虚构',
        x:'20px',
        y:'20px'
    },
    color:['#3fb7ee','#3b8dd5','#00acac'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
        // orient: 'vertical',
        // left: 'left',
        // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            // name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:33, name:'Mobile'},
                {value:58, name:'App'},
                {value:8, name:'Other'},
            ]
            // itemStyle: {
            //     emphasis: {
            //         shadowBlur: 10,
            //         shadowOffsetX: 0,
            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //     }
            // }
        }
    ]
};
myChart2.setOption(option);
// 表四
var myChart3 = echarts.init(document.getElementById('bottomRight'));

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

option = {
    title: {
        text: 'LIVE CHART',
    },
    color:['#03a9f3'],
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        // min:0,
        // max:100,
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart3.setOption({
        series: [{
            data: data
        }]
    });
}, 100);



myChart3.setOption(option);


$(window).resize(function(){
    myChart.resize();
    myChart1.resize();
    myChart2.resize();
    myChart3.resize()
})


