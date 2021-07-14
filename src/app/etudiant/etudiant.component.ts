import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
  }

  etudiantForm = this.formBuilder.group({
    IDetudiant:[''],
    nom:[''],
    prenom:[''],
    numTeleph:[''],
    email:[''],
    adresse:[''],
    codepostale:[''],
    ville:[''],
    pays:[''],
    TypeSS:[''],
    CAM:[''],
    inscrit:[''],
    enseingnant:['']
  })

}
