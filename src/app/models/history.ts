type introType = {
    title: string,
    paragraph: string,
    firstGen: string,
    description: string,
    latePast: string

}

export const IntroInfo: introType = 
    {
        title: 'History and Development',//title,
        paragraph: 'The history of anime can be traced back to the start of the 20th century, with the earliest verifiable films dating from 1917.',//paragraph,
        firstGen: "The first generation of animators in the late 1910s included Ōten Shimokawa, Jun'ichi Kōuchi and Seitaro Kitayama, commonly referred to as the \"fathers\" of anime. Propaganda films, such as Momotarō no Umiwashi (1943) and Momotarō: Umi no Shinpei (1945), the latter being the first anime feature film, were made during World War II. During the 1970s, anime developed further, separating itself from its Western roots, and developing distinct genres such as mecha and its super robot subgenre. Typical shows from this period include Astro Boy, Lupin III and Mazinger Z. During this period several filmmakers became famous, especially Hayao Miyazaki and Mamoru Oshii.",//firstGen,
        description: 'In the 1980s, anime became mainstream in Japan, experiencing a boom in production with the rise in popularity of anime like Gundam, Macross, Dragon Ball, and genres such as real robot, space opera and cyberpunk. Space Battleship Yamato and The Super Dimension Fortress Macross also achieved worldwide success after being adapted respectively as Star Blazers and Robotech.',//description,
        latePast: 'The film Akira set records in 1988 for the production costs of an anime film and went on to become an international success. Later, in 2004, the same creators produced Steamboy, which took over as the most expensive anime film. Spirited Away shared the first prize at the 2002 Berlin Film Festival and won the 2003 Academy Award for Best Animated Feature, while Innocence: Ghost in the Shell was featured at the 2004 Cannes Film Festival.',//latePast,
    }



export class Intro {
   information:introType;


    constructor(information:introType) {
        this.information=information
    }
}