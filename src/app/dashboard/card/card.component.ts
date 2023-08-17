import { Component, OnInit, Input } from '@angular/core';
import { CardService } from './card.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit 
{
	@Input() card;

	constructor(private cardService: CardService) 
	{ }

	ngOnInit() 
	{ }

	async onLike(id: number)
	{
		this.card = await this.cardService.like(id); 
	}

	onShare()
	{
		window.open("https://www.linkedin.com/in/davi-caetano-de-oliveira-a74024255?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bo5a4X7H4ScmOth0zGPoTBQ%3D%3D", "_blank");
  	}
}
