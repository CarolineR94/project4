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
          title: 'Tax rises needed \'to prevent NHS misery\'',
          tagline: 'The first article to be posted',
          image: 'Taxes are going to have to rise to pay for the NHS if the UK is to avoid \'a decade of misery\' in which the old, sick and vulnerable are let down, say experts.',
          language: 'en',
          content: 'The Institute for Fiscal Studies and Health Foundation said the NHS would need an extra 4% a year - or £2,000 per UK household - for the next 15 years. It said the only realistic way this could be paid for was by tax rises. It comes as ministers are arguing behind the scenes about NHS funding. The prime minister has promised a long-term funding plan for the NHS. This is expected to cover the next decade and could be announced as soon as next month, in time for the 70th anniversary of the creation of the NHS. It has been announced that an \'NHS assembly\' will be set up where national and local stakeholders can discuss progress on achieving plans for the NHS\'s future. The Treasury is believed to want to keep average rises at about 2% a year, but other ministers are arguing for more, the BBC understands. Health and Social Care Secretary Jeremy Hunt is believed to want at least 3% a year. As those discussions continue, the IFS and Health Foundation have revealed the findings of their review, commissioned by the NHS Confederation, which represents NHS trusts. It warned the ageing population and rising number of people with long-term conditions, such as diabetes and heart disease, meant the health service needed more than it had been getting in the past decade. In recent years the annual rises once inflation is taken into account have been limited to just over 2%. But continuing in this vein would lead to a continued deterioration in performance, the report warned.',
          author: users[0]
        }]
      }, {
        translations: [{
          title: 'Visite de Macron en Russie : les défenseurs des droits humains tentent de se faire entendre',
          tagline: 'Le président doit rencontrer des militants mobilisés pour les libérations du cinéaste ukrainien Oleg Sentsov et du Tchétchène Oyoub Titiev.',
          image: 'https://img.lemde.fr/2018/05/23/0/0/3000/2164/1068/0/60/0/8a1ac71_26478-hq0vh1.9tq5.jpg',
          language: 'fr',
          content: 'Limitée à Saint-Pétersbourg, la ville natale de Vladimir Poutine, la première visite officielle d\'Emmanuel Macron en Russie, qui débute jeudi 24 mai et qui se poursuivra le vendredi, sera dominée par les questions internationales. Entre le conflit en Ukraine qui s\'enlise et la guerre en Syrie, où le régime poursuit sa reconquête du territoire avec son allié russe, les tensions au Moyen-Orient et les points d\'achoppement avec l\'Occident, entre sanctions et contre-sanctions, les défenseurs des droits humains tentent néanmoins de faire entendre leur voix « dans un contexte de répression aggravée », selon Human Rights Watch (HRW). Dans un communiqué publié mercredi, l\'ONG internationale exhorte le chef de l\'Etat français « à respecter son engagement à plaider en faveur des principes de justice et de liberté d’expression, faute de quoi il apparaîtrait comme se trahissant lui-même ». « La France est la patrie des droits humains et les Russes y sont sensibles », ajoute de son côté la journaliste et visiteuse de prison Zoïa Svetova. A la veille de la venue de M. Macron, deux partisans de l’opposant Alexeï Navalny ont été à leur tour interpellés et condamnés à 30 jours de détention pour avoir relayé sur les réseaux sociaux l’appel de leur chef de file, lui-même sous les verrous pour la même durée, à une manifestation non autorisée contre le « tsar Poutine », le 5 mai. Au pouvoir depuis dix-huit ans, le chef du Kremlin, qui vient de reconduire quasi à l\'identique le gouvernement dirigé par son premier ministre, Dmitri Medvedev, inaugurait deux jours plus tard son quatrième mandat. Deux dossiers, en particulier, devraient être abordés lors d\'une rencontre entre M. Macron et des représentants de la société civile prévue en marge des discussions avec M. Poutine. Le chef de l\'Etat français sera ainsi le destinataire, comme l\'ensemble des participants du Forum économique de Saint-Pétersbourg, d\'une lettre ouverte signée par plus de 130 personnalités russes en faveur du cinéaste ukrainien Oleg Sentsov. En août 2015, le réalisateur a été condamné à 20 ans d\'emprisonnement pour « terrorisme » – « en violation du droit international », avait alors estimé l\'Union européenne.',
          author: users[1]
        }]
      }, {
        translations: [{
          title: 'Entra in vigore il nuovo regolamento Ue sulla privacy: ecco cosa cambia',
          tagline: 'Tra i punti cardine della nuova normativa ci sono diritto all\'oblio e modalità di accesso ai propri dati personali semplificate',
          image: 'http://www.lastampa.it/rf/image_lowres/Pub/p4/2018/04/26/Esteri/Foto/RitagliWeb/912d7108-5f65-11e8-bfcf-559582ae8b13_90651103_l-kTLF-U11101048631551KRF-1024x576%40LaStampa.it.jpg',
          language: 'it',
          content: 'Entra in vigore il 25 maggio il nuovo regolamento Ue sulla privacy che sostituisce in Italia, così come negli altri Paesi dell\'Unione, le leggi vigenti in materia. Tra i punti cardine della nuova normativa ci sono il diritto all’oblio e alla portabilità dei dati, le notifiche di violazione agli utenti e alle autorità nazionali, le modalità di accesso ai propri dati personali semplificate e la possibilità per le imprese di rivolgersi a un’unica autorità di vigilanza. Fondamentale il cosiddetto principio di “responsabilizzazione”, che attribuisce direttamente ai titolari del trattamento il compito di assicurare, ed essere in grado di comprovare, il rispetto dei principi applicabili al trattamento dei dati personali. Le informazioni presenti nella rete sono in continuo aumento e le connessioni tra i diversi Paesi del mondo sempre più fitte, per questo viene anche regolamentata la diffusione di dati personali all’esterno dell’Unione Europea. I dati su internet saranno inoltre più protetti grazie a nuove restrizioni e all’obbligo di utilizzare un linguaggio chiaro nelle regole relative alla privacy. Nasce inoltre la figura del “responsabile della protezione dati” di cui dovranno munirsi tutte le realtà, pubbliche e private, che trattano informazioni sensibili: dagli istituti di credito e le imprese assicurative, alle società di informazioni commerciali, di revisione contabile, dai partiti e i sindacati, ai caf e laboratori di analisi mediche, centri di riabilitazione, fino alle società di call center e quelle che erogano servizi televisivi a pagamento. Chi fornisce servizi internet, avrà bisogno di un consenso esplicito prima di utilizzare i dati dei clienti. Le nuove norme non riguardano solo il settore pubblico e le imprese, ma chiunque possegga dei dati (ad esempio le mail per l’invio di una newsletter informativa).',
          author: users[0]
        }]
      }])
        .then(articles => console.log(`${articles.length} articles created!`))
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close());
    });
});
