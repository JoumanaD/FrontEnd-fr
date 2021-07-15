import { EtablissementComponent } from './etablissement/etablissement.component';
import { ShowEtudiantComponent } from './etudiant/show-etudiant/show-etudiant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'etudiants', component:ShowEtudiantComponent},
  {path:'fiche', component:FicheComponent},
  {path:'fiche/etudiant', component:EtudiantComponent},
  {path:'fiche/etab', component:EtablissementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
