frutas = ['banana', 'melon', 'sandia', 'pera']

for fruta in frutas:
    print('La fruta es: ' + fruta)
print('-----------------')
for fruta in frutas:
    if fruta.endswith('a'):
        print('La fruta que termina con a es: ' + fruta)
print('-----------------')
for fruta in frutas:
    if fruta == 'sandia':
        break
    print('La fruta es: ' + fruta)
print('-----------------')
frutas.reverse()
for fruta in frutas:
    print('La fruta es: ' + fruta)

