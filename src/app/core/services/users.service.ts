import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { User } from 'src/app/class/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  create(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        const { user } = credential;
        const actionCodeSettings = {
          url: `http://localhost:4200/?newAccount=true&email=${user!.email}`
        };

        user!.sendEmailVerification(actionCodeSettings);

        this.db.object(`/users/${user!.uid}`).set({ uid: user!.uid, email: user!.email });
      });
  }

  update(values: { displayName?: string, photoURL?: string }): Promise<void> {
    return this.afAuth.currentUser.then((user: firebase.User | null) => {
      if (user) {
        user.updateProfile(values)
          .then(() => this.db.object(`/users/${user.uid}`).update(values))
          .catch(error => console.error(error));
      }
    });
  }
}
