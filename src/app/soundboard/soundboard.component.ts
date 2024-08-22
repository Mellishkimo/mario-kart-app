import { Component } from '@angular/core';

@Component({
  selector: 'app-soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.css'],
})
export class SoundboardComponent {
  character = localStorage.getItem('character');

  playBoost() {
    const audio = new Audio();
    audio.src = `/assets/audio/boost/${this.character}Boost.wav`;
    audio.load();
    audio.play();
  }

  playFireItem() {
    const audio = new Audio();
    audio.src = `mario-kart-app/assets/audio/fire-item/${this.character}FireItem.wav`;
    audio.load();
    audio.play();
  }

  playHitOpponent() {
    const audio = new Audio();
    audio.src = `assets/audio/hit-opponent/${this.character}HitOpponent.wav`;
    audio.load();
    audio.play();
  }

  playOuch() {
    const audio = new Audio();
    audio.src = `assets/audio/ouch/${this.character}Ouch.wav`;
    audio.load();
    audio.play();
  }

  playVictory() {
    const audio = new Audio();
    audio.src = `assets/audio/victory/${this.character}Victory.wav`;
    audio.load();
    audio.play();
  }
}
