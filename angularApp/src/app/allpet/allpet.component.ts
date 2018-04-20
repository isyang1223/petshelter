import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-allpet',
  templateUrl: './allpet.component.html',
  styleUrls: ['./allpet.component.css']
})
export class AllpetComponent implements OnInit {
  pets = [];
  pet = {};

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPets()
    
  }

  getPets(){
    let observable = this._httpService.getPets();
    console.log("22222222222222")

    observable.subscribe(data => {
      console.log("123", data["data"])
      this.pets = data["data"];
      this.pets.sort(function (a, b) {
        if (a.type < b.type) {
          return -1;
        }
        if (a.type > b.type) {
          return 1;
        }
        return 0
      })
    })
  }
  showPet(pet){
    console.log("1kjahglfkjsadhflas",pet)
    this._httpService.showPet(pet)
  }

}
