import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  public static userEmail: any;
  public static ssr: WindowSessionStorage;
  email: any;
  password: any;
  userArray: any;
  result: boolean = false;
  constructor(private ccs: ConnectingserviceService, private router: Router) {
    this.ccs.getUser().subscribe(res => {
      this.userArray = res['response'];
    });
  }
  //@ViewChild("data") loginForm: NgForm;
  validate() {
    for (var ua of this.userArray) {
      console.log("in validate " + ua.user_name + ' ' + ua.password);
      if ((ua.user_name === this.email && ua.password === this.password)) {
        this.result = true;
        console.log("welcome " + this.result);
        sessionStorage.setItem("email", this.email);
        this.router.navigate(['/success']);
        break;
      }
      if ((ua.user_name != this.email && ua.password != this.password)) {
        this.result = false;
        this.router.navigate(['/fail']);
      }
    }
  }
  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
