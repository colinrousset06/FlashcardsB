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
            { question: "Propriété : Inégalité de Cauchy-Schwarz", answer: "Pour tous x, y dans ℝ^n, le produit scalaire vérifie |<x, y>| <= ||x||_2 * ||y||_2." },
            { question: "Propriété : Inégalité de Minkowski", answer: "Pour tout p >= 1 et tous x, y, la norme p de la somme vérifie ||x + y||_p <= ||x||_p + ||y||_p." },
            { question: "Définition : Semi-norme", answer: "Application vérifiant l'homogénéité (||ax|| = |a|*||x||) et l'inégalité triangulaire (||x+y|| <= ||x|| + ||y||), pouvant s'annuler en un point non nul." },
            { question: "Définition : Norme", answer: "Semi-norme séparée : ||x|| = 0 implique x = 0." },
            { question: "Définition : Espace vectoriel normé (EVN)", answer: "Espace vectoriel muni d'une norme." },
            { question: "Définition : Distance induite par une norme", answer: "d(x, y) = ||x - y||." },
            { question: "Proposition : Stabilité des ouverts", answer: "Une union quelconque d'ouverts est un ouvert. Une intersection finie d'ouverts est un ouvert." },
            { question: "Proposition : Stabilité des fermés", answer: "Une intersection quelconque de fermés est un fermé. Une union finie de fermés est un fermé." },
            { question: "Proposition : Caractérisation séquentielle d'un fermé", answer: "Un ensemble F est fermé si et seulement si toute suite convergente d'éléments de F a sa limite dans F." },
            { question: "Proposition : Continuité et ouverts/fermés", answer: "Une application f est continue si et seulement si l'image réciproque de tout ouvert est un ouvert (ou l'image réciproque de tout fermé est un fermé)." },
            { question: "Définition : Intérieur d'un ensemble", answer: "Le plus grand ouvert inclus dans l'ensemble (réunion de tous les ouverts inclus)." },
            { question: "Définition : Adhérence d'un ensemble", answer: "Le plus petit fermé contenant l'ensemble (ensemble des limites de suites d'éléments de l'ensemble)." },
            { question: "Définition : Frontière d'un ensemble", answer: "Différence entre l'adhérence et l'intérieur de l'ensemble (Fr(A) = A_barre \\ A_int)." },
            { question: "Théorème 3.1 : Lemme de Lebesgue", answer: "Soit K compact et (Ui) un recouvrement ouvert. Il existe delta > 0 tel que toute boule de rayon < delta centrée dans K est incluse dans un des Ui." },
            { question: "Théorème 3.2 : Caractérisation de Borel-Lebesgue", answer: "Un sous-ensemble K d'un EVN est compact si et seulement si de tout recouvrement d'ouverts de K on peut extraire un recouvrement fini." },
            { question: "Théorème 3.3 : Théorème de Heine-Borel", answer: "Dans ℝ^n, un sous-ensemble est compact si et seulement s'il est fermé et borné." },
            { question: "Théorème 3.4 : Bolzano-Weierstrass dans ℝ^n", answer: "Toute suite bornée dans ℝ^n admet une sous-suite convergente." },
            { question: "Proposition : Image d'un compact par une fonction continue", answer: "L'image d'un compact par une application continue est un compact." },
            { question: "Théorème 4.1 : Théorème de Heine", answer: "Toute fonction continue d'un compact K dans ℝ^n est uniformément continue sur K." },
            { question: "Définition : Suite de Cauchy", answer: "Suite dont les termes se rapprochent arbitrairement les uns des autres lorsque les indices grandissent." },
            { question: "Définition : Espace de Banach", answer: "Espace vectoriel normé complet (toute suite de Cauchy y converge)." },
            { question: "Proposition 4.6 : Espace C(K, E)", answer: "Pour K compact et E de Banach, l'espace des fonctions continues muni de la norme uniforme ||f||_inf = sup ||f(x)||_E est un espace de Banach." },
            { question: "Théorème 5.1 : Équivalence des normes en dimension finie", answer: "Sur un espace vectoriel de dimension finie, toutes les normes sont équivalentes." },
            { question: "Définition : Espace préhilbertien et Hilbert", answer: "Espace vectoriel muni d'un produit scalaire. S'il est complet pour la norme associée, c'est un espace de Hilbert." },
            { question: "Théorème de la projection orthogonale", answer: "Dans un Hilbert, pour tout x et tout sous-espace fermé F, il existe un unique y dans F réalisant la distance minimale, caractérisé par (x - y) orthogonal à F." },
            { question: "Théorème de représentation de Riesz (Hilbert)", answer: "Toute forme linéaire continue f sur un espace de Hilbert H s'écrit de manière unique f(x) = <x, y> pour un certain y dans H." },
            { question: "Proposition : Complétude des sous-espaces", answer: "Tout sous-espace fermé d'un espace de Banach est un espace de Banach." },
            { question: "Propriété : Compacts et fermés bornés", answer: "Tout compact dans un espace métrique est fermé et borné (la réciproque est fausse en dimension infinie)." },
            { question: "Définition : Continuité lipschitzienne", answer: "Il existe K > 0 tel que ||f(x) - f(y)|| <= K ||x - y|| pour tout x, y." },
            { question: "Proposition : Connexité par arcs", answer: "L'image d'un connexe par une application continue est connexe." }
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
            { question: "Définition 3.1 : Tribu (ou sigma-algèbre)", answer: "Collection de sous-ensembles d'un ensemble X stable par passage au complémentaire et par union dénombrable." },
            { question: "Propriété : Stabilité des tribus", answer: "Une tribu est également stable par intersection dénombrable, union finie et intersection finie." },
            { question: "Définition 3.2 : Tribu borélienne sur ℝ^n", answer: "Tribu engendrée par les ouverts de ℝ^n (notée B(ℝ^n))." },
            { question: "Définition 3.3 : Tribu borélienne sur un ouvert", answer: "Tribu induite sur un ouvert $\\Omega$ par intersection avec les boréliens de ℝ^n." },
            { question: "Définition 3.4 : Espace mesurable", answer: "Couple (X, A) formé d'un ensemble X et d'une tribu A sur X." },
            { question: "Définition 3.5 : Mesure positive", answer: "Application mu de A dans [0, +inf] telle que mu(emptyset) = 0 et sigma-additive pour des ensembles disjoints." },
            { question: "Définition : Mesure de Dirac", answer: "Mesure delta_x0 définie sur (X, P(X)) valant 1 si x0 app. A et 0 sinon." },
            { question: "Définition : Mesure de comptage", answer: "Mesure associant à un ensemble son nombre d'éléments s'il est fini, ou +inf s'il est infini." },
            { question: "Définition 4.1 : Fonction mesurable", answer: "Fonction f : X -> R barre telle que pour tout a dans R, l'ensemble {x | f(x) > a} appartient à la tribu A." },
            { question: "Remarque 4.1 : Équivalences de mesurabilité", answer: "La condition f(x) > a peut être remplacée par f(x) >= a, f(x) < a ou f(x) <= a." },
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
            { question: "Lemme 9.1 : Lemme de Fatou", answer: "Pour une suite de fonctions mesurables positives, l'intégrale de la liminf est inférieure ou égale à l'inf de l'intégrale." },
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
            { question: "Définition : Programme linéaire (PL)", answer: "Problème d'optimisation consistant à maximiser ou minimiser une fonction objectif linéaire sous des contraintes affines." },
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
        ]
    },

    // ==========================================
    // 5. DECK ROUGE/DORÉ : QCM EXERCICES TD 1
    // ==========================================
    {
        id: "opti-volet1-qcm",
        category: "OPTIMISATION & RECHERCHE",
        title: "Volet 1 : QCM & Intégralité des Exercices TD 1",
        color: "#d4af37", // Doré
        icon: "🔴",
        description: "QCM interactif couvrant l'intégralité des questions de chaque exercice de la première planche de TD (Exercices 1 à 10).",
        cards: [
            // EXERCICE 1
            {
                question: "Exercice 1.1 : Dans l'étude des glaciers, calculer la dérivée partielle première de T par rapport à x : delta_x T de T(x,t) = T0 + T1 * e^(-lambda x) * sin(omega t - lambda x).",
                answer: "-lambda * T1 * e^(-lambda x) * [sin(omega t - lambda x) + cos(omega t - lambda x)].",
                typeHint: "(une expression algébrique / dérivée)"
            },
            {
                question: "Exercice 1.1 : Calculer la dérivée partielle première de T par rapport à t : delta_t T.",
                answer: "omega * T1 * e^(-lambda x) * cos(omega t - lambda x).",
                typeHint: "(une expression algébrique / dérivée)"
            },
            {
                question: "Exercice 1.2 : Quelle relation lie k, omega et lambda pour que T vérifie l'équation de la chaleur delta_t T = k * delta_xx T ?",
                answer: "On obtient k par identification directe des coefficients issus des dérivées secondes.",
                typeHint: "(une relation littérale avec k)"
            },

            // EXERCICE 2
            {
                question: "Exercice 2.1 : Déterminer les extrema de f(x,y) = y sur ℝ².",
                answer: "Aucun extremum (fonction non majorée et non minorée).",
                typeHint: "(aucun / extremum local)"
            },
            {
                question: "Exercice 2.2 : Déterminer les extrema de f(x,y) = xy sur ℝ².",
                answer: "Point selle en (0,0) (pas d'extremum global ni local strict).",
                typeHint: "(point selle / minimum / maximum)"
            },
            {
                question: "Exercice 2.3 : Déterminer les extrema de f(x,y) = x^4 + y^8 sur ℝ².",
                answer: "Minimum global strict en (0,0), de valeur 0.",
                typeHint: "(minimum local/global)"
            },
            {
                question: "Exercice 2.4 : Déterminer les extrema de f(x,y) = x^4 - y^8 sur ℝ².",
                answer: "Point selle en (0,0).",
                typeHint: "(point selle)"
            },
            {
                question: "Exercice 2.5 : Déterminer les extrema de f(x,y) = (3x + 2y)^4 sur ℝ².",
                answer: "Infinité de minima locaux sur la droite 3x + 2y = 0 (valeur 0).",
                typeHint: "(ensemble de minima le long d'une droite)"
            },
            {
                question: "Exercice 2.6 : Déterminer les extrema de f(x,y) = y^4 + x^2 - 2y^2 sur ℝ².",
                answer: "Minimum local en (0, 1) et (0, -1), et point selle en (0, 0).",
                typeHint: "(coordonnées des extrema / points selle)"
            },
            {
                question: "Exercice 2.7 : Déterminer les extrema de f(x,y) = xy - x^2 - y^2 sur ℝ².",
                answer: "Maximum local unique en (0,0) (valeur 0).",
                typeHint: "(un couple de coordonnées (x, y))"
            },
            {
                question: "Exercice 2.8 : Déterminer les extrema de f(x,y) = 3xy^2 - y^3 + x^2 + y^2 - 1.",
                answer: "Calcul du gradient nul et analyse de la hessienne pour identifier les points critiques et leur nature.",
                typeHint: "(coordonnées et nature des points)"
            },
            {
                question: "Exercice 2.9 : Déterminer les extrema de f(x,y) = x^2 - cos(y).",
                answer: "Minimums locaux en (0, k*pi) selon la parité de k.",
                typeHint: "(points ou familles de points)"
            },
            {
                question: "Exercice 2.10 : Déterminer les extrema de f(x,y) = xy - ln(x^2 + y^2).",
                answer: "Étude du gradient et annulation pour trouver les points critiques hors de l'origine.",
                typeHint: "(coordonnées (x, y))"
            },
            {
                question: "Exercice 2.11 : Déterminer les extrema de f(x,y,z) = xyz + x^2 - y^2 + 7.",
                answer: "Résolution du système gradient = 0 en dimension 3 (x,y,z).",
                typeHint: "(triplet (x, y, z) ou aucun)"
            },
            {
                question: "Exercice 2.12 : Déterminer les extrema de f(x,y,z) = z(e^x - 1) - y^2.",
                answer: "Annulation des dérivées partielles par rapport à x, y et z.",
                typeHint: "(triplet (x, y, z))"
            },

            // EXERCICE 3
            {
                question: "Exercice 3.1 : Pour f(x,y) = e^xy (xy - 1) + y(y - 4), calculer le(s) point(s) stationnaire(s).",
                answer: "Le gradient s'annule en résolvant les équations couplées (par exemple x=0, y=2).",
                typeHint: "(coordonnées du point stationnaire)"
            },
            {
                question: "Exercice 3.2 : Quelle est la nature du point stationnaire trouvé à l'exercice 3 ?",
                answer: "Utilisation de la matrice hessienne pour déterminer s'il s'agit d'un min, max ou point selle.",
                typeHint: "(minimum / maximum / point selle)"
            },

            // EXERCICE 4
            {
                question: "Exercice 4.1 : La fonction f(x,y) = xy / ((1+x^2)(1+y^2)) est-elle de classe C^inf sur ℝ² ?",
                answer: "Oui, c'est une fraction rationnelle dont le dénominateur ne s'annule jamais sur ℝ².",
                typeHint: "(oui / non)"
            },
            {
                question: "Exercice 4.2 : Calculer les dérivées premières de f(x,y) = xy / ((1+x^2)(1+y^2)).",
                answer: "Calcul via la règle de dérivation du quotient pour delta_x f et delta_y f.",
                typeHint: "(expressions de delta_x f et delta_y f)"
            },
            {
                question: "Exercice 4.3 : Calculer les dérivées secondes de f (hessienne).",
                answer: "Dérivées partielles secondes delta_xx f, delta_yy f et delta_xy f.",
                typeHint: "(expressions analytiques)"
            },
            {
                question: "Exercice 4.4 : Former la matrice hessienne et déterminer si f est convexe ou concave sur ℝ².",
                answer: "Ni convexe ni concave globalement sur ℝ² (changements de signe des valeurs propres).",
                typeHint: "(convexe / concave / ni l'un ni l'autre)"
            },

            // EXERCICE 5 (Lagrange)
            {
                question: "Exercice 5.1 : Max et min de f(x,y) = x^2 - y^2 sous contrainte x^2 + y^2 = 1.",
                answer: "Maximum = 1 ; Minimum = -1.",
                typeHint: "(deux nombres : max et min)"
            },
            {
                question: "Exercice 5.2 : Max et min de f(x,y) = x^2 + y^2 sous contrainte xy = 1.",
                answer: "Minimum = 2 (pas de maximum fini).",
                typeHint: "(un nombre ou 'pas de maximum')"
            },
            {
                question: "Exercice 5.3 : Max et min de f(x,y) = y^2 - x^2 sous contrainte x^2/4 + y^2 = 1.",
                answer: "Maximum = 1 ; Minimum = -4.",
                typeHint: "(deux nombres : max et min)"
            },
            {
                question: "Exercice 5.4 : Max et min de f(x,y) = e^xy sous contrainte x^3 + y^3 = 16.",
                answer: "Résolution via le Lagrangien avec x = y à l'optimum (maximum e^8).",
                typeHint: "(valeur de l'extremum)"
            },
            {
                question: "Exercice 5.5 : Max et min de f(x,y,z,t) = x + y + z + t sous contrainte x^2 + y^2 + z^2 + t^2 = 1.",
                answer: "Maximum = 2 ; Minimum = -2.",
                typeHint: "(deux nombres : max et min)"
            },
            {
                question: "Exercice 5.6 : Max et min de f(x,y,z) = x^2 + y^2 + z^2 sous contrainte x + y + z = 12.",
                answer: "Minimum = 48 (atteint en (4,4,4)).",
                typeHint: "(un nombre / valeur minimale)"
            },

            // EXERCICE 6
            {
                question: "Exercice 6 : Quelles sont les dimensions (hauteur h, rayon R) du cylindre de volume maximum de surface 27 ?",
                answer: "R = 3/sqrt(2) et h = 3*sqrt(2) (soit h = 2R).",
                typeHint: "(valeurs de R et h)"
            },

            // EXERCICE 7
            {
                question: "Exercice 7.1 : Optimiser f(x,y,z) = z s.c. x^2 = 2 - y^2 et x + y + z = 0.",
                answer: "Application de la méthode de Lagrange à 2 contraintes d'égalité.",
                typeHint: "(valeur optimale de z)"
            },
            {
                question: "Exercice 7.2 : Optimiser f(x,y,z) = z s.c. x^2 = 2 - y^2, x + y + z = 0 et x + z = 1.",
                answer: "Résolution du système avec 3 contraintes.",
                typeHint: "(solution ou incompatibilité)"
            },
            {
                question: "Exercice 7.3 : Optimiser f(x,y,z) = x + 2y s.c. x + y + z = 1 et y^2 + z^2 = 4.",
                answer: "Recherche des points critiques liés par le Lagrangien.",
                typeHint: "(valeur optimale)"
            },
            {
                question: "Exercice 7.4 : Optimiser f(x,y,z) = 3x - y - 3z s.c. x + y - z = 0 et x^2 + 2z^2 = 1.",
                answer: "Calcul des extrema liés par multiplicateurs de Lagrange.",
                typeHint: "(valeur optimale)"
            },

            // EXERCICES FACULTATIFS (8, 9, 10)
            {
                question: "Exercice 8.1 : Calculer le gradient de f(x,y) = x + y + 1.",
                answer: "grad f = (1, 1).",
                typeHint: "(un vecteur (dx, dy))"
            },
            {
                question: "Exercice 8.2 : Calculer le gradient de f(x,y) = xy.",
                answer: "grad f = (y, x).",
                typeHint: "(un vecteur (y, x))"
            },
            {
                question: "Exercice 9.1 : Calculer la hessienne de f(x,y) = xy.",
                answer: "Hessienne = [[0, 1], [1, 0]].",
                typeHint: "(une matrice 2x2)"
            },
            {
                question: "Exercice 10.1 : Dans le problème Moche (lama + maïs), quel est l'investissement optimal pour maximiser le bénéfice ?",
                answer: "Répartition optimale du capital de 65 po entre l'achat de lamas et de maïs.",
                typeHint: "(nombre de lamas et quantité de maïs)"
            }
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
    const isSpecialOpti = deck.id === "opti-volet1-qcm";
    card.className = `deck-card ${isSpecialOpti ? 'opti-v1' : ''}`;
    
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
    
    // Disposition verticale : question en haut, champ et bouton en dessous
    if (currentDeck.id === "opti-volet1-qcm") {
        cardFront.innerHTML = `
            <div class="qcm-question-text">${card.question}</div>
            <div class="qcm-input-container" onclick="event.stopPropagation()">
                <input type="text" id="qcm-user-answer" class="qcm-input" placeholder="Votre réponse...">
                <button class="qcm-submit-btn" onclick="checkQcmAnswer()">Valider</button>
                <div class="qcm-hint">${card.typeHint || ''}</div>
            </div>
        `;
    } else {
        cardFront.textContent = card.question;
    }

    cardBack.textContent = card.answer;
    progressCounter.textContent = `Carte ${currentCardIndex + 1} sur ${currentDeck.cards.length}`;
    flashcard.classList.remove('flipped');
}

function checkQcmAnswer() {
    flashcard.classList.add('flipped');
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
