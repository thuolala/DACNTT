package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.BenhNhan;
import com.example.demo.model.TaiKhoan;
import com.example.demo.repo.BenhNhanRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BenhNhanController {
    @Autowired
    private BenhNhanRepository bnRepository;

    @GetMapping("/api/benhnhan")
    public List<BenhNhan> geTaiKhoans() {
        return bnRepository.findAll();
    }
}
