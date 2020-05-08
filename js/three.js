// 16个列表弹窗
let chartName = '$chart';
let $chartArr = [];
let currentChartIndex = 0;
let alertChart = echarts.init(document.querySelector('.alert-academy>div'))
let dataObj = [
    {
        url: 'http://180.76.137.74/WebService.asmx/getjzhbxss',
        numberName: 'JZHBXSS',
        title: '居住湖北学生数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getZDRSQ',
        numberName: 'ZDRSQ',
        title: '重点人群数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getYYQJCRS',
        numberName: 'YYQJCRS',
        title: '疫区接触人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getWHCRRS',
        numberName: 'WHCRRS',
        title: '出入武汉人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getSWSNRS',
        numberName: 'SWSNRS',
        title: '市外省内人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getSWFHBRS',
        numberName: 'SWFHBRS',
        title: '省外非湖北人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getQZRS',
        numberName: 'QZRS',
        title: '确诊人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getNGAQFXXSS',
        numberName: 'NGAQFXXSS',
        title: '能够按期返校学生数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getJZWHXSRS',
        numberName: 'JZWHXSRS',
        title: '居住武汉学生人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getJZGLRS',
        numberName: 'JZGLRS',
        title: '集中隔离人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getJWXSS',
        numberName: 'JWXSS',
        title: '境外学生数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getJWXSFHRS',
        numberName: 'JWXSFHRS',
        title: '境外学生返回人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getJJGLRS',
        numberName: 'JJGLRS',
        title: '居家隔离人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getHBCRES',
        numberName: 'HBCRES',
        title: '湖北出入人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getFHQDRS',
        numberName: 'FHQDRS',
        title: '返回青岛人数'
    },
    {
        url: 'http://180.76.137.74/WebService.asmx/getDRWCRS',
        numberName: 'DRWCRS',
        title: '当日外出人数'
    },
]
let option = {
    backgroundColor: '#052937',
    title: {
        text: '标题',
        top: 5,
        left: 'center',
        textStyle: {
            color: 'white',
            fontSize: 16
        }
    },
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#6a7985'
			}
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: {
		left: '5%',
		right: '10%',
		bottom: '20%',
		top:'20%',
		containLabel: true,
	},
	xAxis: [
		{
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: [],
			axisLabel: { //坐标轴刻度标签的相关设置。
		//		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: 'white',
					fontStyle: 'normal',
					fontSize: 12,
				},
				rotate:-20,
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: 'white',
					fontStyle: 'normal',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
   dataZoom: [{
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: 5,
        
        "start": 10,
        "end": 35,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#25a0ff",
        },
        textStyle:{
            color:"#25a0ff",
        },
        fillerColor:"rgba(37,160,255,0.4)",
        borderColor: "#25a0ff",
    }, {
        type: "inside",
        show: true,
        height: 12,
        start: 1,
        end: 35
    }],
    series : []
}
let alertOption = {
    title: {
        text: '',
        top: 5,
        left: 'center',
        textStyle: {
            color: 'white',
            fontSize: 16
        }
    },
	tooltip: { //提示框组件
		trigger: 'axis',
		formatter: '{b}<br />{a0}: {c0}',
		axisPointer: {
			type: 'shadow',
			label: {
				backgroundColor: '#6a7985'
			}
		},
		textStyle: {
			color: '#fff',
			fontStyle: 'normal',
			fontFamily: '微软雅黑',
			fontSize: 12,
		}
	},
	grid: {
		left: '5%',
		right: '10%',
		bottom: '10%',
		top:'20%',
		containLabel: true,
	},
	xAxis: [
		{
			type: 'category',
		//	boundaryGap: true,//坐标轴两边留白
			data: ['土木学院', '机车学院', '建筑学院', '环境学院', '信控学院', '理学院', '管理学院', '商学院', '人外学院', '艺术学院', '高职学院','研究生处'],
			axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
			//	margin:15,
				textStyle: {
					color: 'white',
					fontStyle: 'normal',
					fontSize: 12,
				},
				rotate:-20,
			},
			axisTick:{//坐标轴刻度相关设置。
				show: false,
			},
			axisLine:{//坐标轴轴线相关设置
				lineStyle:{
					color:'#fff',
					opacity:0.2
				}
			},
			splitLine: { //坐标轴在 grid 区域中的分隔线。
				show: false,
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			splitNumber: 5,
			axisLabel: {
				textStyle: {
					color: 'white',
					fontStyle: 'normal',
					fontSize: 12,
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: ['#fff'],
					opacity:0.06
				}
			}

		}
	],
    series : []
}
alertChart.setOption(alertOption)
// 不同接口数据

// 日期数组
let dates = [];
new Promise(function(resolve, reject){
    $.ajax({
        url: 'http://180.76.137.74/WebService.asmx/gettime',
        dataType: 'json',
        success: function(res){
            for(let item of res.ds){
                dates.push(item.date)
            }
            resolve()
        }
    })
}).then((res) => {
    console.log(dates)
    initOption()
})
document.querySelector('.alert-academy .close-alert').onclick = function(){
    document.querySelector('.alert-academy').style.visibility = 'hidden';
}
function getDataByDate(date, type, title){
    document.querySelector('.alert-academy').style.visibility = 'visible';
    $.ajax({
        url: 'http://180.76.137.74/WebService.asmx/getxy',
        type: 'post',
        dataType: 'json',
        data: {
            datecould: date,
            titles: type
        },
        success: function(res){
            console.log(res)
            let data = [];
            for(let item of res.ds){
                data.push(item[type])
            }
            alertOption.title.text = title
            alertOption.series[0] = {
                name: '人数',
                type:'bar',
                data: data,
                barWidth: 10,
                barGap:0,//柱间距离
                    itemStyle: {
                    normal: {
                        show: true,
                        color: '#ffc600',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                }
            }
            console.log(data)
            alertChart.setOption(alertOption)
        }
    })
}
function initOption(){
    option.xAxis[0].data = dates;
    for(let i = 0 ; i < 16 ; i ++){
        $chartArr.push(
            echarts.init(document.querySelector(`.content:nth-child(3)>li:nth-child(${i + 1})`))
        )
        $.ajax({
            url: dataObj[i].url,
            dataType: 'json',
            success: function(res){
                console.log(res)
                let seriesData = []
                for(let item of res.ds){
                    seriesData.push(item[dataObj[i].numberName])
                }
                option.title.text = dataObj[i].title
                option.series[0] = {
                    name:dataObj[i].title,
                    type:'bar',
                    data: seriesData,
                    barWidth: 10,
                    barGap:0,//柱间距离
                     itemStyle: {
                        normal: {
                            show: true,
                            color: '#ffc600',
                            barBorderRadius: 50,
                            borderWidth: 0,
                        }
                    }
                }
                $chartArr[i].setOption(option)
                $chartArr[i].on('click', function(data){
                    console.log(data);
                    let date = data.name;
                    let type = dataObj[i].numberName;
                    getDataByDate(date, type, date + '各学院' + dataObj[i].title)
                })
            }
        })
        window.addEventListener('resize', function(){
            $chartArr[i].resize()
        })
    }
}
