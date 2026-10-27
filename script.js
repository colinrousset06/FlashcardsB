const decks = [
    // ==========================================
    // 1. ANALYSE DE FOURIER - CHAPITRE 1
    // ==========================================
    {
        id: "fourier-ch1",
        category: "ANALYSE DE FOURIER",
        title: "Chapitre 1 : Topologie & Analyse dans R^n",
        color: "#d97736", // Orange
        icon: "📜",
        description: "Enoncés, théorèmes, propositions et propriétés fondamentales des espaces vectoriels normés et de la topologie.",
        cards: [
            { question: "Un Espace Vectoriel", answer:"ensemble muni d'un + vectoriel, un * scalaire et qui possède l'asssociativité, la distributivité, l'élement neutre, l'oposé..."},
            { question: "Propriété : Inégalité de Cauchy-Schwarz", answer: "Pour tous x, y dans ℝ^n, le produit scalaire vérifie |<x, y>| <= ||x||_2 * ||y||_2." },
            { question: "Propriété : Inégalité de Minkowski", answer: "Pour tout p >= 1 et tous x, y, la norme p de la somme vérifie ||x + y||_p <= ||x||_p + ||y||_p." },
            { question: "Définition : Semi-norme", answer: "Application vérifiant l'homogénéité (||ax|| = |a|*||x||) et l'inégalité triangulaire (||x+y|| <= ||x|| + ||y||), pouvant s'annuler sur un vecteur non nul." },
            { question: "Définition : Norme", answer: "Semi-norme ∥ ∥ : E ->  R+ tel que  : ||x|| = 0 implique x = 0." },
            { question: "Définition : Espace vectoriel normé (EVN)", answer: "Espace vectoriel muni d'une norme." },
            { question: "Définition : boule ouverte de centre x et rayon r", answer: "B(x,r)={y∈E;∥y−x∥<r}" },
            { question: "Définition : boule fermée de centre x et rayon r", answer: "B(avec barre) (x,r) = {y ∈ E;∥y −x∥ ≤ r}" },
            { question: "Définition : Un ouvert U ⊂ E", answer: " Un ouvert U ⊂ E est un ensemble tel que pour tout x ∈ U, il existe un rayon r > 0 tel que la boule ouverte B(x,r) soit incluse dans U :∀x ∈ U, ∃r >0 ; B(x,r) ⊂U" },
            { question: "Définition : Un voisinage de x ∈ E", answer: "Un voisinage de x ∈ E est un ouvert Vx ⊂ E contenant x." },
            { question: "Définition : Un fermé F ⊂ E ", answer: "Un fermé F ⊂ E est un ensemble dont le complémentaire E privé de F est un ouvert, F est fermé ⇔ ∀x ∈ E privé de F, ∃r >0 ; B(x,r)⊂E privé de F" },
            { question: "Définition : Distance induite par une norme", answer: "d(x, y) = ||x - y||." },
            { question: "Proposition : Stabilité des ouverts", answer: "Une union quelconque d'ouverts est un ouvert. Une intersection finie d'ouverts est un ouvert." },
            { question: "Proposition : Stabilité des fermés", answer: "Une intersection quelconque de fermés est un fermé. Une union finie de fermés est un fermé." },
            { question: "Proposition : Caractérisation séquentielle d'un fermé", answer: "Un ensemble F est fermé si et seulement si toute suite convergente d'éléments de F a sa limite dans F." },
            { question: "Proposition : Continuité et ouverts/fermés", answer: "Une application f est continue si et seulement si l'image réciproque de tout ouvert est un ouvert (ou l'image réciproque de tout fermé est un fermé)." },
            { question: "Définition : Intérieur d'un ensemble", answer: "L’intérieur d’un ensemble A ⊂ E, noté ˚A, est l’ensemble des points x ∈ A pour lesquels il existe un rayon r > 0 tel que B(x,r) ⊂ A. Le plus grand ouvert inclus dans l'ensemble (réunion de tous les ouverts inclus)." },
            { question: "Définition : Adhérence d'un ensemble", answer: "L’adhérence d’un ensemble A ⊂ E (on dit aussi fermeture de A), notée A barre, est l’ensemble des points x ∈ E tels que : ∀r > 0, B(x,r)∩ A̸ = ∅. Le plus petit fermé contenant l'ensemble (ensemble des limites de suites d'éléments de l'ensemble)." },
            { question: "Définition : Frontière d'un ensemble", answer: "La frontière d’un ensemble U ⊂ E, notée ∂U, est l’ensemble des points x ∈E tels que : ∀r > 0, B(x,r)∩U ̸ =∅ et B(x,r)∩(E privé de U) ̸=∅. C’est l’ensemble des points qui « touchent » à la fois l’intérieur et l’extérieur de U. ∂A = A barre \ A˚" },
            { question: "Proposition : Soit A ⊂ E et x ∈ E. Alors x ∈ A barre (adhérance) ssi ? ", answer: " Soit A ⊂ E et x ∈ E. Alors x ∈ A ssi il existe une suite (xn) ⊂ A telle que xn → x" },
            { question: "Proposition :  Soient (X,∥ · ∥X) et (Y,∥ · ∥Y) deux espaces vectoriels normés. Pour f : X → Y, il y a équivalence entre (i) f est continue (en tout point de X) et ? ", answer: " (i) f est continue (en tout point de X). <=> (ii) Pour tout ouvert U ⊂ Y, l’image réciproque f−1(U) est un ouvert de X. " },
            { question: "Définition : Une topologie sur un espace vectoriel normé (E,∥ · ∥)", answer: " Une topologie sur un espace vectoriel normé (E,∥ · ∥) est engendrée par l’ensemble des parties ouvertes de E " },

            { question: "Définition : Un ensemble K ⊂ E est dit compact dans un espace vectoriel normé E", answer: "Un ensemble K ⊂ E est dit compact dans un espace vectoriel normé E , si toute suite (xn) de K admet une sous-suite convergente dans K (on dit aussi que K est séquentiellement compact)" },
            { question: "Théorème 3.1 : Lemme de Lebesgue", answer: "Soit K compact et (Ui) un recouvrement ouvert. Il existe delta > 0 tel que toute boule de rayon < delta centrée dans K est incluse dans un des Ui. ( I.e. : ∃δ > 0;∀x ∈ K, ∃i B(x,δ) ⊂ Ui)" },
            { question: "Théorème 3.2 : Caractérisation de Borel-Lebesgue", answer: "Un sous-ensemble K d'un EVN est compact si et seulement si de tout recouvrement d'ouverts de K on peut extraire un recouvrement fini." },
            { question: "Théorème 3.3 : Théorème de Heine-Borel", answer: "Dans ℝ^n, un sous-ensemble est compact si et seulement s'il est fermé et borné." },
            { question: "Théorème 3.4 : Bolzano-Weierstrass dans ℝ^n", answer: "Toute suite bornée dans ℝ^n admet une sous-suite convergente." },

            { question: "Proposition 4.4 : Image d'un compact par une fonction continue", answer: "L'image d'un compact par une application continue est un compact." },
            { question: "Proposition 4.5 : Toute fct C° sur un compact est : ", answer: "Toute fonction continue sur un compact est bornée." },
            { question: "Théorème 4.1 : Théorème de Heine", answer: "Toute fonction continue d'un compact K dans ℝ^n est uniformément continue sur K." },
           
            { question: "Définition : Suite de Cauchy", answer: "Suite dont les termes se rapprochent arbitrairement les uns des autres lorsque les indices grandissent. et ∀ε > 0, ∃N ∈N, ∀m,n≥N, ∥xn−xm∥<ε." },
            { question: "Définition : Espace de Banach", answer: "Espace vectoriel normé complet (toute suite de Cauchy y converge)." },
            { question: "Proposition 4.6 : Soit K ⊂ Rn un compact, et (E,∥ · ∥E) un espace de Banach. Alors l'Espace C(K, E) ?", answer: "Pour K compact et E de Banach, l'espace des fonctions continues muni de la norme uniforme ||f||_inf = sup ||f(x)||_E est un espace de Banach." },
            { question: "Prop : . Soit (X,∥ · ∥) un espace normé et Y ⊂ X muni de la norme induite, Si Y est complet ? ", answer: "Si Y est complet, alors Y est fermé dans X" },
            { question: "Prop : . Soit (X,∥ · ∥) un espace normé et Y ⊂ X muni de la norme induite, Si X est complet et Y est fermé dans X ?", answer: "Si X est complet et Y est fermé dans X, alors Y est complet." },
            { question: "Proposition 4.2 : L’ensemble R, muni de la valeur absolue comme norme | · | est :", answer: "C' un espace complet." },
            { question: "Proposition 4.3 :  L’espace Rn muni de la norme euclidienne est :", answer: "L’espace Rn muni de la norme euclidienne est complet." },
            { question: "Tout espace vectoriel normé de dimension finie est un e_______ d_ B_______" , answer: "Tout espace vectoriel normé de dimension finie est un espace de Banach."},
            { question: "Proposition. Soient E et F deux espaces de Banach, et soit T : E → F une application linéaire. Les assertions suivantes sont équivalentes :" , answer:"1. T est continue; 2. T est continue en un point; 3. T est bornée; 4. T est Lipschitzienne sur E."},
            { question: "Définition : Qu'est-ce qu'un bornée (T)", answer: "il existe C > 0 tel que pour tout x ∈ E, ∥T(x)∥F ≤ C∥x∥E " },
            
            { question: "Théorème 5.1 : Équivalence des normes en dimension finie", answer: "Sur un espace vectoriel de dimension finie, toutes les normes sont équivalentes, alors il existe des constantes strictement positives C1 et C2 telles que pour tout x ∈ E : C1∥x∥a ≤ ∥x∥b ≤ C2∥x∥a. Les normes ∥x∥p, 1 ≤ p ≤ +∞, sont toutes équivalentes sur Rn" },
            { question: "Définition : Le dual topologique de E, noté E′ ou E∗, est :", answer: "Espace vectoriel muni d'un produit scalaire. S'il est complet pour la norme associée, c'est un espace de Hilbert." },

            { question: "Définition : Espace préhilbertien et Hilbert", answer: " Soit E un espace vectoriel normé sur K = R ou C. Le dual topologique de E, noté E′ ou E∗, est l’ensemble des applications linéaires continues de E dans K. Norme du dual : ∥f∥E∗ = sup (x∈E x̸=0) [(/f(x)/)/∥x∥], Cela fait de E∗ un espace vectoriel normé.  L’espace (E∗,∥f∥E∗) est un espace de Banach, i.e. il est complet." },
            { question: "Définition : Un espace de Hilbert est un espace vectoriel normé H", answer: "Un espace de Hilbert est un espace vectoriel normé H sur K = R ou C, muni d’un produit scalaire ⟨·,·⟩ tel que la norme soit induite par celui-ci : ∥x∥ = racine de ⟨x, x⟩. De plus, l’espace est complet pour cette norme." },

            { question: "Théorème de la projection orthogonale", answer: "Soit H un espace de Hilbert, et F ⊂ H un sous-espace vectoriel fermé. Alors pour tout x ∈ H, il existe un unique y ∈ F tel que : ∥x −y∥ = inf (z∈F) [∥x −z∥]. Ce vecteur y est appelé la projection orthogonale de x sur F, noté PF(x). Il est caractérisé par : x−y ⊥ F" },
            { question: "Théorème de représentation de Riesz (Hilbert)", answer: "Toute forme linéaire continue f sur un espace de Hilbert H s'écrit de manière unique f(x) = <x, y> pour un certain y dans H." },
           
            { question: " (Bonus) Proposition : Complétude des sous-espaces", answer: "Tout sous-espace fermé d'un espace de Banach est un espace de Banach." },
            { question: " (Bonus) Propriété : Compacts et fermés bornés", answer: "Tout compact dans un espace métrique est fermé et borné (la réciproque est fausse en dimension infinie)." },
            { question: " (Bonus) Définition : Continuité lipschitzienne", answer: "Il existe K > 0 tel que ||f(x) - f(y)|| <= K ||x - y|| pour tout x, y." },
            { question: " (Bonus) Proposition : Connexité par arcs", answer: "L'image d'un connexe par une application continue est connexe." }
        ]
    },

    // ==========================================
    // 2. ANALYSE DE FOURIER - CHAPITRE 2
    // ==========================================
    {
        id: "fourier-ch2",
        category: "ANALYSE DE FOURIER",
        title: "Chapitre 2 : Intégrale de Lebesgue",
        color: "#689f78", // Vert
        icon: "📐",
        description: "Tribus, mesures, fonctions mesurables, intégrale de Lebesgue, théorèmes de convergence et espaces L^p.",
        cards: [

            { question: "Définition : L’intagrale de Riemann", answer: "L’intagrale de Riemann repose sur l’idée suivante : pour calculer l’aire sous une courbe f définie sur un intervalle [a,b], on découpe cet intervalle en petits sous-intervalles, puis on somme les aires de rectangles qui approchent la courbe." },          
            { question: "Définition 3.1 : Tribu (ou sigma-algèbre)", answer: "Collection de sous-ensembles d'un ensemble X stable par passage au complémentaire et par union dénombrable. (i) X ∈A (ii) Si B ∈ A, alors B**c = X \B ∈A ; 3. Si (Bn)n∈N ⊂ A, alors U Bn ∈ A" },
            { question: "Propriété : Stabilité des tribus", answer: "Une tribu est également stable par intersection dénombrable, union finie et intersection finie." },
            { question: "Définition 3.2 : Tribu borélienne sur ℝ^n", answer: "Tribu engendrée par les ouverts de ℝ^n (notée B(ℝ^n))." },
            { question: "Définition 3.3 : Tribu borélienne sur un ouvert", answer: "Tribu induite sur un ouvert Omega par intersection avec les boréliens de ℝ^n. (B(Ω) = {A∩Ω|A∈B(Rn)})" },
            { question: "Définition 3.4 : Espace mesurable", answer: "Couple (X, A) formé d'un ensemble X et d'une tribu A sur X." },

            { question: "Définition 3.5 : Mesure positive", answer: "Application mu de A dans [0, +inf] telle que mu(∅) = 0 et sigma-additive pour des ensembles disjoints mu(U An) = Somme(mu(An))." },
            { question: "Définition : Mesure de Dirac", answer: "A c X, Mesure delta_x0 définie sur (X, P(X)) valant 1 si x0 ∈ A et 0 sinon." },
            { question: "Définition : Mesure de comptage", answer: "Mesure associant à un ensemble son nombre d'éléments s'il est fini, ou +inf s'il est infini. µ est bien une mesure positive sur (X,P(X))" },
            { question: "Exemple : La mesure de Lebesgue sur R, est l’unique mesure notée λ, telle que :", answer: " (i) Elle associe chaque intervalle [a,b] ⊂ R sa longueur : λ([a, b]) = b − a. (ii) Elle est invariante par translation : pour tout x ∈ R, λ(A + x) = λ(A)."},
            { question: "Exemple : La mesure de Lebesgue sur R s'étend sur quoi :", answer: "Elle s’étend une mesure bien définie sur la tribu de Borel de R, (puis une tribu plus large appelée la tribu de Lebesgue!)"
            { question: "Exemple : La mesure de Lebesgue sur R**N :", answer: "La mesure de Lebesgue sur R**N est une généralisation de la notion de (longueur, d'aire, volume) à des ensembles beaucoup plus généraux que les seuls pavés ou domaines réguliers." },

            { question: "Définition : Un espace mesuré est un triplet (X,A,µ) où :", answer:"X est un ensemble, A est une tribu sur X, µ est une mesure sur A"},
            { question: "Définition 4.1 : Fonction mesurable", answer: "Fonction f : X -> R barre telle que pour tout a dans R, l'ensemble {x | f(x) > a} appartient à la tribu A." },
            { question: "Remarque 4.1 : Équivalences de mesurabilité", answer: "La condition f(x) > a peut être remplacée par f(x) >= a, f(x) < a ou f(x) <= a." },
            { question: "Exemple 4.1 : Toute fonction continue f : R → R est :", answer: "Toute fonction continue f : R → R est mesurable (par rapport la tribu de Borel)." },
            { question: "Exemple 4.2 : La fonction indicatrice/ fonction en escalier est :", answer: "La fonction indicatrice/ en escalier f(x) = somme(ak) (quand ak est entre xk-1 et xk) est mesurable" },      
            { question: "Théorème 4.1 : Stabilité par composition", answer: "La composée de deux fonctions mesurables est mesurable." },
            
            { question: "Propriété 4.1 : Stabilité algébrique des fonctions mesurables", answer: "Si f et g sont mesurables, alors f+g, f*g, |f|, min(f,g) et max(f,g) sont mesurables." },
            { question: "Théorème 4.2 : Stabilité par opérations limites", answer: "Le supremum, l'infimum, la limsup et la liminf d'une suite de fonctions mesurables sont mesurables." },
            { question: "Définition 4.2 : Ensemble négligeable", answer: "Ensemble N appartenant à la tribu dont la mesure est nulle (mu(N) = 0)." },
            { question: "Définition 4.3 : Propriété presque partout (p.p.)", answer: "Propriété vérifiée sur le complémentaire d'un ensemble négligeable." },
            
            { question: "Définition 6.1 : Fonction étagée (simple)", answer: "Fonction mesurable ne prenant qu'un nombre fini de valeurs réelles." },
            { question: "Définition 6.2 : Intégrale d'une fonction étagée positive", answer: "Somme sur i de a_i * mu(A_i cap E) pour une représentation sous forme de partition mesurable." },
            { question: "Propriété 6.1 : Linéarité de l'intégrale des fonctions étagées", answer: "L'intégrale d'une combinaison linéaire de fonctions étagées positives est la combinaison linéaire des intégrales." },
            { question: "Propriété 6.2 : Monotonie de l'intégrale des fonctions étagées", answer: "Si f <= g, alors l'intégrale de f est inférieure ou égale à l'intégrale de g." },
            { question: "Proposition 6.1 : Intégrale sur un ensemble négligeable", answer: "L'intégrale d'une fonction étagée sur un ensemble de mesure nulle est nulle." },
            
            { question: "Définition 7.1 : Fonction mesurable positive", answer: "Fonction mesurable à valeurs dans [0, +inf]." },
            { question: "Définition 7.2 : Intégrale de Lebesgue d'une fonction positive", answer: "Supremum des intégrales des fonctions étagées positives inférieures ou égales à f." },
            { question: "Propriété 7.1 & 7.2 : Linéarité et monotonie de l'intégrale positive", answer: "L'intégrale positive conserve la linéarité positive et la monotonie." },
            { question: "Définition 8.1 : Partie positive et négative", answer: "f^+ = max(f, 0) et f^- = max(-f, 0), telles que f = f^+ - f^- et |f| = f^+ + f^-." },
            { question: "Définition 8.2 : Intégrale d'une fonction générale", answer: "Si f^+ et f^- sont d'intégrales finies, int f = int f^+ - int f^-." },
            { question: "Théorème 8.1 : Caractérisation de l'intégrabilité", answer: "Une fonction mesurable est intégrable au sens de Lebesgue si et seulement si son intégrale en valeur absolue est finie (int |f| < +inf)." },
            
            { question: "Théorème 9.1 : Théorème de convergence monotone (Beppo-Levi)", answer: "Pour une suite croissante de fonctions mesurables positives convergeant vers f p.p., la limite de l'intégrale est l'intégrale de f." },
            { question: "Lemme 9.1 : Lemme de Fatou", answer: "Pour une suite de fonctions mesurables positives, l'intégrale de la liminf est inférieure ou égale à la liminf des intégrales." },
            { question: "Théorème 9.2 : Théorème de convergence dominée de Lebesgue", answer: "Si une suite de fonctions converge p.p. et est dominée en module par une fonction intégrable, alors la limite de l'intégrale est l'intégrale de la limite." },
            
            { question: "Définition 11.1 : Espaces L^p(Omega)", answer: "Espace des classes de fonctions mesurables dont la puissance p de la valeur absolue est d'intégrale finie." },
            { question: "Théorème 11.1 : Théorème de Riesz-Fischer", answer: "L'espace (L^p, ||.||_p) muni de sa norme est un espace de Banach (et un Hilbert pour p=2)." },
            { question: "Proposition 11.2 : Inégalité de Minkowski dans L^p", answer: "||f + g||_p <= ||f||_p + ||g||_p." },
            { question: "Proposition 11.3 : Inégalité de Hölder", answer: "Pour 1/p + 1/p' = 1, ||fg||_1 <= ||f||_p * ||g||_p'." },
            
            { question: "Théorème 13.1 : Théorème de Tonelli", answer: "Pour une fonction mesurable positive sur un produit, les intégrales itérées et l'intégrale multiple coïncident (même si elles valent +inf)." },
            { question: "Théorème 13.2 : Théorème de Fubini", answer: "Pour une fonction intégrable sur un espace produit, l'ordre d'intégration peut être inversé." },
            { question: "Théorème 14.1 : Théorème de changement de variables", answer: "Formule transformant une intégrale via un C^1-difféomorphisme en multipliant par la valeur absolue du jacobien." },
            { question: "Théorème D.1 : Représentation de Riesz pour les espaces L^p", answer: "Le dual topologique de L^p est isométriquement isomorphe à L^p' (avec 1/p + 1/p' = 1)." }
        ]
    },
    {
        id: "series-ch1",
        category: "SÉRIE NUMÉRIQUE",
        title: "Chapitre 1 : Généralités, Séries à termes positifs & Convergence",
        color: "#e67e22", // Orange ocre
        icon: "📈",
        description: "Définition des séries numériques, sommes partielles, nature d'une série, critères de comparaison, de d'Alembert et de Cauchy.",
        cards: [
            { question: "Définition : Série numérique", answer: "Couple formé d'une suite (u_n) et de la suite de ses sommes partielles (S_N) définie par S_N = sum_{n=0}^N u_n." },
            { question: "Définition : Convergence d'une série", answer: "Une série de terme général u_n converge si la suite des sommes partielles (S_N) admet une limite finie lorsque N tend vers +inf." },
            { question: "Définition : Somme d'une série convergente", answer: "La limite de la suite des sommes partielles, notée sum_{n=0}^{+inf} u_n = lim_{N->+inf} S_N." },
            { question: "Définition : Série divergente", answer: "Série dont la suite des sommes partielles diverge (vers +inf, -inf ou n'a pas de limite)." },
            { question: "Propriété : Condition nécessaire de convergence", answer: "Si la série sum u_n converge, alors son terme général u_n tend nécessairement vers 0 lorsque n tend vers +inf. (Attention : la réciproque est fausse !)" },
            { question: "Définition : Série divergente grossièrement", answer: "Série dont le terme général u_n ne tend pas vers 0, ce qui entraîne immédiatement sa divergence." },
            { question: "Exemple classique : Série géométrique", answer: "sum q^n converge si et seulement si |q| < 1. Sa somme vaut alors 1 / (1 - q)." },
            { question: "Exemple classique : Séries de Riemann", answer: "sum 1 / n^alpha converge si et seulement si alpha > 1." },
            { question: "Définition : Séries à termes positifs", answer: "Série où tous les termes u_n sont réels et positifs (ou nuls) à partir d' un certain rang (u_n >= 0)." },
            { question: "Proposition : Caractérisation des séries à termes positifs", answer: "Une série à termes positifs converge si et seulement si la suite de ses sommes partielles (S_N) est majorée." },
            { question: "Théorème : Critère de comparaison simple (majoration/minoration)", answer: "Si 0 <= u_n <= v_n pour tout n :\n- Si sum v_n converge, alors sum u_n converge.\n- Si sum u_n diverge, alors sum v_n diverge." },
            { question: "Théorème : Comparaison par équivalence (asymptotique)", answer: "Si u_n ~ v_n au voisinage de +inf avec u_n >= 0 et v_n >= 0, alors les deux séries sum u_n et sum v_n sont de même nature." },
            { question: "Théorème : Comparaison par domination (règle du petit o)", answer: "Si u_n = o(v_n) au voisinage de +inf avec v_n >= 0 :\n- Si sum v_n converge, alors sum u_n converge." },
            { question: "Règle de d'Alembert (Critère du quotient)", answer: "Soit (u_n) à termes strictement positifs telle que lim (u_{n+1} / u_n) = L :\n- Si L < 1 : convergence.\n- Si L > 1 : divergence.\n- Si L = 1 : conclusion impossible." },
            { question: "Règle de Cauchy (Critère de la racine)", answer: "Soit (u_n) à termes positifs telle que lim (u_n)^(1/n) = L :\n- Si L < 1 : convergence.\n- Si L > 1 : divergence.\n- Si L = 1 : conclusion impossible." },
            { question: "Comparaison série-intégrale (Critère de Cauchy-Maclaurin)", answer: "Si f est une fonction positive, décroissante et continue sur [1, +inf[ telle que f(n) = u_n, alors la série sum u_n et l'intégrale impropre int_1^{+inf} f(t) dt sont de même nature." }
        ]
    },

    // ==========================================
    // 6. NOUVEAU DECK : SÉRIES NUMÉRIQUES - CHAPITRE 2
    // ==========================================
    {
        id: "series-ch2",
        category: "SÉRIE NUMÉRIQUE",
        title: "Chapitre 2 : Séries à termes qlcqs, 'CA' & théorèmes",
        color: "#2980b9", // Bleu intense
        icon: "📉",
        description: "Convergence absolue, semi-convergence, séries alternées, critère de Leibniz, théorèmes de réarrangement et produit de Cauchy.",
        cards: [
            { question: "Définition : Convergence absolue", answer: "Une série sum u_n est dite absolument convergente si la série des valeurs absolues sum |u_n| converge." },
            { question: "Proposition : Lien entre absolue convergence et convergence", answer: "Toute série absolument convergente est convergente. (La réciproque est fausse : on parle alors de semi-convergence)." },
            { question: "Définition : Semi-convergence", answer: "Une série est semi-convergente lorsqu'elle est convergente mais qu'elle n'est pas absolument convergente (ex : série harmonique alternée)." },
            { question: "Définition : Séries alternées", answer: "Série de la forme sum (-1)^n u_n ou sum (-1)^{n+1} u_n où la suite (u_n) est à termes positifs." },
            { question: "Théorème : Critère spécial des séries alternées (CSSA / Leibniz)", answer: "Si (u_n) est une suite réelle décroissante, de limite nulle, alors la série alternée sum (-1)^n u_n converge, et le reste R_n est du signe du premier terme omis avec |R_n| <= u_{n+1}." },
            { question: "Définition : Produit de Cauchy de deux séries", answer: "Série produit de sum a_n et sum b_n dont le terme général c_n est défini par c_n = sum_{k=0}^n a_k b_{n-k}." },
            { question: "Théorème de Mertens", answer: "Si sum a_n converge absolument vers A et sum b_n converge vers B, alors leur produit de Cauchy converge vers le produit A * B." },
            { question: "Théorème de Riemann sur les réarrangements", answer: "Si une série est semi-convergente, on peut réordonner ses termes pour faire converger la somme vers n'importe quel réel donné, ou même faire diverger la suite des sommes vers ±inf." },
            { question: "Propriété : Réarrangement des séries absolument convergentes", answer: "Pour une série absolument convergente, toute permutation des termes conserve la nature de la série ainsi que la valeur de sa somme." },
            { question: "Inégalité triangulaire pour les séries", answer: "Si une série converge absolument, alors |sum_{n=0}^{+inf} u_n| <= sum_{n=0}^{+inf} |u_n|." }
        ]
    },
    // ==========================================
    // 3. OPTIMISATION & RO - CHAPITRE 1
    // ==========================================
    {
        id: "opti-ch1",
        category: "OPTIMISATION & RECHERCHE",
        title: "Chapitre 1 : Optimisation libre & sous contraintes",
        color: "#5b8cb9", // Bleu
        icon: "⚡",
        description: "Conditions d'optimalité 1er et 2nd ordre, convexité, matrice hessienne, Lagrangien et hessien bordé.",
        cards: [
            { question: "Définition : Programme d'optimisation", answer: "Recherche d'un extremum (minimum ou maximum) d'une fonction objectif sous un ensemble de contraintes." },
            { question: "Condition Nécessaire du 1er ordre (CN1)", answer: "Si x* est un extremum local d'une fonction différentiable, alors le gradient s'annule : grad f(x*) = 0." },
            { question: "Définition : Matrice Hessienne", answer: "Matrice symétrique des dérivées partielles secondes de la fonction objectif." },
            { question: "Conditions Suffisantes du 2nd ordre (CS2)", answer: "Si grad f(x*) = 0, un hessien défini positif implique un minimum local, et un hessien défini négatif implique un maximum local." },
            { question: "Caractérisation par les mineurs principaux", answer: "Une matrice est définie positive si tous ses mineurs principaux diagonaux sont strictement positifs." },
            { question: "Théorème : Extrema globaux via le Hessien", answer: "Si le hessien est semi-défini de signe constant sur tout le domaine convexe, tout point stationnaire est un extremum global." },
            { question: "Définition : Ensemble convexe", answer: "Ensemble tel que tout segment reliant deux de ses points y est entièrement inclus." },
            { question: "Définition : Fonction convexe", answer: "Fonction dont l'épigraphe est un ensemble convexe (ou vérifiant l'inégalité de convexité pour toute combinaison convexe)." },
            { question: "Proposition : Convexité et Hessien", answer: "Une fonction différentiable est strictement convexe si et seulement si sa matrice hessienne est définie positive partout." },
            { question: "Propriété : Somme de fonctions convexes", answer: "La somme de fonctions convexes est une fonction convexe." },
            { question: "Propriété : Optimum local et global en convexité", answer: "Tout minimum local d'un problème convexe est un minimum global." },
            { question: "Définition : Fonction du Lagrangien", answer: "Fonction auxiliaire L(x, lambda) = f(x) - somme(lambda_i * g_i(x)) introduite pour traiter les contraintes d'égalité." },
            { question: "Condition de qualification des contraintes", answer: "Condition garantissant la régularité des contraintes (ex : jacobienne de rang maximal à l'optimum)." },
            { question: "Condition Nécessaire du 1er ordre avec Lagrangien", answer: "Les dérivées partielles du Lagrangien par rapport à toutes les variables et tous les multiplicateurs doivent s'annuler." },
            { question: "Interprétation du multiplicateur de Lagrange (lambda)", answer: "Mesure de la sensibilité de la valeur optimale de la fonction objectif face à une variation unitaire de la contrainte." },
            { question: "Définition : Hessien bordé", answer: "Matrice hessienne du Lagrangien bordée par les gradients des contraintes d'égalité." },
            { question: "Règle du Hessien bordé", answer: "Utilisation des signes des mineurs principaux bordés pour déterminer la nature d'un extremum lié (max ou min)." },
            { question: "Définition : Point selle", answer: "Point stationnaire où le hessien n'est ni défini positif ni défini négatif." },
            { question: "Définition : Contrainte active", answer: "Contrainte vérifiée à l'égalité au point considéré." },
            { question: "Définition : Contrainte non saturée", answer: "Contrainte vérifiée à l'inégalité stricte au point considéré." },
            { question: "Propriété : Relaxation des contraintes inactives", answer: "Une contrainte non saturée n'influe pas localement sur la position de l'optimum." },
            { question: "Définition : Condition de non-négativité", answer: "Restriction usuelle imposant que les variables de décision soient supérieures ou égales à zéro." },
            { question: "Propriété : Différentiabilité", answer: "Condition requise sur les fonctions objectifs et contraintes pour appliquer le calcul différentiel." },
            { question: "Définition : Point critique", answer: "Point où le gradient de la fonction s'annule." },
            { question: "Propriété : Unicité de l'optimum", answer: "Garantie en cas de stricte convexité de la fonction objectif sur un domaine convexe." },
            { question: "Définition : Espace tangent", answer: "Espace vectoriel formé par les directions compatibles avec les contraintes au premier ordre." },
            { question: "Propriété : Multiplicateurs de Kuhn-Tucker", answer: "Extension des multiplicateurs de Lagrange aux contraintes d'inégalité." },
            { question: "Définition : Condition de complétude de la complémentarité", answer: "Produit nul entre la variable duale et la contrainte d'inégalité correspondante à l'optimum." },
            { question: "Propriété : Dualité en optimisation", answer: "Principe relationnel fort entre un problème primal de maximisation et un problème dual de minimisation." }
        ]
    },

    // ==========================================
    // 4. OPTIMISATION & RO - CHAPITRE 2
    // ==========================================
    {
        id: "opti-ch2",
        category: "OPTIMISATION & RECHERCHE",
        title: "Chapitre 2 : PL, Simplexe & Résolution",
        color: "#e056fd", // Violet vif
        icon: "📊",
        description: "Programmation linéaire, forme canonique/standard, solutions de base, algorithme du simplexe et tableaux.",
        cards: [
             /* { question: "Définition : Programme linéaire (PL)", answer: "Problème d'optimisation consistant à maximiser ou minimiser une fonction objectif linéaire sous des contraintes affines." },
            { question: "Hypothèse : Proportionnalité", answer: "Les contributions de chaque variable à l'objectif et aux contraintes sont strictement proportionnelles à sa valeur." },
            { question: "Hypothèse : Additivité", answer: "La contribution totale est la somme des contributions individuelles de chaque variable." },
            { question: "Hypothèse : Divisibilité", answer: "Les variables de décision peuvent prendre des valeurs fractionnaires ou continues." },
            { question: "Hypothèse : Certitude", answer: "Tous les paramètres du modèle sont connus de manière certaine." },
            { question: "Définition : Forme canonique d'un PL", answer: "Maximiser c^T x sous Ax <= b et x >= 0." },
            { question: "Définition : Forme standard d'un PL", answer: "Maximiser c^T x sous Ax = b et x >= 0 (via des variables d'écart)." },
            { question: "Propriété : Traitement d'une variable libre", answer: "Une variable non contrainte en signe est remplacée par la différence de deux variables positives (x = x^+ - x^-)." },
            { question: "Théorème : Convexité du domaine réalisable", answer: "L'ensemble des solutions réalisables d'un programme linéaire est un polyèdre convexe." },
            { question: "Définition : Point extrême (sommet)", answer: "Point du polyèdre réalisable ne pouvant s'exprimer comme combinaison convexe de deux autres." },
            { question: "Théorème fondamental de la programmation linéaire", answer: "Si un PL possède une solution optimale finie, elle est atteinte en un point extrême (sommet)." },
            { question: "Définition : Base et matrice de base A_B", answer: "Sous-matrice carrée (m x m) inversible extraite de la matrice A." },
            { question: "Définition : Matrice hors-base A_N", answer: "Sous-matrice formée par les colonnes de A ne faisant pas partie de la base." },
            { question: "Définition : Solution de base", answer: "Vecteur obtenu en annulant les variables hors-base et en résolvant A_B x_B = b." },
            { question: "Définition : Solution de base réalisable (BFS)", answer: "Solution de base vérifiant la condition de non-négativité (x_B >= 0)." },
            { question: "Propriété : Équivalence géométrique-algébrique", answer: "Les sommets du polyèdre correspondent exactement aux solutions de base réalisables." },
            { question: "Définition : Solution de base dégénérée", answer: "Solution de base réalisable pour laquelle au moins une composante de x_B est nulle." },
            { question: "Définition : Coût réduit", answer: "Expression mesurant l'impact marginal de l'introduction d'une variable hors-base." },
            { question: "Lien : Coût réduit et multiplicateurs", answer: "Le coût réduit s'exprime par c_N^T + A_N^T lambda." },
            { question: "Critère d'optimalité (Maximisation)", answer: "Tous les coûts réduits sont négatifs ou nuls." },
            { question: "Critère d'optimalité (Minimisation)", answer: "Tous les coûts réduits sont positifs ou nuls." },
            { question: "Critère de choix de la variable entrante", answer: "Variable hors-base ayant le coût réduit strictement positif le plus grand (Maximisation)." },
            { question: "Critère de choix de la variable sortante", answer: "Test du rapport minimum (b_i / a_i pour a_i > 0)." },
            { question: "Condition d'arrêt pour un problème non borné", answer: "Coût réduit strictement positif avec une colonne pivot dont tous les coefficients sont <= 0." },
            { question: "Définition : Méthode des dictionnaires", answer: "Formulation algébrique exprimant les variables de base et z en fonction des variables hors-base." },
            { question: "Définition : Opération de pivotage", answer: "Transformation pour faire entrer une variable dans la base et en faire sortir une autre." },
            { question: "Traitement d'une contrainte du type >= ", answer: "On retranche une variable d'écart et on ajoute une variable artificielle." },
            { question: "Traitement d'une contrainte du type = ", answer: "On ajoute une variable artificielle pour disposer d'une base initiale." },
            { question: "Définition : Méthode des pénalités (Grand M)", answer: "Pénalisation lourde des variables artificielles dans la fonction objectif (-M)." },
            { question: "Propriété : Rôle des variables artificielles", answer: "À l'optimum d'un problème valide, toutes les variables artificielles doivent valoir zéro." },
            { question: "Propriété : Contraintes saturées et prix duals", answer: "Les multiplicateurs indiquent la valeur marginale (shadow price) du second membre." }
         */ ]
    }
];

let activeCategory = "Tous";
let currentDeck = null;
let currentCardIndex = 0;
let score = 0;

const decksGrid = document.getElementById('decks-grid');
const filterPills = document.getElementById('filter-pills');
const searchInput = document.getElementById('search-input');
const catalogCount = document.getElementById('catalog-count');

const galleryView = document.getElementById('gallery-view');
const studyView = document.getElementById('study-view');
const scoreView = document.getElementById('score-view');

const flashcard = document.getElementById('flashcard');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const studyDeckTitle = document.getElementById('study-deck-title');
const progressCounter = document.getElementById('progress-counter');

function renderFilters() {
    const categoriesCount = {};
    decks.forEach(d => {
        categoriesCount[d.category] = (categoriesCount[d.category] || 0) + 1;
    });

    filterPills.innerHTML = '';
    
    const allBtn = document.createElement('button');
    allBtn.className = `pill ${activeCategory === 'Tous' ? 'active' : ''}`;
    allBtn.textContent = `Tous (${decks.length})`;
    allBtn.onclick = () => filterCategory('Tous');
    filterPills.appendChild(allBtn);

    Object.keys(categoriesCount).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `pill ${activeCategory === cat ? 'active' : ''}`;
        btn.textContent = `${cat} (${categoriesCount[cat]})`;
        btn.onclick = () => filterCategory(cat);
        filterPills.appendChild(btn);
    });
}

function filterCategory(cat) {
    activeCategory = cat;
    renderFilters();
    renderDecks();
}

function renderDecks() {
    const query = searchInput.value.toLowerCase();
    
    const filteredDecks = decks.filter(deck => {
        const matchCategory = activeCategory === "Tous" || deck.category === activeCategory;
        const matchQuery = deck.title.toLowerCase().includes(query) || deck.description.toLowerCase().includes(query);
        return matchCategory && matchQuery;
    });

    catalogCount.textContent = `${filteredDecks.length} catalogue${filteredDecks.length > 1 ? 's' : ''} disponible${filteredDecks.length > 1 ? 's' : ''}`;
    decksGrid.innerHTML = '';

    if (activeCategory === "Tous" && !query) {
        let lastCategory = null;
        filteredDecks.forEach(deck => {
            if (deck.category !== lastCategory) {
                if (lastCategory !== null) {
                    const separator = document.createElement('hr');
                    separator.className = 'category-separator';
                    decksGrid.appendChild(separator);
                }
                const titleElem = document.createElement('div');
                titleElem.className = 'category-separator-title';
                titleElem.textContent = deck.category;
                decksGrid.appendChild(titleElem);
                lastCategory = deck.category;
            }
            decksGrid.appendChild(createDeckCardElement(deck));
        });
    } else {
        filteredDecks.forEach(deck => {
            decksGrid.appendChild(createDeckCardElement(deck));
        });
    }
}

function createDeckCardElement(deck) {
    const card = document.createElement('div');
    card.className = 'deck-card';
    card.innerHTML = `
        <div>
            <div class="deck-header">
                <span class="category-tag" style="color: ${deck.color};">${deck.category}</span>
                <span class="deck-icon">${deck.icon || '📖'}</span>
            </div>
            <h3 class="deck-title">${deck.title}</h3>
            <p class="deck-desc">${deck.description}</p>
        </div>
        <div class="deck-footer">
            <span class="cards-count">${deck.cards.length} cartes</span>
            <button class="study-link" onclick="startStudy('${deck.id}')">Étudier →</button>
        </div>
    `;
    return card;
}

function startStudy(deckId) {
    currentDeck = decks.find(d => d.id === deckId);
    currentCardIndex = 0;
    score = 0;

    studyDeckTitle.textContent = currentDeck.title;
    galleryView.classList.add('hidden');
    scoreView.classList.add('hidden');
    studyView.classList.remove('hidden');

    displayCard();
}

function displayCard() {
    const card = currentDeck.cards[currentCardIndex];
    cardFront.textContent = card.question;
    cardBack.textContent = card.answer;
    progressCounter.textContent = `Carte ${currentCardIndex + 1} sur ${currentDeck.cards.length}`;
    flashcard.classList.remove('flipped');
}

function answerCard(isCorrect) {
    if (isCorrect) score++;
    currentCardIndex++;

    if (currentCardIndex < currentDeck.cards.length) {
        displayCard();
    } else {
        showResults();
    }
}

function showResults() {
    studyView.classList.add('hidden');
    scoreView.classList.remove('hidden');

    document.getElementById('final-score').textContent = `${score} / ${currentDeck.cards.length}`;
    document.getElementById('score-feedback').textContent = 
        score === currentDeck.cards.length ? "Félicitations, maîtrise parfaite !" : "Continuez vos révisions !";
}

flashcard.onclick = () => flashcard.classList.toggle('flipped');
document.getElementById('flip-btn').onclick = () => flashcard.classList.toggle('flipped');
document.getElementById('correct-btn').onclick = () => answerCard(true);
document.getElementById('wrong-btn').onclick = () => answerCard(false);

document.getElementById('back-to-decks-btn').onclick = () => {
    studyView.classList.add('hidden');
    galleryView.classList.remove('hidden');
};

document.getElementById('home-btn').onclick = () => {
    scoreView.classList.add('hidden');
    galleryView.classList.remove('hidden');
};

document.getElementById('restart-deck-btn').onclick = () => startStudy(currentDeck.id);
searchInput.oninput = renderDecks;

renderFilters();
renderDecks();
