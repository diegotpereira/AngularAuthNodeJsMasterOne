import { Component, OnInit } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  allUsers: any = [];
  data: any;
  user_name: any;
  password: any;
  repassword: any;
  formdata: any;
  //constructor(private http: HttpClient) { }
  constructor(private ccs: ConnectingserviceService, private router: Router) { }
  ngOnInit() {
    console.log("ngoninit working");
    //this.http.get("http://localhost:3000/api/users/1").subscribe((data) => console.log(data));
    // 
    //   this.ccs.getUserById(2).subscribe((data)=>console.log(data));
  }
  addUser() {
    if (this.password === this.repassword) {
      this.ccs.addUser(this.user_name, this.password, this.repassword).subscribe((data) => console.log(data));
      console.log("data added in table");
      this.router.navigate(['/login']);
    }
    else {
      console.log("password does not match");
    }
  }
  onClickSubmit() {
    console.log(this.user_name, this.password, this.repassword);
  }
  cancel()
  {
    this.user_name="";
    this.password="";
    this.repassword="";
  }
}
