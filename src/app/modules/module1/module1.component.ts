import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {
  @Input() data: any;

  constructor() {
    console.log("Lazy loaded");
  }

  ngOnInit(): void {
  }

}
