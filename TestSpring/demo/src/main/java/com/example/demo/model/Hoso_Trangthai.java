package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hoso_trangthai")
public class Hoso_Trangthai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "id_hoso")
    private Long idHoso;

    @Column(nullable = false, name = "trangthai")
    private String trangthai;

    public Long getIdHoso() {
        return this.idHoso;
    }

    public String getTrangthai() {
        return this.trangthai;
    }

    public void setIdHoso(Long idhs) {
        this.idHoso = idhs;
    }

    public void setTrangthai(String tt) {
        this.trangthai = tt;
    }
 
}

