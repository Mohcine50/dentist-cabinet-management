import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions,
} from 'ng-apexcharts';

@Component({
  selector: 'dem-patients-demographics',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './patients-demographics.component.html',
  styleUrl: './patients-demographics.component.scss',
})
export class PatientsDemographicsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions = {
    series: [42, 39, 35, 29, 26],
    chart: {
      width: 380,
      type: 'polarArea',
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        //    enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6,
      },
    },
  };
}
