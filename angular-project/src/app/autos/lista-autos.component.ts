import { Component, OnInit } from "@angular/core";
import { Auto } from "./auto";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { AutosService } from "../shared/estrellas/auto.service";




@Component({
    selector: "lista-autos",
    templateUrl: "./lista-autos.component.html"
})



export class ListaAutosComponent {
    faStar = faStar;
    tituloListaAutos: string = "Lista de automoviles!!";
    listaAutos: Auto[] = [];
    filtra: string = '';
    listaAutosFiltrados: Auto[] = [];
    imageWidth = 350;
    imageMargin = 2;
    muestraImagen: boolean = false;
    descripcion = "Prueba de enlace entre componentes";

    private _filtro: string = "";
    get filtro(): string {
        return this._filtro;
    }
    set filtro(filtro: string) {
        this._filtro = filtro;
        console.log(this._filtro);
        this.filtraAutos(this._filtro);
    }

    filtraAutos(filtrarPor: string): void {
        filtrarPor = filtrarPor.toLocaleLowerCase();
        this.listaAutosFiltrados = this.listaAutos.filter(
            (auto: Auto) => auto.marca.toLocaleLowerCase().includes(filtrarPor)
        )
    }

    constructor(private _autosService: AutosService) { }


    ngOnInit(): void {
        this.listaAutos = this._autosService.obtenListaAutos();
        this.listaAutosFiltrados = this.listaAutos;
    }

    muestraImagenes(): void {
        this.muestraImagen = !this.muestraImagen
    }

    procesaClick(event: any): void {
        console.log("entre");
    }

    onClickCalification(mensaje: string): void {
        alert("Dieron click en la clasificacion: " + mensaje);
    }


}


