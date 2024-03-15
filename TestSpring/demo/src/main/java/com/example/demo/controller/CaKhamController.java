package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.CaKham;
import com.example.demo.repo.CaKhamRepository;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CaKhamController {
    @Autowired
    private CaKhamRepository cakhamRepository;

    @GetMapping("/api/cakham")
    public List<CaKham> getCaKhams() {
        return cakhamRepository.findAll();
    }

    @GetMapping("/api/cakham/{loaicakham}")
    public List<CaKham> getCaKhamByLoai(@PathVariable String loaicakham) {
        return cakhamRepository.findByLoaicakham(loaicakham);
    }

    @GetMapping("/api/cakham/{chuyenkhoa}")
    public List<CaKham> getCaKhamByCK(@PathVariable String chuyenkhoa) {
        return cakhamRepository.findByChuyenkhoa(chuyenkhoa);
    }

    @GetMapping("/api/cakham/{bacsi}")
    public List<CaKham> getCaKhamByBS(@PathVariable String bacsi) {
        return cakhamRepository.findByBacsi(bacsi);
    }

}
