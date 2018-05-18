import axios from 'axios'
import echarts from 'echarts'
import weeknoData from '../json/month.json'
export default function getWeekno() {

    var percent_vip = [];
    var vip_amount = [];
    var amount = [];
    var month = [];
    var monthData = (result) => {
        var res = result;
        var re = [];
        for (let i in res) {
        percent_vip.push(parseFloat((res[i].percent_vip).replace("%", "")));
        vip_amount.push(parseInt((res[i].vip_amount).replace(",", "")));
        amount.push(parseInt((res[i].amount).replace(",", "")));
        month.push(res[i].date);
        }
        re.push({
        percent_vip: percent_vip,
        vip_amount: vip_amount,
        amount: amount,
        month: month
        })
        return re;
    }
    
    const apiWeekno = axios.get(`url`).then(response => {
        monthData(response.data);
    }).catch((err) => {
        // axios not work
        monthData(weeknoData);
    })
  
    return {
      title: {
          left: 'center',
          text: '销售额分析'
      },
      tooltip: {
          trigger: 'axis',
      },
      xAxis: [
          {
              type: 'category',
              data: month,
              axisPointer: {
                  type: 'shadow'
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              name: '销售额',
              axisLabel: {
                  formatter: '{value} '
              }
          },
          {
              type: 'value',
              name: 'VIP销售占比',
              axisLabel: {
                  formatter: '{value} %'
              }
          }
      ],
      series: [
          {
              name:'销售额',
              type:'bar',
              data: amount,
              itemStyle: {
                  normal: {
                      color: 'rgb(55, 70, 131)'
                  }
              },
          },
          {
              name:'VIP销售额',
              type:'bar',
              data: vip_amount,
              itemStyle: {
                  normal: {
                      color: 'rgb(255, 70, 131)'
                  }
              },
          },
          {
              name:'VIP占比',
              type:'line',
              yAxisIndex: 1,
              data: percent_vip
          }
      ]
  }
}
