import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.css']
})
export class AddnoticeComponent implements OnInit {
  ngOnInit(): void {
  }
  dateToday:any=Date.now()
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  requiredForm: FormGroup;
  constructor(private observer: BreakpointObserver,
    private route: Router, private fb: FormBuilder) {
     this.myForm();
    }

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
     myForm() {
      this.requiredForm = this.fb.group({
        noticeDate: ['', Validators.required],
        notice: ['', Validators.required],
      });
   }
  cancel(){
    this.route.navigateByUrl('/notices');
  }

}
