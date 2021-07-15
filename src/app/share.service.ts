import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant, Adresse, Fiche, Etablissement, RHservice, Accueilservice, Date, Gratification, Tuteur, Stage } from './generators';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  readonly APIUrl = "http://127.0.0.1:8000"

  constructor(private http:HttpClient) { }

  //Etudiant
  getEtudiantList(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.APIUrl + '/etudiant');
  }

  addEtudiant(e: Etudiant){
    return this.http.post(this.APIUrl + '/etudiant', e);
  }

  editEtudiant(e: Etudiant){
    return this.http.put(this.APIUrl + '/etudiant', e);
  }

  deleteEtudiant(e: Etudiant){
    return this.http.delete(this.APIUrl + '/etudiant/'+e);
  }

  //Adresse
  getAdresseList(): Observable<Adresse[]>{
    return this.http.get<Adresse[]>(this.APIUrl + '/adresse');
  }

  addAdresse(a: Adresse){
    return this.http.post(this.APIUrl + '/adresse', a);
  }

  editAdresse(a: Adresse){
    return this.http.put(this.APIUrl + '/adresse', a);
  }

  deleteAdresse(a: Adresse){
    return this.http.delete(this.APIUrl + '/adresse/'+a);
  }

  //Fiche
  getficheList(): Observable<Fiche[]>{
    return this.http.get<Fiche[]>(this.APIUrl + '/fiche');
  }

  addfiche(f: Fiche){
    return this.http.post(this.APIUrl + '/fiche/', f);
  }

  editfiche(f: Fiche){
    return this.http.put(this.APIUrl + '/fiche/', f);
  }

  deletefiche(f: Fiche){
    return this.http.delete(this.APIUrl + '/fiche/'+f);
  }

  //Etablissement
  getetablissementList(): Observable<Etablissement[]>{
    return this.http.get<Etablissement[]>(this.APIUrl + '/etablissement');
  }

  addetablissement(e: Etablissement){
    return this.http.post(this.APIUrl + '/etablissement', e);
  }

  editetablissement(e: Etablissement){
    return this.http.put(this.APIUrl + '/etablissement', e);
  }

  deleteetablissement(e: Etablissement){
    return this.http.delete(this.APIUrl + '/etablissement/'+e);
  }

  //RHservice
  getrhserviceList(): Observable<RHservice[]>{
    return this.http.get<RHservice[]>(this.APIUrl + '/rhservice');
  }

  addrhservice(rh: RHservice){
    return this.http.post(this.APIUrl + '/rhservice', rh);
  }

  editrhservice(rh: RHservice){
    return this.http.put(this.APIUrl + '/rhservice', rh);
  }

  deleterhservice(rh: RHservice){
    return this.http.delete(this.APIUrl + '/rhservice/'+rh);
  }

   //Accueilservice
  getaccueilserviceList(): Observable<Accueilservice[]>{
    return this.http.get<Accueilservice[]>(this.APIUrl + '/accueilservice');
  }

  addaccueilservice(ac: Accueilservice){
    return this.http.post(this.APIUrl + '/accueilservice', ac);
  }

  editaccueilservice(ac: Accueilservice){
    return this.http.put(this.APIUrl + '/accueilservice', ac);
  }

  deleteaccueilservice(ac: Accueilservice){
    return this.http.delete(this.APIUrl + '/accueilservice/'+ac);
  }

  //Date
  getDateList(): Observable<Date[]>{
    return this.http.get<Date[]>(this.APIUrl + '/date');
  }

  addDate(d: Date){
    return this.http.post(this.APIUrl + '/date', d);
  }

  editDate(d: Date){
    return this.http.put(this.APIUrl + '/date', d);
  }

  deleteDate(d: Date){
    return this.http.delete(this.APIUrl + '/date/'+d);
  }

  //Gratification
  getGratificationList(): Observable<Gratification[]>{
    return this.http.get<Gratification[]>(this.APIUrl + '/gratification');
  }

  addGratification(g: Gratification){
    return this.http.post(this.APIUrl + '/gratification', g);
  }

  editGratification(g: Gratification){
    return this.http.put(this.APIUrl + '/gratification', g);
  }

  deleteGratification(g: Gratification){
    return this.http.delete(this.APIUrl + '/gratification/'+g);
  }

  //Tuteur
  getTuteurList(): Observable<Tuteur[]>{
    return this.http.get<Tuteur[]>(this.APIUrl + '/tuteur');
  }

  addTuteur(t: Tuteur){
    return this.http.post(this.APIUrl + '/tuteur', t);
  }

  editTuteur(t: Tuteur){
    return this.http.put(this.APIUrl + '/tuteur', t);
  }

  deleteTuteur(t: Tuteur){
    return this.http.delete(this.APIUrl + '/tuteur/'+t);
  }

   //Stage
   getStageList(): Observable<Tuteur[]>{
    return this.http.get<Tuteur[]>(this.APIUrl + '/stage');
  }

  addStage(s: Stage){
    return this.http.post(this.APIUrl + '/stage', s);
  }

  editStage(s: Stage){
    return this.http.put(this.APIUrl + '/stage', s);
  }

  deleteStage(s: Stage){
    return this.http.delete(this.APIUrl + '/stage/'+s);
  }

}
