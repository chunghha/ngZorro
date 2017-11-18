import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';

import { FormComponent } from './form.component';
import { StepsComponent } from './steps.component';
import { TableComponent } from './table.component';
import { TimelineComponent } from './timeline.component';
import { RandomUserService } from '../services/random-user.service';

@NgModule({
  declarations: [FormComponent, StepsComponent, TableComponent, TimelineComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [FormComponent, StepsComponent, TableComponent, TimelineComponent],
  providers: [
    { provide: NZ_LOCALE, useValue: enUS },
    RandomUserService
  ]
})
export class ComponentsModule {}
