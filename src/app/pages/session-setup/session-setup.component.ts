import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-session-setup',
  imports: [],
  templateUrl: './session-setup.component.html',
  styleUrl: './session-setup.component.scss'
})
export class SessionSetupComponent {
constructor(private location: Location) { }

    goBack(): void {
      this.location.back();
    }
}
