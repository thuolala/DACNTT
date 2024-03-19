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
// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
public class LoginController {
    @Autowired
    private XacThuc loginService;

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String matkhau = credentials.get("matkhau");
        boolean isAuthenticated = loginService.authenticateBN(email, matkhau);

        if (isAuthenticated) {
            return ResponseEntity.ok().body("Benh nhan"); 
        }
        else if(loginService.authenticateAD(email, matkhau)){
            return ResponseEntity.ok().body("Admin"); 
        }
        else if(loginService.authenticateBS(email, matkhau)){
            return ResponseEntity.ok().body("Bac si"); 
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Tai khoan khong ton tai"); 
        }
    }
}