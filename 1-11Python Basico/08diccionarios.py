diccionario = {
    "Programar": "Es transformar cafe en codigo",
    "POO": "Programación Orientada a Objetos",
    "MVC": "Modelo Vista Controlador"
}

print(diccionario["POO"])


numeros = {
    "0" : "cero",
    "1" : "uno",
    "2" : "dos",
    "3" : "tres",
    "4" : "cuatro",
    "5" : "cinco",
    "6" : "seis",
    "7" : "siete",
    "8" : "ocho",
    "9" : "nueve"
}

valor = input('>')
texto = ' '
for numero in valor:
    texto += numeros[numero] + ' '

print(texto)