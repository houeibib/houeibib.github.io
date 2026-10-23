---
title_fr: "Quand le Soleil accélère des particules"
title_en: "When the Sun accelerates particles"
lead_fr: "Une éjection de masse coronale, son onde de choc, et des protons qui y gagnent plusieurs milliards d'électronvolts. Ce que j'ai simulé pendant ma thèse, expliqué sans équations."
lead_en: "A coronal mass ejection, its shock wave, and protons that gain billions of electronvolts from it. What I simulated during my PhD, explained without equations."
deep: /recherche/cme/physique/
crumbs:
  - {url: /recherche/, fr: Recherche, en: Research}
---
<div class="stage" markdown="0">
{% include sim-cme.html big=true %}
</div>

<div class="gut"><div class="max prose" markdown="1">

<div class="fr" markdown="1">

## En deux mots

Quand le Soleil éjecte un nuage de plasma magnétisé, l'onde de choc qu'il pousse devant lui peut faire gagner plusieurs milliards d'électronvolts à des particules déjà très rapides. Pendant ma thèse, j'ai développé un code qui suit ces particules une à une dans des simulations du vent solaire, et j'ai étudié comment elles gagnent ou perdent de l'énergie.

## Pourquoi ça compte

L'espace entre les planètes n'est pas vide. Il est balayé par le vent solaire, un flux de gaz ionisé qui s'échappe du Soleil à 400 à 800 km/s. Il est aussi traversé par des particules bien plus rapides : des particules énergétiques solaires, accélérées lors des éruptions et par les ondes de choc des éjections de masse coronale, et des rayons cosmiques venus de la Galaxie, dont l'énergie se chiffre en milliards d'électronvolts.

Ces particules ont des conséquences bien réelles près de la Terre : elles endommagent l'électronique des satellites et exposent les astronautes à des doses de rayonnement importantes. Comprendre comment elles sont accélérées et comment elles se propagent est donc un enjeu majeur de ce qu'on appelle la météo de l'espace.

Or les sondes spatiales ne mesurent qu'en un point et à un instant : elles ne donnent jamais une vue d'ensemble. La simulation numérique permet de combler ce manque, mais elle se heurte à un défi d'échelles : une éjection de masse coronale s'étend sur des dizaines de millions de kilomètres, alors que les particules s'enroulent autour du champ magnétique sur quelques kilomètres seulement.

{% include fig-cme-voyage.html %}

## Ce que montre la simulation

L'animation est une coupe du plan équatorial d'une simulation en trois dimensions. Le Soleil est à gauche ; la Terre a été placée sur la trajectoire de l'éjection.

<button class="seek" type="button" data-sim="cme" data-day="0">Le décor : le vent solaire.</button> Avant l'éruption, le vent solaire s'écoule de façon régulière. Les fines lignes qui s'enroulent autour du Soleil sont des lignes de champ magnétique : entraînées par le vent pendant que le Soleil tourne sur lui-même, elles forment une spirale, la spirale de Parker.

<button class="seek" type="button" data-sim="cme" data-day="0.15">L'éjection.</button> Une bulle de plasma traversée par un champ magnétique torsadé est lancée depuis la couronne à environ 1000 km/s, plus de deux fois plus vite que le vent qu'elle rattrape.

<button class="seek" type="button" data-sim="cme" data-day="0.5">Le choc.</button> Comme un bateau trop rapide pousse une vague devant lui, l'éjection crée une onde de choc. Juste derrière, le vent est comprimé et chauffé : c'est la **bande orange**, qu'on appelle la gaine. Le nuage éjecté lui-même, où le champ magnétique est renforcé, forme le **liseré bleu** qui suit.

<button class="seek" type="button" data-sim="cme" data-day="1.1">L'arrivée à la Terre.</button> Le choc atteint l'orbite terrestre environ 28 heures après le départ. La gaine met près d'une journée à passer, puis le nuage lui-même défile pendant plusieurs jours.

**Ce que l'animation ne montre pas : les particules.** Pendant ce temps, des protons de très haute énergie parcourent les lignes de champ. C'est à eux que je me suis intéressé : comment l'éjection et son choc modifient leur trajectoire et leur énergie.

## Mon rôle

**Un outil pour suivre les particules.** Une simulation du vent solaire décrit le plasma comme un fluide : elle donne les champs électriques et magnétiques, mais pas le parcours individuel des particules les plus énergétiques. Pendant ma thèse, j'ai développé un code, WINTERFELL, qui lance des milliers de particules dans ces champs et suit chacune d'elles en tenant compte de leur vitesse proche de celle de la lumière. J'ai aussi réalisé les simulations du vent solaire et de l'éjection avec le code MPI-AMRVAC.

**Premier résultat : des électrons qui ralentissent.** Dans un vent solaire calme, j'ai suivi des électrons énergétiques émis près du Soleil. En dérivant lentement à travers le champ électrique du vent, ils perdent environ 10 % de leur énergie par jour. Leur répartition des directions de vol reproduit celle mesurée par la sonde WIND, au niveau de la Terre.

**Second résultat : des protons accélérés par l'éjection.** J'ai ensuite envoyé des protons de très haute énergie (5 milliards d'électronvolts) à la rencontre de l'éjection. Elle peut augmenter leur énergie de plusieurs milliards d'électronvolts. Le gain se produit juste derrière le choc : à chaque passage, le proton gagne quelques pour cent. Mais renvoyé par le champ magnétique et dévié par la turbulence du vent, il peut repasser de nombreuses fois et accumuler un gain important. Cet effet est le plus fort lorsque le choc est encore près du Soleil, vers 0,3 UA.

{% include fig-cme-gain.html %}

## La suite

**Vers Mercure.** WINTERFELL ne s'arrête pas au vent solaire : il sert désormais au LIRA (Observatoire de Paris) à étudier la magnétosphère de Mercure, en préparation de la mission BepiColombo. Le laboratoire y est responsable de l'instrument SORBET, et le code permet de relier les simulations aux mesures d'électrons qu'il fera. Je l'ai testé dans ce contexte en co-encadrant un stage de master en 2024, et une thèse (2025-2028) l'exploite aujourd'hui pleinement.

**Et moi ?** Depuis 2025, je travaille sur un tout autre plasma, dix millions de milliards de fois (10<sup>16</sup>) plus petit : celui d'un accélérateur laser-plasma. [Découvrir ce sujet →]({{ '/recherche/lwfa/' | relative_url }})

</div>
<div class="en" markdown="1">

## In a nutshell

When the Sun ejects a cloud of magnetised plasma, the shock wave it drives can give billions of electronvolts to particles that are already very fast. During my PhD, I developed a code that follows these particles one by one through simulations of the solar wind, and I studied how they gain or lose energy.

## Why it matters

The space between the planets is not empty. It is swept by the solar wind, a flow of ionised gas escaping the Sun at 400 to 800 km/s. It is also crossed by much faster particles: solar energetic particles, accelerated during eruptions and by the shock waves of coronal mass ejections, and cosmic rays from the Galaxy, whose energies run into billions of electronvolts.

These particles have very real consequences near Earth: they damage satellite electronics and expose astronauts to significant radiation doses. Understanding how they are accelerated and how they travel is therefore a key challenge of what is called space weather.

Yet spacecraft only measure at one point and one moment: they never give the full picture. Numerical simulation can fill this gap, but it faces a challenge of scales: a coronal mass ejection spans tens of millions of kilometres, while the particles spiral around the magnetic field over just a few kilometres.

{% include fig-cme-voyage.html %}

## What the simulation shows

The animation is a cut through the equatorial plane of a three-dimensional simulation. The Sun is on the left; Earth has been placed on the path of the ejection.

<button class="seek" type="button" data-sim="cme" data-day="0">The setting: the solar wind.</button> Before the eruption, the solar wind flows steadily. The thin lines curling around the Sun are magnetic field lines: carried by the wind while the Sun rotates, they form a spiral, the Parker spiral.

<button class="seek" type="button" data-sim="cme" data-day="0.15">The ejection.</button> A bubble of plasma threaded by a twisted magnetic field is launched from the corona at about 1000 km/s, more than twice as fast as the wind it catches up with.

<button class="seek" type="button" data-sim="cme" data-day="0.5">The shock.</button> Just as a boat moving too fast pushes a wave ahead of it, the ejection drives a shock wave. Right behind it, the wind is compressed and heated: this is the **orange band**, called the sheath. The ejected cloud itself, where the magnetic field is enhanced, forms the **blue rim** that follows.

<button class="seek" type="button" data-sim="cme" data-day="1.1">Arrival at Earth.</button> The shock reaches Earth's orbit about 28 hours after launch. The sheath takes almost a day to pass, then the cloud itself streams by for several days.

**What the animation does not show: the particles.** Meanwhile, very high-energy protons travel along the field lines. They are what I studied: how the ejection and its shock change their paths and their energy.

## My role

**A tool to follow the particles.** A simulation of the solar wind describes the plasma as a fluid: it gives the electric and magnetic fields, but not the individual paths of the most energetic particles. During my PhD, I developed a code, WINTERFELL, that launches thousands of particles into these fields and follows each of them, accounting for their speed close to that of light. I also ran the simulations of the solar wind and of the ejection with the MPI-AMRVAC code.

**First result: electrons that slow down.** In a quiet solar wind, I followed energetic electrons released near the Sun. Slowly drifting across the electric field of the wind, they lose about 10% of their energy per day. The distribution of their flight directions matches the one measured by the WIND spacecraft, near Earth.

**Second result: protons accelerated by the ejection.** I then sent very high-energy protons (5 billion electronvolts) towards the ejection. It can raise their energy by several billion electronvolts. The gain happens just behind the shock: at each passage, a proton gains a few percent. But bounced back by the magnetic field and deflected by the turbulence of the wind, it can cross many times and build up a large gain. The effect is strongest while the shock is still close to the Sun, around 0.3 AU.

{% include fig-cme-gain.html %}

## What comes next

**Towards Mercury.** WINTERFELL does not stop at the solar wind: it is now used at LIRA (Paris Observatory) to study Mercury's magnetosphere, in preparation for the BepiColombo mission. The laboratory is responsible for the SORBET instrument on board, and the code links simulations to the electron measurements it will make. I tested it in this context while co-supervising a master's internship in 2024, and a PhD (2025-2028) now puts it to full use.

**And me?** Since 2025, I have been working on a very different plasma, ten million billion times (10<sup>16</sup>) smaller: the one inside a laser-plasma accelerator. [Discover this topic →]({{ '/recherche/lwfa/' | relative_url }})

</div>

<a class="next" href="{{ '/recherche/cme/physique/' | relative_url }}">
  <span class="k"><span class="fr">Pour aller plus loin</span><span class="en">Going further</span></span>
  <b><span class="fr">Toute la physique, des équations aux articles →</span><span class="en">All the physics, from the equations to the papers →</span></b>
</a>

</div></div>
