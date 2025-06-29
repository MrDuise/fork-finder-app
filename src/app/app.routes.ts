import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinalVoteComponent } from './pages/final-vote/final-vote.component';
import { InviteComponent } from './pages/invite/invite.component';
import { MatchComponent } from './pages/match/match.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SwipeComponent } from './pages/swipe/swipe.component';
import { SessionSetupComponent } from './pages/session-setup/session-setup.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'new-session', component: SessionSetupComponent},
  { path: 'swipe', component: SwipeComponent },
  {path: 'restaurant', component: RestaurantDetailComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  { path: 'invite', component: InviteComponent },
  { path: 'match', component: MatchComponent },
  { path: 'final-vote', component: FinalVoteComponent },
  { path: 'profile', component: ProfileComponent },
];
