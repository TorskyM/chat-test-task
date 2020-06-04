import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.html',
  styleUrls: ['./user-status.scss']
})
export class UserStatusComponent implements OnInit {
  @Input() public userAvatarUrl: string = '../../../assets/images/default_profile.png';

  public isOnline: boolean = false;

  ngOnInit(): void {
  }

}
