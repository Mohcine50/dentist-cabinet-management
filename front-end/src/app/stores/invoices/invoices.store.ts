import { signalStore, withMethods, withState, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';

interface InvoicesState {
  invoices: any[];
  loading: boolean;
}

const initialState: InvoicesState = {
  invoices: [],
  loading: false,
};

export const InvoicesStore = signalStore(
  { providedIn: 'root' },
  withMethods((state, staffService = inject(StaffService)) => ({})),
  withState(initialState)
);
