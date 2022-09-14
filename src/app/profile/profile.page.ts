import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    document.getElementById("wea").innerHTML = localStorage.getItem('usuario')
  }
  
  volverHome() {
    this.router.navigate(["./home"])
    localStorage.clear();
  }
}
