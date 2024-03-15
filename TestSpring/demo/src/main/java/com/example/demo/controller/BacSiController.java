package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.BacSi;
import com.example.demo.model.BenhNhan;
import com.example.demo.repo.BacSiRepository;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BacSiController {
    @Autowired
    private BacSiRepository bsRepository;

    @GetMapping("/api/bacsi")
    public List<BacSi> geBacSis() {
        return bsRepository.findAll();
    }

    @GetMapping("/api/bacsi/{email}")
    public BacSi getBacSiByEmail(@PathVariable String email) {
        return bsRepository.findByEmail(email);
    }

}
