import {
  signalStore,
  withMethods,
  withState,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { StaffService } from '../../services/staff/staff.service';
import { RolesService } from '../../services/roles/roles.service';
import { DemLoadAllRolesQuery } from '../../data-access/generated/generated';

interface RolesSTATE {
  roles: DemLoadAllRolesQuery['loadAllRoles'];
}

const initialState: RolesSTATE = {
  roles: [],
};

export const RolesStore = signalStore(
  { providedIn: 'root' },
  withMethods((state, rolesService = inject(RolesService)) => ({
    loadAllRoles() {
      rolesService.loadAllRoles().subscribe((roles) => {
        patchState(state, () => ({ roles }));
      });
    },
  })),
  withState(initialState)
);
