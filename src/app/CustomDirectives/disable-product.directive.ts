import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableProduct]'
})
export class DisableProductDirective {

  constructor(private ele:ElementRef, private Renderer:Renderer2) { }

  @Input() set appDisableProduct(disable:boolean){
    if(disable){
    this.Renderer.addClass(this.ele.nativeElement,'disable-out-of-stock-product');
    }
  }
}
