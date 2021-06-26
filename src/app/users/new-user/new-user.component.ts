import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'ac-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    this.userService.update(form.value)
      .then(() => this.router.navigateByUrl('/'))
  }

}
