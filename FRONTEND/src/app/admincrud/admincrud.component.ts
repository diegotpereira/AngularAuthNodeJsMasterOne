import { Component, OnInit } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admincrud',
  templateUrl: './admincrud.component.html',
  styleUrls: ['./admincrud.component.css']
})

export class AdmincrudComponent implements OnInit {
  allUsers: any = [];
  flag = false;
  toggleText: any = 'Show Users';
  updateUserDiv = false;
  constructor(private ccs: ConnectingserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  updateUser(id: number) {
    this.updateUserDiv = true;
    this.flag = !this.flag;
    console.log("it is in update user");
    this.allUsers = this.getUserById(id);

  }
  submit(id, userName, password, repassword) {
    this.ccs.updateUser(id, userName, password, repassword).subscribe((data) => console.log(data));
    location.reload();
  }
  getAllUsers() {
    this.updateUserDiv = false;
    this.flag = !this.flag;
    this.toggleText = !this.flag ? 'Show Users' : 'Hide Users';
    this.ccs.getUser().subscribe((data) => {
      this.allUsers = data['response'];
      //this.userArray = res['response'];
      console.log(data)
    });
  }

  deleteUser(id: number) {
    this.ccs.deleteUser(id).subscribe((data) => console.log(data));
    location.reload();
    //this.flag=!this.flag;
  }
  getUserById(id: number) {
    this.ccs.getUserById(id).subscribe((data) => {
      this.allUsers = data['response'];
      console.log(data);
      return this.allUsers;
    });
  }
  addUser() {
    this.router.navigate(['/register']);
  }
}
