import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PastryListDetailsComponent } from './pastry-list-details/pastry-list-details.component';
import { PastryListComponent } from './pastry-list/pastry-list.component';

const routes: Routes = [
  { path: 'pastry-list', component: PastryListComponent },
  { path: 'pastry-list-detail',component: PastryListDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 
 }
