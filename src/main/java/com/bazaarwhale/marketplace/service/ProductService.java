
package com.bazaarwhale.marketplace.service;

import com.bazaarwhale.marketplace.model.Product;
import com.bazaarwhale.marketplace.model.User;
import com.bazaarwhale.marketplace.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }
    
    public List<Product> findActiveProducts() {
        return productRepository.findByActive(true);
    }
    
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }
    
    public List<Product> findByCategory(String category) {
        return productRepository.findByCategory(category);
    }
    
    public List<Product> findBySeller(User seller) {
        return productRepository.findBySeller(seller);
    }
    
    public List<Product> findBySellerAndActive(User seller, boolean active) {
        return productRepository.findBySellerAndActive(seller, active);
    }
    
    public List<Product> searchProducts(String keyword) {
        return productRepository.findByTitleContainingIgnoreCase(keyword);
    }
    
    public Product save(Product product) {
        product.setCreatedAt(LocalDateTime.now());
        return productRepository.save(product);
    }
    
    public Product update(Product product) {
        product.setUpdatedAt(LocalDateTime.now());
        return productRepository.save(product);
    }
    
    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }
}
