import { ShareService } from './../share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'FICHE DE RENSEIGNEMENTS DE STAGE - 2021/2022';

  constructor(private ficheservice:ShareService) { }

  ngOnInit(): void {
  }




}
