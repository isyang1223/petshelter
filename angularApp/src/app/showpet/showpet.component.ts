import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-showpet',
  templateUrl: './showpet.component.html',
  styleUrls: ['./showpet.component.css']
})
export class ShowpetComponent implements OnInit {
  pet: any;
  clicked = false
  

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
  
    this.pet = this._httpService.pet;
    let observable = this._httpService.showPetById(this.pet);
    observable.subscribe(data => {
      this.pet = data["data"]
      

    })
  }

  likePet(pet){
    let observable = this._httpService.likePet(this.pet);
    observable.subscribe(data => {
      console.log(data)
      if (data["message"] == "Success") {
        this.clicked = true;
        this.ngOnInit()
        

      }
    })
  }
  
  deletePet(pet) {
    let observable = this._httpService.deletePet(pet);

    observable.subscribe(data => {
      this._router.navigate(['/'])


    })
  }

}
