import { Component, OnInit } from '@angular/core';
import { Intro, IntroInfo } from '../../models/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
     intro:Intro=new Intro(IntroInfo)


  constructor() { }

  ngOnInit(): void {
  }

}
