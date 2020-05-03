import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule  ]
})
export class PagesModule { }
