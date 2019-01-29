import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mobileView = false;

  ngOnInit(){
    this.mobileView = (window.innerWidth < 576);
    document.getElementsByTagName('section')[0].style.top = this.mobileView? '150px': '100px';

    window.onresize = () => {
      this.mobileView = (window.innerWidth < 576);
      document.getElementsByTagName('section')[0].style.top = this.mobileView? '150px': '100px';
    }
    window.onscroll = () => {
      if(this.mobileView){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          (document.getElementsByTagName('bwm-header')[0] as HTMLElement).style.top = '-65px';
          document.getElementsByTagName('section')[0].style.top ='60px';
        } else {
          (document.getElementsByTagName('bwm-header')[0] as HTMLElement).style.top = '0px';
          document.getElementsByTagName('section')[0].style.top = '150px';
        }
      }
    }
  }
  clickHandler(){
    alert("Clicked!");
  }
}
