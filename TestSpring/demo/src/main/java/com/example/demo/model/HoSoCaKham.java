package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hoso_cakham")
public class HoSoCaKham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "id_cakham")
    private Long idCakham;

    @Column(nullable = false, name = "id_benhnhan")
    private Long idBenhnhan;
    
    @Column(nullable = false, name = "benhnhan")
    private String benhnhan;

    @Column(nullable = true, name = "lichsu_benhly")
    private String lichsu_benhly;

    @Column(nullable = true, name = "chuandoan")
    private String chuandoan;

    @Column(nullable = true, name = "dieutri")
    private String dieutri;

    @Column(nullable = false, name = "ngaykham")
    private String ngaykham;

    @Column(nullable = false, name = "giokham")
    private String giokham;

    //get 
    public Long getId(){
        return this.id; 
    }

    public Long getIdCakham(){
        return this.idCakham; 
    }

    public Long getIdBenhnhan(){
        return this.idBenhnhan; 
    }

    public String getLichsu(){
        return this.lichsu_benhly;
    }

    public String getChuandoan(){
        return this.chuandoan;
    }

    public String getDieutri(){
        return this.dieutri;
    }

    public String getNgaykham() {
        return this.ngaykham;
    }

    public String getGiokham() {
        return this.giokham;
    }

    //set 
    public void setIdCakham(Long id_cakham){
        this.idCakham = id_cakham;
    }

    public void setIdBenhnhan(Long id_benhnhan){
        this.idBenhnhan = id_benhnhan;
    }

    public void setLichsu(String lichsu_benhly){
        this.lichsu_benhly = lichsu_benhly;
    }

    public void setChuandoan(String chuandoan){
        this.chuandoan = chuandoan;
    }
    
    public void setDieutri(String dieutri){
        this.dieutri = dieutri;
    }

    public void setNgaykham(String ngaykham) {
        this.ngaykham = ngaykham;
    }

    public void setGiokham(String giokham) {
        this.giokham = giokham;
    }
    
}

