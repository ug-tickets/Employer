import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';

// create an array of our route objects
const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'startpage', children: [
          {
            path: '',
            loadChildren: '../pages/startpage/startpage.module#StartpagePageModule'
          }
        ]
      },
      {
        path: 'hustlers',
        children: [
          {
            path: '',
            loadChildren: '../pages/hired/hired.module#HiredPageModule'
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: '../pages/messages/messages.module#MessagesPageModule'
          }
        ]
      },
      {
        path: 'profile',
        loadChildren: '../pages/profile/profile.module#ProfilePageModule'
      },
      {
        path: '',
        redirectTo: '/home/tabs/startpage',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/startpage',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomeRoutingModule {

}