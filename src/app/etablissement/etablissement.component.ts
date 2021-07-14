import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }


  etabForm = this.formBuilder.group({
    raisonSociale:[''],
    representationLegal:[''],
    fonction:[''],
    adresse:[''],
    noSiret:[''],
    codeAPE:[''],
    domaineDAct:[''],
    effectif:[''],
    adresseSA:[''],
    nomRH:[''],
    prenomRH:[''],
    numTelephRH:[''],
    emailRH:[''],
    adresseRH:['']

  })
}
