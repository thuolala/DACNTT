package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BenhNhan;
import com.example.demo.model.TaiKhoan;
import com.example.demo.repo.TaiKhoanRepository;

import java.util.List;
import java.util.Optional;
// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
@RequestMapping("/api/taikhoan")
@RestController
public class TaiKhoanController {
    @Autowired
    private TaiKhoanRepository tkRepository;

    // get 
    @GetMapping("")
    public List<TaiKhoan> geTaiKhoans() {
        return tkRepository.findAll();
    }

    @GetMapping("/id/{id}")
    public Optional<TaiKhoan> getTaiKhoanById(@PathVariable Long id) {
        Optional<TaiKhoan> tk = tkRepository.findById(id);
        return tk;
    }

    @GetMapping("/email/{email}")
    public TaiKhoan getTaiKhoanByEmail(@PathVariable String id) {
        TaiKhoan tk = tkRepository.findByEmail(id);
        return tk;
    }

    // update 
    @PutMapping("/chinhsua/{id}")
    public TaiKhoan updateTK(@PathVariable Long id, @RequestBody TaiKhoan tkAfter) {
        TaiKhoan tk = tkRepository.findById(id)
                                        .orElseThrow(() -> new RuntimeException("Tai khoan si not found with id: " + id));

        tk.setMatkhau(tkAfter.getMatkhau());

        return tkRepository.save(tk);
    }

    // @GetMapping("/api/taikhoan/{sdt}")
    // public Optional<TaiKhoan>  getTaiKhoanBySdt(@PathVariable String sdt) {
    //     Optional<TaiKhoan>  tk = tkRepository.findBySdt(sdt);
    //     return tk;
    // }
}
