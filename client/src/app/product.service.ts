import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from './app.config';
import { Product } from './product'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private url:string = AppConfig.API_URL + "/products/";
	
	constructor(private http: HttpClient) { }
	
	getAllProducts() : Observable<Product[]>{
		return this.http.get<Product[]>(this.url);
	}

	getProduct(id) : Observable<Product> {
		return this.http.get<Product>(this.url + id);
	}

	createProduct(product: Product) {
		return this.http.post(this.url, JSON.stringify(product), AppConfig.HTTP_OPTIONS);
	}
}
