/**
 * Created by 12581 on 2017/12/20.
 */
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
//var labelRight = {
//    normal: { position: 'right' }
//};
//
//var labelRight = {
//    normal: { position: 'right' }
//};

var option = {
    title : {
        //x: 'center',
        text: '米奇幼儿园考勤图',
        textStyle: {
            //fontWeight: "normal",              //标题颜色
            color: "white"
        },
        subtext: '纯属虚构',
        subtextStyle:{
            color: "white"
        }
    },
    tooltip : {
        trigger: 'axis'
        //trigger: 'item'
    },
    legend: {
        data:['迟到','上班人数','请假']
    },
    toolbox: {
        show : true,
        feature : {
            //dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['星期一','星期二','星期三','星期四','星期五']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'迟到',
            type:'bar',
            data:[1, 0, 2, 1, 0],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            itemStyle:{
                normal:{
                    color:'rgba(168, 73, 69, 0.8)'
                }
            },

            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'上班人数',
            type:'bar',
            data:[9, 8, 9, 9, 7],
            markPoint : {
                data : [
                    {name : '年最高', value : 9, xAxis: 3, yAxis: 9},
                    {name : '年最低', value : 7, xAxis: 5, yAxis: 7}
                ]
            },
            itemStyle:{
                normal:{
                    color:'rgba(97, 132, 77, 0.68)'
                }
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'请假',
            type:'bar',
            data:[0, 1, 0, 0, 2],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            itemStyle:{
                normal:{
                    color:' rgba(179, 123, 67, 0.74)'
                }
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
    ]
};

//var oo={
//    toolbox: {
//        show : true,
//        feature : {
//            dataView : {show: true, readOnly: false},
//            magicType : {show: true, type: ['line', 'bar']},
//            restore : {show: true},
//            saveAsImage : {show: true}
//    }
//    }
//};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);


