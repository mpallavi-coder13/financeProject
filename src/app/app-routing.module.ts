import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SuceessComponent } from './register/suceess/suceess.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import { LoancalculatorComponent } from './loancalculator/loancalculator.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { LaonEnquiryComponent } from './laon-enquiry/laon-enquiry.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SuceesspageComponent } from './suceesspage/suceesspage.component';
import { LoanproductComponent } from './loanproduct/loanproduct.component';
import { LoanmasterService } from './loanmaster.service';
import { AllotuserComponent } from './allotuser/allotuser.component';
import { QueryComponent } from './query/query.component';
import { TestingpurposeComponent } from './testingpurpose/testingpurpose.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { QuerydetailComponent } from './querydetail/querydetail.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent,
  children:[
    {path:'registersuceess',component:SuceessComponent}
  ]
},
  {path:'customers',component:CustomersComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'loancalculator',component:LoancalculatorComponent},
  {path:'userProfile',component:UserprofileComponent},
  {path:'notforuruse',component:AdminComponent},
  {path:'employee/:loginId',component:EmployeeComponent,
children:[
{path:'loanApplication',component:ApplyforloanComponent}

]


},
  {path:'user/:loginId',component:UserComponent,
children:[
{path:'query/:userid',component:QueryComponent}

]


},

  {path:'admin/:loginId',component:AdminComponent,
children:[
  // {path:'',component:AdminhomeComponent},
  {path:'adminhome',component:AdminComponent },
  {path:'addemployee',component:AddemployeeComponent},
  {path:'viewemployee',component:ViewemployeeComponent},
  {path:'employeesignup',component:SuceesspageComponent},
  {path:'admin/:loginId',component:AdminComponent},
  {path:'loanproduct',component:LoanproductComponent},
  {path:'suceess',component:SuceessComponent},
  {path:'allotUsers',component:AllotuserComponent},
  {path:'letuserViewed',component:UserdetailComponent},
  {path:'letQueryViewed',component:QuerydetailComponent},
  {path:'testMe',component:TestingpurposeComponent}

]

},




  {path:'loanEnquiry',component:LaonEnquiryComponent}, 
  {path:'**',component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


