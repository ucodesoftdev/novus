let indexInfoWindow = 0;
let scrolled = 0;
const locations = [
  {
    title: "Melbourne Theatre Company HQ",
    address: "252 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJOd8cyqtC1moRALmjSP4LeeE",
    lat: -37.82904584970476,
    lng: 144.96540315433683,
    type: "art",
  },
  {
    title: "Australian Centre For Contemporary Art",
    address: "111 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJCY-uHqxC1moRD3Tq9lMJbWo",
    lat: -37.82657824166182,
    lng: 144.9670152601772,
    type: "art",
  },
  {
    title: "Malthouse Theatre",
    address: "The Malthouse, 113 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJ03AKHKxC1moRQRdh_sKzMJk",
    lat: -37.82693383940648,
    lng: 144.96648777392406,
    type: "art",
  },
  {
    title: "Melbourne Symphony Orchestra",
    address: "120/130 Southbank Blvd, Southbank VIC 3006, Australia",
    place_id: "ChIJvSz64q1C1moRoT6U2Szhc9Q",
    lat: -37.82009048123877,
    lng: 144.96782629999893,
    type: "art",
  },
  {
    title: "NIDA - National Institute of Dramatic Art",
    address: "Suite 4/152 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJJz3wFB1o1moR-0rKTRS4EZU",
    lat: -37.82543953373668,
    lng: 144.9659133564469,
    type: "art",
  },
  {
    title: "National Gallery of Victoria",
    address: "180 St Kilda Rd, Melbourne VIC 3006, Australia",
    place_id: "ChIJuYNitLFC1moRVB5vMAKPcTM",
    lat: -37.82259095221605,
    lng: 144.96892618082268,
    type: "art",
  },
  {
    title: "Uomasa Japanese Restaurant",
    address: "75A Dorcas St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJn9thi6lC1moRnqJd_SfFY1I",
    lat: -37.83135053113267,
    lng: 144.96703332557152,
    type: "cafe",
  },
  {
    title: "Betwixt Cafe & Bar",
    address: "45 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJQ4D2GE9D1moRSyCBtS30iSg",
    lat: -37.824867511802,
    lng: 144.96713450232636,
    type: "cafe",
  },
  {
    title: "Lionel's Cafe",
    address: "The Stable, Grant St, Southbank VIC 3006, Australia",
    place_id: "ChIJxRekSq5C1moRqgi6Il15YkA",
    lat: -37.825198345039354,
    lng: 144.96943309216718,
    type: "cafe",
  },
  {
    title: "Jubilee on Dorcas",
    address: "100 Dorcas St, South Melbourne VIC 3006, Australia",
    place_id: "ChIJq29Bc5dD1moRD4vkc_tlhE0",
    lat: -37.831005756739316,
    lng: 144.96630242556424,
    type: "cafe",
  },
  {
    title: "Gordon Espresso",
    address: "71 Coventry St, Southbank VIC 3006, Australia",
    place_id: "ChIJrx7uSe9D1moRLKGIkM7TaUc",
    lat: -37.829818996743334,
    lng: 144.96781056691742,
    type: "cafe",
  },
  {
    title: "Queenie's",
    address: "41 Coventry St, Southbank VIC 3006, Australia",
    place_id: "ChIJOea_JqlC1moRQ2VTxOnlovM",
    lat: -37.829371166719014,
    lng: 144.96924537115623,
    type: "cafe",
  },
  {
    title: "Human Beans",
    address: "70 Dorcas St, Southbank VIC 3006, Australia",
    place_id: "ChIJC8pmuyBD1moRrmQP8acen5M",
    lat: -37.83060505190014,
    lng: 144.96733419999518,
    type: "cafe",
  },
  {
    title: "10 Hoff Cafe",
    address: "10 Hoff Bvd, Southbank VIC 3006, Australia",
    place_id: "ChIJXWzgRbRD1moRxVp-McLJqjI",
    lat: -37.82518298402039,
    lng: 144.96376229005793,
    type: "cafe",
  },
  {
    title: "Ayam Chef",
    address: "67-69 Coventry St, Southbank VIC 3006, Australia",
    place_id: "ChIJLVH3bKlC1moRx3TW_R-cYnw",
    lat: -37.82979042011781,
    lng: 144.96791350118676,
    type: "cafe",
  },
  {
    title: "Miss Pearl Bar",
    address: "140 Southbank Blvd, Southbank VIC 3006, Australia",
    place_id: "ChIJ4XiFZh9D1moRKHiz4fLLJ4Y",
    lat: -37.824007544616755,
    lng: 144.9681531620689,
    type: "cafe",
  },
  {
    title: "Tempura Hajime",
    address: "60 Park St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJeRMS16lC1moREbJCpcg7Hps",
    lat: -37.83275738258766,
    lng: 144.96888224894084,
    type: "cafe",
  },
  {
    title: "Mister Margherita",
    address: "1/52 Park St, South Melbourne VIC 3205, Australias",
    place_id: "ChIJCz8PzqlC1moRiJB9u1tb4bg",
    lat: -37.832676875953396,
    lng: 144.96915901448074,
    type: "cafe",
  },
  {
    title: "Olmate's Sangas",
    address: "20 Kavanagh St, Southbank VIC 3006, Australia",
    place_id: "ChIJMSLO2lBD1moRZkWPLF8473s",
    lat: -37.82294108126363,
    lng: 144.96601629991568,
    type: "cafe",
  },
  {
    title: "Royal Botanic Gardens",
    address: "Melbourne Gardens, Melbourne VIC 3004, Australia",
    place_id: "ChIJO40p-5ZC1moRwNcxBXZWBA8",
    lat: -37.830243003101764,
    lng: 144.98014905921352,
    type: "local_treasure",
  },
  {
    title: "Shrine of Remembrance",
    address: "Birdwood Ave, Melbourne VIC 3001, Australia",
    place_id: "ChIJGSSIDKZC1moRisWTaYaaq18",
    lat: -37.83051071682026,
    lng: 144.97342563179433,
    type: "local_treasure",
  },
  {
    title: "Kings Domain",
    address: "Main Yarra Trail, Melbourne VIC 3004, Australia",
    place_id: "ChIJoS72YKNC1moRL-iksMO0MqE",
    lat: -37.824262808293675,
    lng: 144.97784077484235,
    type: "local_treasure",
  },
  {
    title: "Sidney Myer Music Bowl",
    address: "Sidney Myer Music Bowl Reserve, Melbourne VIC 3004, Australia",
    place_id: "ChIJj7dqVrpC1moRqiRqi0YyNvc",
    lat: -37.823316354181934,
    lng: 144.97467470682528,
    type: "local_treasure",
  },
  {
    title: "South Melbourne Markets",
    address: "322-326 Coventry St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJU13Hrf5n1moRfzDr6g0ld28",
    lat: -37.83201162963896,
    lng: 144.95593910005442,
    type: "local_treasure",
  },
  {
    title: "Rod Laver Arena",
    address: "Olympic Blvd, Melbourne VIC 3001, Australia",
    place_id: "ChIJJc8qc7lC1moRYTElaEC226Y",
    lat: -37.821615899390835,
    lng: 144.97855748180203,
    type: "local_treasure",
  },
  {
    title: "MCG",
    address: "Brunton Ave, Richmond VIC 3002, Australia",
    place_id: "ChIJgWIaV5VC1moR-bKgR9ZfV2M",
    lat: -37.81996513548011,
    lng: 144.98344836612296,
    type: "local_treasure",
  },
  {
    title: "Melbourne Convention & Exhibition Centre",
    address: "1 Convention Centre Pl, South Wharf VIC 3006, Australia",
    place_id: "ChIJtYSic1Fd1moRhKPuTfDqjpU",
    lat: -37.82466679222774,
    lng: 144.9554644901373,
    type: "local_treasure",
  },
  {
    title: "Albert Park Grand Prix Circuit",
    address: "12 Aughtie Dr, Albert Park VIC 3206, Australia",
    place_id: "ChIJRaVhSQxo1moR6KiBWxXh_Qw",
    lat: -37.85006000194761,
    lng: 144.96901934343632,
    type: "local_treasure",
  },
  {
    title: "Blondie Bar",
    address:
      "Cnr Southbank Boulevard &, 31 Sturt St, Southbank VIC 3006, Australia",
    place_id: "ChIJ4-k_G65C1moRX3g97je74tA",
    lat: -37.82383168133003,
    lng: 144.9678448589051,
    type: "bar",
  },
  {
    title: "PJ O'Briend's Irish pub",
    address: "G14 / 15, 16/3 Southgate Ave, Southbank VIC 3006, Australia",
    place_id: "ChIJgZOibbFC1moRjJ5c8xm1eWE",
    lat: -37.820369681468904,
    lng: 144.96595043126297,
    type: "bar",
  },
  {
    title: "Petanque Social",
    address:
      "Crown Riverwalk, Crown Melbourne, 8 Whiteman St, Southbank VIC 3006, Australia",
    place_id: "ChIJG_IY3rRd1moRf6JiNoE66_0",
    lat: -37.822131346213695,
    lng: 144.95915315629347,
    type: "bar",
  },
  {
    title: "Limerick Arms Hotel",
    address: "364 Clarendon St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJW9eyVAdo1moRO6Y-4N3eC0U",
    lat: -37.835404162750194,
    lng: 144.96147240249977,
    type: "bar",
  },
  {
    title: "Hophaus Bar",
    address: "MR5/3 Southgate Ave, Southbank VIC 3006, Australia",
    place_id: "ChIJn6qqqq1C1moRI9ElnYJOHZ8",
    lat: -37.82024045899614,
    lng: 144.96565681104207,
    type: "bar",
  },
  {
    title: "Belgian Beer Cafe",
    address: "5 Riverside Quay, Southbank VIC 3006, Australia",
    place_id: "ChIJpzMMZ7JC1moRw81gAuNuexI",
    lat: -37.82149697010502,
    lng: 144.96436329991937,
    type: "bar",
  },
  {
    title: "Hopscotch Melbourne",
    address: "Ground Floor, 4 Riverside Quay, Southbank VIC 3006, Australia",
    place_id: "ChIJA8Rg8bJC1moRmF1fVyw4iqg",
    lat: -37.820720940582284,
    lng: 144.96345700000646,
    type: "bar",
  },
  {
    title: "Bells Hotel",
    address: "157 Moray St, South Melbourne VIC 3205, Australia",
    place_id: "ChIJR8PDnqpC1moRUcW8PO7thQ4",
    lat: -37.83087094269473,
    lng: 144.96276871060522,
    type: "bar",
  },
];
