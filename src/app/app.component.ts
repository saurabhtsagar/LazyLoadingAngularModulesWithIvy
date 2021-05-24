import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoaderService } from './services/lazyLoader/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  @ViewChild('view_container',{read:ViewContainerRef,static:false}) view_container:ViewContainerRef;

  constructor(private lazyLoaderService: LazyLoaderService) {}

  loadView(routeName:string,data:any){
    this.view_container.clear();
    this.lazyLoaderService.load(routeName,this.view_container,data)
  }
}
