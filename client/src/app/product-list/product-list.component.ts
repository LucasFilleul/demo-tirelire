import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Product } from '../product'

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	products;

	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.productService.getAllProducts().subscribe((data : Array<Product>) => {
			console.log(data);
			this.products = data;
		});
	}

}
