import axios from 'axios'
import echarts from 'echarts'
export default function getQuota_month() {

  var data = [], data2 = [], data3 = [];
  for (var i = 1; i < 11; i++) {
    var n = Math.floor((Math.random()*60000) + 1);
    var n2 = Math.floor((Math.random()*50000) + 1);
    var n3 = Math.floor((Math.random()*40000) + 1);
      data.push(n);
      data2.push(n2);
      data3.push(n3);
  }

  return {
           baseOption: {
               timeline: {
                   loop: true,
                   axisType: 'category',
                   show: true,
                   autoPlay: true,
                   playInterval: 1500,
                   data: ['1990', '1993', '1995']
               },
               tooltip: {
               },
               xAxis: [{
                   type: 'value',
                   name: '万美元',
                   max: 60000
               },],
               yAxis: [{
                   type: 'category',
                   inverse: true,
               }],
               series: [
                   {
                       type: 'bar',

                   },
               ]
           },


         //变化数据写这
           options: [
               //1990
               {
                   yAxis: [{
                       data: ['卢森堡','瑞士', '日本', '丹麦','挪威','德国', '澳大利亚','瑞典', '荷兰',  '(126)中国']
                   }],
                   title: {
                       left: 'center',
                       text: '1990年统计值'
                   },
                   series: [
                       {
                           data: data,
                           itemStyle: {
                               normal: {
                                   color: 'rgb(255, 70, 131)'
                               }
                           },
                       },

                   ]
               },
               //1993
               {
                   yAxis: [{
                       data: ['卢森堡','瑞士', '日本', '丹麦','挪威','德国', '澳大利亚','瑞典', '荷兰',  '(126)中国']
                   }],
                   title: {
                       left: 'center',
                       text: '1993年统计值'
                   },
                   series: [
                       {
                           data: data2,
                           itemStyle: {
                               normal: {
                                   color: 'rgb(255, 70, 131)'
                               }
                           },
                       },
                   ]
               },
               //1995
               {
                   yAxis: [{
                       data: ['卢森堡','瑞士', '日本', '丹麦','挪威','德国', '澳大利亚','瑞典', '荷兰',  '(126)中国']
                   }],
                   title: {
                       left: 'center',
                       text: '1995年统计值'
                   },
                   series: [
                       {
                           data: data3,
                           itemStyle: {
                               normal: {
                                   color: 'rgb(255, 70, 131)'
                               }
                           },
                       },
                   ]
               },
           ]
  }
}
