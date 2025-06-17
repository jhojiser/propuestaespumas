"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Plus, Edit, Trash2, Users, FileText, CreditCard, Settings } from "lucide-react"
import { useState } from "react"

export default function Parametrizaciones() {
  // Datos de vendedores
  const [vendedores, setVendedores] = useState([
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      tipo: "Externo",
      zona: "Zona Costa",
      puntoVenta: "-",
      comision: 1.0,
      activo: true,
    },
    {
      id: 2,
      nombre: "María González",
      tipo: "Externo",
      zona: "Zona Sur",
      puntoVenta: "-",
      comision: 1.2,
      activo: true,
    },
    {
      id: 3,
      nombre: "Andrea Morales",
      tipo: "Punto de Venta",
      zona: "-",
      puntoVenta: "Bogotá",
      comision: 0.8,
      activo: true,
    },
    {
      id: 4,
      nombre: "Diego Ramírez",
      tipo: "Punto de Venta",
      zona: "-",
      puntoVenta: "Medellín",
      comision: 0.9,
      activo: true,
    },
  ])

  // Datos de tipos de documentos
  const [tiposDocumento, setTiposDocumento] = useState([
    {
      id: 1,
      codigo: "FV",
      nombre: "Factura de Venta",
      descripcion: "Documento de facturación de ventas",
      cuentaContable: "41050001",
      nombreCuenta: "Ingresos por Ventas",
      activo: true,
    },
    {
      id: 2,
      codigo: "RC",
      nombre: "Recibo de Caja",
      descripcion: "Documento de recaudo de dinero",
      cuentaContable: "11050001",
      nombreCuenta: "Caja General",
      activo: true,
    },
    {
      id: 3,
      codigo: "NC",
      nombre: "Nota Crédito",
      descripcion: "Documento de devoluciones y descuentos",
      cuentaContable: "42950001",
      nombreCuenta: "Devoluciones en Ventas",
      activo: true,
    },
  ])

  const [activeTab, setActiveTab] = useState("vendedores")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const handleVolver = () => {
    window.location.href = "/dashboard"
  }

  const handleEditVendedor = (vendedor) => {
    setEditingItem(vendedor)
    setIsDialogOpen(true)
  }

  const handleEditTipoDoc = (tipoDoc) => {
    setEditingItem(tipoDoc)
    setIsDialogOpen(true)
  }

  const getStatusBadge = (activo) => {
    return activo ? (
      <Badge className="bg-green-500 text-white">Activo</Badge>
    ) : (
      <Badge className="bg-red-500 text-white">Inactivo</Badge>
    )
  }

  const getTipoBadge = (tipo) => {
    return tipo === "Externo" ? (
      <Badge className="bg-corporate-orange text-white">Externo</Badge>
    ) : (
      <Badge className="bg-corporate-magenta text-white">Punto de Venta</Badge>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-500/5 transform rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gray-600/5 transform -rotate-12 rounded-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Espumas Santander S.A.S.</h1>
                <p className="text-sm text-gray-600">Parametrizaciones del Sistema</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Usuario ADMIN</p>
                <p className="text-sm font-medium text-gray-900">Parametrizaciones</p>
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
            <span className="text-gray-700">Parametrizaciones</span>
            <span className="text-gray-500"> del Sistema</span>
          </h1>
          <p className="text-gray-600">Configura vendedores, tipos de documentos y cuentas contables</p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="vendedores" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Vendedores</span>
            </TabsTrigger>
            <TabsTrigger value="documentos" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Tipos de Documentos</span>
            </TabsTrigger>
            <TabsTrigger value="cuentas" className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>Cuentas Contables</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab: Vendedores */}
          <TabsContent value="vendedores">
            <Card className="shadow-lg border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-gray-900">Gestión de Vendedores</CardTitle>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-corporate-orange hover:bg-corporate-orange/90 flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Nuevo Vendedor</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>{editingItem ? "Editar Vendedor" : "Nuevo Vendedor"}</DialogTitle>
                      <DialogDescription>Configure los parámetros del vendedor</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="nombre" className="text-right">
                          Nombre
                        </Label>
                        <Input id="nombre" className="col-span-3" placeholder="Nombre del vendedor" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="tipo" className="text-right">
                          Tipo
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Seleccionar tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="externo">Externo</SelectItem>
                            <SelectItem value="punto-venta">Punto de Venta</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="zona" className="text-right">
                          Zona
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Seleccionar zona" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="costa">Zona Costa</SelectItem>
                            <SelectItem value="sur">Zona Sur</SelectItem>
                            <SelectItem value="occidente">Zona Occidente</SelectItem>
                            <SelectItem value="centro">Zona Centro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="punto-venta" className="text-right">
                          Punto de Venta
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Seleccionar ciudad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bogota">Bogotá</SelectItem>
                            <SelectItem value="medellin">Medellín</SelectItem>
                            <SelectItem value="cali">Cali</SelectItem>
                            <SelectItem value="barranquilla">Barranquilla</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="comision" className="text-right">
                          Comisión (%)
                        </Label>
                        <Input id="comision" type="number" step="0.1" className="col-span-3" placeholder="1.0" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-corporate-orange hover:bg-corporate-orange/90">
                        {editingItem ? "Actualizar" : "Guardar"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-900">Nombre</TableHead>
                        <TableHead className="font-semibold text-gray-900">Tipo</TableHead>
                        <TableHead className="font-semibold text-gray-900">Zona</TableHead>
                        <TableHead className="font-semibold text-gray-900">Punto de Venta</TableHead>
                        <TableHead className="font-semibold text-gray-900 text-right">Comisión (%)</TableHead>
                        <TableHead className="font-semibold text-gray-900">Estado</TableHead>
                        <TableHead className="font-semibold text-gray-900 text-center">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {vendedores.map((vendedor) => (
                        <TableRow key={vendedor.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{vendedor.nombre}</TableCell>
                          <TableCell>{getTipoBadge(vendedor.tipo)}</TableCell>
                          <TableCell>{vendedor.zona}</TableCell>
                          <TableCell>{vendedor.puntoVenta}</TableCell>
                          <TableCell className="text-right font-medium">{vendedor.comision}%</TableCell>
                          <TableCell>{getStatusBadge(vendedor.activo)}</TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditVendedor(vendedor)}
                                className="text-xs px-2 py-1"
                              >
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs px-2 py-1 text-red-600 border-red-200 hover:bg-red-50"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Tipos de Documentos */}
          <TabsContent value="documentos">
            <Card className="shadow-lg border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-gray-900">Tipos de Documentos</CardTitle>
                <Button className="bg-corporate-magenta hover:bg-corporate-magenta/90 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Nuevo Tipo</span>
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold text-gray-900">Código</TableHead>
                        <TableHead className="font-semibold text-gray-900">Nombre</TableHead>
                        <TableHead className="font-semibold text-gray-900">Descripción</TableHead>
                        <TableHead className="font-semibold text-gray-900">Cuenta Contable</TableHead>
                        <TableHead className="font-semibold text-gray-900">Estado</TableHead>
                        <TableHead className="font-semibold text-gray-900 text-center">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tiposDocumento.map((tipo) => (
                        <TableRow key={tipo.id} className="hover:bg-gray-50">
                          <TableCell className="font-mono font-medium">{tipo.codigo}</TableCell>
                          <TableCell className="font-medium">{tipo.nombre}</TableCell>
                          <TableCell>{tipo.descripcion}</TableCell>
                          <TableCell className="font-mono text-sm">
                            {tipo.cuentaContable} - {tipo.nombreCuenta}
                          </TableCell>
                          <TableCell>{getStatusBadge(tipo.activo)}</TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditTipoDoc(tipo)}
                                className="text-xs px-2 py-1"
                              >
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-xs px-2 py-1 text-red-600 border-red-200 hover:bg-red-50"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab: Cuentas Contables */}
          <TabsContent value="cuentas">
            <Card className="shadow-lg border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-gray-900">Cuentas Contables</CardTitle>
                <Button className="bg-gray-700 hover:bg-gray-800 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Nueva Cuenta</span>
                </Button>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center text-gray-500 py-12">
                  <CreditCard className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-medium mb-2">Plan de Cuentas</h3>
                  <p>Aquí se mostraría el plan de cuentas contables del sistema</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-6 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2024 Espumas Santander S.A.S. - Parametrizaciones del Sistema</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Desarrollado por</span>
              <div className="bg-white p-1 rounded">
                <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
