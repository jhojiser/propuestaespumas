"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Eye, EyeOff, Lock, User, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simular delay de autenticación
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const upperUsername = username.toUpperCase()

    if ((upperUsername === "DEMO" || upperUsername === "ADMIN") && password === "1234") {
      // Guardar el tipo de usuario en localStorage para persistir la sesión
      localStorage.setItem("userType", upperUsername)
      localStorage.setItem("userName", upperUsername)

      // Login exitoso - redirigir al dashboard
      window.location.href = "/dashboard"
    } else {
      setError("Usuario o contraseña incorrectos")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-corporate-orange/10 transform rotate-45 rounded-3xl"></div>
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-corporate-magenta/10 transform -rotate-12 rounded-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-corporate-orange/5 transform rotate-12 rounded-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-corporate-magenta/5 transform rotate-45 rounded-3xl"></div>
      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-corporate-orange to-corporate-magenta rounded-2xl flex items-center justify-center shadow-lg">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Espumas Santander S.A.S.</h1>
          <p className="text-gray-600">Plataforma de Liquidación de Comisiones</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">Iniciar Sesión</CardTitle>
            <CardDescription className="text-gray-600">
              Ingresa tus credenciales para acceder al sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              {/* Usuario */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Usuario
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Ingresa tu usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-12 border-gray-200 focus:border-corporate-orange focus:ring-corporate-orange"
                    required
                  />
                </div>
              </div>

              {/* Contraseña */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-corporate-orange focus:ring-corporate-orange"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Recordar sesión y Olvidé contraseña */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-gray-600">
                    Recordar sesión
                  </Label>
                </div>
                <a href="#" className="text-sm text-corporate-magenta hover:text-corporate-magenta/80 font-medium">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              {/* Botón de Login */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-corporate-orange to-corporate-magenta hover:from-corporate-orange/90 hover:to-corporate-magenta/90 text-white font-semibold text-lg shadow-lg disabled:opacity-50"
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>

            {/* Demo Credentials Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Credenciales de Demostración:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>
                  <strong>Usuario Demo:</strong> DEMO / Contraseña: 1234
                </p>
                <p>
                  <strong>Usuario Admin:</strong> ADMIN / Contraseña: 1234
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">O</span>
              </div>
            </div>

            {/* Botón de Ayuda */}
            <Button variant="outline" className="w-full h-12 border-gray-200 text-gray-700 hover:bg-gray-50">
              Contactar Soporte Técnico
            </Button>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-gray-500 text-sm">Desarrollado por</span>
            <div className="bg-white p-1 rounded shadow-sm">
              <img src="/symplex-logo.png" alt="Symplex S.A.S." className="h-6 w-auto" />
            </div>
          </div>
          <p className="text-xs text-gray-500">© 2024 Espumas Santander S.A.S. - Todos los derechos reservados</p>
        </div>
      </div>

      {/* Security Badge */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-600 font-medium">Conexión Segura</span>
        </div>
      </div>
    </div>
  )
}
