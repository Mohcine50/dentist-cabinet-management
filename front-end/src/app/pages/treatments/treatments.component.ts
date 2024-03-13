import { Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTreatmentComponent } from './addTreatment/add-treatment.component';
import { RightSliderComponent } from '../../shared/components/rightSlider/rightSlider.component';
import { TreatmentsStore } from '../../stores/treatments/treatments.store';
import { getState } from '@ngrx/signals';
import { TreatmentComponent } from './treatment/treatment.component';

@Component({
  selector: 'dem-treatments',
  providers: [TreatmentsStore],
  standalone: true,
  imports: [
    CommonModule,
    AddTreatmentComponent,
    RightSliderComponent,
    TreatmentComponent,
  ],
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.scss',
})
export class TreatmentsComponent implements OnInit {
  treatmentsStore = inject(TreatmentsStore);
  @ViewChild('rightSliderComponent')
  protected rightSliderComponent!: RightSliderComponent;

  constructor() {
    effect(() => {
      console.log(getState(this.treatmentsStore));
    });
  }

  ngOnInit(): void {
    //this.treatmentsStore.loadAll();
  }

  addTreatmentForm() {
    this.rightSliderComponent.toggleSlideOver();
  }
}
