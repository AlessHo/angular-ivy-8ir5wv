import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MaterialModule } from './material/material.module';

import { TestingMaterialComponent } from '../testing-material/testing-material.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent, HelloComponent, TestingMaterialComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
