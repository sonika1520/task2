import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users:any;
  

  constructor(private userService:UserService, private router:Router) { 
    
  }

  ngOnInit(): void { 
    this.userService.getUsers().subscribe((res:any)=>{this.users=res});
  }
  
  deleteUser(user_id: number) {
    this.userService.deleteUser(user_id)
      .subscribe({next:(data)=>{console.log(data);
        this.userService.getUsers().subscribe(data=>{this.users=data});},
        error:(error)=>console.error(error)});
        alert("user deleted successfully")
  }

  updateUser(user_id: number): void{
    
    this.router.navigate(['update',user_id]);
  }
}
