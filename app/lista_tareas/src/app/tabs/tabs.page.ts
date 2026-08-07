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
  constructor() {
    addIcons({
      homeOutline,
      listOutline,
      folderOpenOutline
    });
  }
}