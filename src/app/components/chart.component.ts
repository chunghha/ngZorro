import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent {
  data = [
    { year: '2011', value: 15468 },
    { year: '2012', value: 16100 },
    { year: '2013', value: 15900 },
    { year: '2014', value: 17409 },
    { year: '2015', value: 17000 },
    { year: '2016', value: 31056 },
    { year: '2017', value: 31982 },
    { year: '2018', value: 32040 },
    { year: '2019', value: 33233 }
  ];
  options = {
    height: 450,
    forceFit: true
  };

  ready(chart: any) {
    chart.source(this.data, {
      year: {
        range: [0, 1]
      },
      value: {
        min: 10000
      }
    });
    chart.axis('value', {
      label: {
        formatter: val => {
          return (val / 10000).toFixed(1) + 'k';
        }
      }
    });
    chart.tooltip({
      crosshairs: {
        type: 'line'
      }
    });
    chart.area().position('year*value');
    chart
      .line()
      .position('year*value')
      .size(2);
    chart.render();
  }

  destroy() {
    console.log('area destroy');
  }
}
