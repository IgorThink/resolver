import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TestResolver implements Resolve<any> {
  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('resolver work')
    return 'test';
  }
}