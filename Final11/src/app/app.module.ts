import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersServiceService } from './users-service.service';
import { FormsModule } from '@angular/forms';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ImageGalleryComponent,
    VideoBackgroundComponent,
    PipeExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
