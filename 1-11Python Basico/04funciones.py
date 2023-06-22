def mostrar_precio_final(producto,precio,descuento):
    precio_final = precio - descuento * precio / 100
    print('El precio del ' + producto + ' es: $' + str(precio_final))

mostrar_precio_final('Pantalon', 40, 20)
mostrar_precio_final('Camisa', 30, 15)
