import { MediaMatcher } from '@angular/cdk/layout'
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'bwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Book With Me';
  showButtons: boolean;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;


  constructor(
    private _commonService: CommonService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  )
  {

  }

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia('(max-width: 991px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  refresh() {
    this._commonService.refresh();
  }

}
