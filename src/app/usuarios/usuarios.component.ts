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
      inputNombres: new FormControl('', Validators.required),
      inputTelefono: new FormControl(''),
      inputApellidos: new FormControl('', Validators.required),
      inputUsuario: new FormControl('', Validators.required),
      inputDireccion: new FormControl(''),
      inputContrasena: new FormControl('',
        [Validators.required, Validators.minLength(5)]),
      inputBarrio: new FormControl(''),
      inputCorreo: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      inputFechaNacimiento: new FormControl('', Validators.required)
      // inputCondiciones: new FormControl('', Validators.required)

    });

    // this.form = this._FB.group({
    //   'inputNombre': ['', [Validators.required, Validators.pattern('[A-Z ]*')]]
    // 'registrationDate': [{value: moment(new Date()).format(formatDate), disabled: false}, Validators.required]
    // });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  registrar(form: FormGroup): void {
    this.usuariosService.add(form.value).subscribe(response => {
      this.initializeForm();
      alert('Registro exitoso');
    }, err => {
      alert('Error: ' + err);
    });
  }

}
