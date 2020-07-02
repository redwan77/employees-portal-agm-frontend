import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';


const routes: Routes = [
  {
    path :'user',
    loadChildren: () => import('./a-1-user-layout/a-1-user-layout.module').then(m => m.A1UserLayoutModule)
  },
  {
    path :'admin',
    loadChildren: () => import('./a-2-admin-layout/a-2-admin-layout.module').then(m => m.A2AdminLayoutModule)
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
