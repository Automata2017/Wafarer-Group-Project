import { Component, OnInit } from '@angular/core';
import { User } from '../post-form';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  cities = ['San Francisco', 'London', 'Sydney', 'Seattle'];

  model = new User(2, '', this.cities[0], '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.model = new User(1, '', '');
  }

  Jilly(): User {
    const travelReview = new User(1, 'Jill Scott', 'Great Place', 'London');
    console.log('My name is ' + travelReview.name);
    return travelReview;
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }
}
