import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option } from '@angular/cli/src/command-builder/utilities/json-schema';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dem-multi-select-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select-input.component.html',
  styleUrl: './multi-select-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiSelectInputComponent),
      multi: true,
    },
  ],
})
export class MultiSelectInputComponent
  implements ControlValueAccessor, OnDestroy, OnInit, AfterViewInit
{
  @Input() options: any[] = [];
  @Input() title!: string;
  @Input() label?: string;

  disabled = false;
  isOpen = false;
  protected selectedValues!: string[];

  constructor(private element: ElementRef, private rendrer: Renderer2) {}

  ngOnInit(): void {}

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

  writeValue(value: any): void {
    this.selectedValues = value;
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

  onOptionClick(value: string) {
    const index = this.selectedValues.indexOf(value);
    if (index !== -1) {
      this.selectedValues.splice(index, 1);
    } else {
      this.selectedValues.push(value);
    }
    this.onChange(this.selectedValues);
  }

  findValueIndex(id: string) {
    const index = this.options.indexOf(id);
    return index;
  }

  splitByHyphen(name: string | null | undefined) {
    return name?.split('_').join(' ');
  }

  isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }

  ngOnDestroy(): void {
    this.unListen();
  }
}
