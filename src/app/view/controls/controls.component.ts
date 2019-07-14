import { Component, OnInit, Input } from '@angular/core';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() videoComponent: PlayerComponent;

  play: boolean;
  mute: boolean;

  size = 'large';

  constructor() { }

  ngOnInit() {
    this.play = false;
    this.mute = false;
  }


  togglePlayPause() {
    if (this.videoComponent.videoPlayer.nativeElement.paused || this.videoComponent.videoPlayer.nativeElement.ended) {
      this.videoComponent.videoPlayer.nativeElement.play();
      this.play = true;
    } else {
      this.videoComponent.videoPlayer.nativeElement.pause();
      this.play = false;
    }

  }
  

  stopPlayer() {
    this.videoComponent.videoPlayer.nativeElement.pause();
    this.videoComponent.videoPlayer.nativeElement.currentTime = 0;
    this.play = false;
  }

  
  toggleMute() {
    if (this.videoComponent.videoPlayer.nativeElement.muted) {
      this.videoComponent.videoPlayer.nativeElement.muted = false;
      this.mute = false;
    } else {
      this.videoComponent.videoPlayer.nativeElement.muted = true;
      this.mute = true;
    }
  }

  changeVolume(direction) {}

  
  updateProgressBar() {
    let percentage = Math.floor((100 / this.videoComponent.videoPlayer.nativeElement.duration) * this.videoComponent.videoPlayer.nativeElement.currentTime);
    this.videoComponent.progressBar.nativeElement.style.width = percentage + '%';
    this.videoComponent.progressBar.nativeElement.innerHTML = percentage + '% played';
  }

 
  resetPlayer() {
    this.videoComponent.progressBar.nativeElement.value = 0;
    this.videoComponent.videoPlayer.nativeElement.currentTime = 0;
  }

  
  replayMedia() {
    this.resetPlayer();
    this.videoComponent.videoPlayer.nativeElement.play();
    this.play = true;
  }
}
