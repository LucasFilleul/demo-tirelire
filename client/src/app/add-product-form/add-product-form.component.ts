import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ProductService } from '../product.service';

import { Product } from '../product'

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {
  createProductForm; // Ce nom doit correspondre au nom du formulaire 

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.createProductForm = this.formBuilder.group({
      name: '',
      price: 0,
      description: ''
    });
  }

  onSubmit(formValues: Product) {
    console.log("Create product: " + formValues);
    this.productService.createProduct(formValues).subscribe(() => {});
  }

}
