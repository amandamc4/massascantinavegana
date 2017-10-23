import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component'
import { ErrorService } from './error/error.service';
import { DobraComponent } from './massas/dobra.component';
import { DobraService } from './massas/dobra.service';
import { DobraListComponent } from './massas/dobra-list.component';


@NgModule({
    declarations: [AppComponent, HomeComponent, ErrorComponent, DobraComponent, DobraListComponent],
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing],  
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ErrorService, DobraService],
    bootstrap: [AppComponent]
})

export class AppModule { }