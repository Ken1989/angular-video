import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from 'src/app/view/player/player.component';
import { ControlsComponent } from 'src/app/view/controls/controls.component';

@Component({
  selector: 'app-contianer-layout',
  templateUrl: './contianer-layout.component.html',
  styleUrls: ['./contianer-layout.component.scss']
})
export class ContianerLayoutComponent implements OnInit {

  @ViewChild(PlayerComponent, {static: false}) childPlayerView: PlayerComponent;
  @ViewChild(ControlsComponent, {static: false}) childVideoCtrl: ControlsComponent;
  videos: [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.childPlayerView.videoPlayer.nativeElement.controls = false;
    this.childPlayerView.videoPlayer.nativeElement.addEventListener('timeupdate', () => this.childVideoCtrl.updateProgressBar(), false);
    this.childPlayerView.videoPlayer.nativeElement.addEventListener('play', () => console.log('video play'), false);
    this.childPlayerView.videoPlayer.nativeElement.addEventListener('pause', () => console.log('video pause'), false);
    this.childPlayerView.videoPlayer.nativeElement.addEventListener('volumechange', () => console.log('video volumenchanged'), false);
    this.childPlayerView.videoPlayer.nativeElement.addEventListener('ended', () => console.log('video ended'), false);
  }

}
