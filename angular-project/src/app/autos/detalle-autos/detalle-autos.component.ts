import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {
  @Input() nombre: string = "";
  @Output() clickBoton = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
