import { Component, OnInit } from '@angular/core';
import { Beggining } from 'src/app/models/for-homepage';
import { Intro, IntroInfo } from 'src/app/models/history';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    intro :Intro =new Intro(IntroInfo)
    beginning:Beggining= new Beggining('Start Your The First Journey In The Most Popular Fantasy World',
    'What is ANIME?',
    'Anime (アニメ) is a Japanese term for hand-drawn or computer animation. The word is the abbreviated pronunciation of "animation" in Japanese, where this term references all animation. Outside Japan, anime is used to refer specifically to animation from Japan or as a Japanese-disseminated animation style.',
    'Anime consists of an ideal story-telling mechanism, combining graphic art, characterization, cinematography, and other forms of imaginative and individualistic techniques. The production of anime focuses less on the animation of movement and more on the realism of settings as well as the use of camera effects, including panning, zooming, and angle shots. Being hand-drawn, anime is separated from reality by a crucial gap of fiction that provides an ideal path for escapism that audiences can immerse themselves into with relative ease.',
    'https://mobimg.b-cdn.net/v3/fetch/86/8665e0f11552960fdb872bccefe12f66.jpeg',
    'Origination',
    'The earliest commercial Japanese animation dates to 1917, and Japanese anime production has since continued to increase steadily. The characteristic anime art style emerged in the 1960s with the works of Osamu Tezuka.',
    'Anime Vs. Animation',
    'The word anime has also been criticised. In 1987, Hayao Miyazaki stated that he despised the truncated word anime because to him it represented the desolation of the Japanese animation industry.','')
  constructor() { }

  ngOnInit(): void {
  }

}
