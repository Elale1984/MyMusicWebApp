import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAlbumComponent } from './create-album/create-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'home'},
	{path: 'home', component: HomeComponent},
	{ path: 'create', component: CreateAlbumComponent },
	{ path: 'delete/:artist/:id', component: DeleteAlbumComponent },
	{ path: 'display/:id', component: DisplayAlbumComponent },
	{ path: 'edit/:artist/:id', component: EditAlbumComponent },
	{ path: 'list-artists', component: ListArtistsComponent },
	{ path: 'list-albums', component: ListAlbumsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
