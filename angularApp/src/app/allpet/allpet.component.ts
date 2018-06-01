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
  clicked = false;
  

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPets()
    
  }

  getPets(){
    
    let observable = this._httpService.getPets();
    

    observable.subscribe(data => {
      
      this.pets = data["data"];
      // this.pets.sort(function (a, b) {
      //   if (a.type < b.type) {
      //     return -1;
      //   }
      //   if (a.type > b.type) {
      //     return 1;
      //   }
      //   return 0
      // })
    })
  }

  sortType(sort: string) {
    
    
   

    if (sort === 'name' && this.clicked == false) {
      this.pets = this.pets.sort(this.sortByName);
      console.log(this.pets);
      this.clicked = true
      console.log("clicked1!!!!!!")
    }
    
    else if (sort === 'name' && this.clicked == true) {
      this.pets = this.pets.sort(this.sortByName);
      var a = this.pets.reverse()
      this.pets = a
      console.log("sorting by NAME!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(this.pets)
      this.clicked = false;
      console.log("clicked2!!!!!!")
    }

    if (sort === 'type' && this.clicked == false) {
      this.pets = this.pets.sort(this.sortByType);
      console.log(this.pets);
      this.clicked = true
    }

    else if (sort === 'type' && this.clicked == true) {
      this.pets = this.pets.sort(this.sortByType);
      var a = this.pets.reverse()
      this.pets = a
      console.log("sorting by TYPE!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(this.pets)
      this.clicked = false;
      console.log("clicked2!!!!!!")
    }


    if (sort === 'like' && this.clicked == false) {
      this.pets = this.pets.sort(this.sortByLike);
      console.log(this.pets);
      this.clicked = true
    }

    else if (sort === 'like' && this.clicked == true) {
      this.pets = this.pets.sort(this.sortByLike);
      var a = this.pets.reverse()
      this.pets = a
      console.log("sorting by LIKE!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(this.pets)
      this.clicked = false;
      console.log("clicked2!!!!!!")
    }



    if (sort === 'createdAt' && this.clicked == false) {

      this.pets = this.pets.sort((a: any, b: any) =>
        new Date(a.createdAt).getTime() + new Date(b.createdAt).getTime()
        
      );
      console.log(this.pets);
      this.clicked = true
    }

    else if (sort === 'createdAt' && this.clicked == true) {

      this.pets = this.pets.sort((a: any, b: any) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()

      );
      console.log(this.pets);
      this.clicked = false
    }
    
    
  }

  sortByType(a, b) {
    if (a.type > b.type) return 1
    else if (a.type == b.type) return 0
    else return -1
  }

  sortByName(a, b) {
    if (a.name > b.name) return 1
    else if (a.name == b.name) return 0
    else return -1
  }
  sortByLike(a, b) {
    if (a.like > b.like) return 1
    else if (a.like == b.like) return 0
    else return -1
  }



  showPet(pet){
    console.log("1kjahglfkjsadhflas",pet)
    this._httpService.showPet(pet)
  }

}
