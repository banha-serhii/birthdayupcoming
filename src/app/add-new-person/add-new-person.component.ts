import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';

export class User {
  constructor(public firstName: string,
              public lastName: string,
              public dateOfBirth: string) {
  }
}

@Component({
  selector: 'app-add-new-person',
  templateUrl: './add-new-person.component.html',
  styleUrls: ['./add-new-person.component.scss']
})
export class AddNewPersonComponent {
  personForm: FormGroup;
 // dateNow: number = Date.now();

  constructor(private formBuilder: FormBuilder) {

    this.personForm = formBuilder.group({

      firstName: ['Sergii', [Validators.required]],
      lastName: ['Banga', [Validators.required]],
      dateOfBirth: ['10/20/1994', Validators.required]
    });
  }

  users: User[] =
    [
      {firstName: 'Sergii', lastName: 'Banga', dateOfBirth: '10/20/1994'},
      {firstName: 'Sergii', lastName: 'Banga', dateOfBirth: '10/20/1994'},
      {firstName: 'Sergii', lastName: 'Banga', dateOfBirth: '10/20/1994'},
    ];

  startDate = new Date(1994, 9, 20);

  // tslint:disable-next-line:typedef
  onSubmit() {
   this.users.push();
  }

}
