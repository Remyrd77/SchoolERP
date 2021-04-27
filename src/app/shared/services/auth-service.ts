import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;
    items: Observable<any[]>;
    constructor(
        public router: Router,
        public firestore: AngularFirestore,
        public auth: AngularFireAuth) { }

    async login(email: string, password: string) {
        let auth = firebase.default.auth();
        return await auth.signInWithEmailAndPassword(email, password);
    }

    getUserData() {
        this.items = this.firestore.collection('bethelData').valueChanges();
        this.items.subscribe(res => console.log(res));
    }
    
}