import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 contactForm!: FormGroup;
 showSuccessAlert = false;
  showErrorAlert = false;
 

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }
 
  
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      textarea: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.showSuccessAlert = true;
      this.showErrorAlert = false;
    } else {
      this.showSuccessAlert = false;
      this.showErrorAlert = true;
    }
  }
}

