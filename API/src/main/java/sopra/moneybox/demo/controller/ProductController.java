package sopra.moneybox.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sopra.moneybox.demo.model.Product;
import sopra.moneybox.demo.service.ProductService;

import java.util.List;

@RestController
@CrossOrigin
public class ProductController {

    // Autowired => injection de dépendance. Spring va instancier le service pour nous
    @Autowired
    private ProductService productService;

    @PostMapping("/products")
    public void createProduct(@RequestBody Product product) {
        // Vérification des paramètres
        if (product.getPrice() <= 0 || product.getName().length() < 3) {
            throw new InvalidParameter("Product's name or price is not valid");
        }

        productService.createProduct(product);
    }

    @GetMapping("/products")
    public List<Product> listProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable(value="productId") long id) {
        return productService.getProductById(id);
    }

    @PutMapping("/products/{productId}/break")
    public void breakProduct(@PathVariable(value="productId") long id) {
        System.out.println("Exemple de chemin un peu plus complique");
    }
}

