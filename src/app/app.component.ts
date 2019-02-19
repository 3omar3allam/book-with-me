import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mobileView = false;

  ngOnInit() {
    this.mobileView = (window.innerWidth < 576);
    document.getElementById('main').style.top = this.mobileView ? '175px' : '125px';

    window.onresize = () => {
      this.mobileView = (window.innerWidth < 576);
      document.getElementById('main').style.top = this.mobileView ? '175px' : '125px';
      (document.getElementsByTagName('bwm-header')[0] as HTMLElement).style.top = '0px';
    };
    window.onscroll = () => {
      if (this.mobileView) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          (document.getElementsByTagName('bwm-header')[0] as HTMLElement).style.top = '-60px';
          document.getElementById('main').style.top = '125px';
        } else {
          (document.getElementsByTagName('bwm-header')[0] as HTMLElement).style.top = '0px';
          document.getElementById('main').style.top = '175px';
        }
      }
    };
  }
  clickHandler() {
    alert('Clicked!');
  }
}
