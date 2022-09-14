import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  mensaje : String
  constructor(
    private router : Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private appComponent : AppComponent
    ) { }

  ngOnInit() {
  }

  volverHome() {
    this.router.navigate(["./home"])
  }

  recuperar(){
    this.router.navigate(["./recover"])
  }


  async ingresar (nom: HTMLInputElement, cont: HTMLInputElement){

    if(nom.value == '')
    {
      const toast = await this.toastController.create({
        message : "Falta escribir el nombre",
        duration: 2000
    })
    toast.present();

  }
    else if (cont.value == '')
    {
      const toast = await this.toastController.create({
        message : "Falta escribir la contraseña",
        duration: 2000
    })
    toast.present();
    }
    else
      this.router.navigate(["./profile"])
      this.appComponent.usuario = nom.toString()


}



}
