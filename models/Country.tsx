export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface Country {
    capital: string;
    currencies: Currency[];
    flag: string;
    languages: Language[];
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];

}
