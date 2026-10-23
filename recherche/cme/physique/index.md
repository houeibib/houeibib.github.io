---
title_fr: "CME et particules énergétiques : toute la physique"
title_en: "CMEs and energetic particles: all the physics"
lead_fr: "Les notions nécessaires pour lire mes articles, introduites pas à pas : du vent solaire au gain d'énergie de protons relativistes au passage d'une éjection de masse coronale."
lead_en: "The concepts needed to read my papers, introduced step by step: from the solar wind to the energy gain of relativistic protons as a coronal mass ejection goes by."
math: true
crumbs:
  - {url: /recherche/, fr: Recherche, en: Research}
  - {url: /recherche/cme/, fr: CME, en: CME}
---
<div class="gut"><div class="max prose" markdown="1">

<div class="fr" markdown="1">

Cette page reprend, en plus court, le fil de ma thèse [[Houeibib 2025b](#ref-these)]. Chaque section s'appuie sur la précédente, et les résultats renvoient aux deux articles qui les établissent : les électrons dans un vent calme [[Houeibib 2025a](#ref-h25)], puis les protons face à une éjection de masse coronale [[Houeibib 2026](#ref-h26)]. Les notations sont celles de ces articles.

## 1. Le vent solaire et la spirale de Parker

La couronne solaire, chauffée à plus d'un million de kelvins, ne peut pas rester en équilibre hydrostatique : elle s'écoule en permanence dans l'espace. C'est le vent solaire, décrit pour la première fois par Parker [[Parker 1958](#ref-parker)]. Pour un gaz isotherme à symétrie sphérique, stationnaire, la vitesse radiale $$u$$ obéit à

$$
\left(\frac{u^2}{c_s^2} - 1\right)\frac{1}{u}\frac{\mathrm{d}u}{\mathrm{d}r} = \frac{2}{r}\left(1 - \frac{r_c}{r}\right), \qquad r_c = \frac{GM_\odot}{2c_s^2},
$$

où $$c_s$$ est la vitesse du son. Parmi les solutions possibles, une seule est observée : celle qui passe continûment du régime subsonique au régime supersonique au rayon critique $$r_c$$. Le vent atteint ainsi 300 à 500 km/s aux basses latitudes (vent lent) et 700 à 800 km/s au-dessus des pôles (vent rapide).

Le vent emporte avec lui le champ magnétique du Soleil (section 2). Comme le pied des lignes de champ tourne avec le Soleil, à la vitesse angulaire $$\Omega$$, elles s'enroulent en spirale :

$$
B_r = B_0\left(\frac{r_0}{r}\right)^2, \qquad B_\varphi = -B_r\,\frac{\Omega r \sin\theta}{u}.
$$

Au niveau de l'orbite terrestre, pour un vent de 400 km/s, la ligne de champ fait un angle d'environ 45° avec la direction radiale. C'est la spirale visible sur l'animation (figure 1).

{% include fig-parker.html %}

## 2. La magnétohydrodynamique idéale

À grande échelle, un plasma se décrit comme un fluide conducteur : c'est la magnétohydrodynamique (MHD). L'évolution du champ magnétique est donnée par l'équation d'induction,

$$
\frac{\partial \mathbf{B}}{\partial t} = \nabla \times (\mathbf{u} \times \mathbf{B}) + \frac{\eta}{\mu_0}\nabla^2 \mathbf{B},
$$

où le premier terme transporte le champ avec l'écoulement et le second le fait diffuser. Leur rapport est le nombre de Reynolds magnétique $$R_m = \mu_0 u L/\eta$$. Dans le vent solaire, $$R_m \gg 1$$ : la diffusion est négligeable, c'est la MHD idéale. La loi d'Ohm s'y réduit à

$$
\mathbf{E} = -\,\mathbf{u} \times \mathbf{B}.
$$

Deux conséquences sont au cœur de ma thèse. D'abord, les lignes de champ sont « gelées » dans le plasma et se déplacent avec lui (théorème d'Alfvén) : c'est ce qui dessine la spirale de Parker. Ensuite, un plasma en mouvement porte un champ électrique, dit motionnel ou convectif, perpendiculaire au champ magnétique. Ce champ ne peut pas accélérer les particules le long des lignes de champ, mais il peut travailler sur leurs dérives (section 5).

## 3. Les éjections de masse coronale

Des structures magnétiques torsadées, les tubes de flux, émergent à la surface du Soleil. Lorsque leur équilibre se rompt, l'énergie magnétique accumulée est libérée et une énorme bulle de plasma magnétisé est expulsée : c'est une éjection de masse coronale (CME). Mesurée par une sonde, sa traversée suit une séquence typique [[Kilpua 2017](#ref-kilpua)] :

- **le choc**, où densité, vitesse et champ magnétique sautent brusquement ;
- **la gaine**, une région turbulente où le vent balayé est comprimé et chauffé ;
- **l'éjecta**, le cœur de la CME, où le champ est fort et régulier, et où densité et température baissent à cause de l'expansion.

Ce passage dure de quelques heures à quelques jours.

**Le modèle du sphéromak.** Pour représenter le champ magnétique interne de la CME sans reconstruire la couronne, on peut injecter un sphéromak : une bulle magnétique en équilibre, sans force (force-free),

$$
(\nabla \times \mathbf{B}) \times \mathbf{B} = 0 \iff \nabla \times \mathbf{B} = \lambda \mathbf{B},
$$

dont les solutions s'écrivent avec des fonctions de Bessel [[Vandas 1997](#ref-vandas); [Verbeke 2019](#ref-verbeke)].

**La simulation utilisée.** Dans [[Houeibib 2026](#ref-h26)], un sphéromak de rayon 10,5 R☉ et de champ central 144 nT est injecté à 1028 km/s, dans le plan équatorial, dans un vent de Parker calculé de 0,139 à 13,95 UA. À 1 UA, le choc arrive environ 28 h après l'injection : la densité et le champ magnétique y font plus que doubler. La gaine passe entre 28 et 50 h, l'éjecta entre 50 et 130 h (figure 2). C'est cette simulation que montre l'animation.

{% include fig-cme-profiles.html %}

## 4. Le mouvement d'une particule chargée

Dans un champ magnétique uniforme, une particule de charge $$q$$ et de masse $$m$$ s'enroule autour d'une ligne de champ, à la fréquence et sur le rayon

$$
\Omega_c = \frac{\lvert q\rvert B}{\gamma m}, \qquad r_g = \frac{v_\perp}{\Omega_c},
$$

tout en glissant librement le long du champ. On repère sa direction de vol par l'angle d'attaque $$\alpha$$ (pitch angle), avec $$\mu = \cos\alpha$$.

**L'approximation du centre-guide.** Si le champ varie lentement à l'échelle de la giration, c'est-à-dire si $$r_g \ll \ell_B = B/\lvert\nabla B\rvert$$ et si $$\Omega_c^{-1}$$ est petit devant le temps de variation des champs, on peut ignorer la giration rapide et ne suivre que son centre [[Northrop 1961](#ref-northrop)]. En moyennant sur une giration, on obtient :

$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = v_\parallel \mathbf{b} + \mathbf{v}_E + \frac{\gamma m}{qB}\,\mathbf{b}\times\left[\frac{v_\parallel}{\gamma}\frac{qE_\parallel}{mc^2}\,\mathbf{v}_E + \frac{\mu_B}{\gamma^2 m}\left(\nabla B + \frac{\mathbf{v}_E}{c^2}\,\partial_t B\right) + v_\parallel D_t\mathbf{b} + D_t\mathbf{v}_E\right],
$$

$$
\frac{\mathrm{d}(\gamma v_\parallel)}{\mathrm{d}t} = \frac{q}{m}E_\parallel - \frac{\mu_B}{\gamma m}\,\mathbf{b}\cdot\nabla B + \gamma\,\mathbf{v}_E\cdot D_t\mathbf{b}, \qquad \frac{\mathrm{d}\mu_B}{\mathrm{d}t} = 0,
$$

où $$\mathbf{x}$$ est la position du centre-guide, $$\mathbf{b} = \mathbf{B}/B$$, $$\gamma = (1-v^2/c^2)^{-1/2}$$ le facteur de Lorentz, $$\mu_B = m\gamma^2 v_\perp^2/(2B)$$ le moment magnétique, $$\mathbf{v}_E = \mathbf{E}\times\mathbf{b}/B$$ et $$D_t = \partial_t + (v_\parallel\mathbf{b} + \mathbf{v}_E)\cdot\nabla$$. Ce sont les équations (3) à (5) de [[Houeibib 2026](#ref-h26)], valables pour $$\lvert\mathbf{v}_E\rvert \ll c$$ et pour des champs qui varient dans le temps, comme au passage de la CME ; c'est ce système qu'intègre mon code. Sa version pour des champs stationnaires est donnée dans [[Vandervoort 1960](#ref-vandervoort); [Houeibib 2025a](#ref-h25)].

**Les dérives.** Les termes perpendiculaires au champ sont des dérives :

- la dérive électrique $$\mathbf{v}_E = \mathbf{E} \times \mathbf{B}/B^2$$, identique pour toutes les particules : c'est simplement le mouvement des lignes de champ ;
- les dérives de gradient et de courbure, qui dépendent de la charge (électrons et protons dérivent en sens opposés) :

$$
\mathbf{v}_{\nabla B} = \frac{\gamma m v_\perp^2}{2qB}\,\mathbf{b} \times \nabla \ln B, \qquad \mathbf{v}_{\mathrm{curv}} = \frac{\gamma m v_\parallel^2}{qB}\,\mathbf{b} \times (\mathbf{b} \cdot \nabla)\mathbf{b}.
$$

**La force miroir.** Le moment magnétique $$\mu_B$$ est conservé. Quand une particule entre dans une région de champ plus fort, sa vitesse perpendiculaire augmente et sa vitesse parallèle diminue, jusqu'à s'annuler : la particule est réfléchie. Seules les particules telles que $$\sin^2\alpha < B/B_{\max}$$ franchissent le maximum de champ $$B_{\max}$$ : elles sont dans le cône de perte (figure 3).

{% include fig-centre-guide.html %}

**Pourquoi cette approximation.** Pour un électron relativiste dans un champ de 10 nT, la période de giration est d'environ $$10^{-4}$$ s. Résoudre la giration demanderait des centaines de milliers de pas de temps pour quelques minutes de vol, alors qu'en suivant le centre-guide le pas de temps n'est limité que par les variations des champs : on gagne un facteur de l'ordre de 1000. Pour un proton de 5 GeV dans un champ de 5 nT, $$r_g \approx 0{,}02$$ UA, encore petit devant les échelles du vent ; c'est la limite d'énergie que je me suis fixée.

## 5. La diffusion par la turbulence

Le vent solaire est turbulent. Quand la longueur d'onde d'une fluctuation magnétique est de l'ordre du rayon de giration, la particule entre en résonance avec elle et son angle d'attaque change de façon aléatoire. Comme pour le mouvement brownien, l'écart quadratique de $$\mu$$ croît linéairement avec le temps : c'est une diffusion, caractérisée par un coefficient $$D_{\mu\mu}$$ et par le libre parcours moyen le long du champ [[Jokipii 1966](#ref-jokipii)],

$$
\lambda_\parallel = \frac{3v}{8}\int_{-1}^{+1} \frac{(1-\mu^2)^2}{D_{\mu\mu}(\mu)}\,\mathrm{d}\mu.
$$

Ces fluctuations sont bien trop petites pour être résolues par une simulation MHD de l'héliosphère. Je les représente donc par un modèle de collisions de type sphères dures le long du champ : à chaque pas de temps, une particule qui a parcouru une distance $$\Delta s$$ subit une collision avec la probabilité

$$
p(\Delta s) = 1 - \exp\left(-\frac{\Delta s}{\lambda_\parallel}\right),
$$

et repart avec une nouvelle direction tirée au hasard [[Pantellini 2000](#ref-pantellini)]. Dans mes simulations, $$\lambda_\parallel$$ est constant, entre 0,1 et 1 UA (figure 4). Les collisions ont lieu dans le référentiel du vent, ce qui reproduit le refroidissement adiabatique des particules lorsque le vent se détend.

{% include fig-diffusion.html %}

## 6. Gain et perte d'énergie par dérive

En MHD idéale, le champ électrique est perpendiculaire au champ magnétique. Une particule ne peut donc changer d'énergie qu'en dérivant le long de $$\mathbf{E}$$. Pour l'énergie cinétique $$\mathcal{E} = (\gamma-1)mc^2$$, lorsque $$E_\parallel \ll E_\perp$$ et que les champs varient peu pendant le passage de la particule, on obtient [[Houeibib 2026](#ref-h26)]

$$
\frac{\mathrm{d}\mathcal{E}}{\mathrm{d}t} \simeq m\gamma v_\parallel^2\,\mathbf{v}_E\cdot(\mathbf{b}\cdot\nabla)\mathbf{b} + \frac{\mu_B}{\gamma}\,\mathbf{v}_E\cdot\nabla B = q\,\mathbf{E}\cdot\left(\mathbf{v}_{\mathrm{curv}} + \mathbf{v}_{\nabla B}\right),
$$

Les deux termes correspondent au travail du champ électrique sur les dérives de courbure et de gradient. La dérive électrique $$\mathbf{v}_E$$, bien plus rapide, ne contribue pas : elle est par définition perpendiculaire à $$\mathbf{E}$$.

**Des électrons qui ralentissent** [[Houeibib 2025a](#ref-h25)]. J'ai injecté des électrons de 81 keV à 0,28 UA dans un vent stationnaire. Leurs dérives de courbure et de gradient les emportent vers les pôles, contre la composante principale du champ électrique : ils perdent de l'énergie, à un taux d'environ 10 % par jour pour $$\lambda_\parallel$$ entre 0,1 et 1 UA, maximal vers 1,2 UA. Pendant la première heure et demie, c'est toutefois le refroidissement adiabatique qui domine,

$$
\frac{1}{p^2}\frac{\mathrm{d}p^2}{\mathrm{d}t} = -\frac{4}{3}\frac{v_{sw}}{r},
$$

dans la limite de collisions fréquentes [[Ruffolo 1995](#ref-ruffolo)]. Pour $$\lambda_\parallel = 0{,}5$$ UA, la distribution des angles d'attaque des électrons jeunes reproduit celle mesurée par la sonde WIND lors de l'événement du 20 octobre 2002 [[Dröge 2018](#ref-droge)].

**Des protons accélérés par la CME** [[Houeibib 2026](#ref-h26)]. Plusieurs mécanismes peuvent accélérer des particules près d'un choc [[Desai 2016](#ref-desai); [Klein 2017](#ref-klein)] : les mécanismes de Fermi, par allers-retours à travers le choc ou par interaction avec la turbulence, et l'accélération par dérive au choc. Pour des protons de 5 GeV, les gains de Fermi sont négligeables ; seule compte la dérive. J'ai envoyé ces protons depuis 3 UA vers la CME. Le gain se produit lorsqu'ils parcourent la portion de ligne de champ située en aval de la partie quasi perpendiculaire du choc, là où le champ est fortement comprimé :

$$
\Delta \mathcal{E} \simeq \frac{\mu_B}{\gamma}\,\Delta t_c\,\mathbf{v}_E \cdot \nabla B,
$$

où $$\Delta t_c$$ est le temps passé dans la région d'accélération. C'est le travail du champ électrique sur la dérive de gradient, très proche de l'accélération par dérive au choc. Chaque passage n'apporte que quelques pour cent ; les grands gains, de plusieurs GeV, demandent de nombreux passages, rendus possibles par la combinaison de la force miroir et de la diffusion. L'efficacité est maximale lorsque le choc est vers 0,3 UA, elle varie comme $$\lambda_\parallel^{-3/2}$$ sur quelques heures, et les spectres d'énergie se durcissent quand $$\lambda_\parallel$$ diminue (figure 5).

{% include fig-acceleration.html %}

**Limites.** Dans la simulation, le choc est élargi par la diffusion numérique, alors qu'un vrai choc est bien plus fin que le rayon de giration d'un proton de 5 GeV : l'approximation du centre-guide n'y est plus rigoureusement valide. Le mécanisme, fondé sur la conservation du moment magnétique, reste qualitativement établi, mais les spectres obtenus sont des diagnostics de l'expérience numérique, pas des prédictions des spectres observés.

## 7. Les méthodes numériques

**Le vent et la CME : MPI-AMRVAC.** Les équations de la MHD sont des lois de conservation, résolues par une méthode de volumes finis avec le code MPI-AMRVAC [[Keppens 2023](#ref-keppens)], sur une grille sphérique de 144 × 48 × 128 cellules, étirée en rayon.

**Les particules : WINTERFELL.** J'ai développé ce code de particules test en C++, parallélisé avec MPI. À chaque pas de temps, il effectue trois opérations :

1. **interpoler** les champs MHD à la position de la particule, dans des grilles VTK quelconques ;
2. **intégrer** les équations du centre-guide relativistes avec un schéma prédicteur-correcteur, Adams-Bashforth d'ordre 2 puis Adams-Moulton d'ordre 3 [[Mignone 2023](#ref-mignone)], avec un pas de temps adaptatif limité par l'échelle de variation du champ et par le libre parcours moyen ;
3. **diffuser** la particule selon le modèle de collisions de la section 5.

Le code a été validé sur un électron de 100 MeV piégé dans le champ dipolaire de Jupiter, dont la trajectoire et la dérive autour de la planète sont connues analytiquement. Il est environ dix fois plus rapide que mon premier prototype en Python.

</div>
<div class="en" markdown="1">

This page follows, in shorter form, the thread of my PhD thesis [[Houeibib 2025b](#ref-these)]. Each section builds on the previous one, and the results point to the two papers that establish them: electrons in a quiet wind [[Houeibib 2025a](#ref-h25)], then protons facing a coronal mass ejection [[Houeibib 2026](#ref-h26)]. The notation follows these papers.

## 1. The solar wind and the Parker spiral

The solar corona, heated to over a million kelvin, cannot remain in hydrostatic equilibrium: it flows continuously into space. This is the solar wind, first described by Parker [[Parker 1958](#ref-parker)]. For a steady, spherically symmetric isothermal gas, the radial speed $$u$$ obeys

$$
\left(\frac{u^2}{c_s^2} - 1\right)\frac{1}{u}\frac{\mathrm{d}u}{\mathrm{d}r} = \frac{2}{r}\left(1 - \frac{r_c}{r}\right), \qquad r_c = \frac{GM_\odot}{2c_s^2},
$$

where $$c_s$$ is the sound speed. Of the possible solutions, only one is observed: the one that passes smoothly from subsonic to supersonic at the critical radius $$r_c$$. The wind thus reaches 300 to 500 km/s at low latitudes (slow wind) and 700 to 800 km/s above the poles (fast wind).

The wind carries the Sun's magnetic field with it (section 2). Since the footpoints of the field lines rotate with the Sun at angular speed $$\Omega$$, the lines wind up into a spiral:

$$
B_r = B_0\left(\frac{r_0}{r}\right)^2, \qquad B_\varphi = -B_r\,\frac{\Omega r \sin\theta}{u}.
$$

At Earth's orbit, for a 400 km/s wind, the field line makes an angle of about 45° with the radial direction. This is the spiral seen in the animation (figure 1).

{% include fig-parker.html %}

## 2. Ideal magnetohydrodynamics

On large scales, a plasma behaves as a conducting fluid: this is magnetohydrodynamics (MHD). The magnetic field evolves according to the induction equation,

$$
\frac{\partial \mathbf{B}}{\partial t} = \nabla \times (\mathbf{u} \times \mathbf{B}) + \frac{\eta}{\mu_0}\nabla^2 \mathbf{B},
$$

where the first term carries the field with the flow and the second makes it diffuse. Their ratio is the magnetic Reynolds number $$R_m = \mu_0 u L/\eta$$. In the solar wind, $$R_m \gg 1$$: diffusion is negligible, and we are in ideal MHD. Ohm's law then reduces to

$$
\mathbf{E} = -\,\mathbf{u} \times \mathbf{B}.
$$

Two consequences are central to my thesis. First, field lines are "frozen" into the plasma and move with it (Alfvén's theorem): this is what draws the Parker spiral. Second, a moving plasma carries an electric field, called motional or convective, perpendicular to the magnetic field. This field cannot accelerate particles along field lines, but it can do work on their drifts (section 5).

## 3. Coronal mass ejections

Twisted magnetic structures, flux ropes, emerge at the surface of the Sun. When their equilibrium breaks, the stored magnetic energy is released and a huge bubble of magnetised plasma is expelled: a coronal mass ejection (CME). As measured by a spacecraft, its passage follows a typical sequence [[Kilpua 2017](#ref-kilpua)]:

- **the shock**, where density, speed and magnetic field jump abruptly;
- **the sheath**, a turbulent region where the swept-up wind is compressed and heated;
- **the ejecta**, the core of the CME, where the field is strong and smooth, and density and temperature drop because of expansion.

This passage lasts from a few hours to a few days.

**The spheromak model.** To represent the internal magnetic field of the CME without reconstructing the corona, one can inject a spheromak: a magnetic bubble in force-free equilibrium,

$$
(\nabla \times \mathbf{B}) \times \mathbf{B} = 0 \iff \nabla \times \mathbf{B} = \lambda \mathbf{B},
$$

whose solutions are written with Bessel functions [[Vandas 1997](#ref-vandas); [Verbeke 2019](#ref-verbeke)].

**The simulation used.** In [[Houeibib 2026](#ref-h26)], a spheromak of radius 10.5 R☉ and central field 144 nT is injected at 1028 km/s, in the equatorial plane, into a Parker wind computed from 0.139 to 13.95 AU. At 1 AU, the shock arrives about 28 h after injection: the density and the magnetic field more than double. The sheath passes between 28 and 50 h, the ejecta between 50 and 130 h (figure 2). This is the simulation shown in the animation.

{% include fig-cme-profiles.html %}

## 4. The motion of a charged particle

In a uniform magnetic field, a particle of charge $$q$$ and mass $$m$$ spirals around a field line, at the frequency and on the radius

$$
\Omega_c = \frac{\lvert q\rvert B}{\gamma m}, \qquad r_g = \frac{v_\perp}{\Omega_c},
$$

while sliding freely along the field. Its direction of flight is given by the pitch angle $$\alpha$$, with $$\mu = \cos\alpha$$.

**The guiding-centre approximation.** If the field varies slowly on the scale of the gyration, that is if $$r_g \ll \ell_B = B/\lvert\nabla B\rvert$$ and $$\Omega_c^{-1}$$ is small compared with the time over which the fields change, one can ignore the fast gyration and follow only its centre [[Northrop 1961](#ref-northrop)]. Averaging over a gyration gives:

$$
\frac{\mathrm{d}\mathbf{x}}{\mathrm{d}t} = v_\parallel \mathbf{b} + \mathbf{v}_E + \frac{\gamma m}{qB}\,\mathbf{b}\times\left[\frac{v_\parallel}{\gamma}\frac{qE_\parallel}{mc^2}\,\mathbf{v}_E + \frac{\mu_B}{\gamma^2 m}\left(\nabla B + \frac{\mathbf{v}_E}{c^2}\,\partial_t B\right) + v_\parallel D_t\mathbf{b} + D_t\mathbf{v}_E\right],
$$

$$
\frac{\mathrm{d}(\gamma v_\parallel)}{\mathrm{d}t} = \frac{q}{m}E_\parallel - \frac{\mu_B}{\gamma m}\,\mathbf{b}\cdot\nabla B + \gamma\,\mathbf{v}_E\cdot D_t\mathbf{b}, \qquad \frac{\mathrm{d}\mu_B}{\mathrm{d}t} = 0,
$$

where $$\mathbf{x}$$ is the guiding-centre position, $$\mathbf{b} = \mathbf{B}/B$$, $$\gamma = (1-v^2/c^2)^{-1/2}$$ the Lorentz factor, $$\mu_B = m\gamma^2 v_\perp^2/(2B)$$ the magnetic moment, $$\mathbf{v}_E = \mathbf{E}\times\mathbf{b}/B$$ and $$D_t = \partial_t + (v_\parallel\mathbf{b} + \mathbf{v}_E)\cdot\nabla$$. These are equations (3) to (5) of [[Houeibib 2026](#ref-h26)], valid for $$\lvert\mathbf{v}_E\rvert \ll c$$ and for fields that vary in time, as when the CME goes by; this is the system my code integrates. Its version for steady fields is given in [[Vandervoort 1960](#ref-vandervoort); [Houeibib 2025a](#ref-h25)].

**Drifts.** The terms perpendicular to the field are drifts:

- the electric drift $$\mathbf{v}_E = \mathbf{E} \times \mathbf{B}/B^2$$, the same for all particles: it is simply the motion of the field lines;
- the gradient and curvature drifts, which depend on the charge (electrons and protons drift in opposite directions):

$$
\mathbf{v}_{\nabla B} = \frac{\gamma m v_\perp^2}{2qB}\,\mathbf{b} \times \nabla \ln B, \qquad \mathbf{v}_{\mathrm{curv}} = \frac{\gamma m v_\parallel^2}{qB}\,\mathbf{b} \times (\mathbf{b} \cdot \nabla)\mathbf{b}.
$$

**The mirror force.** The magnetic moment $$\mu_B$$ is conserved. When a particle enters a region of stronger field, its perpendicular speed increases and its parallel speed decreases, down to zero: the particle is reflected. Only particles with $$\sin^2\alpha < B/B_{\max}$$ get past the field maximum $$B_{\max}$$: they are in the loss cone (figure 3).

{% include fig-centre-guide.html %}

**Why this approximation.** For a relativistic electron in a 10 nT field, the gyration period is about $$10^{-4}$$ s. Resolving the gyration would take hundreds of thousands of time steps for a few minutes of flight, whereas when following the guiding centre the time step is limited only by the variations of the fields: the gain is of order 1000. For a 5 GeV proton in a 5 nT field, $$r_g \approx 0.02$$ AU, still small compared with the scales of the wind; this is the energy limit I set myself.

## 5. Scattering by turbulence

The solar wind is turbulent. When the wavelength of a magnetic fluctuation is comparable to the gyroradius, the particle resonates with it and its pitch angle changes randomly. As in Brownian motion, the mean square change of $$\mu$$ grows linearly with time: this is diffusion, characterised by a coefficient $$D_{\mu\mu}$$ and by the mean free path along the field [[Jokipii 1966](#ref-jokipii)],

$$
\lambda_\parallel = \frac{3v}{8}\int_{-1}^{+1} \frac{(1-\mu^2)^2}{D_{\mu\mu}(\mu)}\,\mathrm{d}\mu.
$$

These fluctuations are far too small to be resolved by an MHD simulation of the heliosphere. I therefore represent them with a hard-sphere collision model along the field: at each time step, a particle that has travelled a distance $$\Delta s$$ undergoes a collision with probability

$$
p(\Delta s) = 1 - \exp\left(-\frac{\Delta s}{\lambda_\parallel}\right),
$$

and leaves in a new, randomly drawn direction [[Pantellini 2000](#ref-pantellini)]. In my simulations, $$\lambda_\parallel$$ is constant, between 0.1 and 1 AU (figure 4). Collisions take place in the frame of the wind, which reproduces the adiabatic cooling of particles as the wind expands.

{% include fig-diffusion.html %}

## 6. Energy gain and loss through drifts

In ideal MHD, the electric field is perpendicular to the magnetic field. A particle can therefore only change energy by drifting along $$\mathbf{E}$$. For the kinetic energy $$\mathcal{E} = (\gamma-1)mc^2$$, when $$E_\parallel \ll E_\perp$$ and the fields change little while the particle goes by, one obtains [[Houeibib 2026](#ref-h26)]

$$
\frac{\mathrm{d}\mathcal{E}}{\mathrm{d}t} \simeq m\gamma v_\parallel^2\,\mathbf{v}_E\cdot(\mathbf{b}\cdot\nabla)\mathbf{b} + \frac{\mu_B}{\gamma}\,\mathbf{v}_E\cdot\nabla B = q\,\mathbf{E}\cdot\left(\mathbf{v}_{\mathrm{curv}} + \mathbf{v}_{\nabla B}\right),
$$

The two terms are the work of the electric field on the curvature and gradient drifts. The electric drift $$\mathbf{v}_E$$, although much faster, does not contribute: by definition it is perpendicular to $$\mathbf{E}$$.

**Electrons that slow down** [[Houeibib 2025a](#ref-h25)]. I injected 81 keV electrons at 0.28 AU into a steady wind. Their curvature and gradient drifts carry them poleward, against the dominant component of the electric field: they lose energy, at a rate of about 10% per day for $$\lambda_\parallel$$ between 0.1 and 1 AU, highest near 1.2 AU. During the first hour and a half, however, adiabatic cooling dominates,

$$
\frac{1}{p^2}\frac{\mathrm{d}p^2}{\mathrm{d}t} = -\frac{4}{3}\frac{v_{sw}}{r},
$$

in the limit of frequent collisions [[Ruffolo 1995](#ref-ruffolo)]. For $$\lambda_\parallel = 0.5$$ AU, the pitch-angle distribution of young electrons matches the one measured by the WIND spacecraft during the 20 October 2002 event [[Dröge 2018](#ref-droge)].

**Protons accelerated by the CME** [[Houeibib 2026](#ref-h26)]. Several mechanisms can accelerate particles near a shock [[Desai 2016](#ref-desai); [Klein 2017](#ref-klein)]: Fermi mechanisms, through repeated shock crossings or interaction with turbulence, and shock drift acceleration. For 5 GeV protons, Fermi gains are negligible; only the drift matters. I sent these protons from 3 AU towards the CME. The gain occurs while they travel along the part of a field line downstream of the quasi-perpendicular portion of the shock, where the field is strongly compressed:

$$
\Delta \mathcal{E} \simeq \frac{\mu_B}{\gamma}\,\Delta t_c\,\mathbf{v}_E \cdot \nabla B,
$$

where $$\Delta t_c$$ is the time spent in the acceleration region. This is the work of the electric field on the gradient drift, closely analogous to shock drift acceleration. Each passage brings only a few percent; large gains, of several GeV, require many passages, made possible by the combination of the mirror force and scattering. The efficiency peaks when the shock is near 0.3 AU, scales as $$\lambda_\parallel^{-3/2}$$ over a few hours, and the energy spectra harden as $$\lambda_\parallel$$ decreases (figure 5).

{% include fig-acceleration.html %}

**Limitations.** In the simulation, the shock is broadened by numerical diffusion, whereas a real shock is much thinner than the gyroradius of a 5 GeV proton: the guiding-centre approximation is then no longer strictly valid there. The mechanism, based on the conservation of the magnetic moment, remains qualitatively established, but the spectra obtained are diagnostics of the numerical experiment, not predictions of observed spectra.

## 7. Numerical methods

**The wind and the CME: MPI-AMRVAC.** The MHD equations are conservation laws, solved with a finite-volume method in the MPI-AMRVAC code [[Keppens 2023](#ref-keppens)], on a spherical grid of 144 × 48 × 128 cells, stretched in radius.

**The particles: WINTERFELL.** I developed this test-particle code in C++, parallelised with MPI. At each time step it performs three operations:

1. **interpolate** the MHD fields at the particle position, on arbitrary VTK grids;
2. **integrate** the relativistic guiding-centre equations with a predictor-corrector scheme, second-order Adams-Bashforth then third-order Adams-Moulton [[Mignone 2023](#ref-mignone)], with an adaptive time step limited by the scale of variation of the field and by the mean free path;
3. **scatter** the particle according to the collision model of section 5.

The code was validated on a 100 MeV electron trapped in Jupiter's dipole field, whose trajectory and drift around the planet are known analytically. It is about ten times faster than my first Python prototype.

</div>

<h2><span class="fr">Références</span><span class="en">References</span></h2>

<div class="refs" markdown="1">
- <span id="ref-h25"></span>**Houeibib 2025a** — A. Houeibib, F. Pantellini, L. Griton, « Dynamics of energetic electrons scattered in the solar wind: Magnetohydrodynamics and test-particle simulations », *A&A* 694, A211 (2025). [doi:10.1051/0004-6361/202451436](https://doi.org/10.1051/0004-6361/202451436)
- <span id="ref-h26"></span>**Houeibib 2026** — A. Houeibib, F. Pantellini, L. Griton, « Acceleration of relativistic protons in a solar wind perturbed by a coronal mass ejection », *A&A* (2026). [doi:10.1051/0004-6361/202659655](https://doi.org/10.1051/0004-6361/202659655)
- <span id="ref-these"></span>**Houeibib 2025b** — A. Houeibib, *Accélération de particules énergétiques dans les éjections de masse coronale*, thèse de doctorat, Observatoire de Paris (2025). [HAL : tel-05556589](https://theses.hal.science/tel-05556589)
- <span id="ref-desai"></span>**Desai 2016** — M. Desai, J. Giacalone, « Large gradual solar energetic particle events », *Living Rev. Sol. Phys.* 13, 3 (2016).
- <span id="ref-droge"></span>**Dröge 2018** — W. Dröge et al., « Transport Modeling of Interplanetary Electrons in the 2002 October 20 Solar Particle Event », *ApJ* 869, 168 (2018).
- <span id="ref-jokipii"></span>**Jokipii 1966** — J. R. Jokipii, « Cosmic-Ray Propagation. I. Charged Particles in a Random Magnetic Field », *ApJ* 146, 480 (1966).
- <span id="ref-keppens"></span>**Keppens 2023** — R. Keppens et al., « MPI-AMRVAC 3.0: Updates to an open-source simulation framework », *A&A* 673, A66 (2023).
- <span id="ref-kilpua"></span>**Kilpua 2017** — E. Kilpua, H. E. J. Koskinen, T. I. Pulkkinen, « Coronal mass ejections and their sheath regions in interplanetary space », *Living Rev. Sol. Phys.* 14, 5 (2017).
- <span id="ref-klein"></span>**Klein 2017** — K.-L. Klein, S. Dalla, « Acceleration and Propagation of Solar Energetic Particles », *Space Sci. Rev.* 212, 1107 (2017).
- <span id="ref-mignone"></span>**Mignone 2023** — A. Mignone, H. Haudemand, E. Puzzoni, « A guiding center implementation for relativistic particle dynamics in the PLUTO code », *Comput. Phys. Commun.* 285, 108625 (2023).
- <span id="ref-northrop"></span>**Northrop 1961** — T. G. Northrop, « The guiding center approximation to charged particle motion », *Ann. Phys.* 15, 79 (1961).
- <span id="ref-pantellini"></span>**Pantellini 2000** — F. Pantellini, « A simple numerical model to simulate a gas in a constant gravitational field », *Am. J. Phys.* 68, 61 (2000).
- <span id="ref-parker"></span>**Parker 1958** — E. N. Parker, « Dynamics of the Interplanetary Gas and Magnetic Fields », *ApJ* 128, 664 (1958).
- <span id="ref-ruffolo"></span>**Ruffolo 1995** — D. Ruffolo, « Effect of adiabatic deceleration on the focused transport of solar cosmic rays », *ApJ* 442, 861 (1995).
- <span id="ref-vandas"></span>**Vandas 1997** — M. Vandas et al., « Flux ropes and spheromaks: A numerical study », *Geophys. Monogr. Ser.* 99, 169 (1997).
- <span id="ref-vandervoort"></span>**Vandervoort 1960** — P. O. Vandervoort, « The relativistic motion of a charged particle in an inhomogeneous electromagnetic field », *Ann. Phys.* 10, 401 (1960).
- <span id="ref-verbeke"></span>**Verbeke 2019** — C. Verbeke, J. Pomoell, S. Poedts, « The evolution of coronal mass ejections in the inner heliosphere: Implementing the spheromak model with EUHFORIA », *A&A* 627, A111 (2019).
</div>

<h2><span class="fr">Mes publications sur ce sujet</span><span class="en">My publications on this topic</span></h2>

<div markdown="0">{% include pubs.html topic="cme" %}</div>

</div></div>
