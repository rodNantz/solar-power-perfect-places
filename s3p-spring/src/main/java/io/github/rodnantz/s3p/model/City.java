package io.github.rodnantz.s3p.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="city")
@ToString
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    @Column
    private long id;
    @Getter @Setter
    @Column
    private String name;
    @Getter @Setter
    @Column
    private String country;
    @Getter @Setter
    @Column
    private int latitude;
    @Getter @Setter
    @Column(name="raindays")
    private int rainDaysInYear;
    @Getter @Setter
    @Column(name="months18to30")
    private int monthsBetween18And30;
    @Getter @Setter
    @Column(name="closetowater")
    private boolean closeToWater;



}