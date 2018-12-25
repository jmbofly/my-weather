import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-weather'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  entryComponents: [NavbarComponent],
  exports: [SharedModule, NavbarComponent],
})
export class CoreModule {}
