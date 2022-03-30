import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from "../services/usuarios.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public form: any;

  constructor(
    private usuariosService: UsuariosService,
    private _FB: FormBuilder
  ) {
  }

  initializeForm() {

    this.form = new FormGroup({
      nombres: new FormControl('', Validators.required),
      telefono: new FormControl(''),
      apellidos: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
      direccion: new FormControl(''),
      contrasena: new FormControl('',
        [Validators.required, Validators.minLength(5)]),
      barrio: new FormControl(''),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      fechaNacimiento: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      condiciones: new FormControl(false, Validators.required)

    });

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  registrar(form: FormGroup): void {
    this.usuariosService.add(this.form.value).subscribe(response => {
      this.initializeForm();
      alert('Registro exitoso');
    }, err => {
      alert('Error: ' + err.message());
    });
  }

}
