package com.example;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.entity.Country;
import com.example.repository.CountryRepository;

@Component
public class BookRunner implements CommandLineRunner {

    private final CountryRepository repository;

    public BookRunner(CountryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {

        Country country = new Country();

        country.setCode("FR");
        country.setName("France");

        repository.save(country);

        System.out.println("Country added successfully!");

        repository.findAll().forEach(c ->
                System.out.println(c.getCode() + " - " + c.getName()));
    }
}