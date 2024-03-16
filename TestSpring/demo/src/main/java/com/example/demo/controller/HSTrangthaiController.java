package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Hoso_Trangthai;
import com.example.demo.repo.HSTrangthaiRepository;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HSTrangthaiController {
    @Autowired
    private HSTrangthaiRepository hsttRepository;

    @GetMapping("/api/hoso-trangthai")
    public List<Hoso_Trangthai> getHSTTs() {
        return hsttRepository.findAll();
    }

    @GetMapping("/api/hoso-trangthai/{idhs}")
    public Hoso_Trangthai getHSTTByIdHS(@PathVariable Long idhs) {
        Hoso_Trangthai hstt = hsttRepository.findByIdHoso(idhs);
        return hstt;
    }

    @GetMapping("/api/hoso-trangthai/{trangthai}")
    public List<Hoso_Trangthai> getHSTTByTrangthai(@PathVariable String trangthai) {
        return hsttRepository.findByTrangthai(trangthai);
    }
}
