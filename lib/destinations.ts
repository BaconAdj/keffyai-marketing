// ─── Affiliate Configuration ────────────────────────────────────────────────
const BOOKING_AID = '304142';
const TQ_PARTNER  = 'partner=travelpayouts.com';
const TQ_CAMPAIGN = 'tq_campaign=39da973521b140328051bc23f-697863&tq_click_id=39da973521b140328051bc23f-697863';

// ─── Affiliate URL Helpers ───────────────────────────────────────────────────
function bk(countryCode: string, hotelSlug: string): string {
  return `https://www.booking.com/hotel/${countryCode}/${hotelSlug}.html?aid=${BOOKING_AID}`;
}
function tq(productUrl: string): string {
  return `${productUrl}?${TQ_PARTNER}`;
}
function tqCity(cityUrl: string): string {
  return `${cityUrl}?${TQ_PARTNER}&${TQ_CAMPAIGN}`;
}
function tqGeneral(): string {
  return `https://www.tiqets.com/en/?${TQ_PARTNER}&${TQ_CAMPAIGN}`;
}

// ─── Known Tiqets URLs ───────────────────────────────────────────────────────
const TQ_CITIES = {
  munich:    'https://www.tiqets.com/en/munich-attractions-c31/',
  nyc:       'https://www.tiqets.com/en/new-york-attractions-c260932/',
  toronto:   'https://www.tiqets.com/en/toronto-attractions-c62492/',
  athens:    'https://www.tiqets.com/en/athens-attractions-c99239/',
  paris:     'https://www.tiqets.com/en/things-to-do-in-paris-c66746/',
  barcelona: 'https://www.tiqets.com/en/barcelona-attractions-c66342/',
};
const TQ_PRODUCTS = {
  neuschwanstein: 'https://www.tiqets.com/en/neuschwanstein-castle-tickets-l146895/',
  acropolis:      'https://www.tiqets.com/en/athens-acropolis-tickets-l146438/',
  sagradaFamilia: 'https://www.tiqets.com/en/sagrada-familia-tickets-l133161/',
  eiffelTower:    'https://www.tiqets.com/en/eiffel-tower-tickets-l144586/',
  parkGuell:      'https://www.tiqets.com/en/park-guell-tickets-l141902/',
  empireState:    'https://www.tiqets.com/en/empire-state-building-tickets-l145528/',
};

// ─── Types ───────────────────────────────────────────────────────────────────
export interface ItineraryDay {
  day: number;
  title: string;
  highlights: { name: string; note?: string }[];
}

export interface HotelSuggestion {
  name: string;
  description: string;
  tier: 'Luxury' | 'Boutique' | 'Value';
  bookingUrl: string;
}

export interface TourActivity {
  name: string;
  description: string;
  type: 'Tour' | 'Activity' | 'Day Trip' | 'Experience';
  bookingUrl: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  bestTime: string;
  /** Path relative to /public — e.g. /images/destinations/munich.jpeg */
  heroImage: string;
  heroGradient: string; // fallback if image fails to load
  cardGradient: string;
  emoji: string;
  itinerary: ItineraryDay[];
  /** Always exactly 3: Luxury → Boutique → Value */
  hotels: [HotelSuggestion, HotelSuggestion, HotelSuggestion];
  tours: TourActivity[];
}

// ─── Destination Data ─────────────────────────────────────────────────────────
export const destinations: Destination[] = [

  // ── MUNICH ──────────────────────────────────────────────────────────────
  {
    slug: 'munich',
    name: 'Munich',
    country: 'Germany',
    emoji: '🇩🇪',
    tagline: 'Royal palaces, alpine escapes, and the world\'s greatest beer halls.',
    description:
      'Munich is Germany\'s most liveable city — a rare blend of baroque grandeur, Bavarian warmth, and modern sophistication. Wander Gothic squares by day, raise a stein in a centuries-old beer hall by night, and wake up the next morning with the Alps on the horizon.',
    bestTime: 'May–Sep & Dec (Christmas markets)',
    heroImage: '/images/destinations/munich.jpeg',
    heroGradient: 'linear-gradient(135deg, #1a2a4a 0%, #2d4a7a 50%, #4a6a9a 100%)',
    cardGradient: 'linear-gradient(135deg, #1a2a4a, #2d4a7a)',
    itinerary: [
      {
        day: 1, title: 'Historic Old Town',
        highlights: [
          { name: 'Marienplatz & Glockenspiel', note: 'Watch the carillon at 11am & noon' },
          { name: 'Viktualienmarkt', note: 'Munich\'s beloved open-air food market' },
          { name: 'Hofbräuhaus Beer Hall', note: 'Dine in the world\'s most famous beer hall' },
        ],
      },
      {
        day: 2, title: 'Palaces & Beer Gardens',
        highlights: [
          { name: 'Nymphenburg Palace', note: 'Baroque summer residence of the Bavarian royals' },
          { name: 'English Garden & River Surfers', note: 'Watch surfers ride the Eisbach wave' },
          { name: 'Chinese Tower Biergarten', note: 'Beer under the trees in the heart of the park' },
        ],
      },
      {
        day: 3, title: 'Bavarian Alps Day Trip',
        highlights: [
          { name: 'Train to Füssen', note: '2-hour scenic rail journey through Bavaria' },
          { name: 'Neuschwanstein Castle', note: 'The fairy-tale castle that inspired Disney' },
          { name: 'Dinner near Hauptbahnhof', note: 'Schnitzel and weissbier to end the trip right' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Hotel Bayerischer Hof',
        description: 'Munich\'s grande dame since 1841 — five restaurants, a rooftop bar, a jazz club, and a spa right on Promenadeplatz.',
        tier: 'Luxury',
        bookingUrl: bk('de', 'bayerischerhof'),
      },
      {
        name: 'Louis Hotel',
        description: 'A stylish design hotel perched directly above Viktualienmarkt with a rooftop bar overlooking the market stalls below.',
        tier: 'Boutique',
        bookingUrl: bk('de', 'louis-hotel-munich'),
      },
      {
        name: 'Motel One München-Deutsches Museum',
        description: 'Sleek, well-designed, and central — Motel One delivers clean modern rooms at genuinely affordable prices. No frills, no complaints.',
        tier: 'Value',
        bookingUrl: bk('de', 'motel-one-munchen-deutsches-museum'),
      },
    ],
    tours: [
      { name: 'Munich Old Town Walking Tour', description: 'Discover the history behind Marienplatz, the Residenz, and hidden courtyards with a local expert guide.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.munich) },
      { name: 'Neuschwanstein Castle Day Trip', description: 'Guided full-day excursion to Bavaria\'s most iconic castle with skip-the-line entry and mountain views.', type: 'Day Trip', bookingUrl: tq(TQ_PRODUCTS.neuschwanstein) },
      { name: 'Munich Beer & Brewery Tour', description: 'Sample world-class Bavarian lagers, weizens, and dunkel beers across historic Munich beer halls and breweries.', type: 'Experience', bookingUrl: tqCity(TQ_CITIES.munich) },
      { name: 'Dachau Memorial Guided Tour', description: 'A thoughtful, guided visit to the first Nazi concentration camp — an essential part of understanding modern history.', type: 'Day Trip', bookingUrl: tqCity(TQ_CITIES.munich) },
    ],
  },

  // ── NEW YORK CITY ────────────────────────────────────────────────────────
  {
    slug: 'new-york-city',
    name: 'New York City',
    country: 'USA',
    emoji: '🇺🇸',
    tagline: 'Three days in the city that never runs out of things to do.',
    description:
      'New York City doesn\'t need an introduction — but it does reward planning. In three days you can walk the Brooklyn Bridge at sunrise, stand 70 floors above Midtown, and lose yourself in the West Village as the city hums around you.',
    bestTime: 'Apr–Jun & Sep–Nov',
    heroImage: '/images/destinations/new-york-city.jpeg',
    heroGradient: 'linear-gradient(135deg, #0a1628 0%, #1a2d50 50%, #0d3b6e 100%)',
    cardGradient: 'linear-gradient(135deg, #0a1628, #1a2d50)',
    itinerary: [
      {
        day: 1, title: 'Lower Manhattan → Brooklyn',
        highlights: [
          { name: 'Walk the Brooklyn Bridge', note: 'Manhattan to Brooklyn — best in the morning' },
          { name: 'Explore DUMBO', note: 'Cobblestones, galleries, and the iconic bridge-frame shot' },
          { name: 'Sunset at Brooklyn Heights Promenade', note: 'The finest skyline view in the city' },
        ],
      },
      {
        day: 2, title: 'Midtown Manhattan',
        highlights: [
          { name: 'Grand Central Terminal', note: 'Look up — it\'s one of America\'s great interiors' },
          { name: 'Top of the Rock', note: 'Rockefeller Center observation deck at dusk' },
          { name: 'Times Square at Night', note: 'Overwhelming in the best possible way' },
        ],
      },
      {
        day: 3, title: 'Central Park → Upper East Side → West Village',
        highlights: [
          { name: 'Walk Central Park', note: 'Enter at 72nd Street, head toward Bethesda Fountain' },
          { name: 'The Metropolitan Museum of Art', note: 'Allow at least 2 hours — pick two or three wings' },
          { name: 'Explore the West Village', note: 'Dinner and a stroll through NYC\'s most charming neighbourhood' },
        ],
      },
    ],
    hotels: [
      {
        name: 'The Plaza Hotel',
        description: 'The icon at Fifth Avenue and Central Park — Gilded Age glamour, butler service, and the Oak Room bar downstairs.',
        tier: 'Luxury',
        bookingUrl: bk('us', 'the-plaza-new-york'),
      },
      {
        name: 'The Bowery Hotel',
        description: 'A beloved Bowery Street institution with a fireside lobby, exposed brick, and a neighbourhood restaurant that New Yorkers actually go to.',
        tier: 'Boutique',
        bookingUrl: bk('us', 'the-bowery'),
      },
      {
        name: 'Pod 51',
        description: 'Smart, compact rooms in Midtown East — well-designed, spotlessly clean, and priced for travellers who want to spend their money on the city, not the room.',
        tier: 'Value',
        bookingUrl: bk('us', 'pod-51-hotel'),
      },
    ],
    tours: [
      { name: 'Empire State Building Observatory', description: 'Skip-the-line access to the 86th floor observation deck — the classic NYC view, especially at dusk.', type: 'Experience', bookingUrl: tq(TQ_PRODUCTS.empireState) },
      { name: 'Statue of Liberty & Ellis Island Cruise', description: 'Narrated sightseeing cruise past the Statue of Liberty and Ellis Island with stunning Lower Manhattan skyline views.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.nyc) },
      { name: 'NYC Food Tour: West Village & Chelsea', description: 'A guided walking tour through NYC\'s most storied food neighbourhoods with tastings at local institutions.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.nyc) },
      { name: 'Broadway Show', description: 'Premium seats to one of Broadway\'s top-running shows — the quintessential New York evening.', type: 'Experience', bookingUrl: tqCity(TQ_CITIES.nyc) },
    ],
  },

  // ── TORONTO ──────────────────────────────────────────────────────────────
  {
    slug: 'toronto',
    name: 'Toronto',
    country: 'Canada',
    emoji: '🇨🇦',
    tagline: 'A waterfront city of neighbourhoods — and a day trip to one of the world\'s wonders.',
    description:
      'Toronto rewards the traveller who ventures beyond the obvious. The CN Tower is remarkable, but the real city lives in the cobblestone lanes of the Distillery District and the chaotic abundance of St. Lawrence Market. Cap it with Niagara Falls and you\'ve done one of North America\'s most underrated city breaks.',
    bestTime: 'Jun–Sep',
    heroImage: '/images/destinations/toronto.jpeg',
    heroGradient: 'linear-gradient(135deg, #8b1a1a 0%, #c0392b 50%, #922b21 100%)',
    cardGradient: 'linear-gradient(135deg, #8b1a1a, #c0392b)',
    itinerary: [
      {
        day: 1, title: 'Harbourfront & CN Tower',
        highlights: [
          { name: 'Harbourfront Walk', note: 'Start your morning along Lake Ontario' },
          { name: 'CN Tower & Roundhouse Park', note: 'Glass floor, EdgeWalk, and 360-degree views' },
          { name: 'King West Dining & Bars', note: 'Toronto\'s most vibrant dining strip for the evening' },
        ],
      },
      {
        day: 2, title: 'Distillery & Old Toronto',
        highlights: [
          { name: 'Distillery District', note: 'Victorian industrial architecture turned arts destination' },
          { name: 'St. Lawrence Market', note: 'One of the world\'s great food markets — arrive before noon' },
          { name: 'Flatiron Building & Old Town', note: 'Toronto\'s historic heart and photo-worthy streets' },
        ],
      },
      {
        day: 3, title: 'Niagara Falls Day Trip',
        highlights: [
          { name: 'Niagara Falls Views', note: 'Horseshoe Falls from the Canadian side is unmissable' },
          { name: 'Falls Promenade Walk', note: 'Get close enough to feel the mist' },
          { name: 'Niagara-on-the-Lake', note: 'A charming 19th-century town with wineries and great lunch' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Four Seasons Hotel Toronto',
        description: 'Midtown luxury in the heart of Yorkville — exceptional service, a destination spa, and the acclaimed Café Boulud on the ground floor.',
        tier: 'Luxury',
        bookingUrl: bk('ca', 'four-seasons-toronto'),
      },
      {
        name: 'Hotel Le Germain Mercer',
        description: 'A chic locally-owned boutique hotel in the Entertainment District — thoughtfully designed, beautifully quiet, and perfectly located for everything.',
        tier: 'Boutique',
        bookingUrl: bk('ca', 'le-germain-mercer'),
      },
      {
        name: 'Bond Place Hotel',
        description: 'Clean, well-maintained rooms right in the heart of downtown Toronto — excellent value for the location, walking distance to almost everything on the itinerary.',
        tier: 'Value',
        bookingUrl: bk('ca', 'bond-place'),
      },
    ],
    tours: [
      { name: 'Niagara Falls Full-Day Tour', description: 'Guided day trip including Maid of the Mist, Journey Behind the Falls, and a Niagara-on-the-Lake wine stop.', type: 'Day Trip', bookingUrl: tqCity(TQ_CITIES.toronto) },
      { name: 'CN Tower Experience', description: 'Skip-the-queue access to the CN Tower\'s glass floor and EdgeWalk — 356 metres above the city.', type: 'Activity', bookingUrl: tqCity(TQ_CITIES.toronto) },
      { name: 'Toronto Food Tour: Kensington & Chinatown', description: 'Taste your way through Toronto\'s most eclectic neighbourhoods with a passionate local food guide.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.toronto) },
      { name: 'Toronto Islands Kayak Tour', description: 'Paddle around the Toronto Islands with the city skyline as your backdrop — a surprisingly peaceful escape from downtown.', type: 'Activity', bookingUrl: tqCity(TQ_CITIES.toronto) },
    ],
  },

  // ── VARADERO ─────────────────────────────────────────────────────────────
  {
    slug: 'varadero',
    name: 'Varadero',
    country: 'Cuba',
    emoji: '🇨🇺',
    tagline: 'Turquoise waters, classic cars, and a day trip to Havana\'s living history.',
    description:
      'Varadero sits on a 20-kilometre peninsula where the Atlantic delivers some of the Caribbean\'s most spectacular beach water. But Cuba is more than a beach destination — the island\'s singular culture and history are an hour away in Havana, and the cenotes and coastal reserves make every day an adventure.',
    bestTime: 'Nov–Apr (dry season)',
    heroImage: '/images/destinations/varadero.jpeg',
    heroGradient: 'linear-gradient(135deg, #0d4f6b 0%, #0e8a6a 50%, #1aa87e 100%)',
    cardGradient: 'linear-gradient(135deg, #0d4f6b, #0e8a6a)',
    itinerary: [
      {
        day: 1, title: 'Classic Varadero Beach Day',
        highlights: [
          { name: 'Varadero Beach', note: 'One of the Caribbean\'s finest stretches of white sand' },
          { name: 'Walk along 1ra Avenida', note: 'The main strip — paladares, music, and local life' },
          { name: 'Sunset by the water', note: 'Find a quiet stretch east of town for the golden hour' },
        ],
      },
      {
        day: 2, title: 'Nature & Coastal Views',
        highlights: [
          { name: 'Swim in Cueva de Saturno', note: 'A remarkable underground cenote cave pool' },
          { name: 'Varahicacos Ecological Reserve', note: 'Ancient cacti, endemic birds, and coastal cliffs' },
          { name: 'Snorkeling or Catamaran Tour', note: 'The reef offshore is still vibrant and accessible' },
        ],
      },
      {
        day: 3, title: 'Havana Day Trip',
        highlights: [
          { name: 'Day Trip to Havana', note: '1.5 hours by bus or taxi — entirely worth it' },
          { name: 'Plaza Vieja & the Malecón', note: 'The sea wall at sunset is an unmissable moment' },
          { name: 'Evening at Marina Gaviota', note: 'Seafood, cocktails, and live music back in Varadero' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Paradisus Varadero',
        description: 'One of Cuba\'s finest resort hotels — lush gardens, butler service, and beachfront rooms with a level of sophistication rare for all-inclusives.',
        tier: 'Luxury',
        bookingUrl: bk('cu', 'paradisus-varadero'),
      },
      {
        name: 'Meliá Varadero',
        description: 'A pyramid-shaped landmark resort with direct beach access and multiple pools — well-run, stylish, and a step above the typical Cuban all-inclusive.',
        tier: 'Boutique',
        bookingUrl: bk('cu', 'melia-varadero'),
      },
      {
        name: 'Barceló Arenas Blancas',
        description: 'A solid adults-only all-inclusive directly on one of Varadero\'s best beach stretches — reliable, clean, and genuinely good value for Cuba.',
        tier: 'Value',
        bookingUrl: bk('cu', 'barcelo-arenas-blancas'),
      },
    ],
    tours: [
      { name: 'Havana Full-Day Tour', description: 'Guided day trip in a classic American convertible — old Havana, the Malecón, a mojito in a courtyard bar.', type: 'Day Trip', bookingUrl: tqGeneral() },
      { name: 'Catamaran Snorkeling & Beach Trip', description: 'Sail offshore to pristine reef, snorkel with tropical fish, and enjoy an open bar aboard a catamaran.', type: 'Activity', bookingUrl: tqGeneral() },
      { name: 'Cuban Salsa & Culture Experience', description: 'A private salsa lesson followed by dinner at a paladar with live traditional Cuban music.', type: 'Experience', bookingUrl: tqGeneral() },
    ],
  },

  // ── ATHENS ───────────────────────────────────────────────────────────────
  {
    slug: 'athens',
    name: 'Athens',
    country: 'Greece',
    emoji: '🇬🇷',
    tagline: '3,000 years of history, rooftop cocktails, and a sunset at the edge of the world.',
    description:
      'Athens is one of the few cities where you can stand in the shadow of a structure older than written history, then walk five minutes to a rooftop bar. The Acropolis at first light, the Agora in the afternoon, and Cape Sounion at sunset — three days done right.',
    bestTime: 'Apr–Jun & Sep–Oct',
    heroImage: '/images/destinations/athens.jpeg',
    heroGradient: 'linear-gradient(135deg, #2c3e7a 0%, #1a5276 50%, #d4a017 100%)',
    cardGradient: 'linear-gradient(135deg, #1a3a6b, #1a5276)',
    itinerary: [
      {
        day: 1, title: 'The Acropolis & Rooftop Views',
        highlights: [
          { name: 'Explore the Acropolis', note: 'Arrive at 8am to beat the crowds and the heat' },
          { name: 'Acropolis Museum', note: 'World-class presentation of the Parthenon marbles' },
          { name: 'Rooftop drinks in Monastiraki', note: 'Several bars with direct Acropolis views at sunset' },
        ],
      },
      {
        day: 2, title: 'Marathon & Cape Sounion',
        highlights: [
          { name: 'Visit Marathon', note: 'Walk the ancient battlefield and the original marathon route' },
          { name: 'Athenian Riviera Drive', note: 'A stunning coastal road south of Athens' },
          { name: 'Sunset at the Temple of Poseidon', note: 'Cape Sounion — one of the great Mediterranean sunsets' },
        ],
      },
      {
        day: 3, title: 'Classical & Contemporary Athens',
        highlights: [
          { name: 'Ancient Agora', note: 'The political heart of classical Athens, wonderfully preserved' },
          { name: 'Panathenaic Stadium', note: 'The original Olympic stadium, built entirely of marble' },
          { name: 'Dinner in Koukaki or Psiri', note: 'Athens\'s most vibrant dining districts for the final evening' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Hotel Grande Bretagne',
        description: 'Athens\'s grandest hotel since 1874 — overlooking Syntagma Square with a rooftop pool offering one of the finest Acropolis views in the city.',
        tier: 'Luxury',
        bookingUrl: bk('gr', 'grande-bretagne'),
      },
      {
        name: 'NEW Hotel',
        description: 'A design-forward boutique hotel in the heart of Athens, conceived by Brazilian designers the Campana Brothers — genuinely memorable and singular.',
        tier: 'Boutique',
        bookingUrl: bk('gr', 'new-hotel-athens'),
      },
      {
        name: 'Athens Gate Hotel',
        description: 'A clean, well-run hotel steps from the Temple of Olympian Zeus with Acropolis views from the rooftop café — excellent value in a superb location.',
        tier: 'Value',
        bookingUrl: bk('gr', 'athens-gate'),
      },
    ],
    tours: [
      { name: 'Acropolis Skip-the-Line Entry', description: 'Reserved-time entry to the Acropolis complex — the Parthenon, Erechtheion, and Temple of Athena Nike.', type: 'Tour', bookingUrl: tq(TQ_PRODUCTS.acropolis) },
      { name: 'Acropolis & Ancient Athens Guided Tour', description: 'Expert-led tour of the Acropolis, Parthenon, and Acropolis Museum with skip-the-line access.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.athens) },
      { name: 'Cape Sounion Sunset Tour', description: 'Afternoon drive along the Athenian Riviera to the Temple of Poseidon for an unforgettable sunset.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.athens) },
      { name: 'Greek Islands Day Trip (Hydra or Aegina)', description: 'A day cruise to the Saronic Islands — colourful harbours, quiet beaches, and excellent fresh seafood.', type: 'Day Trip', bookingUrl: tqCity(TQ_CITIES.athens) },
    ],
  },

  // ── PARIS ─────────────────────────────────────────────────────────────────
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    emoji: '🇫🇷',
    tagline: 'Three days in the most beautiful city on earth.',
    description:
      'Paris earns every superlative. Nowhere else does art, food, architecture, and romance converge so completely in such a walkable space. Three days is enough to fall in love — with the Eiffel Tower sparkling at midnight, impossibly good bread from a side-street boulangerie, and the light on the Seine in the late afternoon.',
    bestTime: 'Apr–Jun & Sep–Oct',
    heroImage: '/images/destinations/paris.jpeg',
    heroGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    cardGradient: 'linear-gradient(135deg, #1a1a2e, #0f3460)',
    itinerary: [
      {
        day: 1, title: 'Eiffel Tower & the Right Bank',
        highlights: [
          { name: 'Eiffel Tower & Trocadéro', note: 'Go at dusk — book summit tickets in advance' },
          { name: 'Champs-Élysées', note: 'Walk the grand avenue from the Arc to the river' },
          { name: 'Arc de Triomphe', note: 'Climb to the top for the best view of Haussmann\'s Paris' },
        ],
      },
      {
        day: 2, title: 'Historic Paris & The Seine',
        highlights: [
          { name: 'Notre-Dame & Sainte-Chapelle', note: 'The Sainte-Chapelle\'s stained glass is worth every minute of the queue' },
          { name: 'Le Marais', note: 'Historic Jewish quarter, galleries, and falafel on Rue des Rosiers' },
          { name: 'Seine River Walk', note: 'Stroll the quais at golden hour as the bouquinistes close' },
        ],
      },
      {
        day: 3, title: 'Left Bank & Saint-Germain',
        highlights: [
          { name: 'Luxembourg Gardens', note: 'Paris at its most serene — especially on a weekday morning' },
          { name: 'Saint-Germain-des-Prés', note: 'The intellectual soul of Paris — galleries, bistros, bookshops' },
          { name: 'Les Deux Magots', note: 'A final café crème where Sartre, de Beauvoir, and Hemingway once sat' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Hôtel de Crillon',
        description: 'A former royal palace on Place de la Concorde — transformed into Paris\'s most spectacular hotel after a landmark 4-year restoration. Truly unforgettable.',
        tier: 'Luxury',
        bookingUrl: bk('fr', 'de-crillon'),
      },
      {
        name: 'Hôtel du Temps',
        description: 'A beautiful art deco boutique hotel in the 9th arrondissement — elegant, personal, beautifully decorated, and at a price point that makes it feel like a discovery.',
        tier: 'Boutique',
        bookingUrl: bk('fr', 'hotel-du-temps-paris'),
      },
      {
        name: 'Hôtel Beaumarchais',
        description: 'A colourful, quirky, and genuinely charming budget hotel in the Marais — clean rooms, a friendly team, and an unbeatable location for first-time visitors to Paris.',
        tier: 'Value',
        bookingUrl: bk('fr', 'beaumarchais'),
      },
    ],
    tours: [
      { name: 'Eiffel Tower Skip-the-Line Tickets', description: 'Reserved-time access to the Eiffel Tower — choose the 2nd floor or go all the way to the summit.', type: 'Experience', bookingUrl: tq(TQ_PRODUCTS.eiffelTower) },
      { name: 'Palace of Versailles Full-Day Tour', description: 'Guided visit to the Palace of Versailles, Hall of Mirrors, Royal Apartments, and the Grand Trianon gardens.', type: 'Day Trip', bookingUrl: tqCity(TQ_CITIES.paris) },
      { name: 'Paris Food & Wine Walking Tour', description: 'A morning of tastings through the best markets, fromageries, and boulangeries in the Marais and Saint-Germain.', type: 'Tour', bookingUrl: tqCity(TQ_CITIES.paris) },
      { name: 'Evening Seine River Cruise', description: 'Glide past illuminated Notre-Dame, the Louvre, and the Eiffel Tower on a candlelit dinner cruise.', type: 'Experience', bookingUrl: tqCity(TQ_CITIES.paris) },
    ],
  },

  // ── MONTRÉAL ─────────────────────────────────────────────────────────────
  {
    slug: 'montreal',
    name: 'Montréal',
    country: 'Canada',
    emoji: '🇨🇦',
    tagline: 'A French city in North America — cobblestones, world-class food, and Mount Royal.',
    description:
      'Montréal is one of the world\'s great cultural secrets: a city where French language and joie de vivre meet North American energy. Walk Old Montréal\'s cobblestone streets, climb Mount Royal, and end the day with smoked meat at Schwartz\'s — a rite of passage for any visitor.',
    bestTime: 'Jun–Sep & Dec (festive season)',
    heroImage: '/images/destinations/montreal.jpeg',
    heroGradient: 'linear-gradient(135deg, #5c1a1a 0%, #7b2d2d 50%, #9b4444 100%)',
    cardGradient: 'linear-gradient(135deg, #5c1a1a, #7b2d2d)',
    itinerary: [
      {
        day: 1, title: 'Old Montréal',
        highlights: [
          { name: 'Old Montréal cobblestone streets', note: 'The finest preserved French colonial district in North America' },
          { name: 'Notre-Dame Basilica', note: 'Book the AURA light show for an unforgettable evening' },
          { name: 'Old Port waterfront', note: 'Walk the quays along the St. Lawrence at golden hour' },
        ],
      },
      {
        day: 2, title: 'Plateau, Mile End & Mount Royal',
        highlights: [
          { name: 'Walk up Mount Royal', note: 'The best panorama of Montréal — especially at sunrise' },
          { name: 'Explore colorful Plateau streets', note: 'Street art, terrasse cafés, and the Montréal vibe at its purest' },
          { name: 'Bagels at St-Viateur', note: 'Wood-fired — smaller, sweeter than New York, and better' },
        ],
      },
      {
        day: 3, title: 'Westmount to Downtown',
        highlights: [
          { name: 'St. Joseph\'s Oratory', note: 'One of North America\'s most striking religious monuments' },
          { name: 'Smoked meat at Schwartz\'s', note: 'The pilgrimage sandwich. Arrive before the lunch rush' },
          { name: 'Walk through McGill & Downtown', note: 'End at Place des Arts for a cocktail and the city at your feet' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Le Mount Stephen',
        description: 'A Gilded Age baronial mansion transformed into Montréal\'s most storied luxury hotel — the kind of grandeur that belongs to another era but feels entirely current.',
        tier: 'Luxury',
        bookingUrl: bk('ca', 'le-mount-stephen'),
      },
      {
        name: 'Hotel Nelligan',
        description: 'A beloved Old Montréal institution in beautifully restored 19th-century buildings — intimate, charming, with a celebrated rooftop terrace and exceptional service.',
        tier: 'Boutique',
        bookingUrl: bk('ca', 'nelligan'),
      },
      {
        name: 'ALT Hotel Montreal',
        description: 'A modern, thoughtfully designed hotel in Griffintown with clean rooms, smart amenities, and one of the best price-to-quality ratios in the city.',
        tier: 'Value',
        bookingUrl: bk('ca', 'alt-hotel-montreal-griffintown'),
      },
    ],
    tours: [
      { name: 'Old Montréal Walking Tour', description: 'Discover the history behind every cobblestone — from New France to the Rebellion — with a passionate local guide.', type: 'Tour', bookingUrl: tqGeneral() },
      { name: 'Montréal Food Tour: The Plateau', description: 'Bagels, poutine, smoked meat, and Quebec cheese — a guided afternoon through the city\'s best food stops.', type: 'Tour', bookingUrl: tqGeneral() },
      { name: 'Notre-Dame Basilica AURA Light Show', description: 'An immersive after-hours light and sound experience inside one of North America\'s most spectacular interiors.', type: 'Experience', bookingUrl: tqGeneral() },
    ],
  },

  // ── HONOLULU ─────────────────────────────────────────────────────────────
  {
    slug: 'honolulu',
    name: 'Honolulu',
    country: 'USA',
    emoji: '🇺🇸',
    tagline: 'Waikiki\'s iconic shore, the hike above it all, and Hawaii\'s richest history.',
    description:
      'Honolulu is the sophisticated heart of Hawaii — where volcanic peaks meet reef-protected water and Pacific history runs deep. Diamond Head rewards the early riser, Hanauma Bay offers the best snorkeling in the US, and Kailua on the windward coast is the island at its most naturally spectacular.',
    bestTime: 'Apr–Jun & Sep–Nov (fewer crowds)',
    heroImage: '/images/destinations/honolulu.jpeg',
    heroGradient: 'linear-gradient(135deg, #0d4a3a 0%, #1a7a5e 50%, #e67e22 100%)',
    cardGradient: 'linear-gradient(135deg, #0d4a3a, #1a7a5e)',
    itinerary: [
      {
        day: 1, title: 'Waikiki Icons',
        highlights: [
          { name: 'Waikiki Beach', note: 'Arrive early for a morning swim before the beach fills up' },
          { name: 'Diamond Head Hike', note: 'Book timed entry — the 360° summit view is extraordinary' },
          { name: 'Sunset on Waikiki', note: 'Find a beachside table at Duke\'s for the classic Hawaiian evening' },
        ],
      },
      {
        day: 2, title: 'History & Local Flavor',
        highlights: [
          { name: 'Iolani Palace', note: 'The only royal palace on US soil — a moving and important visit' },
          { name: 'Kakaʻako Street Art', note: 'Honolulu\'s vibrant outdoor mural district along Ward Avenue' },
          { name: 'Alicia\'s Market Poke', note: 'The best poke bowl in Honolulu — order the spicy ahi' },
        ],
      },
      {
        day: 3, title: 'East Coast Adventure',
        highlights: [
          { name: 'Hanauma Bay', note: 'Reserve your snorkel spot online — this bay must be experienced' },
          { name: 'Makapu\'u Lighthouse Trail', note: 'Breathtaking clifftop walk with whale sightings in season' },
          { name: 'Kailua Beach', note: 'Consistently rated Hawaii\'s most beautiful beach — worth the drive' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Halekulani',
        description: 'Honolulu\'s most gracious hotel — understated Waikiki luxury with a famous orchid-mosaic pool and the world-class La Mer restaurant.',
        tier: 'Luxury',
        bookingUrl: bk('us', 'halekulani'),
      },
      {
        name: 'The Surfjack Hotel',
        description: 'A mid-century boutique hotel with a lively pool scene, vintage Hawaii décor, and the kind of genuine local feel that the big resorts can\'t manufacture.',
        tier: 'Boutique',
        bookingUrl: bk('us', 'surfjack'),
      },
      {
        name: 'Queen Kapiolani Hotel',
        description: 'A renovated Waikiki classic steps from the beach with a rooftop pool overlooking Diamond Head — honest value in a city where hotels are rarely cheap.',
        tier: 'Value',
        bookingUrl: bk('us', 'queen-kapiolani'),
      },
    ],
    tours: [
      { name: 'Pearl Harbor & USS Arizona Memorial', description: 'The definitive Pearl Harbor experience — USS Arizona Memorial, Battleship Missouri, and the Aviation Museum.', type: 'Tour', bookingUrl: tqGeneral() },
      { name: 'Hanauma Bay Snorkeling Tour', description: 'Guided morning snorkel in one of Hawaii\'s premier marine preserves, with equipment and an educational briefing included.', type: 'Activity', bookingUrl: tqGeneral() },
      { name: 'Circle Island Day Tour', description: 'Full-day drive around Oahu — North Shore surf breaks, the Dole Plantation, and the lush windward coast.', type: 'Day Trip', bookingUrl: tqGeneral() },
      { name: 'Traditional Hawaiian Luau', description: 'An evening of authentic hula, fire dancing, and a kalua pig feast at one of Oahu\'s most celebrated luaus.', type: 'Experience', bookingUrl: tqGeneral() },
    ],
  },

  // ── QUITO ─────────────────────────────────────────────────────────────────
  {
    slug: 'quito',
    name: 'Quito',
    country: 'Ecuador',
    emoji: '🇪🇨',
    tagline: 'The world\'s best-preserved colonial capital, at 2,850 metres above the sea.',
    description:
      'Quito\'s UNESCO-listed historic centre is the finest in Latin America — a labyrinth of gilded churches, baroque plazas, and cobblestone streets across volcanic hillsides. Take the cable car to the rim of an active volcano, stand on the equator, and peer into the Pululahua crater.',
    bestTime: 'Jun–Aug & Dec–Jan (dry season)',
    heroImage: '/images/destinations/quito.jpeg',
    heroGradient: 'linear-gradient(135deg, #1a4a2a 0%, #2d7a4a 50%, #c49a20 100%)',
    cardGradient: 'linear-gradient(135deg, #1a3a2a, #2d5a3a)',
    itinerary: [
      {
        day: 1, title: 'Centro Histórico',
        highlights: [
          { name: 'Plaza Grande & Surroundings', note: 'The Presidential Palace, cathedral, and the city\'s beating heart' },
          { name: 'Iglesia de la Compañía de Jesús', note: 'Seven tonnes of gold leaf — the most ornate church in the Americas' },
          { name: 'Empanadas at Hasta La Vuelta Señor & La Ronda', note: 'The most atmospheric street in colonial Quito at night' },
        ],
      },
      {
        day: 2, title: 'TeleféríQo & Modern Quito',
        highlights: [
          { name: 'TeleféríQo to Pichincha', note: 'Cable car to 4,000m — volcano views in every direction' },
          { name: 'Explore La Floresta', note: 'Quito\'s bohemian arts district with murals and excellent restaurants' },
          { name: 'Dinner around Parque de Cumbayá', note: 'The valley suburb with Quito\'s best contemporary dining' },
        ],
      },
      {
        day: 3, title: 'Equator & Craters',
        highlights: [
          { name: 'Mitad del Mundo', note: 'Stand on the equatorial line — the real one, not just the monument' },
          { name: 'Pululahua Crater View', note: 'An inhabited volcanic caldera visible from the equatorial rim' },
          { name: 'Relaxed Lunch in Nature', note: 'Locro de papa and fresh ceviche at a countryside hacienda' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Casa Gangotena',
        description: 'A magnificent 1920s mansion on Plaza San Francisco, restored to flawless boutique luxury — without question the finest address in colonial Quito.',
        tier: 'Luxury',
        bookingUrl: bk('ec', 'casa-gangotena'),
      },
      {
        name: 'Illa Experience Hotel',
        description: 'A converted colonial mansion in the historic centre with just 14 rooms, a lovely rooftop terrace, and the kind of personalised service a small hotel does best.',
        tier: 'Boutique',
        bookingUrl: bk('ec', 'illa-experience'),
      },
      {
        name: 'Mercure Hotel Alameda Quito',
        description: 'A reliable, clean, and well-located international hotel in the modern Mariscal district — consistent quality at a price that leaves plenty for exploring.',
        tier: 'Value',
        bookingUrl: bk('ec', 'mercure-hotel-alameda-quito'),
      },
    ],
    tours: [
      { name: 'Quito Old Town Walking Tour', description: 'An expert-led exploration of the finest colonial centre in the Americas — churches, plazas, and the stories behind them.', type: 'Tour', bookingUrl: tqGeneral() },
      { name: 'Mitad del Mundo & Volcano Tour', description: 'Half-day excursion to the equatorial monument, Intiñan Solar Museum, and the dramatic Pululahua volcanic crater.', type: 'Day Trip', bookingUrl: tqGeneral() },
      { name: 'Cotopaxi National Park Day Trip', description: 'Journey to the base of the world\'s highest active volcano for hiking, mountain biking, and Andean landscapes.', type: 'Day Trip', bookingUrl: tqGeneral() },
      { name: 'Quito Food & Market Tour', description: 'Taste ceviche, llapingachos, empanadas, and freshly squeezed naranjilla through Quito\'s best local markets.', type: 'Tour', bookingUrl: tqGeneral() },
    ],
  },

  // ── BARCELONA ─────────────────────────────────────────────────────────────
  {
    slug: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    emoji: '🇪🇸',
    tagline: 'Gaudí\'s city: Gothic streets, beach-facing mountains, and legendary paella.',
    description:
      'Barcelona excels at everything simultaneously — Gothic architecture that predates Columbus, modernist buildings that look like they arrived from another planet, a coastline that belongs in the Caribbean, and a food culture that produces Europe\'s most innovative restaurants. Three days here requires discipline.',
    bestTime: 'May–Jun & Sep–Oct',
    heroImage: '/images/destinations/barcelona.jpeg',
    heroGradient: 'linear-gradient(135deg, #c0392b 0%, #e67e22 50%, #1a3a6b 100%)',
    cardGradient: 'linear-gradient(135deg, #8b1a1a, #c0392b)',
    itinerary: [
      {
        day: 1, title: 'Gothic Quarter & El Born',
        highlights: [
          { name: 'Wander the Barri Gòtic', note: 'Get lost in the medieval lanes south of La Rambla' },
          { name: 'Barcelona Cathedral & El Born', note: 'Cathedral rooftop terrace is free on Sunday mornings' },
          { name: 'Sunset at Port Vell marina', note: 'Seafood and a glass of cava watching the boats come in' },
        ],
      },
      {
        day: 2, title: 'Gaudí & Gràcia',
        highlights: [
          { name: 'Visit Sagrada Família', note: 'Book tower access — the nave at midday with stained glass is transcendent' },
          { name: 'Explore Park Güell', note: 'Book timed entry to the monumental zone; arrive early for the views' },
          { name: 'Stroll the plazas of Gràcia', note: 'The village-within-a-city — aperitivos on a shaded terrace at dusk' },
        ],
      },
      {
        day: 3, title: 'Coastline & Montjuïc',
        highlights: [
          { name: 'Barceloneta Beach', note: 'A morning swim before the crowds arrive at 11am' },
          { name: 'Montjuïc & Montjuïc Castle', note: 'Take the cable car up for panoramic views over city and sea' },
          { name: 'Dinner at Botafumeiro', note: 'Barcelona\'s legendary Galician seafood — the lobster and pulpo are non-negotiable' },
        ],
      },
    ],
    hotels: [
      {
        name: 'Hotel Arts Barcelona',
        description: 'A 44-floor tower at the edge of the sea with the finest pool terrace in the city, Ritz-Carlton service, and sweeping Mediterranean views from every room.',
        tier: 'Luxury',
        bookingUrl: bk('es', 'arts-barcelona'),
      },
      {
        name: 'Casa Bonay',
        description: 'A design-led Eixample boutique hotel with an excellent rooftop bar, a celebrated restaurant, and a genuine local sensibility that the big hotels never quite achieve.',
        tier: 'Boutique',
        bookingUrl: bk('es', 'casa-bonay'),
      },
      {
        name: 'Hotel Praktik Rambla',
        description: 'A bright, clean, well-designed hotel directly on Rambla de Catalunya — arguably the best location-to-price ratio in the city for travellers who want to walk everywhere.',
        tier: 'Value',
        bookingUrl: bk('es', 'praktik-rambla'),
      },
    ],
    tours: [
      { name: 'Sagrada Família Fast-Track Entry', description: 'Skip-the-line tickets to Gaudí\'s unfinished masterpiece — with optional tower access for sweeping city views.', type: 'Tour', bookingUrl: tq(TQ_PRODUCTS.sagradaFamilia) },
      { name: 'Park Güell Monumental Zone Entry', description: 'Timed entry to Gaudí\'s mosaic hillside park — the Dragon Stairway, Hypostyle Room, and Barcelona panorama.', type: 'Activity', bookingUrl: tq(TQ_PRODUCTS.parkGuell) },
      { name: 'Barcelona Food & Tapas Night Tour', description: 'An evening of pintxos, vermouth, and local wines through the bars of El Born and the Gothic Quarter.', type: 'Experience', bookingUrl: tqCity(TQ_CITIES.barcelona) },
      { name: 'Montserrat Mountain Day Trip', description: 'A half-day to the dramatic mountain monastery above Barcelona — rack railway, Romanesque basilica, and ridge walks.', type: 'Day Trip', bookingUrl: tqCity(TQ_CITIES.barcelona) },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
