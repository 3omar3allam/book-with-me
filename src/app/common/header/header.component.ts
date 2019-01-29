import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Book With Me';
  showButtons = false;

  constructor() { }

  ngOnInit() {


  }

  toggleNav() {
    this.showButtons = !this.showButtons
    document.getElementById('navbarOptions').style.display = this.showButtons? "block":"none"
    document.getElementById('navbarOptions').style.top = this.showButtons? "0":"-200px"
  }

}
