export interface selectobj {
    key: string | number | boolean,
    value: string | number | boolean,
}

export const petSpecies: selectobj[] = [
    { key: 0, value: "Pies" },
    { key: 1, value: "Kot" },
    { key: 2, value: "Papuga" },
    { key: 3, value: "Królik" }
]

export const petSexes: selectobj[] = [
    { key: 0, value: "Samiec" },
    { key: 1, value: "Samica" },
]

export const petSterilization: selectobj[] = [
    { key: true, value: "Tak" },
    { key: false, value: "Nie" },
]
