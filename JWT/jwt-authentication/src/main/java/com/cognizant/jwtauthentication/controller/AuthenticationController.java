package com.cognizant.jwtauthentication.controller;

import com.cognizant.jwtauthentication.jwt.JwtService;
import com.cognizant.jwtauthentication.model.JwtResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtService jwtService;

    @GetMapping("/authenticate")
    public JwtResponse authenticate(Authentication authentication) {

        String username = authentication.getName();

        String token = jwtService.generateToken(username);

        return new JwtResponse(token);
    }
}