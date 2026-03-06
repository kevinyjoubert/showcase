type Point = {
    name: string
    coordinates: [number, number]
    value: number
}

export const geoScatterData: Point[] = [
    {
        name: "São Paulo",
        coordinates: [-46.6333, -23.5505],
        value: 120
    },
    {
        name: "New York",
        coordinates: [-74.006, 40.7128],
        value: 200
    },
    {
        name: "Paris",
        coordinates: [2.3522, 48.8566],
        value: 80
    },
    {
        name: "Tokyo",
        coordinates: [139.6917, 35.6895],
        value: 150
    }
]