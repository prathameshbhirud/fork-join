import { Component } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fork-join';
  data1: any = {};
  data2: any = {};
  data3: any = {};
  data4: any = {};

  isLoadingResults = true;

  constructor(private apiService: RestApiService){
    this.getData();
  }

  getData(){
    this.apiService.getData()
      .subscribe(res => {
        console.log(res);
        this.data1 = res[0];
        this.data2 = res[1];
        this.data3 = res[2];
        this.data4 = res[3];
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = true;
      });
  }
}
