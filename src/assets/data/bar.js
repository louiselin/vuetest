import axios from 'axios';
export default function getData() {

  let cata = [], num = [];
  axios.get(`http://api.icndb.com/jokes/random/10`)
  .then(response => {
    let res = response.data.value;
    for (let i in res) {
      cata.push(res[i].joke);
      num.push(res[i].id);
    }
  })
  .catch(e => {
    this.errors.push(e)
  })

  return {
    title: {
      left: 'center',
      text: "历史销售额资料"
    },
    tooltip: {},
    legend: {
      data: ["銷量"]
    },
    xAxis: {
      data: cata
    },
    yAxis: {
      axisLabel: { show: true }
    },
    series: [
      {
        type: "bar",
        data: num
      }
    ],
    animationDuration: 2000
  };
}
