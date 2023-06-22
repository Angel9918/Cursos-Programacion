# archivo = open('texto.txt', 'a')
# archivo.write('Prueba de guardado en el archivo')
# archivo.close()

# archivo = open('texto.txt', 'r')
# print(archivo.read())

def encriptado(texto):
    print('El texto a encriptar es:' + texto)
    clave = ' '
    for char in texto:
        clave += char + 'x'
    return clave


def desencriptado(texto):
    print('El texto a desencriptar es:' + texto)
    clave = ' '
    contador = 0
    for char in texto:
        if contador % 2 == 0:
            clave += char
        contador += 1
    return clave


def encriptar_archivo(ruta_archivo):
    archivo = open(ruta_archivo, 'r')
    texto = archivo.read()
    archivo.close()
    texto_encriptado = encriptado(texto)

    archivo = open(ruta_archivo, 'w')
    archivo.write(texto_encriptado)
    archivo.close()


def desencriptar_archivo(ruta_archivo):
    archivo = open(ruta_archivo, 'r')
    texto = archivo.read()
    archivo.close()
    texto_desencriptado = desencriptado(texto)

    archivo = open(ruta_archivo, 'w')
    archivo.write(texto_desencriptado)
    archivo.close()


respuestaEoD = input("Presione 'E' para encriptar o 'D' para desencriptar: ")
ruta_archivo = input('Ingrese la ruta del archivo:\n')

if respuestaEoD.upper() == "E":
    encriptar_archivo(ruta_archivo)
else:
    desencriptar_archivo(ruta_archivo)

print('------------------------------------')


def encriptado(texto):
    print('El texto a encriptar es:' + texto)
    clave = ' '
    for char in texto:
        ascii = ord(char)
        ascii += 1
        clave += chr(ascii)
    return clave


def desencriptado(texto):
    print('El texto a desencriptar es:' + texto)
    clave = ' '
    for char in texto:
        ascii = ord(char)
        ascii -= 1
        clave += chr(ascii)
    return clave


def encriptar_archivo(ruta_archivo):
    archivo = open(ruta_archivo, 'r')
    texto = archivo.read()
    archivo.close()
    texto_encriptado = encriptado(texto)

    archivo = open(ruta_archivo, 'w')
    archivo.write(texto_encriptado)
    archivo.close()


def desencriptar_archivo(ruta_archivo):
    archivo = open(ruta_archivo, 'r')
    texto = archivo.read()
    archivo.close()
    texto_desencriptado = desencriptado(texto)

    archivo = open(ruta_archivo, 'w')
    archivo.write(texto_desencriptado)
    archivo.close()


respuestaEoD = input("Presione 'E' para encriptar o 'D' para desencriptar: ")
ruta_archivo = input('Ingrese la ruta del archivo:\n')

if respuestaEoD.upper() == "E":
    encriptar_archivo(ruta_archivo)
else:
    desencriptar_archivo(ruta_archivo)
