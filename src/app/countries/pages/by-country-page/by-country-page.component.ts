import { Component, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

   constructor(private service: CountriesService){}

   @Output()
   public countries: Country[] = [];

   searchByCountry(term: string){
      this.service.searchCountry(term).subscribe(
        data => this.countries = data
      );
   }
}
