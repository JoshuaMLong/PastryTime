import { Injectable } from "@angular/core";
import { CdkTreeNodeToggle } from '@angular/cdk/tree';

import { Subject } from "rxjs";
@Injectable()
export class CartService {
    private toggle = new Subject<boolean>();
    public $toggle = this.toggle.asObservable();
    /**
     *
     */
    constructor() {
    }
    setToggle(val: boolean)
    {
        this.toggle.next(val);
    }
}