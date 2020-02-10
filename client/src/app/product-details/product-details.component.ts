import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	loading = true;
	product;

	constructor(private route: ActivatedRoute,
				private productService: ProductService) { }

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			this.productService.getProduct([+params.get('productId')]).subscribe((data) => {
				this.product = data;
				this.loading = false;
			});
			
		});
	}

}
