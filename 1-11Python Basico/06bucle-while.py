# contador = 0

# while contador <= 5:
#     if contador != 3:
#         print("El valor es: " + str(contador))
#     contador += 1

# while contador < 5:
#     contador += 1
#     if contador == 3:
#         continue
#     print("El valor es: " + str(contador))
"------------------------"

seguir_chateando = True
while seguir_chateando:
    texto = input(">")
    if texto.lower() == 'salir':
        seguir_chateando = False
    print(texto)


while True:
    texto = input('>')
    if texto.lower() != 'salir':
        print(texto)
    if texto.lower() == 'salir':
        break
