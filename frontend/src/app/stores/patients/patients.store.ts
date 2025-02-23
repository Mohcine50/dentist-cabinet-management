import { signalStore, withState } from '@ngrx/signals';
import { withLoadAllPatients } from './features/load-all-patients.feature';
import { withAddPatient } from './features/add-patient.feature';

interface PatientsState {
  patients: any[];
  loading: boolean;
}

const initialState: PatientsState = {
  patients: [],
  loading: false,
};

export const PatientsStore = signalStore(
  { providedIn: 'root' },
  withLoadAllPatients(),
  withAddPatient(),
  withState(initialState)
);
