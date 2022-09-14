import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private appComponent : AppComponent
  ) { }

  ngOnInit() {
    document.getElementById("wea").innerHTML = localStorage.getItem('usuario')
  }

}
