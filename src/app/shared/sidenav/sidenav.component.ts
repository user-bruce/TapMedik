import { faHospital } from './../../../../node_modules/@fortawesome/free-regular-svg-icons/faHospital.d';
import { faPlusSquare } from './../../../../node_modules/@fortawesome/free-regular-svg-icons/index.d';
import { faCalendar } from './../../../../node_modules/@fortawesome/free-regular-svg-icons/index.d';
import { faMoneyBillAlt } from './../../../../node_modules/@fortawesome/free-regular-svg-icons/index.d';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {

  //Icons
  doctorIcon = faPlusSquare;


  panelOpenState = true;
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
