package sopra.moneybox.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sopra.moneybox.demo.model.Product;
import sopra.moneybox.demo.service.ProductService;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class ProductController {

    // Autowired => injection de dépendance. Spring va instancier le service pour nous
    @Autowired
    private ProductService productService;

    @PostMapping("/products")
    public void createProduct(@RequestParam String name, @RequestParam int price) {
        productService.createProduct(new Product(name, price));
    }

    @GetMapping("/products")
    public List<Product> listProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable(value="productId") long id) {
        return productService.getProductById(id);
    }
}

