# def prueba1(parametro):
#     print('El parametro es un: ' + parametro )

# prueba1('Valor asignado')


# def prueba2(parametro, parametro1):
#     print('El parametro es un: ' + parametro + ' al que se le ' + parametro1 )

# prueba2('Valor asignado')
# prueba2('se pueden asignar diferentes valores')


# Calculadora de IMC
# IMC = Peso / (Altura**2)
# < 19 : delgado
# entre 20 y 25: normal
# entre 26 y 30 : sobrepeso
# > 30: obesidad


def calculo_imc(peso, altura_m):
    imc = peso / (altura_m ** 2)
    return imc


def solicitud_de_datos():
    peso = float(input('Ingrese su peso en kg: '))
    altura_cm = int(input('Ingrese su altura en centimetros: '))
    altura_m = altura_cm / 100
    imc = calculo_imc(peso, altura_m)
    print('Su indice de masa corporal es: {:.2f}'.format(imc))

    if imc < 20:
        print('Esta delgado')
    if imc >= 20 and imc < 26:
        print('Esta normal')
    if imc >= 26 and imc < 30:
        print('Esta en sobrepeso')
    if imc >= 30:
        print('Esta obeso')


solicitud_de_datos()
