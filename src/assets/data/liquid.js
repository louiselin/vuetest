import axios from 'axios';
export default function getLiquid() {
  return {
    title: {
        left: 'center',
        text: '基本水球图'
    },
    series: [{
        type: 'liquidFill',
        data: [0.41037, 0.24, 0.23, 0.45],
        itemStyle: {
                opacity: 0.6
        },
        emphasis: {
            itemStyle: {
                opacity: 0.9
            }
        },
        shape: 'container',
        outline: {
            show: false
        }
    }]
  };
}
