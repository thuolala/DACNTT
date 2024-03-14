package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "benhnhan")
public class BenhNhan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, name = "hoten")
    private String hoten;

    @Column(nullable = false, unique = true, name = "sdt")
    private String sdt;

    @Column(nullable = false, unique = true, name = "email")
    private String email;
    
    @Column(nullable = false, name = "gioitinh")
    private int gioitinh;

    @Column(nullable = false, name = "namsinh")
    private int namsinh;

    @Column(nullable = false, name = "diachi")
    private String diachi;

    //get 
    public Long getId(){
        return this.id; 
    }

    public String getHoten(){
        return this.hoten;
    }

    public String getSdt(){
        return this.sdt;
    }
 
    public String getEmail(){
        return this.email;
    }

    public int getGioitinh(){
        return this.gioitinh;
    }

    public int getNamsinh(){
        return this.namsinh;
    }

    public String getDiachi(){
        return this.diachi;
    }

    //set 
    public void setHoten(String hoten){
        this.hoten = hoten;
    }

    public void setSdt(String sdt){
        this.sdt = sdt;
    }
 
    public void setEmail(String email){
        this.email = email;
    }

    public void setGioitinh(int gioitinh){
        this.gioitinh = gioitinh;
    }

    public void setNamsinh(int namsinh){
        this.namsinh = namsinh;
    }

    public void setDiachi(String diachi){
        this.diachi = diachi;
    }

}
