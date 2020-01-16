import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

    data: any;

    constructor(public http: Http) {
      this.data = null;
    }

    getPizzas(){

      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

        this.http.get('http://localhost:8080/api/pizzas')
          .pipe(map(res => res.json()))
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });

    }

    createPizza(pizza){

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/pizzas', JSON.stringify(pizza), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });

    }

    deletePizza(id){

      this.http.delete('http://localhost:8080/api/pizzas/' + id).subscribe((res) => {
        console.log(res.json());
      });

    }
}
