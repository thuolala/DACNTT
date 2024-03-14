package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "account")
public class TaiKhoan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true, name = "email")
    private String email;
    
    @Column(nullable = false, name = "matkhau")
    private String matkhau;

    @Column(nullable = false, name = "quyen")
    private int quyen;

    public String getEmail() {
        return this.email;
    }

    public String getMatkhau() {
        return this.matkhau;
    }

    public int getQuyen(){
        return this.quyen;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMatkhau(String matkhau) {
        this.matkhau = matkhau;
    }

    public void setQuyen(int quyen) {
        this.quyen = quyen;
    }
    
}

