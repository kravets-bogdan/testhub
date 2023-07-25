// * Base
import { Pipe, PipeTransform } from '@angular/core';

// * Service
import { CredentialsService } from '@app/auth/credentials.service';

@Pipe({
  name: 'addUsername',
})
export class AddUsernamePipe implements PipeTransform {
  constructor(private credentialsService: CredentialsService) {}

  transform(value: string): string {
    return `${value} name: (${this.credentialsService.credentials.username})`;
  }
}
