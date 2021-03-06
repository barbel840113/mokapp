import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes : Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: 'app/main/main.module#MainModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
