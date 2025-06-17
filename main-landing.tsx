"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Play, FileText, ArrowRight, Sparkles, Target, Code, Shield } from "lucide-react"

export default function MainLanding() {
  const handleDemo = () => {
    window.location.href = "/demo"
  }

  const handlePropuesta = () => {
    window.location.href = "/propuesta-comercial"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 transform rotate-45 rounded-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-green-600/20 transform -rotate-12 rounded-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500/10 transform rotate-12 rounded-3xl animate-pulse delay-2000"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-500/15 transform rotate-45 rounded-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo Symplex */}
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-8 w-auto" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Desarrollado por</p>
                <p className="text-blue-400 text-xs">SYMPLEX S.A.S.</p>
              </div>
            </div>

            {/* Título Central */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Calculator className="w-7 h-7 text-white" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Espumas Santander S.A.S.</h1>
                <p className="text-gray-300 text-sm">Plataforma de Liquidación de Comisiones</p>
              </div>
            </div>

            {/* Espacio para balance */}
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-500 mr-3 animate-pulse" />
            <span className="text-blue-400 font-semibold text-lg">Presentación Ejecutiva</span>
            <Sparkles className="w-8 h-8 text-green-500 ml-3 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Revoluciona tu
            <span className="block bg-gradient-to-r from-blue-500 via-blue-400 to-green-500 bg-clip-text text-transparent animate-pulse">
              Gestión de Comisiones
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Descubre cómo nuestra plataforma puede transformar completamente la manera en que gestionas las comisiones
            de tu equipo comercial y puntos de venta
          </p>

          {/* Symplex Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-12">
            <Code className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-white font-medium">Tecnología desarrollada por </span>
            <span className="text-blue-400 font-bold ml-1">Symplex S.A.S.</span>
            <Shield className="w-5 h-5 text-green-400 ml-3" />
          </div>

          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Main Options */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* DEMO Option */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-2xl overflow-hidden transform hover:scale-105 bg-gradient-to-br from-blue-600/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Play className="w-10 h-10" />
                  </div>

                  <h2 className="text-4xl font-bold text-center mb-6">DEMO</h2>
                  <p className="text-center text-blue-100 mb-8 text-lg leading-relaxed">
                    Experimenta en tiempo real todas las funcionalidades de la plataforma. Navega por el sistema
                    completo y descubre su potencial.
                  </p>

                  <Button
                    onClick={handleDemo}
                    className="w-full bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 text-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Play className="w-6 h-6 mr-3" />
                    Probar Demo Interactivo
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </div>
              </div>

              <div className="p-8 bg-white/95 backdrop-blur-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Incluye:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Sistema completo funcional
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Datos de ejemplo reales
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Todas las funcionalidades activas
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    Experiencia de usuario completa
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Propuesta Comercial Option */}
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-2xl overflow-hidden transform hover:scale-105 bg-gradient-to-br from-green-600/10 to-green-600/5 backdrop-blur-sm border border-green-500/20">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Target className="w-10 h-10" />
                  </div>

                  <h2 className="text-4xl font-bold text-center mb-6">PROPUESTA</h2>
                  <p className="text-center text-green-100 mb-8 text-lg leading-relaxed">
                    Conoce los beneficios, características técnicas, costos y el plan de implementación personalizado
                    para tu empresa.
                  </p>

                  <Button
                    onClick={handlePropuesta}
                    className="w-full bg-white text-green-600 hover:bg-gray-50 font-bold py-4 text-xl shadow-xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <FileText className="w-6 h-6 mr-3" />
                    Ver Propuesta Comercial
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Button>
                </div>
              </div>

              <div className="p-8 bg-white/95 backdrop-blur-sm">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Incluye:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                    Análisis de beneficios
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                    Especificaciones técnicas
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                    Propuesta económica
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                    Plan de implementación
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">¿Listo para transformar tu negocio?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Comienza explorando nuestra demo o conoce todos los detalles en nuestra propuesta comercial
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5 min</div>
                <div className="text-gray-400">Demo completa</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400">Personalizable</div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Soporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-400">© 2024 Espumas Santander S.A.S. - Plataforma de Liquidación de Comisiones</p>
              <p className="text-gray-500 text-sm mt-1">Presentación Ejecutiva - Confidencial</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm">Desarrollado por</span>
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
