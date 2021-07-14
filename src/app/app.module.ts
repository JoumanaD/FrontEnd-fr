import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CdkColumnDef } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FicheComponent } from './fiche/fiche.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEditEtudComponent } from './etudiant/add-edit-etud/add-edit-etud.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { ShowEtudiantComponent } from './etudiant/show-etudiant/show-etudiant.component';

import { ShareService } from './share.service';

import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material-module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtudiantComponent,
    FicheComponent,
    AddEditEtudComponent,
    EtablissementComponent,
    ShowEtudiantComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatStepperModule,
    MatTableModule,
  ],

  providers: [
    ShareService,
    CdkColumnDef,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
