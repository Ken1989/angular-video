import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ViewChild('mediaVideo', {static: false}) videoPlayer: ElementRef;

  @ViewChild('progressBar', {static: false}) progressBar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
