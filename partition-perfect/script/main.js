var myChart = echarts.init(document.getElementById('echarts-main'));

        // 指定图表的配置项和数据
option1 = {
    title: {
        text: '人流量'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['超过两小时用户','支付行为用户']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'支付行为用户',
            type:'line',
			
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'超过两小时用户',
            type:'line',
			
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};
   // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);			
		myChart.on('click', function (params) {
			//window.open('https://www.baidu.com');
			//window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
			showPartiton(2);
			//myChart.setOption(option2);		
		});				

		//myChart.on(ecConfig.EVENT.CLICK, eConsole);
