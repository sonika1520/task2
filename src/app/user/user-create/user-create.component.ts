import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user:User=new User();
  submitted=false;

  constructor(private userService:UserService,private router:Router){ }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.submitted= true;
    this.userService.createUser(this.user).subscribe({
      next:(data)=>console.log(data),error:(error)=>console.log(error)});
      this.user=new User();
      this.router.navigate(['/users']);
      console.log(this.user);
      alert("user added successfully")

  }
}
