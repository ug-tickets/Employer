import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'hire',
    loadChildren: () => import('./pages/hire/hire.module').then( m => m.HirePageModule)
  },
  {
    path: 'hired',
    loadChildren: () => import('./pages/hired/hired.module').then( m => m.HiredPageModule)
  },
  {
    path: 'hustlerbio',
    loadChildren: () => import('./pages/hustlerbio/hustlerbio.module').then( m => m.HustlerbioPageModule)
  },
  {
    path: 'jobprogress',
    loadChildren: () => import('./pages/jobprogress/jobprogress.module').then( m => m.JobprogressPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'searchedhustlers',
    loadChildren: () => import('./pages/searchedhustlers/searchedhustlers.module').then( m => m.SearchedhustlersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'startpage',
    loadChildren: () => import('./pages/startpage/startpage.module').then( m => m.StartpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
