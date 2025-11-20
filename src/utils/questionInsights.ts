export interface QuestionInsight {
  meaning: string;
  improvements: {
    low: string;
    medium: string;
    high: string;
  };
}

export const questionInsights: Record<string, QuestionInsight> = {
  // === OUVERTURE (Q1-Q6) ===
  'q1': {
    meaning: 'Mesure votre curiosite et votre gout pour la nouveaute.',
    improvements: {
      low: 'Essayez de sortir de votre zone de confort progressivement. Commencez par de petites nouveautes.',
      medium: 'Vous avez un equilibre sain. Continuez a explorer de temps en temps.',
      high: 'Excellente ouverture ! Canalisez cette curiosite dans des projets concrets.'
    }
  },
  'q2': {
    meaning: 'Evalue votre sensibilite artistique et emotionnelle.',
    improvements: {
      low: 'Exposez-vous progressivement a l\'art : musees, musique, lecture.',
      medium: 'Bon equilibre. Explorez les formes d\'art qui vous touchent le plus.',
      high: 'Grande sensibilite artistique ! Utilisez cela pour enrichir votre quotidien.'
    }
  },
  'q3': {
    meaning: 'Mesure votre capacite d\'imagination et de reverie.',
    improvements: {
      low: 'Pratiquez des exercices de visualisation ou lisez de la fiction.',
      medium: 'Imagination equilibree. Reservez du temps pour la creativite.',
      high: 'Imagination fertile ! Utilisez-la pour resoudre des problemes de facon innovante.'
    }
  },
  'q4': {
    meaning: 'Evalue votre soif d\'apprendre et votre curiosite intellectuelle.',
    improvements: {
      low: 'Trouvez des sujets qui vous passionnent vraiment pour apprendre avec plaisir.',
      medium: 'Bonne motivation. Variez les methodes d\'apprentissage.',
      high: 'Excellente soif d\'apprendre ! Structurez vos connaissances pour les partager.'
    }
  },
  'q5': {
    meaning: 'Mesure votre interet pour les idees abstraites et la reflexion theorique.',
    improvements: {
      low: 'Utilisez des exemples concrets pour aborder des concepts complexes.',
      medium: 'Bon equilibre entre concret et abstrait.',
      high: 'Forte capacite d\'abstraction ! Veillez a rester connecte a la realite pratique.'
    }
  },
  'q6': {
    meaning: 'Evalue votre ouverture aux autres cultures et perspectives.',
    improvements: {
      low: 'Decouvrez d\'autres cultures a travers des films, livres ou voyages culinaires.',
      medium: 'Bonne ouverture culturelle. Continuez a etre curieux des autres.',
      high: 'Excellente ouverture d\'esprit ! Valorisez cette diversite dans vos echanges.'
    }
  },

  // === CONSCIENCIOSITÉ (Q7-Q12) ===
  'q7': {
    meaning: 'Mesure votre ponctualite et votre respect des delais.',
    improvements: {
      low: 'Utilisez des rappels et commencez vos taches plus tot.',
      medium: 'Bonne gestion du temps. Prevoyez des marges de securite.',
      high: 'Excellente fiabilite ! Attention a ne pas etre trop rigide.'
    }
  },
  'q8': {
    meaning: 'Evalue votre tendance a planifier et anticiper.',
    improvements: {
      low: 'Prenez 5 minutes chaque matin pour lister vos priorites.',
      medium: 'Bon equilibre entre planification et improvisation.',
      high: 'Tres prevoyant ! Laissez un peu de place a la spontaneite.'
    }
  },
  'q9': {
    meaning: 'Mesure votre sens de l\'organisation personnelle.',
    improvements: {
      low: 'Adoptez des systemes de rangement simples et maintenez-les.',
      medium: 'Organisation satisfaisante. Optimisez votre espace de travail.',
      high: 'Tres organise ! Partagez vos astuces avec votre entourage.'
    }
  },
  'q10': {
    meaning: 'Evalue votre attention aux details et votre minutie.',
    improvements: {
      low: 'Prenez le temps de relire votre travail. Utilisez des checklists.',
      medium: 'Bon niveau d\'attention. Restez vigilant sur les points cles.',
      high: 'Excellente precision ! Attention a ne pas vous perdre dans les details.'
    }
  },
  'q11': {
    meaning: 'Mesure votre autodiscipline et votre perseverance.',
    improvements: {
      low: 'Commencez par de petites habitudes faciles a tenir.',
      medium: 'Bonne discipline. Renforcez votre volonte sur les defis importants.',
      high: 'Discipline de fer ! N\'oubliez pas d\'etre bienveillant envers vous-meme.'
    }
  },
  'q12': {
    meaning: 'Evalue votre ambition et votre orientation vers les objectifs.',
    improvements: {
      low: 'Fixez-vous des objectifs SMART (Specifiques, Mesurables, Atteignables...).',
      medium: 'Ambition saine. Celebrez vos victoires intermediaires.',
      high: 'Tres ambitieux ! Assurez-vous de maintenir un equilibre de vie.'
    }
  },

  // === EXTRAVERSION (Q13-Q18) ===
  'q13': {
    meaning: 'Mesure votre aisance dans les groupes et situations sociales.',
    improvements: {
      low: 'Privilégiez les petits comites ou vous etes a l\'aise.',
      medium: 'Bonne adaptation sociale. Vous savez naviguer entre groupe et solo.',
      high: 'Tres a l\'aise en groupe ! Veillez a inclure les plus reserves.'
    }
  },
  'q14': {
    meaning: 'Evalue votre assertivite et prise de parole en public.',
    improvements: {
      low: 'Preparez vos interventions a l\'avance pour gagner en confiance.',
      medium: 'Vous prenez la parole quand necessaire. Continuez ainsi.',
      high: 'Leader naturel ! Encouragez aussi les autres a s\'exprimer.'
    }
  },
  'q15': {
    meaning: 'Mesure l\'energie que vous tirez des interactions sociales.',
    improvements: {
      low: 'Respectez votre besoin de calme pour recharger vos batteries.',
      medium: 'Bon equilibre. Vous appreciez le monde sans en dependre.',
      high: 'Vrai moteur social ! Attention a ne pas vous epuiser si l\'entourage est calme.'
    }
  },
  'q16': {
    meaning: 'Evalue votre desir d\'etre au centre de l\'attention.',
    improvements: {
      low: 'Vous preferez l\'ombre, et c\'est tres bien. Votre travail parle pour vous.',
      medium: 'Vous savez briller quand il le faut sans en faire trop.',
      high: 'Vous aimez la lumiere ! Utilisez ce charisme pour des causes positives.'
    }
  },
  'q17': {
    meaning: 'Mesure votre bonne humeur et votre expressivite.',
    improvements: {
      low: 'Le sourire s\'apprend ! Cherchez le positif dans chaque journee.',
      medium: 'Naturellement agreable. Votre humeur est stable.',
      high: 'Rayonnant ! Votre bonne humeur est contagieuse.'
    }
  },
  'q18': {
    meaning: 'Evalue votre aptitude pour les roles sociaux et publics.',
    improvements: {
      low: 'Developpez vos competences relationnelles a votre rythme.',
      medium: 'Bonnes aptitudes sociales. Vous etes un bon communicant.',
      high: 'Talent inne pour le contact ! Vous excellez dans la relation.'
    }
  },

  // === AGRÉABILITÉ (Q19-Q24) ===
  'q19': {
    meaning: 'Mesure votre compassion et votre empathie.',
    improvements: {
      low: 'Essayez de voir les choses du point de vue des autres.',
      medium: 'Empathie equilibree. Vous comprenez les autres sans vous laisser envahir.',
      high: 'Coeur d\'or ! Attention a ne pas porter toute la misere du monde.'
    }
  },
  'q20': {
    meaning: 'Evalue votre niveau de confiance envers autrui.',
    improvements: {
      low: 'Accordez le benefice du doute plus souvent, avec prudence.',
      medium: 'Confiance lucide. Vous savez a qui vous fier.',
      high: 'Tres confiant ! Gardez un oeil ouvert tout en restant bienveillant.'
    }
  },
  'q21': {
    meaning: 'Mesure votre esprit de cooperation et d\'equipe.',
    improvements: {
      low: 'Cherchez des situations gagnant-gagnant plutot que la competition.',
      medium: 'Bon coequipier. On apprecie travailler avec vous.',
      high: 'Excellent collaborateur ! Vous soudez les equipes.'
    }
  },
  'q22': {
    meaning: 'Evalue votre altruisme et votre volonte d\'aider.',
    improvements: {
      low: 'Proposez votre aide pour de petites choses simples.',
      medium: 'Serviable quand il faut. Vous savez dire non si necessaire.',
      high: 'Tres genereux ! Apprenez aussi a recevoir de l\'aide.'
    }
  },
  'q23': {
    meaning: 'Mesure votre tendance a la reverie (interprete ici comme un trait de personnalite).',
    improvements: {
      low: 'Tres ancre dans l\'action. N\'oubliez pas de rever un peu.',
      medium: 'Bon equilibre entre action et reflexion.',
      high: 'Tete en l\'air ? Utilisez des outils pour rester ancre dans le reel.'
    }
  },
  'q24': {
    meaning: 'Evalue votre gentillesse et votre calme relationnel.',
    improvements: {
      low: 'Travaillez sur la patience et la douceur dans vos reactions.',
      medium: 'Agreable a vivre. Vous gerez bien les tensions.',
      high: 'Une force tranquille ! Votre calme apaise les autres.'
    }
  },

  // === NEUROTICISME (Q25-Q30) ===
  'q25': {
    meaning: 'Mesure votre tendance a l\'anxiete.',
    improvements: {
      low: 'Serein. Vous etes un pilier pour les anxieux.',
      medium: 'Anxiete normale face aux defis. Utilisez la respiration.',
      high: 'Anxieux ? Pratiquez la relaxation et relativisez les enjeux.'
    }
  },
  'q26': {
    meaning: 'Evalue votre propension a la tristesse ou melancolie.',
    improvements: {
      low: 'Optimiste naturel. Continuez a voir le bon cote.',
      medium: 'Humeur variable mais normale. Acceptez vos emotions.',
      high: 'Tendance au blues. Cherchez des activites qui vous nourrissent positivement.'
    }
  },
  'q27': {
    meaning: 'Mesure votre reactivite au stress.',
    improvements: {
      low: 'Imperturbable. Vous gerez la pression avec brio.',
      medium: 'Stress gerable. Identifiez vos limites.',
      high: 'Sensible au stress. Mettez en place des routines apaisantes.'
    }
  },
  'q28': {
    meaning: 'Evalue votre tendance a vous inquieter des problemes.',
    improvements: {
      low: 'Confiant dans l\'avenir. Vous ne creez pas de problemes imaginaires.',
      medium: 'Prevoyant sans etre obsede. C\'est un bon equilibre.',
      high: 'Inquiet ? Distinguez les problemes reels des scenarios hypothetiques.'
    }
  },
  'q29': {
    meaning: 'Mesure votre tolerance a la frustration.',
    improvements: {
      low: 'Tres patient. Rien ne semble vous atteindre.',
      medium: 'Patience normale. Vous savez quand lacher prise.',
      high: 'Frustre vite ? Travaillez l\'acceptation et la flexibilite.'
    }
  },
  'q30': {
    meaning: 'Evalue votre sensibilite aux critiques.',
    improvements: {
      low: 'Assure. Les critiques glissent sur vous.',
      medium: 'Vous ecoutez les critiques pour progresser sans vous effondrer.',
      high: 'Sensible ? Voyez la critique comme une information, pas un jugement de valeur.'
    }
  }
};
