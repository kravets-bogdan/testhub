// * Base
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// * Component
import { LeaderTestComponent } from './leader-test.component';

const routes: Routes = [{ path: '', component: LeaderTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderTestRoutingModule {}
