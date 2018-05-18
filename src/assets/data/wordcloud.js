import axios from 'axios'
import wordcloudimg from '../../assets/cloud.png'
export default function getWordCloud() {
  
    let data = [];
    let keywords = {
        "visualMap": 2199,
        "continuous": 288,
        "contoller": 20,
        "series": 770,
        "gauge": 2311,
        "detail": 206,
        "piecewise": 885,
        "textStyle": 2294,
        "markPoint": 8574,
        "pie": 8929,
        "roseType": 69,
        "label": 7517,
        "emphasis": 2053,
        "yAxis": 7299,
        "name": 5418,
        "type": 2905,
        "gridIndex": 146,
        "normal": 9487,
        "itemStyle": 3837,
        "min": 500,
        "silent": 744,
        "animation": 840,
        "offsetCenter": 32,
        "inverse": 706,
        "borderColor": 812,
        "markLine": 6578,
        "line": 6970,
        "radiusAxis": 704,
        "radar": 5964,
        "data": 679,
        "dataZoom": 4347,
        "tooltip": 3420,
        "toolbox": 5222,
        "geo": 6904,
        "parallelAxis": 29,
        "parallel": 319,
        "max": 393,
        "bar": 3066,
        "heatmap": 110,
        "map": 285,
        "animationDuration": 425,
        "animationDelay": 431,
        "splitNumber": 175,
        "axisLine": 2738,
        "lineStyle": 9601,
        "splitLine": 133,
        "axisTick": 831,
        "axisLabel": 7516,
        "pointer": 90,
        "color": 3426,
        "title": 8497,
        "formatter": 5214,
        "slider": 236,
        "legend": 6514,
        "grid": 8516,
        "smooth": 295,
        "smoothMonotone": 96,
        "sampling": 57,
        "feature": 2815,
        "saveAsImage": 616,
        "polar": 279,
        "calculable": 79,
        "backgroundColor": 419,
        "excludeComponents": 30,
        "show": 620,
        "text": 592,
        "icon": 782,
        "dimension": 78,
        "inRange": 60,
        "animationEasing": 983,
        "animationDurationUpdate": 259,
        "animationDelayUpdate": 236,
        "animationEasingUpdate": 213,
        "xAxis": 9459,
        "angleAxis": 469,
        "showTitle": 84,
        "dataView": 754,
        "restore": 32,
        "timeline": 104,
        "range": 77,
        "value": 732,
        "precision": 78,
        "target": 433,
        "zlevel": 361,
        "symbol": 718,
        "interval": 964,
        "symbolSize": 300,
        "showSymbol": 247,
        "inside": 913,
        "xAxisIndex": 843,
        "orient": 205,
        "boundaryGap": 73,
        "nameGap": 896,
        "zoomLock": 71,
        "hoverAnimation": 307,
        "legendHoverLink": 3553,
        "stack": 2907,
        "throttle": 466,
        "connectNulls": 897,
        "clipOverflow": 826,
        "startValue": 551,
        "minInterval": 3292,
        "opacity": 3097,
        "splitArea": 4775,
        "filterMode": 635,
        "end": 409,
        "left": 6475,
        "funnel": 2238,
        "lines": 6403,
        "baseline": 431,
        "align": 2608,
        "coord": 897,
        "nameTextStyle": 7477,
        "width": 4338,
        "shadowBlur": 4493,
        "effect": 929,
        "period": 225,
        "areaColor": 631,
        "borderWidth": 3654,
        "nameLocation": 4418,
        "position": 11723,
        "containLabel": 1701,
        "scatter": 10718,
        "areaStyle": 5310,
        "scale": 3859,
        "pieces": 414,
        "categories": 1000,
        "selectedMode": 3825,
        "itemSymbol": 273,
        "effectScatter": 7147,
        "fontStyle": 3376,
        "fontSize": 3386,
        "margin": 1034,
        "iconStyle": 2257,
        "link": 1366,
        "axisPointer": 5245,
        "showDelay": 896,
        "graph": 22194,
        "subtext": 1442,
      };
    for (let name in keywords) {
        data.push({
            name: name,
            value: keywords[name]
        })
    }

    var maskImage = new Image();
    maskImage.src = wordcloudimg;
    return {
        title: {
            left: 'center',
            text: '热销商品文字云',
        },
        tooltip: {},
        series: [{
            type: 'wordCloud',
            // sizeRange: [12, 50],
            // rotationRange: [-90, 90],
            rotationStep: 1,
            width: '100%',
            height: '80%',
            gridSize: 2,
            shape: 'pentagon',
            maskImage: maskImage,
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    color: 'red'
                }
            },
            data: data
        }],
        animationDuration: 500
    };
}
