import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
	declarations: [
		AppComponent,
		CreateAlbumComponent,
		DeleteAlbumComponent,
		DisplayAlbumComponent,
		EditAlbumComponent,
		ListAlbumsComponent,
		ListArtistsComponent,
  HomeComponent,
	],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,

    ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
