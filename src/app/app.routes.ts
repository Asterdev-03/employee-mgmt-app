import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'client',
    loadComponent: async () => {
      const m = await import('./components/client/client.component');
      return m.ClientComponent;
    },
  },
];
