import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'dem-patients-demographics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients-demographics.component.html',
  styleUrl: './patients-demographics.component.scss',
})
export class PatientsDemographicsComponent {
  @ViewChild('chart') chart!: any;
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
