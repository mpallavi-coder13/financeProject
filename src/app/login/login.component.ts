import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { LoginService } from './../login.service';
import { Router, RouterLink, ActivatedRoute, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:LoginService,private router:Router,private route:ActivatedRoute) { }

  username :string;
  password:string;
  login = new Login();

  ngOnInit() {
    console.log("i am in login")
  }

  getLogin(username,password)
  {
    console.log(username,password);

    this._auth.getLoginCheck(username,password).subscribe(rs=>{

    console.log(rs);
   
    if(rs==null){
       console.log("Enter valid data");
       alert("Pls Enter valid Credentials");
    }
    else{
      this.login=rs;
      switch (this.login.type) {
        case "admin":
               this.router.navigate(['/admin',this.login.loginId]);
          break;
          case "employee":
            this.router.navigate(['/employee',this.login.loginId]);
            break;
            case "user":
              this.router.navigate(['/user',this.login.loginId]);
              break;
      
        default:
          break;
      }
    }
  

    });

  //   console.log(this.login);    
  //   // this.UserService.getLoginCheck(this.login.username,this.login.password).subscribe(rs=>{
  //   //   console.log(rs);
  //   //   this.user;
  //   // }); 


  //   console.log("Login check Data : "+username+ "    " +password);
  //   this.loginService.getLoginCheck(username,password).subscribe(rs=>{
  //     this.login = rs;
  //    console.log(rs);
  //    console.log("here");
  //    if(rs == null)
  //    {
  //      console.log("pls enter Valid User and Pass....! ");
  //      alert("Invalid Creadentials.......!");
  //    }
  //    else{
  //      console.log("Valid User",JSON.stringify(this.login));
  //      this.login;
  //   let ch=this.login.type;
  //   console.log(this.login.type);
  //   console.log("hii");
  //   console.log(ch);
  //      switch (ch) {
  //        case "Admin":
  //                  console.log(ch);
  //                   let navigationExtras:NavigationExtras={
  //                     queryParams : {
  //                           "adminId": this.login.loginId
  //                     }

  //                   }
  //                  this.router.navigate(['/admin'],navigationExtras);
  //          break;
  //          case "Employee":
  //                  console.log(ch);
  //                  this.router.navigate(['/employee',this.login.loginId]);
  //          break;
  //          case "User":
  //                  console.log(ch);
  //                  this.router.navigate(['/user',this.login.loginId]);
  //          break;
       
  //        default:
  //          break;
  //      }
  
  //     }
  //   });
  
 

  }

  // logoutUser()
  // {
  //   localStorage.removeItem('token')
  //   this.router.navigate(['home'])
  // }

  // getToken()
  // {
  //   return localStorage.getItem('token')
  // }
}
