import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nameRecebido: any;

  constructor (
    private rota: Router,
  ) {}
  detalesFillprincipal (id) {
    console.log("Deu certo"+id);
    this.rota.navigate(['/detales-fil-principal', {id:id}]);
  }
}