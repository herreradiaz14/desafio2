import { Component } from '@angular/core';
import {Estudiante} from "../models/estudiante";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
    edadMayor = 18;
    listadoEstudiantes: Estudiante[] = [
        {
            nombre: 'Carlos', apellido: 'Herrera', pais: 'EC', sexo: 'H', codigo: 'EST-001',
            foto: 'assets/images/e1.jpg', edad: 29, estaMatriculado: true, estaActivo: true
        },
        {
            nombre: 'Luis', apellido: 'Macías', pais: 'AR', sexo: 'H', codigo: 'EST-002',
            foto: '', edad: 36, estaMatriculado: false, estaActivo: false
        },
        {
            nombre: 'Jennifer', apellido: 'Honores', pais: 'EC', sexo: 'M', codigo: 'EST-003',
            foto: 'assets/images/e2.jpg', edad: 30, estaMatriculado: false, estaActivo: true
        },

        {
            nombre: 'Edwin', apellido: 'Rodríguez', pais: 'BR', sexo: 'H', codigo: 'EST-004',
            foto: 'assets/images/e3.jpg', edad: 18, estaMatriculado: false, estaActivo: true
        },
        {
            nombre: 'Karen', apellido: 'León', pais: 'AR', sexo: 'M', codigo: 'EST-005',
            foto: '', edad: 25, estaMatriculado: true, estaActivo: true
        },
    ];
}
