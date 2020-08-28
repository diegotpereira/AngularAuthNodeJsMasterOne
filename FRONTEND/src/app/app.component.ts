import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  uEmail: any;
  public logoutMsg: any;
  isUserLoggedIn = true;

  constructor(private router: Router) {
    this.uEmail = sessionStorage.getItem("email");
    console.log("email in app.ts is ->" + this.uEmail);
    if (this.uEmail === null) {
      this.isUserLoggedIn = !this.isUserLoggedIn;
      console.log("in if of app.ts " + this.isUserLoggedIn);
    }
    else {
      this.isUserLoggedIn = this.isUserLoggedIn;
      console.log("in else of app.ts " + this.isUserLoggedIn);
    }
  }
  logout() {
    sessionStorage.removeItem("email");
    this.logoutMsg = "you have been logout successfully !!!";
    console.log(this.logoutMsg);
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this.uEmail = null;
    this.router.navigate(['/login']);
  }
  ngOnInit() {
    console.log("in ngonit " + this.isUserLoggedIn);
  }
}