import { Component, OnInit, Input } from '@angular/core';

export class Video {
  title: string;
  url: string;
  status: string;
  approved: boolean;
  likes: number;
  unlike: number;
  currentStatus: string;
  exitplayprogress: number;
}

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  @Input() videos: Video;

  constructor() { }

  ngOnInit() {
  }

  

}
