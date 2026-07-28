package com.cognizant.exercise4countryservice.controller;

import com.cognizant.exercise4countryservice.model.Country;
import com.cognizant.exercise4countryservice.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    // Exercise 4
    @RequestMapping("/country")
    public Country getCountryIndia() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        return context.getBean("countryIndia", Country.class);
    }

    // Exercise 5
    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}