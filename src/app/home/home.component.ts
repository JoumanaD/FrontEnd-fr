import { Fiche } from './../generators';
import { ShareService } from './../share.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'FICHE DE RENSEIGNEMENTS DE STAGE - 2021/2022';
  private fiche: Fiche | null = null;

  constructor(private ficheservice:ShareService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this
  }

  ficheForm = this.formBuilder.group({
    IDetudiant: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
    ]),
    noFiche: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]*")
    ]),
  })
  getfichepouretud(){
    this.ficheservice.getficheList().subscribe
  }

  onClick(){
    console.log(this.ficheForm.value);
    this.ficheservice.addfiche(this.ficheForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

}
