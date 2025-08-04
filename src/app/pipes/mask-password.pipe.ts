import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPassword'
})
export class MaskPasswordPipe implements PipeTransform {

  transform(pass:string): unknown {
    const size = pass.length;
    let maskedPassword = ''

    for(let i=0; i < size; i++){
      maskedPassword = maskedPassword + '*'
    }
    return maskedPassword;
  }

}
