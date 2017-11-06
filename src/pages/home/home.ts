import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Pessoa } from '../../models/pessoa';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public loadingCtrl : LoadingController,
    public navParams: NavParams,
    private fdb : AngularFireDatabase
    ) {
  }

  open(){
    const loading = this.loadingCtrl.create({
      content: 'Avisando a portaria...'
    });
    loading.present();
    this.fdb.object('/portarias/-Kxj8DMEiAEuqU_GrOli').update({ nome: "Joaquim José da Silva", panico: false});
    loading.dismiss();
  }

  dontOpen(){
    const loading = this.loadingCtrl.create({
      content: 'Avisando a portaria...'
    });
    loading.present();
    this.fdb.object('/portarias/-Kxj8DMEiAEuqU_GrOli').update({ nome: "Joaquim José da Silva", panico: true});
    loading.dismiss();   
  }

  clear(){
    const loading = this.loadingCtrl.create({
      content: 'Avisando a portaria...'
    });
    loading.present();
    this.fdb.object('/portarias/-Kxj8DMEiAEuqU_GrOli').update({ nome: "", panico: false});
    loading.dismiss();   
  }

}
