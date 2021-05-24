import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';


@NgModule({
  declarations: [Module1Component],
  entryComponents: [Module1Component],
  imports: [
    CommonModule
  ],
})
export class Module1Module {
  static entry = Module1Component;
}

