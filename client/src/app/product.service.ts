import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from './app.config';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	
	constructor(private http: HttpClient) { }
	
	getAllProducts() {
		return this.http.get(AppConfig.API_URL + "/products");
	}

	getProduct(id) {
		return this.http.get(AppConfig.API_URL + "/products/" + id);
	}
}
