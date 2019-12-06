import {Component, Input, OnInit} from '@angular/core';
import {Flower} from '../flower';
import {ActivatedRoute} from '@angular/router';
import {FlowerDataService} from '../flower-data.service';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit {
  public flower: Flower;
  public flowers: Flower[];
  private flowerDataService: FlowerDataService;
  private activatedRoute: ActivatedRoute;
  constructor(flowerDataService: FlowerDataService, activatedRoute: ActivatedRoute) {
    this.flowerDataService = flowerDataService;
    this.activatedRoute = activatedRoute;
    this.flowers = [];
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.flowerDataService.getFlowerData().subscribe(flowers => {
        this.flowers = flowers;
        this.flower = this.flowers[id];
      });
    });
  }
}
