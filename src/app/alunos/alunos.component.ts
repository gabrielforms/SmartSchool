import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Alunos';

  alunos  = [
    {nome:  'Maria'},
    {nome:  'Laura'},
    {nome:  'Pedro'},
    {nome:  'Carlo'},
    {nome:  'Alice'},
    {nome: 'Marcos'},
    {nome:  'Carla'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
