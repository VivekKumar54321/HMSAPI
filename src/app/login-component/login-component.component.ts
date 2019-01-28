import { Component, OnInit } from '@angular/core';
import { VisitorsDataProviderService } from '../visitors-data-provider.service';
import { Login } from '../ViewModel/posts-loginview-model';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  //Array 
  tokens: Login[] = [];
  // Object 
  token: Login = new Login();

  constructor(private loginDataProvider: VisitorsDataProviderService) { }

  ngOnInit() {
    this.gettoken();
  }

  btnclick()
  {

  }

  gettoken()
  {
    this.loginDataProvider.createtoken(this.token).subscribe(result => {
      console.log(result);
     // alert("Token Created");
 
    });
  }
}
