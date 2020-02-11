import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[], searchText: string): any[] {

    console.log(items)
    if (searchText == "" || searchText.trim()=="") return items;
    if(!searchText) return null;

    searchText = searchText.toLowerCase();
    console.log(searchText);
    return items.filter(item => {
      return item.title.toLowerCase().includes(searchText)|| item.content.toLowerCase().includes(searchText);
    });
  }

}
