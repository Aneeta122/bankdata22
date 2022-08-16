import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//property/variable
header=" welcome to our bank"
dot="....."
accplaceholder="Account please"

//database
database={
  1000:{acno:1000,username:'Neer',password:1000,balance:5000},
  1001:{acno:1001,username:'Laisha',password:1001,balance:6000},
  1002:{acno:1002,username:'vyom',password:1002,balance:5000},

}
  constructor() { }

  ngOnInit(): void {
  }
login(){
  alert('login clicked')
}
}
//user defined function  
