package com.example.demo.repo;

import com.example.demo.model.User;

import java.util.List;

// UserRepository.java

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByPhone(String phone);
    List<User> findAll();
}

