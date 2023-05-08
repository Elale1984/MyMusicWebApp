import { Component, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Track } from '../models/Track';
import { MusicServiceService } from '../service/music-service.service';
import {Artist} from "../models/Artist";
import {NgForm} from "@angular/forms";

@Component({
	selector: 'app-create-album',
	templateUrl: './create-album.component.html',
	styleUrls: ['./create-album.component.css'],
})
export class CreateAlbumComponent implements OnInit {
	artist: Artist = new Artist( 0, "");
	album: Album = new Album(Math.floor(Math.random() * 1000000), '', '', '', 0, '', []);
	tracksRaw: string = '';
	wasSubmitted: boolean = false;

	constructor(private service: MusicServiceService) { }

	ngOnInit() { }

	public onSubmitAlbum(albumCreated: NgForm) {

		const artist = albumCreated.value.artists;
		const artistStatus = this.service.createArtist(artist);
		console.log(artistStatus);
		this.album.Id = this.service.getAlbums().length - 1;
		this.album.Title = albumCreated.value.title;
		this.album.Artist = artist;
		this.album.Description = albumCreated.value.Description;
		this.album.Year = albumCreated.value.year;
		this.album.Image = albumCreated.value.Image;
		const tracks: Track[] = this.parseTracks(albumCreated.value.tracks);
		console.log("Tracks: ", tracks)
		this.album.Tracks = tracks;







		const album = this.service.createAlbum(this.album);
		console.log('The return from createAlbum() was ' + album);
		// this.wasSubmitted = true;
	}

	private parseTracks(rawTracks: string): Track[] {
		const tracks: Track[] = [];
		const lines = rawTracks.split('\n');

		lines.forEach((line, index) => {
			const [title, lyrics, video] = line.split(':');
			tracks.push(new Track(Math.floor(Math.random() * 1000000), index + 1, title, lyrics || '', video || ''));
		});

		return tracks;
	}
}
