import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './search/search.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: 'container', component: ContainerComponent},
  { path: 'main', component: SearchComponent},
  { path: 'second', component: SecondComponent },
  { path: 'demo', component: DemoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
