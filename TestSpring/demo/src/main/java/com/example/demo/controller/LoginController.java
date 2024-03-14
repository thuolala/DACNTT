package com.example.demo.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.XacThuc;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class LoginController {
    @Autowired
    private XacThuc loginService;

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String matkhau = credentials.get("matkhau");
        boolean isAuthenticated = loginService.authenticate(email, matkhau);

        if (isAuthenticated) {
            System.out.println("----------------SUCCESS-----------");
            return ResponseEntity.ok().body("Login Success!"); 
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Phone not exists"); 
        }
    }
}