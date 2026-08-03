from pylab import *

print("")
print("*************************************")
print("* Propagation d'une onde périodique *")
print("*     Aspect spatial du milieu      *")
print("*************************************")
print("")

###########################
### Données modifiables ###
###########################
A=5	# amplitude en mm (entre 0 et Amax) 
T=50	# période en ms (entre 10 et 100)
v=40   	# célérité en cm/s (entre 10 et 100)
t1=0.12	# date t1 en s (positive)

### Valeurs initiales
#A=5
#T=50
#v=40
#xM=7

### Données non modifiables
L=30		# longueur totale de la cuve en cm
tmax=250	# date de fin en ms
Amax=10		# amplitude maximale en mm

### Test pour les valeurs
probleme=[]
if T<10 or T>100:
	probleme.append("T doit être comprise entre 10 ms et 100 ms")
if v<10 or v>100:
	probleme.append("v doit être comprise entre 10 m/s et 100 m/s")
if t1<=0:
	probleme.append("t1 doit être positive")
if A<=0 or A>Amax:
	probleme.append("A doit être comprise entre 0 mm et",Amax,"mm")
if len(probleme)!=0:
        for i in range(len(probleme)):
                print(probleme[i])
        sys.exit("Modifiez les paramètres et réessayez")

### Affichage des paramètres 
print("Amplitude de l'onde : A =",round(A,1),"mm")
print("Période de l'onde : T =",round(T,1),"ms")
print("  d'où la fréquence f =",round(1000/T,1),"Hz")
print("Célérité de l'onde : v =",round(v,1),"cm/s")
print("  d'où la longueur d'onde de l'onde lambda =",round(v*T/1000),"cm")
print("")

### Définition de x (500 points)
x=linspace(0,L,500)
### Définition de la fonction périodique
def y(t):
	return 0.56*A*(sin(2*pi*t/T)-sin(4*pi*t/T)) 
### Définition des graphiques
fig=figure()
gcf().subplots_adjust(hspace=0.7)
### Graphique à la source
fig.add_subplot(2,1,1)
plot(x,y(-1000*x/v))                           
title("y(x) à t0 = 0 s")
xlabel("x (cm)")
ylabel("y (mm)")
ylim(-Amax,Amax)
xlim(0,L)
grid(True)
### Graphique en xM
fig.add_subplot(2,1,2)
plot(x,y(1000*t1-1000*x/v))
title("y(x) à t1 = "+str(t1)+" s")
xlabel("x (cm)")
ylabel("y (mm)")
ylim(-Amax,Amax)
xlim(0,L)
grid(True)
### Affichage 
show()
