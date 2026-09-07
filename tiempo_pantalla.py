"""
Calcula el promedio diario de horas pasadas en el celular durante la semana.
"""

# 1. Declarar las variables
horas_lunes = 0
horas_martes = 0
horas_miercoles = 0
horas_jueves = 0
horas_viernes = 0
horas_sabado = 0
horas_domingo = 0
suma = 0
promedio = 0

# 2. Solicitar al usuario que ingrese las horas pasadas en el celular cada día
horas_lunes = 6.5
horas_martes = 7
horas_miercoles = 6
horas_jueves = 7.5
horas_viernes = 8
horas_sabado = 7
horas_domingo = 6.5

# 3. Calcular suma
suma = (horas_lunes + horas_martes + horas_miercoles + horas_jueves +
        horas_viernes + horas_sabado + horas_domingo)

# 4. Calcular promedio
promedio = suma / 7

# 5. Mostrar el valor de promedio
print(f"Promedio de horas en el celular por día: {promedio:.2f} horas")
