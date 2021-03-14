import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { NoticesComponent } from './notices/notices.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SocietyexpenseComponent } from './societyexpense/societyexpense.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'members', component:MembersComponent},
  {path:'societyexpense',component:SocietyexpenseComponent},
  {path:'notices', component:NoticesComponent},
  {path:'reminders',component:RemindersComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
