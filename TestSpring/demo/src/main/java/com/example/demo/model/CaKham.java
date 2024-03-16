package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cakham")
public class CaKham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, name = "loaicakham")
    private String loaicakham;

    @Column(nullable = false, name = "chuyenkhoa")
    private String chuyenkhoa;

    @Column(nullable = false, name = "id_bacsi")
    private Long id_bacsi;
    
    @Column(nullable = false, name = "bacsi")
    private String bacsi;

    @Column(nullable = false, name = "chiphi")
    private String chiphi;

    // @Column(nullable = false, name = "ngaykham")
    // private String ngaykham;

    // @Column(nullable = false, name = "giokham")
    // private String giokham;

    //get 
    public Long getId(){
        return this.id; 
    }

    public String getLoaicakham() {
        return this.loaicakham;
    }

    public String getChuyenkhoa() {
        return this.chuyenkhoa;
    }

    public Long getIdBacsi() {
        return this.id_bacsi;
    }

    public String getBacsi() {
        return this.bacsi;
    }

    public String getChiphi(){
        return this.chiphi;
    }

    // public String getNgayKham() {
    //     return this.ngaykham;
    // }

    // public String getGioKham() {
    //     return this.giokham;
    // }

    //set 
    public void setLoaicakham(String loaicakham) {
        this.loaicakham = loaicakham;
    }

    public void setChuyenkhoa(String chuyenkhoa) {
        this.chuyenkhoa = chuyenkhoa;
    }

    public void setIdBacsi(Long id_bacsi) {
        this.id_bacsi = id_bacsi;
    }

    public void setBacsi(String bacsi) {
        this.bacsi = bacsi;
    }
    
    public void setChiphi(String chiphi) {
        this.chiphi = chiphi;
    }

    // public void setNgayKham(String ngaykham) {
    //     this.ngaykham = ngaykham;
    // }

    // public void setGioKham(String giokham) {
    //     this.giokham = giokham;
    // }
    
}

