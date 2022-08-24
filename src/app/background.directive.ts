import { Directive,  HostBinding,  Input,  OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  
  @Input() backgroundColor:string = 'white';

	@Input() textColor:string = 'black';

	@HostBinding('style.backgroundColor') bgColor!:string;

	@HostBinding('style.color') color!:string;  

	constructor() {}

	ngOnInit() {

		this.bgColor = this.backgroundColor;		

		this.color = this.textColor;

  	}
  

}
