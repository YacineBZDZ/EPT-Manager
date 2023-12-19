import {Component, OnInit} from '@angular/core';

interface Brand {
    text: string;
    imageUrl: string;
}

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

    constructor() {
    }

    brands: Brand[] = [
        {
            text: `SumUp est une société fintech basée à Londres,/n
       au Royaume-Uni, qui fournit des solutions de paiement électronique pour les petites et moyennes entreprises. 
       Fondée en 2011, SumUp vise à rendre les transactions financières plus simples, 
       plus rapides et plus accessibles aux commerçants de toutes tailles.`
            , imageUrl: "../assets/img/Logo-SumUp.png"
        },
        {
            text: 'Ingenico est une société française spécialisée dans les solutions de paiement électronique et les services transactionnels. Fondée en 1980, elle est devenue l\'un des leaders mondiaux \n dans son secteur d\'acti',
            imageUrl: '../assets/img/ingenico.png'
        },
        {
            text: 'iZettle est une société suédoise spécialisée dans les solutions de paiement électronique pour les petites entreprises. Fondée en 2010, iZettle s\'est donné pour mission de rendre les transactions financières plus simples et plus accessibles grâce à des outils technologiques innovants.',
            imageUrl: '../assets/img/iZettle.png'
        }, {
            text: 'une banque internationale dont le siège est situé dans la zone diplomatique de Manama, à Bahreïn. Elle a été constituée en société par actions en 1980 par un décret spécial de l\'émir de Bahreïn.',
            imageUrl: '../assets/img/abcbank.jpg'
        }
        // Add more brands and their respective image URLs
    ];
}
