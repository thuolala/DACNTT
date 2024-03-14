package com.example.demo.repo;

import com.example.demo.model.TaiKhoan;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaiKhoanRepository extends JpaRepository<TaiKhoan, Long> {
    Optional<TaiKhoan> findById(Long id);
    TaiKhoan  findByEmail(String email);
    List<TaiKhoan> findAll();
}

