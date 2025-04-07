
package com.bazaarwhale.marketplace.repository;

import com.bazaarwhale.marketplace.model.Product;
import com.bazaarwhale.marketplace.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
    List<Product> findBySeller(User seller);
    List<Product> findByTitleContainingIgnoreCase(String keyword);
    List<Product> findByActive(boolean active);
    List<Product> findBySellerAndActive(User seller, boolean active);
}
