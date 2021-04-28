import { Injectable } from "@angular/core";
import { AngularFireList } from '@angular/fire/database/database';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private dbPath = '/data';
    userRef: AngularFireList<User> = null;
    constructor() {

    }

}