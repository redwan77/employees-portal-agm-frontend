import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path :'admin',
    loadChildren: () => import('./layout/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'record',
    loadChildren:() => import('./components/user-record/user-record.module').then(m => m.UserRecordModule)
  },
  {
    path: 'options',
    loadChildren:() => import('./components/user-options/user-options.module').then(m => m.UserOptionsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
