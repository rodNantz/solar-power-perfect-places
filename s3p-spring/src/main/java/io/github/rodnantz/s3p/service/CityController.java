package io.github.rodnantz.s3p.service;

import io.github.rodnantz.s3p.model.City;
import io.github.rodnantz.s3p.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CityController {

    private final CityRepository citiesRepository;

    public CityController(@Autowired CityRepository citiesRepository) {
        this.citiesRepository = citiesRepository;
    }

    @GetMapping("/cities")
    public List<City> getUsers() {
        return (List<City>) citiesRepository.findAll();
    }

    @PostMapping("/cities")
    void addCity(@RequestBody City city) {
        citiesRepository.save(city);
    }

}
