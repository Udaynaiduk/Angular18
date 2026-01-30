// src/app/models/paddy.model.ts
export class Paddy {
    id: number;
    name: string;
    variety: string;
    quantityKg: number;
    pricePerKg: number;
    location: string;
    harvestDate: Date;
    imageUrl: string; // new property

    constructor(
        id: number,
        name: string,
        variety: string,
        quantityKg: number,
        pricePerKg: number,
        location: string,
        harvestDate: Date,
        imageUrl: string
    ) {
        this.id = id;
        this.name = name;
        this.variety = variety;
        this.quantityKg = quantityKg;
        this.pricePerKg = pricePerKg;
        this.location = location;
        this.harvestDate = harvestDate;
        this.imageUrl = imageUrl;
    }

    totalValue(): number {
        return this.quantityKg * this.pricePerKg;
    }
}
