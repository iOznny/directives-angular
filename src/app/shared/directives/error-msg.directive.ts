import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})

export class ErrorMsgDirective implements OnInit, OnChanges {

  private htmlElement: ElementRef<HTMLElement>
  private _message: string = 'Campo requerido.';
  private _color: string = 'blue';

  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set message(msg: string) {  
    this._message = msg;
    this.changeMessage();
  }

  @Input() set valid(value: boolean) {
    if(value) {
      this.htmlElement.nativeElement.classList.remove('d-block');
    } else {
      this.htmlElement.nativeElement.classList.add('d-none');
    }
  }

  constructor(private eler: ElementRef<HTMLElement>) {     
    this.htmlElement = this.eler;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }

  ngOnInit(): void {
    this.setColor();
    this.changeMessage();
    this.setStyle();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  changeMessage(): void {
    this.htmlElement.nativeElement.innerHTML = this._message;
  }

}
