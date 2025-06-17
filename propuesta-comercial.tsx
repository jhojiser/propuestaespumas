"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  Users,
  BarChart3,
  Zap,
  Download,
  Award,
  Code,
  Laptop,
} from "lucide-react"

export default function PropuestaComercial() {
  const handleVolver = () => {
    window.location.href = "/"
  }

  const handleDemo = () => {
    window.location.href = "/demo"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-symplex-blue/5 transform rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-symplex-green/5 transform -rotate-12 rounded-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-10 w-auto" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Propuesta Comercial</h1>
                <p className="text-sm text-symplex-blue font-medium">Plataforma de Liquidación de Comisiones</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDemo}
                className="flex items-center space-x-2 border-symplex-blue text-symplex-blue hover:bg-symplex-blue hover:text-white"
              >
                <span>Probar Demo</span>
              </Button>
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white p-3 rounded-xl shadow-lg mr-4">
              <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-16 w-auto" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-symplex-blue">SYMPLEX S.A.S.</h2>
              <p className="text-symplex-green font-medium">Soluciones Tecnológicas Empresariales</p>
            </div>
          </div>

          <Badge className="mb-4 bg-symplex-blue text-white">
            <Award className="w-4 h-4 mr-2" />
            Propuesta Exclusiva para Espumas Santander S.A.S.
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plataforma de Liquidación
            <span className="block bg-gradient-to-r from-symplex-blue to-symplex-green bg-clip-text text-transparent">
              de Comisiones
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Transforme la gestión de comisiones de su empresa con una solución tecnológica moderna, eficiente y
            completamente personalizada desarrollada por <strong className="text-symplex-blue">Symplex S.A.S.</strong>
          </p>

          {/* Symplex Presentation Card */}
          <Card className="max-w-4xl mx-auto mb-8 border-2 border-symplex-blue/20 bg-gradient-to-r from-symplex-blue/5 to-symplex-green/5">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-symplex-blue mb-4">¿Quiénes Somos?</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Symplex S.A.S.</strong> es una empresa dedicada al desarrollo de soluciones tecnológicas
                    empresariales a la medida.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Code className="w-4 h-4 text-symplex-green mr-2" />
                      Desarrollo de software a medida
                    </li>
                    <li className="flex items-center">
                      <Laptop className="w-4 h-4 text-symplex-green mr-2" />
                      Aplicaciones web y móviles
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-symplex-green mr-2" />
                      Consultoría tecnológica
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                    <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-24 w-auto mx-auto mb-4" />
                    <p className="text-symplex-blue font-bold text-lg">SYMPLEX S.A.S.</p>
                    <p className="text-symplex-green">Desarrollo de Software</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Beneficios Principales */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beneficios de Nuestra Solución</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-symplex-blue shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-symplex-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-symplex-blue" />
                </div>
                <CardTitle className="text-xl">Eficiencia Operativa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reduzca el tiempo de procesamiento de liquidaciones en un 80% mediante automatización completa
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Cálculos automáticos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Eliminación de errores manuales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Reportes instantáneos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-symplex-green shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-symplex-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-symplex-green" />
                </div>
                <CardTitle className="text-xl">Control y Transparencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Mantenga control total sobre las comisiones con trazabilidad completa y auditoría integrada
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Historial de liquidaciones
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Roles y permisos configurables
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Respaldos automáticos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-symplex-dark-blue shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-symplex-dark-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-symplex-dark-blue" />
                </div>
                <CardTitle className="text-xl">Análisis Avanzado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tome decisiones informadas con reportes detallados y análisis de rendimiento
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Dashboards interactivos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Métricas de rendimiento
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Exportación a Excel/PDF
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Características Técnicas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tecnología Symplex</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-2 border-symplex-blue/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-6 h-6 text-symplex-blue mr-3" />
                  Stack Tecnológico Moderno
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Framework</span>
                  <Badge className="bg-symplex-blue text-white">Next.js 15</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Base de Datos</span>
                  <Badge className="bg-symplex-green text-white">SQL Server</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Hosting</span>
                  <Badge variant="outline" className="border-symplex-blue text-symplex-blue">
                    Servidor Local
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-symplex-green/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-symplex-green mr-3" />
                  Capacidades del Sistema
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Usuarios Concurrentes</span>
                  <Badge className="bg-symplex-green text-white">Ilimitados</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Vendedores</span>
                  <Badge className="bg-symplex-green text-white">Sin límite</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Transacciones/mes</span>
                  <Badge className="bg-symplex-green text-white">Ilimitadas</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Disponibilidad</span>
                  <Badge className="bg-symplex-blue text-white">99.5%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Propuesta Económica */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Propuesta Económica Symplex</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-xl border-4 border-symplex-blue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-symplex-blue text-white px-4 py-2">INVERSIÓN ÚNICA</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">Desarrollo Completo</CardTitle>
                <p className="text-gray-600">Back-End + Front-End por Symplex</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-symplex-blue mb-2">
                  $8,000,000
                  <span className="text-lg font-normal text-gray-600"> + IVA</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Pago único</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Desarrollo Back-End completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Desarrollo Front-End completo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Personalización total
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Capacitación incluida
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Instalación y configuración
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-4 border-symplex-green relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-symplex-green text-white px-4 py-2">SOPORTE SYMPLEX</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl">Mantenimiento Anual</CardTitle>
                <p className="text-gray-600">Soporte técnico especializado</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-symplex-green mb-2">
                  $2,000,000
                  <span className="text-lg font-normal text-gray-600"> COP</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">Pago anual</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    20 horas de soporte técnico
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    20 horas de soporte funcional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Mejoras de la plataforma
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Nuevas funcionalidades
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Actualizaciones de seguridad
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-symplex-green mr-2" />
                    Respaldo y monitoreo
                  </li>
                </ul>
                <div className="bg-symplex-blue/10 p-3 rounded-lg">
                  <p className="text-xs text-symplex-blue">
                    <strong>Garantía Symplex:</strong> Las horas no utilizadas se destinan automáticamente a mejoras y
                    nuevas funcionalidades de la plataforma
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Metodología de Pago */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Metodología de Pago Symplex</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg border-l-4 border-l-symplex-blue">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="w-6 h-6 text-symplex-blue mr-3" />
                  Pago de Desarrollo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-symplex-blue mb-4">Contra Entrega</div>
                <p className="text-gray-600">
                  El pago del desarrollo se realiza una vez entregado el sistema completo y funcionando a conformidad
                  del cliente, garantizando la calidad Symplex.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-symplex-green">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 text-symplex-green mr-3" />
                  Pago de Mantenimiento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-symplex-green mb-4">Después de Estabilización</div>
                <p className="text-gray-600">
                  El pago anual de mantenimiento se realiza 20 días después de entregado a conformidad, una vez
                  finalizada la fase de estabilización con soporte Symplex.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Requisitos del Cliente */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Requisitos de Infraestructura</h2>
          <Card className="shadow-lg max-w-4xl mx-auto border-2 border-symplex-blue/20">
            <CardHeader>
              <CardTitle className="text-xl text-center">Infraestructura Necesaria</CardTitle>
              <p className="text-gray-600 text-center">Symplex se encarga de la configuración y optimización</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-symplex-green mr-2" />
                    Requisitos Obligatorios
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-symplex-blue rounded-full mr-3"></div>
                      Servidor (Nube o Local)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-symplex-blue rounded-full mr-3"></div>
                      Servidor de Base de Datos SQL
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Plan de Implementación */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Metodología de Implementación Symplex</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="shadow-lg border-t-4 border-t-symplex-blue">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-symplex-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-symplex-blue">1</span>
                </div>
                <CardTitle className="text-lg">Análisis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Levantamiento de requerimientos</li>
                  <li>• Análisis de procesos actuales</li>
                  <li>• Definición de alcance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-symplex-green">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-symplex-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-symplex-green">2</span>
                </div>
                <CardTitle className="text-lg">Desarrollo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Desarrollo de módulos</li>
                  <li>• Integración de sistemas</li>
                  <li>• Pruebas unitarias</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-symplex-dark-blue">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-symplex-dark-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-symplex-dark-blue">3</span>
                </div>
                <CardTitle className="text-lg">Pruebas</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Pruebas de usuario</li>
                  <li>• Ajustes y correcciones</li>
                  <li>• Validación final</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-t-symplex-light-blue">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-symplex-light-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-symplex-light-blue">4</span>
                </div>
                <CardTitle className="text-lg">Despliegue</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Instalación en servidor</li>
                  <li>• Capacitación usuarios</li>
                  <li>• Puesta en producción</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tiempo de Entrega */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-symplex-blue/10 to-symplex-green/10 border-2 border-symplex-blue/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tiempo de Entrega Aprox. Symplex</h3>
                <div className="text-4xl font-bold text-symplex-blue mb-4">1 Mes</div>
                <p className="text-gray-600">Desde la firma del contrato hasta la entrega final</p>
                <p className="text-sm text-symplex-green font-medium mt-2">Garantía de cumplimiento Symplex</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-symplex-blue to-symplex-green text-white shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white p-3 rounded-xl mr-4">
                  <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-12 w-auto" />
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold">¿Listo para comenzar con Symplex?</h2>
                </div>
              </div>
              <p className="text-xl mb-8 opacity-90">
                Transforme su gestión de comisiones hoy mismo con la experiencia y calidad de Symplex S.A.S.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  onClick={handleDemo}
                  size="lg"
                  className="bg-white text-symplex-blue hover:bg-gray-100 font-bold text-lg px-8 py-4"
                >
                  <Clock className="w-6 h-6 mr-3" />
                  Probar Demo Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-symplex-green hover:bg-gray-100 font-bold text-lg px-8 py-4 border-white"
                  onClick={() => window.print()}
                >
                  <Download className="w-6 h-6 mr-3" />
                  <span>Descargar Propuesta PDF</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="bg-white p-3 rounded-lg inline-block mb-4">
                <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-12 w-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SYMPLEX S.A.S.</h3>
              <p className="text-gray-400">Soluciones Tecnológicas Empresariales</p>
              <p className="text-gray-400">NIT: 901.799.893-8</p>
            </div>

            <div className="text-center">
              <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
              <p className="text-gray-400 mb-2">📧 jjimenez@symplex.com.co</p>
              <p className="text-gray-400 mb-2">📱 +57 318 045 0109</p>
              <p className="text-gray-400">🏢 Bucaramanga, Colombia</p>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-white mb-4">Servicios</h4>
              <ul className="text-gray-400 space-y-2">
                <li>• Desarrollo de Software</li>
                <li>• Aplicaciones Web</li>
                <li>• Consultoría Tecnológica</li>
                <li>• Soporte Técnico</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">© 2024 Symplex S.A.S. - Todos los derechos reservados</p>
                <p className="text-gray-500 text-sm">Propuesta comercial confidencial para Espumas Santander S.A.S.</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-sm">Desarrollado con ❤️ por</span>
                <div className="bg-white p-1 rounded">
                  <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
