// * Base
import { LeaderTestRoutingModule } from './leader-test-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// * Components
import { NavigationComponent } from './components/navigation/navigation.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ServicesComponent } from './components/services/services.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeaderTestComponent } from './leader-test.component';

// * Pipes
import { AddUsernamePipe } from '@app/pipes/add-username.pipe';

@NgModule({
  imports: [CommonModule, LeaderTestRoutingModule],
  declarations: [
    NavigationComponent,
    LeaderTestComponent,
    PaginatorComponent,
    ServicesComponent,
    TwitterComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    AddUsernamePipe,
  ],
  exports: [HeaderComponent],
})
export class LeaderTestModule {}
