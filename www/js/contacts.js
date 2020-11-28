// vector Municipalities has:
//  "code": 106
//  "name": Castelo Branco
// it gets the code for each municipality
//
// ##############
// vector Localities has
//  "locality": "4 Águas",
//  "municipality": 607,
//  "postalCode": 3200
//
// ###############
// vector PM_Contacts has
//   "nome": "Albufeira",
//   "contacto": "geral@cm-albufeira.pt"
// for each municipality it gives a certain contact
// thus one might reach PM contact by
// GPS/Google Postal Code -> Localities.postalCode -> Localities.municipality ->  Municipalities.code -> Municipalities.name -> PM_Contacts.nome
//
// #################
// vector GNR_Contacts has
//  "nome": "1.º Destacamento de Ação Conjunto (Lisboa)",
//  "contacto": "unt.daclsb@gnr.pt"
// for a certain GNR contact name, it gives a contact
// therefore there is no geolocatization information
//
// ###############
// vector PSP_Contacts has
//  "nome": "1.ª Divisão Policial - Porto",
//  "contacto": "1div.porto@psp.pt"
// for a certain PSP contact name, it gives a contact
// therefore there is no geolocatization information

// #############################################################################################################33

/* eslint camelcase: off */
/* eslint no-unused-vars: off */
/* eslint no-useless-escape: off */
/* eslint prefer-promise-reject-errors: off */
/* eslint no-undef: off */

/* global app */
app.contacts = {}

// Polícias Municipais
app.contacts.PM_Contacts = [
  {
    'nome': 'Albufeira',
    'contacto': 'geral@cm-albufeira.pt'
  },
  {
    'nome': 'Almada',
    'contacto': 'cidadao@ecalma.pt'
  },
  {
    'nome': 'Amadora',
    'contacto': 'policia.municipal@cm-amadora.pt'
  },
  {
    'nome': 'Aveiro',
    'contacto': 'policia.municipal@cm-aveiro.pt'
  },
  {
    'nome': 'Braga',
    'contacto': 'policia.municipal@cm-braga.pt'
  },
  {
    'nome': 'Cabeceiras de Basto',
    'contacto': 'policiamunicipal@cabeceirasdebasto.pt'
  },
  {
    'nome': 'Cascais',
    'contacto': 'policia.municipal@cm-cascais.pt'
  },
  {
    'nome': 'Coimbra',
    'contacto': 'policia.municipal@cm-coimbra.pt'
  },
  {
    'nome': 'Fafe',
    'contacto': 'pmfafe@sapo.pt'
  },
  {
    'nome': 'Felgueiras',
    'contacto': 'policia.municipal@cm-felgueiras.pt'
  },
  {
    'nome': 'Gondomar',
    'contacto': 'pmunicipal@cm-gondomar.pt'
  },
  {
    'nome': 'Guimarães',
    'contacto': 'policia.municipal@cm-guimaraes.pt'
  },
  {
    'nome': 'Lisboa',
    'contacto': 'pm@cm-lisboa.pt'
  },
  {
    'nome': 'Loures',
    'contacto': 'policia_municipal@cm-loures.pt'
  },
  {
    'nome': 'Mafra',
    'contacto': 'policiamunicipal@cm-mafra.pt'
  },
  {
    'nome': 'Maia',
    'contacto': 'pm@cm-maia.pt'
  },
  {
    'nome': 'Marco de Canaveses',
    'contacto': 'policia.municipal@cm-marco-canavese.pt'
  },
  {
    'nome': 'Matosinhos',
    'contacto': 'mail@cm-matosinhos.pt'
  },
  {
    'nome': 'Oeiras',
    'contacto': 'policia.municipal@cm-oeiras.pt'
  },
  {
    'nome': 'Paços de Ferreira',
    'contacto': 'policiamunicipalpfr@iol.pt'
  },
  {
    'nome': 'Paredes',
    'contacto': 'policiamunicipal@cm-paredes.pt'
  },
  {
    'nome': 'Ponta Delgada',
    'contacto': 'policiamunicipal@mpdelgada.pt'
  },
  {
    'nome': 'Porto',
    'contacto': 'policiamunicipal@cm-porto.pt'
  },
  {
    'nome': 'Póvoa de Varzim',
    'contacto': 'policiamunicipal@cm-pvarzim.pt'
  },
  {
    'nome': 'Santo Tirso',
    'contacto': 'pm@cm-stirso.pt'
  },
  {
    'nome': 'Sintra',
    'contacto': 'policiamunicipal@cm-sintra.pt'
  },
  {
    'nome': 'Trofa',
    'contacto': 'policia.municipal@mun-trofa.pt'
  },
  {
    'nome': 'Vieira do Minho',
    'contacto': 'pmvieiraminho@hotmail.com'
  },
  {
    'nome': 'Vila do Conde',
    'contacto': 'geral@viladoconde.pt'
  },
  {
    'nome': 'Vila Nova de Famalicão',
    'contacto': 'policiamunicipal@vilanovadefamalicao.org'
  },
  {
    'nome': 'Vila Nova de Gaia',
    'contacto': 'pm@cm-gaia.pt'
  },
  {
    'nome': 'Vila Nova de Poiares',
    'contacto': 'policiamunicipal@mail.telepac.pt'
  },
  {
    'nome': 'Viseu',
    'contacto': 'policia.municipal@cmviseu.pt'
  }
]

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

app.contacts.Municipalities = [
  {
    'code': 106,
    'name': 'Castelo de Paiva'
  },
  {
    'code': 107,
    'name': 'Espinho'
  },
  {
    'code': 108,
    'name': 'Estarreja'
  },
  {
    'code': 109,
    'name': 'Santa Maria da Feira'
  },
  {
    'code': 110,
    'name': 'Ílhavo'
  },
  {
    'code': 111,
    'name': 'Mealhada'
  },
  {
    'code': 112,
    'name': 'Murtosa'
  },
  {
    'code': 113,
    'name': 'Oliveira de Azeméis'
  },
  {
    'code': 114,
    'name': 'Oliveira do Bairro'
  },
  {
    'code': 115,
    'name': 'Ovar'
  },
  {
    'code': 116,
    'name': 'São João da Madeira'
  },
  {
    'code': 117,
    'name': 'Sever do Vouga'
  },
  {
    'code': 118,
    'name': 'Vagos'
  },
  {
    'code': 119,
    'name': 'Vale de Cambra'
  },
  {
    'code': 101,
    'name': 'Águeda'
  },
  {
    'code': 102,
    'name': 'Albergaria-a-Velha'
  },
  {
    'code': 103,
    'name': 'Anadia'
  },
  {
    'code': 104,
    'name': 'Arouca'
  },
  {
    'code': 105,
    'name': 'Aveiro'
  },
  {
    'code': 206,
    'name': 'Castro Verde'
  },
  {
    'code': 207,
    'name': 'Cuba'
  },
  {
    'code': 208,
    'name': 'Ferreira do Alentejo'
  },
  {
    'code': 209,
    'name': 'Mértola'
  },
  {
    'code': 210,
    'name': 'Moura'
  },
  {
    'code': 211,
    'name': 'Odemira'
  },
  {
    'code': 212,
    'name': 'Ourique'
  },
  {
    'code': 213,
    'name': 'Serpa'
  },
  {
    'code': 214,
    'name': 'Vidigueira'
  },
  {
    'code': 201,
    'name': 'Aljustrel'
  },
  {
    'code': 202,
    'name': 'Almodôvar'
  },
  {
    'code': 203,
    'name': 'Alvito'
  },
  {
    'code': 204,
    'name': 'Barrancos'
  },
  {
    'code': 205,
    'name': 'Beja'
  },
  {
    'code': 306,
    'name': 'Esposende'
  },
  {
    'code': 307,
    'name': 'Fafe'
  },
  {
    'code': 308,
    'name': 'Guimarães'
  },
  {
    'code': 309,
    'name': 'Póvoa de Lanhoso'
  },
  {
    'code': 310,
    'name': 'Terras de Bouro'
  },
  {
    'code': 311,
    'name': 'Vieira do Minho'
  },
  {
    'code': 312,
    'name': 'Vila Nova de Famalicão'
  },
  {
    'code': 313,
    'name': 'Vila Verde'
  },
  {
    'code': 314,
    'name': 'Vizela'
  },
  {
    'code': 301,
    'name': 'Amares'
  },
  {
    'code': 302,
    'name': 'Barcelos'
  },
  {
    'code': 303,
    'name': 'Braga'
  },
  {
    'code': 304,
    'name': 'Cabeceiras de Basto'
  },
  {
    'code': 305,
    'name': 'Celorico de Basto'
  },
  {
    'code': 406,
    'name': 'Miranda do Douro'
  },
  {
    'code': 407,
    'name': 'Mirandela'
  },
  {
    'code': 408,
    'name': 'Mogadouro'
  },
  {
    'code': 409,
    'name': 'Torre de Moncorvo'
  },
  {
    'code': 410,
    'name': 'Vila Flor'
  },
  {
    'code': 411,
    'name': 'Vimioso'
  },
  {
    'code': 412,
    'name': 'Vinhais'
  },
  {
    'code': 401,
    'name': 'Alfândega da Fé'
  },
  {
    'code': 402,
    'name': 'Bragança'
  },
  {
    'code': 403,
    'name': 'Carrazeda de Ansiães'
  },
  {
    'code': 404,
    'name': 'Freixo de Espada à Cinta'
  },
  {
    'code': 405,
    'name': 'Macedo de Cavaleiros'
  },
  {
    'code': 506,
    'name': 'Oleiros'
  },
  {
    'code': 507,
    'name': 'Penamacor'
  },
  {
    'code': 508,
    'name': 'Proença-a-Nova'
  },
  {
    'code': 509,
    'name': 'Sertã'
  },
  {
    'code': 510,
    'name': 'Vila de Rei'
  },
  {
    'code': 511,
    'name': 'Vila Velha de Ródão'
  },
  {
    'code': 501,
    'name': 'Belmonte'
  },
  {
    'code': 502,
    'name': 'Castelo Branco'
  },
  {
    'code': 503,
    'name': 'Covilhã'
  },
  {
    'code': 504,
    'name': 'Fundão'
  },
  {
    'code': 505,
    'name': 'Idanha-a-Nova'
  },
  {
    'code': 606,
    'name': 'Góis'
  },
  {
    'code': 607,
    'name': 'Lousã'
  },
  {
    'code': 608,
    'name': 'Mira'
  },
  {
    'code': 609,
    'name': 'Miranda do Corvo'
  },
  {
    'code': 610,
    'name': 'Montemor-o-Velho'
  },
  {
    'code': 611,
    'name': 'Oliveira do Hospital'
  },
  {
    'code': 612,
    'name': 'Pampilhosa da Serra'
  },
  {
    'code': 613,
    'name': 'Penacova'
  },
  {
    'code': 614,
    'name': 'Penela'
  },
  {
    'code': 615,
    'name': 'Soure'
  },
  {
    'code': 616,
    'name': 'Tábua'
  },
  {
    'code': 617,
    'name': 'Vila Nova de Poiares'
  },
  {
    'code': 601,
    'name': 'Arganil'
  },
  {
    'code': 602,
    'name': 'Cantanhede'
  },
  {
    'code': 603,
    'name': 'Coimbra'
  },
  {
    'code': 604,
    'name': 'Condeixa-a-Nova'
  },
  {
    'code': 605,
    'name': 'Figueira da Foz'
  },
  {
    'code': 706,
    'name': 'Montemor-o-Novo'
  },
  {
    'code': 707,
    'name': 'Mora'
  },
  {
    'code': 708,
    'name': 'Mourão'
  },
  {
    'code': 709,
    'name': 'Portel'
  },
  {
    'code': 710,
    'name': 'Redondo'
  },
  {
    'code': 711,
    'name': 'Reguengos de Monsaraz'
  },
  {
    'code': 712,
    'name': 'Vendas Novas'
  },
  {
    'code': 713,
    'name': 'Viana do Alentejo'
  },
  {
    'code': 714,
    'name': 'Vila Viçosa'
  },
  {
    'code': 701,
    'name': 'Alandroal'
  },
  {
    'code': 702,
    'name': 'Arraiolos'
  },
  {
    'code': 703,
    'name': 'Borba'
  },
  {
    'code': 704,
    'name': 'Estremoz'
  },
  {
    'code': 705,
    'name': 'Évora'
  },
  {
    'code': 806,
    'name': 'Lagoa (Algarve)'
  },
  {
    'code': 807,
    'name': 'Lagos'
  },
  {
    'code': 808,
    'name': 'Loulé'
  },
  {
    'code': 809,
    'name': 'Monchique'
  },
  {
    'code': 810,
    'name': 'Olhão'
  },
  {
    'code': 811,
    'name': 'Portimão'
  },
  {
    'code': 812,
    'name': 'São Brás de Alportel'
  },
  {
    'code': 813,
    'name': 'Silves'
  },
  {
    'code': 814,
    'name': 'Tavira'
  },
  {
    'code': 815,
    'name': 'Vila do Bispo'
  },
  {
    'code': 816,
    'name': 'Vila Real de Santo António'
  },
  {
    'code': 801,
    'name': 'Albufeira'
  },
  {
    'code': 802,
    'name': 'Alcoutim'
  },
  {
    'code': 803,
    'name': 'Aljezur'
  },
  {
    'code': 804,
    'name': 'Castro Marim'
  },
  {
    'code': 805,
    'name': 'Faro'
  },
  {
    'code': 906,
    'name': 'Gouveia'
  },
  {
    'code': 907,
    'name': 'Guarda'
  },
  {
    'code': 908,
    'name': 'Manteigas'
  },
  {
    'code': 909,
    'name': 'Meda'
  },
  {
    'code': 910,
    'name': 'Pinhel'
  },
  {
    'code': 911,
    'name': 'Sabugal'
  },
  {
    'code': 912,
    'name': 'Seia'
  },
  {
    'code': 913,
    'name': 'Trancoso'
  },
  {
    'code': 914,
    'name': 'Vila Nova de Foz Côa'
  },
  {
    'code': 901,
    'name': 'Aguiar da Beira'
  },
  {
    'code': 902,
    'name': 'Almeida'
  },
  {
    'code': 903,
    'name': 'Celorico da Beira'
  },
  {
    'code': 904,
    'name': 'Figueira de Castelo Rodrigo'
  },
  {
    'code': 905,
    'name': 'Fornos de Algodres'
  },
  {
    'code': 1006,
    'name': 'Caldas da Rainha'
  },
  {
    'code': 1007,
    'name': 'Castanheira de Pêra'
  },
  {
    'code': 1008,
    'name': 'Figueiró dos Vinhos'
  },
  {
    'code': 1009,
    'name': 'Leiria'
  },
  {
    'code': 1010,
    'name': 'Marinha Grande'
  },
  {
    'code': 1011,
    'name': 'Nazaré'
  },
  {
    'code': 1012,
    'name': 'Óbidos'
  },
  {
    'code': 1013,
    'name': 'Pedrógão Grande'
  },
  {
    'code': 1014,
    'name': 'Peniche'
  },
  {
    'code': 1015,
    'name': 'Pombal'
  },
  {
    'code': 1016,
    'name': 'Porto de Mós'
  },
  {
    'code': 1001,
    'name': 'Alcobaça'
  },
  {
    'code': 1002,
    'name': 'Alvaiázere'
  },
  {
    'code': 1003,
    'name': 'Ansião'
  },
  {
    'code': 1004,
    'name': 'Batalha'
  },
  {
    'code': 1005,
    'name': 'Bombarral'
  },
  {
    'code': 1106,
    'name': 'Lisboa'
  },
  {
    'code': 1107,
    'name': 'Loures'
  },
  {
    'code': 1108,
    'name': 'Lourinhã'
  },
  {
    'code': 1109,
    'name': 'Mafra'
  },
  {
    'code': 1110,
    'name': 'Oeiras'
  },
  {
    'code': 1111,
    'name': 'Sintra'
  },
  {
    'code': 1112,
    'name': 'Sobral de Monte Agraço'
  },
  {
    'code': 1113,
    'name': 'Torres Vedras'
  },
  {
    'code': 1114,
    'name': 'Vila Franca de Xira'
  },
  {
    'code': 1115,
    'name': 'Amadora'
  },
  {
    'code': 1116,
    'name': 'Odivelas'
  },
  {
    'code': 1101,
    'name': 'Alenquer'
  },
  {
    'code': 1102,
    'name': 'Arruda dos Vinhos'
  },
  {
    'code': 1103,
    'name': 'Azambuja'
  },
  {
    'code': 1104,
    'name': 'Cadaval'
  },
  {
    'code': 1105,
    'name': 'Cascais'
  },
  {
    'code': 1206,
    'name': 'Crato'
  },
  {
    'code': 1207,
    'name': 'Elvas'
  },
  {
    'code': 1208,
    'name': 'Fronteira'
  },
  {
    'code': 1209,
    'name': 'Gavião'
  },
  {
    'code': 1210,
    'name': 'Marvão'
  },
  {
    'code': 1211,
    'name': 'Monforte'
  },
  {
    'code': 1212,
    'name': 'Nisa'
  },
  {
    'code': 1213,
    'name': 'Ponte de Sor'
  },
  {
    'code': 1214,
    'name': 'Portalegre'
  },
  {
    'code': 1215,
    'name': 'Sousel'
  },
  {
    'code': 1201,
    'name': 'Alter do Chão'
  },
  {
    'code': 1202,
    'name': 'Arronches'
  },
  {
    'code': 1203,
    'name': 'Avis'
  },
  {
    'code': 1204,
    'name': 'Campo Maior'
  },
  {
    'code': 1205,
    'name': 'Castelo de Vide'
  },
  {
    'code': 1306,
    'name': 'Maia'
  },
  {
    'code': 1307,
    'name': 'Marco de Canaveses'
  },
  {
    'code': 1308,
    'name': 'Matosinhos'
  },
  {
    'code': 1309,
    'name': 'Paços de Ferreira'
  },
  {
    'code': 1310,
    'name': 'Paredes'
  },
  {
    'code': 1311,
    'name': 'Penafiel'
  },
  {
    'code': 1312,
    'name': 'Porto'
  },
  {
    'code': 1313,
    'name': 'Póvoa de Varzim'
  },
  {
    'code': 1314,
    'name': 'Santo Tirso'
  },
  {
    'code': 1315,
    'name': 'Valongo'
  },
  {
    'code': 1316,
    'name': 'Vila do Conde'
  },
  {
    'code': 1317,
    'name': 'Vila Nova de Gaia'
  },
  {
    'code': 1318,
    'name': 'Trofa'
  },
  {
    'code': 1301,
    'name': 'Amarante'
  },
  {
    'code': 1302,
    'name': 'Baião'
  },
  {
    'code': 1303,
    'name': 'Felgueiras'
  },
  {
    'code': 1304,
    'name': 'Gondomar'
  },
  {
    'code': 1305,
    'name': 'Lousada'
  },
  {
    'code': 1406,
    'name': 'Cartaxo'
  },
  {
    'code': 1407,
    'name': 'Chamusca'
  },
  {
    'code': 1408,
    'name': 'Constância'
  },
  {
    'code': 1409,
    'name': 'Coruche'
  },
  {
    'code': 1410,
    'name': 'Entroncamento'
  },
  {
    'code': 1411,
    'name': 'Ferreira do Zêzere'
  },
  {
    'code': 1412,
    'name': 'Golegã'
  },
  {
    'code': 1413,
    'name': 'Mação'
  },
  {
    'code': 1414,
    'name': 'Rio Maior'
  },
  {
    'code': 1415,
    'name': 'Salvaterra de Magos'
  },
  {
    'code': 1416,
    'name': 'Santarém'
  },
  {
    'code': 1417,
    'name': 'Sardoal'
  },
  {
    'code': 1418,
    'name': 'Tomar'
  },
  {
    'code': 1419,
    'name': 'Torres Novas'
  },
  {
    'code': 1420,
    'name': 'Vila Nova da Barquinha'
  },
  {
    'code': 1421,
    'name': 'Ourém'
  },
  {
    'code': 1401,
    'name': 'Abrantes'
  },
  {
    'code': 1402,
    'name': 'Alcanena'
  },
  {
    'code': 1403,
    'name': 'Almeirim'
  },
  {
    'code': 1404,
    'name': 'Alpiarça'
  },
  {
    'code': 1405,
    'name': 'Benavente'
  },
  {
    'code': 1506,
    'name': 'Moita'
  },
  {
    'code': 1507,
    'name': 'Montijo'
  },
  {
    'code': 1508,
    'name': 'Palmela'
  },
  {
    'code': 1509,
    'name': 'Santiago do Cacém'
  },
  {
    'code': 1510,
    'name': 'Seixal'
  },
  {
    'code': 1511,
    'name': 'Sesimbra'
  },
  {
    'code': 1512,
    'name': 'Setúbal'
  },
  {
    'code': 1513,
    'name': 'Sines'
  },
  {
    'code': 1501,
    'name': 'Alcácer do Sal'
  },
  {
    'code': 1502,
    'name': 'Alcochete'
  },
  {
    'code': 1503,
    'name': 'Almada'
  },
  {
    'code': 1504,
    'name': 'Barreiro'
  },
  {
    'code': 1505,
    'name': 'Grândola'
  },
  {
    'code': 1606,
    'name': 'Ponte da Barca'
  },
  {
    'code': 1607,
    'name': 'Ponte de Lima'
  },
  {
    'code': 1608,
    'name': 'Valença'
  },
  {
    'code': 1609,
    'name': 'Viana do Castelo'
  },
  {
    'code': 1610,
    'name': 'Vila Nova de Cerveira'
  },
  {
    'code': 1601,
    'name': 'Arcos de Valdevez'
  },
  {
    'code': 1602,
    'name': 'Caminha'
  },
  {
    'code': 1603,
    'name': 'Melgaço'
  },
  {
    'code': 1604,
    'name': 'Monção'
  },
  {
    'code': 1605,
    'name': 'Paredes de Coura'
  },
  {
    'code': 1705,
    'name': 'Mondim de Basto'
  },
  {
    'code': 1706,
    'name': 'Montalegre'
  },
  {
    'code': 1707,
    'name': 'Murça'
  },
  {
    'code': 1708,
    'name': 'Peso da Régua'
  },
  {
    'code': 1709,
    'name': 'Ribeira de Pena'
  },
  {
    'code': 1710,
    'name': 'Sabrosa'
  },
  {
    'code': 1711,
    'name': 'Santa Marta de Penaguião'
  },
  {
    'code': 1712,
    'name': 'Valpaços'
  },
  {
    'code': 1713,
    'name': 'Vila Pouca de Aguiar'
  },
  {
    'code': 1714,
    'name': 'Vila Real'
  },
  {
    'code': 1701,
    'name': 'Alijó'
  },
  {
    'code': 1702,
    'name': 'Boticas'
  },
  {
    'code': 1703,
    'name': 'Chaves'
  },
  {
    'code': 1704,
    'name': 'Mesão Frio'
  },
  {
    'code': 1805,
    'name': 'Lamego'
  },
  {
    'code': 1806,
    'name': 'Mangualde'
  },
  {
    'code': 1807,
    'name': 'Moimenta da Beira'
  },
  {
    'code': 1808,
    'name': 'Mortágua'
  },
  {
    'code': 1809,
    'name': 'Nelas'
  },
  {
    'code': 1810,
    'name': 'Oliveira de Frades'
  },
  {
    'code': 1811,
    'name': 'Penalva do Castelo'
  },
  {
    'code': 1812,
    'name': 'Penedono'
  },
  {
    'code': 1813,
    'name': 'Resende'
  },
  {
    'code': 1814,
    'name': 'Santa Comba Dão'
  },
  {
    'code': 1815,
    'name': 'São João da Pesqueira'
  },
  {
    'code': 1816,
    'name': 'São Pedro do Sul'
  },
  {
    'code': 1817,
    'name': 'Sátão'
  },
  {
    'code': 1818,
    'name': 'Sernancelhe'
  },
  {
    'code': 1819,
    'name': 'Tabuaço'
  },
  {
    'code': 1820,
    'name': 'Tarouca'
  },
  {
    'code': 1821,
    'name': 'Tondela'
  },
  {
    'code': 1822,
    'name': 'Vila Nova de Paiva'
  },
  {
    'code': 1823,
    'name': 'Viseu'
  },
  {
    'code': 1824,
    'name': 'Vouzela'
  },
  {
    'code': 1801,
    'name': 'Armamar'
  },
  {
    'code': 1802,
    'name': 'Carregal do Sal'
  },
  {
    'code': 1803,
    'name': 'Castro Daire'
  },
  {
    'code': 1804,
    'name': 'Cinfães'
  },
  {
    'code': 3105,
    'name': 'Ponta do Sol'
  },
  {
    'code': 3106,
    'name': 'Porto Moniz'
  },
  {
    'code': 3107,
    'name': 'Ribeira Brava'
  },
  {
    'code': 3108,
    'name': 'Santa Cruz'
  },
  {
    'code': 3109,
    'name': 'Santana'
  },
  {
    'code': 3110,
    'name': 'São Vicente'
  },
  {
    'code': 3101,
    'name': 'Calheta (Madeira)'
  },
  {
    'code': 3102,
    'name': 'Câmara de Lobos'
  },
  {
    'code': 3103,
    'name': 'Funchal'
  },
  {
    'code': 3104,
    'name': 'Machico'
  },
  {
    'code': 3201,
    'name': 'Porto Santo'
  },
  {
    'code': 4101,
    'name': 'Vila do Porto'
  },
  {
    'code': 4205,
    'name': 'Ribeira Grande'
  },
  {
    'code': 4206,
    'name': 'Vila Franca do Campo'
  },
  {
    'code': 4201,
    'name': 'Lagoa (São Miguel)'
  },
  {
    'code': 4202,
    'name': 'Nordeste'
  },
  {
    'code': 4203,
    'name': 'Ponta Delgada'
  },
  {
    'code': 4204,
    'name': 'Povoação'
  },
  {
    'code': 4301,
    'name': 'Angra do Heroísmo'
  },
  {
    'code': 4302,
    'name': 'Praia da Vitória'
  },
  {
    'code': 4401,
    'name': 'Santa Cruz da Graciosa'
  },
  {
    'code': 4501,
    'name': 'Calheta (São Jorge)'
  },
  {
    'code': 4502,
    'name': 'Velas'
  },
  {
    'code': 4601,
    'name': 'Lajes do Pico'
  },
  {
    'code': 4602,
    'name': 'Madalena'
  },
  {
    'code': 4603,
    'name': 'São Roque do Pico'
  },
  {
    'code': 4701,
    'name': 'Horta'
  },
  {
    'code': 4801,
    'name': 'Lajes das Flores'
  },
  {
    'code': 4802,
    'name': 'Santa Cruz das Flores'
  },
  {
    'code': 4901,
    'name': 'Corvo'
  }
]

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

app.contacts.GNR_Contacts = [
  {
    'nome': '1.º Destacamento de Ação Conjunto (Lisboa)',
    'contacto': 'unt.daclsb@gnr.pt'
  },
  {
    'nome': '2.º Destacamento de Ação Conjunto (Porto)',
    'contacto': 'unt.dacprt@gnr.pt'
  },
  {
    'nome': '2.º Esquadrão Moto',
    'contacto': 'ushe.ghe2e@gnr.pt'
  },
  {
    'nome': '3.º Esquadrão A Cavalo',
    'contacto': 'ushe.ghe3e@gnr.pt'
  },
  {
    'nome': '4.º Esquadrão A Cavalo',
    'contacto': 'ushe.ghe4e@gnr.pt'
  },
  {
    'nome': 'Arquivo Histórico GNR',
    'contacto': 'cg.sg.dhcg@gnr.pt'
  },
  {
    'nome': 'Banda de Música e Fanfarra',
    'contacto': 'ushe.bm@gnr.pt'
  },
  {
    'nome': 'Centro Clínico',
    'contacto': 'cari.cc@gnr.pt'
  },
  {
    'nome': 'Centro de Comando e Controlo Operacional (Núcleo)',
    'contacto': 'co.ccco@gnr.pt'
  },
  {
    'nome': 'Centro de Comando e Controlo Operacional',
    'contacto': 'co.ccco.soc@gnr.pt'
  },
  {
    'nome': 'Centro de Coop. Policial e Aduaneira Quintanilha / S. M. Del Pedroso',
    'contacto': 'ccpa.quintanilha@gnr.pt'
  },
  {
    'nome': 'Centro de Cooperação Policial e Aduaneira Valença do Minho / Tuy',
    'contacto': 'ccpa.tuy@gnr.pt'
  },
  {
    'nome': 'Centro de Cooperação Policial e Aduaneira de Castro Marim / Ayamonte',
    'contacto': 'ccpa.ctm@gnr.pt'
  },
  {
    'nome': 'Centro de Ensino e Desbaste de Solípedes',
    'contacto': 'ushe.ceds@gnr.pt'
  },
  {
    'nome': 'Centro de Formação da Figueira da Foz',
    'contacto': 'eg.cfff@gnr.pt'
  },
  {
    'nome': 'Centro de Formação de Portalegre',
    'contacto': 'eg.cfp@gnr.pt'
  },
  {
    'nome': 'Centro de Psicologia e Intervenção Social',
    'contacto': 'cari.drh.cpis@gnr.pt'
  },
  {
    'nome': 'Centro de Reabastecimento',
    'contacto': 'cari.uag.creab@gnr.pt'
  },
  {
    'nome': 'Charanga',
    'contacto': 'ushe.charanga@gnr.pt'
  },
  {
    'nome': 'Comando Geral da Guarda Nacional Republicana',
    'contacto': 'gnr@gnr.pt'
  },
  {
    'nome': 'Comando Operacional',
    'contacto': 'co@gnr.pt'
  },
  {
    'nome': 'Comando Territorial da Guarda',
    'contacto': 'ct.grd@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Aveiro',
    'contacto': 'ct.avr@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Beja',
    'contacto': 'ct.bja@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Braga',
    'contacto': 'ct.brg@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Bragança',
    'contacto': 'ct.bgc@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Castelo Branco',
    'contacto': 'ct.ctb@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Coimbra',
    'contacto': 'ct.cbr@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Faro',
    'contacto': 'ct.far@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Leiria',
    'contacto': 'ct.lra@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Lisboa',
    'contacto': 'ct.lsb@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Madeira',
    'contacto': 'ct.mad@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Portalegre',
    'contacto': 'ct.ptg@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Porto',
    'contacto': 'ct.prt@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Santarém',
    'contacto': 'ct.str@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Setúbal',
    'contacto': 'ct.stb@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Viana do Castelo',
    'contacto': 'ct.vct@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Vila Real',
    'contacto': 'ct.vrl@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Viseu',
    'contacto': 'ct.vis@gnr.pt'
  },
  {
    'nome': 'Comando Territorial de Évora',
    'contacto': 'ct.evr@gnr.pt'
  },
  {
    'nome': 'Comando Territorial dos Açores',
    'contacto': 'ct.acr@gnr.pt'
  },
  {
    'nome': 'Comando de Administração de Recursos Internos',
    'contacto': 'cari@gnr.pt'
  },
  {
    'nome': 'Comando de Doutrina e Formação',
    'contacto': 'cdf@gnr.pt'
  },
  {
    'nome': 'Companhia de Intendência',
    'contacto': 'cari.uag.compint@gnr.pt'
  },
  {
    'nome': 'Companhia de Transportes e Manutenção',
    'contacto': 'cari.uag.ctransman@gnr.pt'
  },
  {
    'nome': 'Delegação do Centro Clínico No Porto',
    'contacto': 'cari.cc.prt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial da Covilhã',
    'contacto': 'ct.ctb.dcvl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial da Horta',
    'contacto': 'ct.acr.dhrt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Abrantes',
    'contacto': 'ct.str.dabt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Albufeira',
    'contacto': 'ct.far.dabf@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Alenquer',
    'contacto': 'ct.lsb.dalq@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Aljustrel',
    'contacto': 'ct.bja.dajt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Almada',
    'contacto': 'ct.stb.dalm@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Almodôvar',
    'contacto': 'ct.bja.dadv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Amarante',
    'contacto': 'ct.prt.damt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Anadia',
    'contacto': 'ct.avr.dand@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Angra do Heroísmo',
    'contacto': 'ct.acr.dagh@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Arcos de Valdevez',
    'contacto': 'ct.vct.davv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Aveiro',
    'contacto': 'ct.avr.davr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Barcelos',
    'contacto': 'ct.brg.dbcl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Beja',
    'contacto': 'ct.bja.dbja@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Braga',
    'contacto': 'ct.brg.dbrg@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Bragança',
    'contacto': 'ct.bgc.dbgc@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Caldas da Rainha',
    'contacto': 'ct.lra.dclr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Cantanhede',
    'contacto': 'ct.cbr.dcnt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Castelo Branco',
    'contacto': 'ct.ctb.dctb@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Chaves',
    'contacto': 'ct.vrl.dchv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Coimbra',
    'contacto': 'ct.cbr.dcbr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Coruche',
    'contacto': 'ct.str.dcch@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Elvas',
    'contacto': 'ct.ptg.delv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Estremoz',
    'contacto': 'ct.evr.detz@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Faro',
    'contacto': 'ct.far.dfar@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Felgueiras',
    'contacto': 'ct.prt.dflg@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Funchal',
    'contacto': 'ct.mad.dfun@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Fundão',
    'contacto': 'ct.ctb.dfnd@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Gouveia',
    'contacto': 'ct.grd.dgva@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Grândola',
    'contacto': 'ct.stb.dgdl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Guarda',
    'contacto': 'ct.grd.dgrd@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Guimarães',
    'contacto': 'ct.brg.dgmr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Idanha-A-Nova',
    'contacto': 'ct.ctb.didn@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Lamego',
    'contacto': 'ct.vis.dlmg@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Leiria',
    'contacto': 'ct.lra.dlra@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Loulé',
    'contacto': 'ct.far.dlle@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Lousã',
    'contacto': 'ct.cbr.dlsa@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Mafra',
    'contacto': 'ct.lsb.dmfr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Mangualde',
    'contacto': 'ct.vis.dmgl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Matosinhos',
    'contacto': 'ct.prt.dmts@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Miranda do Douro',
    'contacto': 'ct.bgc.dmdr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Mirandela',
    'contacto': 'ct.bgc.dmdl.ccom@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Moimenta da Beira',
    'contacto': 'ct.vis.dmbr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Montemor-O-Novo',
    'contacto': 'ct.evr.dmmn@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Montemor-O-Velho',
    'contacto': 'ct.cbr.dmtv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Montijo',
    'contacto': 'ct.stb.dmtj@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Moura',
    'contacto': 'ct.bja.dmra@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Nisa',
    'contacto': 'ct.ptg.dnis@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Odemira',
    'contacto': 'ct.bja.dodm@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Oliveira de Azemeis',
    'contacto': 'ct.avr.doaz@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Ovar',
    'contacto': 'ct.avr.dovr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Palmela',
    'contacto': 'ct.stb.dplm@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Penafiel',
    'contacto': 'ct.prt.dpnf@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Peso da Régua',
    'contacto': 'ct.vrl.dprg@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Pinhel',
    'contacto': 'ct.grd.dpnh@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Pombal',
    'contacto': 'ct.lra.dpbl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Ponta Delgada',
    'contacto': 'ct.acr.dpdl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Ponte de Sor',
    'contacto': 'ct.ptg.dpsr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Portalegre',
    'contacto': 'ct.ptg.dptg@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Portimão',
    'contacto': 'ct.far.dptm@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Póvoa de Lanhoso',
    'contacto': 'ct.brg.dpvl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Reguengos de Monsaraz',
    'contacto': 'ct.evr.drgm@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Santa Comba Dão',
    'contacto': 'ct.vis.dscd@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Santa Maria da Feira',
    'contacto': 'ct.avr.dsmf@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Santarém',
    'contacto': 'ct.str.dstr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Santiago do Cacém',
    'contacto': 'ct.stb.dstc@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Santo Tirso',
    'contacto': 'ct.prt.dsts@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Sertã',
    'contacto': 'ct.ctb.dsrt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Setúbal',
    'contacto': 'ct.stb.dstb@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Silves',
    'contacto': 'ct.far.dslv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Sintra',
    'contacto': 'ct.lsb.dsnt@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Tavira',
    'contacto': 'ct.far.dtvr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Tomar',
    'contacto': 'ct.str.dtmr@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Torre de Moncorvo',
    'contacto': 'ct.bgc.dtmc.ccom@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Torres Novas',
    'contacto': 'ct.str.dtnv@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Torres Vedras',
    'contacto': 'ct.lsb.dtvd@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Valença',
    'contacto': 'ct.vct.dvln@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Viana do Castelo',
    'contacto': 'ct.vct.dvct@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Vila Franca de Xira',
    'contacto': 'ct.lsb.dvfx@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Vila Nova de Gaia',
    'contacto': 'ct.prt.dvng@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Vila Real',
    'contacto': 'ct.vrl@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Vilar Formoso',
    'contacto': 'ct.grd.dvfm@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Viseu',
    'contacto': 'ct.vis.dvis@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Águeda',
    'contacto': 'ct.avr.dagd@gnr.pt'
  },
  {
    'nome': 'Destacamento Territorial de Évora',
    'contacto': 'ct.evr.devr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Ação Fiscal de Coimbra',
    'contacto': 'uaf.dcbr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Ação Fiscal de Faro',
    'contacto': 'uaf.dfar@nr.pt'
  },
  {
    'nome': 'Destacamento de Ação Fiscal de Lisboa',
    'contacto': 'uaf.dlsb@gnr.pt'
  },
  {
    'nome': 'Destacamento de Ação Fiscal de Évora',
    'contacto': 'uaf.evr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Ação Fiscal do Porto',
    'contacto': 'uaf.dprt@gnr.pt'
  },
  {
    'nome': 'Destacamento de Controlo Costeiro da Figueira da Foz',
    'contacto': 'ucc.dfgf@gnr.pt'
  },
  {
    'nome': 'Destacamento de Controlo Costeiro de Lisboa',
    'contacto': 'ucc.dlsb@gnr.pt'
  },
  {
    'nome': 'Destacamento de Controlo Costeiro de Matosinhos',
    'contacto': 'ucc.dmts@gnr.pt'
  },
  {
    'nome': 'Destacamento de Controlo Costeiro de Olhão',
    'contacto': 'ucc.dolh@gnr.pt'
  },
  {
    'nome': 'Destacamento de Controlo Costeiro de Sines',
    'contacto': 'ucc.dsin@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Aveiro',
    'contacto': 'ct.avr.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Beja',
    'contacto': 'ct.bja.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Braga',
    'contacto': 'ct.brg.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Castelo Branco',
    'contacto': 'ct.ctb.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Coimbra',
    'contacto': 'ct.cbr.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Faro',
    'contacto': 'ct.far.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Leiria',
    'contacto': 'ct.lra.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Lisboa',
    'contacto': 'ct.lsb.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Portalegre',
    'contacto': 'ct.ptg.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Setúbal',
    'contacto': 'ct.stb.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Viana do Castelo',
    'contacto': 'ct.vct.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Vila Real',
    'contacto': 'ct.vrl.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Viseu',
    'contacto': 'ct.vis.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção de Évora',
    'contacto': 'ct.evr.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Intervenção do Porto',
    'contacto': 'ct.prt.dint@gnr.pt'
  },
  {
    'nome': 'Destacamento de Pesquisa de Âmbito Nacional da Unidade de Ação Fiscal',
    'contacto': 'uaf.dp@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito da Guarda',
    'contacto': 'ct.grd.tgrd@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Aveiro',
    'contacto': 'ct.avr.tavr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Beja',
    'contacto': 'ct.bja.tbja@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Braga',
    'contacto': 'ct.brg.tbrg@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Bragança',
    'contacto': 'ct.bgc.tbgc@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Carcavelos',
    'contacto': 'ct.lsb.tccv@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Carregado',
    'contacto': 'ct.lsb.tcrg@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Castelo Branco',
    'contacto': 'ct.ctb.tctb@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Coimbra',
    'contacto': 'ct.cbr.tcbr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Faro',
    'contacto': 'ct.far.tfar@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Lagos',
    'contacto': 'ct.far.tlgs@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Penafiel',
    'contacto': 'ct.prt.tpnf@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Portalegre',
    'contacto': 'ct.ptg.tptg@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Porto',
    'contacto': 'ct.prt.tprt@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Santarém',
    'contacto': 'ct.str.tstr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Setúbal',
    'contacto': 'ct.stb.tstb@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de São João da Madeira',
    'contacto': 'ct.avr.tsjm@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Torres Vedras',
    'contacto': 'ct.lsb.ttvd@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Viana do Castelo',
    'contacto': 'ct.vct.tvct@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Vila Real',
    'contacto': 'ct.vrl.tvrl@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Viseu',
    'contacto': 'ct.vis.tvis@gnr.pt'
  },
  {
    'nome': 'Destacamento de Trânsito de Évora',
    'contacto': 'ct.evr.tevr@gnr.pt'
  },
  {
    'nome': 'Destacamento de Vigilância Móvel',
    'contacto': 'ucc.dvm@gnr.pt'
  },
  {
    'nome': 'Direção Sepna',
    'contacto': 'co.dsepna@gnr.pt'
  },
  {
    'nome': 'Direção da Formação',
    'contacto': 'cdf.df@gnr.pt'
  },
  {
    'nome': 'Direção de Comunicações e Sistemas de Informação',
    'contacto': 'co.dcsi@gnr.pt'
  },
  {
    'nome': 'Direção de Doutrina',
    'contacto': 'cdf.dd@gnr.pt'
  },
  {
    'nome': 'Direção de Informações',
    'contacto': 'co.di@gnr.pt'
  },
  {
    'nome': 'Direção de Infraestruturas',
    'contacto': 'cari.die@gnr.pt'
  },
  {
    'nome': 'Direção de Justiça e Disciplina',
    'contacto': 'djd@gnr.pt'
  },
  {
    'nome': 'Direção de Operações',
    'contacto': 'co.do@gnr.pt'
  },
  {
    'nome': 'Direção de Recursos Financeiros',
    'contacto': 'cari.drf@gnr.pt'
  },
  {
    'nome': 'Direção de Recursos Humanos',
    'contacto': 'cari.drh@gnr.pt'
  },
  {
    'nome': 'Direção de Recursos Logísticos',
    'contacto': 'cari.drl@gnr.pt'
  },
  {
    'nome': 'Direção de Saúde e Assistência Na Doença',
    'contacto': 'cari.dsad@gnr.pt'
  },
  {
    'nome': 'Divisão de Assistência Na Doença',
    'contacto': 'cari.dsad.dad@gnr.pt'
  },
  {
    'nome': 'Divisão de Comunicação e Relações Públicas',
    'contacto': 'dcrp@gnr.pt'
  },
  {
    'nome': 'Divisão de Consultadoria Jurídica',
    'contacto': 'cg.consultadoria.juridica@gnr.pt'
  },
  {
    'nome': 'Divisão de História e Cultura',
    'contacto': 'cg.sg.dhcg@gnr.pt'
  },
  {
    'nome': 'Divisão de Medicina Veterinária',
    'contacto': 'cari.dsad.dmv@gnr.pt'
  },
  {
    'nome': 'Divisão de Planeamento Estratégico e Relações Internacionais',
    'contacto': 'dperi@gnr.pt'
  },
  {
    'nome': 'Divisão de Saúde',
    'contacto': 'cari.dsad.ds@gnr.pt'
  },
  {
    'nome': 'Escola da Guarda',
    'contacto': 'eg@gnr.pt'
  },
  {
    'nome': 'Esquadrão Presidencial',
    'contacto': 'ushe.ep@gnr.pt'
  },
  {
    'nome': 'Gabinete do 2.º Comandante Geral',
    'contacto': 'cg.gab2cg@gnr.pt'
  },
  {
    'nome': 'Gabinete do Comandante Geral',
    'contacto': 'cg.gabcg@gnr.pt'
  },
  {
    'nome': 'Gabinete do Comandante Operacional',
    'contacto': 'co@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 1.ª Companhia',
    'contacto': 'ui.gips.1c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 2.ª Companhia',
    'contacto': 'ui.gips.2c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 3.ª Companhia',
    'contacto': 'ui.gips.3c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 4.ª Companhia',
    'contacto': 'ui.gips.4c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 5.ª Companhia',
    'contacto': 'ui.gips.5c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 6.ª Companhia',
    'contacto': 'ui.gips.6c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro - 7.ª Companhia',
    'contacto': 'ui.gips.7c@gnr.pt'
  },
  {
    'nome': 'Grupo Intervenção Proteção Socorro Subagrupamento Montanha',
    'contacto': 'ui.gips.samont@gnr.pt'
  },
  {
    'nome': 'Grupo de Honras de Estado',
    'contacto': 'ushe.ghe@gnr.pt'
  },
  {
    'nome': 'Grupo de Intervenção Cinotécnico',
    'contacto': 'ui.gic@gnr.pt'
  },
  {
    'nome': 'Grupo de Intervenção de Proteção e Socorro',
    'contacto': 'ui.gips@gnr.pt'
  },
  {
    'nome': 'Grupo de Segurança - 1.ª Companhia',
    'contacto': 'ushe.gs.1c@gnr.pt'
  },
  {
    'nome': 'Grupo de Segurança - 3.ª Companhia',
    'contacto': 'ushe.gs.3c@gnr.pt'
  },
  {
    'nome': 'Grupo de Segurança',
    'contacto': 'ushe.gs@gnr.pt'
  },
  {
    'nome': 'Inspeção da Guarda',
    'contacto': 'ig@gnr.pt'
  },
  {
    'nome': 'Museu da GNR',
    'contacto': 'museu@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal da Banática',
    'contacto': 'ct.stb.dalm.fbnt@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal da Zona Franca da Madeira',
    'contacto': 'ct.mad.dfun.fzfm@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal de Alfragide (Encerrado Em 30Abr13)',
    'contacto': 'ct.lsb.dsnt.fafg@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal de Pedras Rubras',
    'contacto': 'ct.prt.dmts.ppdr@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal do Aeroporto Faro',
    'contacto': 'ct.far.dfar.ffar@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal do Aeroporto de Lisboa',
    'contacto': 'ct.lsb.dvfx.fael@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal do Aeroporto do Funchal',
    'contacto': 'ct.mad.dfun.faef@gnr.pt'
  },
  {
    'nome': 'Posto Fiscal do Ministério das Finanças',
    'contacto': 'ct.lsb.dvfx.fmfi@gnr.pt'
  },
  {
    'nome': 'Posto Territorial Alcains',
    'contacto': 'ct.ctb.dctb.palc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial Arganil',
    'contacto': 'ct.cbr.darg.parg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Bemposta',
    'contacto': 'ct.str.dabt.pbpt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Charneca de Caparica',
    'contacto': 'ct.stb.dalm.pchc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Costa de Caparica',
    'contacto': 'ct.stb.dalm.pccp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Covilhã',
    'contacto': 'ct.ctb.dcvl.pcvl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Horta (Faial)',
    'contacto': 'ct.acr.dhrt.phrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Praia (Graciosa)',
    'contacto': 'ct.acr.dagh.ppra@gnr.pt'
  },
  {
    'nome': 'Posto Territorial da Praia da Vitória (Terceira)',
    'contacto': 'ct.acr.dagh.pprv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial das Velas (São Jorge)',
    'contacto': 'ct.acr.dagh.pvls@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Abrantes',
    'contacto': 'ct.str.dabt.pabt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Aguiar da Beira',
    'contacto': 'ct.grd.dgva.pagb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alandroal',
    'contacto': 'ct.evr.drgm.pald@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Albergaria-A-Velha',
    'contacto': 'ct.avr.dagd.pabv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alcanena',
    'contacto': 'ct.str.dtnv.pacn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alcobaça',
    'contacto': 'ct.lra.dalb.palb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alcochete',
    'contacto': 'ct.stb.dmtj.palc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alcoutim',
    'contacto': 'ct.far.dtvr.pact@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alcácer do Sal',
    'contacto': 'ct.stb.dgdl.pasl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alcáçovas',
    'contacto': 'ct.evr.dmmn.pacv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alenquer',
    'contacto': 'ct.lsb.dalq.palq@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alfarim',
    'contacto': 'ct.stb.dstb.pafr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alfena',
    'contacto': 'ct.prt.dsts.pafn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alfândega da Fé',
    'contacto': 'ct.bgc.dtmc.pafe@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alijó',
    'contacto': 'ct.vrl.dprg.palj@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Aljezur',
    'contacto': 'ct.far.dptm.pajz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Aljustrel',
    'contacto': 'ct.bja.dajt.pajt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Almancil',
    'contacto': 'ct.far.dlle.palc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Almeida',
    'contacto': 'ct.grd.dvfm.pald@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Almeirim',
    'contacto': 'ct.str.dstr.palr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Almodôvar',
    'contacto': 'ct.bja.dadv.padv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alpalhão',
    'contacto': 'ct.ptg.dnis.papl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alpedrinha',
    'contacto': 'ct.ctb.dfnd.papd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alpendurada',
    'contacto': 'ct.prt.damt.palp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alpiarça',
    'contacto': 'ct.str.dstr.palp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alter do Chão',
    'contacto': 'ct.ptg.dptg.patc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alvaiázere',
    'contacto': 'ct.lra.dpbl.palv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alvalade do Sado',
    'contacto': 'ct.stb.dstc.pals@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Alvito',
    'contacto': 'ct.bja.dbja.palv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Amarante',
    'contacto': 'ct.prt.damt.pamt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Amareleja',
    'contacto': 'ct.bja.dmra.paja@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Amares',
    'contacto': 'ct.brg.dpvl.pamr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Anadia',
    'contacto': 'ct.avr.dand.pand@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ansião',
    'contacto': 'ct.lra.dpbl.pans@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ançã',
    'contacto': 'ct.cbr.dcnt.panc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arcos de Valdevez',
    'contacto': 'ct.vct.davv.pavv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arcozelo',
    'contacto': 'ct.prt.dvng.parc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Argozelo',
    'contacto': 'ct.bgc.dmdr.parz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Armamar',
    'contacto': 'ct.vis.dlmg.parm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Armação de Pêra',
    'contacto': 'ct.far.dslv.pamp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arouca',
    'contacto': 'ct.avr.doaz.parc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arraiolos',
    'contacto': 'ct.evr.detz.parl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arrancada do Vouga',
    'contacto': 'ct.avr.dagd.parv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arronches',
    'contacto': 'ct.ptg.delv.parc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Arruda dos Vinhos',
    'contacto': 'ct.lsb.dvfx.parv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Avanca',
    'contacto': 'ct.avr.dovr.pavc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Aveiras',
    'contacto': 'ct.lsb.dalq.pavr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Aveiro (Oliveirinha)',
    'contacto': 'ct.avr.davr.pavr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Avelal',
    'contacto': 'ct.vis.dmgl.pavl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Avintes',
    'contacto': 'ct.prt.dvng.pavt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Avis',
    'contacto': 'ct.ptg.dpsr.pavs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Azambuja',
    'contacto': 'ct.lsb.dalq.pazb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Azaruja',
    'contacto': 'ct.evr.devr.pazr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Azeitão',
    'contacto': 'ct.stb.dstb.pvna@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Azinheira de Barros',
    'contacto': 'ct.stb.dgdl.pazb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Baião',
    'contacto': 'ct.prt.damt.pbai@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Baleizão',
    'contacto': 'ct.bja.dbja.pblz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Barcelos',
    'contacto': 'ct.brg.dbcl.pbcl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Barrancos',
    'contacto': 'ct.bja.dmra.pbrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Barroselas',
    'contacto': 'ct.vct.dvct.pbrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Batalha',
    'contacto': 'ct.lra.dlra.pbtl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Beja',
    'contacto': 'ct.bja.dbja.pbja@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Belmonte',
    'contacto': 'ct.ctb.dcvl.pblm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Benavente',
    'contacto': 'ct.str.dcch.pbnv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Bencatel',
    'contacto': 'ct.evr.drgm.pbct@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Benedita',
    'contacto': 'ct.lra.dalb.pbnd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Beringel',
    'contacto': 'ct.bja.dbja.pbrg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Bombarral',
    'contacto': 'ct.lra.dclr.pbbr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Borba',
    'contacto': 'ct.evr.detz.pbrb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Boticas',
    'contacto': 'ct.vrl.dchv.pbtc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Braga',
    'contacto': 'ct.brg.dbrg.pbrg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Bragança',
    'contacto': 'ct.bgc.dbgc.pbgc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Brinches',
    'contacto': 'ct.bja.dmra.pbcs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Bucelas',
    'contacto': 'ct.lsb.dvfx.pbcl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Bustos',
    'contacto': 'ct.avr.dand.pbst@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cabeceiras de Basto',
    'contacto': 'ct.brg.dfaf.pcbb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cabeço de Vide',
    'contacto': 'ct.ptg.dptg.pcbv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cabrela',
    'contacto': 'ct.evr.dmmn.pcbl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cacia',
    'contacto': 'ct.avr.davr.pcac@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cadaval',
    'contacto': 'ct.lsb.dalq.pcdv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Caldas da Rainha',
    'contacto': 'ct.lra.dclr.pclr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Caldas das Taipas',
    'contacto': 'ct.brg.dgmr.pcdt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Caminha',
    'contacto': 'ct.vct.dvct.pcmn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Campo Maior',
    'contacto': 'ct.ptg.delv.pcpm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Campo de Besteiros',
    'contacto': 'ct.vis.dscd.pcbt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Canas de Senhorim',
    'contacto': 'ct.vis.dmgl.pcns@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Canedo',
    'contacto': 'ct.avr.dsmf.pcnd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Canelas',
    'contacto': 'ct.prt.dvng.pcnl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Canha',
    'contacto': 'ct.stb.dplm.pcnh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cantanhede',
    'contacto': 'ct.cbr.dcnt.pcnt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Caramulo',
    'contacto': 'ct.vis.dscd.pcrm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Caria',
    'contacto': 'ct.ctb.dcvl.pcar@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Carrazeda de Ansiães',
    'contacto': 'ct.bgc.dmdl.pcrz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Carrazedo de Montenegro',
    'contacto': 'ct.vrl.dchv.pczm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Carregal do Sal',
    'contacto': 'ct.vis.dscd.pcrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cartaxo',
    'contacto': 'ct.str.dstr.pctx@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Carvalhos',
    'contacto': 'ct.prt.dvng.pcrv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Carvoeiro',
    'contacto': 'ct.far.dslv.pcrv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Casa Branca',
    'contacto': 'ct.ptg.dpsr.pcsb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castanheira de Pêra',
    'contacto': 'ct.lra.dpbl.pctp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castanheira do Ribatejo',
    'contacto': 'ct.lsb.dvfx.pctr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castelo Branco',
    'contacto': 'ct.ctb.dctb.pctb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castelo de Paiva',
    'contacto': 'ct.avr.doaz.pctp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castelo de Vide',
    'contacto': 'ct.ptg.dnis.pctv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castro Daire',
    'contacto': 'ct.vis.dvis.pctd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castro Marim',
    'contacto': 'ct.far.dtvr.pctm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Castro Verde',
    'contacto': 'ct.bja.dadv.pctv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cebolais de Cima',
    'contacto': 'ct.ctb.dctb.pcbc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Celorico da Beira',
    'contacto': 'ct.grd.dgva.pclb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Celorico de Basto',
    'contacto': 'ct.brg.dfaf.pclb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cercal',
    'contacto': 'ct.stb.dstc.pcrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cernache do Bonjardim',
    'contacto': 'ct.ctb.dsrt.pcnb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cerva',
    'contacto': 'ct.vrl.dvrl.pcrv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cesar',
    'contacto': 'ct.avr.doaz.pcsr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Chamusca',
    'contacto': 'ct.str.dtnv.pchm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Chaves',
    'contacto': 'ct.vrl.dchv.pchv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cinfães',
    'contacto': 'ct.vis.dlmg.pcin@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Colares',
    'contacto': 'ct.lsb.dsnt.pclr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Colos',
    'contacto': 'ct.bja.dodm.pcls@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Comporta',
    'contacto': 'ct.stb.dgdl.pcmp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Condeixa-A-Nova',
    'contacto': 'ct.cbr.dcbr.pcdn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Constância',
    'contacto': 'ct.str.dabt.pcst@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Coruche',
    'contacto': 'ct.str.dcch.pcch@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Couço',
    'contacto': 'ct.str.dcch.pcoc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Crato',
    'contacto': 'ct.ptg.dptg.pcrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cuba',
    'contacto': 'ct.bja.dbja.pcub@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Cucujães',
    'contacto': 'ct.avr.doaz.pccj@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Elvas',
    'contacto': 'ct.ptg.delv.pelv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ericeira',
    'contacto': 'ct.lsb.dmfr.perc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ermidas do Sado',
    'contacto': 'ct.stb.dstc.pers@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ervidel',
    'contacto': 'ct.bja.dajt.pevd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Escoural',
    'contacto': 'ct.evr.dmmn.pecr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Esmoriz',
    'contacto': 'ct.avr.dovr.pesm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Esposende',
    'contacto': 'ct.brg.dbcl.pesp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Estarreja',
    'contacto': 'ct.avr.dovr.petr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Estremoz',
    'contacto': 'ct.evr.detz.petz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Faro',
    'contacto': 'ct.far.dfar.pfar@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Felgueiras',
    'contacto': 'ct.prt.dflg.pflg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Fernão Ferro',
    'contacto': 'ct.stb.dalm.pfrf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ferreira do Alentejo',
    'contacto': 'ct.bja.dajt.pfra@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ferreira do Zêzere',
    'contacto': 'ct.str.dtmr.pfrz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Figueira de Castelo Rodrigo',
    'contacto': 'ct.grd.dvfm.pfcr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Figueiró dos Vinhos',
    'contacto': 'ct.lra.dpbl.pfgv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Fornos de Algodres',
    'contacto': 'ct.grd.dgva.pfna@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Freamunde',
    'contacto': 'ct.prt.dflg.pfrm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Freixedas',
    'contacto': 'ct.grd.dpnh.pfxd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Freixo de Espada À Cinta',
    'contacto': 'ct.bgc.dtmc.pfec@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Freixo de Numão',
    'contacto': 'ct.grd.dpnh.pfxn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Fronteira',
    'contacto': 'ct.ptg.dptg.pfrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Fundão',
    'contacto': 'ct.ctb.dfnd.pfnd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Fátima',
    'contacto': 'ct.str.dtmr.pftm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Fânzeres',
    'contacto': 'ct.prt.dvng.pfnz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Gafanha da Nazaré',
    'contacto': 'ct.avr.davr.pgfn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Galveias',
    'contacto': 'ct.ptg.dpsr.pglv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Garvão',
    'contacto': 'ct.bja.dajt.pgrv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Gavião',
    'contacto': 'ct.ptg.dnis.pgav@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Gerês',
    'contacto': 'ct.brg.dpvl.pgrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Golegã',
    'contacto': 'ct.str.dtnv.pglg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Gonçalo',
    'contacto': 'ct.grd.dgrd.pgnl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Gouveia',
    'contacto': 'ct.grd.dgva.pgva@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Granja',
    'contacto': 'ct.evr.drgm.grj@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Grândola',
    'contacto': 'ct.stb.dgdl.pgdl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Guarda',
    'contacto': 'ct.grd.dgrd.pgrd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Guia',
    'contacto': 'ct.lra.dpbl.pgui@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Guimarães (S. Torcato)',
    'contacto': 'ct.brg.dgmr.pgmr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Gáfete',
    'contacto': 'ct.ptg.dptg.pgft@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Góis',
    'contacto': 'ct.cbr.darg.pgois@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Idanha-A-Nova',
    'contacto': 'ct.ctb.didn.pidn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Izeda',
    'contacto': 'ct.bgc.dbgc.pizd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Joane',
    'contacto': 'ct.brg.dvnf.pjoa@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ladoeiro',
    'contacto': 'ct.ctb.didn.pldr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lagoa',
    'contacto': 'ct.far.dslv.plag@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lagos',
    'contacto': 'ct.far.dptm.plgs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lamego',
    'contacto': 'ct.vis.dlmg.plmg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lanheses',
    'contacto': 'ct.vct.dvct.plnh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lavre',
    'contacto': 'ct.evr.dmmn.plvr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lebução',
    'contacto': 'ct.vrl.dchv.plbc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Leiria',
    'contacto': 'ct.lra.dlra.plra@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lever',
    'contacto': 'ct.prt.dvng.plvr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Livramento',
    'contacto': 'ct.lsb.dmfr.plvm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lordelo',
    'contacto': 'ct.brg.dgmr.plrd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lordelo',
    'contacto': 'ct.prt.dpnf.plrd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Loriga',
    'contacto': 'ct.grd.dsei.plrg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Loulé',
    'contacto': 'ct.far.dlle.plle@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lourinhã',
    'contacto': 'ct.lsb.dtvd.plrn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lourosa',
    'contacto': 'ct.avr.dsmf.plrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lousada',
    'contacto': 'ct.prt.dflg.plsd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Lousã',
    'contacto': 'ct.cbr.dlsa.plsa@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Macedo de Cavaleiros',
    'contacto': 'ct.bgc.dbgc.pmcc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mafra',
    'contacto': 'ct.lsb.dmfr.pmfr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Maia',
    'contacto': 'ct.prt.dmts.pmai@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Maiorca',
    'contacto': 'ct.cbr.dmtv.pmrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Malpica do Tejo',
    'contacto': 'ct.ctb.dctb.pmpt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Malveira',
    'contacto': 'ct.lsb.dmfr.pmlv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mangualde',
    'contacto': 'ct.vis.dmgl.pmgl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Manteigas',
    'contacto': 'ct.grd.dsei.pmtg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Marco de Canaveses',
    'contacto': 'ct.prt.damt.pmcn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Marinhais',
    'contacto': 'ct.str.dcch.pmrn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Martinlongo',
    'contacto': 'ct.far.dtvr.pmrl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Marvão',
    'contacto': 'ct.ptg.dnis.pmrv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mata',
    'contacto': 'ct.ctb.dctb.pmat@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Matosinhos',
    'contacto': 'ct.prt.dmts.pmts@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mação',
    'contacto': 'ct.str.dabt.pmac@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mealhada',
    'contacto': 'ct.avr.dand.pmlh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Medas',
    'contacto': 'ct.prt.dvng.pmds@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Melgaço',
    'contacto': 'ct.vct.dvln.pmlg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Merceana',
    'contacto': 'ct.lsb.dalq.pmrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mesão Frio',
    'contacto': 'ct.vrl.dprg.pmsf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mina de São Domingos',
    'contacto': 'ct.bja.dadv.pmsd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mira de Aire',
    'contacto': 'ct.lra.dlra.pmrd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mira',
    'contacto': 'ct.cbr.dcnt.pmir@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Miranda do Corvo',
    'contacto': 'ct.cbr.dlsa.pmrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Miranda do Douro',
    'contacto': 'ct.bgc.dmdr.pmdr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mirandela',
    'contacto': 'ct.bgc.dmdl.pmdl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Miuzela',
    'contacto': 'ct.grd.dvfm.pmzl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mogadouro',
    'contacto': 'ct.bgc.dmdr.pmgd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Moimenta da Beira',
    'contacto': 'ct.vis.dmbr.pmbr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Moita de Ferreiros',
    'contacto': 'ct.lsb.dtvd.pmtf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Moita',
    'contacto': 'ct.stb.dmtj.pmoi@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Monchique',
    'contacto': 'ct.far.dptm.pmcq@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mondim de Basto',
    'contacto': 'ct.vrl.dvrl.pmdb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Monforte',
    'contacto': 'ct.ptg.delv.pmnf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Monsanto',
    'contacto': 'ct.ctb.didn.pmst@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Montalegre',
    'contacto': 'ct.vrl.dchv.pmnt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Montargil',
    'contacto': 'ct.ptg.dpsr.pmtg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Monte Real',
    'contacto': 'ct.lra.dlra.pmtr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Monte Redondo',
    'contacto': 'ct.lra.dlra.pmrdn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Montemor-O-Novo',
    'contacto': 'ct.evr.dmmn.pmmn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Montemor-O-Velho',
    'contacto': 'ct.cbr.dmtv.pmtv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Montijo',
    'contacto': 'ct.stb.dmtj.pmtj@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Monção',
    'contacto': 'ct.vct.dvln.pmnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mora',
    'contacto': 'ct.evr.detz.pmor@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Morais',
    'contacto': 'ct.bgc.dbgc.pmrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mortágua',
    'contacto': 'ct.vis.dscd.pmrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Moura',
    'contacto': 'ct.bja.dmra.pmra@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mourão',
    'contacto': 'ct.evr.drgm.pmou@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Murtosa',
    'contacto': 'ct.avr.dovr.pmrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Murça',
    'contacto': 'ct.vrl.dvrl.pmrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mértola',
    'contacto': 'ct.bja.dadv.pmrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Mêda',
    'contacto': 'ct.grd.dpnh.pmed@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Nelas',
    'contacto': 'ct.vis.dmgl.pnel@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Nisa',
    'contacto': 'ct.ptg.dnis.pnis@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Odeceixe',
    'contacto': 'ct.far.dptm.podc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Odemira',
    'contacto': 'ct.bja.dodm.podm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Oleiros',
    'contacto': 'ct.ctb.dsrt.polr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Olhos de Água',
    'contacto': 'ct.far.dabf.poda@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Olhão',
    'contacto': 'ct.far.dfar.polh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Oliveira de Azemeis',
    'contacto': 'ct.avr.doaz.poaz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Oliveira de Frades',
    'contacto': 'ct.vis.dvis.povf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Oliveira do Bairro',
    'contacto': 'ct.avr.dand.polv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Oliveira do Hospital',
    'contacto': 'ct.cbr.darg.povh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ourique',
    'contacto': 'ct.bja.dajt.porq@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ourém',
    'contacto': 'ct.str.dtmr.pour@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ovar',
    'contacto': 'ct.avr.dovr.povr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paderne',
    'contacto': 'ct.far.dabf.ppdr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paio Pires',
    'contacto': 'ct.stb.dalm.pppr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paião',
    'contacto': 'ct.cbr.dmtv.ppai@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Palmela',
    'contacto': 'ct.stb.dplm.pplm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pampilhosa da Serra',
    'contacto': 'ct.cbr.darg.ppms@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paranhos da Beira',
    'contacto': 'ct.grd.dsei.pprb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paredes de Coura',
    'contacto': 'ct.vct.davv.ppdc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paredes',
    'contacto': 'ct.prt.dpnf.pprd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pataias',
    'contacto': 'ct.lra.dalb.ppat@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paul',
    'contacto': 'ct.ctb.dcvl.ppaul@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pavia',
    'contacto': 'ct.evr.detz.ppav@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paço de Sousa',
    'contacto': 'ct.prt.dpnf.ppcs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Paços de Ferreira',
    'contacto': 'ct.prt.dflg.ppcf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pedras Salgadas',
    'contacto': 'ct.vrl.dvrl.ppds@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pedrógão Grande',
    'contacto': 'ct.lra.dpbl.ppdg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Penacova',
    'contacto': 'ct.cbr.dcbr.ppnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Penafiel',
    'contacto': 'ct.prt.dpnf.ppnf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Penalva do Castelo',
    'contacto': 'ct.vis.dmgl.ppnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Penamacor',
    'contacto': 'ct.ctb.dfnd.ppnm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Penedono',
    'contacto': 'ct.vis.dmbr.ppnd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Penela',
    'contacto': 'ct.cbr.dlsa.ppnl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Peniche',
    'contacto': 'ct.lra.dclr.ppnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pernes',
    'contacto': 'ct.str.dstr.pprn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Peso da Régua',
    'contacto': 'ct.vrl.dprg.pprg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pias',
    'contacto': 'ct.bja.dmra.ppas@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pinhal Novo',
    'contacto': 'ct.stb.dplm.ppnn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pinhel',
    'contacto': 'ct.grd.dpnh.ppnh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pinhão',
    'contacto': 'ct.vrl.dprg.ppnh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pinzio',
    'contacto': 'ct.grd.dgrd.ppnz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Poceirão',
    'contacto': 'ct.stb.dplm.ppcr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pombal',
    'contacto': 'ct.lra.dpbl.ppbl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ponta Delgada (São Miguel)',
    'contacto': 'ct.acr.dpdl.ppdl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ponte da Barca',
    'contacto': 'ct.vct.davv.ppnb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ponte de Lima',
    'contacto': 'ct.vct.davv.ppnl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ponte de Sor',
    'contacto': 'ct.ptg.dpsr.psr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Portalegre',
    'contacto': 'ct.ptg.dptg.pptg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Portel',
    'contacto': 'ct.evr.devr.pprt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Portimão',
    'contacto': 'ct.far.dptm.pptm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Porto Santo',
    'contacto': 'ct.mad.dfun.ppst@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Porto de Mós',
    'contacto': 'ct.lra.dlra.ppdm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Prado',
    'contacto': 'ct.brg.dbrg.pprd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Praia de Mira',
    'contacto': 'ct.cbr.dcnt.pprm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Praia de Quiaios',
    'contacto': 'ct.cbr.dmtv.pqui@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Proença-A-Nova',
    'contacto': 'ct.ctb.dsrt.pprn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Pêro Pinheiro',
    'contacto': 'ct.lsb.dsnt.pprp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Póvoa de Lanhoso',
    'contacto': 'ct.brg.dpvl.ppvl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Póvoa de Varzim',
    'contacto': 'ct.prt.dmts.ppvz@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Quinta do Conde',
    'contacto': 'ct.stb.dstb.pqdc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Rebordelo',
    'contacto': 'ct.bgc.dbgc.prbd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Redondo',
    'contacto': 'ct.evr.devr.prdd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Reguengos de Monsaraz',
    'contacto': 'ct.evr.drgm.prgm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Resende',
    'contacto': 'ct.vis.dlmg.prsd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Riba de Ave',
    'contacto': 'ct.brg.dvnf.prda@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ribeira de Pena',
    'contacto': 'ct.vrl.dvrl.prbp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Rio Maior',
    'contacto': 'ct.str.dstr.prmr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Rosmaninhal',
    'contacto': 'ct.ctb.didn.prsm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Rossas',
    'contacto': 'ct.brg.dpvl.prss@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ruílhe',
    'contacto': 'ct.brg.dbrg.prlh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sabrosa',
    'contacto': 'ct.vrl.dprg.psbr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sabugal',
    'contacto': 'ct.grd.dgrd.psbg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sabóia',
    'contacto': 'ct.bja.dodm.psba@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Safara',
    'contacto': 'ct.bja.dmra.psfa@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Salir',
    'contacto': 'ct.far.dlle.pslr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Salvada',
    'contacto': 'ct.bja.dbja.pslv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Salvaterra de Magos',
    'contacto': 'ct.str.dcch.psmg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sameiro',
    'contacto': 'ct.brg.dbrg.psmr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Samora Correia',
    'contacto': 'ct.str.dcch.psmc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sangalhos',
    'contacto': 'ct.avr.dand.psng@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Comba Dão',
    'contacto': 'ct.vis.dscd.pscd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Cruz das Flores',
    'contacto': 'ct.acr.dhrt.pscf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Cruz',
    'contacto': 'ct.lsb.dtvd.pstc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Eulália',
    'contacto': 'ct.ptg.delv.pste@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Maria da Feira',
    'contacto': 'ct.avr.dsmf.psmf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Maria de Lamas',
    'contacto': 'ct.avr.dsmf.psml@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santa Marta de Penaguião',
    'contacto': 'ct.vrl.dprg.psmp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santarém',
    'contacto': 'ct.str.dstr.pastr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santiago Maior',
    'contacto': 'ct.evr.drgm.psrm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santiago do Cacém',
    'contacto': 'ct.stb.dstc.pstc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santo Aleixo da Restauração',
    'contacto': 'ct.bja.dmra.psar@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santo André',
    'contacto': 'ct.stb.dstc.psta@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santo António da Charneca',
    'contacto': 'ct.stb.dmtj.psac@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santo António das Areias',
    'contacto': 'ct.ptg.dnis.psaa@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Santo Tirso',
    'contacto': 'ct.prt.dsts.psts@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sardoal',
    'contacto': 'ct.str.dabt.psrd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Seia',
    'contacto': 'ct.grd.dsei.psei@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sendim',
    'contacto': 'ct.bgc.dmdr.psnd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sernancelhe',
    'contacto': 'ct.vis.dmbr.psnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Serpa',
    'contacto': 'ct.bja.dmra.psrp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sertã',
    'contacto': 'ct.ctb.dsrt.psrt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sesimbra',
    'contacto': 'ct.stb.dstb.pssb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Setúbal',
    'contacto': 'ct.stb.dstb.pstb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sever do Vouga',
    'contacto': 'ct.avr.dagd.psvv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Silvares',
    'contacto': 'ct.ctb.dfnd.psvr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Silves',
    'contacto': 'ct.far.dslv.pslv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sines',
    'contacto': 'ct.stb.dstc.psin@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Soalheira',
    'contacto': 'ct.ctb.dfnd.pslr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sobral da Adiça',
    'contacto': 'ct.bja.dmra.psba@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sobral de Monte Agraço',
    'contacto': 'ct.lsb.dtvd.psma@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Soito',
    'contacto': 'ct.grd.dvfm.psot@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Soure',
    'contacto': 'ct.cbr.dmtv.psor@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sousel',
    'contacto': 'ct.ptg.dpsr.pssl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Souselas',
    'contacto': 'ct.cbr.dcbr.pssl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Souselo',
    'contacto': 'ct.vis.dlmg.pssl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Sátão',
    'contacto': 'ct.vis.dmgl.psat@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Bartolomeu de Messines',
    'contacto': 'ct.far.dslv.psbm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Brás de Alportel',
    'contacto': 'ct.far.dfar.psba@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Cristóvão',
    'contacto': 'ct.evr.dmmn.psct@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São João da Pesqueira',
    'contacto': 'ct.vis.dmbr.psjp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Julião do Freixo',
    'contacto': 'ct.vct.davv.psjf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Julião do Tojal',
    'contacto': 'ct.lsb.dvfx.psjt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Luís',
    'contacto': 'ct.bja.dodm.psls@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Manços',
    'contacto': 'ct.evr.devr.pmnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Martinho do Porto',
    'contacto': 'ct.lra.dalb.psmp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Miguel de Machede',
    'contacto': 'ct.evr.devr.psmm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Pedro de Moel',
    'contacto': 'ct.lra.dlra.pspm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Pedro do Sul',
    'contacto': 'ct.vis.dvis.psps@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Romão',
    'contacto': 'ct.evr.drgm.psrm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Roque do Pico (Pico)',
    'contacto': 'ct.acr.dhrt.psrp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Teotónio',
    'contacto': 'ct.bja.dodm.pstt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Vicente da Beira',
    'contacto': 'ct.ctb.dctb.psvb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Vicente',
    'contacto': 'ct.mad.dfun.psvc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de São Vicente',
    'contacto': 'ct.prt.dpnf.psvc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tabuaço',
    'contacto': 'ct.vis.dmbr.ptbc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tangil',
    'contacto': 'ct.vct.dvln.ptng@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tarouca',
    'contacto': 'ct.vis.dlmg.ptrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Taveiro',
    'contacto': 'ct.cbr.dcbr.ptvr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tavira',
    'contacto': 'ct.far.dtvr.ptvr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Teixoso',
    'contacto': 'ct.ctb.dcvl.ptxs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Telheiro',
    'contacto': 'ct.evr.drgm.ptlr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Termas de Monfortinho',
    'contacto': 'ct.ctb.didn.pmft@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Terras de Bouro',
    'contacto': 'ct.brg.dpvl.ptrb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tinalhas',
    'contacto': 'ct.ctb.dctb.ptnl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tocha',
    'contacto': 'ct.cbr.dcnt.ptch@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tomar',
    'contacto': 'ct.str.dtmr.ptmr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tondela',
    'contacto': 'ct.vis.dscd.ptnd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Torre de Dona Chama',
    'contacto': 'ct.bgc.dmdl.ptrc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Torre de Moncorvo',
    'contacto': 'ct.bgc.dtmc.ptmc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Torres Novas',
    'contacto': 'ct.str.dtnv.ptnv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Torres Vedras',
    'contacto': 'ct.lsb.dtvd.ptvd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Torrão',
    'contacto': 'ct.stb.dgdl.ptrr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tortosendo',
    'contacto': 'ct.ctb.dcvl.ptts@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Trafaria',
    'contacto': 'ct.stb.dalm.ptrf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tramagal',
    'contacto': 'ct.str.dabt.ptmg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Trancoso',
    'contacto': 'ct.grd.dpnh.ptrn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Trofa',
    'contacto': 'ct.prt.dsts.ptrf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tróia',
    'contacto': 'ct.stb.dgdl.ptro@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Tábua',
    'contacto': 'ct.cbr.darg.ptab@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Unhais da Serra',
    'contacto': 'ct.ctb.dcvl.puns@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vagos',
    'contacto': 'ct.avr.davr.pvgs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Valado dos Frades',
    'contacto': 'ct.lra.dalb.pvlf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vale de Cambra',
    'contacto': 'ct.avr.doaz.pvlc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Valença',
    'contacto': 'ct.vct.dvln.pvln@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Valongo',
    'contacto': 'ct.prt.dsts.pvlg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Valpaços',
    'contacto': 'ct.vrl.dchv.pvlp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Veiros',
    'contacto': 'ct.evr.detz.pvrs@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Venda Nova',
    'contacto': 'ct.vrl.dchv.pvdn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vendas Novas',
    'contacto': 'ct.evr.dmmn.pvdn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vialonga',
    'contacto': 'ct.lsb.dvfx.pvlg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Viana do Alentejo',
    'contacto': 'ct.evr.dmmn.pvna@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Viana do Castelo',
    'contacto': 'ct.vct.dvct.pvct@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vidago',
    'contacto': 'ct.vrl.dchv.pvdg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vidigueira',
    'contacto': 'ct.bja.dbja.pvdg@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vieira de Leiria',
    'contacto': 'ct.lra.dlra.pvlr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vieira do Minho',
    'contacto': 'ct.brg.dpvl.pvrm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Alva',
    'contacto': 'ct.bja.dbja.pcub@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Boim',
    'contacto': 'ct.ptg.delv.pvlb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Cova de Lixa',
    'contacto': 'ct.prt.dflg.pvcl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Flor',
    'contacto': 'ct.bgc.dmdl.pvlf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Franca das Naves',
    'contacto': 'ct.grd.dpnh.pvfn@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Meã',
    'contacto': 'ct.prt.damt.pvlm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova Famalicão',
    'contacto': 'ct.brg.dvnf.pvnf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova da Barquinha',
    'contacto': 'ct.str.dtnv.pvnb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de Cerveira',
    'contacto': 'ct.vct.dvln.pvnc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de Foz Côa',
    'contacto': 'ct.grd.dpnh.pvnf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de Milfontes',
    'contacto': 'ct.bja.dodm.pvnm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de Paiva',
    'contacto': 'ct.vis.dmbr.pvnp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de Poiares',
    'contacto': 'ct.cbr.dlsa.pvnp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de São Bento',
    'contacto': 'ct.bja.dmra.pvnb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Nova de Tazem',
    'contacto': 'ct.grd.dgva.pvnt@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Pouca de Aguiar',
    'contacto': 'ct.vrl.dvrl.pvpa@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Praia de Âncora',
    'contacto': 'ct.vct.dvct.pvpa@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Real de Santo António',
    'contacto': 'ct.far.dtvr.pvra@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Real',
    'contacto': 'ct.vrl.dvrl.pvrl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Velha de Ródão',
    'contacto': 'ct.ctb.dctb.pvvr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Verde de Ficalho',
    'contacto': 'ct.bja.dmra.pvvf@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Verde',
    'contacto': 'ct.brg.dbrg.pvlv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila Viçosa',
    'contacto': 'ct.evr.drgm.pvlv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila das Aves',
    'contacto': 'ct.prt.dsts.pvla@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila de Rei',
    'contacto': 'ct.ctb.dsrt.pvlr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila do Bispo',
    'contacto': 'ct.far.dptm.pvlb@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila do Conde',
    'contacto': 'ct.prt.dmts.pvlc@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vila do Porto (Santa Maria)',
    'contacto': 'ct.acr.dpdl.pvlp@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vilamoura',
    'contacto': 'ct.far.dlle.pvlm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vilar Formoso',
    'contacto': 'ct.grd.dvfm.pvfm@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vimieiro',
    'contacto': 'ct.evr.detz.pvmr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vimioso',
    'contacto': 'ct.bgc.dmdr.pvms@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vinhais',
    'contacto': 'ct.bgc.dbgc.pvnh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Viseu',
    'contacto': 'ct.vis.dvis.pvis@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vizela',
    'contacto': 'ct.brg.dgmr.pvzl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Vouzela',
    'contacto': 'ct.vis.dvis.pvzl@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Zebreira',
    'contacto': 'ct.ctb.didn.pzbr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Águeda',
    'contacto': 'ct.avr.dagd.pagd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Évora',
    'contacto': 'ct.evr.devr.pevr@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Ílhavo',
    'contacto': 'ct.avr.davr.pilh@gnr.pt'
  },
  {
    'nome': 'Posto Territorial de Óbidos',
    'contacto': 'ct.lra.dclr.pobd@gnr.pt'
  },
  {
    'nome': 'Posto Territorial do Corvo',
    'contacto': 'ct.acr.dhrt.pcrv@gnr.pt'
  },
  {
    'nome': 'Posto Territorial do Funchal',
    'contacto': 'ct.mad.dfun.pfun@gnr.pt'
  },
  {
    'nome': 'Posto de Transito de Chaves',
    'contacto': 'ct.vrl.tvrl.tchv@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito da Figueira da Foz (Mealhada)',
    'contacto': 'ct.cbr.tcbr.tfgf@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Abrantes',
    'contacto': 'ct.str.tstr.tabt@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Coina',
    'contacto': 'ct.stb.tstb.tcoi@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Estremoz',
    'contacto': 'ct.evr.tevr.tetz@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Fafe',
    'contacto': 'ct.brg.tbrg.tfaf@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Grândola',
    'contacto': 'ct.stb.tstb.tgdl@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Maia',
    'contacto': 'ct.prt.tprt.tmai@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Ourique',
    'contacto': 'ct.bja.tbja.torq@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Ponte de Lima',
    'contacto': 'ct.vct.tvct.tpnl@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Salvaterra de Magos',
    'contacto': 'ct.str.tstr.tsmg@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Santa Maria da Feira',
    'contacto': 'ct.avr.tsjm.tsmf@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Tavira',
    'contacto': 'ct.far.tfar.ttvr@gnr.pt'
  },
  {
    'nome': 'Posto de Trânsito de Vendas Novas',
    'contacto': 'ct.evr.tevr.tvnd@gnr.pt'
  },
  {
    'nome': 'Revista da Guarda',
    'contacto': 'revista@gnr.pt'
  },
  {
    'nome': 'Secretaria-Geral da Guarda',
    'contacto': 'cg.sg@gnr.pt'
  },
  {
    'nome': 'Sepna Ct Vila Real',
    'contacto': 'ct.dvrl.npa@gnr.pt'
  },
  {
    'nome': 'Serviço de Assistência Religiosa',
    'contacto': 'cari.sar@gnr.pt'
  },
  {
    'nome': 'Serviços Sociais da GNR',
    'contacto': 'ssgnr@ssgnr.pt'
  },
  {
    'nome': 'Subdestacamento Territorial de Quarteira',
    'contacto': 'ct.far.dlle.pqrt@gnr.pt'
  },
  {
    'nome': 'Subdestacamento Territorial de Alcabideche',
    'contacto': 'ct.lsb.dsnt.sdacb@gnr.pt'
  },
  {
    'nome': 'Subdestacamento Territorial de Fafe',
    'contacto': 'ct.brg.dfaf.pfaf@gnr.pt'
  },
  {
    'nome': 'Subdestacamento Territorial de Sintra',
    'contacto': 'ct.lsb.dsnt.sdsnt@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro da Figueira da Foz',
    'contacto': 'ucc.dfgf.sdfgf@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro da Fonte da Telha',
    'contacto': 'ucc.dlsb.sdftt@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro da Nazaré',
    'contacto': 'ucc.dfgf.sdnzr@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Aljezur',
    'contacto': 'ucc.dsin.sdajz@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Aveiro',
    'contacto': 'ucc.dfgf.sdavr@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Caminha',
    'contacto': 'ucc.dmts.sdcmn@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Esposende',
    'contacto': 'ucc.dmts.sdesp@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Lisboa',
    'contacto': 'ucc.dlsb.sdlsb@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Matosinhos',
    'contacto': 'ucc.dmts.sdmts@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Olhão',
    'contacto': 'ucc.dolh.sdolh@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Peniche',
    'contacto': 'ucc.dlsb.sdpnc@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Portimão',
    'contacto': 'ucc.dolh.sdptm@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Setúbal',
    'contacto': 'ucc.dlsb.sdstb@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Sines',
    'contacto': 'ucc.dsin.sdsin@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Vila Nova de Milfontes',
    'contacto': 'ucc.dsin.sdvnm@gnr.pt'
  },
  {
    'nome': 'Subdestacamento de Controlo Costeiro de Vila Real de St António',
    'contacto': 'ucc.dolh.sdvra@gnr.pt'
  },
  {
    'nome': 'Unidade Nacional de Trânsito',
    'contacto': 'unt@gnr.pt'
  },
  {
    'nome': 'Unidade de Apoio Geral',
    'contacto': 'cari.uag@gnr.pt'
  },
  {
    'nome': 'Unidade de Ação Fiscal',
    'contacto': 'uaf@gnr.pt'
  },
  {
    'nome': 'Unidade de Controlo Costeiro',
    'contacto': 'ucc@gnr.pt'
  },
  {
    'nome': 'Unidade de Intervenção',
    'contacto': 'ui@gnr.pt'
  },
  {
    'nome': 'Unidade de Segurança e Honras de Estado',
    'contacto': 'ushe@gnr.pt'
  }
]

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

app.contacts.PSP_Contacts = [
  {
    'nome': '1.ª Divisão Policial - Porto',
    'contacto': '1div.porto@psp.pt'
  },
  {
    'nome': '1.ª Divisão Policial - Lisboa',
    'contacto': '1div.lisboa@psp.pt'
  },
  {
    'nome': '3.ª Divisão Policial - Porto',
    'contacto': '3div.porto@psp.pt'
  },
  {
    'nome': 'Abrantes - Esquadra',
    'contacto': 'stresqabt@psp.pt'
  },
  {
    'nome': 'Comando Regional dos Açores',
    'contacto': 'cracores@psp.pt'
  },
  {
    'nome': 'Afurada - Vila Nova de Gaia - Esquadra',
    'contacto': 'afurada.porto@psp.pt'
  },
  {
    'nome': 'Alcobaça - Esquadra',
    'contacto': 'alcobaca.leiria@psp.pt'
  },
  {
    'nome': 'Alhandra - Vila Franca de Xira - 92.ª Esquadra Lx',
    'contacto': 'alhandra.lisboa@psp.pt'
  },
  {
    'nome': 'Almada - Divisão Policial',
    'contacto': 'divalmada.setubal@psp.pt'
  },
  {
    'nome': 'Almada - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'divalmada.setubal@psp.pt'
  },
  {
    'nome': 'Almada - Esquadra de Trânsito',
    'contacto': 'divalmada.setubal@psp.pt'
  },
  {
    'nome': 'Alta de Lisboa - Divisão de Trânsito',
    'contacto': 'dt.lisboa@psp.pt'
  },
  {
    'nome': 'Alta de Lisboa - Trânsito - Esquadra Moto',
    'contacto': 'esqmotodt.lisboa@psp.pt'
  },
  {
    'nome': 'Alta de Lisboa - Trânsito - Esquadra de Fiscalização Tecnica',
    'contacto': 'eftecnicadt.lisboa@psp.pt'
  },
  {
    'nome': 'Alverca do Ribatejo - Vila Franca de Xira - 91.ª Esquadra Lx',
    'contacto': 'alverca.lisboa@psp.pt'
  },
  {
    'nome': 'Amadora - Divisão Policial',
    'contacto': 'divamadora.lisboa@psp.pt'
  },
  {
    'nome': 'Amadora - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'eicamadora.lisboa@psp.pt'
  },
  {
    'nome': 'Angra do Heroismo - Divisão Policial',
    'contacto': 'cpangra@psp.pt'
  },
  {
    'nome': 'Aveiro - Comando Distrital',
    'contacto': 'cpaveiro@psp.pt'
  },
  {
    'nome': 'Aveiro - Esquadra de Trânsito',
    'contacto': 'esqtr.aveiro@psp.pt'
  },
  {
    'nome': 'Açores - Comando Regional',
    'contacto': 'cracores@psp.pt'
  },
  {
    'nome': 'Baixa da Banheira - Esquadra',
    'contacto': 'baixadabanheira.setubal@psp.pt'
  },
  {
    'nome': 'Barcelos - Esquadra',
    'contacto': 'barcelos.braga@psp.pt'
  },
  {
    'nome': 'Barreiro - 5.ª Esquadra',
    'contacto': 'stb5esq@psp.pt'
  },
  {
    'nome': 'Barreiro - Divisão Policial',
    'contacto': 'noi.barreiro@psp.pt'
  },
  {
    'nome': 'Barreiro - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'stbeifpbarreiro@psp.pt'
  },
  {
    'nome': 'Barreiro - Esquadra de Trânsito',
    'contacto': 'stbesqtrabrr@psp.pt'
  },
  {
    'nome': 'Beja - Comando Distrital',
    'contacto': 'cpbeja@psp.pt'
  },
  {
    'nome': 'Beja - Esquadra',
    'contacto': 'esquadrasede.beja@psp.pt'
  },
  {
    'nome': 'Beja - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'eifp.beja@psp.pt'
  },
  {
    'nome': 'Beja - Esquadra de Trânsito',
    'contacto': 'etr.beja@psp.pt'
  },
  {
    'nome': 'Bela Vista - Setúbal - 2.ª Esquadra',
    'contacto': 'stb2esq@psp.pt'
  },
  {
    'nome': 'Benfica - 3.ª Divisão Policial Lx',
    'contacto': '3div.lisboa@psp.pt'
  },
  {
    'nome': 'Braga - 1.ª Esquadra',
    'contacto': 'brg1esq@psp.pt'
  },
  {
    'nome': 'Braga - 2.ª Esquadra (Souto Mayor)',
    'contacto': 'brg2esq@psp.pt'
  },
  {
    'nome': 'Braga - Comando Distrital',
    'contacto': 'cpbraga@psp.pt'
  },
  {
    'nome': 'Braga - Divisão Policial',
    'contacto': 'divbrg.braga@psp.pt'
  },
  {
    'nome': 'Braga - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'eifp.braga@psp.pt'
  },
  {
    'nome': 'Braga - Esquadra de Trânsito (Souto Mayor)',
    'contacto': 'brgesqtr@psp.pt'
  },
  {
    'nome': 'Bragança - Comando Distrital',
    'contacto': 'cpbraganca@psp.pt'
  },
  {
    'nome': 'Bragança - Esquadra',
    'contacto': 'bgcesqsede@psp.pt'
  },
  {
    'nome': 'Bragança - Esquadra de Intervenção e Fiscalização',
    'contacto': 'eic.braganca@psp.pt'
  },
  {
    'nome': 'Brigada de Proteção Ambiental - Porto',
    'contacto': 'bripa.porto@psp.pt'
  },
  {
    'nome': 'Caldas da Rainha - Esquadra',
    'contacto': 'caldasdarainha.leiria@psp.pt'
  },
  {
    'nome': 'Calheta - Esquadra',
    'contacto': 'madesqcalheta@psp.pt'
  },
  {
    'nome': 'Calvário - 4.ª Divisão Policial Lx',
    'contacto': '4div.lisboa@psp.pt'
  },
  {
    'nome': 'Camacha - Posto de Polícia',
    'contacto': 'madesqcamacha@psp.pt'
  },
  {
    'nome': 'Canidelo - Vila Nova de Gaia - Esquadra',
    'contacto': 'canidelo.porto@psp.pt'
  },
  {
    'nome': 'Cartaxo - Esquadra',
    'contacto': 'stresqctx@psp.pt'
  },
  {
    'nome': 'Casal de Cambra - Sintra - 86.ª Esquadra Lx',
    'contacto': 'casaldecambra.lisboa@psp.pt'
  },
  {
    'nome': 'Cascais - Divisão Policial',
    'contacto': 'divcascais.lisboa@psp.pt'
  },
  {
    'nome': 'Cascais - Esquadra de Trânsito',
    'contacto': 'div.cascais.lisboa@psp.pt'
  },
  {
    'nome': 'Cascais - Esquadra de Turismo',
    'contacto': 'lsbcscetur@psp.pt'
  },
  {
    'nome': 'Castelo Branco - Comando Distrital',
    'contacto': 'cpcbranco@psp.pt'
  },
  {
    'nome': 'Castelo Branco - Esquadra',
    'contacto': 'ctbesqsede@psp.pt'
  },
  {
    'nome': 'Centro de Inativação de Explosivos e Segurança Em Subsolo',
    'contacto': 'ciexss@psp.pt'
  },
  {
    'nome': 'Chaves - Divisão Policial',
    'contacto': 'vrlsecchv@psp.pt'
  },
  {
    'nome': 'Chaves - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'vrlsecchv@psp.pt'
  },
  {
    'nome': 'Chaves - Esquadra de Trânsito',
    'contacto': 'vrlsecchv@psp.pt'
  },
  {
    'nome': 'Coimbra - 1.ª Esquadra',
    'contacto': 'cbr1esq@psp.pt'
  },
  {
    'nome': 'Coimbra - 2.ª Esquadra',
    'contacto': 'cbr2esq@psp.pt'
  },
  {
    'nome': 'Coimbra - Comando Distrital',
    'contacto': 'cpcoimbra@psp.pt'
  },
  {
    'nome': 'Corpo de Intervenção',
    'contacto': 'ci@psp.pt'
  },
  {
    'nome': 'Corpo de Segurança Pessoal',
    'contacto': 'csp@psp.pt'
  },
  {
    'nome': 'Corroios - Seixal - Esquadra',
    'contacto': 'corroios.setubal@psp.pt'
  },
  {
    'nome': 'Covilhã - Divisão Policial',
    'contacto': 'covilha.castelobranco@psp.pt'
  },
  {
    'nome': 'Covilhã - Esquadra',
    'contacto': 'covilha.castelobranco@psp.pt'
  },
  {
    'nome': 'Covilhã - Esquadra de Intervenção e Fiscalização',
    'contacto': 'covilha.castelobranco@psp.pt'
  },
  {
    'nome': 'Covilhã - Esquadra de Trânsito',
    'contacto': 'covilha.castelobranco@psp.pt'
  },
  {
    'nome': 'Cruz de Pau - Seixal - Esquadra',
    'contacto': 'cruzdepau.setubal@psp.pt'
  },
  {
    'nome': 'Custóias - Matosinhos - Esquadra',
    'contacto': 'custoias.porto@psp.pt'
  },
  {
    'nome': 'Câmara de Lobos - Esquadra',
    'contacto': 'madesqcamlobos@psp.pt'
  },
  {
    'nome': 'Direção Nacional da Polícia de Segurança Pública',
    'contacto': 'contacto@psp.pt'
  },
  {
    'nome': 'Direção Nacional da Psp - Departamento de Armas e Explosivos',
    'contacto': 'depaex@psp.pt'
  },
  {
    'nome': 'Direção Nacional da Psp - Recursos Humanos',
    'contacto': 'deprh@psp.pt'
  },
  {
    'nome': 'Direção Nacional da Psp - Relações Publicas',
    'contacto': 'contacto@psp.pt'
  },
  {
    'nome': 'Entroncamento - Esquadra',
    'contacto': 'stresqent@psp.pt'
  },
  {
    'nome': 'Ermesinde - Esquadra',
    'contacto': 'ermezinde.porto@psp.pt'
  },
  {
    'nome': 'Escola Pratica de Policia',
    'contacto': 'epp@psp.pt'
  },
  {
    'nome': 'Espinho - Divisão Policial',
    'contacto': 'espinho.aveiro@psp.pt'
  },
  {
    'nome': 'Espinho - Esquadra',
    'contacto': 'espinho.aveiro@psp.pt'
  },
  {
    'nome': 'Estoril - Cascais - 51.ª Esquadra Lx',
    'contacto': 'esquadrasecxxi@psp.pt'
  },
  {
    'nome': 'Estremoz - Esquadra',
    'contacto': 'evresqetz@psp.pt'
  },
  {
    'nome': 'Faro - Comando Distrital',
    'contacto': 'cpfaro@psp.pt'
  },
  {
    'nome': 'Faro - Divisão Policial',
    'contacto': 'div.faro@psp.pt'
  },
  {
    'nome': 'Figueira da Foz - Divisão Policial',
    'contacto': 'figueiradafoz.coimbra@psp.pt'
  },
  {
    'nome': 'Funchal - Esquadra',
    'contacto': 'funchal.madeira@psp.pt'
  },
  {
    'nome': 'Funchal - Esquadra de Trânsito',
    'contacto': 'crmadeira@psp.pt'
  },
  {
    'nome': 'Gondomar - Divisão Policial',
    'contacto': 'divgondomar.porto@psp.pt'
  },
  {
    'nome': 'Gondomar - Esquadra',
    'contacto': 'gondomar.porto@psp.pt'
  },
  {
    'nome': 'Gouveia - Esquadra',
    'contacto': 'grdesqgva@psp.pt'
  },
  {
    'nome': 'Grupo de Operações Especiais',
    'contacto': 'goe@psp.pt'
  },
  {
    'nome': 'Guarda - Comando Distrital',
    'contacto': 'cpguarda@psp.pt'
  },
  {
    'nome': 'Guarda - Esquadra',
    'contacto': 'grdesqsede@psp.pt'
  },
  {
    'nome': 'Guarda - Esquadra de Trânsito',
    'contacto': 'grdesqtr@psp.pt'
  },
  {
    'nome': 'Guimarães - Divisão Policial',
    'contacto': 'guimaraes.braga@psp.pt'
  },
  {
    'nome': 'Guimarães - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'eifpguim.braga@psp.pt'
  },
  {
    'nome': 'Horta - Divisão Policial',
    'contacto': 'cphorta@psp.pt'
  },
  {
    'nome': 'Horta - Esquadra',
    'contacto': 'hrtesqsede@psp.pt'
  },
  {
    'nome': 'Horta - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'hrteir@psp.pt'
  },
  {
    'nome': 'Horta - Esquadra de Segurança Aeroportuaria',
    'contacto': 'hrtsegaer@psp.pt'
  },
  {
    'nome': 'Horta - Esquadra de Trânsito',
    'contacto': 'hrtesqtr@psp.pt'
  },
  {
    'nome': 'Instituto Superior de Ciências Policiais e Segurança Interna',
    'contacto': 'iscpsi@psp.pt'
  },
  {
    'nome': 'Lages do Pico - Esquadra',
    'contacto': 'hrtlgp@psp.pt'
  },
  {
    'nome': 'Lagos - Esquadra',
    'contacto': 'lagos.faro@psp.pt'
  },
  {
    'nome': 'Lajes das Flores - Esquadra',
    'contacto': 'hrtlgf@psp.pt'
  },
  {
    'nome': 'Lamego - Esquadra',
    'contacto': 'vislmg@psp.pt'
  },
  {
    'nome': 'Laranjeiro - Almada - Esquadra',
    'contacto': 'laranjeiro.setubal@psp.pt'
  },
  {
    'nome': 'Leiria - Comando Distrital',
    'contacto': 'cpleiria@psp.pt'
  },
  {
    'nome': 'Leiria - Esquadra',
    'contacto': 'esquadrasede.leiria@psp.pt'
  },
  {
    'nome': 'Lisboa - Comando Metropolitano',
    'contacto': 'cmlisboa@psp.pt'
  },
  {
    'nome': 'Lisboa - Divisão de Seguraça A Transportes Publicos',
    'contacto': 'dstp.lisboa@psp.pt'
  },
  {
    'nome': 'Loures - Divisão Policial',
    'contacto': 'divloures.lisboa@psp.pt'
  },
  {
    'nome': 'Machico - Esquadra',
    'contacto': 'madesqmachico@psp.pt'
  },
  {
    'nome': 'Madalena do Pico - Esquadra',
    'contacto': 'hrtmdp@psp.pt'
  },
  {
    'nome': 'Madeira - Comando Regional',
    'contacto': 'crmadeira@psp.pt'
  },
  {
    'nome': 'Madeira - Divisão de Segurança Aeroportuaria',
    'contacto': 'madesegaer@psp.pt'
  },
  {
    'nome': 'Madeira - Esquadra de Segurança Aeroportuaria',
    'contacto': 'madesegaer@psp.pt'
  },
  {
    'nome': 'Maia - Divisão Policial',
    'contacto': 'divmaia.porto@psp.pt'
  },
  {
    'nome': 'Maia - Esquadra',
    'contacto': 'maia.porto@psp.pt'
  },
  {
    'nome': 'Marinha Grande - Esquadra',
    'contacto': 'marinhagrande.leiria@psp.pt'
  },
  {
    'nome': 'Marrazes - Esquadra',
    'contacto': 'marrazes.leiria@psp.pt'
  },
  {
    'nome': 'Matosinhos - Divisão Policial',
    'contacto': 'divmatosinhos.porto@psp.pt'
  },
  {
    'nome': 'Mira-Sintra - Sintra - 87.ª Esquadra Lx',
    'contacto': 'mirasintra.lisboa@psp.pt'
  },
  {
    'nome': 'Mirandela - Esquadra',
    'contacto': 'mirandela.braganca@psp.pt'
  },
  {
    'nome': 'Montijo - Esquadra',
    'contacto': 'montijo.setubal@psp.pt'
  },
  {
    'nome': 'Moura - Esquadra',
    'contacto': 'moura.beja@psp.pt'
  },
  {
    'nome': 'Nazaré - Esquadra',
    'contacto': 'nazare.leiria@psp.pt'
  },
  {
    'nome': 'Oeiras - Divisão Policial',
    'contacto': 'divoeiras.lisboa@psp.pt'
  },
  {
    'nome': 'Oeiras - Esquadra de Intervenção e Fiscalização',
    'contacto': 'divoeiras.lisboa@psp.pt'
  },
  {
    'nome': 'Olhão - Esquadra',
    'contacto': 'olhao.faro@psp.pt'
  },
  {
    'nome': 'Olivais Sul - 2.ª Divisão Policial Lx',
    'contacto': '2div.lisboa@psp.pt'
  },
  {
    'nome': 'Oliveira do Douro - Vila Nova de Gaia - Esquadra',
    'contacto': 'oliveiradodouro.porto@psp.pt'
  },
  {
    'nome': 'Ourém - Esquadra',
    'contacto': 'ourem.santarem@psp.pt'
  },
  {
    'nome': 'Ovar - Esquadra',
    'contacto': 'ovar.aveiro@psp.pt'
  },
  {
    'nome': 'Parque de Viaturas Rebocadas - Campo Pequeno',
    'contacto': 'cgrandedt.lisboa@psp.pt'
  },
  {
    'nome': 'Parque de Viaturas Rebocadas - Restelo',
    'contacto': 'restelodt.lisboa@psp.pt'
  },
  {
    'nome': 'Penha de França - 5.ª Divisão Policial Lx',
    'contacto': '5div.lisboa@psp.pt'
  },
  {
    'nome': 'Peniche - Esquadra',
    'contacto': 'peniche.leiria@psp.pt'
  },
  {
    'nome': 'Policia Municipal de Lisboa',
    'contacto': 'pm@cm-lisboa.pt'
  },
  {
    'nome': 'Policia Municipal de Lisboa - Parque de Viaturas Rebocadas',
    'contacto': 'pm@cm-lisboa.pt'
  },
  {
    'nome': 'Pombal - Esquadra',
    'contacto': 'pombal.leiria@psp.pt'
  },
  {
    'nome': 'Ponta Delgada - Divisão Policial',
    'contacto': 'cppdelgada@psp.pt'
  },
  {
    'nome': 'Ponta do Sol - Esquadra',
    'contacto': 'madesqpsol@psp.pt'
  },
  {
    'nome': 'Ponte de Lima - Esquadra',
    'contacto': 'pontedelima.vcastelo@psp.pt'
  },
  {
    'nome': 'Portalegre - Comando Distrital',
    'contacto': 'cpportalegre@psp.pt'
  },
  {
    'nome': 'Portalegre - Esquadra',
    'contacto': 'ptgecg@psp.pt'
  },
  {
    'nome': 'Portimão - Divisão Policial',
    'contacto': 'divportimao.faro@psp.pt'
  },
  {
    'nome': 'Portimão - Esquadra',
    'contacto': 'divportimao.faro@psp.pt'
  },
  {
    'nome': 'Portimão - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'divportimao.faro@psp.pt'
  },
  {
    'nome': 'Portimão - Esquadra de Trânsito',
    'contacto': 'divportimao.faro@psp.pt'
  },
  {
    'nome': 'Porto - Comando Metropolitano',
    'contacto': 'cmporto@psp.pt'
  },
  {
    'nome': 'Porto - Destacamento do Corpo de Intervenção',
    'contacto': 'ci.porto@psp.pt'
  },
  {
    'nome': 'Porto - Divisão de Segurança Aeroportuaria',
    'contacto': 'aeroporto.porto@psp.pt'
  },
  {
    'nome': 'Porto - Divisão de Trânsito',
    'contacto': 'prtdt@psp.pt'
  },
  {
    'nome': 'Porto - Esquadra de Turismo',
    'contacto': 'prtetur@psp.pt'
  },
  {
    'nome': 'Porto - N?.?cleo de Segurança Privada',
    'contacto': 'prtnspriv@psp.pt'
  },
  {
    'nome': 'Porto Moniz - Esquadra',
    'contacto': 'madesqpmoniz@psp.pt'
  },
  {
    'nome': 'Porto Salvo - Oeiras - 82.ª Esquadra Lx',
    'contacto': 'portosalvo.lisboa@psp.pt'
  },
  {
    'nome': 'Porto Santo - Esquadra',
    'contacto': 'madesqpsanto@psp.pt'
  },
  {
    'nome': 'Porto Santo - Esquadra de Segurança Aeroportuaria',
    'contacto': 'aeroporto.psanto@psp.pt'
  },
  {
    'nome': 'Povoa de Varzim - Esquadra',
    'contacto': 'povoavarzim.porto@psp.pt'
  },
  {
    'nome': 'Pragal - Almada - Esquadra',
    'contacto': 'pragal.setubal@psp.pt'
  },
  {
    'nome': 'Queijas - Oeiras - 85.ª Esquadra Lx',
    'contacto': 'queijas.lisboa@psp.pt'
  },
  {
    'nome': 'Quinta da Lomba - Barreiro - Esquadra',
    'contacto': 'stbpaqdl@psp.pt'
  },
  {
    'nome': 'Quintanilha - Centro de Coordenação Policial e Aduaneira',
    'contacto': 'ccpa.quintanilha@psp.pt'
  },
  {
    'nome': 'Restauradores - Esquadra de Turismo1',
    'contacto': 'lsbetur@psp.pt'
  },
  {
    'nome': 'Ribeira Brava - Esquadra',
    'contacto': 'madesqrbrava@psp.pt'
  },
  {
    'nome': 'Rio Tinto - Gondomar - Esquadra',
    'contacto': 'riotinto.porto@psp.pt'
  },
  {
    'nome': 'Rio de Mouro - Sintra - 89.ª Esquadra Lx',
    'contacto': 'riodemouro.lisboa@psp.pt'
  },
  {
    'nome': 'Santa Apolónia - Esquadra de Turismo',
    'contacto': 'lsbetur@psp.pt'
  },
  {
    'nome': 'Santa Cruz - Esquadra',
    'contacto': 'madesqscruz@psp.pt'
  },
  {
    'nome': 'Santa Cruz das Flores - Esquadra',
    'contacto': 'hrtscf@psp.pt'
  },
  {
    'nome': 'Santa Maria da Feira - Esquadra',
    'contacto': 'smfeira.aveiro@psp.pt'
  },
  {
    'nome': 'Santana - Esquadra',
    'contacto': 'madesqsantana@psp.pt'
  },
  {
    'nome': 'Santarém - Comando Distrital',
    'contacto': 'cdsantarem@psp.pt'
  },
  {
    'nome': 'Santarém - Esquadra',
    'contacto': 'stresqsede@psp.pt'
  },
  {
    'nome': 'Santo Tirso - Esquadra',
    'contacto': 'santotirso.porto@psp.pt'
  },
  {
    'nome': 'Secção de Contra-Ordenações da Divisão de Trânsito',
    'contacto': 'scr.dt.lisboa@psp.pt'
  },
  {
    'nome': 'Seixal - Divisão Policial',
    'contacto': 'divseixal.setubal@psp.pt'
  },
  {
    'nome': 'Seixal - Esquadra',
    'contacto': 'seixal.setubal@psp.pt'
  },
  {
    'nome': 'Seixal - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'divseixal.setubal@psp.pt'
  },
  {
    'nome': 'Setúbal - 1.ª Esquadra',
    'contacto': 'stb1esq@psp.pt'
  },
  {
    'nome': 'Setúbal - Comando Distrital',
    'contacto': 'cpsetubal@psp.pt'
  },
  {
    'nome': 'Setúbal - Divisão Policial',
    'contacto': 'stbao.setubal@psp.pt'
  },
  {
    'nome': 'Setúbal - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'stbeifp@psp.pt'
  },
  {
    'nome': 'Setúbal - Esquadra de Trânsito',
    'contacto': 'stbesqtr@psp.pt'
  },
  {
    'nome': 'Sintra - Divisão Policial',
    'contacto': 'sintra.lisboa@psp.pt'
  },
  {
    'nome': 'São João da Madeira - Esquadra',
    'contacto': 'sjmadeira.aveiro@psp.pt'
  },
  {
    'nome': 'São Mamede de Infesta - Matosinhos - Esquadra',
    'contacto': 'smamedeinfesta.porto@psp.pt'
  },
  {
    'nome': 'São Roque do Pico - Esquadra',
    'contacto': 'hrtesqsrp@psp.pt'
  },
  {
    'nome': 'São Vicente - Esquadra',
    'contacto': 'svicente.madeira@psp.pt'
  },
  {
    'nome': 'Tavira - Esquadra',
    'contacto': 'tavira.faro@psp.pt'
  },
  {
    'nome': 'Tomar - Divisão Policial',
    'contacto': 'strsectmr@psp.pt'
  },
  {
    'nome': 'Torre da Marinha - Seixal - Posto de Atendimento',
    'contacto': 'seixal.setubal@psp.pt'
  },
  {
    'nome': 'Torres Novas - Esquadra',
    'contacto': 'torresnovas.santarem@psp.pt'
  },
  {
    'nome': 'Unidade Especial de Polícia',
    'contacto': 'uep@psp.pt'
  },
  {
    'nome': 'Valadares - Vila Nova de Gaia - Esquadra',
    'contacto': 'valadares.porto@psp.pt'
  },
  {
    'nome': 'Valbom - Gondomar - Esquadra',
    'contacto': 'valbom.porto@psp.pt'
  },
  {
    'nome': 'Valongo - Esquadra',
    'contacto': 'valongo.porto@psp.pt'
  },
  {
    'nome': 'Viana do Castelo - Comando Distrital',
    'contacto': 'cpvcastelo@psp.pt'
  },
  {
    'nome': 'Viana do Castelo - Esquadra',
    'contacto': 'vctesqsede@psp.pt'
  },
  {
    'nome': 'Vila Franca de Xira - Divisão Policial',
    'contacto': 'vfxira.lisboa@psp.pt'
  },
  {
    'nome': 'Vila Franca de Xira - Esq.ª de Intervenção e Fiscalização Policial',
    'contacto': 'vfxira.lisboa@psp.pt'
  },
  {
    'nome': 'Vila Franca de Xira - Esquadra de Trânsito',
    'contacto': 'vfxira.lisboa@psp.pt'
  },
  {
    'nome': 'Vila Nova de Famalicão - Esquadra',
    'contacto': 'famalicao.braga@psp.pt'
  },
  {
    'nome': 'Vila Nova de Gaia - 10.ª Esquadra Prt',
    'contacto': 'gaia.porto@psp.pt'
  },
  {
    'nome': 'Vila Nova de Gaia - Divisão Policial',
    'contacto': 'divvngaia.porto@psp.pt'
  },
  {
    'nome': 'Vila Real - Comando Distrital',
    'contacto': 'cpvreal@psp.pt'
  },
  {
    'nome': 'Vila Real - Esquadra',
    'contacto': 'vrlesqsede@psp.pt'
  },
  {
    'nome': 'Vila Real de Santo Antonio - Esquadra',
    'contacto': 'vrsa.faro@psp.pt'
  },
  {
    'nome': 'Vila do Conde - Divisão Policial',
    'contacto': 'divvconde.porto@psp.pt'
  },
  {
    'nome': 'Vila do Conde - Esquadra',
    'contacto': 'viladoconde@psp.pt'
  },
  {
    'nome': 'Viseu - Comando Distrital',
    'contacto': 'cpviseu@psp.pt'
  },
  {
    'nome': 'Viseu - Esquadra',
    'contacto': 'visesqsede@psp.pt'
  },
  {
    'nome': 'Águas Santas - Maia - Esquadra',
    'contacto': 'aguassantas.porto@psp.pt'
  },
  {
    'nome': 'Évora - Comando Distrital',
    'contacto': 'cpevora@psp.pt'
  },
  {
    'nome': 'Évora - Esquadra de Intervenção e Fiscalização Policial',
    'contacto': 'cpevora@psp.pt'
  }
]

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

// ###########################################################################################################################################
// ###########################################################################################################################################
// ###########################################################################################################################################

app.contacts.Localities = [
  {
    'locality': '4 Águas',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'A de Barros',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'A de Mateus',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'A do Corvo',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'A dos Cunhados',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'A dos Francos',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'A dos Francos',
    'municipality': 1006,
    'postalCode': 2504
  },
  {
    'locality': 'A dos Negros',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'A dos Ruivos',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'A-Da-Gorda',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'A-da-Rainha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'A-do-Barbas',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'A-do-Barriga',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'A-do-Bispo',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'A-do-Cavalo',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'A-do-Freire',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'A-do-freire',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'A-dos-Bispos',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'A-dos-Eis',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'A-dos-Ferreiros',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'A-dos-Ferreiros',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'A-dos-Palheiros',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'A-dos-Pretos',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Abade de Neiva',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Abade de Vermoim',
    'municipality': 312,
    'postalCode': 4770
  },
  {
    'locality': 'Abades',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Abadia',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Abadia',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Abadia',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Abadia',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Abadia',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Abadia Velha',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Abadia de Espinho',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Abadim',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Abados',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Abambres',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Abambres',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Abaças',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Abação de São Tomé',
    'municipality': 308,
    'postalCode': 4810
  },
  {
    'locality': 'Abegoa',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Abegoaria',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Abegoaria',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Abegão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Abegões',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Abel',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Abela',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Abeleiras',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Abelheira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Abelheira',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Abelheira',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Abelheira',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Abelheira',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Abelheira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Abelheira',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Abelheira',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Abelheira',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Abelheira',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Abelheira',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Abertas',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Abertas de Baixo',
    'municipality': 1213,
    'postalCode': 7425
  },
  {
    'locality': 'Abertas de Cima',
    'municipality': 1213,
    'postalCode': 7425
  },
  {
    'locality': 'Abeção',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Abibes',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Abicada',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Abitureira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Abitureira',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Abitureira',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Abitureira',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Abitureiras',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Abiúl',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aboadela',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Aboadela',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Abobareira',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Abobeleira',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Abobeleira',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Aboborais',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Aboboreira',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Aboboreira',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Aboboreira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Aboboreira Cimeira',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Aboboreira Fundeira',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Abogalheira',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Abogões',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Aboim',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Aboim',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Aboim',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aboleira',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Abolembra',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Abolieira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Abonada',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Aborim',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Aboá',
    'municipality': 412,
    'postalCode': 5335
  },
  {
    'locality': 'Abragão',
    'municipality': 1311,
    'postalCode': 4560
  },
  {
    'locality': 'Abrantes',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Abrantes',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Abrecovo',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Abreiro',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Abreu',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Abrigada',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Abris',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Abrunhal',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Abrunheira',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Abrunheira',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Abrunheira',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Abrunheira',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Abrunheira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Abrunheira',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Abrunheira',
    'municipality': 1111,
    'postalCode': 2714
  },
  {
    'locality': 'Abrunheira',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Abrunheira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Abrunheiro',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Abrunheiro Grande',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Abrunheiro Pequeno',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Abrunhosa',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Abrunhosa do Mato',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Abrunhosa-a-velha',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Abrutiais',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Abrã',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Abuxanas',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Abóboda',
    'municipality': 1105,
    'postalCode': 2785
  },
  {
    'locality': 'Abóboda',
    'municipality': 1105,
    'postalCode': 2789
  },
  {
    'locality': 'Abóboda',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Achada',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Achada',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Achada',
    'municipality': 3104,
    'postalCode': 9225
  },
  {
    'locality': 'Achada',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Achada',
    'municipality': 4202,
    'postalCode': 9630
  },
  {
    'locality': 'Achada',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Achada Felpa',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada Grande',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada Grande',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achada Nova',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Achada da Arruda',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Achada da Cruz',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada da Madeira',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achada de António Teixeira',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada de Simão Alves',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada de São Sebastião',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Achada do Areal',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Barro',
    'municipality': 3108,
    'postalCode': 9100
  },
  {
    'locality': 'Achada do Castanheiro',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achada do Crasto',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Achada do Curral',
    'municipality': 3108,
    'postalCode': 9100
  },
  {
    'locality': 'Achada do Folhadal',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Gamo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Achada do Gramacho',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Marques',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Pampilhar',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Pau Bastião',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Pereiro',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achada do Pico',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achada do Til',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achada dos Judeus',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achadas',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Achadas da Cruz',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Achadinha',
    'municipality': 3104,
    'postalCode': 9225
  },
  {
    'locality': 'Achadinha',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Achadinha',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Achadinha',
    'municipality': 4202,
    'postalCode': 9630
  },
  {
    'locality': 'Achas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Achete',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Acipreste',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Acipreste',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Adafães',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Adagoi',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Adanaia',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Adaufe',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Adavelha',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Adaúfe',
    'municipality': 303,
    'postalCode': 4710
  },
  {
    'locality': 'Adcasal',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Ade',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Adedela',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Adega',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Adega',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Adega',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Adega',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Adega',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Adega',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Adega',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Adega do Chão',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Adeganha',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Adegas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Adegas',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Adegas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Adegas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Adegas',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Adegas da Selada',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Adeguinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Adela',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Ademas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Adenodeiro',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Aderneira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Aderneira',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Adernela',
    'municipality': 611,
    'postalCode': 3405
  },
  {
    'locality': 'Adesmatos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Adingeiro',
    'municipality': 505,
    'postalCode': 6060
  },
  {
    'locality': 'Adiça',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Admeus',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Adomingueiros',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Adopisco',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Adoria',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Adorigo',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Adoufe',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Adpropeixe',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Adragoso de Baixo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Adro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Adro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Adro',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Adro',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Adroia',
    'municipality': 106,
    'postalCode': 4550
  },
  {
    'locality': 'Adros',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Adrão',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Adsamo',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Adside',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Adsinjo',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Aduares do Norte',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Aduguete',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Adurão',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Advagar',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Adães',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Adães',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Adão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Adão Lobo',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Adões',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Aeroporto',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Aeroporto da Horta',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Aeroporto das Lajes',
    'municipality': 4302,
    'postalCode': 9760
  },
  {
    'locality': 'Aeroporto de Beja',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Aeroporto de Faro',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Aeroporto de São Jorge',
    'municipality': 4502,
    'postalCode': 9800
  },
  {
    'locality': 'Aeródromo',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Afe',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Afeiteira',
    'municipality': 712,
    'postalCode': 7080
  },
  {
    'locality': 'Afeiteira',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Afeiteira de Baixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Afeiteira de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Afife',
    'municipality': 1609,
    'postalCode': 4900
  },
  {
    'locality': 'Afilhardeira',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Afincerna',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Aflitos',
    'municipality': 4203,
    'postalCode': 9545
  },
  {
    'locality': 'Afonsim',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Afonsim',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Afonso Lourenço',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Afonso Vaz',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Afonso Vicente',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Afonsos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Afonsos',
    'municipality': 1507,
    'postalCode': 2985
  },
  {
    'locality': 'Afurada',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Agarez',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Ageito',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Agibral',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Agil',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Agilde',
    'municipality': 305,
    'postalCode': 4615
  },
  {
    'locality': 'Agodim',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Agodim',
    'municipality': 1009,
    'postalCode': 2424
  },
  {
    'locality': 'Agolada',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Agoncida',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Agonia',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Agordela',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Agostas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Agostem',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Agostos',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Agra',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Agra',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Agra',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Agras',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Agras',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Agras',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Agras',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Agras de Baixo',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Agras de Cima',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Agrações',
    'municipality': 1703,
    'postalCode': 5425
  },
  {
    'locality': 'Agrela',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Agrela',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Agrela',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Agrela',
    'municipality': 1314,
    'postalCode': 4825
  },
  {
    'locality': 'Agrela',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Agrela',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Agrela',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Agrela',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Agrelo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Agrelo',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Agrelo',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Agrelo',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Agrelo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Agrelos',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Agrelos',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Agrelos',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Agrelos',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Agria',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Agria Grande',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Agria Pequena',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Agro',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Agro Pecuária de São Marcos',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Agro do Monte',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Agro do Ribeiro',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Agroal',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Agroal',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Agrobom',
    'municipality': 401,
    'postalCode': 5350
  },
  {
    'locality': 'Agrocha',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Agrochão',
    'municipality': 412,
    'postalCode': 5335
  },
  {
    'locality': 'Agrochão',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Agrochão',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Agrofafe',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Agros',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Agruela',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Aguada',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Aguada de Baixo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Aguada de Cima',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Aguadalte',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Aguadalte',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Aguadela',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Agualonga',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Agualva',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Agualva',
    'municipality': 4302,
    'postalCode': 9760
  },
  {
    'locality': 'Agualva de Cima',
    'municipality': 1508,
    'postalCode': 2965
  },
  {
    'locality': 'Agualva-Cacém',
    'municipality': 1111,
    'postalCode': 2735
  },
  {
    'locality': 'Agualva-Cacém',
    'municipality': 1111,
    'postalCode': 2739
  },
  {
    'locality': 'Aguaneira',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Aguda',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Aguda',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Agudos',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Aguela',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Aguiar',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Aguiar',
    'municipality': 713,
    'postalCode': 7090
  },
  {
    'locality': 'Aguiar da Beira',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Aguiar de Sousa',
    'municipality': 1310,
    'postalCode': 4585
  },
  {
    'locality': 'Aguieira',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Aguieira',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Aguieira',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Aguieira',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Aguieira',
    'municipality': 1809,
    'postalCode': 3525
  },
  {
    'locality': 'Aguieira',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Aguieiras',
    'municipality': 407,
    'postalCode': 5385
  },
  {
    'locality': 'Aguilhadas',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Aguilhão',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Aguilhão',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aguim',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Aguincheira',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Aguincheira',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Aguincho',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Aguiã',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Agunchos',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Aiana',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Aidinho',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aido',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Aido',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aido',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Aido Agulhas',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Aido Bexigas',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Aido de Além',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Aido de Baixo',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Aido de Cima',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Aidos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aidos',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Aigra Nova',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Aigra Velha',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Aipo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Airas',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Airo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Airães',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Airão Santa Maria',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Airão São João Batista',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Airó',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Airó',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Aivado',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Aivados',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'Aivados',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Aião',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Ajuda',
    'municipality': 4203,
    'postalCode': 9545
  },
  {
    'locality': 'Ajude',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Ala',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Aladela',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Alagadores',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Alagoa',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alagoa',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Alagoa',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Alagoa',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Alagoa',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Alagoa',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Alagoa',
    'municipality': 908,
    'postalCode': 6260
  },
  {
    'locality': 'Alagoa',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Alagoa',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Alagoa',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Alagoa',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Alagoa Água',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Alagoachos',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Alagoas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alagoas',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Alagoas',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Alagoas',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Alagoas',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Alagoas',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Alagoas',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Alagoas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Alagoas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Alagoas',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Alagoas Brancas',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Alagoinha',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Alagoinha',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Alagoínha',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Alagoínha',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Alagoínha Nova',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Alagôa',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Alagôa',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Alagôas',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Alambique',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Alandroal',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Alanhosa',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Alapraia',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Albardeiros',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Albardo',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Albardão',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Albarrada',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Albarraque',
    'municipality': 1111,
    'postalCode': 2635
  },
  {
    'locality': 'Albarraque',
    'municipality': 1111,
    'postalCode': 2639
  },
  {
    'locality': 'Albarraque',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Albarrois',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Albarrol',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Albarrol',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Albarrol',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Albergaria',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Albergaria',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Albergaria',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Albergaria',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Albergaria',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Albergaria',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Albergaria',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Albergaria',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Albergaria',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Albergaria',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Albergaria da Serra',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Albergaria dos Doze',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Albergaria dos Fusos',
    'municipality': 207,
    'postalCode': 7940
  },
  {
    'locality': 'Albergaria-A-Velha',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Albergaria-a-Nova',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Alberge',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Albergue',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Albernoa',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Albiado',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Albisqueiros',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Albitelhe',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Albufeira',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Albufeira',
    'municipality': 801,
    'postalCode': 8201
  },
  {
    'locality': 'Albufeira Gare',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Alburitel',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Alcabideche',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Alcabideche',
    'municipality': 1105,
    'postalCode': 2649
  },
  {
    'locality': 'Alcabideche',
    'municipality': 1105,
    'postalCode': 2755
  },
  {
    'locality': 'Alcabideche',
    'municipality': 1105,
    'postalCode': 2756
  },
  {
    'locality': 'Alcabideque',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Alcafaz',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Alcafozes',
    'municipality': 505,
    'postalCode': 6060
  },
  {
    'locality': 'Alcaidaria',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Alcaidaria',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Alcaidaria',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Alcaide',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Alcaide',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alcaide',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Alcains',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Alcainça',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Alcalar',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Alcambar',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alcamim',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Alcanadas',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Alcanceria',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alcanede',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Alcanena',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Alcanena',
    'municipality': 1402,
    'postalCode': 2384
  },
  {
    'locality': 'Alcanforado',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alcanhões',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Alcantarilha',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Alcantarilha Gare',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Alcaraviça',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Alcareia',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Alcareia',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Alcaria',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Alcaria',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alcaria',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alcaria',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Alcaria',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Alcaria',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcaria',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Alcaria',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Alcaria',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Alcaria',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alcaria',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alcaria',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Alcaria',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alcaria',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Alcaria Alta',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Alcaria Alta',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcaria Branca',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Alcaria Cova',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Alcaria Cova de Baixo',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcaria Cova de Cima',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcaria Formosa',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alcaria Fria',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcaria Longa',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Alcaria Nova',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alcaria Queimada',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcaria Ruiva',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Alcaria da Arraia',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Alcaria da Serra',
    'municipality': 214,
    'postalCode': 7960
  },
  {
    'locality': 'Alcaria de Cume de Cima',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcaria de Fernão Vaz',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Alcaria do Alto',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alcaria do Banho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alcaria do Clemente',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alcaria do Cume de Baixo',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcaria do João',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alcaria do Peso',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alcaria dos Javases',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Alcaria-Alta',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcarias',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Alcarias',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcarias',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcarias Baixas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcarias Grandes',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Alcarias Pedro Guerreiro',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcarião',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alcarnicosa',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcarva',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Alcaçarias',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Alcobacinha',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Alcobaça',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alcobaça',
    'municipality': 1001,
    'postalCode': 2461
  },
  {
    'locality': 'Alcobaça',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Alcobertas',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Alcobia',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alcochete',
    'municipality': 1502,
    'postalCode': 2890
  },
  {
    'locality': 'Alcochete',
    'municipality': 1502,
    'postalCode': 2894
  },
  {
    'locality': 'Alcocreiros',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Alcoentre',
    'municipality': 1103,
    'postalCode': 2065
  },
  {
    'locality': 'Alcogulhe',
    'municipality': 1009,
    'postalCode': 2404
  },
  {
    'locality': 'Alcogulhe',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Alcogulhe de Cima',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Alcoitão',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Alcoitão',
    'municipality': 1105,
    'postalCode': 2649
  },
  {
    'locality': 'Alcoleia',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Alcoleia de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Alcongosta',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alcordal',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Alcorochel',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Alcorriol',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Alcorvel',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alcouce',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Alcouce',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Alcouce',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Alcouce',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Alcouce',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Alcoutim',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alcoutim',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Alcudra',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Alcácer',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alcácer do Sal',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Alcáçovas',
    'municipality': 713,
    'postalCode': 7090
  },
  {
    'locality': 'Alcórrego',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Aldar',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Aldarete',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Aldeadouro',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Aldeamento Moinho da Asneira',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Aldeamento Porches',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Aldeamento das Pedras de El Rei',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Aldeamento de Marim',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Aldegão',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Aldeia',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Aldeia',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Aldeia',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Aldeia',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Aldeia',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Aldeia',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Aldeia',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Aldeia',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Aldeia',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Aldeia',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Aldeia',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Aldeia',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Aldeia',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aldeia',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Aldeia',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Aldeia',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Aldeia',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Aldeia',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Aldeia',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Aldeia',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aldeia',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Aldeia',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Aldeia Airosa',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Aldeia Bela',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Aldeia Casal Diz',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Aldeia Cima',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Aldeia Cimeira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Aldeia Cimeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Cimeira',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Aldeia Cimeira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Aldeia Formosa',
    'municipality': 611,
    'postalCode': 3405
  },
  {
    'locality': 'Aldeia Fundeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Fundeira',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Aldeia Fundeira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Aldeia Galega',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Aldeia Galega',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Aldeia Gavinha',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Aldeia Grande',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Aldeia Grande',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Aldeia João da Tira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Luís Francisco',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Aldeia Metade',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 406,
    'postalCode': 5210
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Aldeia Nova',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Aldeia Nova São Domingos',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Nova da Aroeira',
    'municipality': 1508,
    'postalCode': 2965
  },
  {
    'locality': 'Aldeia Nova da Azóia',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Aldeia Nova da Favela',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Aldeia Nova do Barroso',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Aldeia Nova do Cabo',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Aldeia Rica',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Aldeia Ruiva',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Aldeia Ruiva',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Aldeia Ruiva',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Aldeia Sande',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Aldeia Sande',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Aldeia São Francisco de Assis',
    'municipality': 503,
    'postalCode': 6225
  },
  {
    'locality': 'Aldeia São Sebastião',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Aldeia Velha',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Aldeia Viçosa',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Aldeia da Ana de Aviz',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Aldeia da Carrasqueira',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Aldeia da Cruz',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Aldeia da Cruz',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Aldeia da Dona',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Aldeia da Ereira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Aldeia da Fonte',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Aldeia da Freira',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Aldeia da Mata',
    'municipality': 1206,
    'postalCode': 7430
  },
  {
    'locality': 'Aldeia da Piedade',
    'municipality': 1512,
    'postalCode': 2925
  },
  {
    'locality': 'Aldeia da Ponte',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Aldeia da Ribeira',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Aldeia da Ribeira',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Aldeia da Ribeira Cimeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia da Ribeira Fundeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia da Serra',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Aldeia da Serra',
    'municipality': 710,
    'postalCode': 7170
  },
  {
    'locality': 'Aldeia da Serra',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Aldeia da Serra',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Aldeia da Serra',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Aldeia da Serra',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Aldeia da Sé',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Aldeia da Venda',
    'municipality': 701,
    'postalCode': 7200
  },
  {
    'locality': 'Aldeia das Amoreiras',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Aldeia das Açoteias',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Aldeia das Dez',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Aldeia das Freiras',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Aldeia das Mulheres',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aldeia das Pias',
    'municipality': 701,
    'postalCode': 7200
  },
  {
    'locality': 'Aldeia das Posses',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Aldeia de Além',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Aldeia de Baixo',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aldeia de Baixo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Aldeia de Baixo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Aldeia de Baixo',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Aldeia de Baixo',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Aldeia de Carvalho',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Aldeia de Cima',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Aldeia de Cima',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aldeia de Cima',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Aldeia de Cima',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Aldeia de Cima',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Aldeia de Cima',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Aldeia de Eiras',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Aldeia de Fidalgo',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Aldeia de Gatos',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Aldeia de Irmãos',
    'municipality': 1512,
    'postalCode': 2925
  },
  {
    'locality': 'Aldeia de Joanes',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Aldeia de João Pires',
    'municipality': 507,
    'postalCode': 6090
  },
  {
    'locality': 'Aldeia de Juzo',
    'municipality': 1105,
    'postalCode': 2750
  },
  {
    'locality': 'Aldeia de Juzo',
    'municipality': 1105,
    'postalCode': 2755
  },
  {
    'locality': 'Aldeia de Lavega',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Aldeia de Martenianos',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Aldeia de Mourinhos',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Aldeia de Nacomba',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Aldeia de Nogueira',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Aldeia de Nossa Senhora da Glória',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Aldeia de Ronquenho',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Aldeia de Ruins',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Aldeia de Santa Madalena',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Aldeia de Santa Margarida',
    'municipality': 505,
    'postalCode': 6060
  },
  {
    'locality': 'Aldeia de Santa Margarida',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Aldeia de Santa Teresa',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Aldeia de Santo André',
    'municipality': 1509,
    'postalCode': 7500
  },
  {
    'locality': 'Aldeia de Santo António',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Aldeia de Santo Inácio',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Aldeia de Souto de Vide',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Aldeia de São Miguel',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Aldeia de Tor',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Aldeia de Tunes',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Aldeia de Vilar',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Aldeia do Bispo',
    'municipality': 507,
    'postalCode': 6090
  },
  {
    'locality': 'Aldeia do Bispo',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Aldeia do Bispo',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Aldeia do Bofinho',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Aldeia do Cano',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Aldeia do Couto',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aldeia do Couço',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Aldeia do Mato',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Aldeia do Meco',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Aldeia do Meio',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Aldeia do Neves',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Aldeia do Pico',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Aldeia do Pinto',
    'municipality': 213,
    'postalCode': 7830
  },
  {
    'locality': 'Aldeia do Pombal',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Aldeia do Rio',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aldeia do Souto',
    'municipality': 503,
    'postalCode': 6200
  },
  {
    'locality': 'Aldeia dos Alvaledes',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Aldeia dos Anjos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aldeia dos Buracos',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Aldeia dos Chãos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Aldeia dos Elvas',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Aldeia dos Fernandes',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Aldeia dos Gagos',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Aldeia dos Grilos',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Aldeia dos Marmelos',
    'municipality': 701,
    'postalCode': 7200
  },
  {
    'locality': 'Aldeia dos Palheiros',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Aldeia dos Redondos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aldeias',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Aldeias de Montoito',
    'municipality': 710,
    'postalCode': 7200
  },
  {
    'locality': 'Aldeinha',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Alderiz',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Aldreu',
    'municipality': 302,
    'postalCode': 4905
  },
  {
    'locality': 'Aldão',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Alecrimes',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Alecrineira',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Alegrete',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Alegrete',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Alegria',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Alegria',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Aleixa',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alempassa',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Alencarce Baixo',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Alencarce Cima',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Alenquer',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Alenquer',
    'municipality': 1101,
    'postalCode': 2584
  },
  {
    'locality': 'Alenteira',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Alentejo',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Alface',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Alfafar',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Alfaiatas',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Alfaiates',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Alfaião',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Alfambras',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Alfandanga',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Alfangela',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Alfanzina',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Alfaquiques',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Alfarela de Jales',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Alfarelos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Alfarim',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Alfarrobeira',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Alfarrobeira',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Alfarrobeira',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alfarrobeira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alfarrobeira Tumba',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Alfarrobeiras',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Alfarrobeiras',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Alfarves',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Alfazum',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Alfebre',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Alfeijoeiros',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Alfeiria',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Alfeizerão',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alfena',
    'municipality': 1315,
    'postalCode': 4445
  },
  {
    'locality': 'Alferce',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alfocheira',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Alfolões',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Alfomarinho',
    'municipality': 1211,
    'postalCode': 7450
  },
  {
    'locality': 'Alfonge',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Alfontes',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alforzemel',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Alfouvés',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Alfrivida',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Alfundão',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Alfândega da Fé',
    'municipality': 401,
    'postalCode': 5350
  },
  {
    'locality': 'Alféloas',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Alganduro',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alganhafres',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Algar',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Algar',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Algares',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Algarves de Cima',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Algarvia',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Algarvia',
    'municipality': 4202,
    'postalCode': 9630
  },
  {
    'locality': 'Algarvias',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Algarão',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Algaz',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Algaça',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Alge',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Algeraz',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Algereu',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Algeriz',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Algeriz',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Algoceira',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Algodor',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Algodres',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Algodres',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Algosinho',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Algoso',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Algoz',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Alguber',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Algueirão',
    'municipality': 1111,
    'postalCode': 2725
  },
  {
    'locality': 'Algueirão',
    'municipality': 1111,
    'postalCode': 2729
  },
  {
    'locality': 'Algés',
    'municipality': 1110,
    'postalCode': 1495
  },
  {
    'locality': 'Algés',
    'municipality': 1110,
    'postalCode': 1499
  },
  {
    'locality': 'Alhadas de Baixo',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Alhadas de Cima',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Alhais',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Alhais',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Alhais de Baixo',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Alhandra',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Alhandra',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Alhandra',
    'municipality': 1114,
    'postalCode': 2601
  },
  {
    'locality': 'Alhavaite',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alheira',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Alho',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Alhos',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alhos Vedros',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Alhos Vedros',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Alhões',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aliceira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alijó',
    'municipality': 305,
    'postalCode': 4820
  },
  {
    'locality': 'Alijó',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Alijó',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Alimonde',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Alinhada',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Alizo',
    'municipality': 507,
    'postalCode': 6320
  },
  {
    'locality': 'Aljazede',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Aljezur',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Aljubarrota',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Aljuriça',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Aljustrel',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Aljustrel',
    'municipality': 201,
    'postalCode': 7604
  },
  {
    'locality': 'Almaceda',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Almacinha',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Almada',
    'municipality': 1503,
    'postalCode': 2800
  },
  {
    'locality': 'Almada',
    'municipality': 1503,
    'postalCode': 2810
  },
  {
    'locality': 'Almada',
    'municipality': 1503,
    'postalCode': 2805
  },
  {
    'locality': 'Almada',
    'municipality': 1503,
    'postalCode': 2809
  },
  {
    'locality': 'Almada',
    'municipality': 1503,
    'postalCode': 2814
  },
  {
    'locality': 'Almada',
    'municipality': 1503,
    'postalCode': 2804
  },
  {
    'locality': 'Almada de Ouro',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Almadafe',
    'municipality': 1215,
    'postalCode': 7470
  },
  {
    'locality': 'Almadaninhas',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Almagra',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Almagreira',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Almagreira',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Almagreira',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Almagrinha',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Almajões',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Almalaguês',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Almances',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Almancil',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Almarganito',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Almarge',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almargem',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Almargem',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Almargem',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Almargem',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': "Almargem D'El Rei",
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Almargem do Bispo',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Almargens',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Almarginho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Almarginho',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Almargão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Almarjinhos',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Almarjão',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almarjão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Almarjão',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Almas',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Almas',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Almas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Almas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Almas',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Almas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Almas',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Almas',
    'municipality': 4603,
    'postalCode': 9940
  },
  {
    'locality': 'Almas da Areosa',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Almas da Domingas',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Almas da Ferreira',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Almas do Buçaco',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Almaça',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Almear',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Almegue',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Almeida',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Almeida',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Almeidas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Almeidinha',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Almeidinha',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Almeijoafra',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almeijoafra de Cima',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almeijoafras',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Almeijoafras de Baixo',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Almeijoafras de Cima',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Almeirim',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'Almeirim',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Almeirinho Clemente',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Almeirinhos de Baixo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Almendra',
    'municipality': 914,
    'postalCode': 5150
  },
  {
    'locality': 'Almezinha',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Almiar',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Almijofa',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Alminhas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Alminhas',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Alminhas',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Alminhas',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Alminhas',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Alminhas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Alminhas',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Almiranta',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Almodafa',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Almodôvar',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almodôvar A Velha',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almodôvar Velho',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Almofala',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Almofala',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Almofala',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Almofala',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Almofala',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Almofala de Baixo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Almofala de Cima',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Almogadel',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Almografes',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Almograve',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Almoinha',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Almoinha Velha',
    'municipality': 1010,
    'postalCode': 2445
  },
  {
    'locality': 'Almoinha Velha',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Almoinhas',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Almoinhas',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Almoinhos',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Almonda',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Almorfe',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Almornos',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Almorquim',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Almoster',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Almoster',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Almotolias',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Almoçageme',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Almoínha',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Almoínha Velha',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Almádena',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Alocaia',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Alombada',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Alote',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Alpalhão',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Alpalhão',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Alpalhão',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Alpande',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Alpedreira',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Alpedrinha',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alpedriz',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alpendorada e Matos',
    'municipality': 1307,
    'postalCode': 4575
  },
  {
    'locality': 'Alpenduradas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alpenduradas',
    'municipality': 1507,
    'postalCode': 2985
  },
  {
    'locality': 'Alperchina Figueira',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Alpiarça',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Alporchinhos',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Alportel',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Alportel de Baixo',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Alpossos',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Alpouvar',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Alpouvar',
    'municipality': 801,
    'postalCode': 8201
  },
  {
    'locality': 'Alqueidão',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alqueidão',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alqueidão',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Alqueidão',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Alqueidão São Brás',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Alqueidão da Serra',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Alqueidão de Boa Vista',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Alqueidão de Cortes',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Alqueidão de Pussos',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Alqueidão de Santo Amaro',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Alqueidão do Arrimal',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Alqueidão do Mato',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Alqueidão do Rei',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Alqueidãozinho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alqueires',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alqueirão',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Alqueives',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Alquerubim',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Alqueva',
    'municipality': 709,
    'postalCode': 7220
  },
  {
    'locality': 'Alqueve',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alqueve',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Alqueve',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Alqueve',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Alqueveirinhos',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Alqueves',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Alquevinho',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alrote',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Alsilor',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Alsol',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Alta Mora',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Altardo',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Altares',
    'municipality': 4301,
    'postalCode': 9700
  },
  {
    'locality': 'Alte',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alter Pedroso',
    'municipality': 1201,
    'postalCode': 7440
  },
  {
    'locality': 'Alter do Chão',
    'municipality': 1201,
    'postalCode': 7440
  },
  {
    'locality': 'Altinho da Cotovia',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Alto',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Alto',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Alto Almoinha',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Alto Barro',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Alto Cadorcas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alto Cavalo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Alto Cilhão',
    'municipality': 1415,
    'postalCode': 2120
  },
  {
    'locality': 'Alto Coelho',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Alto Fica',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alto Foz',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Alto Freixo',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Alto Félix',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Alto Pereiro',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Alto Senhora da Graça',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Alto Senhora da Vitória',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Alto Serra',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Alto Soalheiras',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alto São João',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Alto Ventoso',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alto Veríssimo',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Alto Vistoso',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Alto da Agruela',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Alto da Azul',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alto da Bica',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alto da Caroça',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Alto da Carreira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alto da Casta',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Alto da Cerejeira',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Alto da Corda',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Alto da Cruz',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Alto da Cruz',
    'municipality': 4603,
    'postalCode': 9940
  },
  {
    'locality': 'Alto da Estrada',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alto da Fonte Fria',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Alto da Fonte da Ladeira',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Alto da Foz Giraldo',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Alto da Fábrica',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Alto da Granja',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alto da Guerra',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Alto da Guindosa',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Alto da Lagoa',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Alto da Lixa',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Alto da Lousa',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Alto da Mata',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Alto da Portela',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alto da Póvoa',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Alto da Quinta do Passo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Alto da Ribeirinha',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Alto da Rocha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Alto da Rua',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Alto da Serra',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Alto da Serra',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Alto da Taipa',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Alto da Torre',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Alto da Trindade',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Alto da Vala',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Alto da Venda Nova',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Alto das Garridas',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Alto das Lamas',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Alto das Lombas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Alto das Telhas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alto das Trepadeiras',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Alto das Valdeiras',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Alto de Baixo',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Alto de Baixo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alto de Barreiros',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Alto de Cima',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alto de Cotas',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Alto de Fontão',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Alto de Negrelos',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Alto de Pegarinhos',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Alto de Santa Clara',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Alto de Santa Lúzia',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Alto de São Lourenço',
    'municipality': 1213,
    'postalCode': 7400
  },
  {
    'locality': 'Alto de São Lourenço',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alto de São Roque',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Alto de São Sebastião',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alto de Trás-as-Vinhas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Alto do Boavista',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Alto do Boeiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Alto do Cabaço',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alto do Carvalho',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Alto do Castelo',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Alto do Estanqueiro',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Alto do Facho',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Alto do Freitas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alto do Mato',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Alto do Muro',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Alto do Nascente',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Alto do Padrão',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Alto do Paraíso',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Alto do Passal',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Alto do Pessegueiro',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Alto do Pinheiro',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Alto do Pintado',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Alto do Piolhinho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alto do Poente',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Alto do Porto Velho',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Alto do Poço',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Alto do Pópulo',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Alto do Relógio',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Alto do Rio',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Alto do Seixal',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Alto do Sul',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Alto do Vale',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Alto do Vale',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Alto do Varatojo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Alto do Vieiro',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Alto do Zambujosa',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Alto do Zézinho',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Alto dos Barreiros',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Alto dos Campitos',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Alto dos Cavacos',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Alto dos Crespos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alto dos Crujos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alto dos Fornos',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Alto dos Gaios',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Alto dos Lombos',
    'municipality': 1105,
    'postalCode': 2775
  },
  {
    'locality': 'Alto dos Mendes',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Alto dos Mendes',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Alto dos Mochos',
    'municipality': 705,
    'postalCode': 7005
  },
  {
    'locality': 'Alto dos Passarinhos',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Alto e Bombeja',
    'municipality': 705,
    'postalCode': 7005
  },
  {
    'locality': 'Altos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Altos',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Altura',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Altura',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Altura das Corchas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Altura de Milhano',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Altura do Brejo das Cancelas',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Altura do Pinheiro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Altura do Ximeno',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Altura dos Coitos',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Alturas do Barroso',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Alturinha da Sancha',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Alumieira',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Alva',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Alva de Pataias',
    'municipality': 1001,
    'postalCode': 2445
  },
  {
    'locality': 'Alvadia',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Alvados',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Alvaiade',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Alvaiázere',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Alvaiázere',
    'municipality': 1002,
    'postalCode': 3254
  },
  {
    'locality': 'Alvalade',
    'municipality': 1509,
    'postalCode': 7565
  },
  {
    'locality': 'Alvar',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Alvaredo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Alvaredos',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Alvarelhos',
    'municipality': 1318,
    'postalCode': 4745
  },
  {
    'locality': 'Alvarelhos',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Alvarelhos',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Alvarenga',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Alvares',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Alvariana',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Alvarim',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Alvarim',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Alvarim',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Alvarinha',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Alvarinho',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Alvarinho',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Alvarinhos',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Alvariça',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alvarotes',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Alvarrões',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Alvarães',
    'municipality': 1609,
    'postalCode': 4905
  },
  {
    'locality': 'Alvações',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Alvações do Corgo',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Alvega',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Alvega',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Alveijar',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Alveijar',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Alveijares',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Alveite Grande',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Alveite Pequeno',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Alveite Pequeno',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Alvelhe',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Alvelos',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Alvelos',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Alvelos',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Alvem',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Alvendre',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Alverangel',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alverca da Beira',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Alverca de Baixo',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alverca de Cima',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Alverca do Ribatejo',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Alverca do Ribatejo',
    'municipality': 1114,
    'postalCode': 2619
  },
  {
    'locality': 'Alves',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Alves',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Alviada',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alviobeira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Alvisquer',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Alvisquer',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Alvite',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Alvite',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Alvite Baixo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alvite de Cima',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Alvites',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Alvites',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Alvitinho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Alvito',
    'municipality': 203,
    'postalCode': 7920
  },
  {
    'locality': 'Alvito',
    'municipality': 203,
    'postalCode': 7924
  },
  {
    'locality': 'Alvito',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Alvito',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alvito da Beira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Alvito de Cima',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Alvito de São Martinho',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Alvito de São Pedro',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Alviães',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Alvoco da Serra',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Alvoco das Várzeas',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Alvoeira',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Alvogadas',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Alvor',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Alvorge',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Alvorninha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Alvorão',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Alçaperna',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Além',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Além',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Além',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Além',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Além',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Além',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Além',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Além Parte',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Além Ribeiro',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Além Ribeiro',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Além Rio',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Além a Vila',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Além da Fonte',
    'municipality': 1701,
    'postalCode': 5085
  },
  {
    'locality': 'Além da Ponte',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Além da Ribeira',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Além da Ribeira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Além da Ribeira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Além da Ribeira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Além de Água',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Além do Rio',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Além do Rio',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Além do Rio',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Além do Rio',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Além do Rio',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Além do Rio',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Além do Rio',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Além-do-Rio',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Alêm do Porto',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Amada',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2720
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2650
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2700
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2614
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2610
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2724
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2654
  },
  {
    'locality': 'Amadora',
    'municipality': 1115,
    'postalCode': 2704
  },
  {
    'locality': 'Amaral',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Amarante',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Amareira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Amarela',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Amarela',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Amarela',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Amarela',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Amarelas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Amareleja',
    'municipality': 210,
    'postalCode': 7885
  },
  {
    'locality': 'Amarelos',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Amares',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Amarinhos',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Amaro Gonçalves',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Amba',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Ameais',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Ameais',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Ameal',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Ameal',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Ameal',
    'municipality': 603,
    'postalCode': 3045
  },
  {
    'locality': 'Ameal',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Ameal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Ameal',
    'municipality': 1317,
    'postalCode': 4415
  },
  {
    'locality': 'Ameal',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Ameal',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Ameal',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Ameal de Cá',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Ameal de Lá',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Amedo',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Ameijoafra',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Ameijoeira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Ameira',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Ameira',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Ameira',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Ameiralinho',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Ameiras',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Ameiras de Baixo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Ameiras de Cima',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Ameiras do Incenso',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Ameixas',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Ameixeda',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Ameixeira',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Ameixeira',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Ameixeira',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Ameixeira da Foia',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Ameixeiras',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Ameixeirinhas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Ameixiais',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Ameixial',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Ameixial',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Ameixieira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Ameixieira',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Ameixieira',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Ameixieira',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Ameixieira',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Ameixieiraria',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Ameixiosa',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Ameixoeira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Ameixoeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Ameixoeira',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Ameixoeira',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Ameixoeira',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Ameixoeira',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Ameixoeiras',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Amendo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Amendoais',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Amendoal',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Amendoeira',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Amendoeira',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Amendoeira',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Amendoeira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Amendoeira',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Amendoeira Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Amendoeira da Serra',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Amendoeira de Baixo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Amendoeira de Baixo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Amendoeira de Cima',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Amendoeira de Cima',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Amendoeira do Campo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Amendoeiras',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Amezendinha',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Amiais',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Amiais',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Amiais',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Amiais',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Amiais',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Amiais',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Amiais da Rocha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Amiais de Baixo',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Amiais de Cima',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Amial',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Amial',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Amial',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Amial',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Amial',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Amial',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Amial',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Amial',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Amial',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Amiar',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Amieira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Amieira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Amieira',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Amieira',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Amieira',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Amieira',
    'municipality': 709,
    'postalCode': 7220
  },
  {
    'locality': 'Amieira',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Amieira',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Amieira',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Amieira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Amieira',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Amieira',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Amieira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Amieira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Amieira',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Amieira',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Amieira Cova',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Amieira do Tejo',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Amieiras',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Amieiras',
    'municipality': 707,
    'postalCode': 7490
  },
  {
    'locality': 'Amieiras',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Amieirinha',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Amieirinha',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Amieiro',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Amieiro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Amieiro',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Amieiro',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Amieiros',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Amieiros',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Amieiros',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Amieiros',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Amilo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Amiosa',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Amiosinho',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Amioso',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Amioso Cimeiro',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Amioso Fundeiro',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Amioso do Senhor',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Amoeiras',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Amoinha Velha',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Amonde',
    'municipality': 1609,
    'postalCode': 4925
  },
  {
    'locality': 'Amor',
    'municipality': 1009,
    'postalCode': 2404
  },
  {
    'locality': 'Amor',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Amora',
    'municipality': 1510,
    'postalCode': 2845
  },
  {
    'locality': 'Amoreira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Amoreira',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Amoreira',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Amoreira',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Amoreira',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Amoreira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Amoreira',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Amoreira',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Amoreira',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Amoreira',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Amoreira',
    'municipality': 1105,
    'postalCode': 2755
  },
  {
    'locality': 'Amoreira',
    'municipality': 1105,
    'postalCode': 2649
  },
  {
    'locality': 'Amoreira',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Amoreira',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Amoreira',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Amoreira',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Amoreira Alta',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Amoreira Cimeira',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Amoreira da Gândara',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Amoreira da Torre',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Amoreira de Baixo',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Amoreira de Cima',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Amoreira do Repolão',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Amoreiras',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Amoreiras',
    'municipality': 1109,
    'postalCode': 2655
  },
  {
    'locality': 'Amoreiras Gare',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Amores',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Amorim',
    'municipality': 1313,
    'postalCode': 4495
  },
  {
    'locality': 'Amorosa',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Amorrrosa',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Amparo',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Amêda',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Amêndoa',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Amêndoa',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Ana Velha',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Anadia',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Anaguéis',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Anairas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Anais',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Ancas',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Ancebelo',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Ancede',
    'municipality': 1302,
    'postalCode': 4640
  },
  {
    'locality': 'Anceiro',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Anceriz',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Anchas',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Ancinho',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Anciães',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Anciães',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Andainho',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Andam',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Andarilho',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Andeviso',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Andorinha',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Andorinha',
    'municipality': 611,
    'postalCode': 3405
  },
  {
    'locality': 'Andorinhas',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Andrades',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Andreus',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Andreus',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Andrezes',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Andrezes',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Andrães',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Andrés',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Andrés',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Anelhe',
    'municipality': 1703,
    'postalCode': 5425
  },
  {
    'locality': 'Angeja',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Angios',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Angorez',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Angra do Heroísmo',
    'municipality': 4301,
    'postalCode': 9700
  },
  {
    'locality': 'Angra do Heroísmo',
    'municipality': 4301,
    'postalCode': 9701
  },
  {
    'locality': 'Angueira',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Angueiro',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Angustias',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Anico',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Anissó',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Anjo da Guarda',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Anobra',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Anorgirinho',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Ansara',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Ansiães',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Ansião',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Ansul',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Anta',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Anta',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Anta',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Anta',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Antanhol',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Antas',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Antas',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Antas',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Antas',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Antas',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Antas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Antas',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Antas',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Antas',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Antas',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Antas de Baixo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Antas de Baixo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Antas de Baixo',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Antas de Cima',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Antas de Cima',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Antas de Cima',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Antas do Meio',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Antela',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Antelas',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Antemil',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Anteporta',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Anterronde',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Antes',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Antigo',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Antigo',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Antigo de Curros',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Antime',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Antoa',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Antoinha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Antões',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Antões',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': "Antões D'Além",
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Ançada',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Anços',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Anços',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Ançã',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Apariça',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Apariços',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Apaulinha',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Apeadeiro',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Apeadeiro',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Apeadeiro de Castelãos',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Apelação',
    'municipality': 1107,
    'postalCode': 2680
  },
  {
    'locality': 'Aperral',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Apião',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Apostiça',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Apresentação',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Apúlia',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Aqui Del Rei',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arada',
    'municipality': 115,
    'postalCode': 3885
  },
  {
    'locality': 'Arada',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Arada',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Aradas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Aradas',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Aradas',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Arado',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Aral',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Aramanha',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Aramenha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Aranha',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Aranhadouro',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Aranhas',
    'municipality': 507,
    'postalCode': 6090
  },
  {
    'locality': 'Arazede',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Araújo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Araújo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Araújos',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Arbonça',
    'municipality': 305,
    'postalCode': 4820
  },
  {
    'locality': 'Arca',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Arca',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Arca',
    'municipality': 1810,
    'postalCode': 3475
  },
  {
    'locality': 'Arcas',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Arcas',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Arcas',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Arcas',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Arcas',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Arce',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Arcebispa',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Arcela',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Arcela',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arcela',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arco',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Arco',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Arco',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Arco',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Arco',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arco',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Arco Pequeno',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Arco da Calheta',
    'municipality': 3101,
    'postalCode': 9370
  },
  {
    'locality': 'Arco da Geia - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arco da Memória',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Arco de Baúlhe',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Arco de São Jorge',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Arcos',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Arcos',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Arcos',
    'municipality': 1316,
    'postalCode': 4480
  },
  {
    'locality': 'Arcos',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arcos',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Arcos',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Arcos de Valdevez',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arcos de Valdevez',
    'municipality': 1601,
    'postalCode': 4974
  },
  {
    'locality': 'Arcossó',
    'municipality': 1703,
    'postalCode': 5425
  },
  {
    'locality': 'Arcozelo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Arcozelo',
    'municipality': 1317,
    'postalCode': 4410
  },
  {
    'locality': 'Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arcozelo',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Arcozelo da Serra',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Arcozelo da Torre',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Arcozelo das Maias',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Arcozelo de Várzea',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Arcozelo do Cabo',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Ardazubre',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Ardegão',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Ardegão',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Ardena',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Ardido',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Ardãos',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Areal',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Areal',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Areal',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Areal',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Areal',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Areal',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Areal',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Areal',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Areal',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Areal',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Areal (Macieira de Cambra)',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Areal (São Pedro de Castelões)',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Areal Gordo',
    'municipality': 805,
    'postalCode': 8009
  },
  {
    'locality': 'Areal Gordo',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Areal de Arca',
    'municipality': 1810,
    'postalCode': 3475
  },
  {
    'locality': 'Arealão',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Areeiro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Areeiro',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Areeiro',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Areeiro',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Areeiro',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Areeiro',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Areeiro',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Areeiro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Areeiro',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Areeiro',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Areeiro Novo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Areeiro de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Arega',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Areia',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Areia',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Areia',
    'municipality': 1105,
    'postalCode': 2750
  },
  {
    'locality': 'Areia',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Areia Branca',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Areia Funda',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Areia Larga',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Areia da Camarneira',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Areia de Baixo',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Areia de Cima',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Areias',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Areias',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Areias',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Areias',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Areias',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Areias',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Areias',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Areias',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Areias',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Areias',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Areias',
    'municipality': 1314,
    'postalCode': 4780
  },
  {
    'locality': 'Areias',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Areias',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Areias',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Areias',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Areias',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Areias (São Vicente)',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Areias Gordas',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Areias Novas',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Areias da Quinta Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Areias de Baixo',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Areias de Porches',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Areias de Pêra',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Areias de Vilar',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Areias do Pinheiro',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Areias dos Moínhos',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Areias dos Simões',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Areirinha',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Arelho',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Arentim',
    'municipality': 303,
    'postalCode': 4705
  },
  {
    'locality': 'Areola',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Areolas',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Areosa',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Areosa',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Areosa',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Areosa',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Areosa',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Areosa',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Arestal',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Arestim',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Arez',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Arez',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Arga de Baixo',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Arga de Cima',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Argamassa',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Argana',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Arganil',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Arganil',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Argela',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Argemil',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Argemil',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Argeriz',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Argivai',
    'municipality': 1313,
    'postalCode': 4490
  },
  {
    'locality': 'Argomil',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Argoncilhe',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Argontim',
    'municipality': 305,
    'postalCode': 4820
  },
  {
    'locality': 'Argozelo',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Argueda',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arguedeira',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Aricera',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Arieira',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Arieira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Arieira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Arieiras',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Arieiro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Arieiro',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Arieiro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Arieiro',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Arieiro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Aringa',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Arinha',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arinho',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Arinhos',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Arinto',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Ariolos',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Ariques',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Ariz',
    'municipality': 1307,
    'postalCode': 4625
  },
  {
    'locality': 'Ariz',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Arjona',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Armada',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Armada',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Armada - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Armadilhas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Armadouro',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Armamar',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Armamar',
    'municipality': 1801,
    'postalCode': 5114
  },
  {
    'locality': 'Armazéns',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Armação de Pêra',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Armil',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Armoniz',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Armés',
    'municipality': 1111,
    'postalCode': 2719
  },
  {
    'locality': 'Armés',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Arnadelo',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Arnado',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Arnal',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Arnal',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Arnal',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Arnal',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Arnas',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Arnaçó',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Arneirinho',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Arneiro',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Arneiro',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Arneiro',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Arneiro',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Arneiro',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Arneiro',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Arneiro',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Arneiro',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Arneiro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Arneiro',
    'municipality': 1105,
    'postalCode': 2785
  },
  {
    'locality': 'Arneiro',
    'municipality': 1105,
    'postalCode': 2775
  },
  {
    'locality': 'Arneiro',
    'municipality': 1213,
    'postalCode': 7400
  },
  {
    'locality': 'Arneiro',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Arneiro',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Arneiro',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Arneiro',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Arneiro Alto',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Arneiro Novo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Arneiro Tecelão',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Arneiro da Fonte',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Arneiro da Preta',
    'municipality': 1415,
    'postalCode': 2120
  },
  {
    'locality': 'Arneiro da Rocha',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Arneiro da Vinha',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Arneiro da Volta',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Arneiro das Figueiras',
    'municipality': 1405,
    'postalCode': 2135
  },
  {
    'locality': 'Arneiro das Milhariças',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Arneiro das Roçadas',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Arneiro de Anteporta',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Arneiro de Arreganha',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Arneiro de Baixo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Arneiro de Baixo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Arneiro de Cima',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Arneiro de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Arneiro de Sazes',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Arneiro de Sazes',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Arneiro de São João',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Arneiro de Tremês',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Arneiro do Pisão',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Arneiro dos Borralhos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Arneiro dos Marinheiros',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Arneiro dos Tremoços',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Arneiros',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Arneiros',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Arneiros',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Arneiros da Gafaria',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Arneirão',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Arneirós',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Arnelas',
    'municipality': 1317,
    'postalCode': 4415
  },
  {
    'locality': 'Arnoia',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Arnoia',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Arnosa',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Arnozela',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Arnozelo',
    'municipality': 914,
    'postalCode': 5155
  },
  {
    'locality': 'Aroal',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Aroal',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Aroeira',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Aroeira',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Aroeira',
    'municipality': 1503,
    'postalCode': 2820
  },
  {
    'locality': 'Aroeiras',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Arosa',
    'municipality': 308,
    'postalCode': 4800
  },
  {
    'locality': 'Arouca',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Arouca',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Arpila de Cima',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Arqueta',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Arquinho',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arquipélago das Berlengas',
    'municipality': 1014,
    'postalCode': 2520
  },
  {
    'locality': 'Arquitecto',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Arrabal',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Arrabal do Arrimal',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Arrabalde',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Arrabalde',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Arrabalde',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Arrabalde',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Arrabalde',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arrabalde',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Arrabalde Santo António',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Arrabalde São Francisco',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Arrabalde de Baixo',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Arrabalde de Bouças',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arrabalde de Cima',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Arrabalde de São Lázaro',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Arrabães',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Arraia',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Arraiados',
    'municipality': 1508,
    'postalCode': 2955
  },
  {
    'locality': 'Arraiolos',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Arramadinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Arramadinha do Monte do Mal Julgado',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Arrancada',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Arrancada',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Arrancada',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Arrancada',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Arrancada',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Arrancada do Vouga',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Arrancadas',
    'municipality': 204,
    'postalCode': 7230
  },
  {
    'locality': 'Arranhado',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Arranhadouro',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Arranhó',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Arranzina',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Arrascada',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Arrassaio',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Arreais',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Arrebenta',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Arrebentão',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Arrebolada de Cima',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Arreciadas',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Arreeiros',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Arreigada',
    'municipality': 1309,
    'postalCode': 4595
  },
  {
    'locality': 'Arremessa',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arrentela',
    'municipality': 1510,
    'postalCode': 2840
  },
  {
    'locality': 'Arrentela',
    'municipality': 1510,
    'postalCode': 2844
  },
  {
    'locality': 'Arrepiado',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Arretorta',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Arriacha Cimeira',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Arriacha Fundeira',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Arribança',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Arribação',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Arribão',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Arrifana',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Arrifana',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Arrifana',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Arrifana',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Arrifana',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Arrifana',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Arrifana',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Arrifana',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Arrifana',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Arrifana',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Arrifana',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Arrifana',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Arrifana',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Arrifana',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Arrifana',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Arrifana',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Arrifaninha',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Arrife',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Arrifes',
    'municipality': 4203,
    'postalCode': 9500
  },
  {
    'locality': 'Arrifes',
    'municipality': 4203,
    'postalCode': 9504
  },
  {
    'locality': 'Arrimal',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Arrivã',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arrizada',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Arriça',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Arrocha',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Arrocha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Arrochal',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Arrocheira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Arrochela',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Arrochela',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Arrochela',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Arrochela',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arrochelas',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Arrocásia',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Arrodeiro',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Arroia',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Arroio',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Arroio',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Arroios',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Arrojadouro',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Arrompida',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Arronches',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Arrota',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Arrotas',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Arroteia',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Arroteia',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Arroteia',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Arroteia',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Arroteia',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Arroteia',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Arroteia',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Arroteia',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Arroteia',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Arroteia',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Arroteia',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Arroteia',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Arroteia',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Arroteia',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Arroteia',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Arroteia',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Arroteia',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arroteia Nova',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Arroteia de Baixo',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Arroteia de Cima',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Arroteias',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Arroteira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Arrouquelas',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Arrozenda',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Arroça',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Arruda',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Arruda dos Pisões',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Arruda dos Vinhos',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Arruda dos Vinhos',
    'municipality': 1102,
    'postalCode': 2634
  },
  {
    'locality': 'Arruelas',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Arrujo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arrôta',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Arrôtas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Arte Nova',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Arteiro',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Arufe',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Aruil',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Arvoredo',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Arvoredo',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Arvorinhas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Arzila',
    'municipality': 603,
    'postalCode': 3045
  },
  {
    'locality': 'Arzinha',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Arábia',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Arão',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Arão',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Arão',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Arões',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Arões',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Arões (São Romão)',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Ascensão',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Ascenção',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Asfamil',
    'municipality': 1111,
    'postalCode': 2635
  },
  {
    'locality': 'Asneiros',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Asnela',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Asnela',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Asnela',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Aspra',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aspras',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Assacaias',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Assafarge',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Assafora',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Assamassa',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Assamassa',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Assamonde',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Assanha da Paz',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Assanhas',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Assares',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Asseca (Santo Estevão)',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Asseca (santa Maria)',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Asseca (santiago)',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Asseiceira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Asseiceira',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Asseiceira',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Asseiceira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Asseiceira',
    'municipality': 1508,
    'postalCode': 2965
  },
  {
    'locality': 'Asseiceira Pequena',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Asseiço',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Assenha',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Assenta',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Assenta',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Assentada do Chão Novo',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Assentiz',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Assentiz',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Assento',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Assento',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Assento',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Assento',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Assento',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Assento',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Assento',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Assento',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Assento',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Assento',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Assequins',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Assim Chamado',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Assoreiras',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Assumada',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Assumada da Bemposta',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Assumadas',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Assumadas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Assumadas',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Assumadas',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Assumar',
    'municipality': 1211,
    'postalCode': 7450
  },
  {
    'locality': 'Assureira',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Assureira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Assureira',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Assureiras',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Astromil',
    'municipality': 1310,
    'postalCode': 4585
  },
  {
    'locality': 'Ataboeira',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Ataboeira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Ataboeira Nova',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Ataboeirinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Atabua',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Atadoa',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Atadoínha',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Atafona',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Atafona',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Atafona',
    'municipality': 4203,
    'postalCode': 9545
  },
  {
    'locality': 'Ataija de Baixo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Ataija de Cima',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Atalaia',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Atalaia',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Atalaia',
    'municipality': 503,
    'postalCode': 6200
  },
  {
    'locality': 'Atalaia',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Atalaia',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Atalaia',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Atalaia',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Atalaia',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Atalaia',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Atalaia',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Atalaia',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Atalaia',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Atalaia',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Atalaia',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Atalaia',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Atalaia',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Atalaia',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Atalaia',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Atalaia',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Atalaia',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Atalaia',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Atalaia Cimeira',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Atalaia Fundeira',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Atalaia do Campo',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Atalaias',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Atalaios',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Atalhada',
    'municipality': 4201,
    'postalCode': 9560
  },
  {
    'locality': 'Atalhadores',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Atalho',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Atalho',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Atalia',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Ataíde',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Ataúde',
    'municipality': 1601,
    'postalCode': 4974
  },
  {
    'locality': 'Ataúde',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Atei',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Atela',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Atenor',
    'municipality': 406,
    'postalCode': 5225
  },
  {
    'locality': 'Atianha',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Atibá',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Atibá',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Atilho',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Atiães',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Atoleiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Atouguia',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Atouguia',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Atouguia',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Atouguia',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Atouguia da Baleia',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Atrás dos Tanques',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Atágueda',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Atães',
    'municipality': 308,
    'postalCode': 4800
  },
  {
    'locality': 'Atães',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Auditor',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Avajo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Aval',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aval',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Avanca',
    'municipality': 108,
    'postalCode': 3860
  },
  {
    'locality': 'Avanteira',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Avanteira',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Avantos',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Avarenta',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Avecasta',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Aveia',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Aveia',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Aveiras de Baixo',
    'municipality': 1103,
    'postalCode': 2050
  },
  {
    'locality': 'Aveiras de Cima',
    'municipality': 1103,
    'postalCode': 2050
  },
  {
    'locality': 'Aveireiro',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Aveiro',
    'municipality': 105,
    'postalCode': 3810
  },
  {
    'locality': 'Aveiro',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Aveiro',
    'municipality': 105,
    'postalCode': 3814
  },
  {
    'locality': 'Aveiro',
    'municipality': 105,
    'postalCode': 3804
  },
  {
    'locality': 'Aveiro',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Avelais',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Avelais',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Avelal',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Avelal',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Avelal',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Avelal',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Avelal de Baixo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Avelal de Cima',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Avelanoso',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Avelar',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Avelar',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Avelar',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Avelar',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Avelar',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aveleda',
    'municipality': 303,
    'postalCode': 4705
  },
  {
    'locality': 'Aveleda',
    'municipality': 303,
    'postalCode': 4709
  },
  {
    'locality': 'Aveleda',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Aveleda',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Aveleda',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Aveleda',
    'municipality': 1316,
    'postalCode': 4485
  },
  {
    'locality': 'Aveleda',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Aveleda',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Aveleda',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Aveleda',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aveledas',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Aveledo',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Aveleira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Aveleira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Aveleira',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Aveleira',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Aveleira',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Aveleira',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Aveleira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Aveleira',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Aveleira',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Aveleira',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Aveleira',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Aveleira',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Aveleira',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Aveleiras',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Aveleiras',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Aveleiras',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Avelelas',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Avelheira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Avelinha',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Avelosa',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Aveloso',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Aveloso',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aveloso',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Avelão',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Avelãs da Ribeira',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Avelãs de Ambom',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Avelãs de Caminho',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Avelãs de Cima',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Avenal',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Avenal',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Avenal',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Avessada',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Avessada',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Avessada',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Avessada',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Avessada',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Avessada',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Avessadas',
    'municipality': 1307,
    'postalCode': 4630
  },
  {
    'locality': 'Avessadas',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Avesseira',
    'municipality': 908,
    'postalCode': 6260
  },
  {
    'locality': 'Avesseira',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Aveção do Cabo',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Aveção do Meio',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Aveçãozinho',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Aviais',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Avidagos',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Avidagos',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Avidos',
    'municipality': 312,
    'postalCode': 4770
  },
  {
    'locality': 'Avinhó',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Avinhó',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Avintes',
    'municipality': 1317,
    'postalCode': 4430
  },
  {
    'locality': 'Avintes',
    'municipality': 1317,
    'postalCode': 4434
  },
  {
    'locality': 'Avioso',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Avis',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Avitoure',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Avitureira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Aviúges',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Avé-Sol',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Avô',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Avô',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Avões',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Avões de Cá',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Azabucho',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Azagães',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Azambuja',
    'municipality': 1103,
    'postalCode': 2050
  },
  {
    'locality': 'Azambuja',
    'municipality': 1103,
    'postalCode': 2054
  },
  {
    'locality': 'Azambujeira',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Azambujeira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Azambujeira',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Azambujeira dos Carros',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Azaruja',
    'municipality': 705,
    'postalCode': 7005
  },
  {
    'locality': 'Azeda',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Azedia',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Azedão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Azeitada',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Azeiteira',
    'municipality': 210,
    'postalCode': 7885
  },
  {
    'locality': 'Azeitão',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Azeitão',
    'municipality': 1512,
    'postalCode': 2925
  },
  {
    'locality': 'Azeitão',
    'municipality': 1512,
    'postalCode': 2929
  },
  {
    'locality': 'Azenha',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Azenha',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Azenha',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Azenha',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Azenha',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Azenha',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Azenha',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Azenha',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Azenha',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Azenha',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Azenha',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Azenha',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Azenha',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Azenha',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Azenha',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Azenha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Azenha',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Azenha',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Azenha',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Azenha',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Azenha',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Azenha Cimeira',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Azenha Cimeira',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Azenha Fundeira',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Azenha Nova',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Azenha Nova',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Azenha Nova',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Azenha Regal',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Azenha Velha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Azenha Velha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Azenha a Nova',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Azenha da Amieira',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Azenha da Carrasca',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Azenha da Catucha',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Azenha da Cova',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Azenha da Nogueira',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Azenha da Quinta',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Azenha das 7 Fontes',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Azenha das Cachoças',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Azenha das Machadas',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Azenha das Romeiras',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Azenha de Baixo',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Azenha de Baixo',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Azenha de Baixo',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Azenha de Baixo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Azenha de Baixo',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Azenha de Cima',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Azenha de Cima',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Azenha do Areal',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Azenha do Carregal',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Azenha do Mar',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Azenha do Meio',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Azenha do Rio',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Azenha do Sobrado',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Azenha dos Atafios',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Azenha dos Mós',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Azenhas',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Azenhas',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Azenhas',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Azenhas de Cima',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Azenhas do Mar',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Azere',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Azervada de Baixo',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Azervada de Cima',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Azervadinha',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Azerveira',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Azeveda',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Azevedo',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Azevedo',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Azevedo',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Azevedo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Azevedo',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Azevinheiro',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Azevo',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Azia',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Azibal',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Azibeiro',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Azibeiro',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Aziboso',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Azilheira',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Azinhaga',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Azinhaga',
    'municipality': 1412,
    'postalCode': 2150
  },
  {
    'locality': 'Azinhaga',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Azinhaga Velha',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Azinhaga da Valada',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Azinhal',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Azinhal',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Azinhal',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Azinhal',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Azinhal',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Azinhal',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Azinhal',
    'municipality': 902,
    'postalCode': 6350
  },
  {
    'locality': 'Azinhal',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Azinhal',
    'municipality': 1509,
    'postalCode': 7500
  },
  {
    'locality': 'Azinhal Redondo',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Azinhal dos Mouros',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Azinhal e Amendoeira',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Azinhalete',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Azinhalinho',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Azinhalinho',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Azinheira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Azinheira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Azinheira',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Azinheira',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Azinheira dos Barros',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Azinheirinha Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Azinheiro',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Azinhosa',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Azinhoso',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Aziral',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Azival',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Azival',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Azoia',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Azoia',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Azoia',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Azoia de Baixo',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Azoia de Cima',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Azoio',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Azueira',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Azurara',
    'municipality': 1316,
    'postalCode': 4480
  },
  {
    'locality': 'Azurva',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Azurveira',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Azóia',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Azões',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Açor',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Açor',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Açor',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Açor',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Açorda',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Açoreira',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Açoreira',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Açoreira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Açoreiro',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Açores',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Açores',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Açores',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Açores',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Açougue',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Açougue',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Açude Pinto',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Açureira',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Babau',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Babe',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Baceiros',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Baceladas',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Bacelar',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Baceleirinho',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bacelinhos',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Bacelo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bacelo',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bacelo',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Bacelo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bacelo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Bacelo',
    'municipality': 1301,
    'postalCode': 4605
  },
  {
    'locality': 'Bacelo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bacelos',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bacelos',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bacelos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bacelos Baixo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bacelos Cima',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bacelos e Algar',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bachareis',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Baciosas',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Bacozil',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Badamalos',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Badoucos',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Bafancas',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Bafareira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bafueiras',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Baganha',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Bago de Baixo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bago de Cima',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bagueixe',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Baguim do Monte',
    'municipality': 1304,
    'postalCode': 4435
  },
  {
    'locality': 'Bagulhão',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Bagunte',
    'municipality': 1316,
    'postalCode': 4480
  },
  {
    'locality': 'Baia',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Baia',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Bailadouro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Bailadouro',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Bailão',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Baiol',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Baiona',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bairrada',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Bairrada',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Bairrada',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Bairrada',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bairrada',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bairradas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Bairradas',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Bairradinha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bairradinha',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bairral',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Bairral',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Bairral',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Bairral',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Bairrel',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bairro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bairro',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Bairro',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bairro',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Bairro',
    'municipality': 312,
    'postalCode': 4765
  },
  {
    'locality': 'Bairro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Bairro',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Bairro',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bairro',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Bairro',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Bairro',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Bairro',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Bairro',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bairro',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Bairro 25 de Abril',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Bairro Aberto',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Bairro Alto',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bairro Além',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Bairro Atrás do Cemitério',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Bairro Braga',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Bairro Campo de Futebol',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bairro Cornélio',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Bairro Couto',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Bairro Dona Constância',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Bairro Ferragial da Cruz',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Bairro Fontes Pereira de Melo',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Bairro Forno do Tijolo',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bairro Foxo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Bairro Fundo Fomento Habitação',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bairro Grande',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bairro Ilídio Carreira',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Bairro Industrial',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Bairro Lenteiros',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro Lino de Carvalho',
    'municipality': 712,
    'postalCode': 7080
  },
  {
    'locality': 'Bairro Mariano',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bairro Martins Soares',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Bairro Mato do Antão',
    'municipality': 1107,
    'postalCode': 2660
  },
  {
    'locality': 'Bairro Moinho Cantigolas',
    'municipality': 1107,
    'postalCode': 2660
  },
  {
    'locality': 'Bairro Moinho de Vento',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Bairro Moinho de Vento',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Bairro Municipal',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bairro Nossa Senhora da Conceição',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Bairro Nossa Senhora das Necessidades',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 1509,
    'postalCode': 7500
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bairro Novo',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bairro Novo da Provença',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bairro Novo da Tapada',
    'municipality': 705,
    'postalCode': 7005
  },
  {
    'locality': 'Bairro Novo de Cadoços',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Bairro Novo de Teivas',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Bairro Padre Mendes',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bairro Pequeno',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bairro Quinta das Ferreiras',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Bairro Rufina',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bairro Santa Luzia',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Bairro Senhora das Pressas',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Bairro Social',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Bairro Social da Costa',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Bairro São Paulo',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Bairro Tijomel',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Bairro Trás da Igreja',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Bairro Vale Escuro',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Bairro Vermelho',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro da Areia',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bairro da Bouçã',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Bairro da Carriça',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro da Carvalheira',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro da Casa do Povo',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Bairro da Corte Nova',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Bairro da Corticeira Amorim',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Bairro da Cruz',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Bairro da EDP',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Bairro da Edp',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Bairro da Escola',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Bairro da Estação',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Bairro da Estação',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bairro da Feiteira',
    'municipality': 1213,
    'postalCode': 7400
  },
  {
    'locality': 'Bairro da Ferreira',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Bairro da Figueira',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Bairro da Força Aérea',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bairro da Imaculada Conceição',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bairro da Martinha',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Bairro da Martinha',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Bairro da Mosca',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Bairro da Pocariça',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Bairro da Ponte',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Bairro da Ponte',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Bairro da Quinta Nova',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Bairro da Quintinha',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Bairro da Ribeira',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Bairro da Serração',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bairro da Tapada',
    'municipality': 705,
    'postalCode': 7005
  },
  {
    'locality': 'Bairro da Torre',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Bairro das Flores',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Bairro das Ladeiras',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Bairro das Lages',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Bairro das Pedras Negras',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Bairro das Pitinhas',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Bairro de Nossa Senhora de Lurdes',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro de Oficiais',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Bairro de Rosados',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bairro de Santiago',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Bairro de Santo António',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Bairro de Santo António',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro de Santo António',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Bairro de Sargentos',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Bairro de São Mamede',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bairro de São Martinho',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Bairro de São Miguel',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Bairro de São Miguel',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bairro do Barrão',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Bairro do Caldeirão',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Bairro do Carriço',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bairro do Carvalhal',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Bairro do Carvalho',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bairro do Florindo',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Bairro do Lagar',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Bairro do Patarinho',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Bairro do Roseiral',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Bairro do Sol',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bairro do Sorrodelo',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Bairro do Totobola',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Bairro do Vitorino',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Bairro dos Patricios',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Bairro dos Pobres',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bairros',
    'municipality': 106,
    'postalCode': 4550
  },
  {
    'locality': 'Bairros',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Bairros',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Bairros',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Bairros',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bairrão',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Baiuca de Oliveira',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Baixa da Banheira',
    'municipality': 1506,
    'postalCode': 2835
  },
  {
    'locality': 'Baixeia',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Baixinho',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Baixinho',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Baixinhos',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Baixo',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Baixo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baixo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Baixo dos Gaios',
    'municipality': 1105,
    'postalCode': 2765
  },
  {
    'locality': 'Baixos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Baião',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Baião',
    'municipality': 1302,
    'postalCode': 4640
  },
  {
    'locality': 'Baião',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Baiãs',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Bajanca',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Bajancas Cimeiras',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Bajancas Fundeiras',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Bajouca',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Bajouca',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Bajouca de Baixo',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Bajouca de Cima',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Bajouco',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Baladia',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Balado',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Balagota',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Balaida',
    'municipality': 312,
    'postalCode': 4760
  },
  {
    'locality': 'Balancho',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Balancho',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Balancho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Balancho',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Balazar',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Balazar',
    'municipality': 1313,
    'postalCode': 4570
  },
  {
    'locality': 'Balaído',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Balcão',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Baldeira',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Baldieira',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Baldio',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Baldio da Granja',
    'municipality': 708,
    'postalCode': 7240
  },
  {
    'locality': 'Baldios',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Baldios',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Baldos',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Baldosa',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baleal',
    'municipality': 1014,
    'postalCode': 2520
  },
  {
    'locality': 'Baleeira',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Baleia',
    'municipality': 1109,
    'postalCode': 2655
  },
  {
    'locality': 'Baleia',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Baleizão',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Baleizão',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Balerques',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Balieira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Balisque',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Balneário',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baloca',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Balocas',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Balocas',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Baloita',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Baloquinhas',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Balouco',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Baloutas',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Balsa',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Balsa',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Balsa',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Balsa',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Balsa',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Balsa do Douro',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Balsada',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Balsamão',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Balsas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Balsas',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Balsemão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Balsemão',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Baltar',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Baltar',
    'municipality': 1310,
    'postalCode': 4585
  },
  {
    'locality': 'Baltar de Baixo',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Baltar de Cima',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Baltaria',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Balteiro',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Balteiro',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Balteiro',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Balteiro',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Balteiro',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Balugães',
    'municipality': 302,
    'postalCode': 4905
  },
  {
    'locality': 'Balurcos de Baixo',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Balurcos de Cima',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Balurquinho',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Banazeiro',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Banco',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': "Banda D' Além",
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': "Banda D'Além",
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Banda Mirante',
    'municipality': 1509,
    'postalCode': 7565
  },
  {
    'locality': 'Banda Zil',
    'municipality': 1509,
    'postalCode': 7565
  },
  {
    'locality': 'Banda da Silva',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Banda de Além',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Banda de Além',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Banda do Sol',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Bandavises',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Bandeira',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Bandeira',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bandeiras',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Bandonagens',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Banduge',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bandulha',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Banhado',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Banho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Banho',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Banho e Carvalhosa',
    'municipality': 1307,
    'postalCode': 4635
  },
  {
    'locality': 'Banhos',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Banhos',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Banhosa',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Banzão',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Baralha',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baralhas',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Baralhas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Baralho',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Barandas',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Barata',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baratas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baratinha',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Baraçais',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Baraçal',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Baraçal',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Barba Torta',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Barba Torta',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Barba de Bode',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Barbacena',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Barbadães de Baixo',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Barbadães de Cima',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Barbaido',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Barbas',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Barbas',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Barbas Novas',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Barbatos',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barbeira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barbeito',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barbeito',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Barbeito',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Barbeito',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barbeito',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barbeito',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Barbeitos',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Barbeitos',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barbeitos',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barbeitos',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barbelote',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barbens',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Barbines',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Barbosa',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Barbosa',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Barbosa',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Barbosa',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barbrita',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barbuda',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Barbuda',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barbudo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barbudos',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Barca',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Barca',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Barca Nova',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Barca da Amieira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Barca de Alva',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Barca do Concelho',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Barca do Loureiro',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Barca do Pego',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Barcai',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barcalinho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barcarena',
    'municipality': 1110,
    'postalCode': 2730
  },
  {
    'locality': 'Barcarena',
    'municipality': 1110,
    'postalCode': 2734
  },
  {
    'locality': 'Barcel',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Barcelos',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Barcelos',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Barcelos',
    'municipality': 302,
    'postalCode': 4754
  },
  {
    'locality': 'Barco',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Barco',
    'municipality': 308,
    'postalCode': 4809
  },
  {
    'locality': 'Barco',
    'municipality': 503,
    'postalCode': 6215
  },
  {
    'locality': 'Barco',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barco',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barco',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Barco',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Barcoila',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Barcos',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Barcouço',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Bardeiras',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Barges',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bargo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Baroso',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Barqueira de Baixo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barqueira de Cima',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Barqueira de Cima',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barqueiro',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barqueiro',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Barqueiro',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Barqueiros',
    'municipality': 302,
    'postalCode': 4740
  },
  {
    'locality': 'Barqueiros',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barqueiros',
    'municipality': 1704,
    'postalCode': 5040
  },
  {
    'locality': 'Barra',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Barra',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Barra',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Barra Cheia',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Barra Cheia',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Barrabés',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Barraca',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Barraca da Boavista',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Barraca da Gestosa',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Barracas',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Barracas',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Barracha',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Barraco',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barracão',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Barracão',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Barracão',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Barracão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barracão',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Barracão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Barracão',
    'municipality': 1009,
    'postalCode': 2424
  },
  {
    'locality': 'Barracão',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Barracão',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barracão',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Barracão',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Barracão',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Barracão',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Barracão',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Barracão das Latas',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Barrada',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Barrada',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Barrada',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Barrada',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Barrada',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barrada',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Barrada',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Barrada',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Barrada',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barrada do Poço',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Barradas',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Barradas',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Barradas',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Barradas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Barradinha',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Barradinha',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Barragem',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Barragem',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Barragem',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Barragem Monte da Rocha',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Barragem da Pracana',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Barragem das Campilhas',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Barragem de Alqueva',
    'municipality': 210,
    'postalCode': 7860
  },
  {
    'locality': 'Barragem de Belver',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Barragem de Maranhão',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Barragem do Alto Ceira',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Barragem do Alvito',
    'municipality': 207,
    'postalCode': 7940
  },
  {
    'locality': 'Barragem do Fratel',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Barragem do Vilar',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Barragens',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barral',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Barral',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Barral',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Barral',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barral',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barral',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Barral',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barral',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barral',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barral',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barral',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barranco',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Barranco',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barranco',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Barranco',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Barranco',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Barranco Ferrenho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Barranco Fundo',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Barranco Longo',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Barranco Silvestre',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barranco da Azenha',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Barranco da Balaia',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Barranco da Fataca',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barranco da Nora',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Barranco da Vaca',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Barranco das Relvas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Barranco de Apra',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barranco de São Miguel',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Barranco de São Miguel',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Barranco de Totenique',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barranco do Banho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barranco do Bebedouro',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barranco do Inferno',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barranco do Mexilhão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barranco do Ouro',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barranco do Porto',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Barranco do Rodrigo',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Barranco do Velho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barranco dos Pisões',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barrancos',
    'municipality': 204,
    'postalCode': 7230
  },
  {
    'locality': 'Barrancos',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Barrancos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Barrancos de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Barrancosa',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barrancão',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Barrancão',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Barranha',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Barranheiras',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barranquinha',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Barranquinho',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Barranquinho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barrantes',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Barras',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Barregão',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Barregão',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Barreira',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Barreira',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Barreira',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Barreira',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Barreira',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Barreira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Barreira',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Barreira',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Barreira',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Barreira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Barreira',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Barreira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barreira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barreira',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barreira',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Barreira',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Barreira Alva',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Barreira Grande',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Barreira Junqueira',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Barreira Pequena',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Barreira Vermelha',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Barreira Vermelha',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Barreira da Fita',
    'municipality': 1410,
    'postalCode': 2330
  },
  {
    'locality': 'Barreira da Légua',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Barreira da Malhada',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Barreira da Mata',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Barreira das Cortes',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Barreira de Eiriz',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barreira de Água',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Barreiras',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barreiras',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Barreiras',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Barreiras',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Barreiras',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Barreiras',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Barreiras',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Barreiras',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Barreiras',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Barreiras',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Barreiras',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Barreiras',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barreiras',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barreiras',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Barreiras',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Barreiras Brancas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barreiras Ruivas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Barreiras de Cima',
    'municipality': 1213,
    'postalCode': 7425
  },
  {
    'locality': 'Barreiria',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Barreirinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Barreirinha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barreirinha',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barreirinhas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barreirinhas',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Barreirinhas',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Barreirinhas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Barreirinho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barreirinho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Barreirinho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barreirinho Velho',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Barreiro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barreiro',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Barreiro',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Barreiro',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Barreiro',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Barreiro',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Barreiro',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Barreiro',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barreiro',
    'municipality': 505,
    'postalCode': 6060
  },
  {
    'locality': 'Barreiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Barreiro',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Barreiro',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Barreiro',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Barreiro',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Barreiro',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Barreiro',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barreiro',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Barreiro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barreiro',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Barreiro',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Barreiro',
    'municipality': 1504,
    'postalCode': 2830
  },
  {
    'locality': 'Barreiro',
    'municipality': 1504,
    'postalCode': 2834
  },
  {
    'locality': 'Barreiro',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barreiro',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barreiro',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barreiro',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Barreiro',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barreiro',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Barreiro',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Barreiro',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Barreiro',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Barreiro',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Barreiro',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Barreiro',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barreiro',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Barreiro',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Barreiro',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Barreiro',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Barreiro',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Barreiro',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Barreiro',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Barreiro Grande',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Barreiro Moutinhas',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barreiro da Foz',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Barreiro de Baixo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barreiro de Besteiros',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Barreiro de Cima',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barreiros',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barreiros',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Barreiros',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Barreiros',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Barreiros',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Barreiros',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Barreiros',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Barreiros',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Barreiros',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Barreiros',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barreiros',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Barreiros',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Barreiros',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barreiros',
    'municipality': 1009,
    'postalCode': 2404
  },
  {
    'locality': 'Barreiros',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Barreiros',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Barreiros',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barreiros',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barreiros',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barreiros',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Barreiros',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Barreiros',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barreiros',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Barreiros de Cima',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barreirosa',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barreirós',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barreirô',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Barreirô',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barrela',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Barrela',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barrela de Jales',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Barrenta',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Barreta',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Barretas',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Barretos',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Barrigueira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barrigueiro',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Barrigão',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Barrigões',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barril',
    'municipality': 1109,
    'postalCode': 2655
  },
  {
    'locality': 'Barril',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Barril',
    'municipality': 1109,
    'postalCode': 2644
  },
  {
    'locality': 'Barril',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Barril de Alva',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Barrinho',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barrinhos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Barrinhos',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Barrins',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Barrio',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Barrio de Baixo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barrio de Cima',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barrios',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Barriosa',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Barro',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barro',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Barro Branco',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Barro Branco',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barro Branco',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Barro Branco',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Barro Vermelho',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Barroca',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Barroca',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barroca',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Barroca',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barroca',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Barroca',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Barroca',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Barroca',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Barroca',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barroca',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Barroca',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Barroca',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barroca',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Barroca',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Barroca',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Barroca',
    'municipality': 1801,
    'postalCode': 5114
  },
  {
    'locality': 'Barroca',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Barroca',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barroca',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Barroca',
    'municipality': 3201,
    'postalCode': 9400
  },
  {
    'locality': 'Barroca Alta',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Barroca Funda',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Barroca Grande',
    'municipality': 503,
    'postalCode': 6225
  },
  {
    'locality': 'Barroca da Borralheira',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Barroca da Fonte',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Barroca da Vinha',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Barroca das Covas',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Barroca de Baixo',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Barroca do Belseiro',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Barroca do Neto',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Barroca do Outeiro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Barroca do Parceiro',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Barroca do Sapo',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Barroca do Toco',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barrocais',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Barrocal',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Barrocal',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Barrocal',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Barrocal',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Barrocal',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barrocal',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Barrocal do Douro',
    'municipality': 406,
    'postalCode': 5225
  },
  {
    'locality': 'Barrocalvo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Barrocaria',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Barrocas',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Barrocas',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Barrocas',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Barrocas',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Barrocas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Barrocas',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barrocas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Barrocas',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Barrocas',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Barrocas da Moita',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Barroco',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barroco',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barroco',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Barroco',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Barroco',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barroco',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Barroco',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Barroco',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barroco da Malhada',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Barrocão',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Barrocão',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Barroja',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Barrol',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barrol',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Barrolobo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Barromau',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Barroncal',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Barronda',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Barronda',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barronças',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Barroqueira',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Barroqueira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Barroqueiros',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Barroquinha',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Barroquinhas',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barros',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Barros',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Barros',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Barros',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Barros Brancos',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Barros Cardos',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Barros da Fonte Santa',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Barros da Paz',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Barros da Paz',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barrosa',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Barrosa',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Barrosa',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Barrosa',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Barrosa',
    'municipality': 1405,
    'postalCode': 2130
  },
  {
    'locality': 'Barrosa - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Barrosas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Barrosas',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Barrosas - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Barrosas-Santo Estêvão',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Barroselas',
    'municipality': 1609,
    'postalCode': 4905
  },
  {
    'locality': 'Barrosende',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barrosinha',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Barrosinho',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Barroso',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Barroso',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Barroso',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Barroso',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Barrosos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Barrosos',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Barrosão',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Barrouca',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Barrozinha',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barrudo',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Barrunchal',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Barrêlo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Barrô',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Barrô',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Barrô',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Barrô',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Barrões',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Barão de São João',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Barão de São Miguel',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Base Aérea Nº2',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Basilio e Escudeiro',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Bassim',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Bassocas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Basteirinho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bastida',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Basto',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Basto',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Bastos',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Bastuço',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Bastuço (São João)',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Batalha',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Batalha',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Batalha',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Batalha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Batalha',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Bate Orelhas',
    'municipality': 1405,
    'postalCode': 2135
  },
  {
    'locality': 'Bate Água',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Bateira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bateiras',
    'municipality': 1710,
    'postalCode': 5085
  },
  {
    'locality': 'Bateiras',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Batoca',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Batoca',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Batoca',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Batoca',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Batocas',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Batoco',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Batudes',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Batão',
    'municipality': 1501,
    'postalCode': 7595
  },
  {
    'locality': 'Baxarela',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Bazanca',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Bazorra',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Baçal',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Baçar',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Baía',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Baía de Canas',
    'municipality': 4603,
    'postalCode': 9940
  },
  {
    'locality': 'Baía de Tiros',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Baía do Caramelo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Baúves',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Beba',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Bebedouro',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Bebedouro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Bebedouro Velho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Beberriqueira',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bebeses',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Bececarias',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Beco',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Beco',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Beco',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Beco',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Beco',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Beduído',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Bega',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Beijós',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Beira',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Beira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Beira',
    'municipality': 4502,
    'postalCode': 9800
  },
  {
    'locality': 'Beira Grande',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Beira Mar',
    'municipality': 4204,
    'postalCode': 9675
  },
  {
    'locality': 'Beira Mar da Rochela',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Beira Valente',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Beire',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Beire',
    'municipality': 1310,
    'postalCode': 4580
  },
  {
    'locality': 'Beirigo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Beirigos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Beirã',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Beirão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Beirão',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Beirós',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Beirós',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Beirões',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Beiçudo',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Beja',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Beja',
    'municipality': 205,
    'postalCode': 7801
  },
  {
    'locality': 'Bejas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Bela Curral',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bela Curral',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Bela Salema',
    'municipality': 805,
    'postalCode': 8009
  },
  {
    'locality': 'Bela Salema',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bela Vista',
    'municipality': 1405,
    'postalCode': 2890
  },
  {
    'locality': 'Bela Vista',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bela Vista',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Bela Vista de Baixo',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bela Vista de Cima',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Belamandil',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Belas',
    'municipality': 1111,
    'postalCode': 2605
  },
  {
    'locality': 'Belas',
    'municipality': 1111,
    'postalCode': 2609
  },
  {
    'locality': 'Belazaima do Chão',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Belazeima',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Belece',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Belece',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Beleco',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Beleiral',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Beleiro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Beleza',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Belfeiro',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Belia',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Beliche',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Belide',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Belide',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Belide',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Belide',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Belinho',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Belixe',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Belmonte',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Belmonte',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Belmonte',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Belmonte',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Belmonte',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Belmonte Gare',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Belmonte de Baixo',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Belmonte de Cima',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Belo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Belo Horizonte',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Belo Romão',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Belver',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Belver',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Belverde',
    'municipality': 1510,
    'postalCode': 2845
  },
  {
    'locality': 'Belém',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bem Haja',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Bem Parece',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Bem Parece',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Bem da Fé',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Bemparece',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Bemparece',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Bemparece',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bemparece',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Bemposta',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Bemposta',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bemposta',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Bemposta',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bemposta',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Bemposta',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bemposta',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Bemposta',
    'municipality': 507,
    'postalCode': 6090
  },
  {
    'locality': 'Bemposta',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Bemposta',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bemposta',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Bemposta',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Bemposta',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bemposta',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Bemposta',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Bemposta',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Bemposta',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Bemposta',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Bemposta',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Bemposta',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Bemposta',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Bemposta',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Bemposta',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bemposta',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bemposta',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bemposta',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bemposta',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bemposta',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Bemposta',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Bemposta de Cima',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Benaciate',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Benafim',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Benafundão',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Benafátima',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Benagaia',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Benagil',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Benagouro',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Benatrite',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Benavente',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Benavente',
    'municipality': 1405,
    'postalCode': 2130
  },
  {
    'locality': 'Benavide',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Benavides',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Benavila',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Bencaniz',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bencatel',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Bendada',
    'municipality': 911,
    'postalCode': 6250
  },
  {
    'locality': 'Bendevizo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Benedita',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Benespera',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Benfarras',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Benfarras',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Benfeita',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Benfeita',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Benfeitas',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Benfica',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Benfica',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Benfica',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Benfica do Ribatejo',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Bengado',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Bengado',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Benlhevai',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Benquerença',
    'municipality': 507,
    'postalCode': 6090
  },
  {
    'locality': 'Benquerenças',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Benquerenças de Baixo',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Bens',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Bensafrim',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Benta',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Bente',
    'municipality': 312,
    'postalCode': 4770
  },
  {
    'locality': 'Bento',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bentos',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Benvende',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Benviúda',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Benzendros',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Bera',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Berbedã',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Berbelo',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Berbolga',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Berimbela',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Beringel',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Beringelinho',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'Berlengas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Berlongo',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Berlonguinho',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Bernalfor',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Bernarda',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Bernarda',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Bernardia',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Bernardinheiro',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Bernardo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Bernardo',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Bernardos',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Berraria',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Berredo',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Berregas',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Bertelhe',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Bertelo',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bertelo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bertiandos',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Bertufo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Berão',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Beselga',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Beselga de Baixo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Beselga de Cima',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Besouro',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bessada',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Bessada',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Bessada de Baixo',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Bessada de Cima',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Besteiras',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Besteirinhos',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Besteiro',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Besteiro',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Besteiro',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Besteiro',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Besteiros',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Besteiros',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Besteiros',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Besteiros',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Besteiros',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Besteiros',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Besteiros',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Besteiros',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Besteiros',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Besteiros',
    'municipality': 1310,
    'postalCode': 4580
  },
  {
    'locality': 'Besteiros',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Besteiros',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Besteiros de Baixo',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Besteiros de Cima',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Bestida',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Beta Azul',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Betunes',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Bexiga',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Bezeguimbra',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bezerra',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bezerra',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Bezerreira',
    'municipality': 1810,
    'postalCode': 3475
  },
  {
    'locality': 'Bezerrins',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Beça',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Beçós',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Bias do Norte',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Bias do Sul',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Bica',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Bica',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bica',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Bica',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Bica',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Bica',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Bica',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Bica',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Bica Baixa',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Bica Boa',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bica Boa de Baixo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bica Daires',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Bica Del Rei',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Bica da Figueira',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Bica da Texugueira',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bica de Pau',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Bica do Cão',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bica do Hospital',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Bicada',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Bicada',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Bicanho',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Bicarenho',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Bicas',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Bicas',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Bicas',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bicas da Serra',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Bicesse',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Bichardo de Baixo',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bichardo de Cima',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bichinheira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bico',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Bico',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bico Alto',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Bico Pedra',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bico Sachos',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Bico da Ilha',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Bico do Garcia',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Bicos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bicudo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bicudos',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Bidoeira de Baixo',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Bidoeira de Cima',
    'municipality': 1009,
    'postalCode': 2419
  },
  {
    'locality': 'Bidoeira de Cima',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Bigas',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Bigorne',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Bilhó',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Bilhões',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Biogal',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bioucas',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Biqueira',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Biqueira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Biqueiras',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Biqueirinhas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Biqueiro',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Biquinha',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Birre',
    'municipality': 1105,
    'postalCode': 2750
  },
  {
    'locality': 'Birrão',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Bisalhães',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Biscaia',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Biscaia',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Biscainhas',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Biscainho',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Biscoitos',
    'municipality': 4302,
    'postalCode': 9760
  },
  {
    'locality': 'Biscoitos',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Biscoitos',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Biscoitos Queimados',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Bismula',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Bispeira',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Bispos',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Bitarães',
    'municipality': 1310,
    'postalCode': 4580
  },
  {
    'locality': 'Bitocas',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Bizarril',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Bizarros',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Bizorreiro',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Boa Aldeia',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Boa Aldeia',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Boa Esperança de Dompel',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boa Morte',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Boa Morte',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Boa Nova',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Boa Vista',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Boa Vista',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Boa Vista',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Boa Vista do Vale Travessinho',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Boa Água 1',
    'municipality': 1511,
    'postalCode': 2975
  },
  {
    'locality': 'Boa Água 3',
    'municipality': 1511,
    'postalCode': 2975
  },
  {
    'locality': 'Boadela',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Boafaria',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Boafarinha',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Boais',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Boal',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Boalhosa',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Boalhosa',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Boas Eiras',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Boas Vistas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Boassas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Boavista',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Boavista',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Boavista',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Boavista',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Boavista',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Boavista',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Boavista',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Boavista',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Boavista',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Boavista',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Boavista',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Boavista',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Boavista',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Boavista',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Boavista',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Boavista',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Boavista',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Boavista',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Boavista',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Boavista',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Boavista',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Boavista',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Boavista',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Boavista',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Boavista',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Boavista',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Boavista',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Boavista',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Boavista',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Boavista',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Boavista',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Boavista',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Boavista',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Boavista',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Boavista',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Boavista',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Boavista',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boavista',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Boavista',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Boavista',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Boavista',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Boavista',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Boavista',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Boavista',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Boavista',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Boavista',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Boavista',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Boavista',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Boavista',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Boavista',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Boavista',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Boavista',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Boavista',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Boavista',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Boavista',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Boavista - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Boavista Chaparral',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boavista de Baixo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Boavista de Dompel',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boavista do Palrão',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Boavista do Paraíso',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boavista dos Pinheiros',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bobadela',
    'municipality': 611,
    'postalCode': 3405
  },
  {
    'locality': 'Bobadela',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Bobadela',
    'municipality': 1107,
    'postalCode': 2695
  },
  {
    'locality': 'Bobadela',
    'municipality': 1107,
    'postalCode': 2699
  },
  {
    'locality': 'Bobadela',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Bobadela',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Bobal',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Bobeda',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Boca',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Boca',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Boca',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Boca da Mata',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Boca da Mata',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Boca da Mata',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Boca das Canadas',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Boca do Rio',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Bocado',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Bocal',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Bocas',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Boco',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Boco',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Boco',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Boco',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Boco',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Boco',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Boco',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Boco',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Bocos',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Bodega',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Bodegão',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bodiosa a Nova',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Bodiosa a Velha',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Bodo',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Boeiras',
    'municipality': 210,
    'postalCode': 7860
  },
  {
    'locality': 'Boeiro',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Boelhe',
    'municipality': 1311,
    'postalCode': 4575
  },
  {
    'locality': 'Bofinho',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Bogadela',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bogaga',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Bogalha',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Bogalhal',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Bogalhal',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Bogalhas',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Bogalheira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Bogalheira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bogalheira',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Bogalheira',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Bogalheiros',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bogalhosa',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bogalhão',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Bogalhão',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Bogalhões',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bogarréus',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Bogas de Baixo',
    'municipality': 504,
    'postalCode': 6185
  },
  {
    'locality': 'Bogas de Cima',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Bogas do Meio',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Boi',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Boi Vivo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Boi de Água',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Boialvo',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Boialvo',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Boieira',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Boieira',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Boieiro',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Boieiros',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Boim',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Boimo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Boisias',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Boisias',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Boisão',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Boisões',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Boisões de Baixo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Boisões de Cima',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Boivivo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Boivão',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Boião',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Boiça',
    'municipality': 603,
    'postalCode': 3030
  },
  {
    'locality': 'Boiça',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Boiça',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Boiça',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Boiça do Louro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Boiças',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Boiças',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Boiças',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Boiças',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Boiças',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Boiças',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Boiças',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Boiças',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boiças',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Boiço',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Boição',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Bolada',
    'municipality': 305,
    'postalCode': 4820
  },
  {
    'locality': 'Bolbugão',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Boldrarias',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Boleiros',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Bolelas',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Bolembre',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Bolfeta',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Bolfiar',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Bolho',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Bolhos',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Bolhão',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Bolideira',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Boliqueime',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Bolo',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Bolo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bolota',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Bolão',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bolência',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Bom Amor',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Bom Despacho',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Bom Florido',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Bom Retiro',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Bom Sarilho',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Bom Sucesso',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Bom Sucesso',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Bom Sucesso',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Bom Sucesso',
    'municipality': 1313,
    'postalCode': 4490
  },
  {
    'locality': 'Bom Velho de Baixo',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Bom Velho de Cima',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Bom Vento',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Bom Viver',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Bom Viver',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bomba',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Bombacias',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Bombagem',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Bombardeira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Bombarral',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Bombas',
    'municipality': 210,
    'postalCode': 7885
  },
  {
    'locality': 'Bombel',
    'municipality': 712,
    'postalCode': 7080
  },
  {
    'locality': 'Bomvento',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bonabal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Bondança',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Bonitos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Bonitos',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Bonjardim',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bonjardim',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Bons Ares',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bonselafonce',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bonvizinho',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Boque',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Boqueirão',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Boquete',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Boquilobo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Borba',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Borba',
    'municipality': 703,
    'postalCode': 7154
  },
  {
    'locality': 'Borba',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Borba da Montanha',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Borba de Godim',
    'municipality': 1303,
    'postalCode': 4615
  },
  {
    'locality': 'Borbela',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Borbelinha',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Borbolga',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Borda da Ribeira',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Borda da Vala',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Borda do Mar',
    'municipality': 1001,
    'postalCode': 2445
  },
  {
    'locality': 'Borda do Rio',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Borda do Rio',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Borda do Rio',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Bordeira',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Bordeira',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bordeiro',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Bordinheira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Bordonhos',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Borduzedo',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Borgonha',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Boris',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Bornacha',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Bornaria',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bornes',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Bornes de Aguiar',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Borno',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Borracheira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Borracheira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Borralha',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Borralha',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Borralha',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Borralhais',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Borralhais',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Borralhais',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Borralhal',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Borralhal',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Borralhal',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Borralhal',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Borralhal',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Borralhos - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Borralhoso',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Borralhães',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Borreco',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Borregueiras',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Borreiros',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Borrela',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Borrelos',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Boselha',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Bostelim',
    'municipality': 603,
    'postalCode': 3020
  },
  {
    'locality': 'Bostelinhos',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bosto Chão',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Bostofrio',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Botelha',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Botelha',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Botelha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Botelhas',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Botelhas',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Botelhas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Botequim',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Botica',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Botica',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Botica',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Boticaria',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Boticas',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Botico',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Boticos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Botinha Nova',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Botocais',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Botulho',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Botão',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Botão',
    'municipality': 603,
    'postalCode': 3020
  },
  {
    'locality': 'Boubã',
    'municipality': 1001,
    'postalCode': 2445
  },
  {
    'locality': 'Bouceguedim',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bouceiros',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Boucha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Bouchada',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Boucinha',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Boucinha',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Boucinha',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Boucinha',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Boucinha',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Boucinha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Boucinha',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Boucinhas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Boucinhas',
    'municipality': 1301,
    'postalCode': 4605
  },
  {
    'locality': 'Boucinhas',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Boucinhas',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Boucinho',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Boucinhos',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Bouco',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Bouco',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bouco',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Boulinha',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bounilo',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bouro',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Bouro de Santa Maria',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Bouro de Santa Marta',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Bousende',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Bouxinhas',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Bouça',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bouça',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Bouça',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bouça',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Bouça',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bouça',
    'municipality': 407,
    'postalCode': 5385
  },
  {
    'locality': 'Bouça',
    'municipality': 503,
    'postalCode': 6215
  },
  {
    'locality': 'Bouça',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Bouça',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Bouça',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Bouça',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Bouça',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Bouça',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bouça',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Bouça',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bouça',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bouça',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bouça',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Bouça',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Bouça',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Bouça',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Bouça',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bouça',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bouça',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouça',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Bouça (Mouçós)',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bouça Boa',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bouça Cova',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Bouça Fria',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Bouça Fria',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Bouça Longa',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Bouça Milhaça',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouça Nova',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bouça Soeiro',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bouça Velha',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bouça Velha',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Bouça Velha',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Bouça Velha',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Bouça Velha',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouça da Aguincheira',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Bouça da Pedra',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bouça das Cales',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Bouça de Baixo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouça de Cá',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Bouça de Lá',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Bouça do Couto',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bouça do Escamarão',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouça dos Homens',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bouça-Velha',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Bouças',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bouças',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Bouças',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bouças',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Bouças',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Bouças',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Bouças',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bouças',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Bouças',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bouças',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bouças',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bouças',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Bouças',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Bouças',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Bouças',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Bouças',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bouças',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Bouças',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouças',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Bouças Dornas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bouças Novas',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bouço',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bouço',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Bouço',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bouço',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Bouços',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Bouçoães',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Bouçã',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Bouçã',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Bouçã da Figueira',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Bouçã dos Covais',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Bouçós',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Bouçós',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bouçós de Baixo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bouçôs',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Boxinos',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Braceiro',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Braciais',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Bracial',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Bracial',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Bracieira',
    'municipality': 210,
    'postalCode': 7885
  },
  {
    'locality': 'Braciosa',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Brafemes',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4700
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4705
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4710
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4715
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4714
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4719
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4704
  },
  {
    'locality': 'Braga',
    'municipality': 303,
    'postalCode': 4709
  },
  {
    'locality': 'Braga',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Braga',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Bragada',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Bragadas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bragadas',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bragado',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Bragança',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Bragança',
    'municipality': 402,
    'postalCode': 5301
  },
  {
    'locality': 'Braganção',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Bramafão',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Branca',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Branca',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Brancanes',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Brancanes',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Brancas',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Branda',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Branda da Aveleira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Brandara',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Brandim',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Brandão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Brangada',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Branqueira',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Branqueiro',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Branquinho',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Brasfemes',
    'municipality': 603,
    'postalCode': 3020
  },
  {
    'locality': 'Brasil',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Brasileira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Brasileira',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Brasões',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Brava',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Brava',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Bravo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Bravura',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Braz',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Brazieira',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Brazieira de Baixo',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Braçais',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Braçais',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Braçal',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Braçal',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Braçal',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Braçal',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Braçal',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Braçal',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Braçal',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Braçal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Braçal',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Braçal',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Braços',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Braços',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Braços de Cá',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Braços de Lá',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Bregada',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Breia',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Breia',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Breia',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Breia',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Breia',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Breijinho de Água',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Breime',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Breja',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Breja Baixo',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Breja Cima',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Breja Cimo Sobral',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Brejas do Barco',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Brejenjas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Brejieira',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Brejieira',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Brejieira',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Brejieiras',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Brejinho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Brejinho',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Brejinhos',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Brejo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Brejo',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Brejo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Brejo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Brejo',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Brejo',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Brejo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Brejo',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Brejo',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Brejo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Brejo',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Brejo',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Brejo',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Brejo',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Brejo',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Brejo',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Brejo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Brejo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Brejo',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Brejo Cimeiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Brejo Cimeiro',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Brejo Fundeiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Brejo Fundeiro',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Brejo Grande',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Brejo Largo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Brejo Longo',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Brejo Redondo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Brejo Verde',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Brejo da Amada',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Brejo da Carregueira de Baixo',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Brejo da Carregueira de Cima',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Brejo da Correia',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Brejo da Lagoa',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Brejo da Moita',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Brejo da Zimbreira',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brejo de Baixo',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Brejo de Baixo',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Brejo de Cima',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Brejo de Cima',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Brejo de Água',
    'municipality': 1010,
    'postalCode': 2445
  },
  {
    'locality': 'Brejo do Armando',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brejo do Cerro',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Brejo do Chabouco',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Brejo do Fundo',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Brejo do Lobo',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Brejo do Meio',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Brejo do Monte da Quinta Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Brejo dos Pinheiros',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brejoal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Brejoeira',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Brejoeira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Brejos',
    'municipality': 213,
    'postalCode': 7830
  },
  {
    'locality': 'Brejos',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Brejos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Brejos',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Brejos',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Brejos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Brejos Velhos',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Brejos da Comenda',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brejos das Figueiras',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brejos de Azeitão',
    'municipality': 1512,
    'postalCode': 2925
  },
  {
    'locality': 'Brejos do Assa',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Brejos do Bom Comer',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brejos do Poço',
    'municipality': 1508,
    'postalCode': 2965
  },
  {
    'locality': 'Brejos dos Carreteiros',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Brejão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Brejão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Brenha',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Brenha',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Brescos',
    'municipality': 1509,
    'postalCode': 7500
  },
  {
    'locality': 'Brescovo',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Brichal',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Brinches',
    'municipality': 213,
    'postalCode': 7830
  },
  {
    'locality': 'Brinco',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Brinços',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Britamontes',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Briteiros Santa Leocádia',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Briteiros Santa Leocádia',
    'municipality': 308,
    'postalCode': 4809
  },
  {
    'locality': 'Briteiros São Salvador',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Britelo',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Brites',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Brites Gomes',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Britiande',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Brito',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Brito',
    'municipality': 308,
    'postalCode': 4809
  },
  {
    'locality': 'Brito de Baixo',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Brito de Lomba',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Broca',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Brochas',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Broega',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Broega',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Broeiras',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Broeiras',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Brogal',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Brogueira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Bronceda',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Bronhosa',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Brotas',
    'municipality': 707,
    'postalCode': 7490
  },
  {
    'locality': 'Brotual',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Brufe',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Brufe',
    'municipality': 312,
    'postalCode': 4760
  },
  {
    'locality': 'Brufe',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Brufe',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Brunhais',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Brunhais',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Brunhal',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Brunhal',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Brunheda',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Brunhedo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Brunhedo',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Brunheira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Brunheiras',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Brunheirinho',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Brunhido',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Brunhosinho',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Brunhoso',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Brunhós',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Bruscos',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Bruzende',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bruçó',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Brás',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Bualhosa',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Buarcos',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Bubau',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Bucelas',
    'municipality': 1107,
    'postalCode': 2674
  },
  {
    'locality': 'Bucelas',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Bucos',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Budens',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Buenos Aires',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Buenos Aires',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Bufalhão',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Bufarda',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Bufardas',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Bugalhos',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Bugarrel',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Bugiganga',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bugios',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Buinheira',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Bujos',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Bujões',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bulha',
    'municipality': 914,
    'postalCode': 5150
  },
  {
    'locality': 'Bulhe',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Buligueira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Bunheira',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Bunheira',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Bunheiro',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Bunhosa',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Buraco',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Buraco',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Buraco',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Buraco de Água',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Buraquinho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Buraquinho',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Burdo',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Burga',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Burgau',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Burgau',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Burgo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Burgo',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Burgo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Burgueta',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Burguetas',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Burguete',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Burguete',
    'municipality': 4205,
    'postalCode': 9625
  },
  {
    'locality': 'Burgães',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Burgães',
    'municipality': 1314,
    'postalCode': 4780
  },
  {
    'locality': 'Burinhosa',
    'municipality': 1001,
    'postalCode': 2445
  },
  {
    'locality': 'Burmeirais',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Burral',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Burrica',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Bustarenga',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Busteliberne',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Bustelo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Bustelo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Bustelo',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Bustelo',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Bustelo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bustelo',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Bustelo',
    'municipality': 1303,
    'postalCode': 4610
  },
  {
    'locality': 'Bustelo',
    'municipality': 1311,
    'postalCode': 4560
  },
  {
    'locality': 'Bustelo',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Bustelo',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Bustelo',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Bustelo',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Bustelo',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Bustelo',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Bustelo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bustelo do Caima',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Bustos',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Busturenga',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Butoque',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Buçaco',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bárrio',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Bárrio',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Bárrio',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Bárrio',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Bárrio',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Béco',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Bêbeda',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bêbeda de Baixo',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bêbeda de Cima',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Bóia',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Bôco',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cabacinhos',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Cabadoso',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cabana',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Cabana',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Cabana',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cabana',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cabana',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cabana',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Cabanas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cabanas',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Cabanas',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Cabanas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cabanas',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Cabanas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cabanas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cabanas',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cabanas',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Cabanas',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Cabanas de Baixo',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Cabanas de Cima',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Cabanas de Torres',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cabanas de Viriato',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Cabanas do Chão',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cabaneiras',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Cabanela',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cabanelas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cabanelas',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Cabanelas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cabanelas',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cabanelas',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cabanelas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cabanelas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabanes',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Cabanil',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cabaninhas',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Cabaninhas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cabanita',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cabanões',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cabanões',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cabanões de Baixo',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Cabaçal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cabaçal',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cabaçal',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabaço',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cabaços',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cabaços',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cabaços',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cabaços',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabaços',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cabaços',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Cabaços de Rego da Murta',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabeceiras',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Cabeceiras',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cabeceiras de Vale Queimado',
    'municipality': 213,
    'postalCode': 7830
  },
  {
    'locality': 'Cabeceiro',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cabecinha',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Cabecinha',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Cabecinha de Rei',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Cabecinhas',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Cabecinhas',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Cabecinho',
    'municipality': 908,
    'postalCode': 6260
  },
  {
    'locality': 'Cabecinho',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Cabecinhos',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Cabeco Trigo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeda',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Cabedelo',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Cabelo do Rato',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cabelos Rei',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cabeluda',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cabenco',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Cabeça',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Cabeça',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Cabeça',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Cabeça Alta',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Cabeça Alta',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeça Alta',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Cabeça Boa',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Cabeça Carvalha',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Cabeça Gorda',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cabeça Grande',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Cabeça Redonda',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Cabeça Ruiva',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Cabeça Ruiva',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Cabeça Santa',
    'municipality': 1311,
    'postalCode': 4575
  },
  {
    'locality': 'Cabeça Veada',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Cabeça da Corte',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cabeça da Galinha',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabeça da Igreja',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Cabeça da Murta',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Cabeça da Serra',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Cabeça das Mós',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Cabeça de Boi',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabeça de Boi',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Cabeça de Cabra',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Cabeça de Carneiro',
    'municipality': 701,
    'postalCode': 7200
  },
  {
    'locality': 'Cabeça de Carvalho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cabeça de Cão',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cabeça de Eiras',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Cabeça de Mouro',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Cabeça de Águia',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cabeça de Águia',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cabeça do Boi',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Cabeça do Boi',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabeça do Galo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cabeça do Poço',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Cabeça do Velho',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Cabeçadas',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cabeçadas',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Cabeçadeira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cabeçados',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Cabeçais',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cabeças',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Cabeças',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Cabeças',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabeças',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cabeças',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cabeças',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cabeças Azoia',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Cabeças Verdes',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Cabeças de Moura',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cabeço',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Cabeço',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Cabeço',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cabeço',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cabeço',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Cabeço',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cabeço',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cabeço',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Cabeço',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cabeço',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Cabeço',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cabeço',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Cabeço',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Cabeço',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Cabeço',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Cabeço',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cabeço',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cabeço Barroco Carvalhos',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cabeço Cambões',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cabeço Cão',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cabeço Gordo',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Cabeço Grande',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cabeço Louco',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeço M Jacob',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Cabeço Pedra',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Cabeço Perrães',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Cabeço Redondo',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cabeço Redondo Pequeno',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Cabeço Souto',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Cabeço São Silvestre',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Cabeço Velide',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cabeço Verde',
    'municipality': 1504,
    'postalCode': 2835
  },
  {
    'locality': 'Cabeço Verde',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Cabeço da Barquinha',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cabeço da Fonte',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabeço da Freiria',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Cabeço da Igreja',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cabeço da Junqueira',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Cabeço da Lagoa',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeço da Lama',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cabeço da Mata',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabeço da Moeda',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Cabeço da Senhora do Pranto',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Cabeço da Vela',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Cabeço das Pias',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Cabeço das Pombas',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Cabeço de Almodelim',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Cabeço de Arveola',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cabeço de Baixo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cabeço de Camara',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cabeço de Cartaxo',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Cabeço de Celas',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Cabeço de Cima',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cabeço de Cordeiro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cabeço de Deus',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeço de Ferreiros',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Cabeço de Ferro',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cabeço de Montachique',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Cabeço de Mouro',
    'municipality': 1105,
    'postalCode': 2785
  },
  {
    'locality': 'Cabeço de Mouro',
    'municipality': 1105,
    'postalCode': 2789
  },
  {
    'locality': 'Cabeço de Mouro',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Cabeço de Soudo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cabeço de São Tomé',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Cabeço de Vide',
    'municipality': 1208,
    'postalCode': 7460
  },
  {
    'locality': 'Cabeço de Águia',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cabeço do Areeiro',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Cabeço do Arneiro',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Cabeço do Barro',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Cabeço do Carriço',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cabeço do Esteves',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Cabeço do Fiel',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cabeço do Infante',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Cabeço do Mocho',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Cabeço do Moinho',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Cabeço do Moiro',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cabeço do Monte',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Cabeço do Peão',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cabeço do Ribeiro do Álamo',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Cabeço do Roxo',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Cabeço do Seixo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeço do Vento',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeço dos Carris',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cabeço dos Faleiros',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cabeço dos Patacos',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cabeços',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Cabeços',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cabeços',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Cabeços',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cabeços',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cabeços',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabeços de Bordeira',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cabeços do Garcia',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Cabeços do Outeiro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cabeçudo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cabeçudos',
    'municipality': 312,
    'postalCode': 4770
  },
  {
    'locality': 'Cabeçudos',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Cabeção',
    'municipality': 707,
    'postalCode': 7490
  },
  {
    'locality': 'Cabeção',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Cabine',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cabo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cabo',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cabo',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cabo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cabo',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Cabo',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cabo',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cabo',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Cabo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cabo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cabo',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cabo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cabo Baixo das Casas',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Cabo Branco',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Cabo Cima das Casas',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Cabo Espichel',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Cabo Vila',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cabo da Aldeia',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Cabo da Costa',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Cabo da Praia',
    'municipality': 4302,
    'postalCode': 9760
  },
  {
    'locality': 'Cabo da Ribeira',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Cabo da Vila',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Cabo das Casas',
    'municipality': 4603,
    'postalCode': 9940
  },
  {
    'locality': 'Cabo das Manadas',
    'municipality': 4502,
    'postalCode': 9800
  },
  {
    'locality': 'Cabo de Além',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cabo de Vialonga',
    'municipality': 1114,
    'postalCode': 2625
  },
  {
    'locality': 'Cabo de Vila',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cabo de Vila',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabo do Lugar',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Cabo do Soito',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cabomonte',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Cabouco',
    'municipality': 603,
    'postalCode': 3030
  },
  {
    'locality': 'Cabouco',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Cabouco',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cabouco',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Cabouco',
    'municipality': 4201,
    'postalCode': 9560
  },
  {
    'locality': 'Caboucos',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cabra Figa',
    'municipality': 1111,
    'postalCode': 2635
  },
  {
    'locality': 'Cabrais',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Cabral',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Cabral',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Cabração',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cabreira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cabreira',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Cabreira',
    'municipality': 401,
    'postalCode': 5350
  },
  {
    'locality': 'Cabreira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cabreira',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Cabreira',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cabreira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cabreira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabreiros',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cabreiros',
    'municipality': 303,
    'postalCode': 4705
  },
  {
    'locality': 'Cabreiros',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Cabreiros',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cabrela',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Cabrela',
    'municipality': 1001,
    'postalCode': 2445
  },
  {
    'locality': 'Cabrela',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Cabrela',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabria',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Cabrieira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cabril',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cabril',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cabril',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cabril',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cabril',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Cabril',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Cabril',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cabril',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Cabritinha',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cabriz',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Cabriz',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Cabriz',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Cabriz',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Cabroeira de Baixo',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Cabroeira de Cima',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Cabroeira do Meio',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Cabrum',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cabrum',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Cacapeira',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cacarino',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Caceira de Baixo',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Caceira de Baixo',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Caceira de Cima',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Cacela Velha',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Cachada',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cachada',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cachada',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Cachada',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cachada',
    'municipality': 1303,
    'postalCode': 4610
  },
  {
    'locality': 'Cachada',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cachada',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Cachada',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cachada',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cachada',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cachada',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cachada',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cachada',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Cachadinha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cachadinha',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cachadinha',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cachadinha',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cachagoe',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cachamundinho',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cachamuço',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Cachave',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cacheina',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cacheiro',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Cachimbos',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Cachoeira',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Cachoeiras',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Cachopo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Cachopo',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cachopos',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Cachorreira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cachorro',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Cachuda',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Cachão',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cachão Velho',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cacia',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Cacilhas',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cacilhas',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Cacinheira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Cacinheira',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cadaceira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cadafais',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cadafaz',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cadafaz',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Cadafaz',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Cadafaz',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Cadafaz',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cadaixo',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cadarroeira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cadavais',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Cadavais',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Cadavais',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cadavais',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cadavais',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cadavais',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Cadaval',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cadaval',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Cadaval',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cadaval',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Cadaval',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Cadaval',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Cadaval',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Cadaval',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Cadaval Grande',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Cadaveira',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cadaveira',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Cadavosa',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cadavoso',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cadavourinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': "Cadeira D'El Rei",
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cadela Morta',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cadima',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cadimas',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Cadocos',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cadoiço',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Cadoiço',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Cadoiço',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cadoiço',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Cadorcas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cadouço',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Cadraço',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Cadriceira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Cadão',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Caeira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Caeiras',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Caeiro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Caeiros da Fontinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Caeiros de Baixo',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Caeiros de Cima',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Caetanas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cafede',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Cafuz',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Cagarrão de Almograve',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cagida',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cagide',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cagido',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Cagil',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cagunça',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Cai Logo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cai Logo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cai Logo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cai Água',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Caia',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Caia',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Caiada',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Caiadas',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Caiadas de Baixo',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Caiadas de Cima',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Caiana',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Caibral',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cailogo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cainha',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Cainhas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cainheiras',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Caires',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Cairrão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Cairrão',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cais',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cais',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Cais da Ilha',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cais da Madalena',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Cais de São Pedro',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Cais do Areão',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Cais do Boqueirão',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Cais do Galego',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Caixa de Água',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Caixaria',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Caixas',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Caixeira',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Caixeiros',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Cajados',
    'municipality': 1508,
    'postalCode': 2965
  },
  {
    'locality': 'Cajadães',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Cajaneiro',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cal',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cal de Bois',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Cal de Ourão',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cal-De-Campos',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Calada',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Calados',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Calados',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Calastreiro',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Calaçotas',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Caldas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Caldas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Caldas da Cavaca',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Caldas da Felgueira',
    'municipality': 1809,
    'postalCode': 3525
  },
  {
    'locality': 'Caldas da Rainha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Caldas das Taipas',
    'municipality': 308,
    'postalCode': 4805
  },
  {
    'locality': 'Caldas de Aregos',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Caldas de Felgueiras',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Caldas de Manteigas',
    'municipality': 908,
    'postalCode': 6260
  },
  {
    'locality': 'Caldas de Monchique',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Caldas de Sangemil',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Caldas de São Jorge',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Caldas de São Paulo',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Caldas do Gerês',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Calde',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Caldeira',
    'municipality': 914,
    'postalCode': 5150
  },
  {
    'locality': 'Caldeira',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Caldeira',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Caldeira Neto',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Caldeira de Santo Cristo',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Caldeiras',
    'municipality': 4205,
    'postalCode': 9600
  },
  {
    'locality': 'Caldeireiro',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Caldeirinha',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Caldeirinhas',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Caldeiro',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Caldeirão',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Caldeirão',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Caldeirões',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Caldelas',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Caldelas',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Caldinhas',
    'municipality': 1302,
    'postalCode': 5040
  },
  {
    'locality': 'Caldures',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Cale',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': "Caleira Olhos D'Água",
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Caleiro',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Caleiro',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Caleiro',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Caleirão',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Caleirões',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cales',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cales',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cales',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Calhandriz',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Calhariz',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Calhariz',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Calhau',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Calhau Miúdo',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Calheiros',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Calheta',
    'municipality': 3101,
    'postalCode': 9370
  },
  {
    'locality': 'Calheta',
    'municipality': 3101,
    'postalCode': 9374
  },
  {
    'locality': 'Calheta',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Calheta de Baixo',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Calheta de Cima',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Calheta de Nesquim',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Calhetas',
    'municipality': 4205,
    'postalCode': 9600
  },
  {
    'locality': 'California',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Californias Novas',
    'municipality': 213,
    'postalCode': 7830
  },
  {
    'locality': 'Calinha',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Caliço',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Caliço',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Caliço',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Caliços',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Caliços',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Caliços',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Caliços',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Caliços',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Calmaranho',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Calourenço',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Calrinhas',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Calros',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Calvalhido',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Calvaria',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Calvaria',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Calvaria de Baixo',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Calvaria de Cima',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Calvarias',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Calvelhe',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Calvelo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Calvelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Calvelos',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Calvelos',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Calves',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Calvete',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Calvino',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Calvinos',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Calvo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Calvos',
    'municipality': 308,
    'postalCode': 4810
  },
  {
    'locality': 'Calvos',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Calvos',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Calvos',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Calvos',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Calvos',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Calvos',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Calvos',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Calvos',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Calvos de Baixo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Calvos de Cima',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Calvário',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Calvário',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Calvário',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Calvário',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Calvário',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Calvário',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Calvário',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Calvário',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Calvário',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Calvário',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Calvário',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Calvário',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Calvário',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Calvário',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Calvário',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Calvário',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Calvário',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Calvário',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Calvário',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Calvário',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Calvário',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Calvário',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Calvário',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Calvário',
    'municipality': 4302,
    'postalCode': 9760
  },
  {
    'locality': 'Calvário Arrancada do Vouga',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Calvário da Veiga',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Calvães',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Calvão',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Calvão',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Calça Perra',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Calçada',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Calçada',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Calçada',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Calçada',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Calçada',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Calçada',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Calçada',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Calçada',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Calçada',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Calçada',
    'municipality': 1301,
    'postalCode': 4605
  },
  {
    'locality': 'Calçada',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Calçada',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Calçada',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Calçada',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Calçada',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Calçada',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Calçada',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Calçada',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Calçada',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Calçada da Pena',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Calçadas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Calçadas',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Calçadas',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Calçadinha',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Calçadinha',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Calçadinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Calçadinha de Raco',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Calço Ferreiro',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Calço da Chã da Cruz',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Calço da Cruz',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Calços da Maia',
    'municipality': 4205,
    'postalCode': 9625
  },
  {
    'locality': 'Cama da Vaca',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Camacha',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Camacha',
    'municipality': 3108,
    'postalCode': 9135
  },
  {
    'locality': 'Camachos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Camalhotes',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Camarate',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Camarate',
    'municipality': 1107,
    'postalCode': 2680
  },
  {
    'locality': 'Camarate',
    'municipality': 1107,
    'postalCode': 2681
  },
  {
    'locality': 'Camarate',
    'municipality': 1405,
    'postalCode': 2890
  },
  {
    'locality': 'Camarinha',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Camarinha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Camarinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Camarinheiras',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Camarnal',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Camarnal',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Camarnal',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Camarneira',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Camarneira',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Camarão',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Camarão',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Camarção',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Camarção',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Camarões',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Camarões',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Camba',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cambado',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Cambarinho',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cambas',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cambas',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Cambedo',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cambedo',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Cambeiro',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cambelas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cambelas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Cambelas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cambeses',
    'municipality': 302,
    'postalCode': 4775
  },
  {
    'locality': 'Cambeses',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cambeses do Rio',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cambeza',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Cambra',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cambra',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cambra de Baixo',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cambres',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cambão',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cambões',
    'municipality': 503,
    'postalCode': 6225
  },
  {
    'locality': 'Camela',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Camelo',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Camelo',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Camila',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Caminha',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Caminha',
    'municipality': 1602,
    'postalCode': 4914
  },
  {
    'locality': 'Caminho',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Caminho Branco',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Caminho Chão',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Caminho Chão',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Caminho Novo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Caminho Novo',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Caminho Novo',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Caminho da Azenha',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Caminho das Cales',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Caminho das Lagartixas',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Caminho do Moinho de Vento',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Caminho do Tanque',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Campa',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Campanas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Campanhó',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Campanário',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Campanário',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Campanário',
    'municipality': 4801,
    'postalCode': 9960
  },
  {
    'locality': 'Camparca',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Campeiros',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Campelinho',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Campelo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Campelo',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Campelo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Campelo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Campelo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Campelo',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Campelo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Campelo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Campelos',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Campelos',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Campelos',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Campelos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Campelos',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Campeã',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Campia',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Campilhos',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Campina',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Campina',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Campina',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Campina',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Campina',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Campina de Baixo',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Campina de Cima',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Campina de Santiago',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Campinas',
    'municipality': 805,
    'postalCode': 8009
  },
  {
    'locality': 'Campinas',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Camping',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Campinho',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Campinho',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Campinho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Campinho do Loureiro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Campinhos',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Campinhos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Campino',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Campinos',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Campizes',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Campo',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Campo',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Campo',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Campo',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Campo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Campo',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Campo',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Campo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Campo',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Campo',
    'municipality': 1315,
    'postalCode': 4440
  },
  {
    'locality': 'Campo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Campo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Campo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Campo',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Campo Amarelo',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Campo Benfeito',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Campo Experimental',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Campo Grande',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Campo Grande',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Campo Grande',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Campo Grande',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Campo Longo',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Campo Longo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Campo Maior',
    'municipality': 1204,
    'postalCode': 7370
  },
  {
    'locality': 'Campo Maior',
    'municipality': 1204,
    'postalCode': 7374
  },
  {
    'locality': 'Campo Raso',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Campo Raso',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Campo Redondo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Campo Redondo',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Campo Renda',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Campo Velho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Campo da Bola',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Campo da Bola',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Campo da Feira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Campo da Feira',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Campo da Vinha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Campo das Bouças',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Campo das Carvalhas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Campo das Oliveiras',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Campo de Ametade',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Campo de Arca',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Campo de Besteiros',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Campo de Jales',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Campo de Tiro',
    'municipality': 1405,
    'postalCode': 2890
  },
  {
    'locality': 'Campo de Vale',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Campo de Víboras',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Campo do Forno',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Campo do Gerês',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Campo do Souto',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Campodónio',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Campolinho',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Campos',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Campos',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Campos',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Campos',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Campos',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Campos',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Campos',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Campos',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Campos',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Campos Abades',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Campos Cela',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Campos de Sá',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Camposa',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Camum',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Camões',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Camões',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Canada',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Canada',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Canada',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Canada',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Canada',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Canada do Bairro',
    'municipality': 705,
    'postalCode': 7005
  },
  {
    'locality': 'Canadas',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Canadelo',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Canadinhas',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Canado',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Canado',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Canados',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Canais',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Canais',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Canais',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Canais',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Canal',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Canal',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Canal',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Canal Caveira',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Canas',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Canas',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Canas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Canas',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Canas de Santa Maria',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Canas de Senhorim',
    'municipality': 1809,
    'postalCode': 3525
  },
  {
    'locality': 'Canavai',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Canavezes',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Canavezinhos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Canaviais',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Canavieira',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cancela',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Cancela',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cancela',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cancela',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Cancela',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cancela',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cancela',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Cancela',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cancela',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cancela',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cancela',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Cancela',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Cancela',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cancela',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cancela',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Cancela',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Cancela',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Cancela',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Cancela',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Cancela',
    'municipality': 4901,
    'postalCode': 9980
  },
  {
    'locality': "Cancela D'água",
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Cancela Grande',
    'municipality': 4502,
    'postalCode': 9800
  },
  {
    'locality': 'Cancela do Forno',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cancela do Leão',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cancelas',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Cancelas',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Cancelas',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Cancelas',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Cancelas da Areia',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Cancelhô',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cancelinha',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cancelinha',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Cancelinhos',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cancelo',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cancelo',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Cancelos',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cancelos',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Cancelos de Baixo',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Cancelos de Cima',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Cancelos do Meio',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Cancinos de Baixo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cancinos de Cima',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Canda',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Canda',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Candaira',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Candal',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Candal',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Candal Forcada',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Candedo',
    'municipality': 412,
    'postalCode': 5335
  },
  {
    'locality': 'Candedo',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Candedo',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Candedo',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Candeeira',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Candeeira',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Candeeiras',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Candeeiros',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Candeia',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Candeiros',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Candelária',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Candelária',
    'municipality': 4203,
    'postalCode': 9555
  },
  {
    'locality': 'Candelária',
    'municipality': 4602,
    'postalCode': 9950
  },
  {
    'locality': 'Candemil',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Candemil',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Candemil',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Candenilhas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Candieira',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Candieira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cando',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cando',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Candosa',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Candosa',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Candosa',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Candosas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Candoso',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Candão',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Candão de Baixo',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Candão de Cima',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Canedinho',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Canedo',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Canedo',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Canedo',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Canedo Mato',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Canedo de Basto',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Canedo do Chão',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Caneira',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Caneira',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Caneira',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Caneira',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Caneira',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Caneira Velha',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Caneiras',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Caneiras Grandes',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Caneirinhas Roxo',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Caneiro',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Caneiro',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Caneiro',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Caneiro',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Caneiro',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Caneiro',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Caneiros',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Caneiros',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Caneiros',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Caneiros',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Caneiros',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Caneja',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Canelas',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Canelas',
    'municipality': 108,
    'postalCode': 3865
  },
  {
    'locality': 'Canelas',
    'municipality': 1311,
    'postalCode': 4575
  },
  {
    'locality': 'Canelas',
    'municipality': 1317,
    'postalCode': 4410
  },
  {
    'locality': 'Canelas',
    'municipality': 1317,
    'postalCode': 4414
  },
  {
    'locality': 'Canelas',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Canelas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Canelas',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Canelas',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Canelas',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Canelas de Baixo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Canelas de Cima',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Canenhos',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Caneve',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Caneças',
    'municipality': 1116,
    'postalCode': 1685
  },
  {
    'locality': 'Canha',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Canha',
    'municipality': 1507,
    'postalCode': 2985
  },
  {
    'locality': 'Canhardo',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Canhardo',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Canhas',
    'municipality': 3105,
    'postalCode': 9360
  },
  {
    'locality': 'Canhestro',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Canhestro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Canhestros',
    'municipality': 208,
    'postalCode': 7900
  },
  {
    'locality': 'Canhestros',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Canhotos',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Canhões',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Caniceira',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Caniceira',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Caniceira',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Caniceira',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Canidelo',
    'municipality': 1316,
    'postalCode': 4485
  },
  {
    'locality': 'Canidelo',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Caniné',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Canis',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Canivetes',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Caniçada',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Caniçal',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Caniçal',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Caniçal',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Caniçal',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Caniçal Cimeiro',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Caniçal Fundeiro',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Caniças',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Caniço',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Caniço',
    'municipality': 3108,
    'postalCode': 9125
  },
  {
    'locality': 'Caniços',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Caniçó',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Canle',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Canles',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cano',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cano',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cano',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Cano',
    'municipality': 1215,
    'postalCode': 7470
  },
  {
    'locality': 'Canoeira',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Canos',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Canos - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Canos da Água Nova',
    'municipality': 703,
    'postalCode': 7150
  },
  {
    'locality': 'Canosa',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Canosa',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Cansados',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cansino',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cantanhede',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cantanhede',
    'municipality': 602,
    'postalCode': 3064
  },
  {
    'locality': 'Cantarinhos',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cantarola',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Cantim',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cantinho',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Cantinho',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cantinho da Ribeira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cantinho da Ribeira',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Canto',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Canto',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Canto',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Canto',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Canto Abelhosa',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Canto Orego',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Canto Pinas',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Canto Redondo',
    'municipality': 4203,
    'postalCode': 9555
  },
  {
    'locality': 'Canto Roubado',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Canto da Areia',
    'municipality': 4603,
    'postalCode': 9940
  },
  {
    'locality': 'Canto da Balsa',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Canto da Fajã',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Canto da Lavoura',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Canto da Rigueirinha',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Canto da Socha',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Canto das Nogueiras',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Canto das Pocinhos',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Canto das Rosas',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Canto de Baixo',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Canto do Forno',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Canto do Norte',
    'municipality': 4501,
    'postalCode': 9875
  },
  {
    'locality': 'Canto do Quarteiro',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Cantomilo',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Cantos',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cantos da Fervença',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cantos de Baixo',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Cantos de Cima',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Cantudo',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cançaria',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Capa Rosa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Capa Zorras',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Caparica',
    'municipality': 1503,
    'postalCode': 2825
  },
  {
    'locality': 'Caparide',
    'municipality': 1105,
    'postalCode': 2785
  },
  {
    'locality': 'Caparito',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Caparoto',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Caparrosa',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Caparrosa',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Caparrosinha',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Caparrota',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Caparrozinha',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Capela',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Capela',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Capela',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Capela',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Capela',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Capela',
    'municipality': 1311,
    'postalCode': 4575
  },
  {
    'locality': 'Capela',
    'municipality': 1311,
    'postalCode': 4560
  },
  {
    'locality': 'Capela',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Capela',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Capela',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Capela',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Capela',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Capela',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Capela',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Capelas',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Capelas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Capelas',
    'municipality': 4203,
    'postalCode': 9545
  },
  {
    'locality': 'Capelinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Capelinha',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Capelo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Capelo',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Capeludos',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Capeludos',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Capeludos de Aguiar',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Capinha',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Capitorno',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Capitólio',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Capucho',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Capuchos',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Capuchos',
    'municipality': 1503,
    'postalCode': 2825
  },
  {
    'locality': 'Capão',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Capões',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carabêta',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Caracol',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Caracuste',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Caramanchão',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Carambancha de Baixo',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Carambancha de Cima',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Carambo',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Carameleiro',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Caramenta',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Caraminhal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Caramos',
    'municipality': 1303,
    'postalCode': 4610
  },
  {
    'locality': 'Caramos',
    'municipality': 1303,
    'postalCode': 4615
  },
  {
    'locality': 'Caramouchel',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Caramujeira',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Caramulo',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Caranguejeira',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Carapelhos',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Carapetal',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Carapeto',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carapetos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carapetos',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Carapetos',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Carapetosa',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Carapeços',
    'municipality': 302,
    'postalCode': 4750
  },
  {
    'locality': 'Carapinha',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Carapinha',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Carapinhal',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Carapinhal',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carapinhal',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Carapinhal',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Carapinhal',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Carapinheira',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Carapinheira',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carapiteira',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Carapito',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Carapito',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carapito',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Carapito da Légua',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carapuça',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carapuços',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Carapuções',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Caratão',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Caratão',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Caratão',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Caravela',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Caravelas',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Carcavelos',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carcavelos',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Carcavelos',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carcavelos',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carcavelos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carcavelos',
    'municipality': 1105,
    'postalCode': 2775
  },
  {
    'locality': 'Carcavelos',
    'municipality': 1105,
    'postalCode': 2779
  },
  {
    'locality': 'Carcavelos',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carcavelos',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Carcavelos',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Carcavelos de Baixo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Carcavelos de Cima',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cardais',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cardais',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cardais',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Cardais de Baixo',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Cardais de Cima',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Cardal',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Cardal',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cardal',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cardal',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cardal',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Cardal',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Cardal',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cardal',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cardal',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Cardal',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cardal',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Cardal Grande',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cardal Pequeno',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cardal de Baixo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cardal de Cima',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cardal do Barreiro',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cardal do Douro',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Cardanha',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Cardeais',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cardeais',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Cardeal',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Cardeal',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cardeal',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cardeal',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Cardedo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cardeira',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cardeira',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Cardela',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cardela do Meio',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cardelas',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cardelha',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cardia',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Cardida',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cardielos',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Cardielos',
    'municipality': 1609,
    'postalCode': 4925
  },
  {
    'locality': 'Cardiga Cimeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cardiga Fundeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cardigos',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Cardoal',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cardoal de Baixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cardos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cardosa',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cardosa',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cardosal',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cardosas',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Cardoso',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cardosos',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Cardosos',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Carepa',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Carfulas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cargas',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Caria',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Caria',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Caria',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Caria-Gare',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Caridade',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Caridade',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Carido',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Carido',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Carigas',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Carlão',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Carmo',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Carnal',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carnapete',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Carnaxide',
    'municipality': 1110,
    'postalCode': 2790
  },
  {
    'locality': 'Carnaxide',
    'municipality': 1110,
    'postalCode': 2794
  },
  {
    'locality': 'Carne-Cerva',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carneiria',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Carneirinhos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Carneiro',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Carneiro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Carneiro',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Carneiros',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carneiros de Baixo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Carniceiro',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carnicães',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Carnide',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Carnide',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carnide Baixo',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carnide de Cima',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carocedo',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Caroleiro',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Carolo',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Carona',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Caropia',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Carosa',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Carotes',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Carotos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Carpalho',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Carpalhosa',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Carpintaria',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carpinteira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carpinteiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Carpinteiro',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carpinteiros',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Carpinteiros',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Carpinteiros',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carqueigido',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carqueijal',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Carqueijal',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Carqueijal',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Carqueijal',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carqueijal',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Carqueijal',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Carqueijo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carqueijo',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Carqueja',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Carqueja',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Carquejeira do Cabeço',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Carradiça',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carragosa',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Carragosela',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Carragosela',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Carragoso',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Carragozela',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Carrais Covas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carramanha',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carraminheira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carranqueira',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Carrapacedo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carrapata',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Carrapata',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carrapatas',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Carrapateira',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Carrapateira',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Carrapateira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carrapatelo',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Carrapatinha',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Carrapatosa',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Carrapatosa',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Carrapatoso',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Carrapaçal',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carrapia',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carrapichana',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Carrapita',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carrapuços',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Carrasca',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Carrascais',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Carrascal',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Carrascal',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Carrascal',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Carrascal',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carrascal',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Carrascal',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Carrascal',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Carrascal',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Carrascal',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Carrascal',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carrascal',
    'municipality': 1111,
    'postalCode': 2710
  },
  {
    'locality': 'Carrascal',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Carrascal',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carrascal',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Carrascal',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carrascal',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carrascal',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carrascal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carrascal',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Carrascal de Alvide',
    'municipality': 1105,
    'postalCode': 2755
  },
  {
    'locality': 'Carrascal de Manique',
    'municipality': 1105,
    'postalCode': 2645
  },
  {
    'locality': 'Carrascal de Manique',
    'municipality': 1105,
    'postalCode': 2649
  },
  {
    'locality': 'Carrascal dos Novos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carrascalheira',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Carrascalinho',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Carrascas',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Carrascas',
    'municipality': 1508,
    'postalCode': 2951
  },
  {
    'locality': 'Carrascas',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Carrasco',
    'municipality': 1710,
    'postalCode': 5085
  },
  {
    'locality': 'Carrascos',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Carrascos',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carrascos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carrascosa',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Carrascoso',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1508,
    'postalCode': 2965
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carrasqueira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carrasqueiras',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Carrasqueiro',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Carrasqueiro',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Carrazeda de Ansiães',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Carrazede',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carrazedelo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carrazedo',
    'municipality': 301,
    'postalCode': 4720
  },
  {
    'locality': 'Carrazedo',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Carrazedo',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Carrazedo',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Carrazedo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carrazedo',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Carrazedo',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carrazedo',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Carrazedo da Cabugueira',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Carrazedo de Montenegro',
    'municipality': 1712,
    'postalCode': 5445
  },
  {
    'locality': 'Carrazedo do Alvão',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Carrazedo do Vouga',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Carregado',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Carregadouro',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carregais',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Carregais',
    'municipality': 603,
    'postalCode': 3045
  },
  {
    'locality': 'Carregais',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Carregais de Baixo',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Carregal',
    'municipality': 105,
    'postalCode': 3800
  },
  {
    'locality': 'Carregal',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Carregal',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Carregal',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Carregal',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carregal',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Carregal',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Carregal',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Carregal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carregal',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Carregal',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Carregal',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Carregal',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Carregal',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Carregal Cimeiro',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Carregal Fundeiro',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Carregal Fundeiro',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Carregal do Sal',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Carregosa',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Carregosa',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carregosa',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carregosa',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carregosa de Baixo',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carregosa de Cima',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carregueira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Carregueira',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Carregueira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Carregueira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carregueira',
    'municipality': 1508,
    'postalCode': 2955
  },
  {
    'locality': 'Carregueiro',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Carregueiro',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carregueiro',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Carregueiros',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carregã',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carreira',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Carreira',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carreira',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Carreira',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Carreira',
    'municipality': 312,
    'postalCode': 4765
  },
  {
    'locality': 'Carreira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Carreira',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Carreira',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Carreira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carreira',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Carreira',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Carreira',
    'municipality': 1314,
    'postalCode': 4825
  },
  {
    'locality': 'Carreira',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carreira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carreira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Carreira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carreira',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Carreira',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Carreira',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Carreira Aberta',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Carreira Branca',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': "Carreira D'Água",
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Carreira da Lebre',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Carreira de Pinho',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Carreira de Tiro',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carreira do Mato',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Carreiras',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carreiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Carreiras',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Carreiras',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Carreiras',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carreirinha',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Carreiro',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Carreiro',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Carreiro',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Carreiro Martinho',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Carreiro de Areia',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Carreiros',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carreiros',
    'municipality': 106,
    'postalCode': 4550
  },
  {
    'locality': 'Carreiros',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Carreiros',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Carreiros',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carreiros de Baixo',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Carreiros do Meio',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Carrelhas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carreteira',
    'municipality': 702,
    'postalCode': 7040
  },
  {
    'locality': 'Carreço',
    'municipality': 1609,
    'postalCode': 4900
  },
  {
    'locality': 'Carrica',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Carril',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Carril',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Carril',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Carril',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Carril',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Carril',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Carril',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carril',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carril',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Carril',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carril',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Carrima',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carrinhos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carris',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Carris',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Carris',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Carris',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carris',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carrises',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Carritos',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Carriça',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carriça',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carriça',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Carriçal',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Carriçal',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Carriçal',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Carriço',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Carriço',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carriços',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carriços',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carro Quebrado',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carro Quebrado',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Carro Quebrado',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Carro Quebrado',
    'municipality': 505,
    'postalCode': 6060
  },
  {
    'locality': 'Carro Queimado',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carrola',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carromeu',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Carros',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Carrusca',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cartamil',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cartaria',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cartarida',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cartas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cartas',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cartaxa',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Cartaxa',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Cartaxa',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cartaxa',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Cartaxeira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Cartaxo',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Cartaxo',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Cartaxo',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Cartaxos',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Cartim',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cartõe',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carude',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Carujo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Caruncho',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carva',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Carvalha',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Carvalha',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Carvalha',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Carvalha',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Carvalha',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Carvalha',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Carvalha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carvalha',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carvalha',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carvalha',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Carvalha',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carvalha',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalha',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Carvalha',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Carvalha Chã',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carvalha Furada',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalha Seca',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Carvalha de Alva',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Carvalhada',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Carvalhais',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Carvalhais',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carvalhais',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Carvalhais',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carvalhais',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Carvalhais',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Carvalhais',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carvalhais',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carvalhais',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Carvalhais',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Carvalhais Pequenos',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carvalhais de Baixo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalhais de Cima',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Carvalhais de Cima',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalhal',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carvalhal',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Carvalhal',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carvalhal',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Carvalhal',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carvalhal',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Carvalhal',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhal',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Carvalhal',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Carvalhal',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carvalhal',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Carvalhal',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Carvalhal',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Carvalhal',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Carvalhal',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Carvalhal',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Carvalhal',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Carvalhal',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carvalhal',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carvalhal',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carvalhal',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Carvalhal',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Carvalhal',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Carvalhal',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carvalhal',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Carvalhal',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Carvalhal',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Carvalhal',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Carvalhal Azóia',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carvalhal Benfeito',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Carvalhal Cimeiro',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': "Carvalhal D'Além",
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carvalhal Formoso',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Carvalhal Fundeiro',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Carvalhal Grande',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carvalhal Meão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carvalhal Miúdo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carvalhal Pequeno',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carvalhal Redondo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carvalhal Redondo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Carvalhal Redondo',
    'municipality': 1809,
    'postalCode': 3525
  },
  {
    'locality': 'Carvalhal da Aroeira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Carvalhal da Louça',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Carvalhal da Mulher',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Carvalhal da Portela',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carvalhal da Póvoa',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carvalhal da Rocha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhal da Serra',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carvalhal da Serra',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Carvalhal das Vinhas',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Carvalhal de Baixo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Carvalhal de Cima',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Carvalhal de Mansores',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carvalhal de Pussos',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Carvalhal de Rocha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhal de São Bento',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Carvalhal de Vermilhas',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Carvalhal do Chão',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Carvalhal do Estanho',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Carvalhal do Meio',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Carvalhal do Pombo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Carvalhal do Sapo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carvalhal do Sarilho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhal dos Simões',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carvalhas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhas',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Carvalhas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Carvalhas',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Carvalhas Maria Marques',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Carvalhas de São Pedro',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Carvalheda',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Carvalheda',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Carvalheda',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carvalhedo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carvalhedo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carvalhedos',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carvalheira',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Carvalheira',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Carvalheira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Carvalheira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Carvalheira',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Carvalheira',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Carvalheira',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carvalheira',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Carvalheira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Carvalheira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalheira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carvalheira Baixo',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carvalheira Cima',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Carvalheira Grande',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Carvalheira Pequena',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Carvalheira da Boiça',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carvalheiras',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Carvalheiras',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Carvalheiras',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Carvalheiras',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Carvalheiras',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalheiras',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalheiro',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Carvalheiro',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Carvalheiro',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carvalheiros',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Carvalheiros',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carvalhelhos',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Carvalhido',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Carvalhido',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Carvalhinha',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Carvalhinho',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carvalhinho',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Carvalhinho',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Carvalhinho',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Carvalhinho',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carvalhinho',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Carvalhinhos',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Carvalhinhos',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Carvalhinhos',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Carvalhinhos',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Carvalhinhos',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Carvalhinhos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalhitos',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carvalhiças',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalho',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carvalho',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Carvalho',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Carvalho',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carvalho',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Carvalho',
    'municipality': 603,
    'postalCode': 3030
  },
  {
    'locality': 'Carvalho',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Carvalho',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carvalho',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Carvalho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Carvalho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Carvalho',
    'municipality': 1317,
    'postalCode': 4415
  },
  {
    'locality': 'Carvalho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Carvalho',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalho',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Carvalho',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Carvalho',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Carvalho',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Carvalho',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Carvalho',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Carvalho',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Carvalho',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Carvalho Grosso',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalho Velho',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carvalho de Egas',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Carvalho do Rei',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Carvalhos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhos',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Carvalhos',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Carvalhos',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Carvalhos',
    'municipality': 1317,
    'postalCode': 4415
  },
  {
    'locality': 'Carvalhos',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carvalhos',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvalhos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvalhos de Figueiredo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Carvalhos de Figueiredo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Carvalhosa',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carvalhosa',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Carvalhosa',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Carvalhosa',
    'municipality': 1309,
    'postalCode': 4590
  },
  {
    'locality': 'Carvalhosa',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Carvalhoso',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Carvalhoso',
    'municipality': 1213,
    'postalCode': 7425
  },
  {
    'locality': 'Carvalhoso',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Carvalhote',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Carvalhotinho',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Carvalhozinho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvalhão',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Carvalinhos',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Carvas',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Carvas',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Carvas de Cima',
    'municipality': 410,
    'postalCode': 5360
  },
  {
    'locality': 'Carvela',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Carves',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carves de Baixo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carves de Cima',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Carvide',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Carviçais',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Carvoal',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Carvoeira',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Carvoeira',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Carvoeira',
    'municipality': 1109,
    'postalCode': 2655
  },
  {
    'locality': 'Carvoeira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Carvoeira',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Carvoeira',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Carvoeiras de Cima',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 1609,
    'postalCode': 4905
  },
  {
    'locality': 'Carvoeiro',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Carvoil',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Carvão',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Carvão',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Carvão',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Carção',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Carçãozinho',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Casa Abaixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Abaixo de Martinelo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Alta',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Casa Alta',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Casa Alta',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Casa Branca',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Casa Branca',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Casa Branca',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Casa Branca',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casa Branca',
    'municipality': 1215,
    'postalCode': 7470
  },
  {
    'locality': 'Casa Branca',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casa Branca',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Branca',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Branca da Garraza',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casa Caiada',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casa Candeias',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Cantoneiros',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Casa Florestal',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Casa Gonçalo',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Casa Meada',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casa Nova',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casa Nova',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Casa Nova',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Casa Nova',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casa Nova',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Casa Nova',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casa Nova',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casa Nova',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casa Nova',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casa Nova',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Casa Nova',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Casa Nova',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Casa Nova',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Casa Nova',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casa Nova da Amoreira',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova da Azia',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Casa Nova da Cruz',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casa Nova da Estação',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova da Galé',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casa Nova da Marrã',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova da Sancha',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova das Várzeas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova de Baixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova de Monchique',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova de Santa Susana',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Casa Nova do Barradinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova do Caldeirão',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova do Carpinteiro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova do Chaparrão',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova do Freixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova do Juncal',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova do Pereirão',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Casa Nova do Pessegueiro',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Casa Nova do Pinheiro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova do Seiceiro',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casa Nova dos Boticos',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Nova dos Pereiros',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Novas de Fernão Afonso',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Novembra',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Novinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casa Novinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Queimada',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Casa Queimada',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casa Telhada',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casa Velha',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Casa Velha',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casa Velha',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Casa Velha',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Casa Velha',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Casa Velha',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Casa Velha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa Vinha',
    'municipality': 1303,
    'postalCode': 4650
  },
  {
    'locality': 'Casa da Fome',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Casa da Madeira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casa da Muda',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Casa da Serra',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Casa da Torre',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Casa da Vila',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casa da Vinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casa da Volta',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Casa de Pau',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Casa do Monte',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casa do Monte',
    'municipality': 4205,
    'postalCode': 9625
  },
  {
    'locality': 'Casa do Vazo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casa dos Cedros',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casa dos Pires',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Casada',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casainho',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Casainho',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Casainho',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Casainho de Baixo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Casainho de Cima',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Casais',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Casais',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casais',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Casais',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Casais',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Casais',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Casais',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Casais',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casais',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casais',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casais',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casais',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Casais',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Casais',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Casais',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Casais',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casais',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casais',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Casais',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casais',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Casais',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Casais',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casais',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casais',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casais',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Casais',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casais',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casais',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Casais',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casais',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Casais',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casais',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casais',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Casais',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Casais Baixo',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Casais Baleal',
    'municipality': 1014,
    'postalCode': 2520
  },
  {
    'locality': 'Casais Bidoeira',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Casais Brancos',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais Brancos',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casais Brancos',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais Brandão',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casais Camarinheiras',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casais Camarnais',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais Castelos',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casais Castelão',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais Coimbrã',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais Colaços',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais Correias',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': "Casais D'El Rei",
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais Dom Braz',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casais Falgar',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais Fanqueiro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casais Formigos',
    'municipality': 1410,
    'postalCode': 2330
  },
  {
    'locality': 'Casais Foroana',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais Fundeiros',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casais Furtados',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casais Gaiola',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais Gaiolas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais Galegos',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais Garridos',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casais Larana',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais Loureiros',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casais Maduros',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casais Maria',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casais Maria Delfina',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casais Marquezados',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais Martanes',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casais Mata-o-Demo',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais Mesquita',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais Mestre Mendo',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casais Miguéis',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casais Misericórdia',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casais Monizes',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais Moreta',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Casais Morgados',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais Nossa Senhora do Rosário',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais Novos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casais Novos',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais Novos',
    'municipality': 1101,
    'postalCode': 2581
  },
  {
    'locality': 'Casais Novos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais Novos',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casais Novos',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casais Pedreira do Lima',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais Pedrógão',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais Pedrógão',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais Penedos',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais Porto Maú',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais Porto de Oliveira',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais Próximos',
    'municipality': 3108,
    'postalCode': 9100
  },
  {
    'locality': 'Casais Quintão',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais Robustos',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Casais Romeiros',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Casais Sebes',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casais Sobrigal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais São Jorge',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casais Vale de Água',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais Varões',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais Velhos',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casais Vestiaria',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casais Vivenda',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais da Abadia',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casais da Amendoeira',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais da Areia',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais da Aroeira',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Arroteia',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais da Arruda',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais da Asseiceira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Atagueda',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais da Azóia',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Casais da Barroca',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Bemposta',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Bica',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Bica',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Boa Vista',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais da Borda do Rio',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Bufinha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Cabaça',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Cabaça',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Cabra',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casais da Cabrita',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Capela',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais da Capeleira',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais da Charneca',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casais da Charneca',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais da Charneca',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casais da Charruada',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Cheira',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais da Cidade',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Comenda',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Espanha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Espinheira',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Espinheira',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casais da Falda',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais da Ferreira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Fonte da Pedra',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Fonte da Pipa',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Fontinha',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Gama',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casais da Granja',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casais da Igreja',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Igreja',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Igreja',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casais da Igreja',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Casais da Josefa',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casais da Lagarteira',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casais da Lage',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Lage',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais da Lagoa',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais da Lapa',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais da Linhaceira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casais da Madalena',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casais da Marinela',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Marmeleira',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Marmeleira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Milhariça',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Narcisa',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais da Navalha',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais da Neve',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Olaria',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais da Paraventa',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Pedreira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Pereira',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Casais da Ponte',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Portela',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Portela',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais da Própria',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casais da Póvoa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais da Póvoa Nova',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Raimonda',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais da Ramalheira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Ribeira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais da Ribeirinha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais da Roda',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casais da Serra',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais da Serra',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais da Serra',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casais da Sestaria',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais da Torre',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais da Valentina',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais das Archeiras',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais das Areias',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais das Arroçadas',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais das Bicadas',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais das Boiças',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais das Campainhas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais das Galveias',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais das Ladeiras',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais das Maias',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais das Simoas',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casais de Advagar',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais de Alcaria',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais de Além',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casais de Além',
    'municipality': 3108,
    'postalCode': 9135
  },
  {
    'locality': 'Casais de Baixo',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casais de Baixo',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Casais de Cabrela',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Casais de Cabrela',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Casais de Carcavelos',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casais de Cima',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Casais de Dona Inês',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Casais de Fonte de Lima',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais de Matos',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casais de Monte Bom',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casais de Montejunto',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais de Oliveira do Cabo',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais de Pia do Mestre',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais de Porto Dinheiro',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais de Revelhos',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casais de Santa Bárbara',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais de Santa Cristina',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casais de Santa Teresa',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casais de Santo António',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais de Santo Quintino',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casais de São Bento',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Casais de São Brás',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais de São Clemente',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casais de São Jacinto',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais de São João',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais de São Mamede',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casais de São Martinho',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casais de São Miguel',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais de Vale Flores',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais de Vera Cruz',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Casais de Vide',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casais do Agrão',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais do Alvito',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais do Araújo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais do Arrocho',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casais do Açude',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais do Bom Nome',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casais do Bruxo',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais do Carrascal',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casais do Chorão',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais do Chão',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casais do Concelho',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais do Douro',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Casais do Forno',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais do Forno do Coelho',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casais do Fraldeu',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais do Júlio',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casais do Latagão',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais do Maio',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais do Mato Redondo',
    'municipality': 1107,
    'postalCode': 2660
  },
  {
    'locality': 'Casais do Mocho',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais do Monte',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Casais do Pego',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais do Peral',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casais do Porto',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casais do Rijo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais do Rio',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais do Rio',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais do Sacoto',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais do Saramago',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais do Vale Pereiro',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais do Vale da Viúva',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais do Vento',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casais do Verdelho',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais dos Arrifes',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casais dos Covões',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casais dos Gatos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casais dos Lagartos',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais dos Ledos',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casais dos Limões',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casais dos Maçaricos',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casais dos Montes',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casais dos Penedos',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais dos Telégrafos',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casais dos Tojais',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casais dos Vales',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casais dos Vales',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Casal',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casal',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Casal',
    'municipality': 109,
    'postalCode': 4525
  },
  {
    'locality': 'Casal',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Casal',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Casal',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Casal',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Casal',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Casal',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Casal',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Casal',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casal',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Casal',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Casal',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Casal',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Casal',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Casal',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Casal',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Casal',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casal',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Casal',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Casal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casal',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casal',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Casal',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casal',
    'municipality': 1609,
    'postalCode': 4925
  },
  {
    'locality': 'Casal',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Casal',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Casal',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Casal',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casal',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Casal',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Casal',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Casal',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Casal',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Casal',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Casal',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Casal',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Casal',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Casal',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Casal A-Do-Barrão',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal A-de-Galinhas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal A-do-mato',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Adegas',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal Africano',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Agostinho Alves',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal Albardeiros',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Albeoico',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Alecrim',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Alexandre',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Alexandre',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Almeida',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal Alto das Esteveiras',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Alto das Mós',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Alto do Nascente',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Alto dos Moinhos',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Além',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Amaro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Amaro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Amoreiras',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Ana e João',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Andorinha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Andrés',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal António Braz',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal António Dias',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Apupos',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Aranha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Araújo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Arnaldinho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Arneiro da Vinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Arrifes',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Arriota',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Arroteias',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Arruda',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ascenso Antunes',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Avelar',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Avesso',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casal Azenha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Bacelos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Baptista',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Barbas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Barca',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Barqueiro',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal Barradas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Barreiro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Barril',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal Barroela',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Batista',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Batuque',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Belmonte',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Betigal',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Bico de Chão',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casal Biqueira',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Bisau',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Boavista',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Boavista',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Boieiro',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Bom',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casal Bom',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Casal Bom',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Casal Bom',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Casal Bom',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Casal Bonfim',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Borralhos',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Botas',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Branco',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal Branco',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Casal Branco',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Branco',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal Branco',
    'municipality': 1412,
    'postalCode': 2150
  },
  {
    'locality': 'Casal Branco',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Casal Brejo',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Brejoeiras',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Buciculos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Cabeça Ruiva',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Cabeço',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Cabreiro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Calado',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Caldeira',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Caldelas',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Casal Calhandras Grandes',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal Calhandras Pequenas',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal Calçada',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Caminhos Brancos',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Campina',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Canago',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Caniçal',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Capitão',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal Carilhos',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Carocho',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Carpinteiro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Carrapiçal',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Carrapo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Carrasqueira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Carregado',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Carreira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Carrito',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal Carriço',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Carriço',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Cartaxana',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Carvalhais',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Carvalhal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Carvalhal',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Carvalhal',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Carvalho',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal Casica',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Castanheiro',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal Castelo Picão',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Castilho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Celão',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Cereijeiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Chofral',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Cigano',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal Cimeiro',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Casal Cimeiro',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Casal Cimeiro',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal Cipreste',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Clérigo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Cochim',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Coelho',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Comba',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Casal Comeira',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Confeiteira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Constantino',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Coqueira',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Cordeiro',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal Cordeiro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Correia',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Correias',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Correntinhas',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Casal Cortegana',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Corvões',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Costa',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Costa',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Costa',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Costa Branca',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Costa Paz',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Coutada',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Couveiro',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal Covas das Maceiras',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Cruz',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Cruz',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Cruz da Légua',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Cutelo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Cágados',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': "Casal D'Alvaro",
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': "Casal D'Além",
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': "Casal D'Além",
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': "Casal D'Eiro",
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': "Casal D'Ordem",
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casal Deita',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal Delgado',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Deus',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Dias',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Casal Dias',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Diogo',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casal Diz',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Casal Domingos João',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal Duro',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Eduardo Mafra',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal El Palomar',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Escabelado',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Espirito Santo',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal Espírito Santo',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal Estalagem',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Facheiros',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal Faria',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Faísca',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Feijão',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Feijões',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal Fernandes',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Fernando',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Fernão João',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal Ferreiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ferreiro',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal Ferreiros',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal Fetal',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Fidalgo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Figueiras',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Figueiras Velhas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Filipe',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Flores',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Fojo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Fonseca',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Fonte',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Fonte Canas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Fonte Palheiro',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Fonte da Granja',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Fonte de Além',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Fonte do Sobral',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Formoso',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Casal Forte da Luz',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Frade',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Francisco Ferreira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Franco',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal Frei Cândido',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Frias',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal Fundeiro',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Félix',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal Féteira',
    'municipality': 1412,
    'postalCode': 2150
  },
  {
    'locality': 'Casal Galego',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Casal Galego',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Casal Galego',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal Galinhas',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Galvão',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal Garcia Mogo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Gaspar',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Gaviãozinho',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal Godel',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Goso',
    'municipality': 1823,
    'postalCode': 3515
  },
  {
    'locality': 'Casal Goucha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Gouveia',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Gravinha',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Casal Gregório',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal Grão',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Guilhalmeira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Henriques',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Casal Jagaz',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Janeiro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Januário',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Jorge Dias',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal José Nunes',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal José da Costa',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal João Bom',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal João Couto',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal João Dias',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal João Fernandes',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal Julião',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Juncal Faminto',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Junqueira',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Jusão',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Casal Ladeiras',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Lagar do Rio',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal Lagarteiro',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Lage',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Lagoa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Lambel',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal Lameda',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Lameira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Casal Laranjeiras',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal Laranjeiro',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Leirião',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal Lezirão',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Longa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Loural de Baixo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Loural de Cima',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Loureiro',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casal Lourim',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Lucas',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal Luzio',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Maceda',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Macedo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal Machado',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Madeira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Magano',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Maio',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Major Teodósio',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Malforno',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal Malforno',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal Malpique',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Mangancha',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal Maninho',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Casal Manuel Charana',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Casal Manuel José',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal Marcelino',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Marcolino',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Maria',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Casal Maria Tejo',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Maria da Costa',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Maria do Céu',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Marinho',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Casal Marmelal',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Marmelo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Marmelo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Marques',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Marques Ferreira',
    'municipality': 1410,
    'postalCode': 2330
  },
  {
    'locality': 'Casal Marquito',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Marquês',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Mascote',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Mata Quatro',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Matias',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Mato',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Casal Mato Jardo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Matos',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Casal Matos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Matos',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Casal Matos',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Casal Matos Bois',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Mau',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casal Mau',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Casal Maximino',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Mendes',
    'municipality': 1412,
    'postalCode': 2150
  },
  {
    'locality': 'Casal Mendo',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Casal Mendo',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casal Menino',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal Meão',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Casal Mil Homens',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal Mineiro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Minhoto',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Mires',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Moinho',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal Moinho do Frade',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Moleiros',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Monte Ferreiro de Baixo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Monte Ferreiro de Cima',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Monte Ferreiro do Meio',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Monte Godel',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Monte Guilhão',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Monte Rei Grande',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Monte Rei Pequeno',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Monte da Barca',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal Monteiro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Monteiro',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Casal Monzebro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Mosqueiro',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal Mota',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Casal Mota',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Casal Mouro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal Mourão',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Casal Mouzinho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Mundinho',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casal Mós',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Negro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Neto',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal Nogueira',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Nordeste',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Novo',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Casal Novo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Casal Novo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Novo',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Casal Novo',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Casal Novo',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casal Novo',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal Novo',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal Novo',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Casal Novo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casal Novo',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal Novo',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Novo',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal Novo',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casal Novo',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Casal Novo Rio',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Novo da Amieira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Novo da Portela',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal Novo da Serra',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Novo de Almoster',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal Novo de Cima',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Novo do Ferreiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Novo do Retiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Oleiro',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Olheiro',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Oliveira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Oliveiras',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal Olivete',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Onia',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Ordem',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal Oureça',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ourives',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Outeiro',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Outão',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal Paires',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal Paivas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Paixão',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Palmeiro de Cima',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Papa Jantares',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Papão',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Casal Parreira',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Casal Pastor',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Pedras Alvas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Pedras da Lage',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Pedreira',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Pedreira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Pedro',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal Pedro Maia',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Casal Pedrosas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Pedroso',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal Pelado',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Penas',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Pendão',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Penedo',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Penhores',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Casal Pequeno',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal Pequeno',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Perdigoto',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Perdigão',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Pereiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Pereiro',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Pevide',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal Picoto',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Pinhal',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Pinheiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Pinheiro',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Pinheiro',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Pinheiro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Pinheiro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Pinheiro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Pinto',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal Pipocas',
    'municipality': 1410,
    'postalCode': 2330
  },
  {
    'locality': 'Casal Pipocas',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Poceiras',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal Polinho de Cima',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Pombal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ponte',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Porrão',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Portela Maceira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Portela do Ramalho',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Porto',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Porto Vagem',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Poço Mogo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Poço Mogo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Preto',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Pêro Afonso',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Pôr do Sol',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Queimadas',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Queimado',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Quintino',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal Ramiro',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal Ramos',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Ranhado',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Raposo',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal Recaído',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Redol',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Repelão',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Ribeira Afonso',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ribeira Praçais',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Casal Ribeiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ribeiro',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal Ribeiro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Rolim',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Romeiras',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Casal Rosmaninho',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Ruivo',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal Ruivo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal Ruivo',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Sabrosas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Salvador',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal Sancho',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Casal Sandinho',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casal Sandinho',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Casal Santa Ana',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Santa Bárbara',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal Santa Cruz',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Casal Santana',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal Santo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Santo António',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Santo António',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Santo Estevão',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal Saramago',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Casal Seco',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal Seco',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal Seixal',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal Seixosa',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Sejães',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Casal Senim',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casal Sentista',
    'municipality': 1410,
    'postalCode': 2330
  },
  {
    'locality': 'Casal Sentista',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Sequeira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Sequeiro',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal Serra do Marco',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Serrano',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Serrano',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Sicó',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Silva',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Soalheira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Soeiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal Soeiro',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal Soito',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal Suão',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casal Sá',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal São Brás',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal São José',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal São Miguel',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal São Pedro',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal São Tiago',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal São Vicente',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal Tasca',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Teixeira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Teodoro',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Tereza Moça',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Torcano',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Torcato',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Torneiro',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Torninho',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Troviscal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Val Coito',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal Val Ventos',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Val Ventos',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Valada',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal Valcovo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Vale Casa',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal Vale Centeio',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': "Casal Vale D'Arcos",
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal Vale Feto',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal Vale Fidalgo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal Vale Freixo',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Vale Geões',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Vale Lourenço',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vale Martelo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale Martelo de Baixo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale Moinhos',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Vale Mouro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale Pato',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal Vale Peixe',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale Peixes',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal Vale Pereiro',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Casal Vale Touro',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal Vale Verde',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale da Cruz',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Vale da Murta',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale da Quinta',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vale da Tábua',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vale da Tábua',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vale das Cruzes',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vale de Adares',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Vale de Arroz',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Vale de Enxames',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vale de Monas',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Vale de Olheiros',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vale do Prior',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Vale do Souto',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Valemoinho',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Valinho',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal Valinhos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Valongo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Valverde',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Valverde',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Varzinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vasco',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Casal Velho',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal Velho',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casal Velho da Igreja',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Velide',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Casal Ventoso',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Ventoso',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal Ventoso',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casal Verde',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal Vermelho',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal Vespeira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vicente',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal Vicente',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal Vicentes',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal Vidona',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Casal Viegas',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal Viegas',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal Vieira',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casal Vila Boa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal Vinha Velha da Mata',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal Vouga',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Zimbral',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Abegoaria',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Casal da Abrigada',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Achada',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Aguieira',
    'municipality': 1114,
    'postalCode': 2625
  },
  {
    'locality': 'Casal da Alegria',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Almónia',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Alquiteira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Amada',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Amieira',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal da Amieira',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal da Amieira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Amoreira',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal da Amoreira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Anja',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Casal da Aranha',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Areia',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal da Areia',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Casal da Areia',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal da Areia',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Aroeira',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal da Aroeira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Arouca',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal da Arrezima',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Arroteia',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Arroteia',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal da Auzenda',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Casal da Avarela',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal da Azenha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Azenha de Cima',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Azinhaga',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Azinheira',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Azinheira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Azinheira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Azinheira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Baleeira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Barba Pouca',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Casal da Barota',
    'municipality': 1111,
    'postalCode': 2605
  },
  {
    'locality': 'Casal da Barreira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Barreira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Barreira Vermelha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Barreirinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Barroca',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Bemposta',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Bica',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal da Bica',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Bica',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal da Bica',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Bica',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal da Bica',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Casal da Boa Vista',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Boavista',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Boavista',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Boavista',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Boavista',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Boavista',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Brava',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Brejoeira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Cabana',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Cabeça Ruiva',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Cabrita',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Campina',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Cantarola',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Caridade',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Carpinteira',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casal da Carrasqueira',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal da Carrasquinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Cartaxeira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Carvalha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Cascalheira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Casta',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Cerca',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal da Cerca',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Cerca',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Cerâmica',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal da Charneca',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal da Charneca',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Charnequinha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Charruada',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Chocolateira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Choça',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Clara',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal da Clarigueira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Coita',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Comenda',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal da Constança',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal da Corticeira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Cortiça',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Casal da Costa',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Costa',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Cotovia',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Cotovia',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Coutada',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Cova',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Cre',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Cruz',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Casal da Côxa',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Eira',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Casal da Eira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Casal da Eira',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal da Eira da Pedra',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Ereira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Ermida',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Ervideira',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal da Escusa',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Espinheira',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal da Espinheira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Estevinha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Estortiga',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Estrada',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Estrema',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Eva',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Faceira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Faia',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Falagueira',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal da Falca',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal da Farroeira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Fartaria',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Casal da Fazenda',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal da Feiteira',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Casal da Ferreira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Ferrugenta',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal da Fersura',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal da Figueira',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal da Figueira Branca',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Fisga',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Fontaínha',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Fonte',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal da Fonte Boa',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Fonte Nova',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Fonte Queimada',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal da Fonte da Pedra',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Casal da Fontinha',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal da Fontinha',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Formiga',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Foz',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Fraga',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Casal da Francisca',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal da Funcheira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Fustiga',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Gaivosa',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Casal da Galharda',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Galinha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Galiza',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Glória',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Granja',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Granja',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Granja Pequena',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Grizoma',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal da Guerra',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal da Horta',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Igreja',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal da Inveja',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Jacinta',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Juge',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Junqueira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Ladeira',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal da Lagoa',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Lagoa',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Lagoa',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal da Lagoa',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Lagoa',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Lagoínha',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Lamarosa',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Lameira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Lameira',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal da Lameirancha',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Lapa',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Casal da Lapa',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Lapa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Laranjeira',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal da Lavandeira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Leziria',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Longra',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal da Longra',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Lua',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Luz',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Luísa',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal da Luísa',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Légua',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal da Légua',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal da Madalena',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Madre Deus',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal da Mariana',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Marinha',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal da Marinha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Marinha',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Marinheira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Marmelada',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Marrã',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Martinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Mata',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal da Mata Galega',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Meira',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal da Milha',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Milharosa',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Milheira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Mimosa',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Misericórdia',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Moita',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Monteira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Mouca',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal da Mourã',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Casal da Mucharreira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Murta',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Murta',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Murta',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Murteira',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Casal da Murteira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Oliveirinha',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Oliveirinha',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Ordem',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal da Ordem',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal da Ortiga',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Palmeira',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Pedra',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Pedra',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Pedreira',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal da Pedreira',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Pedreira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Pedreira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Pelota',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Casal da Pena',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Pequena',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Casal da Pereira',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal da Piedade',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal da Pimenta',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Pinheira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Pinheira Grande',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Pocariça',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Poesia',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Pombinha',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal da Ponte',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal da Ponte',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Ponte Nova',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal da Ponte Nova',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Ponte Velha',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Popa',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Portela',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Portela',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Portela',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Portela',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Portela',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Pouca Sorte',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Preta',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal da Purificação',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Póvoa',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal da Quebrada',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal da Quinta',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Casal da Rainha',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal da Rainha',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Raja',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Ramalheira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Raposa Pequena',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Raposeira',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal da Raposeira',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal da Ratoeira',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal da Regateira',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Relva',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Relva',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Renda',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Casal da Ribeira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casal da Ribeira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casal da Ribeira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal da Rita',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Robala',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Casal da Roca',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Rocha',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Rocha',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal da Rola',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal da Rosa',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal da Rosa',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Rosa',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal da Saimeira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Salgueirinha',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Segurança',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal da Senhora',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal da Senhora',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal da Senhora Vitória',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Serpegeira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Serpigeira Nova',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Serpigeira Velha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 502,
    'postalCode': 6005
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1107,
    'postalCode': 2660
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Serra',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal da Serrada',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Silva',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Casal da Sobreira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Sobreira',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal da Taberninha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Tapada',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Casal da Toiça',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal da Tojeira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Casal da Torre',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal da Torre',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal da Torre',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Torre',
    'municipality': 1802,
    'postalCode': 3430
  },
  {
    'locality': 'Casal da Torrinha',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal da Tracalaia',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal da Urmeira',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal da Vala',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal da Valada',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal da Valenta',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Varela',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal da Varzinha',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal da Velha',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal da Velha',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal da Venda',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal da Vindima',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Vinha',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal da Vinhita',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal da Volta',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Várzea',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal da Várzea',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal da Água de Prata',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal das Aboboreiras',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal das Adegas',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Casal das Amendoeiras',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Andorinhas',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal das Antas',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casal das Areias',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Areias',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal das Arroteias',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal das Atalaias',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal das Balas',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal das Balsas',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal das Barbadinhas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Barreiras',
    'municipality': 1412,
    'postalCode': 2150
  },
  {
    'locality': 'Casal das Barrocas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal das Bernardas',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal das Brancas',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal das Campas',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal das Caneiras',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Carreiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Carvalhas',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal das Carvalhas',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal das Casas',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal das Cheiras',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Coelheiras',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal das Comeiras',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal das Corgas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal das Cortes',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal das Courelas',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Covas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Covas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Curtinhas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal das Donas',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Casal das Eiras',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal das Encruzilhadas',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal das Figueiras',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Casal das Flores',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Fontainhas (Paúl)',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Fontaínhas',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal das Fontaínhas',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal das Fontaínhas (Asseiceira)',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Freiras',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Freiras',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal das Freiras',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Giestas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Hortas',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal das Hortas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Hortas de Cima',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Lajes',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal das Lamas',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal das Lameiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Landeiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Laranjeiras',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal das Laranjeiras',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal das Malpicas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Mansas',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal das Marés',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Maurícias',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal das Milheiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Mouzinhas',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal das Naculas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Neras',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal das Olas',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Paradas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Passadeiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Patas',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal das Pegas',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal das Penas',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Pendências',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Peras',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal das Pias',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casal das Pimenteiras',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal das Pimenteiras',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal das Poisias',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Portelas',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal das Portelas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Portelinhas',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal das Portelinhas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Portelinhas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Quintas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal das Raposeiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Rãs',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Casal das Sesmarias',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal das Sesmarias',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal das Sete Fontes',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Casal das Sortes',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Sousas',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal das Torres',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal das Varandas',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal das Várzeas',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal de Aires',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal de Alge',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal de Além',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal de Além',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casal de Além',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal de Além',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal de Além',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal de Além',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal de Além',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal de Andrade',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal de Areia',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal de Areias',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal de Arão',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal de Baixo',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Casal de Besteiros',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal de Brunheiro',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal de Cambra',
    'municipality': 1111,
    'postalCode': 2605
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Casal de Cima',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Casal de Cinza',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Casal de Cortido',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal de Courelas',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal de Entre Valados',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal de Entre Águas',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal de Entrevão',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal de Ermio',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal de Loivos',
    'municipality': 1701,
    'postalCode': 5085
  },
  {
    'locality': 'Casal de Marreiros',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal de Matos',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal de Matos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal de Matos de Baixo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal de Nossa Senhora da Conceição',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal de Ordem',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal de Paiva',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal de Pedro',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casal de Perna Seca',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal de Piães',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal de Santa Cecília',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal de Santa Clara',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal de Santa Cruz',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal de Santa Helena',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de Santa Iria',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal de Santa Joana',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal de Santa Luzia',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de Santa Maria',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal de Santa Maria',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal de Santa Maria',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Casal de Santa Terezinha',
    'municipality': 503,
    'postalCode': 6225
  },
  {
    'locality': 'Casal de Santarém',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal de Santo Amaro',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal de Santo Amaro',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de Santo António',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal de Santo Isidro',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal de Seiça',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal de São Domingos',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal de São Jorge',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal de São José',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Casal de São José',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Casal de São José',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal de São José',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal de São José',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Casal de São José',
    'municipality': 1809,
    'postalCode': 3520
  },
  {
    'locality': 'Casal de São João',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Casal de São João',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casal de São João',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal de São João',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de São Lourenço',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal de São Luis',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Casal de São Luis',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Casal de São Martinho',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal de São Miguel',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal de São Neutel',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal de São Nicolau',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal de São Pedro',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal de São Pedro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de São Sebastião',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal de São Simão',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal de São Tomé',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Casal de São Vasco',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal de Tonda',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Casal de Vale Jameira',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal de Vale de Cavalos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal de Vale de Flores',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal de Vale de Urso',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal de Vila Chã',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Casal do Abade',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Casal do Abade',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal do Abegão',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Adriano',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Casal do Aguiar',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Alecrim',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Alho',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Alho',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Casal do Almargem',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Altinho',
    'municipality': 1508,
    'postalCode': 2950
  },
  {
    'locality': 'Casal do Alto',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal do Alto da Camila',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Além',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Além',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casal do Amaral',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal do Amaro',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Amor',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Andarilho',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Aniceto',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Areeiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Arneiro',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Arneiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Arpim',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal do Arqueiro',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Arrodel',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal do Arroz',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Avô',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Azemel',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Bagucho',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Bailarico',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Balau',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal do Barro',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal do Barro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Benfica',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Bernardo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Bicho',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Bicho',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Bispo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal do Boicelo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Bolho',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Casal do Bonjardim',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Bosque',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Botas',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Braz',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Brejo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Brejo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Brejo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Brejo',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal do Burro',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Cabeço Rei',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Cabeço do Forno',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Cabide',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Calvo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal do Campo',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Caniçal',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Caniço',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Cano',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Canudo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal do Carapaú',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal do Carrascal',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Carrascal de Baixo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Carrascal de Cima',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Carrasqueiro',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal do Carril',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal do Carteiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Carvalhal',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal do Carvalhal',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Casal do Casco',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal do Casco',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Caseirão',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Castelo',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal do Catarino',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal do Cavaco',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Cepo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Cesteiro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Chafariz',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Chamusqueiro',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Chicharal',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Chiote',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Chixaro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Chão',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Casal do Cigano',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal do Cimeiro',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Cipreste',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Cochim',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal do Coito',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Colmeeiro',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Condado',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal do Conde',
    'municipality': 1410,
    'postalCode': 2330
  },
  {
    'locality': 'Casal do Corvo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal do Covão',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Cozinheiro',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Cume',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal do Eido',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casal do Entrudo',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Esporão',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Casal do Espírito Santo',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal do Famão',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal do Farrobo Laranjeiras',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Farto',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Casal do Fato',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal do Ferro Velho',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal do Ferro Velho',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Ferrão',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Fialho',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Fole',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Folgar',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal do Forno',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Forno',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Frade',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Casal do Frade',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Frade',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Freixo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Freixo',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal do Fundo',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Casal do Gago',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Casal do Gago',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Gaio',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal do Gaio',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal do Gambeiro',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Gavião',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal do Geraldo de Cima',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal do Gil',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casal do Gil',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Gil de Baixo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Gil de Cima',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Grelo',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal do Grilo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Grilo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Guerra',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Haver',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Isidro',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do João',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Casal do Junquinho',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal do Justo',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Labrusque',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Lagarto',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Larojo',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casal do Lavradio',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Lombo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Lombo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Lombo',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal do Lopes',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Louco',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Láparo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Lázaro',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Machado',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Malta',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Casal do Marachão',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Marco',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal do Marco',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal do Marco',
    'municipality': 1510,
    'postalCode': 2840
  },
  {
    'locality': 'Casal do Mareco',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Marques',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal do Marra',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Mato',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal do Mato',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Casal do Mato',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Mato Forte',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal do Mato Grande',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Matotinho',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Mau Dente',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Meio',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal do Meio',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casal do Meio',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Casal do Meio',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Casal do Melro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Menino',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Missa',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal do Mogo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Moinho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal do Moinho',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casal do Moinho',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Moinho',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Moinho',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal do Moinho da Praia',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal do Moinho das Areias',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal do Monte',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Casal do Monte',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Casal do Monte',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Casal do Monte',
    'municipality': 1114,
    'postalCode': 2625
  },
  {
    'locality': 'Casal do Monte',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal do Monte',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Casal do Moscão',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Mosqueiro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Mosteiro',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casal do Mota',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal do Mouchão',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Mouco',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal do Mulato',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Norte',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Casal do Não Há',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Casal do Não Há',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Olheiro',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Olivado',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal do Ouriço',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Ouro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Outeirinho',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Outeirinho',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Outeiro',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Outeiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Pardo',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Patalugo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Paço',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Paço',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Paúl',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Casal do Pedregulho',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal do Peixe',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Pereiro',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Peso',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Pilha',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Casal do Pinhal',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Pinhal',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Pinheiro',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Pinheiro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Pinheiro',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal do Pinheiro',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal do Pinhel',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Pitagudo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Poceirão',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Poleiro',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casal do Pombo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Porto Rio',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Pote',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Pote',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Pote',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Pote',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Poço Pegos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Poço Redondo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Prelaz',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Queijo',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Queijo',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal do Quinta',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Ralha',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Casal do Ramalhal',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Rasga',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Rato',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Rato',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Casal do Rebelo',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal do Rebola',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Redinho',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Regalo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Rego',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Rei',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Casal do Relvas',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Casal do Resoneiro',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casal do Retiro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Retiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Ribeiro',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal do Ricardo',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Rijo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Rio',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Rio Verde',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Rodelo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Rodo',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Rolão',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Rosendo',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal do Rossio',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Rosário',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Rosário',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Sapo',
    'municipality': 1511,
    'postalCode': 2975
  },
  {
    'locality': 'Casal do Sarzedo',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Casal do Seixo',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Seixo',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Seixo',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Sepilhão',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Serralheiro',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Simão',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Sobreiral',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Sobreiro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Soeiro',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal do Soito',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal do Soito',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Sol',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Sol Posto',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal do Souto',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal do Tanque',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal do Telhadouro',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal do Telheiro',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Casal do Telheiro',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Telheiro',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal do Telheiro',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal do Tojim',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Tristão',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal do Ulmeiro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casal do Urmal',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Vais',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Vale',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal do Vale',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal do Vale',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal do Vale da Eira',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Vale do Medo',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Varatojo',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Casal do Vimeiro',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal do Viso',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal do Zambujeiro',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal do Zambujeiro',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal do Zote',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal dos Abreus',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Amarelos',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casal dos Amparados',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casal dos Arais',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal dos Aromas',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal dos Bacelos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal dos Balaus',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal dos Belos Aires',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Casal dos Bernardes',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal dos Bernardos',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal dos Britos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Bufos',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal dos Cardos',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal dos Carecos',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Casal dos Carrões',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal dos Carvalhos',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal dos Casalões',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Charcos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Cheiros',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal dos Chouriços',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Casal dos Chães',
    'municipality': 1012,
    'postalCode': 2510
  },
  {
    'locality': 'Casal dos Chães',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal dos Claros',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Casal dos Clérigos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Coxos',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Craveiros',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal dos Cravos',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Crutos',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casal dos Cucos',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal dos Currais',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal dos Duques',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal dos Faustinos',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Casal dos Feros',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Ferreiros',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal dos Ferreiros',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal dos Ferreiros',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal dos Ferreiros da Ribeira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal dos Fidalgos',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal dos Fieis de Deus',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Florindos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Frades',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal dos Frades',
    'municipality': 1420,
    'postalCode': 2260
  },
  {
    'locality': 'Casal dos Franciscos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Francos',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Gabrieis',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Gafos',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casal dos Galegos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal dos Galegos',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal dos Leiteiros',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal dos Lobos',
    'municipality': 1004,
    'postalCode': 2495
  },
  {
    'locality': 'Casal dos Luízes',
    'municipality': 1406,
    'postalCode': 2070
  },
  {
    'locality': 'Casal dos Marcos',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Marnotos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casal dos Matos',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casal dos Matos',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal dos Matos',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casal dos Montes Claros',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal dos Morgados',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal dos Muros',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal dos Nabos',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casal dos Negrinhos',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casal dos Netos',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Casal dos Nobres',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal dos Nobres',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal dos Nortes',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casal dos Olheiros',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal dos Olhos de Água',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal dos Ossos',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Casal dos Paivas',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal dos Palheiros',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Pedros',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casal dos Pedrógãos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Pegos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Peixinhos',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal dos Pinheirinhos',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal dos Pinhões',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal dos Piscos',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal dos Plainos',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casal dos Planetas',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal dos Pocinhos',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casal dos Pocinhos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Polomes',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Pombos',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Casal dos Prazeres',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casal dos Queimados',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Casal dos Ramos',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Casal dos Rios',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casal dos Salgados',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casal dos Saraivas',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal dos Secos',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Casal dos Secos',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casal dos Serralheiros',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casal dos Silvas',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Casal dos Titos',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casal dos Tojais',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Casal dos Tojais',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Casal dos Tomazes',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casal dos Valentes',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casal dos Vicentes',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casal dos Violantes',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casal dos Zagalos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casal Águas de Verão',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Casal Álvaro Pires',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Casaldaque',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casaldelo',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Casaldete',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casaldigo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casaldima',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Casaldoufes',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casalinho',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Casalinho',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casalinho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casalinho',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Casalinho',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Casalinho',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casalinho',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Casalinho',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Casalinho',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Casalinho',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Casalinho',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casalinho',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Casalinho',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Casalinho',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Casalinho',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casalinho',
    'municipality': 1213,
    'postalCode': 7400
  },
  {
    'locality': 'Casalinho',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Casalinho',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Casalinho',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Casalinho',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casalinho',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Casalinho',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Casalinho',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casalinho',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casalinho',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casalinho',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Casalinho',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Casalinho',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Casalinho Dão',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Casalinho Farto',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Casalinho Santana',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casalinho da Foz',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casalinho da Ribeira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Casalinho das Oliveiras',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Casalinho das Oliveiras',
    'municipality': 1109,
    'postalCode': 2655
  },
  {
    'locality': 'Casalinho das Quintas',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casalinho de Baixo',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casalinho de Cima',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Casalinho de Oliveiras',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casalinho de São Facundo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Casalinho do Rio do Cravo',
    'municipality': 1109,
    'postalCode': 2655
  },
  {
    'locality': 'Casalinhos',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casalinhos',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Casalinhos',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casalinhos de Alfaiata',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casalito',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Casalito',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Casalteiro',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casaltão',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Casalvo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casalão',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casalão',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Casanova',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casares',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Casares',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Casares',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casaria',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casaria',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Casarias',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Casario',
    'municipality': 407,
    'postalCode': 5385
  },
  {
    'locality': 'Casarolas',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Casarão',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casarão',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Casarão',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Casarões',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casas',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Casas',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Casas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Casas',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Casas Altas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casas Altas',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Casas Altas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casas Baixas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casas Brancas',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casas Brancas',
    'municipality': 1213,
    'postalCode': 7400
  },
  {
    'locality': 'Casas Brancas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casas Figueiras',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Casas Grandes',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Casas Juntas',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Casas Juntas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casas Leirias',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casas Martim Anes',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casas Novas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Casas Novas',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Casas Novas',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casas Novas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casas Novas',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casas Novas',
    'municipality': 704,
    'postalCode': 7100
  },
  {
    'locality': 'Casas Novas',
    'municipality': 705,
    'postalCode': 7000
  },
  {
    'locality': 'Casas Novas',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Casas Novas',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Casas Novas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casas Novas',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1207,
    'postalCode': 7350
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1302,
    'postalCode': 5040
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casas Novas',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Casas Novas - Giela',
    'municipality': 1601,
    'postalCode': 4974
  },
  {
    'locality': 'Casas Novas - Giela',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casas Novas - Guilhadeses',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Casas Novas Parral',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casas Novas da Muda',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casas Novas de Mares',
    'municipality': 701,
    'postalCode': 7200
  },
  {
    'locality': 'Casas Novas do Bom Sítio',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Casas Próximas',
    'municipality': 3104,
    'postalCode': 9225
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casas Velhas',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Casas da Estrada',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Casas da Ribeira',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Casas da Ribeira',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Casas da Ribeira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Casas da Serra',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Casas da Zebreira',
    'municipality': 506,
    'postalCode': 6185
  },
  {
    'locality': 'Casas de Além',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Casas de Além',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Casas de Baixo',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Casas de Baixo',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Casas de Baixo',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Casas de Baixo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Casas de Baixo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casas de Cima',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Casas de Monforte',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Casas de Moreira',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Casas de Soeiro',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Casas do Concelho',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Casas do Rio',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Casaínho',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Casaínhos',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Cascabaço',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cascabulho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cascais',
    'municipality': 1105,
    'postalCode': 2750
  },
  {
    'locality': 'Cascais',
    'municipality': 1105,
    'postalCode': 2754
  },
  {
    'locality': 'Cascalha',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cascalhais',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Cascalhal',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cascalhal',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Cascalhar',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Cascalhedo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cascalheira',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Cascalheira',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cascalheira',
    'municipality': 1509,
    'postalCode': 7500
  },
  {
    'locality': 'Cascalheira de Baixo',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Cascalheira de Cima',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Cascalho',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Cascalho',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Cascalho',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Cascalho',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Cascalhos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cascalhos',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cascalhos',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Cascalhos',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Cascalhos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cascalhosa',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cascano',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Cascaria',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Cascaria',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Cascarneiro',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casco',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casconha',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Casconho',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cascão',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Casebres',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Casebres',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Casegas',
    'municipality': 503,
    'postalCode': 6225
  },
  {
    'locality': 'Caseirinhos',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Caseiros',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Caseiros',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Caseiros',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Caselho',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Caselho',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Caselho',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Caselho',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Caselho de Vilela',
    'municipality': 603,
    'postalCode': 3020
  },
  {
    'locality': 'Caselhos',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Caselhos',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Caselhos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Caselinha',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Casenho',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Caseta',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Casfreires',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Casinha',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Casinha',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Casinha',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Casinha',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Casinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casinha',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Casinha - Arcozelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Casinha Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casinha Nova da Eira',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casinha Nova do Brejo Verde',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casinha Nova do Carvalho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casinha da Corte',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casinhas',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Casinhas',
    'municipality': 1303,
    'postalCode': 4610
  },
  {
    'locality': 'Casinhas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casinhas',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Casinhas',
    'municipality': 3201,
    'postalCode': 9400
  },
  {
    'locality': 'Casinhas das Courelas',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Casinos',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Casito',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casmilo',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casoeiro',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Casos Novos',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Casoto',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Casoto',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Casoto',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Casqueira',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Casqueiro',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cassinheiras',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Cassurrães',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Casta',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Castainço',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Castalejo',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Castanhal',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Castanheira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Castanheira',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Castanheira',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Castanheira',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Castanheira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Castanheira',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Castanheira',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Castanheira',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Castanheira',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Castanheira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Castanheira',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Castanheira',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Castanheira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Castanheira',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Castanheira',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Castanheira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Castanheira',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Castanheira',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Castanheira',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Castanheira',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Castanheira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Castanheira',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Castanheira Cimeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castanheira Fundeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castanheira da Chã',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Castanheira da Serra',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Castanheira de Cima',
    'municipality': 503,
    'postalCode': 6200
  },
  {
    'locality': 'Castanheira de Pêra',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Castanheira do Campo',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Castanheira do Ribatejo',
    'municipality': 1114,
    'postalCode': 2600
  },
  {
    'locality': 'Castanheira do Ribatejo',
    'municipality': 1114,
    'postalCode': 2601
  },
  {
    'locality': 'Castanheira do Vouga',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Castanheiras',
    'municipality': 503,
    'postalCode': 6200
  },
  {
    'locality': 'Castanheirinho',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Castanheiro',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Castanheiro',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Castanheiro',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Castanheiro',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Castanheiro',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Castanheiro',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Castanheiro Grande',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castanheiro Norte',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Castanheiro Pequeno',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castanheiro Redondo',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Castanheiro Troncho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castanheiro do Monte',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Castanheiro do Ouro',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Castanheiro do Sul',
    'municipality': 1815,
    'postalCode': 5130
  },
  {
    'locality': 'Castanheiros',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Castanho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Castanhos',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Castaíde',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Casteda',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Castedo',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Castedo',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Castedo',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Casteição',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Castel',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Castelaria',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Casteleiro',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Castelejo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Castelejo',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Castelejo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Castelejo',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Castelhana',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Castelhana',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Castelhana',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Castelhanas',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Castelhanas',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Castelhanas',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Castelhanos',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Castelinhas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Castelinho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castelo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Castelo',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Castelo',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Castelo',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Castelo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Castelo',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Castelo',
    'municipality': 401,
    'postalCode': 5350
  },
  {
    'locality': 'Castelo',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castelo',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Castelo',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Castelo',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Castelo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Castelo',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Castelo',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Castelo',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Castelo',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Castelo',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Castelo',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Castelo',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Castelo',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Castelo',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Castelo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Castelo',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Castelo',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Castelo',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Castelo',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Castelo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Castelo',
    'municipality': 1807,
    'postalCode': 3620
  },
  {
    'locality': 'Castelo',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Castelo',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Castelo',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Castelo Bom',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Castelo Branco',
    'municipality': 408,
    'postalCode': 5200
  },
  {
    'locality': 'Castelo Branco',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Castelo Branco',
    'municipality': 502,
    'postalCode': 6004
  },
  {
    'locality': 'Castelo Branco',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Castelo Melhor',
    'municipality': 914,
    'postalCode': 5150
  },
  {
    'locality': 'Castelo Mendo',
    'municipality': 902,
    'postalCode': 6355
  },
  {
    'locality': 'Castelo Novo',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Castelo Novo',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Castelo Picão',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Castelo Rodrigo',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Castelo São Jordão',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Castelo Velho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Castelo Ventoso',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Castelo Viegas',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Castelo da Gracieira',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Castelo da Nave',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Castelo de Arez',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Castelo de Bode',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Castelo de Paiva',
    'municipality': 106,
    'postalCode': 4550
  },
  {
    'locality': 'Castelo de Penalva',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Castelo de Vide',
    'municipality': 1205,
    'postalCode': 7320
  },
  {
    'locality': 'Castelo do Neiva',
    'municipality': 1609,
    'postalCode': 4935
  },
  {
    'locality': 'Castelo do Vale de Armunha',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Castelo dos Mouros',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Castelos',
    'municipality': 705,
    'postalCode': 7000
  },
  {
    'locality': 'Castelos',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Castelos',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Castelão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Castelão',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Castelão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Castelãos',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Castelãs',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Castelões',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Castelões',
    'municipality': 308,
    'postalCode': 4800
  },
  {
    'locality': 'Castelões',
    'municipality': 312,
    'postalCode': 4770
  },
  {
    'locality': 'Castelões',
    'municipality': 1311,
    'postalCode': 4560
  },
  {
    'locality': 'Castelões',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Castinçal',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Castorigo',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Castrelos',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Castro',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Castro',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Castro',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Castro',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Castro Daire',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Castro Marim',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Castro Marim',
    'municipality': 804,
    'postalCode': 8954
  },
  {
    'locality': 'Castro Roupal',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Castro Verde',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'Castro Vicente',
    'municipality': 408,
    'postalCode': 5350
  },
  {
    'locality': 'Castro de Avelãs',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Castro de Cio',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casães',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Casão da Quinta',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Casével',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'Casével',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Casével',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Casões',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Catalão',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Catapereiro',
    'municipality': 1405,
    'postalCode': 2135
  },
  {
    'locality': 'Catarina Vaz',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Catarinões',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Catarredor',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Catarroeira',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Catarruchos',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Catassilva',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Catefica',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Catela',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Catelaria',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Catifarras',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Cativa',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cativelos',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Catives',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Catraia',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Catraia',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Catraia',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Catraia',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Catraia',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Catraia',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Catraia',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Catraia',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Catraia',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Catraia Cimeira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Catraia Farropo',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Catraia das Necessidades',
    'municipality': 617,
    'postalCode': 3350
  },
  {
    'locality': 'Catraia de Assequins',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Catraia de Castelo Novo',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Catraia de Mouronho',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Catraia de São Paio',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Catraia de São Romão',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Catraia do Outeiro',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Catraia do Sortelhão',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Catraia dos Poços',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Catraia dos Seixos Alvos',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Catribana',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Catrão',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Catujal',
    'municipality': 1107,
    'postalCode': 2680
  },
  {
    'locality': 'Catujal Velho',
    'municipality': 1107,
    'postalCode': 2680
  },
  {
    'locality': 'Catém',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cava',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cavaca',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Cavaco',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cavaco',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Cavaco',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cavada',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cavada',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cavada',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cavada',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cavada',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Cavada',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cavada',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cavada',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Cavada Nova',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cavada da Serra',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cavadas',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cavadas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cavadas',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Cavadas',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Cavadas',
    'municipality': 109,
    'postalCode': 4505
  },
  {
    'locality': 'Cavadas',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Cavadas',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cavadas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cavadas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cavadas',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Cavadas',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Cavadas',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cavadas',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Cavadas',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Cavadas',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cavadas',
    'municipality': 1510,
    'postalCode': 2840
  },
  {
    'locality': 'Cavadas',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cavadas',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Cavadas da Bouça',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Cavadas da Macieira',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Cavadas de Baixo',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cavadas de Cima',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cavadinha',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cavadinha',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cavadinha',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cavadinha',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Cavadinha',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cavadinhas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cavaditas',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cavadoude',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Cavaleira',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cavaleira',
    'municipality': 714,
    'postalCode': 7160
  },
  {
    'locality': 'Cavaleira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cavaleiro',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cavaleiro',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Cavaleiro',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Cavaleiro Alvo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cavaleiros',
    'municipality': 111,
    'postalCode': 3050
  },
  {
    'locality': 'Cavaleiros',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cavaleiros',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Cavaleiros',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Cavaleiros',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cavaleiros de Baixo',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cavaleiros de Cima',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cavalhão',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cavalinho',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cavalinho',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cavalinhos',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Cavalo',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cavalos',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cavalos',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cavalões',
    'municipality': 312,
    'postalCode': 4760
  },
  {
    'locality': 'Cavaquinhas',
    'municipality': 1510,
    'postalCode': 2840
  },
  {
    'locality': 'Caveira',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Caveira',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Caveira',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Caveira do Sul',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Caveiros',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Caveiros de Baixo',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Caveiros de Cima',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cavenca',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cavencas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cavernelhe',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Cavernelho',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Cavernães',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Cavez',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cavinha',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Cavião de Baixo',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cavião de Cima',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Caxaria',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Caxaria',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Caxaria',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Caxarias',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Caxias',
    'municipality': 1110,
    'postalCode': 2760
  },
  {
    'locality': 'Caxias',
    'municipality': 1110,
    'postalCode': 2761
  },
  {
    'locality': 'Caxieira',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Caxim',
    'municipality': 1011,
    'postalCode': 2450
  },
  {
    'locality': 'Caçapedro',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Caçarelhos',
    'municipality': 411,
    'postalCode': 5230
  },
  {
    'locality': 'Caçarilhe',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Caçus',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Caíde de Rei',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Caínhas',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Ceal',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Cebolada',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Cebolais de Baixo',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Cebolais de Cima',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Cebolal',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cebolar',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Cechada',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cedaínhos',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cederma',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Cedofeita',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cedofeita',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cedofeita',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cedovim',
    'municipality': 914,
    'postalCode': 5155
  },
  {
    'locality': 'Cedrim',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cedros',
    'municipality': 4701,
    'postalCode': 9900
  },
  {
    'locality': 'Cedros',
    'municipality': 4802,
    'postalCode': 9970
  },
  {
    'locality': 'Cedães',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cefra',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cegonhas',
    'municipality': 505,
    'postalCode': 6060
  },
  {
    'locality': 'Cegonheira',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Cegonheira',
    'municipality': 603,
    'postalCode': 3045
  },
  {
    'locality': 'Cegonheira',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Ceiceira',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Ceidão',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Ceira',
    'municipality': 603,
    'postalCode': 3030
  },
  {
    'locality': 'Ceira dos Vales',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Ceiroco',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Ceiroquinho',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cela',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cela',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Cela',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cela',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cela',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cela',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Cela',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cela',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Cela',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cela',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Cela',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Cela Arda',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cela Velha',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cela de Baixo',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Celada',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Celadinha',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Celadinha',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Celado',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Celas',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Celavisa',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Celeiro',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Celeiro',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Celeiro',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Celeirós',
    'municipality': 303,
    'postalCode': 4705
  },
  {
    'locality': 'Celeirós',
    'municipality': 303,
    'postalCode': 4709
  },
  {
    'locality': 'Celeirós',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Celeirós',
    'municipality': 1712,
    'postalCode': 5430
  },
  {
    'locality': 'Celeirô',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Celorica',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Celorico da Beira',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Celorico da Beira Gare',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Celorico de Basto',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Celão',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Celão',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Celões',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cem',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cem Soldos',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Cemitério',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cendufe',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cenoi',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Centas',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Centeeiro',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cential',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Centieira',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Centieira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Centieiras',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Centieiro',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Central da Sle',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cepeda',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cepelos',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cepos',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Cepos',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cepães',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Cepões',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Cepões',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cepões',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Cerca',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Cerca',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cerca',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Cerca',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Cerca',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Cerca',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerca',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cerca',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cerca',
    'municipality': 3104,
    'postalCode': 9200
  },
  {
    'locality': 'Cerca Corte Real',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Cerca Grande',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Cerca Nova',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cerca Nova',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerca Velha',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cerca Velha',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Cerca da Areia',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerca da Caganita',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Cerca da Casa',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Cerca da Castanheira',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Cerca da Eira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Estrada',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Estrada',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cerca da Fonte',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cerca da Fonte Velha',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Junqueira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Oliveira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Pedreira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Ponte Velha',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Portela',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Ribeira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca da Ribeira',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerca da Vinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerca da Vinha Velha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cerca da Zorra',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cerca das Areias',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerca das Casas Novas',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerca de Baixo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cerca do Canal',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Cerca do Lagar',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Cerca do Marcelino',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerca do Moinho de Vento',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Cerca do Monte Coelho',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cerca do Poço',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cerca do Poço Novo',
    'municipality': 206,
    'postalCode': 7780
  },
  {
    'locality': 'Cerca do Vale Pepino',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cerca dos Matos',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerca dos Pomares',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cercada',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cercadas',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Cercado',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cercado',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cercal',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Cercal',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cercal',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Cercal',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cercal',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Cercal',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Cercal',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Cercal',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Cercal de Cima',
    'municipality': 1502,
    'postalCode': 2890
  },
  {
    'locality': 'Cercal do Alentejo',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Cercas',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Cercas',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Cercosa',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Cercosa',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cerdal',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Cerdedo',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Cerdedo',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cerdedo',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Cerdeira',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Cerdeira',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Cerdeira',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cerdeira',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Cerdeira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cerdeira',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cerdeira',
    'municipality': 911,
    'postalCode': 6324
  },
  {
    'locality': 'Cerdeira',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Cerdeira',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Cerdeira de Jales',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Cerdeiral',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Cerdeiral',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cerdeiras',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cerdeiras',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cerdeiras',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cerdeiras',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cerdeiras',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cerdeirinha',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Cerdeirinhas',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cereijal',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cerejais',
    'municipality': 401,
    'postalCode': 5350
  },
  {
    'locality': 'Cerejal',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Cerejal',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cereje',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cerejeira',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Cerejeira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Cerejeira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cerejeira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cerejeira',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Cerejeiras',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cerejeiras',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Cerejeiras',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cerejeirinhas',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cerejo',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Cerimónia',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Cernache',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Cernache',
    'municipality': 603,
    'postalCode': 3044
  },
  {
    'locality': 'Cernache do Bonjardim',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cernada',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Cernadas',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cernadela',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cernadela',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Cernadelo',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cernados',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Ceroles',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cerqueda',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cerquedo',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Cerqueira',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cerqueiral',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Cerquinha',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Cerquinho',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cerquito',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cerra das Mesuras',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerrada Grande',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cerrado',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cerrado das Águas',
    'municipality': 1405,
    'postalCode': 2130
  },
  {
    'locality': 'Cerrado de Baixo',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Cerrado de Cima',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Cerrinho do Retiro',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Cerro',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cerro',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Cerro',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cerro Canelas',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Cerro Enho',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Cerro Gordo',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Cerro Grande',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cerro Grande',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Cerro Guincho',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Cerro Manuel Viegas',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Cerro Queimado',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Cerro Verde',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerro Vermelho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerro da Fontinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cerro da Maritenda',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro da Mesquita',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Cerro da Vinha de Baixo',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cerro da Vinha de Cima',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cerro das Casas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro das Colmeias',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerro das Covas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro das Misérias',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cerro das Pedras',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Cerro de Alportel',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Cerro de Apra',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro de Cabeça de Câmara',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro de Leiria',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cerro de Monchique',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Cerro de Santa Maria',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro de São Miguel',
    'municipality': 813,
    'postalCode': 8300
  },
  {
    'locality': 'Cerro de São Vicente',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cerro do Benfica',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Cerro do Botelho',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Cerro do Bruxo',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Cerro do Galo',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Cerro do Homem',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Cerro do Lobo',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Cerro do Mocho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro do Moinho',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Cerro do Negro',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Cerro do Ouro',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cerro do Outeiro',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Cerro do Passarinho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cerro do Poio Ruivo',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Cerro do Prior',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Cerro do Roque',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cerro dos Balurcos',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Certal',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cerva',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Cervajota',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cervos',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cervães',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cesaredas',
    'municipality': 1108,
    'postalCode': 2530
  },
  {
    'locality': 'Cesselo',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Cesta',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cestais',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cestas',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Cesto',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cestães',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cete',
    'municipality': 1310,
    'postalCode': 4580
  },
  {
    'locality': 'Cetos',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Cetos',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cevadeiras',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Cevadinhas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cevide',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Chabouco',
    'municipality': 803,
    'postalCode': 8670
  },
  {
    'locality': 'Chacim',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Chacim',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Chada',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Chada de Ouro',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Chafaris',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Chafariz',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Chafariz',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Chafariz do Vento',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Chafé',
    'municipality': 1609,
    'postalCode': 4935
  },
  {
    'locality': 'Chaim',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Chainho',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Chainça',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Chainça',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Chainça',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Chainça',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Chairos',
    'municipality': 407,
    'postalCode': 5385
  },
  {
    'locality': 'Chaiça',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Chamadouro',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Chamadouro',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Chamboeira',
    'municipality': 1107,
    'postalCode': 2670
  },
  {
    'locality': 'Chamiceira',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Chaminé',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Chaminé',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Chaminé',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Chaminé',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Chaminé',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Chaminé de Baixo',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Chaminé de Baixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Chaminé de Cima',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Chamiço',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Champana',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Chamusca',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Chamusca',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Chamusca',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Chamusca da Beira',
    'municipality': 611,
    'postalCode': 3405
  },
  {
    'locality': 'Chamuscas',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Chamusquinha',
    'municipality': 1203,
    'postalCode': 7480
  },
  {
    'locality': 'Chanca',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Chancela',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Chancelaria',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Chanceleiros',
    'municipality': 1710,
    'postalCode': 5085
  },
  {
    'locality': 'Chandeirão',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Chanla',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Chanoca',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Chança',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Chança',
    'municipality': 1201,
    'postalCode': 7440
  },
  {
    'locality': 'Chança Gare',
    'municipality': 1201,
    'postalCode': 7440
  },
  {
    'locality': 'Chaos',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Chapa',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chaparral',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Chaparral',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Chaparral',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Chaparralinho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Chaparrão',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Chapelarinho Novo',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Chapeleira',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Chapim',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Chapinha',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Chapinheira',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Chapinheira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Chaque',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Charais',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Charco',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Charco',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Charco Velho',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Charco da Cruz',
    'municipality': 4401,
    'postalCode': 9880
  },
  {
    'locality': 'Chardinheiro',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Charnais',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Charneca',
    'municipality': 106,
    'postalCode': 4550
  },
  {
    'locality': 'Charneca',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Charneca',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Charneca',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Charneca',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Charneca',
    'municipality': 810,
    'postalCode': 8700
  },
  {
    'locality': 'Charneca',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Charneca',
    'municipality': 1001,
    'postalCode': 2475
  },
  {
    'locality': 'Charneca',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Charneca',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Charneca',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Charneca',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Charneca',
    'municipality': 1105,
    'postalCode': 2750
  },
  {
    'locality': 'Charneca',
    'municipality': 1113,
    'postalCode': 2560
  },
  {
    'locality': 'Charneca',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Charneca',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Charneca',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Charneca da Cotovia',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Charneca da Meia Via',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Charneca da Nave dos Cordeiros',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Charneca da Pedra',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Charneca da Peralva',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Charneca de Alcorochel',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Charneca de Alvorge',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Charneca de Caparica',
    'municipality': 1503,
    'postalCode': 2820
  },
  {
    'locality': 'Charneca de Caparica',
    'municipality': 1503,
    'postalCode': 2821
  },
  {
    'locality': 'Charneca de Frade',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Charneca do Arnal',
    'municipality': 1009,
    'postalCode': 2405
  },
  {
    'locality': 'Charneca do Carvalhal',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Charneca do Cotifo',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Charneca do Maxial',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Charneca do Pessegueiro',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Charneca do Rio Seco',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Charneca do Vale',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Charneca dos Ameixiais',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Charneca dos Reis',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Charnecão de Cima',
    'municipality': 1404,
    'postalCode': 2090
  },
  {
    'locality': 'Charnequinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Charnequinha do Poço',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Charnequinhas',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Charquinho',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Charrisca',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Charrua',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Charruada',
    'municipality': 815,
    'postalCode': 8650
  },
  {
    'locality': 'Charruada',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Charruada',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Chave',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chaveca',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Chaveira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chaveiral',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Chaveirinha',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chaveiro',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Chaves',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Chavim',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chaviscas',
    'municipality': 211,
    'postalCode': 7645
  },
  {
    'locality': 'Chavião',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Chavães',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Chavão',
    'municipality': 302,
    'postalCode': 4775
  },
  {
    'locality': 'Chazinha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chaínça',
    'municipality': 1009,
    'postalCode': 2495
  },
  {
    'locality': 'Chaínça',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Chaíça Madriz',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cheda',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Chedas',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chedas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cheganças',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cheira',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Cheira',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Cheira',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Cheira',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cheira',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cheira do Vidual',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cheiras',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Cheiras',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Cheires',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Chelas',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cheleiros',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Chelhinho',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Chelinho',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Chelo',
    'municipality': 309,
    'postalCode': 4830
  },
  {
    'locality': 'Chelo',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Chelo',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Chelo',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Chelo',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Chelos',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Chelote',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Chemedião',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Chenda',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Chibeira',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Chicharo',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Chicharos',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Chieira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chilreira',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Chilrão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Chim',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chimpeles',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chinita',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Chiola',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Chipar de Baixo',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Chipar de Cima',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Chiqueda',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Chiqueiro',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Choca do Mar',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Choeirinho',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Choqueira',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Choqueiros',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Chorente',
    'municipality': 302,
    'postalCode': 4755
  },
  {
    'locality': 'Chorente',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chorial',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Chorilhas',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Choromela',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Chorosa',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Chosende',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chosendo',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Choupal',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Choupelo',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Choupica',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Choupo',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chousa',
    'municipality': 114,
    'postalCode': 3770
  },
  {
    'locality': 'Chousa',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Chousa',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Chousa',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Chousal',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Chousalinho',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chousas',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chousas',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Chousas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chousas',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Chouso',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Chouso',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Chousos',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Chousos',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Choutaria',
    'municipality': 1109,
    'postalCode': 2665
  },
  {
    'locality': 'Chouto',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Chouzelas e Araújos',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Chouzinha',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Choça',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Choça',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Choça Queimada',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Choça dos Vales',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Choças',
    'municipality': 210,
    'postalCode': 7885
  },
  {
    'locality': 'Choças',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Choças (Aboim)',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Churrascão',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Churreira',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Chã',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chã',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Chã',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Chã',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Chã',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Chã',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Chã',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Chã',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Chã',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Chã',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Chã',
    'municipality': 1112,
    'postalCode': 2590
  },
  {
    'locality': 'Chã',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Chã',
    'municipality': 1421,
    'postalCode': 2495
  },
  {
    'locality': 'Chã',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Chã',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Chã',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chã',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Chã',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Chã Grande',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Chã Velho',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chã da Casinha',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Chã da Ilha',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Chã da Laranjeira',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Chã da Porta',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Chã de Amiar',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Chã de Baixo',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Chã de Baixo',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Chã de Cima',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Chã de Cima',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Chã de Cima da Lomba do Cavaleiro',
    'municipality': 4204,
    'postalCode': 9650
  },
  {
    'locality': 'Chã de João Tomé',
    'municipality': 4101,
    'postalCode': 9580
  },
  {
    'locality': 'Chã do Freixo',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Chã-Ermida',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Chão',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Chão',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chão',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chão',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Chão',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Chão Bica',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': "Chão D'Ave",
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chão Direito',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Chão Duro',
    'municipality': 1506,
    'postalCode': 2860
  },
  {
    'locality': 'Chão Duro',
    'municipality': 1506,
    'postalCode': 2864
  },
  {
    'locality': 'Chão Frio',
    'municipality': 701,
    'postalCode': 7250
  },
  {
    'locality': 'Chão Frio',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Chão Fundeiro',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Chão Grande',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Chão Grande',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Chão Grande',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Chão Lopes',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chão Miúdo',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Chão Monte',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Chão Pardo',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Chão Pedra',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Chão Pião',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chão Redondo',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Chão Rio',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Chão Sobral',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Chão da Amoreira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chão da Cancela',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Chão da Cancela',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Chão da Cancela',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Chão da Carreira',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Chão da Carvalha',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chão da Cavada',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Chão da Cruz',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Chão da Feira',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Chão da Forca',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Chão da Manobra',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Chão da Moita',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Chão da Ordem',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Chão da Parada',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Chão da Rede',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chão da Ribeira',
    'municipality': 3106,
    'postalCode': 9270
  },
  {
    'locality': 'Chão da Serra',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Chão da Silva',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Chão da Silva',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Chão da Telha',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Chão da Toca',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Chão da Velha',
    'municipality': 1212,
    'postalCode': 6050
  },
  {
    'locality': 'Chão da Vinha',
    'municipality': 1114,
    'postalCode': 2615
  },
  {
    'locality': 'Chão da Vã',
    'municipality': 502,
    'postalCode': 6000
  },
  {
    'locality': 'Chão das Eiras',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Chão das Eiras',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Chão das Machadas',
    'municipality': 4203,
    'postalCode': 9555
  },
  {
    'locality': 'Chão das Macieiras',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Chão das Maias',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Chão das Maias',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Chão das Pias',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Chão das Servas',
    'municipality': 511,
    'postalCode': 6030
  },
  {
    'locality': 'Chão de Além',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Chão de Além',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Chão de Amandos',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Chão de Bezerro',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Chão de Cevada',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Chão de Codes',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chão de Couce',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Chão de Espinho',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chão de Estrada',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Chão de Gaia',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Chão de Lamas',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Chão de Lopes',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chão de Lucas',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Chão de Maçãs',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Chão de Maçãs',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Chão de Maçãs Gare',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Chão de Mil',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Chão de Ourique',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Chão de Pereiras',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chão de Pinheiro',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Chão de Vento',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Chão de Viso',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chão do Bando',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chão do Carvalho',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Chão do Cedro Gordo',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Chão do Couto',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Chão do Galego',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Chão do Galego',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Chão do Garcia',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Chão do Lopes Pequeno',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Chão do Montadinho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Chão do Olmo',
    'municipality': 1812,
    'postalCode': 3630
  },
  {
    'locality': 'Chão do Rego',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chão do Ribeiro',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chão do Rio',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Chão do Sapo',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Chão do Ulmeiro',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Chão do Vintém',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Chão dos Barreiros',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Chão dos Louros',
    'municipality': 3110,
    'postalCode': 9240
  },
  {
    'locality': 'Chão dos Santos',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Chão-Dá-Vinho',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chão-Longo',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Chãos',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chãos',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Chãos',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Chãos',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Chãos',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Chãos',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Chãos',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Chãos',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Chãos',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Chãos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Chãos',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Chãos',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Chãos',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Chãos',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Chãos',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Chãos',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Chãos',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Chãos',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Chãos',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Chãos',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Chãos',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Chãos',
    'municipality': 1823,
    'postalCode': 3510
  },
  {
    'locality': 'Chãos de Baixo',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chãos de Cima',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chãos de Paiva',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Chãozinhos',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chãs',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Chãs',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Chãs',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Chãs',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Chãs',
    'municipality': 914,
    'postalCode': 5150
  },
  {
    'locality': 'Chãs',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Chãs',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Chãs',
    'municipality': 1009,
    'postalCode': 2419
  },
  {
    'locality': 'Chãs',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Chãs',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Chãs Grandes',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Chãs Pequenas',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Chãs de Baixo',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Chãs de Cima',
    'municipality': 610,
    'postalCode': 3140
  },
  {
    'locality': 'Chãs de Tavares',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Chãs de Égua',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Chãzinha',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Chões',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Chões',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Chões',
    'municipality': 1402,
    'postalCode': 2380
  },
  {
    'locality': 'Ciborro',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Cicouro',
    'municipality': 406,
    'postalCode': 5210
  },
  {
    'locality': 'Cid',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cidade',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Cidade',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cidade Sol',
    'municipality': 1504,
    'postalCode': 2835
  },
  {
    'locality': 'Cidadelha de Aguiar',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Cidadelha de Jales',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Cidadelhe',
    'municipality': 910,
    'postalCode': 6400
  },
  {
    'locality': 'Cidadelhe',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cidadelhe',
    'municipality': 1704,
    'postalCode': 5040
  },
  {
    'locality': 'Cidadelhe',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cide',
    'municipality': 912,
    'postalCode': 6285
  },
  {
    'locality': 'Cidral',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Cidral',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Cidral',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Cidral',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cidreiro',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Cidões',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Cigana',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Cigarral',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Cilha Centeno',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cilha Nova',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cilha Pascoal',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cilha Queimada',
    'municipality': 1502,
    'postalCode': 2890
  },
  {
    'locality': 'Cilha Velha',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cilha de Baixo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cilha do Areeiro',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cilha do Centeio',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cima',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Cima',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cima',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cima de Baixo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cima de Riba',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cima de Vila',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cimadas Cimeiras',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Cimadas Fundeiras',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Cimalha',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Cimalhadas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cimalhas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cimbres',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': "Cimo D'Aldeia",
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cimo Fontão',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cimo Lugar',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cimo Sobral',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Cimo Vila',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cimo Vila',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Cimo da Aldeia',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cimo da Aldeia',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cimo da Costeira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cimo da Inha',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cimo da Ladeira Velha',
    'municipality': 4501,
    'postalCode': 9850
  },
  {
    'locality': 'Cimo da Lomba',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cimo da Ribeira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cimo da Ribeira',
    'municipality': 611,
    'postalCode': 3400
  },
  {
    'locality': 'Cimo da Ribeira do Braz',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1419,
    'postalCode': 2350
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Cimo da Vila',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Cimo de Aldeia',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Cimo de Aldeia',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Cimo de Aldeia',
    'municipality': 1818,
    'postalCode': 3640
  },
  {
    'locality': 'Cimo de Alvem',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cimo de Resende',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cimo de Valongo',
    'municipality': 510,
    'postalCode': 6110
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 304,
    'postalCode': 4860
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 306,
    'postalCode': 4740
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 407,
    'postalCode': 5385
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cimo de Vila',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Cimo de Vila Castanheira',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Cimo do Burgo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cimo do Bustelo',
    'municipality': 1822,
    'postalCode': 3650
  },
  {
    'locality': 'Cimo do Lugar',
    'municipality': 1701,
    'postalCode': 5070
  },
  {
    'locality': 'Cimo do Lugar',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cimo do Monte',
    'municipality': 1214,
    'postalCode': 7300
  },
  {
    'locality': 'Cimo do Povo',
    'municipality': 409,
    'postalCode': 5160
  },
  {
    'locality': 'Cimo do Povo',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Cimo do Vale',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cimo do Vale',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Cimo dos Ribeiros',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Cincadilha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cincadilha Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cinco Fontes',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cinco Ribeiras',
    'municipality': 4301,
    'postalCode': 9700
  },
  {
    'locality': 'Cinco Rodas',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cinco Vilas',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Cinfães',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cintados',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cintrão',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Cinzeiro da Torre',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Cipreste',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Cipreste',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Cisterna',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Cisterna',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cisão',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Cividade',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Cividade',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cividade',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Claras',
    'municipality': 1015,
    'postalCode': 3105
  },
  {
    'locality': 'Clarines',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Clavel',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Coalhos',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Cobanco',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Cobelas',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Cobertinha',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Cobre',
    'municipality': 1105,
    'postalCode': 2750
  },
  {
    'locality': 'Cobro',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Cocanha',
    'municipality': 1703,
    'postalCode': 5400
  },
  {
    'locality': 'Cochadas',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cocharro',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Coche',
    'municipality': 102,
    'postalCode': 3850
  },
  {
    'locality': 'Cocieiro',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Codal',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Codaçal',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Codeceda',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Codeceira',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Codeceira',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Codes',
    'municipality': 1417,
    'postalCode': 2230
  },
  {
    'locality': 'Codessais',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Codesseda',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Codesseira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Codesseiro',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Codessos',
    'municipality': 1309,
    'postalCode': 4590
  },
  {
    'locality': 'Codessosa',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Codessoso',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Codeçais',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Codeçais',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Codeçais',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Codeçais',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Codeçal',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Codeçal',
    'municipality': 1109,
    'postalCode': 2640
  },
  {
    'locality': 'Codeçal',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Codeçal',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Codeçal',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Codeçoso',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Codeçoso',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Codiceira',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Codiceira',
    'municipality': 1009,
    'postalCode': 2400
  },
  {
    'locality': 'Codiceira',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Codiceirinha',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Codorneiro',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Codornelas',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Coelha',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Coelhal',
    'municipality': 612,
    'postalCode': 3320
  },
  {
    'locality': 'Coelhal',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Coelhal',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Coelheira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Coelheira',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Coelheiras',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Coelheiros',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Coelheiros',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Coelheiros',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Coelhos',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Coelhos',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Coelhosa',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Coelhosa',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Coelhosa',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Coelhoso',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Coelhoso',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Coelhoso',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Coentral Grande',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Coentral das Barreiras',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Coentral do Fojo',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Coentros',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Coenços Cimeiros',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cofaros',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cogominho',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cogula',
    'municipality': 913,
    'postalCode': 6420
  },
  {
    'locality': 'Coidel',
    'municipality': 614,
    'postalCode': 3230
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3000
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3030
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3020
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3045
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3025
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3004
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3049
  },
  {
    'locality': 'Coimbra',
    'municipality': 603,
    'postalCode': 3034
  },
  {
    'locality': 'Coimbro',
    'municipality': 1702,
    'postalCode': 5460
  },
  {
    'locality': 'Coimbrã',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Coimbrão',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Coimbrões',
    'municipality': 1823,
    'postalCode': 3500
  },
  {
    'locality': 'Coina',
    'municipality': 1504,
    'postalCode': 2830
  },
  {
    'locality': 'Coina',
    'municipality': 1504,
    'postalCode': 2834
  },
  {
    'locality': 'Coiro da Burra',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Coitada de Cima',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Coitadinha',
    'municipality': 1415,
    'postalCode': 2120
  },
  {
    'locality': 'Coito',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Coito',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Coito',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Coito',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Coito',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Coito',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Coito',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Coito',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Coitos',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Coiço',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Coja',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Coja',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Colada Muro',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Colares',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Colaria',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Coleja',
    'municipality': 403,
    'postalCode': 5140
  },
  {
    'locality': 'Coles',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Colgadeiros',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Colhareira',
    'municipality': 1210,
    'postalCode': 7330
  },
  {
    'locality': 'Colheita',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Colherinhas',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Colina do Pinhal',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Colinas Verdes',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Colipo',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Colmeais',
    'municipality': 401,
    'postalCode': 5350
  },
  {
    'locality': 'Colmeal',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Colmeal',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Colmeal',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Colmeal',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Colmeal',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Colmeal',
    'municipality': 1202,
    'postalCode': 7340
  },
  {
    'locality': 'Colmeal',
    'municipality': 1401,
    'postalCode': 2230
  },
  {
    'locality': 'Colmeal da Torre',
    'municipality': 501,
    'postalCode': 6250
  },
  {
    'locality': 'Colmeia',
    'municipality': 1513,
    'postalCode': 7520
  },
  {
    'locality': 'Colmeias',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Colmeiros',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Colmeosa',
    'municipality': 1814,
    'postalCode': 3440
  },
  {
    'locality': 'Colmieiros',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Colo de Pito',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Colonos de Baixo',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Colonos do Reguengo',
    'municipality': 1713,
    'postalCode': 5450
  },
  {
    'locality': 'Colos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Colos',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Colos',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Colos',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Columbeira',
    'municipality': 1005,
    'postalCode': 2540
  },
  {
    'locality': 'Colégio',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Colégio',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Colónia Agrícola',
    'municipality': 1009,
    'postalCode': 2415
  },
  {
    'locality': 'Colónia Agrícola Martin Rei',
    'municipality': 911,
    'postalCode': 6320
  },
  {
    'locality': 'Colónia de Arnes',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Colónias',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Com-Adro',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Comareira',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Combe',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Combro',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Comeira',
    'municipality': 1010,
    'postalCode': 2430
  },
  {
    'locality': 'Comeiras de Baixo',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Comeiras de Cima',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Comenda',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Comenda',
    'municipality': 1209,
    'postalCode': 6040
  },
  {
    'locality': 'Comenda',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Comenda',
    'municipality': 1418,
    'postalCode': 2305
  },
  {
    'locality': 'Comenda',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Comenda',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Comenda',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Comenda',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Comenda',
    'municipality': 1816,
    'postalCode': 3660
  },
  {
    'locality': 'Como É',
    'municipality': 1511,
    'postalCode': 2975
  },
  {
    'locality': 'Companheiro',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Companhia Mineira',
    'municipality': 1710,
    'postalCode': 5060
  },
  {
    'locality': 'Companhia de Baixo',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Companhia de Cima',
    'municipality': 4601,
    'postalCode': 9930
  },
  {
    'locality': 'Complexo Desportivo',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Comporta',
    'municipality': 1501,
    'postalCode': 7580
  },
  {
    'locality': 'Comporta',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Compra',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Compra',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Comunhas',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Concavada',
    'municipality': 1401,
    'postalCode': 2205
  },
  {
    'locality': 'Conceição',
    'municipality': 212,
    'postalCode': 7670
  },
  {
    'locality': 'Conceição',
    'municipality': 805,
    'postalCode': 8005
  },
  {
    'locality': 'Conceição',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Conceição',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Conceição da Abóboda',
    'municipality': 1105,
    'postalCode': 2785
  },
  {
    'locality': 'Concela',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Concelho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Concelho',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Concelho',
    'municipality': 1709,
    'postalCode': 4870
  },
  {
    'locality': 'Concelhos',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Concelhos',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Concha',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Concha da Casa Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Concha da Vinha',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Concha do Ruivo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Conchada',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Conchas do Pomar',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Concieiro',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Condados',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Condados de Buarcos',
    'municipality': 605,
    'postalCode': 3080
  },
  {
    'locality': 'Conde',
    'municipality': 308,
    'postalCode': 4815
  },
  {
    'locality': 'Condeixa-A-Nova',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Condeixa-A-Nova',
    'municipality': 604,
    'postalCode': 3154
  },
  {
    'locality': 'Condeixa-a-Velha',
    'municipality': 604,
    'postalCode': 3150
  },
  {
    'locality': 'Condutos',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Confraria',
    'municipality': 1009,
    'postalCode': 2420
  },
  {
    'locality': 'Confrarias',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Confulcos',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Congeitaria',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Congostas',
    'municipality': 112,
    'postalCode': 3870
  },
  {
    'locality': 'Conguedo',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Conhais',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Conhal',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Conhal',
    'municipality': 1013,
    'postalCode': 3270
  },
  {
    'locality': 'Conheira',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Conheiras',
    'municipality': 1401,
    'postalCode': 2200
  },
  {
    'locality': 'Conhos',
    'municipality': 1705,
    'postalCode': 4880
  },
  {
    'locality': 'Conlela',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Conlelas',
    'municipality': 402,
    'postalCode': 5300
  },
  {
    'locality': 'Conqueiro',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Conqueiro dos Mendes',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Conqueiros',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Conqueiros',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Conqueiros',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Conqueiros',
    'municipality': 1009,
    'postalCode': 2425
  },
  {
    'locality': 'Conraria',
    'municipality': 603,
    'postalCode': 3040
  },
  {
    'locality': 'Conseguinte',
    'municipality': 808,
    'postalCode': 8125
  },
  {
    'locality': 'Conseguinte',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Conselho',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Consolação',
    'municipality': 1014,
    'postalCode': 2525
  },
  {
    'locality': 'Constance',
    'municipality': 1307,
    'postalCode': 4635
  },
  {
    'locality': 'Constantim',
    'municipality': 406,
    'postalCode': 5210
  },
  {
    'locality': 'Constantim',
    'municipality': 1714,
    'postalCode': 5000
  },
  {
    'locality': 'Constantina',
    'municipality': 1003,
    'postalCode': 3240
  },
  {
    'locality': 'Constância',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Contador',
    'municipality': 1711,
    'postalCode': 5030
  },
  {
    'locality': 'Contemalinho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Contenda',
    'municipality': 1204,
    'postalCode': 7370
  },
  {
    'locality': 'Contenda',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Contenda Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Contença',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Contenças',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Contenças Gare',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Contenças de Baixo',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Contenças de Cima',
    'municipality': 1806,
    'postalCode': 3530
  },
  {
    'locality': 'Contige',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Contim',
    'municipality': 412,
    'postalCode': 5320
  },
  {
    'locality': 'Contim',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Contim',
    'municipality': 1801,
    'postalCode': 5110
  },
  {
    'locality': 'Continas',
    'municipality': 906,
    'postalCode': 6290
  },
  {
    'locality': 'Contins',
    'municipality': 407,
    'postalCode': 5370
  },
  {
    'locality': 'Contorno',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Contraste',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Contumil',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Convento',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Convento',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Convento',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Convento',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Convento da Ourada',
    'municipality': 711,
    'postalCode': 7200
  },
  {
    'locality': 'Convento da Serra',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Convento de Ferreira',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Convento de Santa Maria de Aguiar',
    'municipality': 904,
    'postalCode': 6440
  },
  {
    'locality': 'Convento de Santo António',
    'municipality': 1407,
    'postalCode': 2140
  },
  {
    'locality': 'Copeiro',
    'municipality': 605,
    'postalCode': 3090
  },
  {
    'locality': 'Coqueira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cor da Cabra',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Corcha',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corchas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corcitos',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cordeiras',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Cordeiras',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cordeiro',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Cordeiros',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Cordeiros',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Corderia',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cordinhã',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cordova',
    'municipality': 1813,
    'postalCode': 4660
  },
  {
    'locality': 'Cordovelha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Coreiro',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Corelo',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Corga',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Corga',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Corga',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Corga',
    'municipality': 1004,
    'postalCode': 2440
  },
  {
    'locality': 'Corga',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Corga',
    'municipality': 1602,
    'postalCode': 4910
  },
  {
    'locality': 'Corga',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Corga',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Corga',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Corga',
    'municipality': 1811,
    'postalCode': 3550
  },
  {
    'locality': 'Corga Alta',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Corga Cega',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Corga Sabrosa',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Corga Travessa',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Corga da Figueira',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Corga da Figueira',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Corga da Leiva',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Corga da Louça',
    'municipality': 1007,
    'postalCode': 3280
  },
  {
    'locality': 'Corga da Mourata',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Corga da Serra',
    'municipality': 101,
    'postalCode': 3750
  },
  {
    'locality': 'Corga da Vaca',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Corga do Moinho',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Corga do Moinho',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Corga Água Fria',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Corgas',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Corgas',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Corgas',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Corgas',
    'municipality': 601,
    'postalCode': 3305
  },
  {
    'locality': 'Corgas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corgas',
    'municipality': 912,
    'postalCode': 6270
  },
  {
    'locality': 'Corgas',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Corgas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Corgas',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Corgo',
    'municipality': 103,
    'postalCode': 3780
  },
  {
    'locality': 'Corgo',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Corgo',
    'municipality': 305,
    'postalCode': 4890
  },
  {
    'locality': 'Corgo',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Corgo',
    'municipality': 616,
    'postalCode': 3420
  },
  {
    'locality': 'Corgo',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Corgo',
    'municipality': 1305,
    'postalCode': 4620
  },
  {
    'locality': 'Corgo',
    'municipality': 1421,
    'postalCode': 2490
  },
  {
    'locality': 'Corgo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Corgo',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Corgo Côvo',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Corgo Encheiro',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Corgo da Casa',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Corgo da Zorra',
    'municipality': 808,
    'postalCode': 8135
  },
  {
    'locality': 'Corgo de São Domingos',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Corgo de Água',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Corgo do Seixo de Baixo',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Corgo do Seixo de Cima',
    'municipality': 118,
    'postalCode': 3840
  },
  {
    'locality': 'Corgos',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Corgos',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Corgos',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Corgos de Santa Luzia',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Coriscada',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Coriscadas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Corisco',
    'municipality': 1008,
    'postalCode': 3260
  },
  {
    'locality': 'Cormaceiras',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cornaga',
    'municipality': 607,
    'postalCode': 3200
  },
  {
    'locality': 'Cornalheira',
    'municipality': 909,
    'postalCode': 6430
  },
  {
    'locality': 'Cornedo',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cornes',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Coroados',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Corotelo',
    'municipality': 812,
    'postalCode': 8150
  },
  {
    'locality': 'Corredora do Mestre',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Corredoras',
    'municipality': 806,
    'postalCode': 8400
  },
  {
    'locality': 'Corredoura',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Corredoura',
    'municipality': 119,
    'postalCode': 3730
  },
  {
    'locality': 'Corredoura',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corredoura',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Corredoura',
    'municipality': 313,
    'postalCode': 4730
  },
  {
    'locality': 'Corredoura',
    'municipality': 615,
    'postalCode': 3130
  },
  {
    'locality': 'Corredoura',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Corredoura',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Corredoura',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Corredoura',
    'municipality': 1416,
    'postalCode': 2000
  },
  {
    'locality': 'Corredoura',
    'municipality': 1511,
    'postalCode': 2970
  },
  {
    'locality': 'Corredoura',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Corredoura',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Corredoura',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Corredoura',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Corredoura',
    'municipality': 1609,
    'postalCode': 4925
  },
  {
    'locality': 'Corredoura',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Corredoura',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Corredoura',
    'municipality': 1805,
    'postalCode': 5100
  },
  {
    'locality': 'Corredoura',
    'municipality': 1810,
    'postalCode': 3680
  },
  {
    'locality': 'Corredoura',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Corredoura',
    'municipality': 1821,
    'postalCode': 3460
  },
  {
    'locality': 'Corredoura',
    'municipality': 1823,
    'postalCode': 3505
  },
  {
    'locality': 'Corredouras',
    'municipality': 1102,
    'postalCode': 2630
  },
  {
    'locality': 'Corredouras',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Corredouras',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Correeira',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Corregato',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Corrego do Vale',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corregos',
    'municipality': 1509,
    'postalCode': 7555
  },
  {
    'locality': 'Correia',
    'municipality': 109,
    'postalCode': 4520
  },
  {
    'locality': 'Correias',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Correlho',
    'municipality': 1606,
    'postalCode': 4980
  },
  {
    'locality': 'Correlhã',
    'municipality': 1607,
    'postalCode': 4990
  },
  {
    'locality': 'Correlo',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Correntinhas',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Corrida',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Corriça',
    'municipality': 407,
    'postalCode': 5385
  },
  {
    'locality': 'Corroios',
    'municipality': 1510,
    'postalCode': 2855
  },
  {
    'locality': 'Corrosquentes',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corroupêlo',
    'municipality': 1301,
    'postalCode': 4615
  },
  {
    'locality': 'Corrupito',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corsino',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corsães',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Corta Porcas',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corta Velha',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corta Ventos',
    'municipality': 811,
    'postalCode': 8500
  },
  {
    'locality': 'Cortado',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Corte',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corte',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Corte',
    'municipality': 1821,
    'postalCode': 3475
  },
  {
    'locality': 'Corte Amarelinho',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Corte Amarelo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte António Martins',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Corte António Martins',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Corte Azinha',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Azinheira',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Brique',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Corte Cabo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Cadela',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Corte Carrilho',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Chã',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Cibrão',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corte Cobres',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Douro',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corte Esteval',
    'municipality': 1507,
    'postalCode': 2870
  },
  {
    'locality': 'Corte Ferreiro',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Fidalgo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Figueira Mendonça',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Formosa',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Gafo de Baixo',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Gafo de Cima',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Gago',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Gago',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Corte Galega',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Corte Garcia',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corte Grande',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corte Grande',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corte João Cinza',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte João Marques',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corte João Velho',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Corte Longa',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corte Malhão',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Corte Mourão',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Corte Narizes de Baixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Neto',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corte Nova',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Corte Nova',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Corte Pequena',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Pequena',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Corte Pequena',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corte Peral',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Corte Perdida',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Corte Pereiro',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Corte Pereiro',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Corte Pereiros',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Peso',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Corte Pinheiro',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte Pinheiro',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Corte Pão e Água',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Ripais',
    'municipality': 205,
    'postalCode': 7800
  },
  {
    'locality': 'Corte Serrano',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Corte Sevilha',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Corte Sines',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte Velha',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Corte Velha',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Corte Velho',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Velho Nova',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Velho de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte Vicente Anes',
    'municipality': 201,
    'postalCode': 7600
  },
  {
    'locality': 'Corte Vidreiros',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Corte Zorrinho',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte da Seda',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Corte da Velha',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte das Donas',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Corte de Baixo',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte de Baixo',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Corte de Bucho',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Corte de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte de Elvas',
    'municipality': 202,
    'postalCode': 7700
  },
  {
    'locality': 'Corte de Noivas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Corte de Ordem',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Corte de São Simão',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Corte do Bispo',
    'municipality': 807,
    'postalCode': 8600
  },
  {
    'locality': 'Corte do Enchaira',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Corte do Livramento',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corte do Pinto',
    'municipality': 209,
    'postalCode': 7750
  },
  {
    'locality': 'Corte do Tabelião',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Corte do Vale',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Corte-Besteiros',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cortecega',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cortegada',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Cortegada',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cortegada',
    'municipality': 1820,
    'postalCode': 3610
  },
  {
    'locality': 'Cortegana',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Cortegaça',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cortegaça',
    'municipality': 115,
    'postalCode': 3885
  },
  {
    'locality': 'Cortegaça',
    'municipality': 311,
    'postalCode': 4850
  },
  {
    'locality': 'Cortegaça',
    'municipality': 1111,
    'postalCode': 2715
  },
  {
    'locality': 'Cortegaça',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cortegaça',
    'municipality': 1808,
    'postalCode': 3450
  },
  {
    'locality': 'Cortelha',
    'municipality': 804,
    'postalCode': 8950
  },
  {
    'locality': 'Cortelha',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cortelhas',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cortelhas',
    'municipality': 814,
    'postalCode': 8800
  },
  {
    'locality': 'Cortelhas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cortelho da Mariana',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cortelhões',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cortelo',
    'municipality': 1416,
    'postalCode': 2005
  },
  {
    'locality': 'Cortem',
    'municipality': 1006,
    'postalCode': 2500
  },
  {
    'locality': 'Corterredor',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cortes',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cortes',
    'municipality': 509,
    'postalCode': 6100
  },
  {
    'locality': 'Cortes',
    'municipality': 606,
    'postalCode': 3330
  },
  {
    'locality': 'Cortes',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Cortes',
    'municipality': 813,
    'postalCode': 8375
  },
  {
    'locality': 'Cortes',
    'municipality': 1009,
    'postalCode': 2410
  },
  {
    'locality': 'Cortes',
    'municipality': 1418,
    'postalCode': 2300
  },
  {
    'locality': 'Cortes',
    'municipality': 1421,
    'postalCode': 2435
  },
  {
    'locality': 'Cortes',
    'municipality': 1505,
    'postalCode': 7570
  },
  {
    'locality': 'Cortes',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cortes',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cortes',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Cortes',
    'municipality': 1819,
    'postalCode': 5120
  },
  {
    'locality': 'Cortes Pereiras',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Cortes Pereiras',
    'municipality': 802,
    'postalCode': 8970
  },
  {
    'locality': 'Cortes Pereiras de Baixo',
    'municipality': 211,
    'postalCode': 7665
  },
  {
    'locality': 'Cortes da Veiga',
    'municipality': 914,
    'postalCode': 5150
  },
  {
    'locality': 'Cortes da Venda',
    'municipality': 1501,
    'postalCode': 7595
  },
  {
    'locality': 'Cortes de Baixo',
    'municipality': 214,
    'postalCode': 7960
  },
  {
    'locality': 'Cortes de Baixo',
    'municipality': 503,
    'postalCode': 6215
  },
  {
    'locality': 'Cortes do Meio',
    'municipality': 503,
    'postalCode': 6215
  },
  {
    'locality': 'Cortesões',
    'municipality': 801,
    'postalCode': 8200
  },
  {
    'locality': 'Cortez',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cortez',
    'municipality': 809,
    'postalCode': 8550
  },
  {
    'locality': 'Cortezia',
    'municipality': 1111,
    'postalCode': 2705
  },
  {
    'locality': 'Cortezões',
    'municipality': 813,
    'postalCode': 8365
  },
  {
    'locality': 'Corticeira Fidalgo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Corticeiro de Baixo',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Corticeiro de Cima',
    'municipality': 602,
    'postalCode': 3060
  },
  {
    'locality': 'Cortinas',
    'municipality': 1708,
    'postalCode': 5050
  },
  {
    'locality': 'Cortinas de Baixo',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cortinas de Cima',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cortinas do Meio',
    'municipality': 1509,
    'postalCode': 7540
  },
  {
    'locality': 'Cortinha',
    'municipality': 117,
    'postalCode': 3740
  },
  {
    'locality': 'Cortinha',
    'municipality': 211,
    'postalCode': 7630
  },
  {
    'locality': 'Cortinha',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cortinha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cortinha Velha',
    'municipality': 1604,
    'postalCode': 4950
  },
  {
    'locality': 'Cortinhal',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cortinhal',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cortinhas',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Cortinhas',
    'municipality': 113,
    'postalCode': 3700
  },
  {
    'locality': 'Cortinhas',
    'municipality': 113,
    'postalCode': 3720
  },
  {
    'locality': 'Cortinhas',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Cortinhas',
    'municipality': 310,
    'postalCode': 4840
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1016,
    'postalCode': 2480
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1601,
    'postalCode': 4970
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1603,
    'postalCode': 4960
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1608,
    'postalCode': 4930
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1610,
    'postalCode': 4920
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1707,
    'postalCode': 5090
  },
  {
    'locality': 'Cortinhas',
    'municipality': 1803,
    'postalCode': 3600
  },
  {
    'locality': 'Cortinho',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Cortinhola',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cortiça',
    'municipality': 601,
    'postalCode': 3300
  },
  {
    'locality': 'Cortiça',
    'municipality': 613,
    'postalCode': 3360
  },
  {
    'locality': 'Cortiça',
    'municipality': 1002,
    'postalCode': 3250
  },
  {
    'locality': 'Cortiçada',
    'municipality': 504,
    'postalCode': 6230
  },
  {
    'locality': 'Cortiçada',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Cortiçada',
    'municipality': 1001,
    'postalCode': 2460
  },
  {
    'locality': 'Cortiçada',
    'municipality': 1414,
    'postalCode': 2040
  },
  {
    'locality': 'Cortiçada',
    'municipality': 1821,
    'postalCode': 3465
  },
  {
    'locality': 'Cortiçada da Erra',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Cortiçadas',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Cortiçadas de Lavre',
    'municipality': 706,
    'postalCode': 7050
  },
  {
    'locality': 'Cortiçal',
    'municipality': 1416,
    'postalCode': 2025
  },
  {
    'locality': 'Cortiço',
    'municipality': 1706,
    'postalCode': 5470
  },
  {
    'locality': 'Cortiços',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Cortiçóis',
    'municipality': 1403,
    'postalCode': 2080
  },
  {
    'locality': 'Cortiçô',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Cortiçô da Serra',
    'municipality': 903,
    'postalCode': 6360
  },
  {
    'locality': 'Coruchas',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Coruche',
    'municipality': 901,
    'postalCode': 3570
  },
  {
    'locality': 'Coruche',
    'municipality': 1409,
    'postalCode': 2100
  },
  {
    'locality': 'Coruja',
    'municipality': 808,
    'postalCode': 8100
  },
  {
    'locality': 'Coruja',
    'municipality': 1408,
    'postalCode': 2250
  },
  {
    'locality': 'Corujas',
    'municipality': 405,
    'postalCode': 5340
  },
  {
    'locality': 'Corujeira',
    'municipality': 104,
    'postalCode': 4540
  },
  {
    'locality': 'Corujeira',
    'municipality': 109,
    'postalCode': 3700
  },
  {
    'locality': 'Corujeira',
    'municipality': 307,
    'postalCode': 4820
  },
  {
    'locality': 'Corujeira',
    'municipality': 310,
    'postalCode': 4845
  },
  {
    'locality': 'Corujeira',
    'municipality': 506,
    'postalCode': 6160
  },
  {
    'locality': 'Corujeira',
    'municipality': 508,
    'postalCode': 6150
  },
  {
    'locality': 'Corujeira',
    'municipality': 608,
    'postalCode': 3070
  },
  {
    'locality': 'Corujeira',
    'municipality': 609,
    'postalCode': 3220
  },
  {
    'locality': 'Corujeira',
    'municipality': 816,
    'postalCode': 8900
  },
  {
    'locality': 'Corujeira',
    'municipality': 905,
    'postalCode': 6370
  },
  {
    'locality': 'Corujeira',
    'municipality': 907,
    'postalCode': 6300
  },
  {
    'locality': 'Corujeira',
    'municipality': 1101,
    'postalCode': 2580
  },
  {
    'locality': 'Corujeira',
    'municipality': 1104,
    'postalCode': 2550
  },
  {
    'locality': 'Corujeira',
    'municipality': 1113,
    'postalCode': 2565
  },
  {
    'locality': 'Corujeira',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Corujeira',
    'municipality': 1411,
    'postalCode': 2240
  },
  {
    'locality': 'Corujeira',
    'municipality': 1413,
    'postalCode': 6120
  },
  {
    'locality': 'Corujeira',
    'municipality': 1605,
    'postalCode': 4940
  },
  {
    'locality': 'Corujeira',
    'municipality': 1708,
    'postalCode': 5040
  },
  {
    'locality': 'Corujeira',
    'municipality': 1804,
    'postalCode': 4690
  },
  {
    'locality': 'Corujeira',
    'municipality': 1817,
    'postalCode': 3560
  },
  {
    'locality': 'Corujeira',
    'municipality': 1824,
    'postalCode': 3670
  },
  {
    'locality': 'Corujeira',
    'municipality': 3101,
    'postalCode': 9385
  },
  {
    'locality': 'Corujeira',
    'municipality': 3107,
    'postalCode': 9350
  },
  {
    'locality': 'Corujeira de Baixo',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Corujeira de Cima',
    'municipality': 3109,
    'postalCode': 9230
  },
  {
    'locality': 'Corujeiras',
    'municipality': 1015,
    'postalCode': 3100
  },
  {
    'locality': 'Corujeiras',
    'municipality': 1301,
    'postalCode': 4600
  },
  {
    'locality': 'Corujeiras',
    'municipality': 1603,
    'postalCode': 4960