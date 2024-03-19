package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.LoaiCK;
import com.example.demo.repo.SharedRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
@RestController
public class SharedController {
    @Autowired
    private SharedRepository sharedRepository;

    @GetMapping("/api/loaicakham")
    public List<String> getLoaiCKs() {
        List<LoaiCK> cks = sharedRepository.findAll();
        return cks.stream().map(LoaiCK::getTen).collect(Collectors.toList());
    }
}
