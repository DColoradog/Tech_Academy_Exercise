import { Injectable } from "@angular/core";
import { Auto } from "src/app/autos/auto";

@Injectable({
    providedIn: "root"
})

export class AutosService {
    listaAutos: Auto[] = [];
    obtenListaAutos(): Auto[] {
        this.listaAutos = this._determinaListaAutos();
        return this.listaAutos;
    }

    obtenAuto(id: number): Auto | undefined {
        if (this.listaAutos.length == 0) {
            this.listaAutos = this._determinaListaAutos();
        }
        return this.listaAutos.find(auto => auto.id == id);
    }

    private _determinaListaAutos(): Auto[] {
        let listaAutos = [
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
        ]
        return listaAutos;
    }




}