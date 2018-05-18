import axios from 'axios'
import echarts from 'echarts'
import sellMoneyData from '../json/sell_money.json'
export default function getLine() {
    var amount = [];
    var N_person = [];
    var da = [];
    var sellMoney = (result) => {
        var res = result;
        var re = [];
        for (let i in res) {
            amount.push(parseInt((res[i].amount).replace(",", "")));
            N_person.push(res[i].N_person);
            da.push(res[i].date);
        }
        re.push({
            amount: amount,
            N_person: N_person,
            da: da
        })
        return re;
    }

    const apiSellMoney = axios.get(`url`).then(response => {
        sellMoney(response.data);
    }).catch((err) => {
        // axios not work
        sellMoney(sellMoneyData);
    })
  return {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: '运营KPI',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: da
        },
        yAxis: [
            {
                type: 'value',
                name: '销售额',
                min: 0,
                axisLabel: {
                    formatter: '{value} '
                }
            },
            {
                type: 'value',
                name: '客单数',
                axisLabel: {
                    formatter: '{value} '
                }
            }
        ],
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        },
        {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:'销售额',
                type:'bar',
                smooth:true,
                itemStyle: {
                    normal: {
                        color: 'rgb(55, 70, 131)'
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    }
                },
                data: amount
            },
            {
                name:'客单数',
                type:'line',
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: 'rgb(255, 70, 131)'
                    }
                },
                data: N_person
            },
        ]
  };
}
