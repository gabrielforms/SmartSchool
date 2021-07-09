import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  professores  = [
    {nome:  'Patricia'},
    {nome:  'Lidia'},
    {nome:  'Aline'},
    {nome:  'Helio'},
    {nome:  'Augustinho'},
    {nome: 'Marcelo'},
    {nome:  'Ubira'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
