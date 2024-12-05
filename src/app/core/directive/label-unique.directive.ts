import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, catchError } from 'rxjs/operators';
import { WeightPriceModelService } from '../service/weight-price-model.service';

export function labelUniqueValidator(priceService: WeightPriceModelService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return of(control.value).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(label => priceService.checkLabelExists(label)),
      map(isUnique => (isUnique ? null : { labelNotUnique: true })),
      catchError(() => of(null))
    );
  };
}

@Directive({
  selector: '[labelUnique]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => LabelUniqueDirective),
      multi: true
    }
  ]
})
export class LabelUniqueDirective implements AsyncValidator {
  constructor(private priceService: WeightPriceModelService) {}

  validate(control: AbstractControl): Observable<ValidationErrors> {
    // @ts-ignore
    return labelUniqueValidator(this.priceService)(control);
  }
}
