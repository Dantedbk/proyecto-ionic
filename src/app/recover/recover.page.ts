import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  correo : String
  constructor(
    private router : Router,
    private toastController: ToastController) { }

  ngOnInit() {
  }


  volverHome() {
    this.router.navigate(["./home"])
  }

  async recuperar(){
    let regex = new RegExp(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)
    if (this.correo == null || "" ){
      const toast = await this.toastController.create({
        message : "Introduzca un correo electronico",
        duration: 2000 
    })
    toast.present();
    }
    else if (!regex.test(this.correo.toString())){
      const toast = await this.toastController.create({
        message : "Introduzca un formato de correo válido",
        duration: 2000

    })
    toast.present();
    }
    else if (this.correo != null || ""){
      this.correo = null
      const toast = await this.toastController.create({
        message : "De existir registro, se enviarán instrucciones de restablecimiento",
        duration: 2000

    })
    toast.present();
    }
    

  }

}
