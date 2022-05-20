import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { UserService } from 'src/app/service/user.service';
import { DataTablesModule} from 'angular-datatables';
import { User } from 'src/app/model/user.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users:any;
  search:string;
	asc: boolean = false;
  
	dtOptions: DataTables.Settings = {};
	dtTrigger: Subject<any> = new Subject();
  isDtInitialized:boolean=false;
  user_id: number;
  baseUrl: string = 'https://61ece709f3011500174d2245.mockapi.io/nb/getUsers/';
  public temp: Object=false;
 

  constructor(private userService:UserService, private router:Router,private http: HttpClient) { 
    
  }

  ngOnInit(): void { 
    this.userService.getUsers().subscribe((res:any)=>{this.users=res});
    this.http.get(this.baseUrl).subscribe({next:(data) => {
      this.users = data;
      this.temp = true;
      }});
    
			
			
			
	
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
