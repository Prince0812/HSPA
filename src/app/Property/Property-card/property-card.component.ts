import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    //template:'<h1>Property Card</h1>',
    templateUrl: 'property-card.component.html',
    //styles: ['h1 { font-weight: normal; }']
    styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent {
    Property: any = {
        "id": 1,
        "name": "Property 1",
        "location": "Home",
        "price": 100000
    }

}