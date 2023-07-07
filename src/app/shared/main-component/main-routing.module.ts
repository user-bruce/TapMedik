import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardContainerComponent } from '../dashboard-container/dashboard-container.component';

const routes: Routes = [
  {
    path:  './',
    component: DashboardContainerComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
