"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Store, Calculator, LogOut, Settings } from "lucide-react"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [userType, setUserType] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    // Obtener información del usuario desde localStorage
    const storedUserType = localStorage.getItem("userType") || "DEMO"
    const storedUserName = localStorage.getItem("userName") || "DEMO"
    setUserType(storedUserType)
    setUserName(storedUserName)
  }, [])

  const handleLogout = () => {
    // Limpiar localStorage al cerrar sesión
    localStorage.removeItem("userType")
    localStorage.removeItem("userName")
    window.location.href = "/"
  }

  const isAdmin = userType === "ADMIN"

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-corporate-orange/10 transform rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-corporate-magenta/10 transform -rotate-12 rounded-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-corporate-orange/5 transform rotate-12 rounded-3xl"></div>
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
                <p className="text-sm text-gray-600">Sistema de Comisiones</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Bienvenido</p>
                <p className="text-sm font-medium text-gray-900">
                  Usuario {userName} {isAdmin && <span className="text-corporate-orange">(Administrador)</span>}
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center space-x-2">
                <LogOut className="w-4 h-4" />
                <span>Cerrar Sesión</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plataforma de Liquidación
            <span className="block bg-gradient-to-r from-corporate-orange to-corporate-magenta bg-clip-text text-transparent">
              de Comisiones
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gestiona y liquida las comisiones de tu equipo comercial y puntos de venta de manera eficiente
          </p>
        </div>

        {/* Menu Options */}
        <div className={`grid ${isAdmin ? "md:grid-cols-3" : "md:grid-cols-2"} gap-8 max-w-6xl mx-auto`}>
          {/* Comerciales Externos */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-corporate-orange to-orange-600 p-8 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Comerciales Externos</h2>
                <p className="text-center text-orange-100 mb-8">
                  Gestiona las comisiones de tu equipo de ventas externo, calcula liquidaciones y genera reportes
                  detallados
                </p>
                <Button
                  className="w-full bg-white text-corporate-orange hover:bg-gray-50 font-semibold py-3 text-lg"
                  size="lg"
                  onClick={() => (window.location.href = "/comerciales-externos")}
                >
                  Acceder al Módulo
                </Button>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-corporate-orange rounded-full mr-3"></div>
                    Cálculo automático de comisiones
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-corporate-orange rounded-full mr-3"></div>
                    Reportes de rendimiento
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-corporate-orange rounded-full mr-3"></div>
                    Historial de liquidaciones
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Puntos de Venta */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-corporate-magenta to-pink-600 p-8 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-4">Puntos de Venta</h2>
                <p className="text-center text-pink-100 mb-8">
                  Administra las comisiones de tus puntos de venta, realiza liquidaciones y analiza el desempeño por
                  vendedor
                </p>
                <Button
                  className="w-full bg-white text-corporate-magenta hover:bg-gray-50 font-semibold py-3 text-lg"
                  size="lg"
                  onClick={() => (window.location.href = "/puntos-venta")}
                >
                  Acceder al Módulo
                </Button>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-corporate-magenta rounded-full mr-3"></div>
                    Liquidación de comisiones
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-corporate-magenta rounded-full mr-3"></div>
                    Desempeño por vendedor
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-corporate-magenta rounded-full mr-3"></div>
                    Análisis de ventas
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Parametrizaciones - Solo visible para Admin */}
          {isAdmin && (
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 text-white">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-4">Parametrizaciones</h2>
                  <p className="text-center text-gray-200 mb-8">
                    Configura parámetros del sistema, porcentajes de comisión, usuarios y configuraciones generales
                  </p>
                  <Button
                    className="w-full bg-white text-gray-800 hover:bg-gray-50 font-semibold py-3 text-lg"
                    size="lg"
                    onClick={() => (window.location.href = "/parametrizaciones")}
                  >
                    Acceder al Módulo
                  </Button>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                      Configuración de comisiones
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                      Gestión de usuarios
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
                      Parámetros del sistema
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Necesitas ayuda?</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta sobre el sistema de
              comisiones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-corporate-orange text-corporate-orange hover:bg-corporate-orange hover:text-white"
              >
                Manual de Usuario
              </Button>
              <Button
                variant="outline"
                className="border-corporate-magenta text-corporate-magenta hover:bg-corporate-magenta hover:text-white"
              >
                Contactar Soporte
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 Espumas Santander S.A.S. - Plataforma de Liquidación de Comisiones</p>
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
