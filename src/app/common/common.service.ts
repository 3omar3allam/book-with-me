import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService{

  refreshListener: Subject<boolean>;

  constructor(private _router: Router){
    this.refreshListener = new Subject<boolean>();
  }

  refresh(){
    if(['/','/rentals'].includes(this._router.url)){
      this.refreshListener.next(true);
    }
    else{
      this._router.navigate(['']);
    }
  }
  getRefreshListener(){
    return this.refreshListener.asObservable();
  }
}
