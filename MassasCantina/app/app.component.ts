import { Component } from "@angular/core"
@Component({
    selector: "user-app",
    template: `
              <div id="container">
              <div class="header">
                <app-header></app-header>
               </div>
                <router-outlet></router-outlet>
              </div>    
`
})

export class AppComponent {

}