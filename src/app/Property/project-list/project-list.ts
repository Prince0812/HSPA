import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../Property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, HttpClientModule, PropertyCardComponent],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;

  properties: IProperty[] = [];

  constructor(private route: ActivatedRoute, private housingservice: HousingService) {}

  ngOnInit() {
      if (this.route.snapshot.url.toString()) {
        this.SellRent = 2;
      }

    this.housingservice.getAllProperties(this.SellRent).subscribe(data => {
      this.properties = data;
      console.log();
      
    }, Error => {
      console.error(Error);
    });
  }

}


