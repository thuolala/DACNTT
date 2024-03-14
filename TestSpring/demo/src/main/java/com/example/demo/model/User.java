package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// User.java

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true, name = "phone")
    private String phone;
    
    @Column(nullable = false, name = "password")
    private String password;

    public String getPhone() {
        return this.phone;
    }

    public String getPassword() {
        return this.password;
    }
    
}

