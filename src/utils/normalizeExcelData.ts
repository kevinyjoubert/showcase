export function normalizeExcelData(rows: any[]) {

  if (!rows.length) return rows

  const columns = Object.keys(rows[0])

  type ColumnType = "number" | "date" | "text"

  const columnTypes: Record<string, ColumnType> = {}

  function excelDateToJSDate(serial: number) {
    const excelEpoch = new Date(1899, 11, 30)
    return new Date(excelEpoch.getTime() + serial * 86400000)
  }

  function columnLooksLikeDateName(name: string) {
    const lower = name.toLowerCase()

    return (
      lower.includes("data") ||
      lower.includes("date") ||
      lower.includes("dia") ||
      lower.includes("day")
    )
  }

  /* ANALISA CADA COLUNA */

  for (const col of columns) {

    const values = rows
      .map(r => r[col])
      .filter(v => v !== null && v !== undefined && v !== "")

    let numberCount = 0
    let excelDateCount = 0
    let stringDateCount = 0

    for (const v of values) {

      const str = String(v).trim()

      const normalized = str
        .replace(/\./g, "")
        .replace(",", ".")

      const num = Number(normalized)

      if (!isNaN(num)) {

        numberCount++

        if (num > 30000 && num < 60000) {
          excelDateCount++
        }
      }

      const parsedDate = Date.parse(str)

      if (!isNaN(parsedDate)) {
        stringDateCount++
      }
    }

    const total = values.length

    const looksLikeDateHeader = columnLooksLikeDateName(col)

    /* DETECTA DATA */

    if (
      looksLikeDateHeader &&
      (
        excelDateCount / total > 0.5 ||
        stringDateCount / total > 0.5
      )
    ) {
      columnTypes[col] = "date"
      continue
    }

    /* DETECTA NÚMERO */

    if (numberCount / total > 0.7) {
      columnTypes[col] = "number"
      continue
    }

    columnTypes[col] = "text"
  }

  /* CONVERSÃO FINAL */

  return rows.map(row => {

    const newRow: any = {}

    for (const key in row) {

      const value = row[key]

      if (value === null || value === undefined || value === "") {
        newRow[key] = null
        continue
      }

      const str = String(value).trim()

      /* NUMBER */

      if (columnTypes[key] === "number") {

        const normalized = str
          .replace(/\./g, "")
          .replace(",", ".")

        const num = Number(normalized)

        newRow[key] = !isNaN(num) ? num : str
        continue
      }

      /* DATE */

      if (columnTypes[key] === "date") {

        const num = Number(str)

        if (!isNaN(num) && num > 30000 && num < 60000) {
          newRow[key] = excelDateToJSDate(num)
          continue
        }

        const parsedDate = Date.parse(str)

        if (!isNaN(parsedDate)) {
          newRow[key] = new Date(parsedDate)
          continue
        }

        newRow[key] = str
        continue
      }

      /* TEXT */

      newRow[key] = str
    }

    return newRow
  })
}