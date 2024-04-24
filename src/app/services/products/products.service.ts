import { GetAllProductsResponse } from './../../models/interfaces/products/response/getAllProductsResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private API_URL = environment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Autorization: `Berer ${this.JWT_TOKEN}`,
    }),
  };
  constructor(private http: HttpClient, private cookie: CookieService) {}

  GetAllProducts(): Observable<Array<GetAllProductsResponse>> {
    return (
      this.http
        .get<Array<GetAllProductsResponse>>(
          `${this.API_URL}/products`,
          this.HttpOptions
        )
        //filtrando os produtos maior que 0
        .pipe(map((product) => product.filter((data) => data?.amount > 0)))
    );
  }
}
