import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


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
