historial = [
    [34.5, 45.6, "2022/02/02 17:20:24"],
    [33.5, 46.6, "2022/02/02 17:20:34"],
    [36.5, 47.6, "2022/02/02 17:20:44"],
    [34.5, 48.6, "2022/02/02 17:20:54"],
    [37.5, 49.6, "2022/02/02 17:21:24"],
    [38.5, 50.6, "2022/02/02 17:21:44"]
]

indice_lat = 0
indice_lon = 1
indice_fecha = 2

print(historial[0][indice_lon])

# Recorre el arreglo segun el indice que se le ingresa
for coordenada in historial:
    print(historial[indice_fecha])
    print(historial)  # Itera todas las filas del arreglo
