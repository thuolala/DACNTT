package com.example.demo.services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BacSi;
import com.example.demo.model.TaiKhoan;
import com.example.demo.repo.BacSiRepository;
import com.example.demo.repo.TaiKhoanRepository;

// AuthenticationService.java

@Service
public class XacThuc {
    @Autowired
    private TaiKhoanRepository tkRepository;
    
    @Autowired
    private BacSiRepository bsRepository;

    public boolean  authenticateBN(String email, String matkhau) {
        TaiKhoan tk = tkRepository.findByEmail(email);
        return tk != null && tk.getMatkhau().equals(matkhau);
    }

    public boolean  authenticateBS(String email, String matkhau) {
        BacSi bs = bsRepository.findByEmail(email);
        return bs != null && bs.getMatkhau().equals(matkhau);
    }

    public boolean  authenticateAD(String email, String matkhau) {
        return email.equals("admin") && matkhau.equals(matkhau);
    }
}

