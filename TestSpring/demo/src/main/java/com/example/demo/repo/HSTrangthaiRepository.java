package com.example.demo.repo;

import com.example.demo.model.Hoso_Trangthai;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HSTrangthaiRepository extends JpaRepository<Hoso_Trangthai, Long> {
    Optional<Hoso_Trangthai> findById(Long id);
    List<Hoso_Trangthai> findByTrangthai(String trangthai);
    Hoso_Trangthai findByIdHoso(Long idHoso);
}

