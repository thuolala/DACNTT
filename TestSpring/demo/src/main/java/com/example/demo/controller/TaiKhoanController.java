package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.TaiKhoan;
import com.example.demo.repo.TaiKhoanRepository;

import java.util.List;
import java.util.Optional;
// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
@RestController
public class TaiKhoanController {
    @Autowired
    private TaiKhoanRepository tkRepository;

    @GetMapping("/api/taikhoan")
    public List<TaiKhoan> geTaiKhoans() {
        return tkRepository.findAll();
    }

    @GetMapping("/api/taikhoan/{id}")
    public Optional<TaiKhoan> getTaiKhoanById(@PathVariable Long id) {
        Optional<TaiKhoan> tk = tkRepository.findById(id);
        return tk;
    }

    // @GetMapping("/api/taikhoan/{sdt}")
    // public Optional<TaiKhoan>  getTaiKhoanBySdt(@PathVariable String sdt) {
    //     Optional<TaiKhoan>  tk = tkRepository.findBySdt(sdt);
    //     return tk;
    // }
}
