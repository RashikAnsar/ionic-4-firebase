import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Slides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage {

  @ViewChild(Slides)
  slides: Slides;

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  async finish() {
    await this.storage.set('tutorialComplete', true);
  }

  next() {
    this.slides.slideNext();
  }

}
