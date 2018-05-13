import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main-component/main-component.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

const routes: Routes = [
  {path: '', redirectTo: 'main-nav',pathMatch: 'full'},
  {path: 'main-nav', component: MainNavigationComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
