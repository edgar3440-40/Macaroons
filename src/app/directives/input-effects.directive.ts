import {Directive, ElementRef, HostListener, OnInit, Renderer2, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[inputEffects]'
})
export class InputEffectsDirective implements OnInit {


  @Input() coolInputDefaultBgColor: string = 'linear-gradient( to top, rgb(113,8,30) 0%, rgb(215,72,92) 100%)';
  @Input() coolInputHoverBgColor: string = 'linear-gradient( to top, rgb(113,8,250) 0%, rgb(215,72,92) 100%)';

  constructor(private el: ElementRef, private rend: Renderer2) {
    console.log(el.nativeElement)
  }

  private  _backgroundColor: string = '';
  @HostBinding('style.backgroundImage')
  get getBgColor() {
    return this._backgroundColor;
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeElementBgColor(this.coolInputHoverBgColor);
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeElementBgColor(this.coolInputDefaultBgColor);
  }


  ngOnInit() {
    this.changeElementBgColor(this.coolInputDefaultBgColor)
  }

  changeElementBgColor(color: string) {
    this._backgroundColor = color;
  }
}
