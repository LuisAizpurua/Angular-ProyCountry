import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
          .pipe(
            map(countries =>  countries.length>0? countries[0] : null ),
           catchError(error => of(null))
          );
  }

  searchCapital(term: string):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
          .pipe(
           catchError(error => of([]))
          );
  }

  searchCountry(term: string): Observable<Country[]>{
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/name/${term}`)
          .pipe(
          catchError(error => of([]))
          );
  }

  searchRegion(region: string): Observable<Country[]>{
    return this.http.get<Country[]>(`https://restcountries.com/v3.1/region/${region}`)
          .pipe(
          catchError(error => of([]))
          );
  }
}
