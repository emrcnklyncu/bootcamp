package com.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.net.InetAddress;

@RestController
@RequestMapping("/")
public class Controller {

  @GetMapping
  public String sayHello() throws Exception {
    return InetAddress.getLocalHost().getHostName();
  }

}