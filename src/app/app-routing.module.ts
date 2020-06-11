import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
 
  {
    path :'user',
    loadChildren: () => import('./a-1-user-layout/a-1-user-layout.module').then(m => m.A1UserLayoutModule)
  },
  {
    path: 'login',
    component:LoginComponent
  }
  ,
  {
    path:"**",
    redirectTo:"/user"

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
