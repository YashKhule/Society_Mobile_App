import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private elementRef: ElementRef,
    private route:Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#002b5c';
 }
 login(){
   this.route.navigateByUrl('/home');
 }

}
