---
title_fr: "Accélération laser-plasma : toute la physique"
title_en: "Laser-plasma acceleration: all the physics"
lead_fr: "Les notions nécessaires pour comprendre l'accélération laser-plasma et mon travail sur les canaux qui guident le laser : du plasma à l'onde de sillage, puis de l'ionisation d'un gaz à la formation d'un canal."
lead_en: "The concepts needed to understand laser-plasma acceleration and my work on the channels that guide the laser: from the plasma to the wakefield, then from the ionisation of a gas to the formation of a channel."
math: true
crumbs:
  - {url: /recherche/, fr: Recherche, en: Research}
  - {url: /recherche/lwfa/, fr: LWFA, en: LWFA}
---
<div class="gut"><div class="max prose" markdown="1">

<div class="fr" markdown="1">

Cette page suit le fil de la page précédente, avec les équations. Les sections 1 à 4 présentent l'accélération laser-plasma telle qu'on la trouve dans la littérature [[Esarey 2009](#ref-esarey)] ; les sections 5 à 7 portent sur les canaux de guidage, qui sont l'objet de mon travail.

## 1. Le plasma et sa fréquence propre

Dans un plasma, si l'on déplace les électrons par rapport aux ions, beaucoup plus lourds, une force de rappel électrique les ramène vers leur position d'équilibre. Ils oscillent alors à la fréquence plasma, qui ne dépend que de leur densité $$n_e$$ :

$$
\omega_p = \sqrt{\frac{n_e e^2}{\varepsilon_0 m_e}}, \qquad \lambda_p = \frac{2\pi c}{\omega_p} \approx 33\ \mu\mathrm{m} \times \left(\frac{10^{18}\ \mathrm{cm^{-3}}}{n_e}\right)^{1/2}.
$$

La longueur d'onde plasma $$\lambda_p$$ fixe l'échelle de tout ce qui suit : c'est la taille de la bulle de l'animation, de quelques micromètres à quelques dizaines de micromètres.

## 2. Un laser intense dans un plasma

**L'amplitude normalisée.** L'intensité d'un laser se mesure par son amplitude normalisée, le rapport entre la quantité de mouvement qu'un électron acquiert dans le champ et $$m_e c$$ :

$$
a_0 = \frac{e E_L}{m_e c\,\omega_0} \approx 0{,}855\,\lambda_0[\mu\mathrm{m}]\left(\frac{I}{10^{18}\ \mathrm{W\,cm^{-2}}}\right)^{1/2}.
$$

Lorsque $$a_0 \gtrsim 1$$, les électrons oscillent à une vitesse proche de celle de la lumière : le régime est relativiste. Dans l'animation, $$a_0 = 4$$.

**La force pondéromotrice.** Une impulsion focalisée a une intensité qui varie dans l'espace. Moyennée sur une oscillation, cette variation pousse les électrons vers les zones de champ faible, avec une force qui, pour $$a \ll 1$$, s'écrit

$$
\mathbf{F}_p \simeq -\frac{m_e c^2}{2}\,\nabla \langle a^2 \rangle.
$$

C'est elle qui chasse les électrons devant et autour de l'impulsion.

## 3. L'onde de sillage et le régime de la bulle

Les électrons poussés par l'impulsion sont rappelés par les ions et se mettent à osciller derrière elle : c'est une onde de densité qui suit le laser à une vitesse proche de $$c$$, l'onde de sillage [[Tajima 1979](#ref-tajima)]. La séparation de charge crée un champ électrique longitudinal, dont l'ordre de grandeur est

$$
E_0 = \frac{m_e c\,\omega_p}{e} \approx 96\ \mathrm{V/m} \times \sqrt{n_e[\mathrm{cm^{-3}}]},
$$

soit environ 100 GV/m pour $$n_e = 10^{18}$$ cm<sup>−3</sup>, mille fois plus que dans un accélérateur classique (figure 1).

{% include fig-lwfa-axis.html %}

**Le régime de la bulle.** Pour $$a_0 \gtrsim 2$$, l'impulsion expulse presque tous les électrons sur son passage. Derrière elle se forme une cavité qui ne contient que des ions, entourée d'une fine gaine d'électrons [[Pukhov 2002](#ref-pukhov)]. Cette bulle est la plus stable lorsque la taille de l'impulsion est adaptée à la densité [[Lu 2007](#ref-lu)] :

$$
k_p w_0 \simeq 2\sqrt{a_0}, \qquad k_p = \frac{\omega_p}{c},
$$

où $$w_0$$ est le rayon de la tache focale. C'est ce critère qui a fixé les paramètres de l'animation (figure 2).

{% include fig-bulle.html %}

## 4. Injection, accélération et limites

**L'injection.** Pour être accélérés, des électrons doivent entrer dans la bulle avec une vitesse suffisante pour suivre l'onde. Dans l'animation, ils sont capturés à l'arrière de la bulle, là où la gaine se referme : c'est l'auto-injection.

**Les limites.** Trois phénomènes limitent l'énergie atteinte :

- **le déphasage** : les électrons accélérés vont plus vite que la bulle et finissent par en atteindre le centre, où le champ change de signe ; la longueur correspondante est de l'ordre de $$L_d \sim \lambda_p^3/\lambda_0^2$$ ;
- **la déplétion** : le laser cède son énergie au plasma et s'épuise ;
- **la diffraction** : une impulsion focalisée s'élargit au-delà de la longueur de Rayleigh,

$$
Z_R = \frac{\pi w_0^2}{\lambda_0},
$$

soit quelques millimètres au mieux. Pour atteindre des énergies de plusieurs GeV, il faut abaisser la densité, ce qui allonge le déphasage jusqu'à plusieurs centimètres, bien au-delà de $$Z_R$$. Il faut donc **guider** le laser.

## 5. Guider le laser : les canaux plasma

L'indice de réfraction d'un plasma dépend de sa densité électronique :

$$
\eta \simeq 1 - \frac{\omega_p^2}{2\omega_0^2} = 1 - \frac{n_e}{2 n_c}, \qquad n_c = \frac{\varepsilon_0 m_e \omega_0^2}{e^2}.
$$

Si la densité est plus faible sur l'axe qu'au bord, l'indice y est plus élevé et le plasma focalise la lumière, comme une fibre optique (figure 3). Pour un canal parabolique, $$n_e(r) = n_e(0) + \Delta n\, r^2/w_0^2$$, un faisceau gaussien garde un rayon constant $$w_0$$ lorsque la profondeur du canal vaut [[Esarey 2009](#ref-esarey)]

$$
\Delta n_c = \frac{1}{\pi r_e w_0^2},
$$

où $$r_e = e^2/(4\pi\varepsilon_0 m_e c^2)$$ est le rayon classique de l'électron.

{% include fig-guidage.html %}

## 6. Les canaux HOFI

Un canal HOFI (*hydrodynamic optical-field-ionized*) se forme en trois étapes [[Shalloo 2018](#ref-shalloo); [Picksley 2020](#ref-picksley)] :

1. **L'ionisation.** Une première impulsion, courte et focalisée en ligne, ionise une fine colonne de gaz. À ces intensités, le champ laser abaisse la barrière de potentiel qui retient l'électron : il s'échappe par effet tunnel, puis, au-delà d'un seuil, sans barrière du tout. Pour l'hydrogène, ce seuil de suppression de barrière est d'environ

$$
I_{\mathrm{BSI}} \approx 4\times10^{9}\ \frac{(U_i[\mathrm{eV}])^4}{Z^2}\ \mathrm{W\,cm^{-2}} \approx 1{,}4\times10^{14}\ \mathrm{W\,cm^{-2}},
$$

où $$U_i = 13{,}6$$ eV est l'énergie d'ionisation. Les électrons libérés gardent une partie de l'énergie du champ : la colonne atteint quelques eV à quelques dizaines d'eV.

2. **L'expansion.** Cette colonne chaude, bien plus chaude que le gaz qui l'entoure, se dilate en quelques nanosecondes et pousse devant elle une onde de choc cylindrique. Le gaz neutre balayé s'accumule au front, et le cœur se vide.

3. **Le canal.** Il reste une colonne de plasma de faible densité entourée d'une paroi plus dense : un profil proche du canal parabolique de la section 5, capable de guider une seconde impulsion, intense, sur de grandes distances. Des canaux de cette famille ont permis de guider des impulsions sur plusieurs dizaines de centimètres et d'accélérer des électrons au-delà de 5 GeV [[Picksley 2020](#ref-picksley); [Miao 2024](#ref-miao)].

Les propriétés du canal (profondeur, rayon, densité sur l'axe) dépendent finement de l'énergie déposée dans la colonne et de la façon dont elle se dilate. C'est pour les prévoir que l'on cherche à simuler toute la chaîne [[Mewes 2023](#ref-mewes); [Cook 2025](#ref-cook)].

## 7. Les méthodes numériques

Les échelles de temps vont de la femtoseconde (ionisation) à la nanoseconde (expansion) : aucune méthode unique ne les couvre. La chaîne que je mets en place enchaîne trois simulations, chacune transmettant à la suivante des profils radiaux de densité et de température (figure 4).

{% include fig-hofi.html %}

**Ionisation et chauffage : simulation particulaire.** Le code Smilei [[Derouillat 2018](#ref-smilei)] résout les équations de Maxwell et suit des macro-particules représentant les électrons et les ions (méthode *particle-in-cell*). L'ionisation y est calculée à partir de taux d'ionisation tunnel [[Ammosov 1986](#ref-adk)], corrigés pour le régime de suppression de barrière [[Tong 2005](#ref-tong)]. Les collisions entre particules, qui contrôlent le chauffage et la relaxation des températures, sont également prises en compte.

**Expansion : simulation fluide.** L'expansion est calculée avec le code d'hydrodynamique radiative FLASH [[Fryxell 2000](#ref-flash)], qui décrit électrons et ions avec deux températures distinctes. Il reçoit les profils de densité et de température issus de la simulation particulaire et suit la colonne jusqu'à la formation du canal, à l'échelle de la nanoseconde.

**Guidage : retour à la simulation particulaire.** La dernière étape consiste à réinjecter le canal obtenu dans Smilei pour y propager une impulsion intense et tester son guidage.

</div>
<div class="en" markdown="1">

This page follows the thread of the previous one, with the equations. Sections 1 to 4 present laser-plasma acceleration as found in the literature [[Esarey 2009](#ref-esarey)]; sections 5 to 7 are about the guiding channels, which are the subject of my work.

## 1. The plasma and its natural frequency

In a plasma, if the electrons are displaced with respect to the much heavier ions, an electric restoring force pulls them back towards equilibrium. They then oscillate at the plasma frequency, which depends only on their density $$n_e$$:

$$
\omega_p = \sqrt{\frac{n_e e^2}{\varepsilon_0 m_e}}, \qquad \lambda_p = \frac{2\pi c}{\omega_p} \approx 33\ \mu\mathrm{m} \times \left(\frac{10^{18}\ \mathrm{cm^{-3}}}{n_e}\right)^{1/2}.
$$

The plasma wavelength $$\lambda_p$$ sets the scale of everything that follows: it is the size of the bubble in the animation, from a few to a few tens of micrometres.

## 2. An intense laser in a plasma

**The normalised amplitude.** The strength of a laser is measured by its normalised amplitude, the ratio of the momentum an electron acquires in the field to $$m_e c$$:

$$
a_0 = \frac{e E_L}{m_e c\,\omega_0} \approx 0.855\,\lambda_0[\mu\mathrm{m}]\left(\frac{I}{10^{18}\ \mathrm{W\,cm^{-2}}}\right)^{1/2}.
$$

When $$a_0 \gtrsim 1$$, the electrons oscillate at nearly the speed of light: the regime is relativistic. In the animation, $$a_0 = 4$$.

**The ponderomotive force.** A focused pulse has an intensity that varies in space. Averaged over an oscillation, this variation pushes the electrons towards regions of weak field, with a force that, for $$a \ll 1$$, reads

$$
\mathbf{F}_p \simeq -\frac{m_e c^2}{2}\,\nabla \langle a^2 \rangle.
$$

This is what drives the electrons out ahead of and around the pulse.

## 3. The wakefield and the bubble regime

The electrons pushed by the pulse are pulled back by the ions and start oscillating behind it: a density wave follows the laser at nearly $$c$$, the wakefield [[Tajima 1979](#ref-tajima)]. The charge separation creates a longitudinal electric field of order

$$
E_0 = \frac{m_e c\,\omega_p}{e} \approx 96\ \mathrm{V/m} \times \sqrt{n_e[\mathrm{cm^{-3}}]},
$$

about 100 GV/m for $$n_e = 10^{18}$$ cm<sup>−3</sup>, a thousand times more than in a conventional accelerator (figure 1).

{% include fig-lwfa-axis.html %}

**The bubble regime.** For $$a_0 \gtrsim 2$$, the pulse expels almost all the electrons in its path. Behind it forms a cavity containing only ions, surrounded by a thin electron sheath [[Pukhov 2002](#ref-pukhov)]. This bubble is most stable when the pulse size is matched to the density [[Lu 2007](#ref-lu)]:

$$
k_p w_0 \simeq 2\sqrt{a_0}, \qquad k_p = \frac{\omega_p}{c},
$$

where $$w_0$$ is the radius of the focal spot. This criterion set the parameters of the animation (figure 2).

{% include fig-bulle.html %}

## 4. Injection, acceleration and limits

**Injection.** To be accelerated, electrons must enter the bubble with enough speed to keep up with the wave. In the animation, they are captured at the back of the bubble, where the sheath closes: this is self-injection.

**Limits.** Three effects limit the energy reached:

- **dephasing**: the accelerated electrons outrun the bubble and eventually reach its centre, where the field changes sign; the corresponding length is of order $$L_d \sim \lambda_p^3/\lambda_0^2$$;
- **depletion**: the laser gives its energy to the plasma and runs out;
- **diffraction**: a focused pulse spreads out beyond the Rayleigh length,

$$
Z_R = \frac{\pi w_0^2}{\lambda_0},
$$

a few millimetres at best. To reach energies of several GeV, the density must be lowered, which stretches the dephasing length to several centimetres, far beyond $$Z_R$$. The laser must therefore be **guided**.

## 5. Guiding the laser: plasma channels

The refractive index of a plasma depends on its electron density:

$$
\eta \simeq 1 - \frac{\omega_p^2}{2\omega_0^2} = 1 - \frac{n_e}{2 n_c}, \qquad n_c = \frac{\varepsilon_0 m_e \omega_0^2}{e^2}.
$$

If the density is lower on axis than at the edge, the index is higher there and the plasma focuses the light, like an optical fibre (figure 3). For a parabolic channel, $$n_e(r) = n_e(0) + \Delta n\, r^2/w_0^2$$, a Gaussian beam keeps a constant radius $$w_0$$ when the channel depth is [[Esarey 2009](#ref-esarey)]

$$
\Delta n_c = \frac{1}{\pi r_e w_0^2},
$$

where $$r_e = e^2/(4\pi\varepsilon_0 m_e c^2)$$ is the classical electron radius.

{% include fig-guidage.html %}

## 6. HOFI channels

A HOFI (hydrodynamic optical-field-ionized) channel forms in three steps [[Shalloo 2018](#ref-shalloo); [Picksley 2020](#ref-picksley)]:

1. **Ionisation.** A first short pulse, focused along a line, ionises a thin column of gas. At these intensities, the laser field lowers the potential barrier that holds the electron: it escapes by tunnelling, then, above a threshold, with no barrier at all. For hydrogen, this barrier-suppression threshold is about

$$
I_{\mathrm{BSI}} \approx 4\times10^{9}\ \frac{(U_i[\mathrm{eV}])^4}{Z^2}\ \mathrm{W\,cm^{-2}} \approx 1.4\times10^{14}\ \mathrm{W\,cm^{-2}},
$$

where $$U_i = 13.6$$ eV is the ionisation energy. The freed electrons keep part of the field energy: the column reaches a few to a few tens of eV.

2. **Expansion.** This hot column, much hotter than the surrounding gas, expands within a few nanoseconds and drives a cylindrical shock wave ahead of it. The swept-up neutral gas piles up at the front, and the core empties.

3. **The channel.** What remains is a low-density plasma column surrounded by a denser wall: a profile close to the parabolic channel of section 5, able to guide a second, intense pulse over long distances. Channels of this family have guided pulses over several tens of centimetres and accelerated electrons beyond 5 GeV [[Picksley 2020](#ref-picksley); [Miao 2024](#ref-miao)].

The properties of the channel (depth, radius, on-axis density) depend sensitively on the energy deposited in the column and on how it expands. Predicting them is why one tries to simulate the whole chain [[Mewes 2023](#ref-mewes); [Cook 2025](#ref-cook)].

## 7. Numerical methods

The time scales range from femtoseconds (ionisation) to nanoseconds (expansion): no single method covers them all. The chain I am setting up links three simulations, each passing radial density and temperature profiles on to the next (figure 4).

{% include fig-hofi.html %}

**Ionisation and heating: particle simulation.** The Smilei code [[Derouillat 2018](#ref-smilei)] solves Maxwell's equations and follows macro-particles representing electrons and ions (the particle-in-cell method). Ionisation is computed from tunnelling rates [[Ammosov 1986](#ref-adk)], corrected for the barrier-suppression regime [[Tong 2005](#ref-tong)]. Collisions between particles, which control the heating and the relaxation of temperatures, are also included.

**Expansion: fluid simulation.** The expansion is computed with the radiation-hydrodynamics code FLASH [[Fryxell 2000](#ref-flash)], which describes electrons and ions with two separate temperatures. It takes the density and temperature profiles from the particle simulation and follows the column until the channel forms, on the nanosecond scale.

**Guiding: back to the particle simulation.** The last stage is to feed the resulting channel back into Smilei, propagate an intense pulse in it and test its guiding.

</div>

<h2><span class="fr">Références</span><span class="en">References</span></h2>

<div class="refs" markdown="1">
- <span id="ref-adk"></span>**Ammosov 1986** — M. V. Ammosov, N. B. Delone, V. P. Krainov, « Tunnel ionization of complex atoms and of atomic ions in an alternating electromagnetic field », *Sov. Phys. JETP* 64, 1191 (1986).
- <span id="ref-cook"></span>**Cook 2025** — « Hydrodynamic modeling of plasma channel systems for laser plasma accelerators », *Nucl. Instrum. Methods Phys. Res. A* 1079, 170610 (2025).
- <span id="ref-smilei"></span>**Derouillat 2018** — J. Derouillat et al., « Smilei: a collaborative, open-source, multi-purpose particle-in-cell code for plasma simulation », *Comput. Phys. Commun.* 222, 351 (2018).
- <span id="ref-esarey"></span>**Esarey 2009** — E. Esarey, C. B. Schroeder, W. P. Leemans, « Physics of laser-driven plasma-based electron accelerators », *Rev. Mod. Phys.* 81, 1229 (2009).
- <span id="ref-flash"></span>**Fryxell 2000** — B. Fryxell et al., « FLASH: An adaptive mesh hydrodynamics code for modeling astrophysical thermonuclear flashes », *ApJS* 131, 273 (2000).
- <span id="ref-lu"></span>**Lu 2007** — W. Lu et al., « Generating multi-GeV electron bunches using single stage laser wakefield acceleration in a 3D nonlinear regime », *Phys. Rev. ST Accel. Beams* 10, 061301 (2007).
- <span id="ref-mewes"></span>**Mewes 2023** — S. M. Mewes et al., « Demonstration of tunability of HOFI waveguides via start-to-end simulations », *Phys. Rev. Research* 5, 033112 (2023).
- <span id="ref-miao"></span>**Miao 2024** — B. Miao et al., « Benchmarking of hydrodynamic plasma waveguides for multi-GeV laser-driven electron acceleration », *Phys. Rev. Accel. Beams* 27, 081302 (2024).
- <span id="ref-picksley"></span>**Picksley 2020** — A. Picksley et al., « Meter-scale conditioned hydrodynamic optical-field-ionized plasma channels », *Phys. Rev. E* 102, 053201 (2020).
- <span id="ref-pukhov"></span>**Pukhov 2002** — A. Pukhov, J. Meyer-ter-Vehn, « Laser wake field acceleration: the highly non-linear broken-wave regime », *Appl. Phys. B* 74, 355 (2002).
- <span id="ref-shalloo"></span>**Shalloo 2018** — R. J. Shalloo et al., « Hydrodynamic optical-field-ionized plasma channels », *Phys. Rev. E* 97, 053203 (2018).
- <span id="ref-tajima"></span>**Tajima 1979** — T. Tajima, J. M. Dawson, « Laser electron accelerator », *Phys. Rev. Lett.* 43, 267 (1979).
- <span id="ref-tong"></span>**Tong 2005** — X. M. Tong, C. D. Lin, « Empirical formula for static field ionization rates of atoms and molecules by lasers in the barrier-suppression regime », *J. Phys. B* 38, 2593 (2005).
</div>

<h2><span class="fr">Mes publications sur ce sujet</span><span class="en">My publications on this topic</span></h2>

<div markdown="0">{% include pubs.html topic="lwfa" %}</div>

</div></div>
