package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.BenhNhan;
import com.example.demo.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BenhNhanRepository extends JpaRepository<BenhNhan, Long>{
    Optional<BenhNhan> findById(Long id);
    BenhNhan findBySdt(String sdt);
    BenhNhan findByEmail(String email);
    List<BenhNhan> findAll();
}
