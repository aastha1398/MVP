import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicPresentationComponent } from './dynamic-container/dynamic-presentation/dynamic-presentation.component';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';


const routes: Routes = [
  {
    path:'',
    component: DynamicPresentationComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicDemoRoutingModule { }
