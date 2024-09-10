import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true
})
export class MainPageComponent {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ test }) => {
      console.log('data in component', test)
    })
  }
}