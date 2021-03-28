import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addsocietyexpenses',
  templateUrl: './addsocietyexpenses.component.html',
  styleUrls: ['./addsocietyexpenses.component.css']
})
export class AddsocietyexpensesComponent implements OnInit {

  ngOnInit(): void {
  }
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

  addPayment(){
    this.route.navigateByUrl('/addpayment')
  }

  save(){
    this.route.navigateByUrl('/home');
  }
  cancel(){
    this.route.navigateByUrl('/home');
  }
}
