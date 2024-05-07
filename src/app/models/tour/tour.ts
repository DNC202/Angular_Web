export class Tour {
    id: number;
    title: string;
    categories: string[];
    destination: number;
    rating: number;
    price: number;
    duration: string;
    thumbnail: string;

    constructor(id: number, title: string, categories: string[], destination: number, rating: number, price: number, duration: string, thumbnail: string) {
        this.id = id;
        this.title = title;
        this.categories = categories;
        this.destination = destination;
        this.rating = rating;
        this.price = price;
        this.duration = duration;
        this.thumbnail = thumbnail;
    }
}