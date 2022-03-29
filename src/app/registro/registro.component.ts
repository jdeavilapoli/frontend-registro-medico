import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistroService} from '../services/registro.service';
import {catchError} from "rxjs";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public form: any;

  constructor(
    private registroService: RegistroService,
    private _FB: FormBuilder
  ) {
  }

  initializeForm() {
    this.form = this._FB.group({
      'inputNombres': ['', [Validators.required, Validators.pattern('[A-Z ]*')]],
      'inputTelefono': ['', [Validators.required, Validators.pattern('[A-Z ]*')]],
      'inputApellidos': ['', [Validators.pattern('[A-Z ]*')]],
      'inputUsuario': ['', [Validators.pattern('[A-Z ]*')]],
      'inputDireccion': ['', [Validators.pattern('[A-Z ]*')]],
      'inputContrasena': ['', [Validators.pattern('[A-Z ]*')]],
      'inputBarrio': ['', [Validators.pattern('[A-Z ]*')]],
      'inputCorreo': [{value: '', disabled: false}],
      'inputFechaNacimiento': ['', Validators.required],
      'inputCondiciones': ['', Validators.required],
      // 'registrationDate': [{value: moment(new Date()).format(formatDate), disabled: false}, Validators.required]
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  registrar(): void {
    this.registroService.add(this.form.value).subscribe(response => {
      this.initializeForm();
      alert('Registro exitoso');
    }, err => {
      alert(err);
    });
  }
}
