import { Component } from '@angular/core';
    import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  imports: [],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
    constructor(private location: Location) { }

    goBack(): void {
      this.location.back();
    }
}
