import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../core/services/users.service';

@Component({
  selector: 'ac-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  signup(form: NgForm): void {
    const { email, password } = form.value;

    this.userService.create(email, password)
      .then(() => this.router.navigateByUrl('/users/new'));
  }

}
