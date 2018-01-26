import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	private productos:any = []; 

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.productos = [
			[
				{
					"img": "../assets/imgs/27072577_1037164083102797_4458657417680286372_n.jpg",
					"producto": "prod 1",
					"precio_compra": 800
				},
				{
					"img": "../assets/imgs/26907628_1033506280135244_8976954734958062356_n.jpg",
					"producto": "prod 2",
					"precio_compra": 800
				}
			],
			[
				{
					"img": "../assets/imgs/26907176_1037164156436123_2260621876987817936_n.jpg",
					"producto": "prod 3",
					"precio_compra": 800
				},
				{
					"img": "../assets/imgs/26814536_1030683640417508_686528263555830647_n.jpg",
					"producto": "prod 4",
					"precio_compra": 800
				}
			],
			[
				{
					"img": "../assets/imgs/25353918_1008131302672742_1189239274236905375_n.jpg",
					"producto": "prod 5",
					"precio_compra": 800
				},
				{
					"img": "../assets/imgs/24909829_1003289379823601_3922593389630930517_n.jpg",
					"producto": "prod 6",
					"precio_compra": 800
				}
			],
			[
				{
					"img": "../assets/imgs/24059167_991217631030776_325266300724001284_n.jpg",
					"producto": "prod 7",
					"precio_compra": 800
				},
				{
					"img": "../assets/imgs/23622018_984427771709762_8892231831485654287_n.jpg",
					"producto": "prod 8",
					"precio_compra": 800
				}
			]

		]

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

}
