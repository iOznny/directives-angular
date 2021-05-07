import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})

export class AddComponent implements OnInit {

  public form!: FormGroup;
  public color: string = 'red';
  public text: string = 'Demo';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializamos el form.
    this.formCreate();
  }

  inputValid(input: string): boolean {
    return this.form.get(input)?.invalid || false;
  }

  /**
   * formCreate
   */
  public formCreate() {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  public cambiarNombre() {
    this.text = Math.random().toString();
  }

  public cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random()*16 | 0).toString(16));
    this.color = color;
  }

}
