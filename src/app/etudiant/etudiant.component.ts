import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  typeSS: String[] = [
    "Ayant Droit",
    "Etudiant",
    "Assuré Volontaire",
    "Etudiant Etranger",
  ];

  assurance: String[] = [
    "CPAM",
    "MSA",
    "Travailleur indépendant",
    "régimes spéciaux",
  ];

  pays: String[] = [
    "CPAM",
    "MSA",
    "Travailleur indépendant",
    "régimes spéciaux",
  ];

  adresseForm = this.formBuilder.group({
    adresse:new FormControl('', [
      Validators.required,
    ]),
    codepostale:new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    ville:new FormControl('', [
      Validators.required,
    ]),
    pays:new FormControl('France', [
      Validators.required,
    ]),
  });

  etudiantForm = this.formBuilder.group({
    IDetudiant: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
    ]),
    nom:new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z ]*"),
    ]),
    prenom:new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z ]*"),
    ]),
    numTeleph:new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
    ]),
    email:new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    TypeSS:new FormControl('', [
      Validators.required,
    ]),
    CAM:new FormControl('', [
      Validators.required,
    ]),
    inscrit:new FormControl('', [
      Validators.required,
    ]),
    enseingnant:new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z ]*"),
    ]),
  })

}
