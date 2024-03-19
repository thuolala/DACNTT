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
import com.example.demo.model.CaKham;
import com.example.demo.repo.CaKhamRepository;
import java.util.List;
import java.util.Optional;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
@RestController
@RequestMapping("/api/cakham")
public class CaKhamController {
    @Autowired
    private CaKhamRepository cakhamRepository;

    // create 
    @PostMapping("/them")
    public CaKham createCaKham(@RequestBody CaKham caKham) {
         return cakhamRepository.save(caKham);
    }

    // read
    @GetMapping("")
    public List<CaKham> getCaKhams() {
        return cakhamRepository.findAll();
    }

    @GetMapping("/{loaicakham}")
    public List<CaKham> getCaKhamByLoai(@PathVariable String loaicakham) {
        return cakhamRepository.findByLoaicakham(loaicakham);
    }

    @GetMapping("/{chuyenkhoa}")
    public List<CaKham> getCaKhamByCK(@PathVariable String chuyenkhoa) {
        return cakhamRepository.findByChuyenkhoa(chuyenkhoa);
    }

    @GetMapping("/{bacsi}")
    public List<CaKham> getCaKhamByBS(@PathVariable String bacsi) {
        return cakhamRepository.findByBacsi(bacsi);
    }

    @GetMapping("/id/{id}")
    public Optional<CaKham> getCaKhamById(@PathVariable Long id) {
        return cakhamRepository.findById(id);
    }

    // update 
    @PutMapping("/chinhsua/{id}")
    public CaKham updateCaKham(@PathVariable Long id, @RequestBody CaKham caKhamAfter) {
        CaKham caKham = cakhamRepository.findById(id)
                                        .orElseThrow(() -> new RuntimeException("Ca Kham not found with id: " + id));

        caKham.setBacsi(caKhamAfter.getBacsi());
        caKham.setChiphi(caKhamAfter.getChiphi());

        return cakhamRepository.save(caKham);
    }

    // delete 
    @DeleteMapping("/xoa/{id}")
    public String deleteCaKham(@PathVariable Long id) {
        cakhamRepository.deleteById(id);
        return "CaKham with id: " + id + " deleted successfully";
    }


}
