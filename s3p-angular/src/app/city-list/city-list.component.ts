import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityServiceService } from '../city-service.service' ;

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityServiceService) {
  }

  ngOnInit() {
    this.cityService.findAll().subscribe((data: City[]) => {
      this.cities = data;
      // for (let key of [1,2,3,4,5,6,7,8,9,10]){
      //   this.cities = this.cities.concat(data);
      // }
      
      this.cities.forEach(c => {
        c.grade = this.calcGrade(c);
      });
    });
  }

  private calcGrade(city : City) : number {
    var goodLat = this.percentage(0, 66,
                                  city.latitude > 66 ? 0 : city.latitude); 
    var goodDays = this.percentage(0, 365,
                                   365 - city.rainDaysInYear);
    var goodWarm =  this.percentage(0, 12,
                                    city.monthsBetween18And30);
    var goodBeach = city.closeToWater ? 1 : 0;

    return (goodLat + goodDays + goodWarm + goodBeach) / 4;
  }

  // returns values from 0 to 1
  private percentage(min: number, max: number, value: number) : number {
    return value / (max-min);
  }


}
