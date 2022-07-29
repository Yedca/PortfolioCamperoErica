import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencialab } from 'src/app/model/experiencialab';
import { SExperiencialabService } from 'src/app/service/s-experiencialab.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
 nombreExp: string = '';
 descripcionExp:string = '';

  constructor(private sExperiencialab: SExperiencialabService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencialab(this.nombreExp, this.descripcionExp);
    this.sExperiencialab.save(expe).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
        
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
    
  }
}