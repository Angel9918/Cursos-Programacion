class Persona:
    def __init__(self, nombre, apellido, id, telefono) -> None:
        self.nombre = nombre
        self.apellido = apellido
        self.id = id
        self.telefono = telefono

    def __str__(self) -> str:
        return self.nombre + ' ' + self.apellido + ' - ' + self.id
