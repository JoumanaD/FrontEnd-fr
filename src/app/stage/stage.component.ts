import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  tempspartiel: boolean = false;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  dispo: String[] = [
    "Importante",
    "Partielle",
    "Inexistante",
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

  etabForm = this.formBuilder.group({
    raisonSociale: new FormControl('', [
      Validators.required,
    ]),
    representationLegal: new FormControl('', [
      Validators.required,
    ]),
    fonction: new FormControl('', [
      Validators.required,
    ]),
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
    noSiret: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14),
    ]),
    codeAPE: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
    ]),
    domaineDAct: new FormControl('', [
      Validators.required,
    ]),
    effectif: new FormControl('', [
      Validators.required,
    ]),
    adresseSA: new FormControl('', [
      Validators.required,
    ]),
    codepostaleSA: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    villeSA :new FormControl('', [
      Validators.required,
    ]),
    paysSA: new FormControl('France', [
      Validators.required,
    ]),
    nomRH: new FormControl('', [
      Validators.required,
    ]),
    prenomRH: new FormControl('', [
      Validators.required,
    ]),
    numTelephRH: new FormControl('', [
      Validators.required,
    ]),
    emailRH: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    adresseRH: new FormControl('', [
      Validators.required,
    ]),
    codepostaleRH: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
    villeRH :new FormControl('', [
      Validators.required,
    ]),
    paysRH: new FormControl('France', [
      Validators.required,
    ]),

  })
}
