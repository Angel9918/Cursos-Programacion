from classPersona import Persona


class Empleado(Persona):
    def __init__(self, nombre, apellido, id, telefono, salario) -> None:
        super().__init__(nombre, apellido, id, telefono)
        self.salario = salario
