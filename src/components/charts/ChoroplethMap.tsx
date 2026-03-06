import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps"

interface Props {
  data: Record<string, number>
}

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

function getColor(value: number) {
  if (value > 80) return "#1e3a8a"
  if (value > 60) return "#4338ca"
  if (value > 40) return "#6366f1"
  if (value > 20) return "#a5b4fc"
  return "#e0e7ff"
}

export function ChoroplethMapComponent({ data }: Props) {

  return (
    <div className="w-full h-full">

      <ComposableMap
        projection="geoMercator"
        width={800}
        height={400}
      >

        <Geographies geography={geoUrl}>

          {({ geographies }: any) =>
            geographies.map((geo: any) => {

              const value =
                data[geo.properties.ISO_A3] || 0

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getColor(value)}
                  stroke="#fff"
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: "#f59e0b",
                      outline: "none"
                    },
                    pressed: { outline: "none" }
                  }}
                />
              )
            })
          }

        </Geographies>

      </ComposableMap>

    </div>
  )
}