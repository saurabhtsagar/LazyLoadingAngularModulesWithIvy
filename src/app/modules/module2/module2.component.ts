import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.scss']
})
export class Module2Component implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
