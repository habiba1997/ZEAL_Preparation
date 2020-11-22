import { Component } from "@angular/core";


@Component({
    selector: "ns-buissness-page",
    templateUrl: "./buissness-page.component.html",
    styleUrls: ["./buissness-page.component.css"]
})
export class BuissnessPageComponent {

   transaction: any = {
    number: "258421YXS",
    coins: "+200",
    punches: 3,
    spent: 150.33,
    buissness: {
        photo:"https://lh3.googleusercontent.com/JpPglbuplhaUL0n_a_H2NIRErU3JoR8bPahIJuGZpOtsx6lLcUoHCYSjf7aUVYPiw23M2u8s0jfQvl4EBIlhCw=s400",
        title:"El sagheer",
        location:"5 Salah El-Deen, Al Gabalayah, Zamalek,"
    },
    date: "12 Jun 2019 | 2:55AM",
    details:""
}



}
