import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.scss']
})
export class UserStatusComponent {
  @Input() public userAvatarUrl: string = '../../../assets/images/default-profile.png';
  @Input() public isOnline: boolean = false;
}
