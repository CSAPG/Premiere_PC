from numpy import *
print("Calcul du tableau des transitions énergétiques de l atome d hydrogène")
niveau=array([0,0,0,0,0,0,0])
matdeltae=array([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]])
#saisie des niveaux d'énergie en milliélectron-volt
for n in range(1,8) :
    niveau[n-1]=-13603/(n**2)
print("Niveaux d énergie en milliélectron-volt")
print(niveau)
# calcul des Delta E
for n in range(7):
    for p in range(7):
        matdeltae[n,p]=niveau[n]-niveau[p]
# affichage du tableau des Delta E en milliélectron-volt
print("Tableau des transitions énergétiques Delta E en milliélectron-volt")
print(matdeltae)






