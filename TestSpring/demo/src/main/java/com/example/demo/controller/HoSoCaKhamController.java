package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.HoSoCaKham;
import com.example.demo.repo.HoSoCaKhamRepository;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/hoso-cakham")
public class HoSoCaKhamController {
    @Autowired
    private HoSoCaKhamRepository hosocakhamRepository;

    // create 
    @PostMapping("/dat-lich")
    public HoSoCaKham createHSCK(@RequestBody HoSoCaKham hoSoCaKham) {
        String message = "Create Success!" ;
        HoSoCaKham hsck = new HoSoCaKham();
        hsck.setLoaicakham(hoSoCaKham.getLoaicakham());
        hsck.setBacsi(hoSoCaKham.getBacsi());
        hsck.setIdBacsi(hoSoCaKham.getIdBacsi());
        hsck.setIdCakham(hoSoCaKham.getIdCakham());
        hsck.setIdBenhnhan(hoSoCaKham.getIdBenhnhan());
        hsck.setBenhnhan(hoSoCaKham.getBenhnhan());
        hsck.setSdt(hoSoCaKham.getSdt());
        hsck.setEmail(hoSoCaKham.getEmail());
        hsck.setNamsinh(hoSoCaKham.getNamsinh());
        hsck.setLichsu(hoSoCaKham.getLichsu());
        hsck.setChuandoan(hoSoCaKham.getChuandoan());
        hsck.setDieutri(hoSoCaKham.getDieutri());
        hsck.setNgaykham(hoSoCaKham.getNgaykham());
        hsck.setGiokham(hoSoCaKham.getGiokham());
        hsck.setTrangthai(hoSoCaKham.getTrangthai());
    
        hosocakhamRepository.save(hsck);
        return hsck;
    } 

    // read 
    @GetMapping("")
    public List<HoSoCaKham> getHSCaKhams() {
        return hosocakhamRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<HoSoCaKham> getHSCaKhamById(@PathVariable Long id) {
        return hosocakhamRepository.findById(id);
    }
}
