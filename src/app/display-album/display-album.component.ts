import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../models/Album';
import {Artist} from "../models/Artist";

@Component({
	selector: 'app-display-album',
	templateUrl: './display-album.component.html',
	styleUrls: ['./display-album.component.css'],
})
export class DisplayAlbumComponent implements OnInit {
	@Input() album: Album | null = null;


	constructor() { }

	ngOnInit() { }
}
