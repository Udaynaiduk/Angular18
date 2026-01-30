import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  reactiveForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      skills: new FormArray([
        new FormControl('', Validators.required)
      ]),
  
      experience: new FormArray([
        new FormGroup({
          company: new FormControl('', Validators.required),
          years: new FormControl('', Validators.required)
        })
      ])
    });
  }

  

  get skills() {
    return this.reactiveForm.get('skills') as FormArray;
  }

  get experience() {
    return this.reactiveForm.get('experience') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl(''));
  }

  addExperience() {
    this.experience.push(
      new FormGroup({
        company: new FormControl(''),
        years: new FormControl('')
      })
    );
  }
  submit(){
    console.log(this.reactiveForm.value);
  }
  countries = ['USA', 'Canada', 'UK', 'Australia'];
  removeSkill(index:number){
    this.skills.removeAt(index);
  }
  reset(){
    this.reactiveForm.reset();
  }
}
