package com.example.demo.services;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.TaiKhoan;
import com.example.demo.repo.TaiKhoanRepository;

// AuthenticationService.java

@Service
public class XacThuc {
    @Autowired
    private TaiKhoanRepository tkRepository;
    
    public boolean  authenticate(String email, String matkhau) {
        TaiKhoan tk = tkRepository.findByEmail(email);
        return tk != null && tk.getMatkhau().equals(matkhau);
    }
}

