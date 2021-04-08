import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersServiceService } from './users-service.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IvyGalleryModule } from 'angular-gallery';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Page2Component } from './page2/page2.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Page2Component,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyGalleryModule,
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
