import {Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showHeader: boolean;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart)
      )
      .subscribe((event: NavigationStart) => {
        this.showHeader = !(event.url.includes('/login'));
      });
  }
}
