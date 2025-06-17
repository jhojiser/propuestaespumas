"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calculator, ArrowLeft, Download, Filter, Search, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"

// Datos de ejemplo para vendedores externos
const vendedoresExternos = [
  {
    id: 1,
    nombre: "Carlos Rodríguez",
    zona: "Zona Costa",
    numeroRecaudo: "RC001234",
    consecutivoFactura: "FV789012",
    montoRecaudo: 2500000,
    valorProntoPago: 125000,
  },
  {
    id: 2,
    nombre: "María González",
    zona: "Zona Sur",
    numeroRecaudo: "RC001235",
    consecutivoFactura: "FV789013",
    montoRecaudo: 1800000,
    valorProntoPago: 90000,
  },
  {
    id: 3,
    nombre: "José Martínez",
    zona: "Zona Occidente",
    numeroRecaudo: "RC001236",
    consecutivoFactura: "FV789014",
    montoRecaudo: 3200000,
    valorProntoPago: 160000,
  },
  {
    id: 4,
    nombre: "Ana López",
    zona: "Zona Centro",
    numeroRecaudo: "RC001237",
    consecutivoFactura: "FV789015",
    montoRecaudo: 2800000,
    valorProntoPago: 140000,
  },
  {
    id: 5,
    nombre: "Luis Hernández",
    zona: "Zona Costa",
    numeroRecaudo: "RC001238",
    consecutivoFactura: "FV789016",
    montoRecaudo: 1500000,
    valorProntoPago: 75000,
  },
  {
    id: 6,
    nombre: "Carmen Silva",
    zona: "Zona Sur",
    numeroRecaudo: "RC001239",
    consecutivoFactura: "FV789017",
    montoRecaudo: 4100000,
    valorProntoPago: 205000,
  },
]

// Función para formatear números como moneda
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(amount)
}

// Función para calcular valor sin IVA
const calcularValorSinIVA = (montoRecaudo: number, valorProntoPago: number) => {
  return (montoRecaudo + valorProntoPago) / 1.19
}

// Función para calcular comisión (1% del valor sin IVA)
const calcularComision = (valorSinIVA: number) => {
  return valorSinIVA * 0.01
}

// Función para obtener color del badge según tipo de vendedor
const getZonaColor = (zona: string) => {
  switch (zona) {
    case "Zona Costa":
      return "bg-blue-500 text-white"
    case "Zona Sur":
      return "bg-corporate-orange text-white"
    case "Zona Occidente":
      return "bg-corporate-magenta text-white"
    case "Zona Centro":
      return "bg-green-500 text-white"
    default:
      return "bg-gray-500 text-white"
  }
}

export default function ComercialesExternos() {
  const handleVolver = () => {
    window.location.href = "/dashboard"
  }

  const handleExportarDetalle = (vendedor: any) => {
    // Aquí iría la lógica para exportar el detalle de liquidación
    alert(`Exportando detalle de liquidación para ${vendedor.nombre}`)
  }

  // Calcular totales
  const totales = vendedoresExternos.reduce(
    (acc, vendedor) => {
      const valorSinIVA = calcularValorSinIVA(vendedor.montoRecaudo, vendedor.valorProntoPago)
      const comision = calcularComision(valorSinIVA)

      return {
        montoRecaudo: acc.montoRecaudo + vendedor.montoRecaudo,
        valorProntoPago: acc.valorProntoPago + vendedor.valorProntoPago,
        valorSinIVA: acc.valorSinIVA + valorSinIVA,
        comision: acc.comision + comision,
      }
    },
    { montoRecaudo: 0, valorProntoPago: 0, valorSinIVA: 0, comision: 0 },
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-corporate-orange/5 transform rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-corporate-magenta/5 transform -rotate-12 rounded-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-corporate-orange to-corporate-magenta rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Espumas Santander S.A.S.</h1>
                <p className="text-sm text-gray-600">Liquidación de Comerciales Externos</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Usuario DEMO</p>
                <p className="text-sm font-medium text-gray-900">Comerciales Externos</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleVolver} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Liquidación de
            <span className="text-corporate-orange"> Comerciales Externos</span>
          </h1>
          <p className="text-gray-600">Gestiona y calcula las comisiones de tu equipo de ventas externo</p>
        </div>

        {/* Filters and Actions */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Buscar vendedor..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
            </Button>
          </div>
          <Button className="bg-corporate-orange hover:bg-corporate-orange/90 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </Button>
        </div>

        {/* Tabla de Vendedores */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Listado de Vendedores Externos</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-900">Vendedor</TableHead>
                    <TableHead className="font-semibold text-gray-900">Zona</TableHead>
                    <TableHead className="font-semibold text-gray-900 text-right">Monto Recaudo</TableHead>
                    <TableHead className="font-semibold text-gray-900 text-right">Pronto Pago</TableHead>
                    <TableHead className="font-semibold text-gray-900 text-right">Valor Sin IVA</TableHead>
                    <TableHead className="font-semibold text-gray-900 text-right">Comisión</TableHead>
                    <TableHead className="font-semibold text-gray-900 text-center">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendedoresExternos.map((vendedor) => {
                    const valorSinIVA = calcularValorSinIVA(vendedor.montoRecaudo, vendedor.valorProntoPago)
                    const comision = calcularComision(valorSinIVA)

                    return (
                      <TableRow key={vendedor.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">{vendedor.nombre}</TableCell>
                        <TableCell>
                          <Badge className={getZonaColor(vendedor.zona)}>{vendedor.zona}</Badge>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {formatCurrency(vendedor.montoRecaudo)}
                        </TableCell>
                        <TableCell className="text-right">{formatCurrency(vendedor.valorProntoPago)}</TableCell>
                        <TableCell className="text-right font-medium text-blue-600">
                          {formatCurrency(valorSinIVA)}
                        </TableCell>
                        <TableCell className="text-right font-bold text-corporate-orange">
                          {formatCurrency(comision)}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleExportarDetalle(vendedor)}
                            className="text-xs px-3 py-1 border-corporate-magenta text-corporate-magenta hover:bg-corporate-magenta hover:text-white flex items-center space-x-1 mx-auto"
                          >
                            <FileText className="w-3 h-3" />
                            <span>Exportar Detalle</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                  {/* Fila de Totales */}
                  <TableRow className="bg-gray-100 font-bold border-t-2">
                    <TableCell colSpan={2} className="text-right font-bold text-gray-900">
                      TOTALES:
                    </TableCell>
                    <TableCell className="text-right font-bold text-gray-900">
                      {formatCurrency(totales.montoRecaudo)}
                    </TableCell>
                    <TableCell className="text-right font-bold text-gray-900">
                      {formatCurrency(totales.valorProntoPago)}
                    </TableCell>
                    <TableCell className="text-right font-bold text-blue-600">
                      {formatCurrency(totales.valorSinIVA)}
                    </TableCell>
                    <TableCell className="text-right font-bold text-corporate-orange text-lg">
                      {formatCurrency(totales.comision)}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-gray-400 text-xs">-</span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Resumen de Liquidación */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-corporate-orange">
            <CardContent className="p-6">
              <div className="text-sm text-gray-600 mb-1">Total Recaudado</div>
              <div className="text-2xl font-bold text-gray-900">{formatCurrency(totales.montoRecaudo)}</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="text-sm text-gray-600 mb-1">Valor Sin IVA</div>
              <div className="text-2xl font-bold text-blue-600">{formatCurrency(totales.valorSinIVA)}</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-corporate-magenta">
            <CardContent className="p-6">
              <div className="text-sm text-gray-600 mb-1">Total Comisiones</div>
              <div className="text-2xl font-bold text-corporate-magenta">{formatCurrency(totales.comision)}</div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="text-sm text-gray-600 mb-1">Vendedores</div>
              <div className="text-2xl font-bold text-green-600">{vendedoresExternos.length}</div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2024 Espumas Santander S.A.S. - Liquidación de Comisiones</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Desarrollado por</span>
              <div className="bg-white p-1 rounded">
                <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-6 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
