import { Injectable } from '@angular/core';
import {
  DemAddTreatmentGQL,
  DemAddTreatmentMutation,
  DemAddTreatmentMutationVariables,
  DemLoadAllTreatmentsGQL,
  DemLoadAllTreatmentsQuery,
} from '../../data-access/generated/generated';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TreatmentsService {
  constructor(
    private demAddTreatmentGQL: DemAddTreatmentGQL,
    private demLoadAllTreatmentsGQL: DemLoadAllTreatmentsGQL
  ) {}

  loadAllTreatments(): Observable<
    DemLoadAllTreatmentsQuery['loadAllTreatments']
  > {
    return this.demLoadAllTreatmentsGQL
      .fetch()
      .pipe(map((res) => res.data.loadAllTreatments));
  }

  addTreatment(
    addTreatmentVar: DemAddTreatmentMutationVariables
  ): Observable<DemAddTreatmentMutation['addTreatment']> {
    return this.demAddTreatmentGQL
      .mutate(addTreatmentVar)
      .pipe(map((res) => res.data?.addTreatment));
  }
}
