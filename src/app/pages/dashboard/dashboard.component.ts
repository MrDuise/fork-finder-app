import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { SessionsComponent } from '../sessions/sessions.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserIconComponent } from '../../shared/components/user-icon/user-icon.component';


@Component({
  selector: 'app-dashboard',
  imports: [MatTabsModule, SessionsComponent, ProfileComponent, UserIconComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
