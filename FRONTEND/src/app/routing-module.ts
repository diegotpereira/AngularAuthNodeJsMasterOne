import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import {SuccessComponent} from './success/success.component';
import {FailComponent} from './fail/fail.component';
import {LogoutComponent} from './logout/logout.component';
import {AdmincrudComponent} from './admincrud/admincrud.component';
const routes: Routes = [
   {
      path: '',
      redirectTo: "/home",
      pathMatch:'full'
   },
   { path: "home", component: HomeComponent },
   { path: "contactus", component: ContactusComponent },
   { path: "login", component: LoginComponent },
   { path: "register", component: RegisterComponent },
   {path:"app",component:AppComponent},
   {path:"success",component:SuccessComponent},
   {path:"fail",component:FailComponent},
   {path:"logout",component:LogoutComponent},
   {path:"admin",component:AdmincrudComponent},
   {path:'**',component:PagenotfoundComponent}
];
@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,AdmincrudComponent, ContactusComponent, RegisterComponent, LoginComponent,LogoutComponent,FailComponent,PagenotfoundComponent];