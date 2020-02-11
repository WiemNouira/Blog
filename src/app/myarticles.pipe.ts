import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myarticles'
})
export class MyarticlesPipe implements PipeTransform {

 
  transform(items:any[], owner: string): any[] {

    console.log(items)
    if (owner == "" || owner.trim()=="") return null;
    if(!owner) return null;
    owner = owner.toLowerCase();
    return items.filter(item => {
      return item.owner.toLowerCase().includes(owner);
    });
  }


}
