import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  standalone: true,
  imports: [RouterLink],
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  articulos = [
    { id: 1, titulo: "Chalet en la nieve", info: 'Un chalet en la nieve es una visión de ensueño. Imagina una cabaña de madera robusta y acogedora, anclada firmemente en un paisaje blanco inmaculado. El techo inclinado del chalet está cubierto con una gruesa capa de nieve fresca y brillante que refleja la luz del sol, creando un espectáculo deslumbrante.', imagen: "https://hunterchalets.com/wp-content/uploads/2017/07/ch46-1.jpg" },
    { id: 2, titulo: "Chalet en el monte", info: 'Un chalet en la nieve es una visión de ensueño. Imagina una cabaña de madera robusta y acogedora, anclada firmemente en un paisaje blanco inmaculado. El techo inclinado del chalet está cubierto con una gruesa capa de nieve fresca y brillante que refleja la luz del sol, creando un espectáculo deslumbrante.', imagen: "https://th.bing.com/th/id/OIP.2zA72IxSMXkEVmph0k5EQAHaFr?rs=1&pid=ImgDetMain" },
    { id: 3, titulo: "Chalet en el campo", info: 'Un chalet en la nieve es una visión de ensueño. Imagina una cabaña de madera robusta y acogedora, anclada firmemente en un paisaje blanco inmaculado. El techo inclinado del chalet está cubierto con una gruesa capa de nieve fresca y brillante que refleja la luz del sol, creando un espectáculo deslumbrante.', imagen: "https://i.pinimg.com/originals/bb/b9/97/bbb9973ed2f3fd5ca8253fca4c90e661.jpg" }
  ];
  seleccionadoId: number | null = null;

  mostrar0 = false;
  mostrar1 = false;
  mostrar2 = false;

  ngOnInit(): void {
    console.log(`Artículos: ${this.articulos}`);
  }

  seleccionado(id: number) {
    this.seleccionadoId = id;
  }
}
