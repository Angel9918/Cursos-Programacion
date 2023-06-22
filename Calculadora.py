def arithmetic_arranger(arr):
    if len(arr) > 5:
        raise ValueError('Error: Too many problems')
    else:
        lista = []
        for i in arr:
            operaciones = i.split()
            lista.append(operaciones)

    return operaciones

#print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))