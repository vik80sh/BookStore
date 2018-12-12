import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(title : String , number : number) {
    if(number==3)
      return title.substr(0,number)
    else if(title.length > number)
        return title.substr(0,number)+ '..' ;
    else
        return title;
  }

}
