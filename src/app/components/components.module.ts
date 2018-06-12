import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { G2ChartModule } from 'g2-angular';

import { CardComponent } from './card.component';
import { CarouselComponent } from './carousel.component';
import { ChartComponent } from './chart.component';
import { FormComponent } from './form.component';
import { StepsComponent } from './steps.component';
import { TableComponent } from './table.component';
import { TimelineComponent } from './timeline.component';
import { RandomUserService } from '../services/random-user.service';

@NgModule({
  declarations: [
    CardComponent,
    ChartComponent,
    CarouselComponent,
    FormComponent,
    StepsComponent,
    TimelineComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    G2ChartModule.forRoot()
  ],
  exports: [
    CardComponent,
    CarouselComponent,
    ChartComponent,
    FormComponent,
    StepsComponent,
    TimelineComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    RandomUserService
  ]
})
export class ComponentsModule {}
