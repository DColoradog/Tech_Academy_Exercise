import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from 'src/app/shared/estrellas/auto.service';
import { Auto } from '../auto';

@Component({
  selector: 'detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {
  tituloPagina = "Detalle de autos";
  auto: Auto | undefined = new Auto();

  @Input() nombre: string = "";
  @Output() clickBoton = new EventEmitter<boolean>();

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _autosService: AutosService) { }

  ngOnInit(): void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.auto = this._autosService.obtenAuto(id);
    this.tituloPagina += ": " + id;
  }

  onBack(): void {
    this._router.navigate(['/autos']);
  }

}
