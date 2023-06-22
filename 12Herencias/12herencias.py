class Persona:
    def __init__(self, nombre, apellido, id, telefono) -> None:
        self.nombre = nombre
        self.apellido = apellido
        self.id = id
        self.telefono = telefono

    def __str__(self) -> str:
        return self.nombre + ' ' + self.apellido + ' - ' + self.id


class Empleado(Persona):
    def __init__(self, nombre, apellido, id, telefono, salario) -> None:
        super().__init__(nombre, apellido, id, telefono)
        self.salario = salario


class Cliente(Persona):
    def __init__(self, nombre, apellido, id, telefono, categoria) -> None:
        super().__init__(nombre, apellido, id, telefono)
        self.categoria = categoria


def cargar():
    agregar_empleado = input('¿Va a ingresar un empleado?\n')
    nombre = input('Ingrese el nombre: ')
    apellido = input('Ingrese el apellido: ')
    id = input('Ingrese el id: ')
    telefono = input('Ingrese el telefono: ')

    if agregar_empleado.lower() == 'si':
        salario = input('Ingrese salario del empleado: ')
        emp = Empleado(nombre, apellido, id, telefono, int(salario))
        personas.append(emp)
    else:
        categoria = input('Ingrese categoria cliente: ')
        cli = Cliente(nombre, apellido, id, telefono, categoria)
        personas.append(cli)


personas = []  # Para almacenar los datos suministrados
cargar()

for persona in personas:
    print(persona)
