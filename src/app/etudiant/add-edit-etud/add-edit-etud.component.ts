import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/generators';

@Component({
  selector: 'app-add-edit-etud',
  templateUrl: './add-edit-etud.component.html',
  styleUrls: ['./add-edit-etud.component.css']
})
export class AddEditEtudComponent implements OnInit {
  @Input() etud!:Etudiant;
  constructor() { }

  ngOnInit(): void {

  }

}
