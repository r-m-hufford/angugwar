import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
import { AdminComponent } from './examples/child-routes/admin.component';
import { AdminPayrollComponent } from './examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/child-routes/admin-vacation/admin-vacation.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { ProtectedComponent } from './examples/protected/protected.component';
import { AuthGuard } from './common/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DynamicComponent } from './examples/dynamic-component/dynamic-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  {
      path: 'examples',
      component: ExamplesComponent,
      children: [
        {
          path: 'child',
          component: AdminComponent,
          children: [
            { path: 'payroll', component: AdminPayrollComponent },
            { path: 'vacation', component: AdminVacationComponent },
          ],
        },
        { path: 'params',component: RouteParamsComponent },
        { path: 'params/:id',component: RouteParamsComponent },
        { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
        { path: 'lazy', 
          loadChildren: () => 
            import('./examples/lazy-module/lazy-module.module')
            .then((m) => m.LazyModule)
        },
        { path: 'create', component: DynamicComponent }
      ],
    },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
