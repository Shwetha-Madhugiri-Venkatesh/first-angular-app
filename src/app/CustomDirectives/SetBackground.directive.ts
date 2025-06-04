import { Directive, ElementRef, Renderer2 } from "@angular/core";

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

    ngOnInit(){
        // this.ele.nativeElement.style.background='#36454F';
        // this.ele.nativeElement.style.color='white';
        this.renderer.setStyle(this.ele.nativeElement, 'background', '#36454F');
        this.renderer.setStyle(this.ele.nativeElement, 'color', 'white');
        //this.renderer.setAttribute(this.ele.nativeElement, 'title', 'this is the renderer example');
    }
}