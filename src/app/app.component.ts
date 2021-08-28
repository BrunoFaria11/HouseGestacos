import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {

    

      if (event instanceof NavigationEnd) {
        const node = document.createElement('script');
        node.src = '../assets/custom/js/main.js'
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    })

  }

  ngOnInit() {

  }

}
