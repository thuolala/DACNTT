package com.example.demo.controller;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.example.demo.model.HoSoCaKham;
import com.example.demo.repo.HoSoCaKhamRepository;

@Controller
public class WebSocketController {

    @Autowired
    private HoSoCaKhamRepository hosocakhamRepository;

    @MessageMapping("/hoso")
    @SendTo("/topic/data")
    public Optional<HoSoCaKham> getHSCaKhamById(String dataSend) throws Exception{
        return hosocakhamRepository.findById(Long.parseLong(dataSend));
    }
}
