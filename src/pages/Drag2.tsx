import React from "react";
import { Card } from 'antd';
import { Rnd } from "react-rnd";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts/lib/echarts";
import $ from '../../public/jquery'
import styles from './Welcome.less'

const data1 = {
  backgroundColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    offset: 0,
    color: '#c86589'
  },
    {
      offset: 1,
      color: '#06a7ff'
    }
  ], false),
  title: {
    text: "OCTOBER 2015",
    left: "center",
    bottom: "5%",
    textStyle: {
      color: "#fff",
      fontSize: 16
    }
  },
  grid: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    axisLabel: {
      margin: 30,
      color: '#ffffff63'
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: true,
      length: 25,
      lineStyle: {
        color: "#ffffff1f"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ffffff1f'
      }
    }
  },
  yAxis: [{
    type: 'value',
    position: 'right',
    axisLabel: {
      margin: 20,
      color: '#ffffff63'
    },

    axisTick: {
      show: true,
      length: 15,
      lineStyle: {
        color: "#ffffff1f",
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ffffff1f'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#fff',
        width: 2
      }
    }
  }],
  series: [{
    name: '注册总量',
    type: 'line',
    smooth: true, //是否平滑曲线显示
    showAllSymbol: true,
    symbol: 'circle',
    symbolSize: 6,
    lineStyle: {
      normal: {
        color: "#fff", // 线条颜色
      },
    },
    label: {
      show: true,
      position: 'top',
      textStyle: {
        color: '#fff',
      }
    },
    itemStyle: {
      color: "red",
      borderColor: "#fff",
      borderWidth: 3
    },
    tooltip: {
      show: false
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#eb64fb'
        },
          {
            offset: 1,
            color: '#3fbbff0d'
          }
        ], false),
      }
    },
    data: [393, 438, 485, 631, 689, 824, 987, 1000, 1100, 1200]
  }]
};
const data2 = {
  title : {
    text: '大唐热源占比',
    x:'center'
  },
  tooltip : {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color: ['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1', '#7DA6FF', '#4AC312', '#FB8F14', '#F148E7'],
  legend: {
    orient: 'vertical',
    x: 'left',
    left: 10,
    //right: 10,
    top: 20,
    //bottom: 20,
    data: ['二电一期','二电二期','二电三期','二电南线','大唐一期','大唐二期']
  },
  series : [
    {
      name: '大唐热源占比',
      type: 'pie',
      radius : '55%',
      center: ['50%', '60%'],
      label: {
        normal: {
          formatter: '{b|{b}：}{c}   {per|{d}%} ',
          rich: {
            per: {
              color: '#eee',
              backgroundColor: '#334455',
              padding: [2, 4],
              borderRadius: 13
            }
          }
        }
      },
      data:[
        {value:335, name:'二电一期',selected:true},
        {value:310, name:'二电二期',selected:true},
        {value:234, name:'二电三期',selected:true},
        {value:135, name:'二电南线',selected:true},
        {value:154, name:'大唐一期',selected:true},
        {value:148, name:'大唐二期',selected:true}
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      labelLine: {
        normal: {
          length: 5,
          length2: 1,
          smooth: true,
        }
      },
    }
  ]
};
export default class Drag1 extends React.Component {

  static defaultProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 12
  };

  componentDidMount(): void {
    this.initMap();
  }

  initMap =()=>{
    const myChart = echarts.init(document.getElementById('map'));
    let option = {};
    let data = [];
    $.getJSON('/gdMap.json', function(geoJson: Object): void {
      echarts.registerMap('广东', geoJson);
      data = geoJson.features.map((item) => {
        return {
          value: (Math.random() * 1000).toFixed(2),
          name: item.properties.name
        }
      });
      option = {
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0)',
          trigger: 'item',
        },
        legend: {
          show: false,
        },
        series: [{
          tooltip: {
            trigger: 'item',
            formatter: function(item: Object) {
              var tipHtml = '';
              tipHtml = '<div style="background:#fff;border-radius:10px;padding-top:10px;box-shadow:0 0 10px #666">' +
                '<div style="color:#fff;height:20px;border-radius:6px;font-size:12px;line-height:20px;background-color:#5861a2;text-align:center;margin:0 2px;">' + item.data.name + '</div>' +
                '<div style="text-align:center;color:#494949;padding:8px 6px">' +
                '<span style="font-size:18px;font-weight:bold;">' + item.data.value + ' ' + '</span>' +
                '</div>' + '</div>';
              return tipHtml;
            }
          },
          name: '广东省数据',
          type: 'map',
          map: '广东', // 自定义扩展图表类型
          aspectScale: 1,
          zoom: 1, //缩放
          showLegendSymbol: false,
          label: {
            show: true,
            color: '#fff',
            fontSize: 10
          },
          itemStyle: {
            areaColor: '#0E95F1',
            borderColor: '#e9e9e9',
            borderWidth: 1,
            shadowColor: '#0E95F1',
            shadowBlur: 20,
          },
          emphasis: {
            label: {
              show: true,
              color: '#fff',
              fontSize: 10
            },
            itemStyle: {
              areaColor: '#FFD181',
              borderColor: '#fff',
              borderWidth: 1
            }
          },
          layoutCenter: ['50%', '50%'],
          layoutSize: '160%',
          markPoint: {
            symbol: 'none'
          },
          data: data,
        }],
      };
      myChart.setOption(option);
      showTips('广州市');
    });
  // 默认鼠标移出canvas后显示广州的tooltip信息
    myChart.on("globalout", () => {
      setTimeout(() => {
        showTips('广州市')
      }, 5000)
    });

    function showTips(name: string) {
      data.forEach((item, i) => {
        if (item.name.includes(name)) {
          myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: i
          });
          myChart.dispatchAction({
            type: 'mapSelect',
            seriesIndex: 0,
            dataIndex: i
          });
        }
      })
    }
    this.setState({
      myChart
    })
  };

  render() {
    return (
      <Card className={styles.drag2card}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative"
          }}
        >
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: 500,
              height: 200
            }}
            overflow="hidden"
            bounds="parent"
            disableDragging={false}
            onDragStop={()=> this.state.myChart.resize()}
            onResizeStop={()=> this.state.myChart.resize()}
          >
            <div id='map' style={{height:'100%',width:'100%',border:'1px solid #e8e8e8'}} />
          </Rnd>
          <Rnd
            default={{
              x: 520,
              y: 0,
              width: 500,
              height: 200
            }}
            overflow="hidden"
            bounds="parent"
            disableDragging={false}
          >
            <ReactEcharts option={data2} style={{height:'100%',width:'100%',border:'1px solid #e8e8e8'}} />
          </Rnd>
          <Rnd
            default={{
              x: 0,
              y: 220,
              width: 500,
              height: 200
            }}
            overflow="hidden"
            bounds="parent"
            disableDragging={false}
          >
            <ReactEcharts option={data1} style={{height:'100%',width:'100%',border:'1px solid #e8e8e8'}} />
          </Rnd>
        </div>
      </Card>
    )
  }
}
