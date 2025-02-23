import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option } from '@angular/cli/src/command-builder/utilities/json-schema';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dem-single-select-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-select-input.component.html',
  styleUrl: './single-select-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleSelectInputComponent),
      multi: true,
    },
  ],
})
export class SingleSelectInputComponent
  implements ControlValueAccessor, OnDestroy, OnInit, AfterViewInit
{
  @Input() options: any[] = [];
  selectedValue: string | null = null;
  @Input() title!: string;
  @Input() label?: string;
  disabled = false;
  isOpen = false;
  @Input() optionValue?: string;

  constructor(private element: ElementRef, private rendrer: Renderer2) {}

  ngAfterViewInit(): void {
    this.unListen = this.rendrer.listen('document', 'click', (event: Event) => {
      if (!this.element.nativeElement.contains(event.target)) {
        if (this.isOpen) {
          this.toggleDropdown();
        }
      }
    });
  }

  onChange: any = () => {};
  unListen: any = () => {};

  onTouched: any = () => {};

  ngOnInit() {}

  writeValue(value: string): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onFocused(e: Event) {
    this.onTouched();
  }

  onBlur(e: Event) {}

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onOptionClick(value: any) {
    let selectedValue;
    if (this.label && !this.optionValue) selectedValue = value[this.label];
    if (this.label && this.optionValue) selectedValue = value[this.optionValue];
    else selectedValue = value;
    this.selectedValue = selectedValue;
    this.onChange(selectedValue);
    this.toggleDropdown();
  }

  splitByHyphen(name: string | null | undefined) {
    return name?.split('_').join(' ');
  }

  isSelected(value: string): boolean {
    return this.selectedValue === value;
  }

  ngOnDestroy(): void {
    this.unListen();
  }
}
