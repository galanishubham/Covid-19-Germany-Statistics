import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { Cases, Deaths, Recovered } from 'src/app/store/model/appData.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.scss'],
})
export class GraphDataComponent implements OnInit, OnChanges {
  chart!: Chart;
  @Input() ChartData: any;
  public cases: number[] = [];
  public deaths: number[] = [];
  public recovered: number[] = [];
  public dates: Date[] = [];

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('ChartData' in changes) {
      this.createChart();
    }
  }

  createArrayForChart() {
    if (this.ChartData) {
      this.cases = this.ChartData.cases.map((cases: Cases) => cases.cases);
      this.deaths = this.ChartData.deaths.map((deaths: Deaths) => {
        return deaths.deaths;
      });
      this.recovered = this.ChartData.recovered.map((recovered: Recovered) => {
        return recovered.recovered;
      });
      this.dates = this.ChartData.cases.map((cases: Cases) => {
        return this.datePipe.transform(cases.date, 'dd.MM.yyyy');
      });
    }
  }

  createChart() {
    this.createArrayForChart();

    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.dates.reverse(),
        datasets: [
          {
            data: this.cases.reverse(),
            label: 'Cases',
            borderColor: '#039be5',
            fill: false,
          },
          {
            data: this.deaths.reverse(),
            label: 'Deaths',
            borderColor: '#ff4d4d',
            fill: false,
          },
          {
            data: this.recovered.reverse(),
            label: 'Recovered',
            borderColor: '#3cba9f',
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'COVID-19 Graphical Statistics',
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
          },
        },
      },
    });
  }
}
