import { Component, Input, input, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IProperty } from "../IProperty.interface";
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-property-card',
    //template:'<h1>Property Card</h1>',
    templateUrl: 'property-card.component.html',
    //styles: ['h1 { font-weight: normal; }']
    styleUrls: ['property-card.component.css'],
    imports: [RouterLink, CommonModule]

})

export class PropertyCardComponent {
    @Input() property!: IProperty;

}