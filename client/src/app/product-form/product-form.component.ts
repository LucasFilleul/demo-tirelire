import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule, FormControl  } from '@angular/forms';
import { ProductService } from '../product.service';

import { Product } from '../product'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  createProductForm; // Ce nom doit correspondre au nom du formulaire 
  submitted;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.submitted = false;

    // Cree les FormControl pour tous les champs avec une valeur par defaut et des validateurs
    this.createProductForm = this.formBuilder.group({
      'name': ["", [
        Validators.required, 
        Validators.minLength(4)
      ]],
      'price': ["", [
        Validators.required,
        Validators.min(0)
      ]],
      'description': ["Description par défaut"]
    });
  }

  // Getters pour faciliter l'acces aux input FormControl depuis le template
  get name() { return this.createProductForm.get('name'); }
  get price() { return this.createProductForm.get('price'); }
  get description() { return this.createProductForm.get('description'); }

  onSubmit(formValues: Product) {
    this.submitted = true;
    console.log(this.createProductForm.get('name'));

    if (this.createProductForm.valid) {
      this.productService.createProduct(formValues).subscribe(() => {});
    }
  }

}
