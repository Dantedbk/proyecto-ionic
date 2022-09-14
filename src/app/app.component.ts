import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private router : Router
  usuario : String
  contrasena : String
  mensaje : String
  constructor(private alertController: AlertController,
    private toastController: ToastController) { }

  setUsuario (usuario : String){
    this.usuario = usuario
  }

  getUsuario (){
    return this.usuario
  }
  
}
