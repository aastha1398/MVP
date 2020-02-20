import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{
  path:'dynamic',
  loadChildren: () => import('./dynamic-demo/dynamic-demo.module').then(mod=>mod.DynamicDemoModule)  
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
