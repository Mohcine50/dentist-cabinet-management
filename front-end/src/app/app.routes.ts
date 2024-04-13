import { Route } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { UnauthorizedGuard } from './guards/unauthorized.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    canActivateChild: [AuthorizedGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
      },
      {
        path: 'appointments-management',
        loadComponent: () =>
          import('./pages/appointments/appointments.component').then(
            (c) => c.AppointmentComponent
          ),
      },
      {
        path: 'invoicing',
        loadComponent: () =>
          import('./pages/invoicing/invoicing.component').then(
            (c) => c.InvoicingComponent
          ),
      },
      {
        path: 'patients-management',
        loadComponent: () =>
          import('./pages/patients/patients.component').then(
            (c) => c.PatientsComponent
          ),
      },
      {
        path: 'staff',
        loadComponent: () =>
          import('./pages/staff/staff.component').then((c) => c.StaffComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },
      {
        path: 'treatments',
        loadComponent: () =>
          import('./pages/treatments/treatments.component').then(
            (c) => c.TreatmentsComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/Authentication/authentication.component').then(
        (c) => c.AuthenticationComponent
      ),
    canActivateChild: [UnauthorizedGuard],
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import(
            './pages/Authentication/components/sign-in/sign-in.component'
          ).then((c) => c.SignInComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import(
            './pages/Authentication/components/sign-up/sign-up.component'
          ).then((c) => c.SignUpComponent),
      },
    ],
  },
];
