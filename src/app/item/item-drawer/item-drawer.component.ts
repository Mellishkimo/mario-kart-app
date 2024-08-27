import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { itemDescriptionList } from 'src/data/itemDescriptionList';
import { probabilityList } from 'src/data/probabilityList';

@Component({
  selector: 'app-item-drawer',
  templateUrl: './item-drawer.component.html',
  styleUrls: ['./item-drawer.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class ItemDrawerComponent {
  itemDescriptionList = itemDescriptionList;
  probabilityList = probabilityList;
  character = localStorage.getItem('character');
  drawnItem: string = localStorage.getItem('drawnItem') || 'HeatLogo';
  itemDescription: string = localStorage.getItem('itemDescription') || '';
  itemName: string = '';
  position: string = localStorage.getItem('position') || 'Position';
  hasFakeBlock = false;
  flip: string = 'inactive';

  drawItem(position: string) {
    this.flip = 'inactive';
    if (this.hasFakeBlock) {
      let dangerValue = Math.round(Math.random() * 5);
      if (dangerValue === 1) {
        this.playAudio('Ouch');
        this.hasFakeBlock = false;
        this.itemDescription = 'Go back to first gear, loser';
        localStorage.setItem('drawnItem', `Ouch${this.character}`);
        return (this.drawnItem = `Ouch${this.character}`);
      }
    }

    let drawableItems = this.probabilityList.find(
      (item) => item.position === position
    )?.probabilities;
    let randomValue = Math.round(Math.random() * 200);

    if (drawableItems) {
      for (let i = 1; i < drawableItems.length; i++) {
        if (randomValue > drawableItems[i].value) {
          return this.getItemNameAndDescription(
            (this.drawnItem = drawableItems[i - 1].item)
          );
        } else if (i === drawableItems.length - 1) {
          return this.getItemNameAndDescription(
            (this.drawnItem = drawableItems[i].item)
          );
        }
      }
      return this.getItemNameAndDescription(
        (this.drawnItem = drawableItems[0].item)
      );
    } else {
      return (this.drawnItem = 'No items available');
    }
  }

  flipCard() {
    if (this.drawnItem !== 'HeatLogo') {
      this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
    }
  }

  getItemNameAndDescription(itemName: string) {
    let item = this.itemDescriptionList.find(
      (e) => e.name.replaceAll(' ', '') === itemName
    );
    if (item) {
      this.itemName = item.name;
      this.itemDescription = item.description;
    }
    localStorage.setItem('drawnItem', itemName);
    localStorage.setItem('itemDescription', this.itemDescription);
    return itemName;
  }

  playAudio(clipName: string) {
    const audio = new Audio();
    audio.src = `assets/audio/${this.character}${clipName}.wav`;
    audio.load();
    audio.play();
  }

  setPosition(position: string) {
    this.position = position;
    localStorage.setItem('position', position);
  }

  toggleFakeBlock() {
    this.hasFakeBlock = !this.hasFakeBlock;
  }
}
