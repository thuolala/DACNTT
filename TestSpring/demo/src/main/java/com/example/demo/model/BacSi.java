package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bacsi")
public class BacSi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, name = "hoten")
    private String hoten;

    @Column(nullable = false, name = "sdt")
    private String sdt;

    @Column(nullable = false, unique = true, name = "email")
    private String email;
    
    @Column(nullable = false, name = "matkhau")
    private String matkhau;

    //get 
    public Long getId(){
        return this.id; 
    }

    public String getHoten() {
        return this.hoten;
    }

    public String getSdt() {
        return this.sdt;
    }

    public String getEmail() {
        return this.email;
    }

    public String getMatkhau() {
        return this.matkhau;
    }

    //set 
    public void setHoten(String hoten){
        this.hoten = hoten;
    }

    public void setSdt(String sdt){
        this.sdt = sdt;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMatkhau(String matkhau) {
        this.matkhau = matkhau;
    }
    
}

