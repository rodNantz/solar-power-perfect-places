package io.github.rodnantz.s3p;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SolarPowerPerfectPlacesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SolarPowerPerfectPlacesApplication.class, args);
	}


	/*
	@Bean
	CommandLineRunner init(CitiesRepository citiesRepository) {
		return args -> {
				City city = new City();
				city.setName("Lisbon");
				city.setCountry("Portugal");
				city.setLatitude(39);
				city.setRainDaysInYear(112);
				city.setMonthsBetween18And30(9);
				city.setCloseToWater(true);
				citiesRepository.save(city);

				city = new City();
				city.setName("Rio de Janeiro");
				city.setCountry("Brazil");
				city.setLatitude(23);
				city.setRainDaysInYear(135);
				city.setMonthsBetween18And30(9);
				city.setCloseToWater(true);
				citiesRepository.save(city);

				citiesRepository.findAll().forEach(System.out::println);
		};
	}
	*/

}
