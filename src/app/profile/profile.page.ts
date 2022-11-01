import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    cameraOptions: CameraOptions = {
      allowEdit:true,
      correctOrientation:true,
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
  }
  photo: any

  constructor(
    private router : Router,
    private webview : WebView,
    private camera : Camera,
    private alertCtrl : AlertController
  ) { } 

  ngOnInit() {
    document.getElementById("wea").innerHTML = localStorage.getItem('usuario')
  }
  
  volverHome() {
    this.router.navigate(["./home"])
    localStorage.clear();
  }
  async Marcar(){

    let alertBox = await this.alertCtrl.create({
      header: 'aja',
      buttons: [
        {
          text: 'Camara',
          handler: () => this.camera.getPicture(this.cameraOptions).then(res=>{
            console.log('response = ', res);
            this.photo = res;
          })
        },
        {
          text: 'wea'
        }
      ]
  })
  await alertBox.present();

  }
}
