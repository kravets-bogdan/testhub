// * Base
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwitterComponent {}
