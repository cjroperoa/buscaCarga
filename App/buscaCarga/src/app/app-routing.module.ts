import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './public/login/login.module#LoginPageModule'
  },
<<<<<<< HEAD
  { path: 'registry',
    loadChildren: './public/registry/registry.module#RegistryPageModule'
=======
  { path: 'registry', 
    loadChildren: './public/registry/registry.module#RegistryPageModule' 
>>>>>>> cjropero-testing
  },
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    loadChildren: './Pages/pages-routing.module#PagesRoutingModule'
  }

  //,
  // {
  //   path: 'componente',
  //   loadChildren: './app.component.module#AppRoutingModule'

  // }
  // {
  //   path: 'list',
  //   canActivate: [AuthGuardService],
  //   loadChildren: './Pages/list/list.module.#ListPageModule'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
