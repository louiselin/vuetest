import axios from 'axios';
export default function getPiemember() {
  var colors = ['#FD6969', '#EFC87C', '#38E7A7', '#2396FC'];
  return {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // color: colors,
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['70s','80s','90s','未知']
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
                    formatter: 'VIP会员画像\r\n年代',
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
                {value:335, name:'80s'},
                {value:310, name:'70s'},
                {value:234, name:'未知'},
                {value:135, name:'90s'},
            ]
        }
    ]
  };
}
