import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { withAddTreatment } from './features/add-treatment.feature';
import { withLoadAllTreatments } from './features/load-all-treatments.feature';
import { TreatmentsService } from '../../services/treatments/treatments.service';
import { DemAddTreatmentMutationVariables } from '../../data-access/generated/generated';
import { tap } from 'rxjs';
import { withLoadAllPatients } from '../patients/features/load-all-patients.feature';
import { withAddPatient } from '../patients/features/add-patient.feature';

interface TreatmentsState {
  treatments: any[];
  loading: boolean;
}

const initialState: TreatmentsState = {
  treatments: [],
  loading: false,
};

export const TreatmentsStore = signalStore(
  { providedIn: 'root' },
  withLoadAllTreatments(),
  withAddTreatment(),
  withState(initialState)
);
