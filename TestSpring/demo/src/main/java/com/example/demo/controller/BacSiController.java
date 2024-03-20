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
import com.example.demo.model.BenhNhan;
import com.example.demo.model.CaKham;
import com.example.demo.repo.BacSiRepository;
import java.util.List;
import java.util.Optional;

// @CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin(origins = {"http://localhost:4200", "http://192.168.1.65:4200"})
@RestController
@RequestMapping("/api/bacsi")
public class BacSiController {
    @Autowired
    private BacSiRepository bsRepository;

    // create 
    @PostMapping("/them")
    public BacSi createBS(@RequestBody BacSi bs) {
         return bsRepository.save(bs);
    }

    // read 
    @GetMapping("")
    public List<BacSi> geBacSis() {
        return bsRepository.findAll();
    }

    @GetMapping("/email/{email}")
    public BacSi getBacSiByEmail(@PathVariable String email) {
        return bsRepository.findByEmail(email);
    }

    @GetMapping("/id/{id}")
    public Optional<BacSi> getBacSiById(@PathVariable Long id) {
        return bsRepository.findById(id);
    }

    // update 
    @PutMapping("/chinhsua/{id}")
    public BacSi updateBS(@PathVariable Long id, @RequestBody BacSi bsAfter) {
        BacSi bs = bsRepository.findById(id)
                                        .orElseThrow(() -> new RuntimeException("Bac si not found with id: " + id));

        bs.setSdt(bsAfter.getSdt());
        bs.setMatkhau(bsAfter.getMatkhau());

        return bsRepository.save(bs);
    }

    // delete 
    @DeleteMapping("/xoa/{id}")
    public String deleteBS(@PathVariable Long id) {
        bsRepository.deleteById(id);
        return "Bac si with id: " + id + " deleted successfully";
    }
}
