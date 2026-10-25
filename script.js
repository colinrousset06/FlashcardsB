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
            // Inégalités et normes
            { question: "Propriété : Inégalité de Cauchy-Schwarz", answer: "Pour tous x, y dans ℝ^n, le produit scalaire vérifie |<x, y>| <= ||x||_2 * ||y||_2." },
            { question: "Propriété : Inégalité de Minkowski", answer: "Pour tout p >= 1 et tous x, y, la norme p de la somme vérifie ||x + y||_p <= ||x||_p + ||y||_p." },
            { question: "Définition : Semi-norme", answer: "Application vérifiant l'homogénéité (||ax|| = |a|*||x||) et l'inégalité triangulaire (||x+y|| <= ||x|| + ||y||), pouvant s'annuler en un point non nul." },
            { question: "Définition : Norme", answer: "Semi-norme séparée : ||x|| = 0 implique x = 0." },
            { question: "Définition : Espace vectoriel normé (EVN)", answer: "Espace vectoriel muni d'une norme." },
            { question: "Définition : Distance induite par une norme", answer: "d(x, y) = ||x - y||." },
            
            // Topologie générale
            { question: "Proposition : Stabilité des ouverts", answer: "Une union quelconque d'ouverts est un ouvert. Une intersection finie d'ouverts est un ouvert." },
            { question: "Proposition : Stabilité des fermés", answer: "Une intersection quelconque de fermés est un fermé. Une union finie de fermés est un fermé." },
            { question: "Proposition : Caractérisation séquentielle d'un fermé", answer: "Un ensemble F est fermé si et seulement si toute suite convergente d'éléments de F a sa limite dans F." },
            { question: "Proposition : Continuité et ouverts/fermés", answer: "Une application f est continue si et seulement si l'image réciproque de tout ouvert est un ouvert (ou l'image réciproque de tout fermé est un fermé)." },
            { question: "Définition : Intérieur d'un ensemble", answer: "Le plus grand ouvert inclus dans l'ensemble (réunion de tous les ouverts inclus)." },
            { question: "Définition : Adhérence d'un ensemble", answer: "Le plus petit fermé contenant l'ensemble (ensemble des limites de suites d'éléments de l'ensemble)." },
            { question: "Définition : Frontière d'un ensemble", answer: "Différence entre l'adhérence et l'intérieur de l'ensemble (Fr(A) = A_barre \ A_int)." },
            
            // Compacité
            { question: "Théorème 3.1 : Lemme de Lebesgue", answer: "Soit K compact et (Ui) un recouvrement ouvert. Il existe delta > 0 tel que toute boule de rayon < delta centrée dans K est incluse dans un des Ui." },
            { question: "Théorème 3.2 : Caractérisation de Borel-Lebesgue", answer: "Un sous-ensemble K d'un EVN est compact si et seulement si de tout recouvrement d'ouverts de K on peut extraire un recouvrement fini." },
            { question: "Théorème 3.3 : Théorème de Heine-Borel", answer: "Dans ℝ^n, un sous-ensemble est compact si et seulement s'il est fermé et borné." },
            { question: "Théorème 3.4 : Bolzano-Weierstrass dans ℝ^n", answer: "Toute suite bornée dans ℝ^n admet une sous-suite convergente." },
            { question: "Proposition : Image d'un compact par une fonction continue", answer: "L'image d'un compact par une application continue est un compact." },
            
            // Continuité uniforme et espaces de Banach
            { question: "Théorème 4.1 : Théorème de Heine", answer: "Toute fonction continue d'un compact K dans ℝ^n est uniformément continue sur K." },
            { question: "Définition : Suite de Cauchy", answer: "Suite dont les termes se rapprochent arbitrairement les uns des autres lorsque les indices grandissent." },
            { question: "Définition : Espace de Banach", answer: "Espace vectoriel normé complet (toute suite de Cauchy y converge)." },
            { question: "Proposition 4.6 : Espace C(K, E)", answer: "Pour K compact et E de Banach, l'espace des fonctions continues muni de la norme uniforme ||f||_inf = sup ||f(x)||_E est un espace de Banach." },
            
            // Dimension finie et Hilbert
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
            // Tribus et mesures
            { question: "Définition 3.1 : Tribu (ou sigma-algèbre)", answer: "Collection de sous-ensembles d'un ensemble X stable par passage au complémentaire et par union dénombrable." },
            { question: "Propriété : Stabilité des tribus", answer: "Une tribu est également stable par intersection dénombrable, union finie et intersection finie." },
            { question: "Définition 3.2 : Tribu borélienne sur ℝ^n", answer: "Tribu engendrée par les ouverts de ℝ^n (notée B(ℝ^n))." },
            { question: "Définition 3.3 : Tribu borélienne sur un ouvert", answer: "Tribu induite sur un ouvert $\\Omega$ par intersection avec les boréliens de ℝ^n." },
            { question: "Définition 3.4 : Espace mesurable", answer: "Couple (X, A) formé d'un ensemble X et d'une tribu A sur X." },
            { question: "Définition 3.5 : Mesure positive", answer: "Application mu de A dans [0, +inf] telle que mu(emptyset) = 0 et sigma-additive pour des ensembles disjoints." },
            { question: "Définition : Mesure de Dirac", answer: "Mesure delta_x0 définie sur (X, P(X)) valant 1 si x0 app. A et 0 sinon." },
            { question: "Définition : Mesure de comptage", answer: "Mesure associant à un ensemble son nombre d'éléments s'il est fini, ou +inf s'il est infini." },
            
            // Fonctions mesurables
            { question: "Définition 4.1 : Fonction mesurable", answer: "Fonction f : X -> R barre telle que pour tout a dans R, l'ensemble {x | f(x) > a} appartient à la tribu A." },
            { question: "Remarque 4.1 : Équivalences de mesurabilité", answer: "La condition f(x) > a peut être remplacée par f(x) >= a, f(x) < a ou f(x) <= a." },
            { question: "Théorème 4.1 : Stabilité par composition", answer: "La composée de deux fonctions mesurables est mesurable." },
            { question: "Propriété 4.1 : Stabilité algébrique des fonctions mesurables", answer: "Si f et g sont mesurables, alors f+g, f*g, |f|, min(f,g) et max(f,g) sont mesurables." },
            { question: "Théorème 4.2 : Stabilité par opérations limites", answer: "Le supremum, l'infimum, la limsup et la liminf d'une suite de fonctions mesurables sont mesurables." },
            { question: "Définition 4.2 : Ensemble négligeable", answer: "Ensemble N appartenant à la tribu dont la mesure est nulle (mu(N) = 0)." },
            { question: "Définition 4.3 : Propriété presque partout (p.p.)", answer: "Propriété vérifiée sur le complémentaire d'un ensemble négligeable." },
            
            // Intégrale des fonctions étagées
            { question: "Définition 6.1 : Fonction étagée (simple)", answer: "Fonction mesurable ne prenant qu'un nombre fini de valeurs réelles." },
            { question: "Définition 6.2 : Intégrale d'une fonction étagée positive", answer: "Somme sur i de a_i * mu(A_i cap E) pour une représentation sous forme de partition mesurable." },
            { question: "Propriété 6.1 : Linéarité de l'intégrale des fonctions étagées", answer: "L'intégrale d'une combinaison linéaire de fonctions étagées positives est la combinaison linéaire des intégrales." },
            { question: "Propriété 6.2 : Monotonie de l'intégrale des fonctions étagées", answer: "Si f <= g, alors l'intégrale de f est inférieure ou égale à l'intégrale de g." },
            { question: "Proposition 6.1 : Intégrale sur un ensemble négligeable", answer: "L'intégrale d'une fonction étagée sur un ensemble de mesure nulle est nulle." },
            
            // Intégrale positive et générale
            { question: "Définition 7.1 : Fonction mesurable positive", answer: "Fonction mesurable à valeurs dans [0, +inf]." },
            { question: "Définition 7.2 : Intégrale de Lebesgue d'une fonction positive", answer: "Supremum des intégrales des fonctions étagées positives inférieures ou égales à f." },
            { question: "Propriété 7.1 & 7.2 : Linéarité et monotonie de l'intégrale positive", answer: "L'intégrale positive conserve la linéarité positive et la monotonie." },
            { question: "Définition 8.1 : Partie positive et négative", answer: "f^+ = max(f, 0) et f^- = max(-f, 0), telles que f = f^+ - f^- et |f| = f^+ + f^-." },
            { question: "Définition 8.2 : Intégrale d'une fonction générale", answer: "Si f^+ et f^- sont d'intégrales finies, int f = int f^+ - int f^-." },
            { question: "Théorème 8.1 : Caractérisation de l'intégrabilité",
            answer: "Une fonction mesurable est intégrable au sens de Lebesgue si et seulement si son intégrale en valeur absolue est finie (int |f| < +inf)." },
            
            // Théorèmes de convergence
            { question: "Théorème 9.1 : Théorème de convergence monotone (Beppo-Levi)", answer: "Pour une suite croissante de fonctions mesurables positives convergeant vers f p.p., la limite de l'intégrale est l'intégrale de f." },
            { question: "Lemme 9.1 : Lemme de Fatou", answer: "Pour une suite de fonctions mesurables positives, l'intégrale de la liminf est inférieure ou égale à la liminf des intégrales." },
            { question: "Théorème 9.2 : Théorème de convergence dominée de Lebesgue", answer: "Si une suite de fonctions converge p.p. et est dominée en module par une fonction intégrable, alors la limite de l'intégrale est l'intégrale de la limite." },
            
            // Espaces L^p et théorèmes avancés
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
            // Optimisation libre
            { question: "Définition : Programme d'optimisation", answer: "Recherche d'un extremum (minimum ou maximum) d'une fonction objectif sous un ensemble de contraintes." },
            { question: "Condition Nécessaire du 1er ordre (CN1)", answer: "Si x* est un extremum local d'une fonction différentiable, alors le gradient s'annule : grad f(x*) = 0." },
            { question: "Définition : Matrice Hessienne", answer: "Matrice symétrique des dérivées partielles secondes de la fonction objectif." },
            { question: "Conditions Suffisantes du 2nd ordre (CS2)", answer: "Si grad f(x*) = 0, un hessien défini positif implique un minimum local, et un hessien défini négatif implique un maximum local." },
            { question: "Caractérisation par les mineurs principaux", answer: "Une matrice est définie positive si tous ses mineurs principaux diagonaux sont strictement positifs." },
            { question: "Théorème : Extrema globaux via le Hessien", answer: "Si le hessien est semi-défini de signe constant sur tout le domaine convexe, tout point stationnaire est un extremum global." },
            
            // Convexité
            { question: "Définition : Ensemble convexe", answer: "Ensemble tel que tout segment reliant deux de ses points y est entièrement inclus." },
            { question: "Définition : Fonction convexe", answer: "Fonction dont l'épigraphe est un ensemble convexe (ou vérifiant l'inégalité de convexité pour toute combinaison convexe)." },
            { question: "Proposition : Convexité et Hessien", answer: "Une fonction différentiable est strictement convexe si et seulement si sa matrice hessienne est définie positive partout." },
            { question: "Propriété : Somme de fonctions convexes", answer: "La somme de fonctions convexes est une fonction convexe." },
            { question: "Propriété : Optimum local et global en convexité", answer: "Tout minimum local d'un problème convexe est un minimum global." },
            
            // Optimisation sous contraintes d'égalité
            { question: "Définition : Fonction du Lagrangien", answer: "Fonction auxiliaire L(x, lambda) = f(x) - somme(lambda_i * g_i(x)) introduite pour traiter les contraintes d'égalité." },
            { question: "Condition de qualification des contraintes", answer: "Condition garantissant la régularité des contraintes (ex : jacobienne de rang maximal à l'optimum)." },
            { question: "Condition Nécessaire du 1er ordre avec Lagrangien", answer: "Les dérivées partielles du Lagrangien par rapport à toutes les variables et tous les multiplicateurs doivent s'annuler." },
            { question: "Interprétation du multiplicateur de Lagrange (lambda)", answer: "Mesure de la sensibilité de la valeur optimale de la fonction objectif face à une variation unitaire de la contrainte." },
            { question: "Définition : Hessien bordé", answer: "Matrice hessienne du Lagrangien bordée par les gradients des contraintes d'égalité." },
            { question: "Règle du Hessien bordé", answer: "Utilisation des signes des mineurs principaux bordés pour déterminer la nature d'un extremum lié (max ou min)." },
            
            // Notions générales et KKT (introduction)
            { question: "Définition : Point selle", answer: "Point stationnaire où le hessien n'est ni défini positif ni défini négatif (déterminant ou valeurs propres de signes mixtes)." },
            { question: "Définition : Contrainte active", answer: "Contrainte vérifiée à l'égalité au point considéré." },
            { question: "Définition : Contrainte non saturée", answer: "Contrainte vérifiée à l'inégalité stricte au point considéré." },
            { question: "Propriété : Relaxation des contraintes inactives", answer: "Une contrainte non saturée n'influe pas localement sur la position de l'optimum." },
            { question: "Définition : Condition de non-négativité", answer: "Restriction usuelle imposant que les variables de décision soient supérieures ou égales à zéro." },
            { question: "Propriété : Différentiabilité", answer: "Condition requise sur les fonctions objectifs et contraintes pour appliquer le calcul différentiel et les conditions de gradient." },
            { question: "Définition : Point critique", answer: "Point où le gradient de la fonction s'annule." },
            { question: "Propriété : Unicité de l'optimum", answer: "Garantie en cas de stricte convexité de la fonction objectif sur un domaine convexe." },
            { question: "Définition : Espace tangent", answer: "Espace vectoriel formé par les directions compatibles avec les contraintes au premier ordre." },
            { question: "Propriété : Multiplicateurs de Kuhn-Tucker", answer: "Extension des multiplicateurs de Lagrange aux contraintes d'inégalité." },
            { question: "Définition : Condition de complétude de la complémentarité", answer: "Produit nul entre la variable duale (multiplicateur) et la contrainte d'inégalité correspondante à l'optimum." },
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
            // Définitions et modélisation
            { question: "Définition : Programme linéaire (PL)", answer: "Problème d'optimisation consistant à maximiser ou minimiser une fonction objectif linéaire sous des contraintes affines." },
            { question: "Hypothèse : Proportionnalité", answer: "Les contributions de chaque variable à l'objectif et aux contraintes sont strictement proportionnelles à sa valeur." },
            { question: "Hypothèse : Additivité", answer: "La contribution totale est la somme des contributions individuelles de chaque variable (absence d'effets croisés)." },
            { question: "Hypothèse : Divisibilité", answer: "Les variables de décision peuvent prendre des valeurs fractionnaires ou continues." },
            { question: "Hypothèse : Certitude", answer: "Tous les paramètres du modèle (coefficients de la matrice et du second membre) sont connus de manière certaine." },
            { question: "Définition : Forme canonique d'un PL", answer: "Maximiser c^T x sous Ax <= b et x >= 0." },
            { question: "Définition : Forme standard d'un PL", answer: "Maximiser c^T x sous Ax = b et x >= 0 (toutes les contraintes d'inégalité sont transformées en égalités via des variables d'écart)." },
            { question: "Propriété : Traitement d'une variable libre", answer: "Une variable non contrainte en signe est remplacée par la différence de deux nouvelles variables positives (x = x^+ - x^-)." },
            
            // Géométrie et solutions de base
            { question: "Théorème : Convexité du domaine réalisable", answer: "L'ensemble des solutions réalisables d'un programme linéaire est un polyèdre convexe (ou polytope s'il est borné)." },
            { question: "Définition : Point extrême (sommet)", answer: "Point du polyèdre réalisable ne pouvant pas s'exprimer comme combinaison convexe de deux autres points distincts du domaine." },
            { question: "Théorème fondamental de la programmation linéaire", answer: "Si un programme linéaire possède une solution optimale finie, alors elle est atteinte en un point extrême (sommet) du polyèdre des contraintes." },
            { question: "Définition : Base et matrice de base A_B", answer: "Sous-matrice carrée (m x m) inversible extraite de la matrice des contraintes A." },
            { question: "Définition : Matrice hors-base A_N", answer: "Sous-matrice formée par les colonnes de A ne faisant pas partie de la base." },
            { question: "Définition : Solution de base", answer: "Vecteur obtenu en annulant les variables hors-base (x_N = 0) et en résolvant A_B x_B = b." },
            { question: "Définition : Solution de base réalisable (BFS)", answer: "Solution de base vérifiant en outre la condition de non-négativité (x_B = A_B^-1 b >= 0)." },
            { question: "Propriété : Équivalence gé algébrique", answer: "Les sommets du polyèdre des contraintes correspondent exactement aux solutions de base réalisables (BFS)." },
            { question: "Définition : Solution de base dégénérée", answer: "Solution de base réalisable pour laquelle au moins une composante de x_B est nulle (ou ayant plus de contraintes actives que la dimension)." },
            
            // Algorithme du simplexe
            { question: "Définition : Coût réduit", answer: "Expression c_N^T - c_B^T A_B^-1 A_N mesurant l'impact marginal sur la fonction objectif de l'introduction d'une variable hors-base." },
            { question: "Lien : Coût réduit et multiplicateurs", answer: "Le coût réduit s'exprime également sous la forme c_N^T + A_N^T lambda, où lambda est le vecteur des multiplicateurs du simplexe." },
            { question: "Critère d'optimalité (Maximisation)", answer: "Un tableau du simplexe est optimal si tous les coûts réduits sont négatifs ou nuls (c_j - z_j <= 0)." },
            { question: "Critère d'optimalité (Minimisation)", answer: "Un tableau du simplexe est optimal si tous les coûts réduits sont positifs ou nuls." },
            { question: "Critère de choix de la variable entrante (Maximisation)", answer: "On choisit la variable hors-base ayant le coût réduit strictement positif le plus grand (1er critère de Dantzig)." },
            { question: "Critère de choix de la variable sortante", answer: "Test du rapport minimum : on choisit la variable de base s minimisant le rapport b_i / a_i pour les coefficients a_i > 0." },
            { question: "Condition d'arrêt pour un problème non borné", answer: "Si un coût réduit est strictement positif mais que tous les coefficients de la colonne pivot correspondante sont <= 0, l'objectif tend vers +inf." },
            { question: "Définition : Méthode des dictionnaires", answer: "Formulation algébrique équivalente au simplexe où les variables de base et l'objectif z sont exprimés en fonction des variables hors-base." },
            { question: "Définition : Opération de pivotage", answer: "Transformation algébrique permettant de faire entrer une variable dans la base et d'en faire sortir une autre." },
            
            // Cas particuliers et pénalités
            { question: "Traitement d'une contrainte du type >= ", answer: "On retranche une variable d'écart positive et on ajoute une variable artificielle." },
            { question: "Traitement d'une contrainte du type = ", answer: "On ajoute une variable artificielle pour disposer d'une base initiale." },
            { question: "Définition : Méthode des pénalités (Grand M / Big M)", answer: "Technique consistant à pénaliser lourdement les variables artificielles dans la fonction objectif (-M pour un max, +M pour un min) pour forcer leur annulation." },
            { question: "Propriété : Rôle des variables artificielles à l'optimum", answer: "À la solution optimale d'un problème valide, toutes les variables artificielles doivent impérativement valoir zéro." },
            { question: "Propriété : Contraintes saturées et prix duals", answer: "Les multiplicateurs associés aux contraintes indiquent la valeur marginale (shadow price) du second membre à l'optimum." }
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
