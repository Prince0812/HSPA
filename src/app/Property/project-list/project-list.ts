import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../Property-card/property-card.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-project-list',
  imports: [CommonModule, HttpClientModule, PropertyCardComponent],
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<IProperty> = [];

  constructor(private housingservice: HousingService) {}

  ngOnInit() {
    this.housingservice.getAllProperties().subscribe(data => {
      this.properties = data;
      console.log();
    }, Error => {
      console.error(Error);
    });
  }

}


