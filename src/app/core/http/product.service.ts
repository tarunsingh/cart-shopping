import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {
  private productObservable: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    const productData: any [] = [ {
      'id': 40644,
      'name': 'Fabulous Hairbands: 1-16y',
      'price': 130,
      'imageUrl': '/assets/images/6.jpg',
    }, {
      'id': 40845,
      'name': 'Floral Hair Accessories: Up to 14y',
      'price': 160,
      'imageUrl': '/assets/images/7.jpg',
    }, {
      'id': 42774,
      'name': 'Happy Hairdos - Accessories',
      'price': 160,
      'imageUrl': '/assets/images/4.jpg',
    }, {
      'id': 40828,
      'name': 'Accessories For Party Hairdos',
      'price': 135,
      'imageUrl': '/assets/images/5.jpg',
    }, {
      'id': 42353,
      'name': 'Lovely Hairstyles: Up to 15y',
      'price': 160,
      'imageUrl': '/assets/images/8.jpg',
    }, {
      'id': 40645,
      'name': 'Fancy Hairdos - Hair Clips: 3-14y',
      'price': 145,
      'imageUrl': '/assets/images/2.jpg',
    }, {
      'id': 40647,
      'name': 'All About Hair Accessories: 1-14y',
      'price': 160,
      'imageUrl': '/assets/images/6.jpg',
    }, {
      'id': 40646,
      'name': 'Headbands On-Trend: Up to 14y',
      'price': 135,
      'imageUrl': '/assets/images/3.jpg',
    }, {
      'id': 32384,
      'name': 'Elegant Ethnic Jewelry: Up to 14y',
      'price': 160,
      'imageUrl': '/assets/images/9.jpg',
    }, {
      'id': 39144,
      'name': 'Best Add-Ons - Jewelry: Up to 14y',
      'price': 145,
      'imageUrl': '/assets/images/1.jpg',
    }, {
      'id': 39142,
      'name': 'Slings On - Bags: 2-13y',
      'price': 160,
      'imageUrl': '/assets/images/2.jpg',
    }, {
      'id': 41047,
      'name': 'Her Trendy Accessories: 3-16y',
      'price': 160,
      'imageUrl': '/assets/images/8.jpg',
    }, {
      'id': 39143,
      'name': 'Quirky Sunglasses: Up to 15y',
      'price': 135,
      'imageUrl': '/assets/images/4.jpg',
    }, {
      'id': 40640,
      'name': 'Pretty Party Jewelry: 1-16y',
      'price': 160,
      'imageUrl': '/assets/images/5.jpg',
    }, {
      'id': 40642,
      'name': 'The Watch World: Up to 14y',
      'price': 145,
      'imageUrl': '/assets/images/2.jpg',
    }, {
      'id': 40648,
      'name': 'The Hat Collection',
      'price': 160,
      'imageUrl': '/assets/images/9.jpg',
    }, {
      'id': 40641,
      'name': 'Pretty Add-Ons - Wallet: 3-10y',
      'price': 135,
      'imageUrl': '/assets/images/3.jpg',
    }, {
      'id': 37380,
      'name': 'Si Rosa Gown',
      'price': 160,
      'imageUrl': '/assets/images/7.jpg',
    } ];
    this.productObservable.next(productData);
  }

  getProducts(): BehaviorSubject<any> {
    return this.productObservable;
  }

  updateCart(item, type) {

  }

}
