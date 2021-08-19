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

// export const petSpecies = new Map()
//     .set(0, "Pies")
//     .set(1, "Kot")
//     .set(2, "Papuga")
//     .set(3, "Królik")

// export const petSexes = new Map()
//     .set(0, "Samiec")
//     .set(1, "Samica")

// export const petSterilization = new Map()
//     .set(true, "Tak")
//     .set(false, "Nie")
