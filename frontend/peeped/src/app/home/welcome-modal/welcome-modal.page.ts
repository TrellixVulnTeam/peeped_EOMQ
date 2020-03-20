import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.page.html',
  styleUrls: ['./welcome-modal.page.scss'],
})
export class WelcomeModalPage {

  constructor(navParams: NavParams, public modalCtrl: ModalController) {

  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}


