package com.example.demo.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.LoaiCK;

@Repository
public interface SharedRepository extends JpaRepository<LoaiCK, Long> {
    List<LoaiCK> findAll();
}

