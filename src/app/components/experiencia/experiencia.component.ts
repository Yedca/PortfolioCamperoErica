import { Component, OnInit } from '@angular/core';
import { Experiencialab } from 'src/app/model/experiencialab';
import { SExperiencialabService } from 'src/app/service/s-experiencialab.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 expe: Experiencialab[] = [];

  constructor(private sExperiencialab: SExperiencialabService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

cargarExperiencia():void{
  this.sExperiencialab.lista().subscribe(data =>{this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencialab.delete(id).subscribe(
         data => {
         this.cargarExperiencia();
        }, err => {
         alert("No se pudo borrar la experiencia");
        }  
      )
    }
  }
}

