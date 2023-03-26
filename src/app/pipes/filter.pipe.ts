import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterValue?: string): any[] {
    if (
      filterValue !== undefined &&
      filterValue !== null &&
      filterValue != ''
    ) {
      return value.filter((x) => {
        return (
          (x.title)
            ?.toLocaleLowerCase()
            .indexOf(filterValue.toLocaleLowerCase()) > -1
        );
      });
    } else {
      return value;
    }
  }

}
