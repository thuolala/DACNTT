package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.HoSoCaKham;
import com.example.demo.repo.HoSoCaKhamRepository;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HoSoCaKhamController {
    @Autowired
    private HoSoCaKhamRepository hosocakhamRepository;

    @GetMapping("/api/hoso-cakham")
    public List<HoSoCaKham> getHSCaKhams() {
        return hosocakhamRepository.findAll();
    }

    @GetMapping("/api/hoso-cakham/{id}")
    public Optional<HoSoCaKham> getHSCaKhamById(@PathVariable Long id) {
        return hosocakhamRepository.findById(id);
    }

    //them 
    @PostMapping("/api/hoso-cakham/dat-lich")
    public String getCaKhamByCK(@RequestBody HoSoCaKham hoSoCaKham) {
        String message = "Success!" ;
        hosocakhamRepository.save(hoSoCaKham);
        return message; 
    }

}
