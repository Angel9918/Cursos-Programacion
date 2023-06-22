class cuadrado:
    def __init__(self, ancho, alto) -> None:  # Clase constructoras
        self.ancho = ancho
        self.alto = alto

    def calcular_area(self):
        area = self.ancho * self.alto
        return area


figura = cuadrado(10, 12)  # Permite asignar valores
print(figura.ancho)
print(figura.alto)  # Permite obtener el valor solicitado

print(figura.calcular_area())  # Hace el llamado a la funcion
