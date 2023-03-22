import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'Search' })
export class Search implements PipeTransform {
    transform(items: any[], searchText: string): any[] {        
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        const result = items.filter(it => {
            // console.log(it);
            
            return it.title.toLowerCase().includes(searchText);
        });         

        return result
    }
}
