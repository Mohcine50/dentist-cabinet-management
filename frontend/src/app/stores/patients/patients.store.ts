import { patchState, signalStore, withHooks, withState } from "@ngrx/signals";
import { withLoadAllPatients } from "./features/load-all-patients.feature";
import { withAddPatient } from "./features/add-patient.feature";
import { inject } from "@angular/core";
import { TreatmentsService } from "../../services/treatments/treatments.service";
import { PatientService } from "../../services/patients/patient.service";

interface PatientsState {
  patients: any[];
  loading: boolean;
}

const initialState: PatientsState = {
  patients: [],
  loading: false,
};

export const PatientsStore = signalStore(
  { providedIn: "root" },
  withLoadAllPatients(),
  withAddPatient(),
  withHooks({
    onInit(store, patientService = inject(PatientService)) {
      patientService.loadAllPatients().subscribe((patients) => {
        patchState(store, { patients });
      });
    },
  }),
  withState(initialState)
);
