import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router} from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  month: string;
  transactionId: any;
  dateToday:any;
  paymentType:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {month: 'March',     transactionId:'N210392308329474901782' , dateToday:'' , paymentType:'Cash'},
  {month: 'April',     transactionId: 'N211392308329474901781', dateToday:'' , paymentType:'UPI'},
  {month: 'November',  transactionId: 'N212392308329474901783', dateToday:'' , paymentType:'Cheque'},
  {month: 'August',    transactionId: 'N213392308329474901784', dateToday:'' , paymentType:'Cash'},
  {month: 'September', transactionId: 'N214392308329474901785', dateToday:'' , paymentType:'UPI'},
  {month: 'April',     transactionId: 'N215392308329474901786', dateToday:'' , paymentType:'Cheque'},
  {month: 'March',     transactionId: 'N216392308329474901787', dateToday:'' , paymentType:'Cash'},
  {month: 'November',  transactionId: 'N217392308329474901788', dateToday:'' , paymentType:'UPI'},
  {month: 'September', transactionId: 'N218392308329474901789', dateToday:'' , paymentType:'Cheque'},
  {month: 'December',  transactionId: 'N219392308329474901780', dateToday:'' , paymentType:'Cash'},
];
@Component({
  selector: 'app-membersdetails',
  templateUrl: './membersdetails.component.html',
  styleUrls: ['./membersdetails.component.css']
})
export class MembersdetailsComponent implements OnInit {

  dateToday:any=Date.now()
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver,
    private route:Router) { }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  logout(){
    this.route.navigateByUrl('/login');
  }

  displayedColumns: string[] = [ 'month', 'transactionId',  'paymentType', 'dateToday' ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
