import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main-component/main-component.component'
import { MainRoutingModule } from './main-routing.module';
import { MainNavComponent} from './main-nav/main-nav.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,   
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    MainComponent,
    MainNavComponent,
    MainNavigationComponent
  ]
})
export class MainModule { }
