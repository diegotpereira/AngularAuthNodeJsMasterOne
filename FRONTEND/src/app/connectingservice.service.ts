import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectingserviceService {
 
  //uri="http://127.0.0.1:8000/";
  uri = "http://localhost:3000/api/users";
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>(`${this.uri}`);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }
  addUser(user_name, password, repassword) {
    const issue = {
      user_name: user_name,
      password: password,
      repassword: repassword
    };
    return this.http.post(`${this.uri}`, issue);
  }

  updateUser(id:number, user_name:string,password:string,repassword:string) {
    const issue = {
      user_name: user_name,
      password: password,
      repassword: repassword
    };
    return this.http.put(`${this.uri}/${id}`, issue);
  }

  deleteUser(id:number) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}