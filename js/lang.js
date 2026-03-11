/* ═══════════════════════════════════════════════════════
   ONTIME TRANSFERT — Shared translation engine
   Used by all secondary pages (NOT index.html)
═══════════════════════════════════════════════════════ */

const i18n = {
  en: {
    /* ── NAV ── */
    'nav-home':'Home','nav-vehicles':'Vehicles','nav-services':'Services',
    'nav-rates':'Rates','nav-b2b':'Business','nav-contact':'Contact','nav-driver':'Become a driver','nav-book':'Book',
    /* ── FOOTER ── */
    'ft-legal':'Legal notice','ft-cgv':'T&Cs','ft-privacy':'Privacy','ft-contact':'Contact',
    'ft-copy':'© 2025 ONTIME TRANSFERT — YOYO TRANSPORT SAS. All rights reserved.',

    /* ════════════════════════════
       VEHICULES PAGE
    ════════════════════════════ */
    'vhp-label':'Our fleet',
    'vhp-title':'Vehicles up to<br>your <em>standards</em>',
    'vhp-sub':'Every vehicle is checked, cleaned and prepared with care. Comfort, safety and discretion for every journey.',
    /* Card 1 — Confort */
    'vc1-name':'Confort',
    'vc1-cap':'<strong>1 to 3 passengers</strong> · 2 large bags + 1 small',
    'vc1-desc':'Recent, spacious and perfectly maintained vehicles. Ideal for airport, station and city transfers.',
    'vc1-eq1':'Air conditioning','vc1-eq2':'USB chargers','vc1-eq3':'Full insurance',
    'vc1-cta':'Book Confort',
    /* Card 2 — Premium */
    'vc2-name':'Business',
    'vc2-cap':'<strong>1 to 3 passengers</strong> · 3 bags max',
    'vc2-desc':'For your business travel and special occasions. High-end vehicles, leather interior, refined finishes. Elegance at every journey.',
    'vc2-eq1':'Dual-zone climate control','vc2-eq2':'Wi-Fi 4G','vc2-eq3':'USB-C chargers',
    'vc2-eq4':'Full insurance','vc2-eq5':'Water &amp; press','vc2-eq6':'Heated leather seats',
    'vc2-cta':'Book Business',
    /* Card 3 — Van */
    'vc3-name':'Van &amp; Minibus',
    'vc3-cap':'<strong>4 to 7 passengers</strong> · 7 bags max',
    'vc3-desc':'Perfect for families, friend groups or professional teams. Generous space for passengers and luggage, without compromising on comfort.',
    'vc3-eq1':'Rear air conditioning','vc3-eq2':'Wi-Fi','vc3-eq3':'Multiple USB chargers',
    'vc3-eq4':'Full insurance','vc3-eq5':'Large boot','vc3-eq6':'Water included',
    'vc3-cta':'Book a Van',
    /* Card 4 — VIP */
    'vc4-name':'Sprinter &amp; VIP Van',
    'vc4-desc':'For events, weddings, seminars or large groups. Premium bespoke vehicles, white-glove service. Custom quote within 2h.',
    'vc4-cta':'Request a VIP quote',

    /* ════════════════════════════
       SERVICES PAGE
    ════════════════════════════ */
    'sp-label':'Our Services',
    'sp-title':'Experts in <em>private</em> transfers',
    'sp-sub':'Airports, stations, Disneyland Paris, events — we cover all your premium transport needs in Île-de-France and beyond.',
    /* Svc 1 — Airport */
    's1-name':'Airport <em>Transfer</em>',
    's1-tag':'CDG — Orly — Beauvais',
    's1-desc':'We handle hundreds of airport transfers every month. Our drivers know all accesses, terminals and drop-off zones at <strong>Roissy-Charles de Gaulle</strong>, <strong>Orly</strong> and <strong>Beauvais</strong>. Your flight is tracked in real time: if delayed or early, your driver adapts automatically, at no extra charge. On arrival, he awaits you with a name sign for Van and luxury sedan categories. You benefit from <strong>15 free minutes of waiting</strong> to collect your luggage in peace.',
    's1-f1':'Real-time flight tracking','s1-f2':'Name sign','s1-f3':'15 min free waiting','s1-f4':'Guaranteed fixed price',
    's1-cta':'Book an airport transfer',
    /* Svc 2 — Disneyland */
    's2-name':'Disneyland <em>Paris</em> Transfer',
    's2-tag':'Marne-la-Vallée — Chessy Station',
    's2-desc':'Specialists in transfers to <strong>Disneyland Paris</strong> and <strong>Marne-la-Vallée Chessy station</strong>, we transport families, groups and business travellers directly from Paris airports, train stations or your home. Our vehicles are spacious, ideal for families with children — we provide <strong>baby seats and booster seats free of charge</strong>. Your children travel safely, and you arrive relaxed, ready to enjoy the magic.',
    's2-f1':'Free child seats','s2-f2':'From airports &amp; stations','s2-f3':'Spacious vehicles','s2-f4':'Disney hotel pick-up',
    's2-cta':'Book for Disneyland',
    /* Svc 3 — Station */
    's3-name':'Train <em>Station</em> Transfer',
    's3-tag':'All Paris stations',
    's3-desc':'Gare du Nord, Gare de Lyon, Gare Montparnasse, Gare de l\'Est, Gare Saint-Lazare, Gare d\'Austerlitz — we cover <strong>all Paris train stations</strong>. Your driver awaits you at the exit, ready to take charge of your luggage. As with airports, we track your train in real time and adjust the pick-up time in the event of a delay. Our drivers are experts in the often complex station accesses, ensuring a smooth, stress-free journey.',
    's3-f1':'Real-time train tracking','s3-f2':'Luggage assistance','s3-f3':'All stations covered','s3-f4':'15 min free waiting',
    's3-cta':'Book a station transfer',
    /* Svc 4 — Mise à dispo */
    's4-name':'Chauffeur <em>on Standby</em>',
    's4-tag':'By the hour or full day',
    's4-desc':'Need a private driver for several hours or a full day? Our standby service offers <strong>total flexibility</strong>. Business meetings, shopping, sightseeing, multiple stops — your driver remains at your disposal and adapts to your schedule in real time. The vehicle and driver are dedicated exclusively to you for the entire duration.',
    's4-f1':'Dedicated driver','s4-f2':'Multiple stops included','s4-f3':'Flexible schedule','s4-f4':'Custom quote',
    's4-cta':'WhatsApp quote',
    /* Svc 5 — Événements */
    's5-name':'Events &amp; <em>Weddings</em>',
    's5-tag':'Tailored',
    's5-desc':'Weddings, seminars, galas, corporate evenings — we create <strong>bespoke</strong> transport services for your events. From the VIP Sprinter for the wedding party to shuttles for your guests, every detail is planned so that transport matches your event. White-glove service, decorated vehicles on request, coordination with your suppliers — we take care of everything.',
    's5-f1':'Sprinter &amp; VIP Van','s5-f2':'Guest shuttles','s5-f3':'Logistics coordination','s5-f4':'Quote within 2h',
    's5-cta':'Event quote',
    /* Svc 6 — Long distance */
    's6-name':'Long <em>distance</em>',
    's6-tag':'France &amp; neighbouring countries',
    's6-desc':'Need a transfer beyond Île-de-France? We handle <strong>long-distance</strong> journeys to all major French cities and neighbouring countries: Belgium, Luxembourg, Netherlands, Germany. Optimal comfort, recent vehicle, water and chargers available — even on long journeys, the service remains impeccable. Fixed fare communicated in advance, no nasty surprises.',
    's6-f1':'All of France','s6-f2':'Belgium, Luxembourg','s6-f3':'Fixed long-distance fare','s6-f4':'Premium comfort',
    's6-cta':'Request a quote',
    /* CTA bottom */
    'scta-title':'A specific need?',
    'scta-sub':'Our team is available 24/7 to study your request and offer the best solution.',
    'scta-btn1':'Book online','scta-btn2':'Contact us',

    /* ════════════════════════════
       TARIFS PAGE
    ════════════════════════════ */
    'tp-label':'Rates &amp; Bookings',
    'tp-title':'Book with complete <em>transparency</em>',
    'tp-sub':'Guaranteed fixed price, secure online payment, flexible cancellation. Everything is clear from the start, no surprises on arrival.',
    /* Block titles */
    'tb1-title':'How to <em>book</em>?',
    'tb2-title':'Reception &amp; <em>punctuality</em>',
    'tb3-title':'Our <em>rates</em>',
    'tb4-title':'Secure <em>payment</em>',
    'tb5-title':'Modify a <em>booking</em>',
    'tb6-title':'Cancellation <em>policy</em>',
    'tb7-title':'Our <em>commitments</em>',
    /* Timeline */
    'tt1-label':'More than 24h before the ride',
    'tt1-desc':'100% free cancellation. Full refund.',
    'tt2-label':'Between 24h and 2h before the ride',
    'tt2-desc':'50% cancellation fee.',
    'tt3-label':'Less than 2h before or no-show',
    'tt3-desc':'Full charge (100%). No refund.',
    /* Engagements */
    'te1':'Guaranteed punctuality',
    'te2':'Clean and recent vehicles',
    'te3':'Professional VTC-licensed drivers',
    'te4':'Comprehensive passenger insurance',
    'te5':'Fixed price with no surprises',
    'te6':'24/7 customer service',
    /* CTA */
    'tcta-title':'Ready to book your transfer?',
    'tcta-sub':'Fixed price, immediate confirmation, professional driver.',
    'tcta-btn1':'Book now',
    'tcta-btn2':'WhatsApp quote',

    /* ════════════════════════════
       CONTACT PAGE
    ════════════════════════════ */
    'cp-label':'Contact',
    'cp-title':'A question? <em>Write to us</em>',
    'cp-sub':'Our team is available 24/7 to answer all your enquiries.',
    'ctab1':'Individuals','ctab2':'Companies',
    'cinfo1-label':'Phone','cinfo1-note':'Available 24/7',
    'cinfo2-label':'WhatsApp','cinfo2-note':'Quick reply — VIP &amp; standby quotes',
    'cinfo3-label':'Email','cinfo3-note':'Reply within 2 hours',
    'cinfo4-label':'Availability','cinfo4-note':'Bookings, changes, emergencies',
    'cform-title':'Send us a message',
    'cform-sub':'We reply as quickly as possible.',
    'cf-fname':'First name','cf-lname':'Last name',
    'cf-email':'Email','cf-phone':'Phone','cf-subject':'Subject','cf-message':'Message',
    'cf-submit':'Send message',
    'cb2b-intro-title':'Your <em style="font-style:italic;">company</em> account',
    'cb2b-intro-sub':'Simplify your business travel with a dedicated account, centralised billing and negotiated rates.',
    /* ── B2B HOMEPAGE SECTION ── */
    'b2b-label':'For businesses','b2b-title':'Managing <em>corporate travel</em>?',
    'b2b-sub':'An ONTIME business account simplifies everything: centralised bookings, automatic invoices, rates tailored to your volume.',
    'b2b-p1-title':'Centralised billing','b2b-p1-desc':'One monthly invoice for all your rides. Detailed receipt after each trip, ready for expense reports.',
    'b2b-p2-title':'Preferential rates','b2b-p2-desc':'Negotiated pricing based on your monthly volume. The more you book, the more you save.',
    'b2b-p3-title':'Dedicated account & single point of contact','b2b-p3-desc':'A dedicated account manager. Your teams book online or by phone — instant confirmation.',
    'b2b-p4-title':'24/7 online booking','b2b-p4-desc':'Your employees book directly from the site, at any hour. Real-time tracking, flexible cancellation.',
    'b2b-form-title':'Business account request','b2b-form-sub':'Reply within 24h — Free personalised quote',
    'b2b-btn':'Request a business quote',
    'cb2bp1-title':'Monthly billing','cb2bp1-desc':'A single monthly summary invoice. Accepted by your accounting department.',
    'cb2bp2-title':'Dedicated contract','cb2bp2-desc':'A single point of contact, drivers accustomed to your requirements, priority availability.',
    'cb2bp3-title':'Preferential rates','cb2bp3-desc':'Discounts from 10 rides/month. Tiered pricing based on your monthly volume.',
    'cb2bp4-title':'Monthly reporting','cb2bp4-desc':'Journey history, expenses and statistics per employee.',
    'cb2b-title':'Open a company account',
    'cb2b-sub':'Reply within 24h from our sales team.',
    'cb2b-societe':'Company *','cb2b-siret':'SIRET',
    'cb2b-contact':'Contact name *','cb2b-email':'Email *','cb2b-tel':'Phone',
    'cb2b-volume':'Estimated monthly volume',
    'cb2b-msg':'Message (optional)',
    'cb2b-submit':'Submit request',

    /* ════════════════════════════
       DEVENIR CHAUFFEUR PAGE
    ════════════════════════════ */
    'drp-label':'Recruitment',
    'drp-title':'Become an <em>ONTIME</em> driver',
    'drp-sub':'Join a fast-growing professional network. Regular rides, attractive pay and genuine respect for your profession — welcome to ONTIME Transfert.',
    'drs1':'Rides / month','drs2':'Satisfaction rate','drs3':'Dispatch available','drs4':'Fast payment',
    'drav-label':'Why join us',
    'drav-title':'The <em>ONTIME</em> advantages',
    'drav1-title':'Regular rides',
    'drav1-desc':'Access a steady flow of bookings across Paris and Île-de-France. No more searching for clients.',
    'drav2-title':'Attractive pay',
    'drav2-desc':'Fair rates, payment within 7 days and full transparency on every ride. No bad surprises.',
    'drav3-title':'Respect for drivers',
    'drav3-desc':'At ONTIME, the driver comes first. 24/7 support, attentiveness, and a relationship built on mutual trust.',
    'drav4-title':'Dedicated app',
    'drav4-desc':'Receive your rides, manage your schedule and track your earnings directly from your phone.',
    'drav5-title':'Paris &amp; Île-de-France area',
    'drav5-desc':'CDG, Orly, Beauvais airports, Paris stations, Disneyland, Versailles — the most in-demand routes in France.',
    'drav6-title':'Total flexibility',
    'drav6-desc':'Choose your hours and days. Accept the rides that suit you. You stay in control of your activity.',
    'drb1-title':'How does <em>it work</em>?',
    'drst1-title':'Apply','drst1-desc':'Complete the form below with your documents',
    'drst2-title':'Review','drst2-desc':'Our team checks your file within 48h',
    'drst3-title':'Activation','drst3-desc':'Your account is activated and you receive your first rides',
    'drb2-title':'Required <em>documents</em>',
    'drb3-title':'Apply <em>now</em>',
    'drcta-title':'Questions about recruitment?',
    'drcta-sub':'Our team is available to answer all your questions.',
    'drcta-btn':'Contact us on WhatsApp',

    /* ════════════════════════════
       MENTIONS LÉGALES PAGE
    ════════════════════════════ */
    'mlp-label':'Legal information',
    'mlp-title':'Legal notice &amp; <em>T&Cs</em>',
    'ml-toc':'Table of contents',
    'ml-toc1':'1. Legal notice',
    'ml-toc2':'2. Terms &amp; Conditions',
    'ml-toc3':'3. Cookies &amp; personal data'
  },

  fr: {
    /* ── NAV ── */
    'nav-home':'Accueil','nav-vehicles':'Véhicules','nav-services':'Services',
    'nav-rates':'Tarifs','nav-b2b':'Entreprises','nav-contact':'Contact','nav-driver':'Devenir chauffeur','nav-book':'Réserver',
    /* ── FOOTER ── */
    'ft-legal':'Mentions légales','ft-cgv':'CGV','ft-privacy':'Confidentialité','ft-contact':'Contact',
    'ft-copy':'© 2025 ONTIME TRANSFERT — YOYO TRANSPORT SAS. Tous droits réservés.',

    /* ── VEHICULES ── */
    'vhp-label':'Notre flotte',
    'vhp-title':'Des véhicules à la hauteur<br>de vos <em>exigences</em>',
    'vhp-sub':'Chaque véhicule est vérifié, nettoyé et préparé avec soin. Confort, sécurité et discrétion pour tous vos déplacements.',
    'vc1-name':'Confort',
    'vc1-cap':'<strong>1 à 3 passagers</strong> · 2 gros bagages + 1 petit',
    'vc1-desc':'Véhicules récents, spacieux et parfaitement entretenus. Idéal pour les transferts aéroport, gare et courses en ville.',
    'vc1-eq1':'Climatisation','vc1-eq2':'Chargeurs USB','vc1-eq3':'Assurance complète',
    'vc1-cta':'Réserver en Confort',
    'vc2-name':'Business',
    'vc2-cap':'<strong>1 à 3 passagers</strong> · 3 bagages max',
    'vc2-desc':'Pour vos déplacements d\'affaires et vos occasions spéciales. Véhicules haut de gamme, intérieur cuir, finitions soignées. Le raffinement à chaque trajet.',
    'vc2-eq1':'Climatisation bi-zone','vc2-eq2':'Wi-Fi 4G','vc2-eq3':'Chargeurs USB-C',
    'vc2-eq4':'Assurance complète','vc2-eq5':'Eau &amp; presse','vc2-eq6':'Sièges cuir chauffants',
    'vc2-cta':'Réserver en Business',
    'vc3-name':'Van &amp; Minibus',
    'vc3-cap':'<strong>4 à 7 passagers</strong> · 7 bagages max',
    'vc3-desc':'Parfait pour les familles, groupes d\'amis ou équipes professionnelles. Espace généreux pour les passagers et les bagages, sans compromis sur le confort.',
    'vc3-eq1':'Climatisation arrière','vc3-eq2':'Wi-Fi','vc3-eq3':'Chargeurs USB multiples',
    'vc3-eq4':'Assurance complète','vc3-eq5':'Grand coffre','vc3-eq6':'Eau offerte',
    'vc3-cta':'Réserver un Van',
    'vc4-name':'Sprinter &amp; Van VIP',
    'vc4-desc':'Pour vos événements, mariages, séminaires ou groupes importants. Véhicules haut de gamme sur mesure, service blanc gants. Devis personnalisé sous 2h.',
    'vc4-cta':'Demander un devis VIP',

    /* ── SERVICES ── */
    'sp-label':'Nos Services',
    'sp-title':'Experts du transfert <em>privé</em>',
    'sp-sub':'Aéroports, gares, Disneyland Paris, événements — nous couvrons tous vos besoins de transport haut de gamme en Île-de-France et au-delà.',
    's1-name':'Transfert <em>Aéroport</em>',
    's1-tag':'CDG — Orly — Beauvais',
    's1-desc':'Nous assurons des centaines de transferts aéroport chaque mois. Nos chauffeurs connaissent parfaitement les accès, terminaux et zones de dépose de <strong>Roissy-Charles de Gaulle</strong>, <strong>Orly</strong> et <strong>Beauvais</strong>. Votre vol est suivi en temps réel : en cas de retard ou d\'avance, votre chauffeur s\'adapte automatiquement, sans supplément. À votre arrivée, il vous attend avec une pancarte nominative pour les catégories Van et Berline de luxe. Vous profitez de <strong>15 minutes d\'attente offertes</strong> pour récupérer vos bagages en toute sérénité.',
    's1-f1':'Suivi vol temps réel','s1-f2':'Pancarte nominative','s1-f3':'15 min d\'attente offertes','s1-f4':'Prix fixe garanti',
    's1-cta':'Réserver un transfert aéroport',
    's2-name':'Transfert <em>Disneyland Paris</em>',
    's2-tag':'Marne-la-Vallée — Gare de Chessy',
    's2-desc':'Spécialistes du transfert vers <strong>Disneyland Paris</strong> et la <strong>Gare de Marne-la-Vallée Chessy</strong>, nous transportons familles, groupes et voyageurs d\'affaires directement depuis les aéroports parisiens, les gares ou votre domicile. Nos véhicules sont spacieux, idéaux pour les familles avec enfants — nous mettons à disposition des <strong>sièges bébé et rehausseurs gratuitement</strong>. Vos enfants voyagent en sécurité, et vous arrivez détendus, prêts à profiter de la magie.',
    's2-f1':'Sièges enfants offerts','s2-f2':'Depuis aéroports &amp; gares','s2-f3':'Véhicules spacieux','s2-f4':'Prise en charge hôtels Disney',
    's2-cta':'Réserver pour Disneyland',
    's3-name':'Transfert <em>Gare</em>',
    's3-tag':'Toutes gares parisiennes',
    's3-desc':'Gare du Nord, Gare de Lyon, Gare Montparnasse, Gare de l\'Est, Gare Saint-Lazare, Gare d\'Austerlitz — nous couvrons <strong>toutes les gares parisiennes</strong>. Votre chauffeur vous attend à la sortie, prêt à prendre en charge vos bagages. Comme pour les aéroports, nous suivons votre train en temps réel et ajustons l\'heure de prise en charge en cas de retard. Nos chauffeurs maîtrisent les accès souvent complexes des gares parisiennes pour vous garantir un trajet fluide et sans stress.',
    's3-f1':'Suivi train temps réel','s3-f2':'Prise en charge bagages','s3-f3':'Toutes gares couvertes','s3-f4':'15 min d\'attente offertes',
    's3-cta':'Réserver un transfert gare',
    's4-name':'Mise à <em>disposition</em>',
    's4-tag':'À l\'heure ou à la journée',
    's4-desc':'Besoin d\'un chauffeur privé pour plusieurs heures ou une journée entière ? Notre service de mise à disposition vous offre une <strong>flexibilité totale</strong>. Rendez-vous d\'affaires, shopping, visites touristiques, déplacements multiples — votre chauffeur reste à votre disposition et s\'adapte à votre programme en temps réel. Le véhicule et le chauffeur sont dédiés exclusivement à vous pendant toute la durée de la prestation.',
    's4-f1':'Chauffeur dédié','s4-f2':'Arrêts multiples inclus','s4-f3':'Programme flexible','s4-f4':'Devis personnalisé',
    's4-cta':'Demander un devis WhatsApp',
    's5-name':'Événements &amp; <em>Mariages</em>',
    's5-tag':'Sur mesure',
    's5-desc':'Mariages, séminaires, galas, soirées d\'entreprise — nous créons des prestations de transport <strong>sur mesure</strong> pour vos événements. Du Sprinter VIP pour le cortège de mariage à la navette pour vos invités, chaque détail est pensé pour que le transport soit à la hauteur de votre événement. Service blanc gants, véhicules décorés sur demande, coordination avec vos prestataires — nous nous occupons de tout.',
    's5-f1':'Sprinter &amp; Van VIP','s5-f2':'Navettes invités','s5-f3':'Coordination logistique','s5-f4':'Devis sous 2h',
    's5-cta':'Demander un devis événement',
    's6-name':'Longue <em>distance</em>',
    's6-tag':'France &amp; pays limitrophes',
    's6-desc':'Vous avez besoin d\'un transfert au-delà de l\'Île-de-France ? Nous assurons des trajets <strong>longue distance</strong> vers toutes les grandes villes de France et les pays limitrophes : Belgique, Luxembourg, Pays-Bas, Allemagne. Confort optimal, véhicule récent, eau et chargeurs à disposition — même sur les longs trajets, le service reste irréprochable. Tarif fixe communiqué à l\'avance, sans mauvaise surprise au compteur.',
    's6-f1':'Toute la France','s6-f2':'Belgique, Luxembourg','s6-f3':'Tarif fixe longue distance','s6-f4':'Confort premium',
    's6-cta':'Demander un devis',
    'scta-title':'Un besoin spécifique ?',
    'scta-sub':'Notre équipe est disponible 24h/24 pour étudier votre demande et vous proposer la meilleure solution.',
    'scta-btn1':'Réserver en ligne','scta-btn2':'Nous contacter',

    /* ── TARIFS ── */
    'tp-label':'Tarifs &amp; Réservations',
    'tp-title':'Réservez en toute <em>transparence</em>',
    'tp-sub':'Prix fixe garanti, paiement sécurisé en ligne, annulation flexible. Tout est clair dès le départ, sans surprise à l\'arrivée.',
    'tb1-title':'Comment <em>réserver</em> ?',
    'tb2-title':'Accueil &amp; <em>ponctualité</em>',
    'tb3-title':'Nos <em>tarifs</em>',
    'tb4-title':'Paiement <em>sécurisé</em>',
    'tb5-title':'Modifier une <em>réservation</em>',
    'tb6-title':'Politique d\'<em>annulation</em>',
    'tb7-title':'Nos <em>engagements</em>',
    'tt1-label':'Plus de 24h avant la course',
    'tt1-desc':'Annulation 100 % gratuite. Remboursement intégral.',
    'tt2-label':'Entre 24h et 2h avant la course',
    'tt2-desc':'Frais d\'annulation de 50 % du montant de la course.',
    'tt3-label':'Moins de 2h avant ou no-show',
    'tt3-desc':'Course facturée intégralement (100 %). Aucun remboursement.',
    'te1':'Ponctualité garantie',
    'te2':'Véhicules propres et récents',
    'te3':'Chauffeurs professionnels carte VTC',
    'te4':'Assurance passagers complète',
    'te5':'Prix fixe garanti sans surprise',
    'te6':'Service client 24h/24, 7j/7',
    'tcta-title':'Prêt à réserver votre transfert ?',
    'tcta-sub':'Prix fixe, confirmation immédiate, chauffeur professionnel.',
    'tcta-btn1':'Réserver maintenant',
    'tcta-btn2':'Devis sur WhatsApp',

    /* ── CONTACT ── */
    'cp-label':'Contact',
    'cp-title':'Une question ? <em>Écrivez-nous</em>',
    'cp-sub':'Notre équipe est disponible 24h/24, 7j/7 pour répondre à toutes vos demandes.',
    'ctab1':'Particuliers','ctab2':'Entreprises',
    'cinfo1-label':'Téléphone','cinfo1-note':'Disponible 24h/24, 7j/7',
    'cinfo2-label':'WhatsApp','cinfo2-note':'Réponse rapide — devis VIP &amp; mise à disposition',
    'cinfo3-label':'Email','cinfo3-note':'Réponse sous 2 heures',
    'cinfo4-label':'Disponibilité','cinfo4-note':'Réservations, modifications, urgences',
    'cform-title':'Envoyez-nous un message',
    'cform-sub':'Nous vous répondons dans les meilleurs délais.',
    'cf-fname':'Prénom','cf-lname':'Nom',
    'cf-email':'Email','cf-phone':'Téléphone','cf-subject':'Sujet','cf-message':'Message',
    'cf-submit':'Envoyer le message',
    'cb2b-intro-title':'Votre compte <em style="font-style:italic;">entreprise</em>',
    'cb2b-intro-sub':'Simplifiez vos déplacements professionnels avec un compte dédié, une facturation centralisée et des tarifs négociés.',
    /* ── B2B HOMEPAGE SECTION ── */
    'b2b-label':'Entreprises','b2b-title':'Vous gérez des <em>déplacements pro</em>&nbsp;?',
    'b2b-sub':'Un compte entreprise ONTIME vous simplifie la vie : réservations centralisées, factures automatiques, tarifs adaptés à votre volume.',
    'b2b-p1-title':'Facturation centralisée','b2b-p1-desc':'Une facture mensuelle unique pour toutes vos courses. Notes de frais simplifiées, reçu détaillé après chaque trajet.',
    'b2b-p2-title':'Tarifs préférentiels','b2b-p2-desc':'Des prix négociés selon votre volume de courses mensuel. Plus vous réservez, plus vous économisez.',
    'b2b-p3-title':'Compte dédié & interlocuteur unique','b2b-p3-desc':'Un responsable de compte attitré. Vos équipes réservent en ligne ou par téléphone, confirmation immédiate.',
    'b2b-p4-title':'Réservation en ligne 24h/24','b2b-p4-desc':'Vos collaborateurs réservent directement depuis le site, à toute heure. Suivi en temps réel, annulation flexible.',
    'b2b-form-title':'Demande de compte entreprise','b2b-form-sub':'Réponse sous 24h — Devis personnalisé gratuit',
    'b2b-btn':'Demander un devis entreprise',
    'cb2bp1-title':'Facturation mensuelle','cb2bp1-desc':'Une seule facture récapitulative par mois. Accepté par votre service comptabilité.',
    'cb2bp2-title':'Contrat dédié','cb2bp2-desc':'Un interlocuteur unique, des chauffeurs habitués à vos exigences, disponibilité prioritaire.',
    'cb2bp3-title':'Tarifs préférentiels','cb2bp3-desc':'Réductions dès 10 courses/mois. Tarifs dégressifs selon votre volume mensuel.',
    'cb2bp4-title':'Reporting mensuel','cb2bp4-desc':'Historique des courses, dépenses et statistiques par collaborateur.',
    'cb2b-title':'Ouvrir un compte entreprise',
    'cb2b-sub':'Réponse sous 24h par notre équipe commerciale.',
    'cb2b-societe':'Société *','cb2b-siret':'SIRET',
    'cb2b-contact':'Nom du contact *','cb2b-email':'Email *','cb2b-tel':'Téléphone',
    'cb2b-volume':'Volume mensuel estimé',
    'cb2b-msg':'Message (optionnel)',
    'cb2b-submit':'Envoyer la demande',

    /* ── DEVENIR CHAUFFEUR ── */
    'drp-label':'Recrutement',
    'drp-title':'Devenez chauffeur <em>ONTIME</em>',
    'drp-sub':'Rejoignez un réseau professionnel en pleine croissance. Des courses régulières, une rémunération attractive et le respect de votre métier — bienvenue chez ONTIME Transfert.',
    'drs1':'Courses / mois','drs2':'Taux de satisfaction','drs3':'Dispatch disponible','drs4':'Paiement rapide',
    'drav-label':'Pourquoi nous rejoindre',
    'drav-title':'Les avantages <em>ONTIME</em>',
    'drav1-title':'Courses régulières',
    'drav1-desc':'Accédez à un flux constant de réservations sur Paris et toute l\'Île-de-France. Plus besoin de chercher vos clients.',
    'drav2-title':'Rémunération attractive',
    'drav2-desc':'Des tarifs justes, un paiement sous 7 jours et une transparence totale sur chaque course. Pas de mauvaises surprises.',
    'drav3-title':'Respect du chauffeur',
    'drav3-desc':'Chez ONTIME, le chauffeur est au centre. Support 24h/24, écoute, et une relation basée sur la confiance mutuelle.',
    'drav4-title':'Application dédiée',
    'drav4-desc':'Recevez vos courses, gérez votre planning et suivez vos revenus directement depuis votre téléphone.',
    'drav5-title':'Zone Paris &amp; Île-de-France',
    'drav5-desc':'Aéroports CDG, Orly, Beauvais, gares parisiennes, Disneyland, Versailles — les trajets les plus demandés de France.',
    'drav6-title':'Flexibilité totale',
    'drav6-desc':'Choisissez vos horaires et vos jours. Acceptez les courses qui vous conviennent. Vous restez maître de votre activité.',
    'drb1-title':'Comment <em>ça marche</em> ?',
    'drst1-title':'Candidatez','drst1-desc':'Remplissez le formulaire ci-dessous avec vos documents',
    'drst2-title':'Validation','drst2-desc':'Notre équipe vérifie votre dossier sous 48h',
    'drst3-title':'Activation','drst3-desc':'Votre compte est activé et vous recevez vos premières courses',
    'drb2-title':'Documents <em>requis</em>',
    'drb3-title':'Postulez <em>maintenant</em>',
    'drcta-title':'Des questions sur le recrutement ?',
    'drcta-sub':'Notre équipe est disponible pour répondre à toutes vos questions.',
    'drcta-btn':'Nous contacter sur WhatsApp',

    /* ── MENTIONS LÉGALES ── */
    'mlp-label':'Informations légales',
    'mlp-title':'Mentions légales &amp; <em>CGV</em>',
    'ml-toc':'Sommaire',
    'ml-toc1':'1. Mentions légales',
    'ml-toc2':'2. Conditions générales de vente',
    'ml-toc3':'3. Cookies &amp; données personnelles'
  }
};

/* ─── State ─── */
let currentLang = localStorage.getItem('lang') || 'fr';

/* ─── Core functions ─── */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const btn = document.getElementById('langBtn');
  const btnTxt = document.getElementById('langBtnText');
  if (btnTxt) btnTxt.textContent = lang === 'fr' ? 'EN' : 'FR';
  const sidebarBtnTxt = document.getElementById('sidebarLangBtnText');
  if (sidebarBtnTxt) sidebarBtnTxt.textContent = lang === 'fr' ? 'EN' : 'FR';
  if (btn) btn.classList.toggle('active-en', lang === 'en');
  const dict = i18n[lang] || {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (dict[k] !== undefined) el.innerHTML = dict[k];
  });
}

function toggleLang() {
  setLang(currentLang === 'fr' ? 'en' : 'fr');
}

/* ─── Gold bar fade on scroll ─── */
window.addEventListener('scroll', () => {
  const gl = document.getElementById('goldLine');
  if (gl) gl.style.opacity = window.scrollY > 80 ? '0' : '1';
}, { passive: true });

/* ─── Auto-apply on load ─── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
});
