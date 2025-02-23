import {
  signalStore,
  withMethods,
  withState,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';

interface UserState {
  user: any;
  loading: boolean;
  accessToken: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  accessToken: null,
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withMethods((state) => ({
    updateToken(token: string) {
      patchState(state, { accessToken: token });
    },
  })),
  withState(initialState),
  withHooks({
    onInit(store) {
      const accessToken = localStorage.getItem('accessToken');
      patchState(store, { accessToken: accessToken ?? null });
    },
  })
);
