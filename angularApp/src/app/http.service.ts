import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  pet: any;

  constructor(private _http: HttpClient) { }

  addPet(newPet){
    console.log("<> http.service.ts <>")
    console.log("## addPet ##")
   
    return this._http.post('/new', newPet)
  }
  getPets(){
    return this._http.get('/pets');
  }
  showPet(pet){
    console.log("at the service", pet)
    this.pet = pet

  }
  savePet(editPet){
    this.pet = editPet
    console.log("12341245r365246236", this.pet.error)
    
    return this._http.put('/pets/edit/' + this.pet._id, this.pet)
  }
  likePet(pet){
    return this._http.put('/pets/up/' + pet._id, this.pet)
  }
  showPetById(pet) {
    
    return this._http.get('/pets/' + pet._id, this.pet)

  }
  deletePet(pet){
    return this._http.delete('/pets/remove/' + pet._id)
  }
  // upload(selectedFile){
  //   return this._http.post('/upload', selectedFile)
  // }


}
