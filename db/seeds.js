const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Article = require('../models/article');
const User = require('../models/user');



mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      username: 'Caroline',
      email: 'c@c',
      password: 'c',
      passwordConfirmation: 'c'
    }, {
      username: 'Henry',
      email: 'h@h',
      password: 'h',
      passwordConfirmation: 'h'
    }
  ])


    .then(users => {
      console.log(`${users.length} users were added to the DB!`);

      return Article.create([{
        translations: [{
          title: 'Regierung will Umsetzung des Kreuz-Erlasses nicht überprüfen',
          tagline: 'Der Innenministerium Bayerns hat sich entschieden, die Umsetzung des Kreuzerlasses nicht zu überprüfen',
          image: 'https://cdnwww.pnp.de/Kreuz/Wand/Bayerns/Ministerpraesident/Markus/2570067/_/1xTY0EmM4lkKrZpTLFFrWiZa356owvcAYkoEvaS2hysr_OC45fvetjra5j1huLjxPBfdWZEqGqLZsUkSRECk8gdMi--_GjSiCWmv49BHBqqbngAR3SAVX04H4O2bqRXvdqsVqorUCRn8CzdT-RP5rWRQ/180525-1439-urn-newsml-dpa-com-20090101-180525-99-445727-large-4-3.jpg',
          language: 'de',
          content: `Die Umsetzung der Kreuz-Pflicht in Bayerns staatlichen Dienstgebäuden will das Innenministerium nicht überwachen. Darin sehen die Landtags-Grünen bereits das Aus für den von Ministerpräsident Markus Söder (CSU) öffentlichkeitswirksam verkündeten Erlass. "Der Kreuz-Erlass soll offensichtlich sang- und klanglos beerdigt werden", sagte die religionspolitische Sprecherin der Grünen-Fraktion und Landtags-Vizepräsidentin Ulrike Gote am Freitag. Die bundesweit kontrovers diskutierte und auch innerkirchlich umstrittene Verordnung tritt am 1. Juni in Kraft.
          Der Sprecher von Innenminister Joachim Herrmann (CSU), Oliver Platzer, hatte der "Augsburger Allgemeinen" (Freitag) gesagt: "Wir sehen keinen Anlass zu einer Überprüfung - und freuen uns über jedes Kreuz, das hängt." Es werde vorausgesetzt, "dass die jeweilige Behördenleitung die Allgemeine Geschäftsordnung kennt und danach handelt". Und weiter: "Die Behördenleiter sollen das Kreuz so aufhängen, wie sie es für richtig halten."Tatsächlich enthält die Verordnung keinerlei konkrete Angaben zu Art, Größe und Anzahl der Kreuze. Darin heißt es nur: "Im Eingangsbereich eines jeden Dienstgebäudes ist als Ausdruck der geschichtlichen und kulturellen Prägung Bayerns gut sichtbar ein Kreuz anzubringen."`,
          author: users[1]
        }, {
          title: 'No inspection regarding implementation of the Cross law',
          tagline: 'The bavarian interior ministry has decided not to conduct checks on the implementation of the new cross law',
          image: 'https://cdnwww.pnp.de/Kreuz/Wand/Bayerns/Ministerpraesident/Markus/2570067/_/1xTY0EmM4lkKrZpTLFFrWiZa356owvcAYkoEvaS2hysr_OC45fvetjra5j1huLjxPBfdWZEqGqLZsUkSRECk8gdMi--_GjSiCWmv49BHBqqbngAR3SAVX04H4O2bqRXvdqsVqorUCRn8CzdT-RP5rWRQ/180525-1439-urn-newsml-dpa-com-20090101-180525-99-445727-large-4-3.jpg',
          language: 'en',
          content: `The interior ministry of Bavaria has no intention of overseeing the implementation of the compulsory presence of a cross in Bavarian public office buildings. "We see no reason for an inspection - and are pleased about every cross put up," stated ministry spokesperson Oliver Platzer to the Augsburger Allgemeinen on Friday. "We assume that the respective heads of staff of the public authorities know the various bylaws and will implement them accordingly".
          The Bavarian Cross law, which has been divisively discussed across the nation, and which has even been considered controversial from within the Church, was made officially law on Tuesday. It included no concrete specifications regarding the model, size or quantity of the crosses, which are to be introduced into Bavarian public office buildings on 1st June. "The heads of staff are to hang up the crosses in a manner they deem suitable," added Platzer.`,
          author: users[1]
        }, {
          title: 'Aucun contrôle pour la mise en oeuvre de la loi de la croix',
          tagline: 'Le ministère de l\'intérieur de Bavière a décidé de ne pas superviser la mise en oeuvre de la loi de la croix',
          image: 'https://cdnwww.pnp.de/Kreuz/Wand/Bayerns/Ministerpraesident/Markus/2570067/_/1xTY0EmM4lkKrZpTLFFrWiZa356owvcAYkoEvaS2hysr_OC45fvetjra5j1huLjxPBfdWZEqGqLZsUkSRECk8gdMi--_GjSiCWmv49BHBqqbngAR3SAVX04H4O2bqRXvdqsVqorUCRn8CzdT-RP5rWRQ/180525-1439-urn-newsml-dpa-com-20090101-180525-99-445727-large-4-3.jpg',
          language: 'fr',
          content: `Le ministère de l'intérieure de Bavière n'a pas l'intention de superviser la mise en oeuvre de la présence obligatoire d'une croix dans les bâtiments des fonctions officielles de Bavière. "Nous ne voyons aucune raison pour une inspection - et nous sommes contents de chaque croix qui accroche," a déclaré le porte-parole du ministère, Oliver Platzer, au Augsburger Allgemeinen (vendredi). "Nous supposons que les chefs respectifs des pouvoirs publics connaissent les règlements administratifs et donc s'en occuperont".

          La loi bavaroise de la croix, qui a été discuté à l'échelle nationale d'une manière clivante, et qui a été polémique même dans l'Église, est devenue mardie officielle. Elle n'a compris aucune demande concernant le style, le taille, ou la quantité des croix, qui seront introduites aux bâtiments des fonctions officielles de Bavière le 1er juin. "Les chefs accrocheront les croix comme bon leur semble," a ajouté Platzer.`,
          author: users[1]
        }]
      }, {
        translations: [{
          title: 'Ditching meat could prevent a third of early deaths, say Harvard scientists',
          tagline: 'Doctors claimed that the positive effects of vegetarian and vegan diets have been underestimated',
          image: 'https://uploads-ssl.webflow.com/57dc5ba03bd579bc1ed6eab6/5ae311cdf34ffb726b266807_vegan-plantbased-doctor.jpg',
          language: 'en',
          content: `If everyone stopped eating meat, at least one-third of early deaths could be prevented, according to Harvard scientists presenting at the Unite to Cure Fourth International Vatican Conference.
          Around 200,000 lives could be saved each year as a result of the diet shift, claimed Dr. Walter Willett, Professor of Epidemiology and Nutrition at Harvard Medical School.
          Presenting to delegates at the conference, he said: "We have just been doing some calculations looking at the question of how much could we reduce mortality shifting towards a healthy, more plant-based diet, not necessarily totally vegan, and our estimates are about one third of deaths could be prevented."
          He added: That's not even talking about physical activity or not smoking, and that's all deaths, not just cancer deaths. That's probably an underestimate as well as that doesn't take into account the fact that obesity is important and we control for obesity.

          "When we start to look at it we see that healthy diet is related to a lower risk of almost everything that we look at.

          "Perhaps not too surprising because everything in the body is connected by the same underlying processes."`,
          author: users[0]
        }]
      }, {
        translations: [{
          title: 'The unstoppable rise of veganism: how a fringe movement went mainstream',
          tagline: 'Health, climate change, animal welfare... what\'s driving more people and brands to embrace a plant-based lifestyle? We investigate, and, below, four vegans explain their choice',
          image: 'https://i.guim.co.uk/img/media/8de19142730357dbd596dcb049fed8f75b6e8b37/0_327_5880_3528/master/5880.jpg?w=620&q=20&auto=format&usm=12&fit=max&dpr=2&s=9231ae495163d6e4ca75273f6b9e2636',
          language: 'en',
          content: `Late on a Thursday afternoon in early March, just off Brick Lane in the heart of London's nightlife hotspot Shoreditch, 23-year-old Louisa Davidson is taking calls and co-ordinating cables and scaffolds, as shocking pink Vegan Nights banners are hung around the expansive courtyards of the Truman Brewery. There is a chill in the air, quickly warmed by a buzzing atmosphere more like a music festival than an ethical food fair, as BBC Radio 1Xtra and House of Camden DJs play records, cocktails are poured and entrepreneurs sell zines and street wear alongside the vegan sushi, patisserie and "filthy vegan junk food". Davidson had been running weekend markets at the venue when she noticed a sharp increase in the number of vegan food businesses and vegan menus on offer. So last September, with her colleagues, she decided to put on a one-off vegan night market, with music, drinks and food. "On the day there were queues around the corner," she says. "We were not prepared for it at all! There was so much interest that by Christmas we decided to make it a monthly thing. It's all happened very quickly." Inspired by its success, and the traders she was working with, Davidson switched from vegetarian to a vegan diet in January.
          "We're riding on that wave of veganism getting into the mainstream," Davidson says. "People are curious about it and they're finding out that vegan food is not just a boring salad, it's experimental, and the food traders are amazing – people can have a drink, listen to music and hang out. First and foremost, we want to offer a positive platform, whether you've never had a fried jackfruit before or you're a longstanding vegan." Many of the traders are new to it as well, with a couple of them having launched their businesses at Vegan Nights. "It is a community and everyone supports each other's businesses. It's great to be a part of it."`,
          author: users[0]
        }]
      }, {
        translations: [{
          title: 'Ambitious women shouldn\'t be afraid of the word \'bitch\'. Or the term \'ambitchous\'',
          tagline: 'Sometimes we all have to do things that other people don\'t like. It doesn\'t make us bitches',
          image: 'http://www.leisureopportunities.com/images/551020_186616.jpg',
          language: 'en',
          content: `I was talking to a friend about a big step-up she was facing at work and she suddenly said, "I know I need to do this. But I'm hesitating because I am scared people will call me a bitch." My reply was harsh: "They might call you a bitch. It doesn't mean you are one. In fact, I know you're not one. And you know you're not one." What is she, instead of that word? Ambitious. Assertive. Self-driven. Decisive. Brave. Those are not bitch qualities. They are the qualities of self-preservation.

          I absolutely admit that I've done this, too, many times. (I.e. not done things because they risked being seen as bitchy.) But I'm now less interested in why women do this (habit, self-deprecation, patriarchy...), and I'm more interested in how we can stop doing it. So, of late, I have started to think to myself: What would a total and utter lunatic bastard do in this situation? This can be very entertaining as an exercise, especially if you imagine yourself doing this thing.

          So, for example, say you are facing a job interview and you want a three-day week (which is not on offer). You think to yourself: What would be a "bitchy" ask? Think about the total and utter lunatic bastard who would say, "I have already been offered seven other jobs at this level and they have all proposed triple the pay you are offering for a two-day week. Why should I even be talking to you?" (I did say this person was a lunatic.)This gives you a measure of what really counts as bitch/bastard behaviour and allows you to row back from that extreme point. At least you are not as much of a bitch/bastard as that person. So, instead, you might say – assertively – "I'm only considering jobs at the moment that can offer flexibility. What's possible?" This is not bitchy or ambitchous. It's a statement of what you want and need. It's not wrong to know or state that.

          There are two issues here, of course. First, a lot of us care way too much what other people think. Of course, there are people whose opinion matters: the people closest to you who trust you and know you best. You can always check with them whether you're being a bitch or not. (I bet you're not.) Second, the word "bitch" is a reaction from someone who doesn't like something you've done. But that doesn't mean they're right.

          Sometimes we all have to do things that other people don't like. It doesn't make us bitches. It's not our job to do only the things that will make other people think that we are nice. (Like working a five-day week when we really don't want to, and seething internally with resentment for many years as we shrivel away towards death. Not that I've felt this way or anything.)

          The word "ambitchous" is in the urban dictionary as "striving to be more of a bitch than the average bitch." (Which, let's face it, is a pretty fine ambition. Anyone seen Feud? In a parallel universe, I'd kill to access those levels of bitch-dom. As long as I get the same costumes.) But, in her book of the same name, Debra Condren defines "ambitchous" as something many of us can identify with: "A woman who (1) makes more money (2) has more power (3) gets the recognition she deserves and (4) has the determination to go after her dreams." See what I mean about not bitchy? Just normal. Just not doormat. Now go think about the lunatic bastard and get closer to that.`,
          author: users[0]
        }]
      }, {
        translations: [{
          title: 'Did the internet create a generation of feminists?',
          tagline: 'How the fourth wave of feminism was influenced by tech',
          image: 'https://d3enniz247y0a9.cloudfront.net/website/var/tmp/image-thumbnails/80000/89285/thumb__article-header-landscape/hero-landscape-4th-wave-feminism@2x.jpeg',
          language: 'en',
          content: `If, 10 years ago, you had asked me if I was a feminist, I would probably have said no. Aside from a few university lectures, feminism just wasn't a term that was on my radar, or that of my friends. We came of age in the post-feminist 90s, and were told that equality was a done deal, that we didn't need feminism any more. Feminists were angry, hairy relics from another age, nothing to do with us.

          But then another wave broke. Those in the know labelled it the fourth wave and we are still in the midst of it now. The past half-decade or so has seen a huge resurgence of interest in feminist activism and campaigning, especially online, and especially among my generation, the so-called "millennials". To call yourself a feminist is not the taboo it once was – how could it be when Beyoncé has danced on stage in front of the word spelled out in giant lit-up letters? We're even seeing teenage girls identify as such, something that was unimaginable when I was 15. Feminist comedians such as Sara Pascoe, Amy Schumer, Tina Fey, Bridget Christie, Michaela Coel, Katherine Ryan and Issa Rae have used feminist ideas in their acts and shows. In fact, feminism has now become so mainstream that it is being used to market everything, from designer slogan T-shirts (a look that has trickled down to the high street and become ubiquitous) to sanitary towels to shampoo. But more positively, the fourth wave of feminism has seen a whole new generation of women interrogating just what that term means, vocalising their anger at a system that continues to oppress us. And that is huge.

          When I co-founded the feminist blog The Vagenda, in 2012, I had no idea how popular it would become, nor that the new wave of feminism of which it was a small part would crescendo in the January 2017 Women's March  – a global act of resistance of an estimated five million people, in response to the election of sexist, bigoted Donald Trump, who boasts of grabbing women by the pussy and doesn't balk at removing access to family planning for women in developing countries. That march saw fourth-wave feminists march alongside their mothers and grandmothers, as well as supportive men, in an expression of outrage, disgust and humorous defiance. As with much fourth-wave activism, technology was a crucial organising factor.

          In fact, you could say the importance of tech is what separates the fourth wave from all the others. "I give Caitlin Moran's How To Be A Woman a huge amount of credit for turbo-charging fourth-wave feminism," says Helen Lewis, deputy editor of the New Statesman, which has been a much-needed champion for my generation of feminists. "Suddenly, publishers and editors could see proof that there was an audience out there, hungry for writing about feminism. But even before that, a community was building, based around sites like The F Word in the UK and Jezebel in the US. The rise of blogging and social media gave a platform to hundreds of women who would otherwise have struggled to make it past the traditional media ‘gatekeepers'."

          In a way, the internet allowed fourth-wave feminists to create an international solidarity movement. It taught us that we weren't alone. Encouraged by US-based feminists, such as Roxane Gay and Jessica Valenti, as well as homegrown role models, campaigns began springing up everywhere: Daughters of Eve, The Everyday Sexism Project, No More Page 3 and Women on Banknotes, to name just a few. Daughters of Eve uses social media not only to raise awareness of the barbaric practice of female genital mutilation, but also as a much needed amplifier for the voices of the victims whose voices so often go unheard. The Everyday Sexism Project, too, helped to give women a voice by collating their experiences of sexism in vivid, distressing detail on social media. Its message was: "This happens, it's everywhere and it's time to take notice." Meanwhile, No More Page 3 and Women on Banknotes utilised social media so effectively that they basically campaigned themselves out of existence. As I write, Page 3 is no more, and the first Jane Austen tenners are emerging from our cashpoints. At the same time, magazines, online and off, embraced the word "feminism", with new ones such as Rookie, Riposte, Gal-Dem and Lyra springing up (not to mention The Pool and The Vagenda). A political party, the Women's Equality party, was even founded.`,
          author: users[0]
        }]
      },{
        translations: [{
          title: 'Surconsommation de viande dans les cantines scolaires: Greenpeace enquête',
          tagline: 'Grâce à une enquête complète et un bilan dressé sur 3 200 communes, l\'ONGI Greenpeace a établi une cartographie permettant de visualiser quelles cantines de France servent des plats végétariens, ou non. La recherche révèle un constat inquiétant : la majorité des établissements étudiés servent de la viande aux enfants tous les jours.',
          image: 'https://www.femininbio.com/sites/femininbio.com/files/styles/panoramique/public/images/2018/05/gp_cantine_headeremail_01_0.jpg?itok=7wbSHbOE',
          language: 'fr',
          content: `Après une récolte de 12 000 contributions, le résultat de l'enquête de Greenpeace est tombé : en France, 69% des enfants sont obligés de manger de la viande tous les jours. Un constat non sans conséquence lorsque nous savons qu'une surconsommation de protéines animales contient des effets néfastes sur la santé et sur l'environnement.

          Grâce à cette collecte de données, Greenpeace a pu établir une cartographie dans laquelle vous pouvez constater quelles cantines servent des plats végétariens, mais aussi la fréquence à laquelle les enfants mangent végétarien dans le cadre scolaire. Force est de constater que seules les cantines dans et près des grandes villes servent des plats végétariens de temps en temps dans la semaine. De manière générale, la surconsommation s'avère être mauvaise pour la santé, mais la surconsommation de viande l'est tout particulièrement. Consommée au déjeuner, la viande apporte à elle seule 2 à 4 fois plus de protéines que ce qui est conseillé par les scientifiques de l'ANSES. Alors imaginons un instant la quantité de protéines accumulées en une journée si l'enfant mange aussi de la viande chez lui, et tous les jours. C'est énorme, surtout lorsque l'on sait que dans la législation, seulement huit repas servis sur vingt doivent comporter de la viande ou du poisson. Cela laisse une grande marge aux cantines pour mettre en place des menus végétariens, mais seuls 9% des écoliers mangent végétarien au moins une fois dans la semaine. Pourquoi les cantines ne servent t-elles pas plus de plats végétariens ?

          Diminuer les quantités de protéines animales, c'est aussi diminuer le risque de maladies chroniques telles que l'obésité, le diabète ou encore les cancers. La palme du produit animalier le plus nocif revient à la charcuterie, classée cancérogène, qui pour 50g augmente de 18% le risque de cancer colorectal.

          Malgré ces chiffres peu satisfaisants, certaines cantines de France ont déjà réussi cette transition vers le végétal. Ces dernières proposent des menus végétariens régulièrement ainsi que des produits bio. La cantine de Mouans-Sartoux est un bel exemple puisqu'elle est passée au 100% bio !`,
          author: users[1]
        }]
      }, {
        translations: [{
          title: 'Bouger, c\'est préserver sa santé',
          tagline: '17 milliards par an, c\'est le coût social pour la France de la sédentarité, qui implique obésité et diabète. Un an après l\'instauration du « sport sur ordonnance », certains innovent, comme à Murat, dans le Cantal.',
          image: 'https://img.lemde.fr/2018/02/22/0/0/6016/4016/1068/0/60/0/7852dfd_8261-19y6wcd.ix0zh.jpg',
          language: 'fr',
          content: `Un, deux, trois… Debout sur une jambe, quatre femmes et hommes soulèvent en cadence un petit haltère avec une main. ­Objectif : effectuer le mouvement une douzaine de fois, sans poser pied à terre. Chacun a sa parade, un partenaire avec qui il alterne cet exercice d'équilibre et de renforcement musculaire. Certains sont à l'aise, d'autres un peu à la peine. Mais tous s'appliquent, sous l'œil attentif de Noël Bultez, éducateur sportif spécialisé en activité physique adaptée et coordonnateur de ce dispositif original de sport-santé en milieu rural, dans le département du Cantal.

          En ce début décembre, malgré le froid et la neige qui se sont abattus depuis quelques jours, le groupe du mercredi soir est presque au complet. Dans la salle de danse de l'école de musique de Murat, au centre de cette bourgade de moyenne montagne de 2 000 habitants, huit des dix participants habituels sont au rendez-vous.

          Pendant une heure, sur fond musical, ils vont enchaîner séries de tractions des bras avec des élastiques, mouvements de boxe, jeux divers pour activer le système cardio-respiratoire… Noël Bultez donne les consignes, corrige les gestes, ­encourage. Sans se priver de chambrer gentiment ses élèves. De leur côté, l'ambiance est bon enfant, potache presque. Quand l'éducateur sportif les envoie chercher des ballons en mousse dans la pièce à côté pour des exercices de lancers et de coordination, ils s'amusent à shooter dedans comme des gamins. Bavardent. Chahutent.

          Tous ont pourtant quitté l'école et les terrains de sport il y a bien longtemps. Quadra ou quinquagénaires, ils sont actifs professionnellement, mais plus guère physiquement. Factrice, chauffeur de taxi ou encore aide-soignante, ils passent beaucoup de temps assis, au volant ou sur une chaise. Les superbes paysages du pays de Murat et du parc régional des volcans d'Auvergne ? Peu les explorent à pied ou à vélo, même le week-end. La plupart sont en surpoids, suivis pour un diabète, une hypertension, une maladie cardiaque ou respiratoire… Pendant ces séances dites d'activité physique adaptée (APA), l'un des participants porte même un petit appareil enregistrant sa fréquence cardiaque et sa saturation d'oxygène, que Noël Bultez vérifie régulièrement. Il y a encore quelque temps, le principe même d'aller bouger deux fois par semaine, en groupe, avec des personnes qu'ils ne connaissent pas ou juste de vue, leur aurait semblé incongru. Moins de trois mois après leur inclusion dans le programme sport-santé, dont c'est la deuxième session, ils semblent conquis. « Ce soir, je suis arrivée fatiguée, maintenant je me sens beaucoup mieux », assure Jeanne (le prénom a été changé), qui a fait plus de 10 kilomètres pour venir. Traitée en 2016 pour un cancer du sein, dont le traitement lui laisse encore une gêne au niveau du bras, la quinquagénaire avait d'abord essayé de s'intégrer à un cours « normal » de gymnastique volontaire. « Mais c'était trop dur, j'ai fait un malaise. Là, c'est plus adapté », poursuit-elle. « Moi, ça me sort, c'est mon petit moment à moi, renchérit une autre femme. Et puis, Noël nous motive en nous demandant ce qu'on a fait comme activité physique entre deux cours. » Des devoirs à la maison, en quelque sorte.`,
          author: users[0]
        }]
      }, {
        translations: [{
          title: 'Après #metoo, gare au retour de bâton',
          tagline: 'Chaque avancée du droit des femmes a été suivie d\'une offensive réactionnaire, démontrait en 1991 la féministe américaine Susan Faludi dans « Backlash ». Son essai est plus que jamais d\'actualité.',
          image: 'https://img.lemde.fr/2017/11/23/0/0/3500/2333/1068/0/60/0/b822ce9_29296-1sw93te.w8g.jpg',
          language: 'fr',
          content: `« Rien n'abîme davantage les pétales masculins que la plus légère ondée féministe » :à chaque progrès vers la justice sociale correspondrait une revanche, souvent brutale, des dominants, lit-on dans Backlash. La guerre froide contre les femmes. Cet essai reten­tissant de Susan Faludi, publié en 1991 et traduit en français en 1993 (éditions Des Femmes), interroge en effet une « excessive réactivité des hommes aux victoires les plus microscopiques des femmes ». Ses sept cents pages posent ainsi un regard rétrospectif sur les deux décennies précédant leur écriture, aussi riches en avancées pour les droits des femmes qu'en régressions. Car si les années 1970, aux Etats-Unis, ont vu fleurir des progrès sur les fronts de l'emploi féminin et du contrôle des naissances, les représailles ne se sont pas fait attendre : elles se sont traduites, dans les années 1980, par des mesures concrètes, comme le vote de réglementations draconiennes sur l'emploi des femmes ou l'interruption de la recherche sur la contraception. Dans son ouvrage, l'ancienne journaliste du Wall Street Journal, récipiendaire du prix Pulitzer, compare le parcours des droits des femmes à une « valse-hésitation », tant ceux-ci sont constamment freinés par des mécanismes insidieux. Ainsi, détaille-t-elle, la société se servirait des avancées des femmes contre elles, en tenant le féminisme pour responsable de tous les maux. Il s'agit là d'un « prix énorme que la société leur fait payer pour leur avoir accordé quelques maigres faveurs ». En effet, durant les années 1980, des études scientifiques bâclées ou mal interprétées serviront de socle à la propagation de mythes pernicieux : fausses couches, enfants mort-nés ou prématurés, voilà ce qui attendrait les femmes actives, des « arrivistes » aux « ambitions égoïstes ». De plus, les femmes célibataires et émancipées seraient davantage sujettes à la maladie mentale et à l'infertilité. Autant de fables propagées par une administration Reagan sous influence de la nouvelle droite, courant conservateur chez les républicains : il s'agit de dissuader le divorce et l'avortement au profit de campagnes natalistes de « défense de la famille ». Pour les Américaines, « quel est le message sous-jacent ? Rentrez chez vous », résume Faludi. La presse relaie ce discours rétrograde : après avoir soutenu le mouvement des droits des femmes, elle le décrédibilisera avec la même ardeur. En 1975, déjà,les médias adoptaient une stratégie visant à neutraliser le féminisme tout en l'utilisant à des fins commerciales : « Les femmes seraient désormais égales et n'ont plus besoin de nouveaux droits, mais de nouveaux modes de vie », pouvait-on lire à l'époque. « Le pseudo-féminisme enthousiaste [des médias] disparaît soudain dans les années 1980. La marche funèbre commence : le féminisme est mort, lit-on partout en "une". »

          Cette offensive réactionnaire, alimentée par l'inquiétude d'une érosion du pouvoir masculin, a beau être un phénomène récurrent, elle est pourtant « passée pratiquement inaperçue », s'étonne Susan Faludi. D'autant qu'elle avait déjà eu lieu au sortir de la seconde guerre mondiale alors que, en l'absence des soldats au front, un nombre record de femmes avait accédé à des emplois : l'après-guerre marquera un tournant répressif, substituant à la femme indépendante la figure de la pimpante ­ménagère de banlieue. Texte essentiel, en ce qu'il souligne le caractère cyclique de ces retours de bâton, Backlash éclaire d'un jour nouveau la période actuelle. Considéré comme un classique du corpus féministe, l'ouvrage est d'ailleurs fréquemment cité lors de débats aux Etats-Unis, y compris par l'essayiste star Rebecca Solnit (Ces hommes qui m'expliquent la vie, Editions de l'Olivier, 176 pages, 16 euros). De son côté, Susan Faludi s'exprime désormais essentiellement sur le sort des personnes trans dans l'Amérique de Donald Trump : son dernier livre paru, Dans la chambre noire (Fayard, 464 pages, 22 euros), est un portrait de son père, devenu femme trans.

          De notre côté de l'Atlantique, en revanche, l'influence de la pensée de Faludi reste ténue bien qu'encore d'actualité, estime Geneviève Sellier, professeure émérite en études cinématographiques à l'université Bordeaux-Montaigne, qui avait chroniqué le livre à sa sortie française, en 1993, dans Le Monde diplomatique.« On assiste constamment à ces backlashes, analyse-t-elle, mais sans se rendre compte qu'il s'agit d'un mouvement réactionnaire. Or, c'est cette prise de conscience qui constituait le propos de Susan Faludi. »

          En ce sens, parler de « délation » à propos du mouvement #balancetonporc, présenter la tribune des cent femmes parue dans Le Monde comme une revendication à préserver la liberté de séduction, faire sa « une », comme Causeur, contre « le féminisme policier » sont autant d'exemples d'une revanche qui pointe son nez, selon elle. « Il s'agit clairement d'un backlash qui ne dit pas son nom, car quand le retour de bâton est à l'œuvre, il reste invisible pour l'opinion dominante. Bref, il ne s'agit pas de craindre les excès supposés [des mouvements des droits des femmes], mais, au contraire, de redouter que l'intérêt retombe car aucune mesure politique n'est prise. »`,
          author: users[0]
        }]
      }, {
        translations: [{
          title: 'La gig economy può aiutare le mamme che tornano al lavoro?',
          tagline: 'Sebbene nella Silicon Valley molti si adattino a impieghi temporanei con Uber e aziende simili, con tutte le critiche e le accuse di sfruttamento che ne conseguono, il concetto di gig economy in sé apre delle opportunità nuove. Anche per le donne con figli',
          image: 'http://www.lastampa.it/rf/image_lowres/Pub/p3/2014/12/04/Tecnologia/Foto/RitagliWeb/ed9028d0-59b8-11e8-b12b-25e5d4b9f267_2RNF43O85068-knOH-U1110928929224XcD-1024x576%40LaStampa.it.jpg',
          language: 'it',
          content: `La scorsa domenica era la Festa della mamma negli Stati Uniti e in molti paesi europei, Italia compresa. Mentre mi svegliavo in una camera d'albergo a migliaia di chilometri di distanza dalla mia famiglia ho provato emozioni contrastanti. Mi sentivo triste perché non era a casa, ma anche fortunata perché ho un marito che mi sostiene nella mia carriera e un lavoro che amo. Grazie al jetlag ho avuto tutto il tempo di pensare alle altre mamme come me e a quante cose sono cambiate - in positivo - da quando stavo crescendo e mia madre lavorava. Allo stesso tempo ancora oggi mi rendo conto che rimane più di uno stigma nei confronti delle madri che lavorano. Sia che lavoriate per contribuire al reddito familiare, come mia madre, sia perché volete fare carriera, qualcuno penserà sempre che non mettiate i figli al primo posto. Se invece vi prendete una pausa dal lavoro per seguire i vostri figli nei loro primi anni, dovrete fare i conti con il giudizio opposto.

          La penale di maternità

          È un duplice giudizio con cui vi sarete trovate ad avere a che fare, soprattutto sul posto di lavoro. Se avete la fortuna di avere un ambiente professionale che vi dà supporto e comprensione, vi sembrerà strano sentir parlare della "penalità della maternità".

          I dati dimostrano che l'essere donna contribuisce solo in parte del divario salariale che attualmente si registra in tanti settori. L'Istituto per gli Studi Fiscali ha rilevato che prima di avere un figlio una lavoratrice media guadagna dal 10% al 15% in meno per ogni ora lavorata rispetto a un collega di sesso maschile; dopo il parto il gap aumenta costantemente fino al 33% circa in 12 anni. Questo ha implicazioni finanziarie ed economiche, ma anche emotive. La "penale di maternità" aiuta a spiegare perché le donne complessivamente guadagnano 81 centesimi di dollaro per ogni dollaro guadagnato da un uomo. Al contrario, la ricerca ha dimostrato che avere uno o più figli fa aumentare il salario degli uomini, anche quando cambia il loro numero di ore lavorate.

          Che cos'è la gig economy?

          La gig economy è la new economy che si sta sviluppando al di fuori dei vincoli dei modelli di lavoro convenzionali. I servizi resi possibili dalla "economia delle app" hanno aperto alle persone l'opportunità di guadagnarsi da vivere in un ambiente di lavoro molto più flessibile. Sebbene nella Silicon Valley in molti debbano piegarsi alla gig economy per via del costo della vita troppo alto, con tutte le critiche e le accuse di sfruttamento che ne conseguono, il concetto in sé apre delle opportunità nuove.

          Secondo un recente studio del McKinsey Global Institute, fino a 162 milioni di persone negli Stati Uniti e in Europa sono coinvolte in una qualche forma di lavoro indipendente. Chi fa parte della gig economy, dagli autisti Uber e Lyft, ai fattorini per la consegna di cibo, passando per i babysitter a chiamata, non è un dipendente dell'azienda che li paga. Sono appaltatori indipendenti. Invece di lavorare otto ore per un singolo datore di lavoro, costruiscono la propria vita lavorativa attorno alle proprie esigenze personali. Allo stesso tempo però molti lavori della gig economy non includono benefici tradizionali che potrebbero essere utili per le neo-mamme.

          Capo di te stesso

          Le madri che tornano al lavoro sono cronicamente sottopagate e sottovalutate. Un rapporto di PwC del novembre 2016 ha rilevato che quasi il 65% rimangono al di sotto del livello di retribuzione adeguato al loro potenziale o alla loro anzianità. Secondo nuove ricerche, questo divario non si è mai ridotto dagli anni Ottanta a oggi. E per alcune donne il gap è addirittura aumentato. Lo studio ha rilevato che quando si tengono di conto il livello d'istruzione, la mansione e l'esperienza lavorativa, il divario retributivo per le madri con un figlio è passato dal 9% nel periodo tra il 1986 e il 1995 al 15% tra il 2006 e il 2014. Per le madri con due figli, il divario è rimasto costante al 13%; per le madri con tre o più figli è sempre del 20%.

          I ricercatori sottolineano una mancanza di progressi nelle politiche a favore della famiglia negli Stati Uniti, come il congedo parentale retribuito e il sovvenzionamento per la custodia dei bambini. Altri paesi, tra cui la Svezia, hanno ridotto i differenziali retributivi di genere dopo l'introduzione di tali leggi.

          Considerando quanto poco sono progredite le normative e l'atteggiamento delle aziende in materia di assistenza all'infanzia e congedo parentale e tenendo conto dei cambiamenti che il luogo di lavoro sta subendo per attrarre i millennial, per le mamme che si sono prese una pausa dalla carriera rimettersi in gioco è scoraggiante. La gig economy potrebbe offrire loro nuove opportunità, non solo in termini di flessibilità, ma anche per riscoprire cosa vogliono fare davvero, e per guadagnare un po' di più.

          Dal marketing ai metodi di pagamento, alla fornitura di servizi, grazie ai progressi della tecnologia non è mai stato così facile essere il capo di sé stessi. Questa opzione, naturalmente, non significa che le grandi aziende debbano essere esentate dalla necessità di migliorare il livello di supporto e risolvere il divario retributivo per le neo-mamme. Significa semplicemente che le donne che tornano al lavoro dopo la maternità non sono più costrette ad adattarsi a un lavoro dalla retribuzione insufficiente, o che non le aiuta a sviluppare appieno il proprio potenziale.`,
          author: users[1]
        }]
      }, {
        translations: [{
          title: 'De Benedetti: l\'Europa può fare meglio degli Usa per proteggere gli utenti digitali',
          tagline: 'Il presidente di Gedi a Bagnaia: il nostro gruppo sarà il cane da guardia della democrazia in questo momento di grande incertezza',
          image: 'http://www.lastampa.it/rf/image_lowres/Pub/p4/2018/05/26/Economia/Foto/RitagliWeb/fb871b30-60c8-11e8-bfcf-559582ae8b13_deba-krQG-U11101077588495c1F-1024x576%40LaStampa.it.JPG',
          language: 'it',
          content: `«Nell'informazione di qualità c'è un valore», e la missione del gruppo Gedi è concentrarsi su quel valore. Così Marco De Benedetti, presidente di Gedi (il gruppo che pubblica La Stampa, La Repubblica e 13 giornali locali, leader della carta stampata in Italia) al convegno "Crescere tra le righe" organizzato dall'Osservatorio giovani-editori a Bagnaia, vicino a Siena. Per farlo, bisogna cambiare anche il modo di relazionarsi con i lettori: «per noi è importante il concetto di comunità», un modo per far crescere la fiducia nei confronti dei media.

          Sempre a proposito di fiducia De Benedetti ha spiegato che a suo modo di vedere «L'Europa può fare meglio degli Usa nella protezione degli utenti». Una protezione che non è un limite ma un'occasione. Infine il mercato della musica, un altro tipo di editoria che è stato il primo a incontrate il digitale: «prima abbiamo visto un grande caos, poi è nato un mercato nuovo. Oggi il mercato della musica si sta imponendo nel mondo digitale», non accade il contrario. La produzione di news può seguire una strada analoga: «il gruppo Gedi - ha chiuso De Benedetti - ha 10 milioni di utenti unici al giorno sui suoi siti di informazione a fronte di una popolazione di 60 milioni di abitanti». Forte di questi numeri, di fronte alla situazione di profonda incertezza attraversata dalla politica italiana De Benedetti prende anche un impegno: «saremo il cane da guardia della democrazia».`,
          author: users[0]
        }]
      }
      ])
        .then(articles => console.log(`${articles.length} articles created!`))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close());
    });
});
