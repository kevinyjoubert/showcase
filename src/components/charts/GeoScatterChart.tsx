import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps"
import { useState } from "react"

interface Point {
    name: string
    coordinates: [number, number]
    value: number
}

interface Props {
    data: Point[]
}

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export function GeoScatterChartComponent({ data }: Props) {

    const [hover, setHover] = useState<Point | null>(null)

    function getRadius(value: number) {
        return Math.max(4, value / 25)
    }

    return (
        <div className="relative w-full h-full">

            <ComposableMap
                projection="geoMercator"
                width={800}
                height={400}
            >

                <Geographies geography={geoUrl}>
                    {({ geographies }: any) =>
                        geographies.map((geo: any) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#f1f5f9"
                                stroke="#cbd5f5"
                            />
                        ))
                    }
                </Geographies>

                {data.map((point, index) => (
                    <Marker
                        key={index}
                        coordinates={point.coordinates}
                    >

                        <circle
                            r={getRadius(point.value)}
                            fill="#6366f1"
                            stroke="#fff"
                            strokeWidth={2}
                            className="transition-all cursor-pointer hover:opacity-80"
                            onMouseEnter={() => setHover(point)}
                            onMouseLeave={() => setHover(null)}
                        />

                    </Marker>
                ))}

            </ComposableMap>

            {/* tooltip */}

            {hover && (
                <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg p-3 border text-sm">

                    <div className="font-semibold">
                        {hover.name}
                    </div>

                    <div className="text-gray-500">
                        Value: {hover.value}
                    </div>

                </div>
            )}

            {/* legenda */}

            <div className="absolute top-4 right-4 bg-white shadow rounded p-3 text-xs">

                <div className="font-semibold mb-2">
                    Event Intensity
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    Low
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                    Medium
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-indigo-500 rounded-full"></div>
                    High
                </div>

            </div>

        </div>
    )
}