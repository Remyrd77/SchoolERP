import { Injectable } from '@angular/core';
import { User, User1 } from '../models/user';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore'
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: Observable<User[]>;
    items: Observable<any[]>;
    private dbPath = '/data';
    userRef: AngularFireList<User> = null;

    constructor(
        public router: Router,
        public firestore: AngularFirestore,
        public auth: AngularFireAuth,
        private db: AngularFireDatabase) {
        this.userRef = db.list(this.dbPath);
    }

    async login(email: string, password: string) {
        let auth = firebase.default.auth();
        return await auth.signInWithEmailAndPassword(email, password);
    }

    getUserData() {
        this.items = this.firestore.collection('teachers').valueChanges();
        return this.items;
    }

    setUserIdInLocalStorage() {
        let loggedInuser = this.getLoggedInUserInfo();
        let userId;
        return this.firestore.collection('teachers').snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
                const id = a.payload.doc.id;
                const data = a.payload.doc.data();
                return { id, data };
            })
        })).subscribe(res => {
            if (res) {
                res.forEach(data => {
                    const user: User1 = <User1>data.data
                    if (user.email === loggedInuser.email) {
                        localStorage.setItem('USERID', data.id);
                    }
                });
            }
        });
    }

    getTeachersData(): AngularFireList<User> {
        return this.userRef;
    }

    getLoggedInUserInfo() {
        let user = localStorage.getItem('user');
        return JSON.parse(user);
    }

    getUserIdFromLocal() {
        return localStorage.getItem('USERID');
    }
    applyLeave(_id, key, _value) {
        let doc = this.firestore.collection('teachers', ref =>
            ref.where('id', '==', _id));
        doc.snapshotChanges().subscribe((res: any) => {
            this.firestore.collection('teachers').doc(_id).update({ key: _value });
        })
    }

    getFireStoreTime(ngbDate): firebase.default.firestore.Timestamp {
        return firebase.default.firestore.Timestamp.fromDate(ngbDate);
    }
}