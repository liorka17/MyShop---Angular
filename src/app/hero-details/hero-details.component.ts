// קובץ קיים: src/app/hero-details/hero-details.component.ts

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero?: Hero; // מגיע מהאבא

  @Output() alertRequested = new EventEmitter<string>(); 
  // אירוע שהבן שולח לאבא

  ngOnInit(): void { }

  onButtonClick() {
    this.alertRequested.emit(); // מפעיל את האירוע → האבא יקבל אותו
  }
}
