---
title_fr: "Un accélérateur de particules dans un gaz"
title_en: "A particle accelerator inside a gas"
lead_fr: "Une impulsion laser creuse une bulle dans un plasma, et des électrons surfent dans son sillage. Le principe de l'accélération laser-plasma, et ce que j'y fais, expliqués sans équations."
lead_en: "A laser pulse carves a bubble in a plasma, and electrons surf in its wake. The principle of laser-plasma acceleration, and my part in it, explained without equations."
deep: /recherche/lwfa/physique/
crumbs:
  - {url: /recherche/, fr: Recherche, en: Research}
---
<div class="stage" markdown="0">
{% include sim-lwfa.html big=true %}
</div>

<div class="gut"><div class="max prose" markdown="1">

<div class="fr" markdown="1">

## En deux mots

Les accélérateurs laser-plasma pourraient tenir sur une table là où il faut aujourd'hui des kilomètres. Pour cela, le laser doit rester concentré sur plusieurs centimètres. Je simule la formation des « fibres optiques » de plasma qui le guident.

## Pourquoi ça compte

Les accélérateurs de particules servent bien au-delà de la physique fondamentale : sources de rayons X pour étudier la matière, imagerie et traitements médicaux, contrôle de matériaux. Mais les accélérateurs classiques sont limités par la tenue des cavités métalliques : au-delà de quelques dizaines de millions de volts par mètre, le métal claque. Pour gagner de l'énergie, il faut donc des machines toujours plus longues, jusqu'à plusieurs kilomètres.

Un plasma, lui, est déjà ionisé : il ne peut pas « claquer ». Il peut supporter des champs électriques mille fois plus intenses. C'est l'idée de l'accélération laser-plasma : utiliser une impulsion laser très brève et très intense pour créer, dans un gaz, une onde capable d'accélérer des électrons sur quelques millimètres ou centimètres au lieu de dizaines de mètres.

{% include fig-lwfa-taille.html %}

## Ce que montre la simulation

L'animation n'est pas tirée de mes travaux de recherche : c'est une simulation réalisée pour ce site avec le code Smilei, pour illustrer le principe. La caméra suit l'impulsion laser, qui avance vers la droite à une vitesse proche de celle de la lumière ; la barre en haut indique la distance parcourue dans le gaz.

<button class="seek" type="button" data-sim="lwfa" data-frac="0">Le laser entre dans le gaz.</button> L'impulsion, en orange, est si intense qu'elle ionise instantanément le gaz : le fond bleu est un plasma, un mélange d'électrons libres et d'ions.

<button class="seek" type="button" data-sim="lwfa" data-frac="0.08">La bulle.</button> Sur son passage, le laser chasse les électrons, bien plus légers que les ions. Derrière lui se forme une cavité presque vide d'électrons, la bulle, entourée d'une fine paroi d'électrons plus dense, en blanc. Les ions, restés en place, rappellent les électrons vers l'axe : ils se referment à l'arrière de la bulle.

<button class="seek" type="button" data-sim="lwfa" data-frac="0.17">Des électrons piégés.</button> Certains électrons de la paroi sont capturés à l'arrière de la bulle. Ils se retrouvent dans un champ électrique gigantesque, qui les pousse vers l'avant.

<button class="seek" type="button" data-sim="lwfa" data-frac="0.85">L'accélération.</button> Les électrons piégés surfent dans le sillage du laser et gagnent de l'énergie à chaque instant : environ 200 millions d'électronvolts en moins d'un tiers de millimètre.

## Mon rôle

**Le problème : garder le laser concentré.** Un faisceau laser focalisé ne reste concentré que sur une courte distance, quelques millimètres, avant de s'élargir. Pour accélérer des électrons jusqu'à des milliards d'électronvolts, il faut pourtant le maintenir intense sur des centimètres, voire davantage. La solution est de le guider dans un canal de plasma, moins dense au centre qu'au bord, qui joue le rôle d'une fibre optique.

**Les canaux HOFI.** Une façon prometteuse de créer ces canaux est d'utiliser une première impulsion laser : elle ionise une fine colonne de gaz et la chauffe. Cette colonne chaude se dilate en quelques nanosecondes, comme une explosion cylindrique, et laisse derrière elle un canal creux. Ces canaux, dits HOFI, ne demandent ni électrodes ni structure solide : ils peuvent être très longs et produits à haute cadence.

{% include fig-lwfa-canal.html %}

**Ce que je fais : une chaîne de simulations.** La formation d'un canal mêle des échelles de temps très différentes, de la femtoseconde à la nanoseconde. Aucune simulation unique ne peut tout couvrir. Je mets donc en place une chaîne : une simulation particulaire avec Smilei pour l'ionisation et le chauffage du gaz par le laser, une simulation fluide avec le code FLASH pour l'expansion de la colonne chaude, puis à nouveau Smilei pour tester le guidage d'une impulsion intense dans le canal obtenu.

## La suite

La prochaine étape est de fermer la boucle : réinjecter les canaux calculés dans Smilei pour tester le guidage d'une impulsion intense, et identifier les conditions qui donnent les meilleurs canaux.

</div>
<div class="en" markdown="1">

## In a nutshell

Laser-plasma accelerators could fit on a tabletop where today's machines span kilometres. For that, the laser must stay focused over several centimetres. I simulate the formation of the plasma "optical fibres" that guide it.

## Why it matters

Particle accelerators are used far beyond fundamental physics: X-ray sources to study matter, medical imaging and treatment, materials testing. But conventional accelerators are limited by their metal cavities: beyond a few tens of millions of volts per metre, the metal breaks down. Gaining energy therefore requires ever longer machines, up to several kilometres.

A plasma, on the other hand, is already ionised: it cannot break down. It can sustain electric fields a thousand times stronger. This is the idea of laser-plasma acceleration: using a very short, very intense laser pulse to drive a wave in a gas that can accelerate electrons over a few millimetres or centimetres instead of tens of metres.

{% include fig-lwfa-taille.html %}

## What the simulation shows

The animation is not taken from my research: it is a simulation made for this site with the Smilei code, to illustrate the principle. The camera follows the laser pulse, which moves to the right at nearly the speed of light; the bar at the top shows the distance travelled in the gas.

<button class="seek" type="button" data-sim="lwfa" data-frac="0">The laser enters the gas.</button> The pulse, in orange, is so intense that it instantly ionises the gas: the blue background is a plasma, a mixture of free electrons and ions.

<button class="seek" type="button" data-sim="lwfa" data-frac="0.08">The bubble.</button> As it passes, the laser pushes away the electrons, which are much lighter than the ions. Behind it forms a cavity almost empty of electrons, the bubble, surrounded by a thin, denser wall of electrons, in white. The ions, which stay in place, pull the electrons back towards the axis: they close in at the back of the bubble.

<button class="seek" type="button" data-sim="lwfa" data-frac="0.17">Trapped electrons.</button> Some electrons from the wall are captured at the back of the bubble. They find themselves in a gigantic electric field that pushes them forward.

<button class="seek" type="button" data-sim="lwfa" data-frac="0.85">Acceleration.</button> The trapped electrons surf in the wake of the laser and gain energy all the time: about 200 million electronvolts in less than a third of a millimetre.

## My role

**The problem: keeping the laser focused.** A focused laser beam only stays concentrated over a short distance, a few millimetres, before spreading out. Yet accelerating electrons to billions of electronvolts requires keeping it intense over centimetres or more. The solution is to guide it in a plasma channel, less dense on axis than at the edge, which acts as an optical fibre.

**HOFI channels.** A promising way to create these channels is to use a first laser pulse: it ionises a thin column of gas and heats it. This hot column expands within a few nanoseconds, like a cylindrical explosion, and leaves a hollow channel behind. These channels, called HOFI, need neither electrodes nor solid structures: they can be very long and produced at a high repetition rate.

{% include fig-lwfa-canal.html %}

**What I do: a chain of simulations.** Channel formation involves very different time scales, from femtoseconds to nanoseconds. No single simulation can cover them all. I am therefore setting up a chain: a particle simulation with Smilei for the ionisation and heating of the gas by the laser, a fluid simulation with the FLASH code for the expansion of the hot column, then Smilei again to test the guiding of an intense pulse in the resulting channel.

## What comes next

The next step is to close the loop: feed the computed channels back into Smilei to test the guiding of an intense pulse, and identify the conditions that give the best channels.

</div>

<a class="next" href="{{ '/recherche/lwfa/physique/' | relative_url }}">
  <span class="k"><span class="fr">Pour aller plus loin</span><span class="en">Going further</span></span>
  <b><span class="fr">Toute la physique, des équations aux simulations →</span><span class="en">All the physics, from the equations to the simulations →</span></b>
</a>

</div></div>
