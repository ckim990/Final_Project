import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <app-home></app-home>
    <script>
    </script>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-header></app-header>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
