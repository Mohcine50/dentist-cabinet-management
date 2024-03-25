import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import {
  DemAddStaffMemberGQL,
  DemAddStaffMemberMutation,
  DemAddStaffMemberMutationVariables,
  DemLoadAllStaffMembersGQL,
  DemLoadAllStaffMembersQuery,
  DemStaffInput,
} from '../../data-access/generated/generated';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(
    private addStaffMemberMutation: DemAddStaffMemberGQL,
    private loadAllMembers: DemLoadAllStaffMembersGQL
  ) {}

  addStaffMember(
    staff: DemAddStaffMemberMutationVariables
  ): Observable<DemAddStaffMemberMutation['addStaffMember']> {
    return this.addStaffMemberMutation
      .mutate(staff)
      .pipe(map((res) => res.data?.addStaffMember));
  }

  loadAllStaffMembers(): Observable<
    DemLoadAllStaffMembersQuery['loadAllStaffMembers']
  > {
    return this.loadAllMembers
      .fetch(undefined, {
        fetchPolicy: 'no-cache',
      })
      .pipe(map((res) => res.data.loadAllStaffMembers));
  }
}
