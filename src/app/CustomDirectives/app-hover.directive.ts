import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  constructor(private ele:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor')backgroundColor: string='#28282B';
  @HostBinding('style.color') text_color:string= 'white';
  @HostBinding('style.border') border:string='none';

  @HostListener('mouseenter') onMouseEnter(){
    this.backgroundColor="white";
    this.text_color="black";
    this.border="#28282B 3px solid";
  }

  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor='#28282B';
    this.text_color='white';
    this.border=  'none';
  }
}
