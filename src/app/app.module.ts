import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadeauCardComponent } from './components/cadeau-card/cadeau-card.component';
import { CadeauListComponent } from './components/cadeau-list/cadeau-list.component';
import { CadeauComponent } from './pages/cadeau/cadeau.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateCadeauxComponent } from './pages/create-cadeaux/create-cadeaux.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CadeauCardComponent,
    CadeauListComponent,
    CadeauComponent,
    HomeComponent,
    CreateCadeauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
