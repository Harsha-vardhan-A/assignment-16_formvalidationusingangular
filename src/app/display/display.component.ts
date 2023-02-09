import { Component } from '@angular/core';
import { DatastoringserviceService } from '../datastoringservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  getdetails:any[]=[];
  //subscribing the data
  constructor(private data:DatastoringserviceService){
    this.getdetails=data.storealldata
    this.data.emitter.subscribe((res)=>{
      this.getdetails.push(res)
      // this.data.storealldata.push(res)
    })
  }
}
