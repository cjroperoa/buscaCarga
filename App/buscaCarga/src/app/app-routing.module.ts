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
    loadChildren: './Public/login/login.module#LoginPageModule'
  },
  { path: 'registry', 
    loadChildren: './Public/registry/registry.module#RegistryPageModule' 
  },
  {
    path: 'pages',
    canActivate: [AuthGuardService],
    loadChildren: './Pages/pages-routing.module#PagesRoutingModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
