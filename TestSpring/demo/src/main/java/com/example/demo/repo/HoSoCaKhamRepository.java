package com.example.demo.repo;

import com.example.demo.model.HoSoCaKham;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HoSoCaKhamRepository extends JpaRepository<HoSoCaKham, Long> {
    Optional<HoSoCaKham> findById(Long id);
    List<HoSoCaKham> findByIdCakham(Long id_cakham);
    List<HoSoCaKham> findByIdBenhnhan(Long id_benhnhan);
    List<HoSoCaKham> findByNgaykham(String ngaykham);
    List<HoSoCaKham> findByGiokham(String giokham);
    List<HoSoCaKham> findAll();
}

