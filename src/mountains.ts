interface Mountains {
    name: string;
    height: number;
}

const mountains: Mountains[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
]

export function findNameOfTallestMountain(mountain: Mountains[]) {
    let tallest = mountains.reduce((a,b) => a.height > b.height ? a:b);
    return (tallest.name);
}

// export function findNameOfTallestMountain(mountain: Mountains[]) {
//     if (mountain.length === 0) {
//         return ""
//     } else {
//         const tallest: Mountains = mountain.reduce((prevMountain, currentValue) => {
//         if (prevMountain.height < currentValue.height) {
//             return currentValue
//         } else {
//             return prevMountain
//         }
//     })
//     return tallest.name;
// }
