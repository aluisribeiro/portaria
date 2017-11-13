import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Pessoa } from '../../models/pessoa';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nome : string;
  logado = false as boolean;

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public loadingCtrl : LoadingController,
    public navParams: NavParams,
    private fath : AngularFireAuth,
    private fdb : AngularFireDatabase
    ) {
  }

  open(){
    const loading = this.loadingCtrl.create({
      content: 'Avisando a portaria...'
    });
    loading.present();
    this.fdb.object('/portarias/-Kxj8DMEiAEuqU_GrOli').update({ nome: this.nome, panico: false});
    loading.dismiss();
  }

  dontOpen(){
    const loading = this.loadingCtrl.create({
      content: 'Avisando a portaria...'
    });
    loading.present();
    this.fdb.object('/portarias/-Kxj8DMEiAEuqU_GrOli').update({ nome: this.nome, panico: true});
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

  login(){
    this.fath.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider() ).then( () => {
      this.fath.auth.getRedirectResult().then( res => {
        console.log("oi");
        this.nome = res.user.displayName;
        this.logado = true;
      });
    })
  }


}
