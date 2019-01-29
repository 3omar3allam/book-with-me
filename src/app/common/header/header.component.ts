import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Book With Me';
  hideButtons = false;

  constructor() { }

  ngOnInit() {
  }

}
