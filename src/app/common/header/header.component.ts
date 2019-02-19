import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Book With Me';
  showButtons: boolean;

  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    this.showButtons = false;
  }

  toggleNav() {
    this.showButtons = !this.showButtons;
    document.getElementById('navbarOptions').style.display = this.showButtons ? 'block' : 'none';
    document.getElementById('navbarOptions').style.top = this.showButtons ? '0' : '-200px';
  }

  refresh() {
    this._commonService.refresh();
  }

}
