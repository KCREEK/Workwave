import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path:'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'jobs', component: JobsComponent}
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: []
})

export class AppRoutingModule { }
