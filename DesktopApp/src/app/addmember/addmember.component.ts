import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
   
@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  requiredForm: FormGroup;
  constructor(private observer: BreakpointObserver,
    private route: Router, private fb: FormBuilder) {
     this.myForm();
    }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

     myForm() {
      this.requiredForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
        mobile: ['', Validators.required ],
        house: ['', Validators.required],
        date: ['', Validators.required],
        ownership: ['', Validators.required],
        authorized: ['', Validators.required ],
        sharecertificate: ['', Validators.required ],
        unit: ['', Validators.required ],
        registrycopy: ['', Validators.required ],
        nominee: ['', Validators.required ],
        endrose: ['', Validators.required ],
        municipaltax: ['', Validators.required ]
      });
   }

  logout(){
    this.route.navigateByUrl('/login');
  }

  saveMember() {
    
  }

  cancel(){
    this.route.navigateByUrl('/members');
  }
 
}
