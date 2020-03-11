package com.example.demo;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class TestController {

    @ResponseBody
    @GetMapping("/User")
    public Map<String, String> jsonReturnSample(){
        Map<String, String> map = new HashMap<>();
        map.put("name", "Todd Motto");
        map.put("id",  "801381");
        return map;
    }
}



