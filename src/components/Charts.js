
import React from "react";
import Chartist from "react-chartist";
import ChartistTooltip from 'chartist-plugin-tooltips-updated';
import Legend from "chartist-plugin-legend";


export const SalesValueChart = (props) => {

  // const tmp_data = {
  //   labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
  //   series: [
  //       { "name": "Money A", "data": [60000, 40000, 80000, 70000] },
  //       { "name": "Money B", "data": [40000, 30000, 70000, 65000] },
  //       { "name": "Money C", "data": [8000, 3000, 10000, 6000] }
  //   ],
  // };

  var data = {
    labels: props.data.labels,
    series: 
    [
      { 'name': "humidity", "data":  props.data.series && props.data.series.length > 0 ? props.data.series[0].data : [] },
      { "name": "temperature", "data": props.data.series && props.data.series.length > 0 ? props.data.series[1].data : [] },
      { "name": "sensorNode", "data": props.data.series && props.data.series.length > 0 ? props.data.series[2].data : [] },
      { "name": "lpg", "data": props.data.series && props.data.series.length > 0 ? props.data.series[3].data : [] },
      { "name": "dust", "data": props.data.series && props.data.series.length > 0 ? props.data.series[4].data : [] },
      { "name": "co2", "data": props.data.series && props.data.series.length > 0 ? props.data.series[5].data : [] },
      { "name": "co", "data": props.data.series && props.data.series.length > 0 ? props.data.series[6].data : [] },
      { "name": "ch4", "data": props.data.series && props.data.series.length > 0 ? props.data.series[7].data : [] }
    ] 
  }

  console.log(data.series[0].name )


  const options = {
    low: 0,
    showArea: true,
    fullWidth: true,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip(),
    Legend()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-double-octave" />
  );
};

export const SalesValueChartphone = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [[1, 2, 2, 3, 3, 4, 3]]
  };

  const options = {
    low: 0,
    showArea: true,
    fullWidth: false,
    axisX: {
      position: 'end',
      showGrid: true
    },
    axisY: {
      // On the y-axis start means left and end means right
      showGrid: false,
      showLabel: false,
      labelInterpolationFnc: value => `$${value / 1}k`
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Line" className="ct-series-g ct-major-tenth" />
  );
};

export const CircleChart = (props) => {
  const { series = [], donutWidth = 20 } = props;
  const sum = (a, b) => a + b;

  const options = {
    low: 0,
    high: 8,
    donutWidth,
    donut: true,
    donutSolid: true,
    fullWidth: false,
    showLabel: false,
    labelInterpolationFnc: value => `${Math.round(value / series.reduce(sum) * 100)}%`,
  }

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={{ series }} options={{...options, plugins}} type="Pie" className="ct-golden-section" />
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;
  const data = { labels, series };

  const options = {
    low: 0,
    showArea: true,
    axisX: {
      position: 'end'
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  };

  const plugins = [
    ChartistTooltip()
  ]

  return (
    <Chartist data={data} options={{...options, plugins}} type="Bar" className={chartClassName} />
  );
};
