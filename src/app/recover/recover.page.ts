import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  volverHome() {
    this.router.navigate(["./home"])
  }

}
