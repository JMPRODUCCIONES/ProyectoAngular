import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
public usuario: Usuario;
  constructor()
   {
    this.usuario = new Usuario('','','','','');
   }
  ngOnInit() {
   console.log("evento submit iniciado")}
OnSubmit() {
  console.log("evento submit iniciado")
}

}

