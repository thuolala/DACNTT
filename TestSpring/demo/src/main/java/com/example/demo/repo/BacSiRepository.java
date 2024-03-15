package com.example.demo.repo;

import com.example.demo.model.BacSi;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacSiRepository extends JpaRepository<BacSi, Long> {
    Optional<BacSi> findById(Long id);
    BacSi  findByEmail(String email);
    List<BacSi> findAll();
}

