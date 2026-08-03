from pylab import *

print("")
print("*************************************")
print("* Propagation d'une onde périodique *")
print("*  Mouvements en fonction du temps  *")
print("*************************************")
print("")

###########################
### Données modifiables ###
###########################
A=5	# amplitude en mm (entre 0 et Amax) 
T=50	# période en ms (entre 10 et 100)
v=40   	# célérité en cm/s (entre 10 et 100)
xM=7	# abscisse de M en cm (entre 0 et L)

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
if xM<=0 or xM>L:
	probleme.append("xM doit être comprise entre 0 m et",L,"cm")
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
print("  d'où la longueur d'onde de l'onde : lambda =",round(v*T/1000),"cm")
print("")

### Définition de t (500 points)
t=linspace(0,tmax,500)
### Définition de la fonction périodique
def y(t):
	return 0.56*A*(sin(2*pi*t/T)-sin(4*pi*t/T)) 
### Définition des graphiques
fig=figure()
gcf().subplots_adjust(hspace=0.7)
### Graphique à la source
fig.add_subplot(2,1,1)
plot(t,y(t))                           
title("y(t) à la source")
xlabel("t (en ms)")
ylabel("y (en mm)")
grid(True)
ylim(-Amax,Amax)
xlim(0,tmax)
### Graphique en xM
fig.add_subplot(2,1,2)
plot(t,y(t-1000*xM/v))
title("y(t) à xM = "+str(xM)+" cm de la source")
xlabel("t (en ms)")
ylabel("y (en mm)")
grid(True)
ylim(-Amax,Amax)
xlim(0,tmax)
### Affichage 
show()
