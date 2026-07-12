package com.example.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

    Optional<Country> findByCode(String code);

}