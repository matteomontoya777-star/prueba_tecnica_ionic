import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';

import {
  getRemoteConfig,
  fetchAndActivate,
  getValue
} from 'firebase/remote-config';

const firebaseConfig = {

  apiKey: 'AIzaSyBvKHQa5MnG_oW694gU2K3ym-h4U-5jvjE',
  authDomain: 'prueba-ionic-222ad.firebaseapp.com',
  projectId: 'prueba-ionic-222ad',
  storageBucket: 'prueba-ionic-222ad.firebasestorage.app',
  messagingSenderId: '538718529769',
  appId: '1:538718529769:web:4628c57e524408c93a6878'

};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private app = initializeApp(firebaseConfig);

  private remoteConfig = getRemoteConfig(this.app);

  constructor() {

    this.remoteConfig.settings = {

        minimumFetchIntervalMillis: 0,

        fetchTimeoutMillis: 60000

    };

  }

    obtenerFeatureFlag(nombre: string): boolean {

    return getValue(
      this.remoteConfig,
      nombre
    ).asBoolean();

  }

  async inicializar(): Promise<void> {

        try {

            await fetchAndActivate(this.remoteConfig);

        } catch (error) {

            console.error('Error cargando Remote Config', error);

        }

    }

  

}