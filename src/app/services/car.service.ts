import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44310/api/cars/"
  constructor(private httpclient:HttpClient) { }

  getCar() : Observable<ListResponseModel<Car>>{
    return this.httpclient.get<ListResponseModel<Car>>(this.apiUrl + "getcardetails")
  }
}
