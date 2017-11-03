import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <header>
      <div class="header">
        <div class="headerLogo">
            <img src="../../Images/MassasCantinaLogo.png">
        </div>
        <div class="headerMenu">
            <ul class="nav nav-pills">
                <li routerLinkActive="active"><a [routerLink]="['/home']">Home</a></li>
                <li routerLinkActive="active" class="dropdown"><a [routerLink]="['#']" class="dropdown-toggle" data-toggle="dropdown">Produtos
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li routerLinkActive="active"><a [routerLink]="['/massa']">Massas</a></li>
                      <li><a href="#">Submenu 1-2</a></li>
                      <li><a href="#">Submenu 1-3</a></li> 
                    </ul>
                </li>
                <li routerLinkActive="active"><a [routerLink]="['/auth']">Contato</a></li>
                <li routerLinkActive="active"><a [routerLink]="['/auth']">Sobre</a></li>
            </ul>
        </div>
    </div>
    </header>
    `
})

export class HeaderComponent { }