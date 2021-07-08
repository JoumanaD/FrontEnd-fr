import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FicheComponent } from './fiche/fiche.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'etudiant', component:EtudiantComponent},
  {path:'fiche', component:FicheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
