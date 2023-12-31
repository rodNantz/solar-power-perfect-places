package io.github.rodnantz.s3p.repository;

import io.github.rodnantz.s3p.model.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends CrudRepository<City, Long> {}
