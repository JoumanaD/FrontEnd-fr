import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';
import { Etudiant } from 'src/app/generators';
@Component({
  selector: 'app-show-etudiant',
  templateUrl: './show-etudiant.component.html',
  styleUrls: ['./show-etudiant.component.css']
})
export class ShowEtudiantComponent implements OnInit {

  constructor(private etudservice: ShareService) { }

  EtudiantList:Etudiant[]=[]

  ngOnInit(): void {
    this.getEtudList();
  }

  getEtudList(){
    this.etudservice.getEtudiantList().subscribe(data=>{
      this.EtudiantList=data;
    });
  }

}
