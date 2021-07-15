export interface Etudiant {
  IDetudiant: string;
  nom: string;
  prenom: string;
  numTeleph: number;
  email: string;
  adresse: number;
  TypeSS: string;
  CAM: string;
  inscrit: string;
  enseingnant: string;
}

export interface Adresse {
  adr: string;
  codePostal: number;
  ville: string;
  pays: string;
}

export interface Fiche {
  noFiche: number;
  IDetudiant: string;
}

export interface Etablissement {
  raisonSociale: string;
  representationLegal: string;
  fonction: string;
  adresse: number;
  noSiret: string;
  codeAPE: string;
  domaineDAct: string;
  effectif: number
}

export interface RHservice {
  nom: string;
  prenom: string;
  numTeleph: number;
  email: string;
  adresse: number;
  etab: number;
}

export interface Accueilservice {
  adresse: number;
  etab: number;
}

export interface Date {
  adresse: number;
  etab: number;
}

export interface Gratification {
  motant: number;
  versement: string;
  avantage: string;
}

export interface Tuteur {
  nom: string;
  prenom: string;
  numTeleph: number;
  email: string;
  fonction: string;
  service: string;
  disponibilite: string;
  adresse: number;
  etab: number;
}

export interface Stage {
  titre: string;
  nbHeure: number;
  numTeleph: number;
  gratification: boolean;
  gratification_detail: number;
  confidentialite: boolean;
  date: Date;
  description: string;
  objectifs: string;
  taches: string;
  detail: string;
  IDetudiant: string;
  tuteur: number;
}

export interface DialogData {
  tempsPartiel: boolean;
}

