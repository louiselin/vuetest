import axios from 'axios'
import echarts from 'echarts'
import weather from '../json/weather.json'
export default function getweather() {

    var Low_Temp = [];
    var High_Temp = [];
    var da = [];
    var weatherData = (result) => {
        var res = result;
        var re = [];
        for (let i in res) {
          Low_Temp.push(res[i].Low_Temp);
          High_Temp.push(res[i].High_Temp);
          da.push(res[i].Date);
        }
        re.push({
          Low_Temp: Low_Temp,
          High_Temp: High_Temp,
          da: da
        })
        return re;
    }
    const apiClient = axios.get(`url`).then(response => {
        weatherData(response.data);
    }).catch((err) => {
        weatherData(weather);
    })


  return {
      title: {
          left: 'center',
          text: '高低气温'
      },
      tooltip: {
          trigger: 'axis'
      },
      // legend: {
      //     data:['最高气温','最低气温']
      // },
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      // toolbox: {
      //     feature: {
      //         saveAsImage: {}
      //     }
      // },
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: da
      },
      yAxis: {
          type: 'value',
          axisLabel: {
              formatter: '{value} C'
          }
      },
      series: [
          {
              name:'最高气温',
              type:'line',
              data: High_Temp,
              itemStyle: {
                  normal: {
                      color: 'rgb(255, 70, 131)'
                  }
              },
          },
          {
              name:'最低气温',
              type:'line',
              data: Low_Temp,
              itemStyle: {
                  normal: {
                      color: 'rgb(55, 70, 131)'
                  }
              },
          },
      ]
  }
}
