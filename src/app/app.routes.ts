import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: DashboardComponent}
];

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    declarations: []
})

export class AppRoutingModule { }
