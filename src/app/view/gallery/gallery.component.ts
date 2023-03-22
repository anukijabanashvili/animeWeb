import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    gallery2: any[] = []
    searchText = '';
    title = 'my favourite Animes as a suggession. search if it matches';
    constructor() { }

    async searchByName(body: string) {
        const result = await fetch(`https://api.jikan.moe/v4/anime?q=${body || ''}`)
        const { data } = await result.json()
        const transformedResult = data.map((item: any) => ({
            title: item.title_english || item.title || null,
            titleJap: item?.title_japanese,
            producers: item.producers.map((item: any) => item.name),
            ganres: item.genres[0]?.name || '404 title',
            synopsis: item.synopsis?.slice(0, 300) + '...',
            status: item.status,
            images: item.images.jpg.image_url,
            trailer: item.trailer?.url || '404 title',
        }))

        this.gallery2 = transformedResult
        this.searchText = body || ''
    }



    ngOnInit(): void {
        this.searchByName('')
    }

}
