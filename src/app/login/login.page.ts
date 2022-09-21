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
  goToRegistro() {
    this.router.navigate(['./registro'])
  }

  async ingresar (){

    if(this.usuario == null || "")
    {
      const toast = await this.toastController.create({
        message : "Falta escribir el nombre",
        duration: 2000
        
    })
    toast.present();

  }
    else if (this.contrasena == null || "")
    {
      const toast = await this.toastController.create({
        message : "Falta escribir la contraseña",
        duration: 2000
    })
    toast.present();
    }
    else 
      this.router.navigate(["./profile"])
      localStorage.setItem('usuario',this.usuario.toString())
    
}



}
