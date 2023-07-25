// * Base
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// * Guard
import { AuthenticationGuard } from './auth/authentication.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home-routing.module').then((m) => m.HomeRoutingModule) },
  {
    path: 'test',
    loadChildren: () => import('./leader-test/leader-test-routing.module').then((m) => m.LeaderTestRoutingModule),
    canActivate: [AuthenticationGuard],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
