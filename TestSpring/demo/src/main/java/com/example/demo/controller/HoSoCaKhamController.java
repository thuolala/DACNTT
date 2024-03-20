package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.BacSi;
import com.example.demo.model.HoSoCaKham;
import com.example.demo.repo.HoSoCaKhamRepository;
import java.util.List;
import java.util.Optional;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
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
        hsck.setLichsubenhly(hoSoCaKham.getLichsubenhly());
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

    @GetMapping("/benhnhan/{id}")
    public List<HoSoCaKham> getHSCKByIdBN(@PathVariable int id) {
        return hosocakhamRepository.findByIdBenhnhan(id);
    }

    @GetMapping("/bacsi/{id}")
    public List<HoSoCaKham> getHSCKByIdBS(@PathVariable int id) {
        return hosocakhamRepository.findByIdBacsi(id);
    }

    // update 
    @PutMapping("/chinhsua/{id}")
    public HoSoCaKham updateBS(@PathVariable Long id, @RequestBody HoSoCaKham hsAfter) {
        HoSoCaKham hs = hosocakhamRepository.findById(id)
                                        .orElseThrow(() -> new RuntimeException("Ho so voi: " + id + " khong ton tai"));

        hs.setBenhnhan(hsAfter.getBenhnhan());
        hs.setSdt(hsAfter.getSdt());
        hs.setNamsinh(hsAfter.getNamsinh());
        hs.setLichsubenhly(hsAfter.getLichsubenhly());
        hs.setChuandoan(hsAfter.getChuandoan());
        hs.setDieutri(hsAfter.getDieutri());
        hs.setTrangthai(hsAfter.getTrangthai());

        return hosocakhamRepository.save(hs);
    }
}
