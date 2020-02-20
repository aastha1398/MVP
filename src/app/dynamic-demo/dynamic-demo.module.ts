import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDemoRoutingModule } from './dynamic-demo-routing.module';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { DynamicPresentationComponent } from './dynamic-container/dynamic-presentation/dynamic-presentation.component';
import { DynamicComponentComponent } from '../dynamic-component/dynamic-component.component';
import { PortalModule } from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay'



@NgModule({
  declarations: [DynamicContainerComponent, DynamicPresentationComponent, DynamicComponentComponent],
  imports: [
    CommonModule,
    DynamicDemoRoutingModule,
    PortalModule,
    OverlayModule
  
   
  ],
  entryComponents: [DynamicComponentComponent]
})
export class DynamicDemoModule { }
