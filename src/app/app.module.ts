import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuceessComponent } from './register/suceess/suceess.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ApplyforloanComponent } from './applyforloan/applyforloan.component';
import { LoancalculatorComponent } from './loancalculator/loancalculator.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdminComponent } from './admin/admin.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { LaonEnquiryComponent } from './laon-enquiry/laon-enquiry.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { SuceesspageComponent } from './suceesspage/suceesspage.component';
import { LoanproductComponent } from './loanproduct/loanproduct.component';
import {LoanmasterService} from './loanmaster.service';
import { TestingpurposeComponent } from './testingpurpose/testingpurpose.component';
import { AllotuserComponent } from './allotuser/allotuser.component';
import { QueryComponent } from './query/query.component';
import {QueryService} from './query.service';
import { RatingModule } from 'ng-starrating';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { QuerydetailComponent } from './querydetail/querydetail.component';
import {AuthService} from './auth.service';
import { LogoutComponent } from './logout/logout.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SuceessComponent,
    CustomersComponent,
    AboutusComponent,
    ForgotpasswordComponent,
    ApplyforloanComponent,
    LoancalculatorComponent,
    UserprofileComponent,
    AdminComponent,
    FileuploadComponent,
    NavComponent,
    FooterComponent,
    EmployeeComponent,
    UserComponent,
    AdminProfileComponent,
    LaonEnquiryComponent,
    AdminhomeComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    SuceesspageComponent,
    LoanproductComponent,
    TestingpurposeComponent,
    AllotuserComponent,
    QueryComponent,
    UserdetailComponent,
    QuerydetailComponent,
    LogoutComponent,
  ],
  imports: [ 
    BrowserModule,RatingModule,
   AppRoutingModule ,
    FormsModule,
    HttpClientModule,
    RouterModule,
    Ng2SearchPipeModule
  ],
  providers: [UserService,LoanmasterService,QueryService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
