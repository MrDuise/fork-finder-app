import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sessions',
  imports: [],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent {
constructor(private router: Router) {}

goToNewSession() {
  this.router.navigate(['/new-session']);
}
}
