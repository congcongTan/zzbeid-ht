$(function(){$(".count-to").countTo(),$(".sales-count-to").countTo({formatter:function(a,t){return"$"+a.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g," ").replace(".",",")}}),initRealTimeChart(),initDonutChart(),initSparkline()});var realtime="on";function initRealTimeChart(){var t=$.plot("#real_time_chart",[getRandomData()],{series:{shadowSize:0,color:"rgb(0, 188, 212)"},grid:{borderColor:"#f3f3f3",borderWidth:1,tickColor:"#f3f3f3"},lines:{fill:!0},yaxis:{min:0,max:100},xaxis:{min:0,max:100}});function e(){var a;t.setData([getRandomData()]),t.draw(),"on"===realtime?a=setTimeout(e,320):clearTimeout(a)}e(),$("#realtime").on("change",function(){realtime=this.checked?"on":"off",e()})}function initSparkline(){$(".sparkline").each(function(){var a=$(this);a.sparkline("html",a.data())})}function initDonutChart(){Morris.Donut({element:"donut_chart",data:[{label:"Chrome",value:37},{label:"Firefox",value:30},{label:"Safari",value:18},{label:"Opera",value:12},{label:"Other",value:3}],colors:["rgb(233, 30, 99)","rgb(0, 188, 212)","rgb(255, 152, 0)","rgb(0, 150, 136)","rgb(96, 125, 139)"],formatter:function(a){return a+"%"}})}var data=[],totalPoints=110;function getRandomData(){for(0<data.length&&(data=data.slice(1));data.length<totalPoints;){var a=(0<data.length?data[data.length-1]:50)+10*Math.random()-5;a<0?a=0:100<a&&(a=100),data.push(a)}for(var t=[],e=0;e<data.length;++e)t.push([e,data[e]]);return t}