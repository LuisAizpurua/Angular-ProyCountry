import { Component,Output } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor(private service: CountriesService){}

  @Output()
  public countries: Country[] = [];

  searchByRegion(region: string){
     this.service.searchRegion(region).subscribe(
       data => this.countries = data
     );
  }
}
