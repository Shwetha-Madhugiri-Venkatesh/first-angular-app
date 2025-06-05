import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]',
})
export class SetBackground{
    //private ele:ElementRef;
    //private renderer:Renderer2;
    constructor(private ele:ElementRef,private renderer:Renderer2){
       //this.ele=ele;
       //this.renderer=renderer;
    //    ele.nativeElement.style.background='#36454F';
    //    ele.nativeElement.style.color='white';
    }
    @Input('setBackground') inps:{background:string,color:string};
    ngOnInit(){
        // this.ele.nativeElement.style.background='#36454F';
        // this.ele.nativeElement.style.color='white';
        this.renderer.setStyle(this.ele.nativeElement, 'background', this.inps.background);
        this.renderer.setStyle(this.ele.nativeElement, 'color', this.inps.color);
        //this.renderer.setAttribute(this.ele.nativeElement, 'title', 'this is the renderer example');
    }
}