package sopra.moneybox.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import sopra.moneybox.demo.model.Product;
import sopra.moneybox.demo.repository.ProductRepository;

import java.util.List;

@Component
@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public void createProduct(Product product) {
        repository.save(product);
    }

    public Product getProductById(long id) {
        return repository.findById(id).orElse(null);
    }
    public List<Product> getAllProducts() { return repository.findAll(); }
}
