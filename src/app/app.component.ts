import { Component, OnInit } from '@angular/core';
import { VisitorsDataProviderService } from './visitors-data-provider.service';
import { Visitor } from './ViewModel/posts-view-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HMSAPI';

  //Array 
  posts: Visitor[] = [];
  // Object 
  post: Visitor = new Visitor();

  CreateVisitor: boolean = false;

  constructor(private visitorsDataProvider: VisitorsDataProviderService) { }
  ngOnInit()
      {
    this.getVisitorList();
      }

  getVisitorList()
  {
    this.visitorsDataProvider.getAllVisitorslist().subscribe(response => {
      this.posts = response;
      console.log(response);
   
  });
  }

  saveVisitorData()
  {
    if (this.post.visitorId)
    {
      this.visitorsDataProvider.updateData(this.post).subscribe(response =>
      {
        console.log(response);
        alert("Data Updated");
        this.getVisitorList();
      });

    }
    else
    {
      this.visitorsDataProvider.savedata(this.post).subscribe(response =>
      {
        console.log(response);
        alert("Data created");
        this.getVisitorList();
      });

    }
  }

  editItem(visitorId)
  {
    this.visitorsDataProvider.getById(visitorId).subscribe(result =>
    {
      this.post = result;
      alert("ok edited");
      this.getVisitorList();
    });

  }


  deleteItem(visitorId)
  {
    this.visitorsDataProvider.deleteData(visitorId).subscribe(result =>
    {
      this.post = result;
       alert("Data Deleted");
      this.getVisitorList();
    });
  }


  resetValue()
  {
    this.post = new Visitor();
  }

  createvisitorform()
  {
    this.CreateVisitor = true;
  }

  backform() {
    this.CreateVisitor = false;
  }

 

}
