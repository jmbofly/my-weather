import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth, firestore } from 'firebase/app';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.currentUser$ = afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    const cred = this.oAuth(provider);
    return {
      user: async () => {
        return cred
          .then(res => {
            console.log('user data response: ', res.user);
            return res.user;
          })
          .catch(err => console.log('error: ', err));
      },
      additionalInfo: async () => {
        return cred
          .then(res => {
            return res.additionalUserInfo;
          })
          .catch(err => console.log('error: ', err));
      }
    };
  }

  private oAuth(provider: auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
