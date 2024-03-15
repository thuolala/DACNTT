package com.example.demo.repo;

import com.example.demo.model.CaKham;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaKhamRepository extends JpaRepository<CaKham, Long> {
    Optional<CaKham> findById(Long id);
    List<CaKham> findByBacsi(String bacsi);
    List<CaKham> findByChuyenkhoa(String chuyenkhoa);
    List<CaKham> findByLoaicakham(String loaicakham);
    List<CaKham> findAll();
}

