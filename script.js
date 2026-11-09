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
            { question: "Définition : Frontière d'un ensemble", answer: "La frontière d’un ensemble U ⊂ E, notée ∂U, est l’ensemble des points x ∈E tels que : ∀r > 0, B(x,r)∩ U  ̸ = ∅ et B(x,r)∩(E privé de U) ̸/= ∅. C’est l’ensemble des points qui « touchent » à la fois l’intérieur et l’extérieur de U. ∂A = A barre \ A˚" },
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
        title: "Chapitre 2 : Intégrale de Lebesgue (Partie 1)",
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
            { question: "Exemple : La mesure de Lebesgue sur R s'étend sur quoi :", answer: "Elle s’étend une mesure bien définie sur la tribu de Borel de R, (puis une tribu plus large appelée la tribu de Lebesgue!)"},
            { question: "Exemple : La mesure de Lebesgue sur R**N :", answer: "La mesure de Lebesgue sur R**N est une généralisation de la notion de (longueur, d'aire, volume) à des ensembles beaucoup plus généraux que les seuls pavés ou domaines réguliers." },

            { question: "Définition : Un espace mesuré est un triplet (X,A,µ) où :", answer:"X est un ensemble, A est une tribu sur X, µ est une mesure sur A"},
            { question: "Définition 4.1 : Fonction mesurable", answer: "Fonction f : X -> R barre telle que pour tout a dans R, l'ensemble {x | f(x) > a} appartient à la tribu A." },
            { question: "Remarque 4.1 : Équivalences de mesurabilité", answer: "La condition f(x) > a peut être remplacée par f(x) >= a, f(x) < a ou f(x) <= a." },
            { question: "Exemple 4.1 : Toute fonction continue f : R → R est :", answer: "Toute fonction continue f : R → R est mesurable (par rapport la tribu de Borel)." },
            { question: "Exemple 4.2 : La fonction indicatrice/ fonction en escalier est :", answer: "La fonction indicatrice/ en escalier f(x) = Σ ak (quand ak est entre xk-1 et xk) est mesurable" },      
            { question: "Théorème 4.1 : Stabilité par composition", answer: "La composée de deux fonctions mesurables est mesurable." },
            
            { question: "Propriété 4.1 : Stabilité algébrique des fonctions mesurables", answer: "Si f et g sont mesurables, alors f+g, f*g, |f|, min(f,g) et max(f,g) sont mesurables." },
            { question: "Théorème 4.2 : Stabilité par opérations limites", answer: "Le supremum, l'infimum, la limsup et la liminf d'une suite de fonctions mesurables sont mesurables." },
            { question: "Définition 4.2 : Ensemble négligeable", answer: "Ensemble N appartenant à la tribu dont la mesure est nulle (µ(N) = 0)." },
            { question: "Exemples pour la mesure de Lebesgue λ sur R qui sont négligeables", answer:"un singleton est négligeable, un ensemble fini est négligeable, l’ensemble des rationnels Q est négligeable"},
            { question: "Définition 4.3 : Propriété presque partout (p.p.)", answer: " Soit (X,A,µ) un espace mesuré. On dit qu’une propriété P(x) est vérifié presque partout sur X (ou µ presque partout), si : µ({x ∈ X | P(x) est fausse}) = 0." },
            { question: "Exemple 4.4 :  Soient f,g : X → R deux fonctions mesurables. On dit que f = g presque partout sur X si :", answer:"µ({x ∈ X | f(x) ̸ = g(x)}) = 0. Autrement dit, f(x) = g(x) pour µ-presque tout x ∈ X"},
            { question: "Proposition 4.1 : Soit f : R → R et soit N ⊂ R un ensemble négligeable (i.e. λ(N) = 0) tel que f soit continue sur R \ N. Alors:", answer:"f est (Lebesgue-)mesurable."},

            { question: "Définition 5 : Intégration par rapport la mesure de Dirac", answer: "Soit (X,A) un espace mesurable, x0 ∈ X et f : X →R une fonction mesurable. On considère la mesure de Dirac δx0. On définit alors l’intégrale de f par rapport δx0 : ∫f(x)dδx0(x) = f(x0)" },
            { question: "Définition 5 : Intégration par rapport la mesure de comptage", answer: " Soit X un ensemble, muni de la tribu P(X), et soit µ la mesure de comptage. Soit f : X → R une fonction mesurable. On définit l’intégrale de f par rapport µ par la somme suivante : ∫f(x)dµ(x) = Σf(x) où x appartient à X. Si la série converge absolument (Σ|f(x)|< ∞). Dans ce cas, on dit que f ∈ L**1(X,µ)." },
            
            { question: "Définition 6.1 : Fonction étagée (simple)", answer: "Fonction mesurable ne prenant qu'un nombre fini de valeurs réelles.f(x) = Σ ai 1Ai(x) .Chaque Ai est appelé la partie de niveau associée à la valeur ai. On note par E l’espace de ces fonctions" },
            { question: "Définition 6.2 : Intégrale d'une fonction étagée positive", answer: " Soit f =  Σ ai 1Ai une fonction étagée, avec ai ∈ R+. On définit l’intégrale de f sur X (ou sur un sous-ensemble mesurable E ⊂ X) par : ∫f dµ = Σ ai µ(Ai ∩ E)." },
            { question: "Propriété 6.1 : Linéarité de l'intégrale des fonctions étagées", answer: "L'intégrale d'une combinaison linéaire de fonctions étagées positives est la combinaison linéaire des intégrales." },
            { question: "Propriété 6.2 : Monotonie de l'intégrale des fonctions étagées", answer: "Si f <= g, alors l'intégrale de f est inférieure ou égale à l'intégrale de g." },
            { question: "Proposition 6.1 : Intégrale sur un ensemble négligeable", answer: "L'intégrale d'une fonction étagée sur un ensemble négligeable est nulle." },
            { question: "Proposition 6.2 : Soit( X,A,µ) un espace mesuré, et soit f : X→R une fonction étagée telle que f≥0. Si X ∫fdµ=0, alors :",answer: "f=0 µ-presque par tout sur X."},
            
            { question: "Définition 7.1 : Fonction mesurable positive", answer: "Fonction mesurable à valeurs dans [0, +inf], f(x) ≥ 0 pour tout x ∈ X." },
            { question: "Proposition 7.1 : On a: φn(x)", answer:" (1/2**n)* partie entière ((2**n)*min f(x), n)"},
            { question: "Théorème 7.1 (Densité des fonctions étagées dans C(K)). Soit K ⊂ R**n un compact. Pour toute fonction continue f : K → R et tout ε > 0, il existe une fonction en escalier φ : K → R telle que :", answer:"∥f−φ∥ ∞ <ε"},                
            { question: "Définition 7.2 : Intégrale de Lebesgue d'une fonction positive,  Soit (X,A ,µ) un espace mesuré, et soit f : X → [0,+∞] une fonction mesurable. On appelle intégrale de Lebesgue de f la valeur :", answer: "∫f dµ = ∫sup (φdµ) = (lim ∫(φn dµ)) si φn est une suite croissante, φ est une fonction étagée et 0 ≤ φ ≤ f " },
            { question: "Propriété 7.1 & 7.2 : Linéarité et monotonie de l'intégrale positive", answer: "L'intégrale positive conserve la linéarité positive et la monotonie." },
            { question: "Propriété 7.2 : Soit f une fonction mesurable positive presque partout sur X et A∈A un ensemble négligeable. Alors:", answer: "∫f(x)dx=0"},
            { question: "Propriété 7.3 :  Soit (X,A,µ) un espace mesuré, et soit f : X → R une fonction telle que f ≥ 0 µ-presque partout. Si ∫f dµ =0,:", answer: "∫f(x)dx=0"},
               
            { question: "Définition 8.1 : Partie positive et négative (fonction mesurable et positive)", answer: "f**+(x) = max(f, 0) et f**-(x) = max(-f, 0), telles que f = f**+ - f**- et |f| = f**+ + f**-." },
            { question: "Définition 8.2 : Intégrale de Lebesgue d’une fonction réelle", answer: "Si f**+ et f**- sont d'intégrales finies, ∫f = ∫f**+ - ∫f**-." },
            { question: "Théorème 8.1 : Caractérisation de l'intégrabilité,  Une fonction f : X → R est intégrable (au sens de Lebesgue) si et seulement si : ", answer: " ∫|f| dµ < ∞ " },

            { question: "Propriété 9.1 : Si f et g sont intégrables sur X, et si α,β ∈ R, alors : " , answer:"∫(αf +βg)dµ = α∫f dµ + β∫g dµ "},  
            { question: "Propriété 9.2 :  Si f ≤ g presque partout sur X, et si f, g sont intégrables, alors : " , answer:"∫f dµ ≤ ∫g dµ  "},  
            { question: "Théorème 9.1 : (Théorème de convergence monotone (Beppo-Levi)). Soit (X,A,µ) un espace mesuré, et soit (fn)n∈N une suite de fonctions mesurables positives telle que : 1. fn(x) ≤ fn+1(x)(croissance ponctuelle),2. fn(x) → f(x) pour µ-presque tout x ∈ X.", answer: "Alors la fonction limite f est mesurable et positive, et : lim ∫n→∞ X fn dµ = ∫ f dµ" }, 
            { question: "Propriété 9.3 :  Soit (X,A,µ )un espace mesuré, et soit f :X→R(ouC) une fonction intégrable, i.e.∫|f|dµ <∞. Si A∈A(tribu) est négligeable (µ(A)=0),alors : " , answer:"∫f dµ =0 "}, 
            { question: "Lemme 9.1 : Lemme de Fatou", answer: "Pour une suite de fonctions mesurables positives, l'intégrale de la lim inf est inférieure ou égale à la lim inf des intégrales." }, 
            { question: "Théorème 9.2 : Théorème de convergence dominée de Lebesgue", answer: "Si une suite de fonctions converge p.p. et est dominée en module par une fonction intégrable, alors la limite de l'intégrale de fn est l'intégrale de la limite de f." },  
            { question: "Définition 11.1 : Espaces L^p(Omega)", answer: "Espace des classes de fonctions mesurables dont la puissance p de la valeur absolue est d'intégrale finie." },
        ]
    },
    // ==========================================
    // ANALYSE DE FOURIER - CHAPITRE 2 (SUITE & FIN)
    // ==========================================
    {
        id: "fourier-ch3-suite",
        category: "ANALYSE DE FOURIER",
        title: "Chapitre 2 : Intégrale de Lebesgue (Suite & Fin)",
        color: "#2980b9", // Bleu Profond
        icon: "📚",
        description: "Théorème de convergence dominée, espaces Lᵖ, inégalités fondamentales, Fubini-Tonelli, changement de variables et appendices.",
        cards: [
            { question: "Théorème 9.2 : Théorème de convergence dominée de Lebesgue", answer: "Soit (fₙ) une suite mesurable telle que fₙ → f p.p. et ∃ g ∈ L¹ telle que |fₙ| ≤ g p.p. pour tout n. Alors f est intégrable et limₙ→∞ ∫ₓ fₙ dμ = ∫ₓ f dμ." },
            { question: "Exemple 9.3 : Application du théorème de convergence dominée", answer: "Pour fₙ(x) = sin(x)/n sur [0, π], fₙ → 0 p.p. et |fₙ(x)| ≤ 1 (ou |sin(x)|) qui est intégrable. Donc limₙ→∞ ∫₀ᵖⁱ fₙ(x) dx = ∫₀ᵖⁱ 0 dx = 0." },
            { question: "Exemple 10.2 : Fonction indicatrice des rationnels 1_({ℚ ∩ [0,1]})", answer: "Discontinue partout et non intégrable au sens de Riemann, elle est intégrable au sens de Lebesgue et son intégrale vaut : ∫₀¹ f(x) dλ = λ(ℚ ∩ [0,1]) = 0." },
            { question: "Exemple 10.3 : Fonction non bornée f(x) = 1/√x sur [0,1]", answer: "Possède une singularité en 0, mais ∫₀¹ (1/√x) dx = 2 < +∞. Elle est donc intégrable au sens de Lebesgue (et de Riemann)." },
            { question: "Exemple 10.4 : Fonction non intégrable f(x) = 1/x sur (0,1]", answer: "Non bornée au voisinage de 0, son intégrale impropre diverge : ∫₀¹ (1/x) dx = +∞. Elle n'est intégrable ni au sens de Riemann ni au sens de Lebesgue." },
            { question: "Exemple 10.5 : Suite de fonctions fₙ(x) = n · 1_[0, 1/n](x)", answer: "Vérifie ∫₀¹ fₙ(x) dx = 1 pour tout n, mais fₙ → 0 p.p. On a ∫₀¹ lim fₙ(x) dx = 0 ≠ lim ∫₀¹ fₙ(x) dx = 1 car il n'existe pas de fonction dominante intégrable." },
            { question: "Définition 11.1 : Espace ℒᵖ(Ω) pour 1 ≤ p < +∞", answer: "ℒᵖ(Ω) = { f : Ω → ℝ (ou ℂ) mesurable ∣ ∫_Ω |f(x)|ᵖ dx < +∞ }." },
            { question: "Définition 11.1 : Espace ℒⁿⁿᶠ(Ω) (ou ℒ∞(Ω))", answer: "ℒ∞(Ω) = { f : Ω → ℝ mesurable ∣ ∃ C > 0 t.q. |f(x)| ≤ C p.p. sur Ω }." },
            { question: "Définition de la norme ∥·∥ₚ pour 1 ≤ p < +∞", answer: "∥f∥ₚ = ( ∫_Ω |f(x)|ᵖ dx )^(1/p)." },
            
            { question: "Définition de la norme ∥·∥∞ (supremum essentiel)", answer: "∥f∥∞ = ess supₓ∈Ω |f(x)| = inf { C > 0 ∣ |f(x)| ≤ C p.p. sur Ω }." },
            { question: "Pourquoi ∥·∥ₚ est-elle initialement une semi-norme sur ℒᵖ ?", answer: "Car ∥f∥ₚ = 0 (soit ∫_Ω |f(x)|ᵖ dx = 0) n'implique pas f = 0 partout, mais seulement f = 0 p.p. sur Ω." },
            { question: "Comment obtient-on l'espace normé Lᵖ(Ω) à partir de ℒᵖ(Ω) ?", answer: "Par passage au quotient via la relation d'équivalence f ~ g ⇔ f = g presque partout." },
            { question: "Théorème 11.1 : Théorème de Riesz-Fischer", answer: "L'espace (Lᵖ(Ω), ∥·∥ₚ) muni de sa norme est un espace de Banach (complet)." },
            { question: "Quel espace Lᵖ est un espace de Hilbert ?", answer: "L'espace L²(Ω), muni du produit scalaire ⟨f, g⟩ = ∫_Ω f(x) ḡ(x) dx." },
            { question: "Proposition 11.2 : Inégalité de Minkowski", answer: "∥f + g∥_Lᵖ ≤ ∥f∥_Lᵖ + ∥g∥_Lᵖ pour tous f, g ∈ Lᵖ." },
            { question: "Proposition 11.3 : Inégalité de Hölder", answer: "Pour 1/p + 1/p' = 1, f ∈ Lᵖ et g ∈ Lᵖ', on a f·g ∈ L¹ et ∥f·g∥_L¹ ≤ ∥f∥_Lᵖ · ∥g∥_Lᵖ' (soit ∫_Ω |fg| dx ≤ ∥f∥_Lᵖ ∥g∥_Lᵖ')." },
            { question: "Lemme 11.1 : Inégalité de Young", answer: "Pour 1/p + 1/p' = 1 et a, b ≥ 0, on a a·b ≤ (1/p) aᵖ + (1/p') bᵖ', avec égalité si aᵖ = bᵖ'." },
            { question: "Proposition 11.4 : Propriété d'inclusion des espaces Lᵖ sur domaine boré de mesure finie", answer: "Si |Ω| < ∞ et 1 ≤ p ≤ q ≤ ∞, alors L**q(Ω) ↪ Lᵖ(Ω) continûment, avec ∥f∥_Lᵖ ≤ (|Ω|^(1/p - 1/q))*(∥f∥_L**q)." },
            { question: "Exemple 11.2. Si fn → f dans Lp et (fn) est bornée dans Lq : ", answer : "alors fn → f dans tout Lr avec p ≤ r < q."},
            
            { question: "Théorème 11.2 : Inégalité d'interpolation", answer: "Si f ∈ Lᵖ ∩ Lʲ avec 1 ≤ p ≤ r ≤ j ≤ ∞, alors ∥f∥_Lʳ ≤ ∥f∥_Lᵖ^α · ∥f∥_Lʲ^(1-α) où 1/r = α/p + (1-α)/j avec α ∈ [0,1]." },
            { question: "Théorème 11.3 : Densité des fonctions continues dans L¹ sur un compact", answer: "Pour tout compact K ⊂ ℝⁿ et f ∈ L¹(K), ∀ ε > 0, ∃ φ ∈ 𝒞(K) telle que ∫_K |f(x) - φ(x)| dx < ε." },
            { question: "Théorème 11.4 : Densité de C_c(Ω) dans L¹(Ω)", answer: "L'espace 𝒞_c(Ω) des fonctions continues à support compact est dense dans L¹(Ω) : ∀ f ∈ L¹(Ω), ∃ (f♙) ⊂ 𝒞_c(Ω) t.q. limₙ→∞ ∥f♙ - f∥_L¹ = 0." },
            { question: "Lp sur un espace mesuré (X,A,µ)", answer: "Soit (X,A ,µ) un espace mesuré, et 1 ≤ p < ∞. On définit : Lp(X,µ) = {f mesurable | ∫ |f(x)|p dµ(x) < +∞ } C’est l’espace des fonctions p-intégrables. Pour p = ∞, on définit : L∞(X,µ) = {f mesurable | il existe M ≥ 0, |f(x)| ≤ M p.p.}."},
            { question: "Section 12.1 : Définition de l'espérance en probabilités", answer: "L'espérance d'une variable aléatoire X : Ω → ℝ est l'intégrale de Lebesgue par rapport à la mesure de probabilité ℙ : 𝔼[X] = ∫_Ω X dℙ." },
            { question: "Si X suit une loi uniforme sur [0,1], alors :", answer:" E[X] = ∫ x · dx = 1/2 ."},
           
            { question: "Définition 13.1 : Tribu produit 𝒜 ⊗ ℬ", answer: "La plus petite tribu sur X × Y contenant tous les rectangles mesurables A × B avec A ∈ 𝒜 et B ∈ ℬ. A ⊗ B = σ({A×B|A∈A,B∈B}), où σ(·) désigne la tribu engendrée" },
            { question: "Définition 13.2 : Mesure produit μ ⊗ ν", answer: "L'unique mesure sur 𝒜 ⊗ ℬ vérifiant (μ ⊗ ν)(A × B) = μ(A) · ν(B) pour tous A ∈ 𝒜, B ∈ ℬ." },
            { question: "Théorème 13.1 : Théorème de Tonelli (cas f ≥ 0)", answer: "Pour f : X × Y → [0, +∞] mesurable positive : ∫_(X×Y) f(x,y) d(μ⊗ν) = ∫_X ( ∫_Y f(x,y) dν(y) ) dμ(x) = ∫_Y ( ∫_X f(x,y) dμ(x) ) dν(y)." },
            { question: "Théorème 13.2 : Théorème de Fubini (cas f ∈ L¹)", answer: "Si f ∈ L¹(X × Y, μ ⊗ ν), les intégrales itérées existent p.p. et sont égales : ∫_(X×Y) f(x,y) d(μ⊗ν) = ∫_X ( ∫_Y f(x,y) dν(y) ) dμ(x) = ∫_Y ( ∫_X f(x,y) dμ(x) ) dν(y)." },
            { question: "Exemple 13.4 : Contre-exemple à Fubini", answer: "Pour f(x,y) = 1/(x+y) sur (0,1)², Cette fonction est positive, mais: ∫_((0,1)²) f(x,y) dxdy = ∫₀¹ (∫₀¹ 1/(x+y) dx) dy = +∞. f ∉ L¹((0,1)²), l'interversion n'est pas garantie pour des fonctions de signe variable non L¹." },
           
            { question: "Théorème 14.1 : Théorème de changement de variables dans ℝⁿ", answer: "Pour Φ : U → V un 𝒞¹-difféomorphisme et f mesurable intégrable sur V : Si f ◦ Φ ·|det D Φ| est intégrable sur U, alors : ∫_V f(y) dy = ∫_U f(Φ(x)) · |det DΦ(x)| dx." },
            { question: "Définition 14.1 : det DΦ(x) est ", answer: "le jacobien du changement de variables, c’est à dire le déterminant de la matrice jacobienne de Φ en x."},
            { question: "Jacobien pour les coordonnées polaires dans ℝ²", answer: "Pour x = r cos θ, y = r sin θ : |det DΦ| = r. D'où ∫_ℝ² f(x,y) dxdy = ∫₀²ᵖⁱ ( ∫₀⁺∞ f(r cos θ, r sin θ) · r dr ) dθ." },
            { question: "Jacobien pour les coordonnées cylindriques dans ℝ³", answer: "Pour x = r cos θ, y = r sin θ, z = z : |det DΦ| = r. D'où ∫_ℝ³ f(x,y,z) dxdydz = ∫₀²ᵖⁱ ∫₀⁺∞ ∫₋∞⁺∞ f(rcosθ, rsinθ, z)· r dz dr dθ." },
            { question: "Jacobien pour les coordonnées sphériques dans ℝ³", answer: "Pour x = r sin φ cos θ, y = r sin φ sin θ, z = r cos φ : |det DΦ| = r² sin φ. D'où la formule dxdydz = r² sin φ dr dφ dθ. (à changer dans l'intégral)" },
            { question: "Exemple 14.1 : Changement affine dans ℝⁿ", answer: "Pour Φ(x) = Ax + b avec A ∈ GLₙ(ℝ), DΦ(x) = A. Si f : Rn→R est mesurable et intégrable sur un ensemble V=Φ(U), alors: ∫v f(y) dy = ∫u f(Ax + b)·|det A|dx." },
            { question: "Appendice A : Philosophie comparée Riemann vs Lebesgue", answer: "Riemann découpe le domaine (l'axe x) en sub-intervalles. Lebesgue découpe le codomaine (l'axe y) en mesurant la taille des ensembles de niveau via μ." },
            { question: "Appendice B : Support d'une fonction mesurable", answer: "supp f est le complémentaire du plus grand ouvert W ⊂ Ω sur lequel f = 0 presque partout (supp f = ⋃_{W ouvert, f=0 p.p.} W^c)." },
            { question: "Appendice C : Définition de la mesure image f_#μ", answer: "Pour f : X → Y mesurable, la mesure image f_#μ sur Y est définie par (f_#μ)(B) = μ(f⁻¹(B)) pour tout B ∈ ℬ." },
            { question: "Appendice D : Théorème de représentation de Riesz pour Lᵖ (1 ≤ p < +∞)", answer: "Le dual (Lᵖ(Ω))' est isométriquement isomorphe à Lᵖ'(Ω) via T : u ↦ Tu où Tu(f) = ∫_Ω f(x) u(x) dx et ∥Tu∥_(Lᵖ)' = ∥u∥_Lᵖ'." }
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
            { question: "Conditions Suffisantes du 2nd ordre (CS2)", answer: "Si grad f(x*) = 0, un hessien défini positif implique un minimum local, et un hessien défini négatif implique un maximum local." },
            { question: "Définition : Matrice Hessienne", answer: "Matrice symétrique des dérivées partielles secondes de la fonction objectif." },
            { question: "Définition : Mineurs principaux d’une matrice", answer: "Soit H de dim (n,n). Un mineur principal d’ordre k est le déterminant de la sous-matrice de H d’ordre k obtenue en supprimant n −k lignes et les n−k colonnes correspondantes dans H."},
            { question: "Def : Mineurs principaux diagonaux d’une matrice", answer: "Soit H de dim (n,n). Le mineur principal diagonal d’ordre k de la matrice H est le déterminant de la matrice de taille (k,k) obtenue en éliminant les n − k dernières lignes et n − k dernières colonnes de la matrice H."},
            { question: "Caractérisation par les mineurs principaux 1", answer: "Une matrice est définie positive/négative si tous ses mineurs principaux diagonaux sont strictement positifs/alterne de signe (pair >0)." },
            { question: "Caractérisation par les mineurs principaux 2", answer: "Une matrice est définie semi- (positive/négative) si tous ses mineurs principaux sont nuls ou positifs/alterne de signe (pair >0)." },
            { question: "La matrice hésienne est déf positif/négatif/semi +/semi-", answer:"H est défini + si les vi sont str +,- si les vi sont str -, semi + ou - si les vi sont + et nulles ou - et nulles"},
            { question: "Théorème : Extrema globaux via le Hessien", answer: "Si le hessien est semi-défini de signe constant sur tout le domaine convexe, tout point stationnaire est un extremum global." },
           
            { question: "Définition : Ensemble convexe/concave", answer: "Ensemble tel que tout segment reliant deux de ses points y est entièrement inclus. tx +(1 −t)y ∈ S / ensemble dont l'ensemeble complémentaire est convexe" },
            { question: "Définition : Fonction convexe/concave", answer: "Fonction dont l'épigraphe est un ensemble convexe f(tx +(1−t)y) ⩽ tf(x)+(1−t)f(y) / f(tx +(1−t)y) ⩾ tf(x)+(1−t)f(y)" },
            { question: "Proposition : Convexité et Hessien 1", answer: "Une fonction différentiable est strictement convexe/ concave si et seulement si sa matrice hessienne est définie positive/négative partout." },
            { question: "Proposition : Convexité et Hessien 2", answer: "Si f est convexe (resp. concave) si et seulement si ∀x ∈ S : D2f(x) est semi définie positive (resp. semi-définie négative)"},
            { question: "Propriété : Somme de fonctions convexes", answer: "La somme de fonctions convexes est une fonction convexe." },
            { question: "Propriété : Optimum local et global en convexité", answer: "Tout minimum local d'un problème convexe est un minimum global." },
            
            { question: "Définition : Fonction du Lagrangien", answer: "Fonction auxiliaire L(x,λ) = f(x) - Σ(λ_i * g_i(x)) introduite pour traiter les contraintes d'égalité." },
            { question: "Condition de qualification des contraintes", answer: "Condition garantissant la régularité des contraintes (ex : jacobienne de rang maximal à l'optimum et g linéaire)." },
            { question: "Condition Nécessaire du 1er ordre avec Lagrangien", answer: "Les dérivées partielles du Lagrangien par rapport à toutes les variables et tous les multiplicateurs doivent s'annuler." },
            { question: "Interprétation du multiplicateur de Lagrange (lambda)", answer: "Mesure de la sensibilité de la valeur optimale de la fonction objectif face à une variation unitaire de la contrainte." },
            { question: "Définition : Hessien bordé", answer: "Matrice hessienne du Lagrangien bordée par les gradients des contraintes d'égalité." },
            { question: "Règle du Hessien bordé", answer: "Utilisation des signes des mineurs principaux bordés pour déterminer la nature d'un extremum lié (max ou min)." },
            
            { question: "Définition : Point selle", answer: "Point stationnaire où le hessien n'est ni défini positif ni défini négatif." },
            { question: "Définition : Contrainte non saturée", answer: "Contrainte vérifiée à l'inégalité stricte au point considéré." },
            { question: "Propriété : Relaxation des contraintes inactives", answer: "Une contrainte non saturée n'influe pas localement sur la position de l'optimum." },
            { question: "Propriété : Différentiabilité", answer: "Condition requise sur les fonctions objectifs et contraintes pour appliquer le calcul différentiel." },
            { question: "Propriété : Unicité de l'optimum", answer: "Garantie en cas de stricte convexité de la fonction objectif sur un domaine convexe." },
            { question: "Propriété : Multiplicateurs de Kuhn-Tucker", answer: "Extension des multiplicateurs de Lagrange aux contraintes d'inégalité." },
            { question: "Définition : Condition de complétude de la complémentarité", answer: "Produit nul entre la variable duale et la contrainte d'inégalité correspondante à l'optimum." },
            { question: "Propriété : Dualité en optimisation", answer: "Principe relationnel fort entre un problème primal de maximisation et un problème dual de minimisation." }
        ]
    },
    // ==========================================
    // OPTIMISATION & RO - CHAPITRE 2 : PROGRAMMATION LINEAIRE & SIMPLEXE
    // ==========================================
    {
        id: "opti-cm2",
        category: "OPTIMISATION & RECHERCHE",
        title: "Chapitre 2 : PL, Résolution Graphique & Simplexe",
        color: "#27ae60", // Vert Émeraude / Optimisation
        icon: "📊",
        description: "Forme canonique/standard, polyèdre, BFS, algorithme du simplexe, règles de Dantzig, méthode du Grand M et gradient réduit.",
        cards: [
            { question: "Définition : Recherche Opérationnelle (RO)", answer: "Ensemble des méthodes et techniques rationnelles permettant de modéliser des problèmes de décision et d'identifier la solution optimale sous contraintes." },
            { question: "Définition : Programme Linéaire (PL)", answer: "Problème d'optimisation (min ou max) dans ℝⁿ dont la fonction objectif est linéaire et l'ensemble des contraintes est défini par des équations ou inéquations affines." },
            { question: "Quelles sont les 4 hypothèses fondamentales d'un PL ?", answer: "1. Proportionnalité ; 2. Additivité ; 3. Divisibilité ; 4. Certitude des paramètres." },
            { question: "Comment traiter une variable x_j non restreinte en signe ?", answer: "On la remplace par la différence de deux variables non négatives : x_j = x_j⁺ - x_j⁻ avec x_j⁺ ≥ 0 et x_j⁻ ≥ 0." },
            { question: "Définition : Forme Canonique d'un PL (Maximisation)", answer: "max z = cᵀ x sous les contraintes A x ≤ b et x ≥ 0." },
            
            { question: "Définition : Forme Standard d'un PL", answer: "max z = cᵀ x sous les contraintes A x = b et x ≥ 0 (avec b ≥ 0 et A de plein rang m)." },
            { question: "Comment passer d'une contrainte '≤' à une forme standard ?", answer: "En ajoutant une variable d'écart positive : ∑ a_ij x_j + e_i = b_i (avec e_i ≥ 0)." },
            { question: "Comment passer d'une contrainte '≥' à une forme standard ?", answer: "En retranchant une variable d'écart positive : ∑ a_ij x_j - e_i = b_i (avec e_i ≥ 0)." },
            { question: "Qu'est-ce qu'une droite d'iso-profit en résolution graphique ?", answer: "Droite d'équation c₁ x₁ + c₂ x₂ = k représentant l'ensemble des points pour lesquels la fonction objectif prend la même valeur k." },
            { question: "Quels sont les 4 cas de figures possibles en résolution graphique ?", answer: "1. Solution optimale unique ; 2. Infinité de solutions (segment d'optima) ; 3. Solution non bornée (z* = +∞) ; 4. Domaine vide (inadmissibilité)." },
            
            { question: "Propriété : Convexité du domaine admissible", answer: "L'ensemble D = {x ∣ A x = b, x ≥ 0} des solutions réalisables d'un PL est un ensemble convexe (polyèdre)." },
            { question: "Définition : Solution de Base (SDB)", answer: "Solution unique x = (x_B, x_N) de A x = b obtenue en choisissant une sous-matrice inversible A_B (m×m) et en posant les variables hors-base x_N = 0." },
            { question: "Définition : Solution de Base Réalisable (BFS)", answer: "Solution de base x vérifiant la contrainte de non-négativité : x_B = A_B⁻¹ b ≥ 0." },
            { question: "Qu'est-ce qu'une Solution de Base Dégénérée ?", answer: "C'est une solution de base réalisable dans laquelle au moins une variable de base est nulle ((x_B)_i = 0)." },
            { question: "Théorème Fondamental de la PL : Équivalence géométrique et algébrique", answer: "Pour tout point x d'un polyèdre, les 3 notions suivantes sont rigoureusement équivalentes : 1. Sommet (vertex) ; 2. Point extrême ; 3. Solution de Base Réalisable (BFS)." },
            { question: "Théorème d'existence de l'optimum en PL", answer: "Si un PL admet une solution réalisable et a une fonction objectif bornée, alors il existe au moins une solution optimale située en une Solution de Base Réalisable (un sommet)." },
            
            { question: "Définition : Coût Réduit (c̄_N)", answer: "c̄_Nᵀ = c_Nᵀ - c_Bᵀ A_B⁻¹ A_N. Il mesure la variation de la fonction objectif par unité d'augmentation de chaque variable hors-base." },
            { question: "Définition : Multiplicateur du Simplexe (Vecteur Dual λ)", answer: "Vecteur λᵀ = c_Bᵀ A_B⁻¹ vérifiant A_Bᵀ λ = c_B (en max), reliant les contraintes au coût réduit." },
            { question: "Critère d'optimalité du Simplexe (en Maximisation)", answer: "La solution de base réalisable courante est OPTIMALE si tous les coûts réduits sont négatifs ou nuls : c̄_j = c_j - z_j ≤ 0 pour tout j ∈ N." },
            { question: "Premier critère de Dantzig : Choix de la Variable Entrante (VE)", answer: "En maximisation, la variable hors-base qui entre en base est celle qui possède le coût réduit le plus strictement positif : e = arg max_{j ∈ N} (c̄_j > 0)." },
            { question: "Second critère de Dantzig : Choix de la Variable Sortante (VS)", answer: "Variable de base déterminée par le test du ratio minimum strictement positif : s = arg min_{i ∈ B} { (b̄_i / ā_ie) ∣ ā_ie > 0 }." },
            { question: "Que signifie une colonne pivot ā_e ≤ 0 lors du test du ratio ?", answer: "Cela signifie que la fonction objectif peut croître vers +∞ sans violer aucune contrainte : le problème est non borné." },
            
            { question: "Principe du pivotage de Gauss-Jordan dans le tableau du simplexe", answer: "Diviser la ligne pivot par le pivot pour obtenir 1, puis éliminer les coefficients de la colonne pivot sur toutes les autres lignes (y compris la ligne z) pour obtenir des 0." },
            { question: "Rôle des variables artificielles (a_i)", answer: "Variables positives introduites dans les contraintes de type '=' ou '≥' sans base évidente pour former la matrice identité initiale." },
            { question: "Principe de la méthode du Grand M (en Maximisation)", answer: "On affecte une pénalité très élevée -M à chaque variable artificielle a_i dans z pour forcer l'algorithme à les faire sortir de la base." },
            { question: "Que conclut-on si une variable artificielle reste strictement positive à l'optimum du Grand M ?", answer: "Le problème initial ne possède aucune solution réalisable (domaine admissible vide)." },
            { question: "Définition : Contrainte active (ou saturée)", answer: "Contrainte d'inégalité vérifiée à l'égalité stricte au point considéré (ex: a_iᵀ x = b_i)." },
            { question: "Formule du Gradient Réduit (∇ F(x_N))", answer: "∇ F(x_N) = ∇_N f(x) + A_Nᵀ λ où A_Bᵀ λ = -∇_B f(x)." },
            
            { question: "Conditions de Karush-Kuhn-Tucker (KKT) au 1er ordre", answer: "A x = b, x ≥ 0, ∇ f(x) + Aᵀ λ ≥ 0 et (∇ f(x) + Aᵀ λ)ᵀ x = 0." },
            { question: "Complexité théorique et pratique de l'Algorithme du Simplexe", answer: "Complexité théorique pire des cas : exponentielle (O(2ⁿ)). En pratique : très efficace et quasi-linéaire par rapport au nombre de contraintes." }
        ]
    },
    // ==========================================
    // 1. BASES DE PYTHON & NOTIONS FONDAMENTALES
    // ==========================================
    {
        id: "python-bases",
        category: "LANGAGE PYTHON",
        title: "Bases de Python & Fondamentaux",
        color: "#3572A5", // Python Blue
        icon: "🐍",
        description: "Bases de la syntaxe, types de données, structures de contrôle, fonctions, collections, fichiers et POO de base.",
        cards: [
            // --- Introduction & Environnement ---
            { question: "Mode d'exécution : Interprété vs Compilé", answer: "Python est traduit à la volée en bytecode puis exécuté par l'interpréteur instruction par instruction. Une erreur n'apparaît qu'à l'exécution de la ligne fautive (contrairement au C# compilé)." },
            { question: "Style officiel : PEP 8", answer: "Convention de style officielle de Python préconisant l'utilisation du snake_case pour les noms et de 4 espaces pour l'indentation." },
            { question: "Rôle de l'indentation", answer: "L'indentation (4 espaces) délimite les blocs de code suite au symbole ':'. Une mauvaise indentation provoque une 'IndentationError'." },
            { question: "Commentaires et Docstrings", answer: "Les commentaires s'écrivent avec '#' et les docstrings avec triple guillemets (\"\"\"Docstring\"\"\") pour décrire un module, une classe ou une fonction." },
            { question: "Distribution Anaconda", answer: "Distribution incluant Python, le gestionnaire conda, des IDE (Spyder, Jupyter) et des bibliothèques scientifiques (NumPy, pandas, Matplotlib)." },
            { question: "Avantages de Spyder", answer: "IDE adapté au calcul scientifique affichant sur un seul écran l'éditeur, l'explorateur de variables, la console IPython et le débogueur." },

            // --- Variables & Opérations ---
            { question: "Typage dynamique des variables", answer: "Pas de déclaration de type. La variable naît à sa 1re affectation et le type est porté par la valeur (obtenu via type())." },
            { question: "Types de données élémentaires", answer: "int (entiers), float (décimaux), str (chaînes), bool (booléens : True/False)." },
            { question: "Division réelle vs entière", answer: "'/' renvoie toujours un float (ex: 17/5 = 3.4). '//' réalise la division entière (ex: 17//5 = 3)." },
            { question: "Modulo et Puissance", answer: "'%' donne le reste de la division (17 % 5 = 2) et '**' calcule la puissance (17 ** 2 = 289)." },
            { question: "Opérateurs logiques", answer: "and (ET), or (OU), not (NON). Les comparaisons sont chaînables (ex: 5 < x < 10)." },
            { question: "Incrémentation en Python", answer: "Pas d'opérateur ++ ou --. On utilise l'affectation augmentée (ex: x += 1)." },
            { question: "Affectation multiple et échange", answer: "On peut affecter ou échanger en une ligne : a, b = 1, 2 puis a, b = b, a." },
            { question: "La valeur None", answer: "Représente l'absence de valeur. On la teste toujours avec l'opérateur d'identité 'is' (ex: result is None)." },

            // --- Entrées / Sorties & Formats ---
            { question: "Fonction print() : séparateur et fin", answer: "print(*objects, sep=' ', end='\\n'). Permet de modifier le séparateur d'affichage et le caractère de fin de ligne." },
            { question: "Fonction input()", answer: "Lit une saisie utilisateur et renvoie TOUJOURS une chaîne (str). Nécessite une conversion (int(), float())." },
            { question: "Vérification de chaîne numérique", answer: "text.isdigit() renvoie True si tous les caractères sont des chiffres entiers positifs." },
            { question: "Danger de eval()", answer: "eval(input()) ne doit JAMAIS être utilisé car il exécute n'importe quel code Python injecté." },
            { question: "f-strings (Formatage)", answer: "Syntaxe f\"{valeur:format}\". Exemples : f\"{price:.2f}\" (2 décimales), f\"{qty:05d}\" (remplissage 0), f\"{1000000:,}\" (séparateur milliers), f\"{qty*2=}\" (débogage)." },

            // --- Control Flow (Conditions & Boucles) ---
            { question: "Conditions : if, elif, else", answer: "Structure conditionnelle sans parenthèses obligatoires, délimitée par ':' et l'indentation." },
            { question: "Opérateur ternaire", answer: "Expression conditionnelle : valeur_si_vrai if condition else valeur_si_faux." },
            { question: "Match / Case (Python 3.10+)", answer: "Équivalent du switch : match var: case val1: ... case val2: ... case _: (cas par défaut)." },
            { question: "Valeurs évaluées à Faux (Truthy/Falsy)", answer: "0, 0.0, \"\", [], {}, set(), None et False sont tous évalués à Faux dans un test booléen." },
            { question: "Boucle for et range()", answer: "Parcourt les éléments d'une séquence. range(début, fin, pas) génère des entiers (la borne de fin est toujours exclue)." },
            { question: "Boucle while", answer: "Répète un bloc tant que la condition est True. La logique d'arrêt doit être portée par la condition." },
            { question: "Algorithme de recherche sans break", answer: "while index < len(lst) and lst[index] != target: index += 1. L'évaluation paresseuse du 'and' protège contre l'IndexError." },

            // --- Fonctions (Bases) ---
            { question: "Définition d'une fonction", answer: "def nom_fonction(paramètres): suivi d'un bloc indenté. Renvoie None si aucun 'return' n'est exécuté." },
            { question: "Annotations de type (Type Hints)", answer: "Documente le type des paramètres et du retour sans obligation à l'exécution : def power(base: float, exponent: int = 2) -> float:" },
            { question: "Paramètres par défaut et arguments nommés", answer: "Les paramètres par défaut doivent être placés à la fin. Lors de l'appel, les arguments nommés s'affranchissent de l'ordre." },
            { question: "Piège des arguments par défaut modifiables", answer: "Ne jamais utiliser d'objet modifiable ([] ou {}) comme valeur par défaut d'une fonction. Utiliser None et l'initialiser dans la fonction." },
            { question: "Variable d'arguments positionnels *args", answer: "Regroupe un nombre variable d'arguments positionnels non nommés sous forme de tuple." },
            { question: "Variable d'arguments nommés **kwargs", answer: "Regroupe un nombre variable d'arguments nommés sous forme de dictionnaire." },
            { question: "Récursivité", answer: "Fonction qui s'appelle elle-même. Nécessite au moins un cas de base pour stopper l'empilement des appels." },

            // --- Séquences & Collections (Bases) ---
            { question: "Propriétés communes aux séquences", answer: "Partagées par str, list, tuple, range : in, +, *, len(), min(), max(), .index(), .count(), indexation s[i]." },
            { question: "Indexation négative", answer: "s[-1] accède au dernier élément d'une séquence, s[-2] à l'avant-dernier." },
            { question: "Slicing (Tranches)", answer: "s[début:fin:pas] (fin exclue). s[::-1] inverse la séquence. Une tranche hors limites ne produit PAS d'IndexError." },
            { question: "Chaîne de caractères (str)", answer: "Séquence IMMUABLE de caractères. Les modifications créent toujours une nouvelle instance." },
            { question: "Méthodes de str fondamentales", answer: ".lower(), .upper(), .strip() (enlève espaces aux bords), .replace(old, new), .startswith(), .endswith(), .isdigit()." },
            { question: "Méthodes str : split() vs split(' ')", answer: "split() coupe sur tout blanc et ignore les espaces consécutifs. split(' ') coupe à chaque espace strict, créant des chaînes vides." },
            { question: "Méthode str : join()", answer: "Rassemble la liste de chaînes avec un séparateur : \"-\".join([\"a\", \"b\"]) produit \"a-b\"." },
            { question: "Liste (list)", answer: "Collection ordonnée et MODIFIABLE d'éléments. Syntaxe : [1, 2, 3]." },
            { question: "Méthodes principales de list", answer: ".append(x) (ajoute à la fin), .insert(i, x), .extend(seq) ou +=, .remove(x) (supprime 1re occurence), .pop() (retire et renvoie le dernier)." },
            { question: "Copie de liste : alias vs copie", answer: "b = a crée un alias (même objet en mémoire). b = a.copy() ou b = a[:] crée une copie superficielle." },
            { question: "Copie superficielle vs Copie profonde", answer: "Copie superficielle (list.copy(), [:]) duplique le conteneur mais partage les sous-objets. copy.deepcopy() duplique tout récursivement." },
            { question: "Tuple (tuple)", answer: "Collection ordonnée et IMMUABLE. Syntaxe : (1, 2). Un tuple d'un seul élément nécessite une virgule : (42,)." },
            { question: "Déballage (Unpacking)", answer: "Extraction directe des éléments d'un tuple ou liste dans des variables : x, y = (3, 4)." },
            { question: "Dictionnaire (dict)", answer: "Collection de paires clé/valeur. Clés uniques et hachables (immuables). Syntaxe : {\"k\": v}." },
            { question: "Accès et sécurité dans dict", answer: "dict[key] lève une KeyError si la clé est absente. dict.get(key, default) renvoie la valeur par défaut si elle n'existe pas." },
            { question: "Vues de dictionnaire", answer: "dict.keys(), dict.values(), dict.items() renvoient des vues dynamiques (qui reflètent les modifications du dictionnaire) et non des copies." },
            { question: "Fusion de dictionnaires (Python 3.9+)", answer: "L'opérateur '|' fusionne deux dictionnaires : c = a | b. En cas de clé commune, la valeur de droite (b) prévaut." },
            { question: "Ensemble (set)", answer: "Collection NON ORDONNÉE d'éléments UNIQUES. Doublons automatiquement ignorés. Syntaxe : {1, 2}." },
            { question: "Création d'un set vide", answer: "{} crée un dictionnaire vide. Pour créer un ensemble vide, il faut impérativement écrire set()." },
            { question: "Opérations ensemblistes", answer: "| (union), & (intersection), - (différence), ^ (différence symétrique), <= (inclusion). Pas d'opérateur '+'." },
            { question: "Méthodes de set : remove vs discard", answer: "set.remove(x) lève une KeyError si x est absent. set.discard(x) ne lève pas d'erreur." },
            { question: "Conversions entre collections", answer: "list(), tuple(), set() convertissent n'importe quel itérable. set(lst) supprime les doublons." },

            // --- Fichiers (Bases) ---
            { question: "Gestionnaire de contexte avec (with)", answer: "Garantit la fermeture automatique du fichier à la sortie du bloc, même en cas d'exception." },
            { question: "Modes d'ouverture de fichiers", answer: "'r' (lecture), 'w' (écriture avec écrasement), 'a' (ajout à la fin), 'x' (création exclusive, échoue si le fichier existe)." },
            { question: "Encodage des fichiers", answer: "Toujours expliciter l'encodage lors de l'ouverture d'un fichier texte : encoding=\"utf-8\"." },

            // --- Programmation Orientée Objet (Bases) ---
            { question: "Définition d'une classe et constructeur", answer: "class NomClasse: puis def __init__(self, arg): pour initialiser les attributs d'instance. Pas de mot-clé 'new'." },
            { question: "Rôle de self", answer: "Représente l'instance courante de l'objet. Doit être le premier paramètre explicite de toutes les méthodes d'instance." },
            { question: "Encapsulation et convention privée", answer: "Python n'a pas de modificateur 'private'. Un préfixe par un souligné (_attribut) signale un usage interne." },
            { question: "Attribut d'instance vs Attribut de classe", answer: "L'attribut d'instance (self.x) est propre à chaque objet. L'attribut de classe est défini dans le corps de la classe et partagé par toutes les instances." },
            { question: "Méthodes spéciales d'affichage : __str__ et __repr__", answer: "__str__ définit le texte lisible pour l'utilisateur (print(), str()). __repr__ définit le texte précis pour le développeur." },
            { question: "Surcharge d'opérateurs", answer: "Exemples de méthodes spéciales : __add__ (+), __eq__ (==), __len__ (len()), __getitem__ (indexation [])." }
        ]
    },

    // ==========================================
    // 2. PYTHON AVANCÉ - AVANCER PLUS LOIN
    // ==========================================
    {
        id: "python-avance",
        category: "LANGAGE PYTHON",
        title: "Python Avancé & Fonctionnalités Avancées",
        color: "#2b5b84",
        icon: "🚀",
        description: "Compréhensions, fonctions intégrées, lambdas, générateurs, portée LEGB, héritage multiple, exceptions et sérialisation.",
        cards: [
            // --- Compréhensions ---
            { question: "Compréhension de liste (Syntaxe)", answer: "[expression for item in iterable if condition]. Crée une nouvelle liste de façon concise." },
            { question: "Position du 'if' dans une compréhension", answer: "À la fin : sert de filtre (ex: [x for x in nums if x > 0]). Au début avec 'else' : transforme la valeur (ex: [x if x > 0 else 0 for x in nums])." },
            { question: "Compréhension avec for imbriqués", answer: "[x for row in matrix for x in row]. L'ordre des 'for' respecte l'ordre d'imbrication des boucles classiques." },
            { question: "Compréhension de dictionnaire", answer: "{cle: valeur for item in iterable if condition}. Exemple : {w: len(w) for w in words}." },
            { question: "Compréhension d'ensemble", answer: "{expression for item in iterable}. Produit un ensemble sans doublons (distingué du dictionnaire par l'absence de ':')." },
            { question: "Quand éviter les compréhensions ?", answer: "Ne pas l'utiliser pour exécuter des effets de bord (ex: [print(x) for x in list]). Revenir à des boucles si la lisibilité est dégradée ou s'il y a plus de 2 'for/if'." },

            // --- Fonctions Intégrées Avancées ---
            { question: "Fonctions any() et all()", answer: "any(iterable) renvoie True si au moins un élément est True. all(iterable) renvoie True si TOUS les éléments sont True. Évaluation paresseuse (s'arrête dès que la réponse est connue)." },
            { question: "Fonctions min() / max() avec key et default", answer: "key=f spécifie une fonction critère (ex: max(words, key=len)). default=v évite une ValueError sur un itérable vide." },
            { question: "enumerate() et zip() avancés", answer: "enumerate(seq, start=1) fournit (indice, élément). zip(*pairs) réalise l'opération inverse (défaire un zip)." },
            { question: "Fonctions map() et filter()", answer: "map(f, seq) applique f à chaque élément. filter(f, seq) ne garde que les éléments où f(x) est Vrai. Renvoient des itérateurs paresseux." },
            { question: "filter(None, sequence)", answer: "Garde uniquement les éléments évalués à Vrai dans la séquence (supprime "", 0, None, False, [])." },
            { question: "functools.reduce()", answer: "Combiner les éléments deux à deux de manière cumulative : reduce(f, [1,2,3,4]) calcule f(f(f(1,2),3),4)." },
            { question: "reversed() vs list[::-1] vs list.reverse()", answer: "reversed(s) renvoie un itérateur paresseux sans copie. s[::-1] crée une nouvelle liste inversée. s.reverse() inverse la liste sur place et renvoie None." },
            { question: "sorted() vs list.sort()", answer: "sorted(iterable) renvoie une nouvelle liste triée sans modifier l'original. list.sort() trie la liste sur place et renvoie None." },
            { question: "Stabilité des tri", answer: "Le tri en Python est stable : l'ordre relatif d'origine des éléments ayant la même clé de tri est préservé." },

            // --- Fonctions First-Class & Lambdas ---
            { question: "Fonctions comme objets (First-Class Functions)", answer: "Une fonction peut être assignée à une variable, passée en argument d'une autre fonction (ex: key=) ou renvoyée par une fonction." },
            { question: "Lambda expressions (Syntaxe & Limites)", answer: "lambda param1, param2: expression. Fonction anonyme restreinte à une SEULE expression. Pas de return, d'affectation ni de boucle." },
            { question: "Recommandation PEP 8 pour lambda", answer: "Ne jamais faire d'affectation 'f = lambda x: ...'. Privilégier la définition standard 'def f(x):' pour garder les noms explicites dans les tracebacks." },

            // --- Générateurs & yield ---
            { question: "Expression génératrice", answer: "Syntaxe entre parenthèses : (n*n for n in range(1000)). Ne stocke pas les résultats en mémoire, produit les valeurs à la demande." },
            { question: "Gain mémoire des générateurs", answer: "Consommation mémoire constante (O(1)) quelle que soit la quantité de données générées (contrairement aux listes O(N))." },
            { question: "Usage unique des générateurs", answer: "Un générateur s'épuise après un parcours complet. Une deuxième lecture renverra un itérable vide." },
            { question: "Fonction génératrice et mot-clé yield", answer: "Une fonction contenant 'yield' suspend son exécution, renvoie la valeur courante et conserve son état local pour l'appel next() suivant." },
            { question: "Fonctionnement de next() et StopIteration", answer: "next(gen) avance le générateur jusqu'au prochain yield. Quand la fonction se termine, Python lève une exception StopIteration." },
            { question: "Pipeline de générateurs", answer: "Chaînage de fonctions génératrices se consommant les unes les autres (ex: evens(read_numbers(file))). Traite de gros volumes de données sans charger tout le fichier en mémoire." },

            // --- Portée des Noms (Règle LEGB) ---
            { question: "Règle LEGB (Ordre de recherche)", answer: "Recherche des variables de l'intérieur vers l'extérieur : Local -> Enclosing (englobante) -> Global (module) -> Built-in (intégré)." },
            { question: "Erreur UnboundLocalError", answer: "Survient si une fonction tente de lire une variable globale puis de lui affecter une valeur dans le même corps sans l'avoir déclarée 'global'." },
            { question: "Mot-clé global", answer: "Déclare au sein d'une fonction qu'un nom fait référence à la variable du niveau module (global) afin de pouvoir la modifier." },
            { question: "Mot-clé nonlocal et Fermetures (Closures)", answer: "nonlocal permet de modifier une variable appartenant à la portée de la fonction englobante (Enclosing). Permet de créer un état persistant." },
            { question: "Masquage de Built-ins (Built-in Shadowing)", answer: "Créer une variable nommée comme une fonction intégrée (ex: sum = 10) masque le Built-in et provoque une TypeError lors d'un appel futur. 'del sum' restaure l'accès." },

            // --- POO Avancée & Héritage Multiple ---
            { question: "Héritage multiple", answer: "Une classe peut hériter de plusieurs classes mères : class Duck(Flyer, Swimmer):." },
            { question: "Problème du diamant (Diamond Problem)", answer: "Ambigüité survenue lorsqu'une classe hérite de deux classes ayant une même classe mère en commun." },
            { question: "MRO (Method Resolution Order)", answer: "Ordre algorithmique (C3 linearization) dans lequel Python parcourt les classes pour trouver une méthode ou un attribut. Accessible via Classe.__mro__." },
            { question: "Règles de la MRO", answer: "1. Une classe fille passe avant ses parents. 2. L'ordre de déclaration des parents est conservé. 3. Un parent commun passe après tous ses enfants." },
            { question: "Fonction super() en héritage multiple", answer: "super() n'appelle pas le parent direct mais la CLASSE SUIVANTE dans la MRO du type réel de l'instance courante." },

            // --- Exceptions Avancées ---
            { question: "Hiérarchie des exceptions", answer: "Toutes les exceptions dérivent de BaseException. Les erreurs applicatives dérivent d'Exception (KeyboardInterrupt et SystemExit dérivent directement de BaseException)." },
            { question: "Bloc try / except / else / finally", answer: "try: code à risque. except: gestion d'erreur. else: s'exécute SI AUCUNE erreur ne survient. finally: s'exécute TOUJOURS (libération de ressources)." },
            { question: "Levée d'exception avec raise", answer: "raise ValueError(\"message\") interrompt le flux et lève une exception. Un 'raise' seul dans un except relance l'exception courante." },
            { question: "Exceptions personnalisées", answer: "Créées en créant une sous-classe d'Exception : class MyError(Exception): pass." },
            { question: "Chaining d'exceptions avec raise ... from", answer: "raise NewException(...) from e permet d'encapsuler une erreur bas niveau dans une erreur métier tout en conservant la cause d'origine dans __cause__." },
            { question: "Bonnes pratiques : Jamais de 'except:' nu", answer: "Ne jamais intercepter toutes les exceptions sans type (except: nu) car cela masque les erreurs de syntaxe, les bugs et le Ctrl+C. Intercepter des exceptions précises." },
            { question: "Style EAFP vs LBYL", answer: "Python privilégie le style EAFP ('Easier to ask for forgiveness than permission' via try/except) au LBYL ('Look before you leap' avec des séries de if)." },

            // --- Sérialisation (JSON & Pickle) ---
            { question: "Sérialisation JSON (Module json)", answer: "Format texte universel et lisible. json.dumps()/loads() (chaîne), json.dump()/load() (fichier). ensure_ascii=False préserve les accents, indent=2 formate." },
            { question: "Limites de JSON", answer: "Ne gère que les types de base (dict, list, str, int, float, bool, None). Les clés sont converties en str, les tuples deviennent des listes. Les sets et objets custom lèvent une TypeError." },
            { question: "Sérialisation Pickle (Module pickle)", answer: "Format binaire spécifique à Python. Permet de sauvegarder presque n'importe quel objet (instances, tuples, ensembles). Nécessite d'ouvrir les fichiers en mode binaire ('rb', 'wb')." },
            { question: "Danger de sécurité de Pickle", answer: "Ne JAMAIS dé-sérialiser (pickle.load) des données d'origine inconnue. Pickle peut exécuter du code arbitraire malveillant lors du chargement !" },
            { question: "JSON vs Pickle (Récapitulatif)", answer: "JSON : Texte, universel, sécurisé, idéal pour le web et la config. Pickle : Binaire, Python uniquement, non sécurisé avec de l'inconnu, idéal pour le cache/état Python interne." }
        ]
    },

    // ==========================================
    // 4. NOUVEAU DECK : BDD & INTEROPERABILITE - CM1
    // ==========================================
    {
        id: "bdd-cm1",
        category: "BDD & INTEROPERABILITE",
        title: "CM1 : Rappels fondamentaux, MCD & SQL de base",
        color: "#8e44ad", // Violet
        icon: "🗄️",
        description: "Définitions des BDD, SGBD client/serveur, modélisation MCD, DDL, DML, DQL, jointures et fonctions d'agrégation.",
        cards: [
            { question: "Définition : Base de données (BDD)", answer: "Ensemble d'informations structurées mémorisées sur un support persistant[cite: 8]." },
            { question: "Caractéristiques principales d'une BDD", answer: "Données organisées/stockées selon un modèle, partagées par différents utilisateurs, faible redondance, indépendance des données et facilement extensible[cite: 8]." },
            { question: "Définition : SGBD (Système de Gestion de Base de Données)", answer: "Ensemble de programmes assurant la gestion et l'accès à une BDD (ajout, modification, recherche)[cite: 9]." },
            { question: "Fonctionnement moderne des SGBD", answer: "Mode client/serveur : le serveur stocke les données et traite de manière concurrente les requêtes envoyées par plusieurs clients[cite: 9]." },
            { question: "Définition : MCD (Modèle Conceptuel des Données)", answer: "Représentation graphique de haut niveau comprenant des entités, des propriétés, des associations et des cardinalités[cite: 10, 12]." },
            { question: "Définition : Base de données relationnelle (RDB)", answer: "Méthode de structuration des informations dans des tables, lignes et colonnes, permettant d'établir des liens par jointures[cite: 13]." },
            { question: "Que signifient DDL, DML et DQL en SQL ?", answer: "DDL : Langage de Définition de données ; DML : Langage de Manipulation de données ; DQL : Langage de Requête[cite: 15]." },
            { question: "Sensibilité à la casse en SQL", answer: "Les mots-clés SQL ne sont pas sensibles à la casse (conseil : les écrire en MAJUSCULES). Les noms de tables/colonnes dépendent du SGBD et de l'OS[cite: 16]." },
            { question: "Exemples de SGBD cités dans le cours", answer: "MySQL (open source, Oracle), PL/SQL (procédural propriétaire Oracle), T-SQL (extension Microsoft/Sybase)[cite: 17]." },
            { question: "Commandes DDL de base pour les bases", answer: "CREATE DATABASE [IF NOT EXISTS] db_name; USE db_name; SHOW DATABASES; DROP DATABASE [IF EXISTS] db_name;[cite: 18]" },
            { question: "Syntaxe de création d'une table", answer: "CREATE TABLE table_name (col1 datatype, col2 datatype, ..., PRIMARY KEY(col_pk));[cite: 19]" },
            { question: "Différence entre DROP TABLE et TRUNCATE TABLE", answer: "DROP TABLE supprime la table entière (structure et données). TRUNCATE TABLE vide la table de ses données tout en conservant sa structure[cite: 21]." },
            { question: "Utilité de la clause SELECT DISTINCT", answer: "Utilisée pour ne renvoyer que des valeurs uniques en éliminant les doublons d'une colonne[cite: 23]." },
            { question: "Opérateurs disponibles dans la clause WHERE", answer: "Comparateurs (<, >, <=, >=, =, <>), logiques (AND, OR), textuels (LIKE), intervalles (BETWEEN ... AND ...), listes (IN (...)) et valeurs nulles (IS NULL / IS NOT NULL)[cite: 26]." },
            { question: "Pourquoi '= NULL' est incorrect en SQL ?", answer: "NULL représente une valeur absente ou inconnue. On doit obligatoirement utiliser 'IS NULL' ou 'IS NOT NULL'[cite: 26]." },
            { question: "Différence entre CHAR et VARCHAR", answer: "CHAR a une taille fixe (complété par des espaces, plus rapide pour tailles constantes). VARCHAR a une taille variable (économie d'espace, flexible)[cite: 29]." },
            { question: "Syntaxe de l'insertion SQL (INSERT INTO)", answer: "INSERT INTO table_name (col1, col2) VALUES (val1, val2); ou INSERT INTO table_name VALUES (val1, val2, ...);[cite: 28]" },
            { question: "Syntaxe de mise à jour (UPDATE)", answer: "UPDATE table_name SET col1 = val1, col2 = val2 WHERE condition; (Attention à ne pas oublier le WHERE sous peine de mettre à jour toute la table !)[cite: 32]" },
            { question: "Modification structurelle d'une table (ALTER TABLE)", answer: "Permet d'ajouter (ADD), supprimer (DROP COLUMN) ou modifier (MODIFY COLUMN) des colonnes d'une table existante[cite: 34]." },
            { question: "Utilité des alias SQL (AS)", answer: "Permettent de donner un nom temporaire plus lisible à une table ou à une colonne pour la durée d'une seule requête[cite: 35]." },
            { question: "Rôles des contraintes en SQL", answer: "Garantir l'exactitude et la fiabilité des données. Exemples : NOT NULL, DEFAULT, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK[cite: 36]." },
            { question: "Fonctionnement de la contrainte CHECK", answer: "Garantit que toutes les valeurs insérées dans une colonne respectent une condition logique précise (ex: CHECK (P_Id > 0))[cite: 37]." },
            { question: "Utilité de la clause ORDER BY", answer: "Permet de trier le résultat d'une requête selon un ou plusieurs attributs, par défaut en ordre croissant (ASC) ou décroissant (DESC)[cite: 40]." },
            { question: "Qu'est-ce qu'une jointure SQL (JOIN) ?", answer: "Opération permettant de combiner les lignes de deux tables ou plus sur la base de champs communs (colonnes de liaison)[cite: 41]." },
            { question: "Différence entre INNER JOIN et LEFT JOIN", answer: "INNER JOIN ne renvoie que les lignes ayant une correspondance dans les deux tables. LEFT JOIN renvoie toutes les lignes de la table de gauche, même sans correspondance à droite[cite: 44]." },
            { question: "Qu'est-ce qu'un NATURAL JOIN (jointure naturelle) ?", answer: "Jointure automatique basée sur l'égalité des attributs portant le même nom dans les deux tables, avec suppression des colonnes en double dans le résultat[cite: 46]." },
            { question: "Rôle de GROUP BY et fonctions d'agrégation", answer: "GROUP BY regroupe un ensemble de résultats selon une ou plusieurs colonnes pour y appliquer des fonctions d'agrégation (AVG, COUNT, MAX, MIN, SUM)[cite: 47, 48]." },
            { question: "Différence entre WHERE et HAVING", answer: "WHERE filtre les lignes avant le regroupement. HAVING filtre les groupes générés par la clause GROUP BY[cite: 51]." },
            { question: "Utilité des sous-requêtes en SQL", answer: "Permettent d'imbriquer une requête dans une autre (dans le WHERE, le FROM ou pour comparer avec des agrégats) pour structurer des traitements complexes[cite: 53]." },
            { question: "Rôle des opérateurs IN, ANY, ALL et EXISTS", answer: "IN teste l'appartenance à une liste ; ANY / ALL comparent à un ensemble de valeurs retournées ; EXISTS vérifie si une sous-requête ramène au moins un résultat[cite: 54, 55]." }
        ]
    },

    // ==========================================
    // 5. NOUVEAU DECK : BDD & INTEROPERABILITE - CM2
    // ==========================================
    {
        id: "bdd-cm2",
        category: "BDD & INTEROPERABILITE",
        title: "CM2 : Vues, Index, Séquences & Optimisation",
        color: "#16a085", // Vert Emeraude
        icon: "📈",
        description: "Tables virtuelles (vues), conditions de mise à jour, index denses/non denses, arbres B+ et séquences auto-incrémentées.",
        cards: [
            { question: "Définition d'une vue (View)", answer: "Table virtuelle qui ne stocke pas physiquement les données, mais enregistre une expression de requête SQL évaluée dynamiquement[cite: 59, 61, 74]." },
            { question: "Principales raisons d'utiliser des vues", answer: "Simplifier et encapsuler les requêtes complexes, et renforcer la sécurité en masquant certaines données sensibles selon les utilisateurs[cite: 60]." },
            { question: "Syntaxe de création et suppression d'une vue", answer: "CREATE VIEW view_name AS <requête SQL>; et DROP VIEW view_name; (la suppression n'efface pas les données sous-jacentes)[cite: 61, 71]." },
            { question: "Conditions de modifiabilité d'une vue (vue actualisable)", answer: "La clause FROM ne contient qu'une seule table de base, pas de GROUP BY/HAVING, pas d'agrégats, pas de DISTINCT, et les attributs non listés tolèrent les valeurs NULL[cite: 70]." },
            { question: "Pourquoi ne peut-on pas modifier une vue issue d'une jointure complexe ?", answer: "Car le SGBD ne peut pas déterminer de manière univoque quelle table de base mettre à jour simultanément (erreur 'Can not modify more than one base table through a join view')[cite: 69]." },
            { question: "Rôle de l'indépendance logique via les vues", answer: "Permet de modifier le schéma physique d'une table (ex: la scinder en deux) tout en maintenant l'ancien schéma logique accessible via une vue avec jointure[cite: 73]." },
            { question: "Qu'est-ce qu'une séquence en SQL / MySQL ?", answer: "Objet générant une suite automatique d'entiers (1, 2, 3...). MySQL simule ce comportement via l'attribut AUTO_INCREMENT[cite: 76]." },
            { question: "Comment récupérer la dernière valeur auto-incrémentée ?", answer: "En exécutant la fonction SELECT LAST_INSERT_ID();[cite: 79]." },
            { question: "Comment modifier le point de départ d'un auto-incrément ?", answer: "À l'aide de la commande ALTER TABLE table_name AUTO_INCREMENT = valeur;[cite: 79]." },
            { question: "Définition d'un index informatique", answer: "Structure de recherche (type table de correspondance ou pointeur) utilisée par le moteur de base de données pour accélérer considérablement la récupération des données sans balayage séquentiel[cite: 83, 88]." },
            { question: "Qu'est-ce qu'une entrée d'index ?", answer: "Un enregistrement constitué d'une paire de valeurs : [valeur_de_clé, adresse_physique] (adresse de bloc ou d'enregistrement)[cite: 89]." },
            { question: "Définition : Index primaire (ou index clusterisé)", answer: "Index dont la clé de recherche définit l'ordre physique du stockage des données dans le fichier. Il n'y en a qu'un seul par table[cite: 84, 85]." },
            { question: "Définition : Index secondaire (non clusterisé)", answer: "Index dont la clé de recherche spécifie un ordre logique différent de l'ordre physique de stockage des données[cite: 84]." },
            { question: "Différence majeure entre Clé Primaire et Index Primaire", answer: "La clé primaire garantit l'unicité et l'intégrité logique sans imposer d'ordre physique. L'index primaire (clusterisé) trie physiquement les enregistrements sur disque[cite: 85]." },
            { question: "Qu'est-ce qu'un index dense ?", answer: "Index qui possède une entrée pour chaque enregistrement (chaque valeur de clé) présent dans le fichier de données[cite: 95]." },
            { question: "Qu'est-ce qu'un index non dense (clairsemé) ?", answer: "Index qui ne possède qu'une seule entrée par bloc de données (généralement pointant vers la plus petite clé du bloc)[cite: 97, 100]." },
            { question: "Avantage et inconvénient de l'index non dense", answer: "Avantage : occupe beaucoup moins d'espace disque et de maintenance. Inconvénient : un peu plus lent qu'un index dense pour localiser des enregistrements isolés[cite: 100]." },
            { question: "Qu'est-ce qu'un index multi-niveaux ?", answer: "Structure hiérarchique construite en indexant un index non dense de niveau inférieur, réduisant les accès disque par une recherche arborescente (de type dichotomique)[cite: 102, 103]." },
            { question: "Définition d'un arbre B+ (B+-Tree)", answer: "Arbre équilibré de recherche, idéal pour les SGBD, où toutes les feuilles sont au même niveau et reliées entre elles par des pointeurs séquentiels, facilitant les recherches par intervalle[cite: 105, 108]." },
            { question: "Structure d'un nœud interne dans un arbre B+", answer: "Contient des pointeurs vers les sous-arbres (enfants) et des clés de séparation ordonnées permettant de guider la recherche[cite: 107, 109]." },
            { question: "Propriété d'équilibrage des arbres B+", answer: "Tous les chemins de la racine aux feuilles ont exactement la même longueur, garantissant des temps d'accès stables et performants[cite: 105, 146]." },
            { question: "Que se passe-t-il lors de l'insertion dans un nœud B+ plein ?", answer: "On effectue une opération d'éclatement (split) du nœud pour respecter les bornes maximales d'éléments par nœud[cite: 117]." },
            { question: "Que se passe-t-il lors de la suppression dans un arbre B+ ?", answer: "Si un nœud descend en dessous du nombre minimal de valeurs, on procède à des fusions ou des redistributions pour rééquilibrer l'arbre[cite: 140]." },
            { question: "Pourquoi les SGBD utilisent-ils massivement les arbres B+ ?", answer: "Parce qu'ils minimisent les entrées/sorties (I/O) disque grâce à leur structure équilibrée de grande branching factor et supportent excellemment les recherches par clés et par plages[cite: 105]." },
            { question: "Comment réinitialiser proprement une séquence auto-incrémentée en supprimant des lignes ?", answer: "Soit en modifiant l'index/auto-increment, soit en recréant la colonne ID avec la clause FIRST et PRIMARY KEY[cite: 80]." },
            { question: "Quel est l'impact d'un index sur les opérations d'écriture (INSERT, UPDATE, DELETE) ?", answer: "Il accélère les lectures (SELECT), mais ralentit légèrement les écritures car l'index doit être mis à jour et réorganisé à chaque modification[cite: 100]." },
            { question: "Qu'est-ce qu'une recherche par préfixe dans un index ?", answer: "Requête utilisant un opérateur comme LIKE 'M%' qui exploite l'ordre trié de l'index pour retrouver directement les entrées correspondantes[cite: 99]." },
            { question: "Quelle est la taille approximative d'un index par rapport au fichier de données ?", answer: "Beaucoup plus petite (souvent 10 à 100 fois plus compacte), ce qui permet de charger fréquemment l'index directement en mémoire vive (RAM)[cite: 96, 101]." },
            { question: "Peut-on créer un index sur plusieurs colonnes (index composite) ?", answer: "Oui, la clé d'indexation est alors une liste ordonnée de plusieurs attributs, très utile pour les requêtes filtrant sur plusieurs critères conjoints[cite: 89, 93]." },
            { question: "Que contient la base d'un nœud feuille dans un arbre B+ ?", answer: "Des clés de recherche associées à des pointeurs directs vers les enregistrements de données (ou buckets) correspondants[cite: 107, 108]." }
        ]
    },

    // ==========================================
    // 6. NOUVEAU DECK : BDD & INTEROPERABILITE - CM3
    // ==========================================
    {
        id: "bdd-cm3",
        category: "BDD & INTEROPERABILITE",
        title: "CM3 : PL/SQL (Langage Procédural & Triggers)",
        color: "#d35400", // Orange Foncé / Rouille
        icon: "⚙️",
        description: "Blocs PL/SQL, variables, structures de contrôle, curseurs, gestion des exceptions, fonctions, procédures, packages et déclencheurs.",
        cards: [
            { question: "Qu'est-ce que le PL/SQL ?", answer: "Procedural Language/Structured Query Language : langage procédural propriétaire créé par Oracle, combinant SQL et structures de programmation[cite: 17, 158]." },
            { question: "Quelles sont les trois sections d'un bloc PL/SQL ?", answer: "1. Section DECLARE (optionnelle) ; 2. Section BEGIN...END (obligatoire) ; 3. Section EXCEPTION (optionnelle)[cite: 159, 164]." },
            { question: "Quels sont les différents types de blocs PL/SQL ?", answer: "Blocs anonymes, blocs nommés, sous-programmes (procédures, fonctions, packages) et triggers (déclencheurs)[cite: 160]." },
            { question: "Comment déclarer une variable typée par référence à une colonne ?", answer: "nom_variable nom_table.nom_attribut%TYPE;[cite: 171]" },
            { question: "Qu'est-ce qu'une variable de type %ROWTYPE ?", answer: "Variable enregistrement qui représente une ligne entière d'une table ou d'un curseur (ex: cn OEHR_COUNTRIES%ROWTYPE)[cite: 175]." },
            { question: "Comment déclarer et utiliser une table en PL/SQL (index-by table) ?", answer: "TYPE nom_type IS TABLE OF type_elem INDEX BY BINARY_INTEGER; puis déclaration de la variable et manipulation via un indice entier[cite: 182, 183]." },
            { question: "Quelles sont les structures alternatives en PL/SQL ?", answer: "IF-THEN, IF-THEN-ELSE et la structure CASE[cite: 185, 186, 187]." },
            { question: "Quelles sont les boucles (structures répétitives) en PL/SQL ?", answer: "WHILE ... LOOP, FOR i IN min..max LOOP, et la boucle simple LOOP ... EXIT WHEN ... END LOOP[cite: 188, 189, 190]." },
            { question: "Qu'est-ce qu'un curseur en PL/SQL ?", answer: "Structure de programmation permettant de parcourir et traiter les résultats d'une requête SQL ligne par ligne de manière itérative[cite: 191]." },
            { question: "Quelles sont les étapes d'utilisation d'un curseur explicite ?", answer: "1. Déclaration (CURSOR c IS ...) ; 2. Ouverture (OPEN c) ; 3. Récupération itérative (FETCH c INTO ...) ; 4. Fermeture (CLOSE c)[cite: 192]." },
            { question: "Comment détecter la fin d'un curseur avec une boucle ?", answer: "En testant la condition d'arrêt EXIT WHEN c%NOTFOUND;[cite: 192]." },
            { question: "Quelles fonctions permettent de gérer les erreurs standard ?", answer: "SQLCODE (renvoie le code d'erreur numérique) et SQLERRM (renvoie le message textuel associé)[cite: 196]." },
            { question: "Donnez des exemples d'exceptions prédéfinies en PL/SQL", answer: "NO_DATA_FOUND, DUP_VAL_ON_INDEX, VALUE_ERROR, ZERO_DIVIDE, TOO_MANY_ROWS[cite: 195, 198]." },
            { question: "Syntaxe de définition d'une procédure stockée", answer: "CREATE [OR REPLACE] PROCEDURE nom_proc (param [IN/OUT] type) IS / AS BEGIN ... END nom_proc;[cite: 199]." },
            { question: "Syntaxe de définition d'une fonction stockée", answer: "CREATE [OR REPLACE] FUNCTION nom_func (param IN type) RETURN type_retour IS / AS BEGIN ... RETURN val; END nom_func;[cite: 201]." },
            { question: "Différence fondamentale entre Procédure et Fonction", answer: "Une fonction doit obligatoirement retourner une valeur (via RETURN) et ne possède que des paramètres d'entrée (IN). Une procédure ne retourne pas de valeur directe et gère les modes IN, OUT et IN OUT[cite: 201, 206]." },
            { question: "Qu'est-ce qu'un package en PL/SQL ?", answer: "Objet de base de données regroupant des types, variables, curseurs, procédures et fonctions connexes en une seule unité (séparée en PACKAGE SPEC et PACKAGE BODY)[cite: 207, 208]." },
            { question: "Qu'est-ce que la surcharge (overloading) dans un package ?", answer: "Possibilité de définir plusieurs procédures ou fonctions portant le même nom mais ayant des listes de paramètres différentes[cite: 213]." },
            { question: "Qu'est-ce qu'un déclencheur (trigger) ?", answer: "Objet de base de données exécuté automatiquement (implicitement) en réponse à un événement DML (INSERT, UPDATE, DELETE) sur une table[cite: 214]." },
            { question: "Combien existe-t-il de types de déclencheurs combinatoires ?", answer: "12 types au total, issus de la combinaison de 3 événements (INSERT, UPDATE, DELETE), 2 moments (BEFORE, AFTER) et 2 modes (Statement ou FOR EACH ROW)[cite: 215]." },
            { question: "Que signifient :NEW et :OLD dans un trigger ligne ?", answer: ":OLD représente la valeur de la ligne avant la modification DML, et :NEW représente la nouvelle valeur après modification[cite: 221]." },
            { question: "Quel est l'ordre d'exécution des déclencheurs sur une table ?", answer: "1. BEFORE Statement ; 2. BEFORE Row ; 3. Opération DML ; 4. AFTER Row ; 5. AFTER Statement[cite: 217]." },
            { question: "Peut-on stocker un trigger à l'intérieur d'un package ?", answer: "Non, les déclencheurs ne peuvent pas être intégrés dans un package[cite: 214]." },
            { question: "Que se passe-t-il si une exception non gérée survient dans un trigger BEFORE ?", answer: "L'opération DML déclenchante (ex: l'insertion) est entièrement annulée et échoue[cite: 219]." },
            { question: "Comment désactiver temporairement un trigger ou tous les triggers d'une table ?", answer: "ALTER TRIGGER nom_trigger DISABLE; ou ALTER TABLE nom_table DISABLE ALL TRIGGERS;[cite: 224]" },
            { question: "Comment s'effectue l'appel d'une fonction stockée en PL/SQL ?", answer: "v_result := nom_fonction(parametres); ou via les commandes interactives EXECUTE / SELECT[cite: 204]." },
            { question: "Quelle est l'utilité des sous-programmes stockés (côté serveur) ?", answer: "Améliorer l'architecture client/serveur en évitant de transférer du code en boucle, en centralisant la logique métier et en optimisant les performances[cite: 158]." },
            { question: "Comment gère-t-on les paramètres en sortie (OUT) dans une procédure ?", answer: "Le paramètre est passé par référence et reçoit une valeur modifiée à l'intérieur du bloc, récupérable par l'appelant[cite: 199, 206]." },
            { question: "Comment intercepter toutes les autres erreurs non explicitement listées ?", answer: "En utilisant la clause WHEN OTHERS THEN dans la section EXCEPTION[cite: 197]." },
            { question: "Quelle commande permet de supprimer un package complet ?", answer: "DROP PACKAGE nom_package; (ou DROP PACKAGE BODY nom_package; pour supprimer uniquement le corps)[cite: 212]." }
        ]
    },

    // ==========================================
    // 7. NOUVEAU DECK : BDD & INTEROPERABILITE - CM4
    // ==========================================
    {
        id: "bdd-cm4",
        category: "BDD & INTEROPERABILITE",
        title: "CM4 : Management des Transactions & Concurrence",
        color: "#c0392b", // Rouge Profond / Bordeaux
        icon: "🔒",
        description: "Propriétés ACID, exécutions concurrentes, anomalies transactionnelles, niveaux d'isolation, COMMIT, ROLLBACK et verrous.",
        cards: [
            { question: "Définition d'une transaction", answer: "Ensemble ordonné d'opérations de mise à jour (INSERT, UPDATE, DELETE) qui sera entièrement validé (COMMIT) ou entièrement annulé (ROLLBACK)[cite: 230]." },
            { question: "Que signifient les propriétés ACID ?", answer: "Atomicité, Cohérence, Isolation et Durabilité[cite: 233]." },
            { question: "Définissez l'Atomicité (A d'ACID)", answer: "Une transaction s'exécute complètement ou pas du tout (tout ou rien)[cite: 233]." },
            { question: "Définissez la Cohérence (C d'ACID)", answer: "Une transaction garantit le passage d'un état valide (cohérent) de la base de données à un autre état valide[cite: 233]." },
            { question: "Définissez l'Isolation (I d'ACID)", answer: "Les transactions concurrentes s'exécutent comme si chacune était seule sur la base, sans interférences indésirables[cite: 233]." },
            { question: "Définissez la Durabilité (D d'ACID)", answer: "Une fois qu'une transaction a validé son COMMIT, ses résultats sont permanents et survivent à un incident ou une panne[cite: 233]." },
            { question: "Quelles sont les 4 principales anomalies transactionnelles ?", answer: "1. Les mises à jour perdues ; 2. Les lectures sales (dirty reads) ; 3. Les lectures non répétables ; 4. Les lectures fantômes[cite: 234]." },
            { question: "Qu'est-ce qu'une mise à jour perdue ?", answer: "Anomalie où deux transactions modifient les mêmes données en concurrence, et la dernière validation écrase et annule les modifications de la première[cite: 235]." },
            { question: "Qu'est-ce qu'une lecture sale (dirty read) ?", answer: "Fait de lire dans une transaction des données modifiées par une autre transaction non encore validée, qui subira ensuite un ROLLBACK[cite: 242]." },
            { question: "Qu'est-ce qu'une lecture non répétable ?", answer: "Fait de lire deux fois la même ligne au cours d'une même transaction et d'obtenir des valeurs différentes parce qu'une autre transaction a validé une modification entre-temps[cite: 244]." },
            { question: "Qu'est-ce qu'une lecture fantôme ?", answer: "Fait de relancer une requête de sélection sur une plage de tuples et de voir apparaître de nouveaux enregistrements (fantômes) insérés et validés par une autre transaction concurrente[cite: 246, 248]." },
            { question: "Quels sont les 4 niveaux d'isolation standard SQL ?", answer: "1. Read Uncommitted ; 2. Read Committed ; 3. Repeatable Read ; 4. Serializable[cite: 250]." },
            { question: "Caractéristiques du niveau Read Uncommitted", answer: "Le plus laxiste : toutes les anomalies (lectures sales, non répétables, fantômes) sont possibles[cite: 263]." },
            { question: "Caractéristiques du niveau Read Committed", answer: "Évite les lectures sales, mais autorise les mises à jour perdues, les lectures non répétables et les fantômes[cite: 257, 263]." },
            { question: "Caractéristiques du niveau Repeatable Read", answer: "Évite les lectures sales et les lectures non répétables. Seules les lectures fantômes restent possibles (niveau par défaut sous MySQL InnoDB)[cite: 250, 261, 263]." },
            { question: "Caractéristiques du niveau Serializable", answer: "Isolation totale et stricte : aucune anomalie possible, garantie de cohérence absolue, mais risque accru d'interblocages (deadlocks) et baisse de concurrence[cite: 262, 263]." },
            { question: "Comment consulter le niveau d'isolation actuel dans MySQL ?", answer: "SELECT @@transaction_ISOLATION;[cite: 250]" },
            { question: "Comment modifier le niveau d'isolation d'une session ?", answer: "SET SESSION TRANSACTION ISOLATION LEVEL [READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE];[cite: 251, 258, 261, 262]" },
            { question: "Comment débute-t-on une transaction explicitement en SQL ?", answer: "Avec la commande START TRANSACTION; (ce qui désactive l'autocommit jusqu'au prochain COMMIT ou ROLLBACK)[cite: 264]." },
            { question: "Quel est l'effet de l'instruction COMMIT ?", answer: "Valide définitivement toutes les modifications effectuées au cours de la transaction en cours[cite: 230]." },
            { question: "Quel est l'effet de l'instruction ROLLBACK ?", answer: "Annule l'ensemble des modifications non validées de la transaction en cours et rétablit l'état antérieur[cite: 230]." },
            { question: "Qu'est-ce qu'un COMMIT implicite ?", answer: "Validation automatique et irréversible déclenchée par certaines commandes (notamment les instructions DDL comme CREATE, DROP, ALTER ou les verrouillages de tables)[cite: 265]." },
            { question: "Peut-on faire un ROLLBACK après une instruction DDL (ex: DROP TABLE) ?", answer: "Non ! Les instructions DDL provoquent un commit implicite, rendant impossible l'annulation par ROLLBACK[cite: 265, 266]." },
            { question: "Qu'est-ce qu'un interblocage (deadlock) ?", answer: "Situation où deux transactions s'attendent mutuellement en bloquant des ressources, rendant leur progression impossible sans l'intervention du SGBD qui en annule une[cite: 262]." },
            { question: "Pourquoi l'exécution en série pure est-elle pénalisante ?", answer: "Parce qu'elle supprime toute concurrence en bloquant l'accès à la base pour chaque utilisateur, détruisant les performances globales[cite: 240]." },
            { question: "Quelle clause SQL protège contre les mises à jour perdues en lecture répétable ?", answer: "La clause SELECT ... FOR UPDATE, qui pose un verrou exclusif sur les lignes lues pour empêcher toute modification concurrente[cite: 261]." },
            { question: "Quel SGBD utilise par défaut le niveau Repeatable Read ?", answer: "MySQL (via son moteur de stockage InnoDB)[cite: 250]." },
            { question: "Quel est le niveau d'isolation par défaut sous Oracle, SQL Server et PostgreSQL ?", answer: "Read Committed[cite: 250]." },
            { question: "Que se passe-t-il si on omet la clause WHERE dans un UPDATE au sein d'une transaction ?", answer: "Toutes les lignes de la table sont mises à jour, ce qui peut corrompre l'état logique si la transaction n'est pas annulée par ROLLBACK[cite: 32]." },
            { question: "Pourquoi les transactions concurrentes nécessitent-elles un contrôle strict ?", answer: "Pour empêcher la corruption des données, garantir la fiabilité financière/métier et maintenir les propriétés ACID malgré les entrelacements d'exécutions[cite: 233, 234]." }
        ]
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
