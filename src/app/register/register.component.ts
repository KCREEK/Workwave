import { Component, NgModule } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

// @NgModule({
//   declarations: [RegisterComponent],
//   imports: [CommonModule, ReactiveFormsModule],
// })

export class RegisterComponent {

  selectedRole: string = 'job-seeker';
  seekerForm: FormGroup ;
  setterForm: FormGroup ;
  errorMessage: string | null = null;
  CommonModule: any;

  constructor(private fb: FormBuilder) {
    this.seekerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      skills: [''],
      experience: [''],
    });
  
    this.setterForm = this.fb.group({
      company: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  selectRole(role: string) {
    this.selectedRole = role;
  }

  registerSeeker() {
    // Implement your job seeker registration logic here
    // Validate and process form data
  
    // Example error handling
    if (this.seekerForm.invalid) {
      this.errorMessage = 'Something went wrong';
      return;
    }
  }
  
  registerSetter() {
    // Implement your job setter registration logic here
    // Validate and process form data
  }
  
}
