import { Directive,  Input } from '@angular/core'
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms'


export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      var numRe = new RegExp("[0-9]")
      var specialRe = new RegExp('[!@#$%^&*(),.?:{}"|<>]')
      const numPresence = numRe.test(control.value);
      const speicalpresence = specialRe.test(control.value);
      return numPresence && speicalpresence ? null : {forbiddenName: {value: control.value}};
    };
}

@Directive({
    selector: '[passwordValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: any} | null {
        return passwordValidator()(control)
    }
}