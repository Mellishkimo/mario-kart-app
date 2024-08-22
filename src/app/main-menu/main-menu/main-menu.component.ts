import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  character: string = 'Mario';

  ngOnInit(): void {
    if (localStorage.getItem('character')) {
      this.character = localStorage.getItem('character') || 'Mario';
    } else {
      localStorage.setItem('character', this.character);
    }
  }

  playSelectSound(character: string) {
    let audio = new Audio();
    audio.src = `../assets/audio/select/${character}Select.wav`;
    audio.load();
    audio.play();
  }

  setCharacter(character: string) {
    this.character = character;
    localStorage.setItem('character', character);
    this.playSelectSound(character);
  }
}
