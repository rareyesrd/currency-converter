import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { ConverterComponent } from './components/converter/converter.component';

const routes: Routes = [
  {path: '', component: ConverterComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: AboutComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
