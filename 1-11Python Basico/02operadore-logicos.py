# Siempre que hay un imput el texto se convierte a str

edad = 25

if edad >= 18 and edad < 70:
    print("Ingrese")

if edad < 18 or edad >= 70:
    print("Ingrese")
else:
    print("Prohibido")
if not (edad < 18 and edad >= 70):
    print("Ingrese")
#"-------------------------------------------"
mayor_de_edad = edad >= 18

if mayor_de_edad:
    print("Acceso concedido")
else:
    print("Acceso denegado")
#"-------------------------------------------"
nombre = input('Ingrese su nombre :\n')
print('Hola ' + nombre.capitalize())

edad = int(input('Ingrese su edad:\n'))
cumple_edad = edad >= 12
hijo_dueno = input('¿Es el hijo del dueño?\n')
es_hijo = hijo_dueno.lower() == 'si'
puede_pasar = cumple_edad or es_hijo

if puede_pasar:
    print('Puede ingresar')
else:
    print('No puede pasar')
