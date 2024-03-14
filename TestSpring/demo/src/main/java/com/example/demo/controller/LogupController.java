package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BenhNhanDTO;
import com.example.demo.model.BenhNhan;
import com.example.demo.model.TaiKhoan;
import com.example.demo.model.User;
import com.example.demo.repo.BenhNhanRepository;
import com.example.demo.repo.TaiKhoanRepository;
import com.example.demo.repo.UserRepository;

@RestController
public class LogupController {

    @Autowired
    private TaiKhoanRepository tkRepository;

    @Autowired
    private BenhNhanRepository bnRepository;

    @PostMapping("/api/logup")
    public ResponseEntity<?> logup(@RequestBody BenhNhanDTO benhNhanDTO) {
        // Tạo đối tượng BenhNhan từ DTO
        BenhNhan benhNhan = new BenhNhan();
        benhNhan.setHoten(benhNhanDTO.getHoten());
        benhNhan.setSdt(benhNhanDTO.getSdt());
        benhNhan.setEmail(benhNhanDTO.getEmail());
        benhNhan.setGioitinh(benhNhanDTO.getGioitinh());
        benhNhan.setNamsinh(benhNhanDTO.getNamsinh());
        benhNhan.setDiachi(benhNhanDTO.getDiachi());

        // Tạo đối tượng TaiKhoan từ DTO
        TaiKhoan taiKhoan = new TaiKhoan();
        taiKhoan.setEmail(benhNhanDTO.getEmail());
        taiKhoan.setMatkhau(benhNhanDTO.getMatkhau());
        taiKhoan.setQuyen(0);

        // Lưu vào cơ sở dữ liệu
        tkRepository.save(taiKhoan);
        bnRepository.save(benhNhan);

        return ResponseEntity.ok().body("Logup Success!");
    }
}
