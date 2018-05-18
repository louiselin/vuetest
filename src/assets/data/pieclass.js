import axios from 'axios';
export default function getPieclass() {
  var colors = ['#FD6969', '#EFC87C', '#38E7A7', '#2396FC', '#00897B', '#0288D1'];
  return {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // color: colors,
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['员1','师1','实习生','师3','未知','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    position: 'center',
                    formatter: 'VIP会员画像\r\n师级',
                    textStyle: {
                      color: 'black',
                      fontSize: 24
                    }
                  },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            data:[
                {value:1, name:'员1'},
                {value:1, name:'师3'},
                {value:2, name:'未知'},
                {value:3, name:'其他'},
                {value:5, name:'师1'},
                {value:13, name:'实习生'},
            ]
        }
    ]
  };
}
