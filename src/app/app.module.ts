import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgZorroAntdModule.forRoot(),
    ComponentsModule
  ],
  providers: [
    { provide: NZ_LOCALE, useValue: enUS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
