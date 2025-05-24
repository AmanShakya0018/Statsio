/* eslint-disable @typescript-eslint/no-explicit-any */
export function exportToCSV(data: Record<string, any>[], filename: string) {
  if (data.length === 0) return

  const headers = Object.keys(data[0]).join(",")
  const rows = data.map(row => Object.values(row).join(","))
  const csvContent = [headers, ...rows].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.setAttribute("download", `${filename}.csv`)
  link.click()

  URL.revokeObjectURL(url)
}
