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

    @Column(nullable = false, name = "loaicakham")
    private String loaicakham;

    @Column(nullable = false, name = "bacsi")
    private String bacsi;

    @Column(nullable = false, name = "id_bacsi")
    private int idBacsi;

    @Column(nullable = false, name = "id_cakham")
    private int idCakham;

    @Column(nullable = false, name = "id_benhnhan")
    private int idBenhnhan;
    
    @Column(nullable = false, name = "benhnhan")
    private String benhnhan;

    @Column(nullable = false, name = "sdt")
    private String sdt;

    @Column(nullable = false, name = "email")
    private String email;

    @Column(nullable = false, name = "namsinh")
    private int namsinh;

    @Column(nullable = true, name = "lichsu_benhly")
    private String lichsuBenhly;

    @Column(nullable = true, name = "chuandoan")
    private String chuandoan;

    @Column(nullable = true, name = "dieutri")
    private String dieutri;

    @Column(nullable = false, name = "ngaykham")
    private String ngaykham;

    @Column(nullable = false, name = "giokham")
    private String giokham;

    @Column(nullable = false, name = "trangthai")
    private int trangthai;

    //get 
    public Long getId(){
        return this.id; 
    }

    public String getLoaicakham() {
        return this.loaicakham;
    }

    public String getBacsi() {
        return this.bacsi;
    }

    public int getIdBacsi() {
        return this.idBacsi;
    }
    
    public int getIdCakham(){
        return this.idCakham; 
    }

    public int getIdBenhnhan(){
        return this.idBenhnhan; 
    }

    public String getBenhnhan(){
        return this.benhnhan;
    }

    public String getSdt(){
        return this.sdt;
    }
 
    public String getEmail(){
        return this.email;
    }

    public int getNamsinh(){
        return this.namsinh;
    }

    public String getLichsubenhly() {
        return this.lichsuBenhly;
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

    public int getTrangthai(){
        return this.trangthai; 
    }

    //set 
    public void setLoaicakham(String loaick){
        this.loaicakham = loaick; 
    }

    public void setBacsi(String bs){
        this.bacsi = bs; 
    }

    public void setIdBacsi(int idBacsi){
        this.idBacsi = idBacsi; 
    }

    public void setIdCakham(int idCakham){
        this.idCakham = idCakham;
    }

    public void setIdBenhnhan(int idBenhnhan){
        this.idBenhnhan = idBenhnhan;
    }

    public void setBenhnhan(String bn){
        this.benhnhan = bn; 
    }

    public void setSdt(String sdt){
        this.sdt = sdt;
    }
 
    public void setEmail(String email){
        this.email = email;
    }

    public void setNamsinh(int namsinh){
        this.namsinh = namsinh;
    }

    public void setLichsubenhly(String lichsu_benhly){
        this.lichsuBenhly = lichsu_benhly;
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

    public void setTrangthai(int tt){
        this.trangthai = tt;
    }  
}

