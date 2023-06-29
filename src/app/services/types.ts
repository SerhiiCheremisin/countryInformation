export interface ISingleCounrtyInfo {
        name: {
         common: string,
         official: string,
         nativeName: {}
        },
        tld: [],
        cca2: string,
        ccn3: string,
        cca3: string,
        cioc: string,
        independent: boolean,
        status: string,
        unMember: boolean,
        currencies: {},
        idd: {},
        capital: string [],
        altSpellings: [],
        region: string,
        subregion: string,
        languages: {},
        translations: {},
        latlng: [],
        landlocked: boolean,
        borders: [],
        area: number,
        demonyms: {},
        flag: string
        maps: {
        googleMaps: string,
        openStreetMaps: string
        },
        population: number,
        gini: {},
        fifa: string,
        car: {},
        timezones: [],
        continents: [],
        flags: {},
        coatOfArms: {},
        startOfWeek: string,
        capitalInfo: {
        latlng: []
        },
        postalCode: {}
}