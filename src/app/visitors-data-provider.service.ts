import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visitor } from './ViewModel/posts-view-model';
import { catchError } from 'rxjs/operators';
import { error } from 'util';
import { LoginComponentComponent } from './login-component/login-component.component';
import { Login } from './ViewModel/posts-loginview-model';
@Injectable({
  providedIn: 'root'
})
export class VisitorsDataProviderService {
  protected readonly apiUrl: string = "https://localhost:44317/api/VisitorsAPI/";
  protected readonly newUrl: string = "https://localhost:44317/api/VisitorsAPI/CreateVisitor";
  protected readonly loginurl: string = "https://localhost:44317/api/LoginAPI/";

  
 // ~/api/VisitorsAPI/PostVisitor

  constructor(private http: HttpClient) { }

  // Visitor ko list Backend bta lyako "HMS" project bta ...... API call gareko VisitorsAPI 
  getAllVisitorslist<T>() {
    //let data = { searchstring: null }
    return this.http.get<any>(this.apiUrl + "GetVisitor");
  }

  // Naya Visitor Create Gareko ani save garne 
  savedata(post) {
    return this.http.post(this.newUrl, post)
      
  }

  getById(visitorId) {
    return this.http.get(this.apiUrl + "GetVisitor/" + visitorId);
  }

  updateData(post: Visitor) {
    return this.http.post(this.apiUrl + "PutVisitor", post);
  }

  deleteData(visitorId) {
    return this.http.delete(this.apiUrl +"DeleteVisitor/" + visitorId);
  }

  createtoken(token: Login) {
    return this.http.post(this.loginurl + "token", token );
  }


}
