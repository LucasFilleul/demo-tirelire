import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

const products = [
	{
		id: 1,
		name: 'Phone XL',
		price: 799,
		description: 'A large phone with one of the best screens'
	},
	{
		id: 2,
		name: 'Phone Mini',
		price: 699,
		description: 'A great phone with one of the best cameras'
	},
	{
		id: 3,
		name: 'Phone Standard',
		price: 299,
		description: ''
	}
];

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	products;

	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.productService.getAllProducts().subscribe((data) => {
			this.products = data;
		});
	}

}
