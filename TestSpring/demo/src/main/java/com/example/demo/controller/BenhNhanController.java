package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BacSi;
import com.example.demo.model.BenhNhan;
import com.example.demo.model.TaiKhoan;
import com.example.demo.repo.BenhNhanRepository;

import java.util.List;
import java.util.Optional;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
@RestController
@RequestMapping("/api/benhnhan")
public class BenhNhanController {
    @Autowired
    private BenhNhanRepository bnRepository;

    // create 

    // read 
    @GetMapping("")
    public List<BenhNhan> getBenhNhans() {
        return bnRepository.findAll();
    }

    @GetMapping("/{email}")
    public BenhNhan getBenhNhanByEmail(@PathVariable String email) {
        return bnRepository.findByEmail(email);
    }

    // update 
    @PutMapping("/chinhsua/{id}")
    public BenhNhan updateBN(@PathVariable Long id, @RequestBody BenhNhan bnAfter) {
        BenhNhan bn = bnRepository.findById(id)
                                        .orElseThrow(() -> new RuntimeException("Benh nhan si not found with id: " + id));

        bn.setSdt(bnAfter.getSdt());
        bn.setNamsinh(bnAfter.getNamsinh());
        bn.setDiachi(bnAfter.getDiachi());

        return bnRepository.save(bn);
    }
}
