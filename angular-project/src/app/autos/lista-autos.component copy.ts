import { Component, OnInit } from "@angular/core";
import { Auto } from "./auto";
import { faStar } from "@fortawesome/free-solid-svg-icons";




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


    ngOnInit(): void {
        this.listaAutos = [
            {
                id: 1,
                marca: "bmw",
                modelo: "m3",
                anio: 2022,
                color: "calor",
                kilometros: 0,
                calificacion: 4.8,
                precio: 25000000,
                imagenUrl: "assets/bmw.jpeg"
            },
            {
                id: 2,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Verde Claro",
                kilometros: 20500,
                calificacion: 4.4,
                precio: 25000000,
                imagenUrl: "assets/audi.jpeg"
            },
            {
                id: 2,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Verde Claro",
                kilometros: 20500,
                calificacion: 4.4,
                precio: 25000000,
                imagenUrl: "assets/mercedes.jpeg"
            },
            {
                id: 2,
                marca: "Audi",
                modelo: "A4",
                anio: 2020,
                color: "Verde Claro",
                kilometros: 20500,
                calificacion: 4.4,
                precio: 25000000,
                imagenUrl: "assets/lexus.jpeg"
            },


        ];
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


