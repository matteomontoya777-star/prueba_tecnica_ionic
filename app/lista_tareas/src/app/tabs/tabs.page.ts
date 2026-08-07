import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/angular/standalone';

import { homeOutline, listOutline, folderOpenOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { FeatureFlagService } from '../services/feature-flag.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet
  ]
})
export class TabsPage {

  constructor(
    public featureFlagService: FeatureFlagService
  ) {

    addIcons({
      homeOutline,
      listOutline,
      folderOpenOutline
    });

    this.inicializar();

  }

  async inicializar() {

    await this.featureFlagService.cargar();

  }

}