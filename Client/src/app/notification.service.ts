import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {
    obs = new Subject();
    emitter = this.obs.asObservable();
    display(type,message){
        this.obs.next({type,message})
    }
}