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
  usuario : String
  contrasena : String
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

    if(this.usuario.toString() == '')
    {
      const toast = await this.toastController.create({
        message : "Falta escribir el nombre",
        duration: 2000
    })
    toast.present();

  }
    else if (this.contrasena.toString() == '')
    {
      const toast = await this.toastController.create({
        message : this.usuario.toString(),
        duration: 2000
    })
    toast.present();
    }
    else
      alert(this.contrasena)


}



}
