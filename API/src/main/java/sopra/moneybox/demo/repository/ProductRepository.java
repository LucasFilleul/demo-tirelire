package sopra.moneybox.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sopra.moneybox.demo.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
    //Optional<Product> findByName(String name);
}
