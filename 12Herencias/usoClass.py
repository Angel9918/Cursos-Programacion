from classCliente import Cliente
from classEmpleado import Empleado


def cargar():
    agregar_empleado = input('¿Va a ingresar un empleado?\n')
    nombre = input('Ingrese el nombre: ')
    apellido = input('Ingrese el apellido: ')
    id = input('Ingrese el id: ')
    telefono = input('Ingrese el telefono: ')

    if agregar_empleado.lower() == 'si':
        salario = input('Ingrese salario del empleado: ')
        emp = Empleado(nombre, apellido, id, telefono, int(salario))
        print(emp)
    else:
        categoria = input('Ingrese categoria cliente: ')
        cli = Cliente(nombre, apellido, id, telefono, categoria)
        print(cli)


personas = []  # Para almacenar los datos suministrados
cargar()

for persona in personas:
    print(persona)
