import numpy as np


def calculate(list):
    if len(list) != 9:
        raise ValueError ("List must contain nine numbers." )
    else:
        list_arr = np.array(list).reshape(3,3)
        list_arr_T = list_arr.transpose()
        calculations = {'mean': [[np.mean(i) for i in list_arr_T], [np.mean(i) for i in list_arr], np.mean(list_arr)],
                        'variance': [[np.var(i) for i in list_arr_T], [np.var(i) for i in list_arr], np.var(list_arr)],
                        'standard deviation': [[np.std(i) for i in list_arr_T], [np.std(i) for i in list_arr], np.std(list_arr)],
                        'max': [[np.max(i) for i in list_arr_T], [np.max(i) for i in list_arr], np.max(list_arr)],
                        'min': [[np.min(i) for i in list_arr_T], [np.min(i) for i in list_arr], np.min(list_arr)],
                        'sum': [[np.sum(i) for i in list_arr_T], [np.sum(i) for i in list_arr], np.sum(list_arr)]}
        return calculations

print(calculate([0,1,2,3,4,5,6,7,8]))
