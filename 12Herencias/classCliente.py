from classPersona import Persona


class Cliente(Persona):
    def __init__(self, nombre, apellido, id, telefono, categoria) -> None:
        super().__init__(nombre, apellido, id, telefono)
        self.categoria = categoria
