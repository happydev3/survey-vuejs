<template>
  <div>
    <div id="surveyElement" style="display:inline-block; width:100%;">
          <survey :survey='survey'/>
    </div>
    <div id="surveyResult"></div>
  </div>
</template>

<script>
import * as SurveyVue from 'survey-vue'

// var Survey = SurveyVue.Survey
SurveyVue.StylesManager.applyTheme("bootstrap");


var json = {
    title: {'it': "Calcolatore dell'impronta di CO2", 'en': "CO2 footprint calculator", 'fr': "Calculateur d'empreinte CO2"},
    showProgressBar: 'Bottom',
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "image",
                    name: "first_page_image",
                    imageLink: "https://surveyjs.io/Content/Images/examples/covid/01.png",
                    imageFit: "none",
                    imageHeight: 726,
                    imageWidth: 600,
                    width: "700px"
                }, {
                    type: "panel",
                    title: {'it': "Generale", 'en': "General", 'fr': "Général"},
                    name: "first_page_container_panel",
                    elements: [
                        {
                            type: "text",
                            name: "nickname/name",
                            startWithNewLine: true,
                            title: {'it': '"Nickname"/Nome del nucleo familiare', 'en': '"Nickname"/Family Name', 'fr': '"Surnom"/Nom de famille'},
                            inputType: "text",
                            hideNumber: true
                        }, {
                            type: "text",
                            name: "Reference_year",
                            startWithNewLine: true,
                            title: {'it': 'Anno di riferimento', 'en': 'Reference year', 'fr': 'Année de référence'},
                            inputType: "date",
                            hideNumber: true
                        },
                    ],
                    startWithNewLine: false
                }
            ]
        },{
            name: "page2",
            elements: [
                {
                    type: "image",
                    name: "second_page_image",
                    imageLink: "https://surveyjs.io/Content/Images/examples/covid/01.png",
                    imageFit: "none",
                    imageHeight: 726,
                    imageWidth: 600,
                    width: "700px"
                }, {
                    type: "panel",
                    title: {'it': "Casa", 'en': "Home", 'fr': "Accueil"},
                    name: "second_page_container_panel",
                    elements: [
                        {
                            type: "dropdown",
                            name: "address",
                            startWithNewLine: true,
                            title: {'it': 'Dove vivete ?', 'en': 'Where do you live ?', 'fr': 'Où habitez-vous ?'},
                            inputType: "text",
                            choices: [
                              {text: {'it': 'Abruzzo', 'en': 'Abruzzo', 'fr': 'Abruzzes'}},
                              {text: {'it': 'Basilicata', 'en': 'Basilicata', 'fr': 'Basilicate'}},
                              {text: {'it': 'Emilia Romagna', 'en': 'Emilia Romagna', 'fr': 'Emilie-Romagne'}},
                              {text: {'it': 'Friuli Venezia Giulia', 'en': 'Friuli Venezia Giulia', 'fr': 'Friuli Venezia Giulia'}},
                              {text: {'it': 'Lazio', 'en': 'Lazio', 'fr': 'Lazio'}},
                              {text: {'it': 'Liguria', 'en': 'Liguria', 'fr': 'Ligurie'}},
                              {text: {'it': 'Lombardia', 'en': 'Lombardy', 'fr': 'Lombardie'}},
                              {text: {'it': 'Marche', 'en': 'Marche', 'fr': 'Marche'}},
                              {text: {'it': 'Molise', 'en': 'Molise', 'fr': 'Molise'}},
                              {text: {'it': 'Piemonte', 'en': 'Piedmont', 'fr': 'Piémont'}},
                              {text: {'it': 'Provincia Autonoma di Bolzano', 'en': 'Bolzano Autonomous Province', 'fr': 'Province autonome de Bolzano'}},
                              {text: {'it': 'Provincia Autonoma di Trento', 'en': 'Trento Autonomous Province', 'fr': 'Province autonome de Trento'}},
                              {text: {'it': 'Puglia', 'en': 'Puglia', 'fr': 'Pouilles'}},
                              {text: {'it': 'Sardegna', 'en': 'Sardinia', 'fr': 'Sardaigne'}},
                              {text: {'it': 'Sicilia', 'en': 'Sicily', 'fr': 'Sicile'}},
                              {text: {'it': 'Toscana', 'en': 'Tuscany', 'fr': 'Toscane'}},
                              {text: {'it': 'Umbria', 'en': 'Umbria', 'fr': 'Ombrie'}},
                              {text: {'it': "Valle d'Aosta", 'en': 'Aosta Valley', 'fr': 'Aoste'}},
                              {text: {'it': 'Veneto', 'en': 'Veneto', 'fr': 'Veneto'}},
                            ],
                            hideNumber: true
                        }, {
                            type: "text",
                            name: "family_number",
                            startWithNewLine: true,
                            title: {'it': 'Da quante persone è composto il vostro nucleo familiare ?', 'en': 'How many people make up your household ?', 'fr': 'Combien de personnes dans votre ménage ?'},
                            inputType: "number",
                            hideNumber: true
                        },{
                            type: "dropdown",
                            name: "kind_of_house",
                            startWithNewLine: true,
                            title: {'it': 'Che tipo di casa è la vostra?', 'en': 'What kind of house is yours ?', 'fr': 'Quel genre de maison est la vôtre ?'},
                            inputType: "text",
                            choices: [
                              {text: {'it': 'VenAppartamento in condominioeto', 'en': 'Apartment in condo', 'fr': 'Appartement en copropriété'}},
                              {text: {'it': 'Casa singola', 'en': 'Single house', 'fr': 'Maison indépendante'}},
                            ],
                            hideNumber: true
                        },{
                            type: "text",
                            name: "how_big_it",
                            startWithNewLine: true,
                            title: {'it': 'Quanto è grande (m2) ?', 'en': 'How big is it (m2) ?', 'fr': 'Quelle est la taille (m2) ?'},
                            inputType: "number",
                            hideNumber: true
                        },{
                            type: "text",
                            name: "built_day",
                            startWithNewLine: true,
                            title: {'it': 'Quando è stata costruita ?', 'en': 'When was it built ?', 'fr': 'Quand a-t-il été construit ?'},
                            inputType: "date",
                            hideNumber: true
                        },
                    ],
                    startWithNewLine: false
                }
            ]
        },{
            name: "page3",
            elements: [
                {
                    type: "image",
                    name: "third_page_image",
                    imageLink: "https://surveyjs.io/Content/Images/examples/covid/01.png",
                    imageFit: "none",
                    imageHeight: 726,
                    imageWidth: 600,
                    width: "700px"
                },{
                    type: "panel",
                    title: {'it': "Energia", 'en': "Energy", 'fr': "Energie"},
                    name: "third_page_container_panel",
                    elements: [
                      {
                        type: "panel",
                        name: "Electricity",
                        title: {'it': "Elettricità", 'en': "Electricity", 'fr': "Électricité"},
                        elements: [
                          {
                            type: 'text',
                            name: 'how_much_on_year',
                            title: {'it': "Qual è la vostra principale fonte di riscaldamento ?", 'en': "How much electricity do you consume in a year? (kWh) ?", 'fr': "Combien d’électricité consommez-vous en un an? (kWh) ?"},
                            inputType: 'number',
                            startWithNewLine: false,
                            hideNumber: true
                          },{
                            type: 'radiogroup',
                            name: 'use_100%',
                            title: {'it': "Utilizzate energia elettrica 100% da fonte rinnovabile ?", 'en': " Do you use 100% renewable electricity ?", 'fr': "Utilisez-vous de l’électricité 100% renouvelable ?"},
                            choices: [
                              {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                              {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                            ],
                            startWithNewLine: false,
                            colCount: 2,
                            hideNumber: true
                          }
                        ],
                        startWithNewLine: true,
                        showNumber: true
                      },{
                        type: 'panel',
                        name: 'heating',
                        title: {'it': 'Riscaldamento', 'en': 'Heating', 'fr': 'Chauffage'},
                        elements: [
                          {
                            type: 'dropdown',
                            name: 'source_of_heating',
                            title: {'it': 'Qual è la vostra principale fonte di riscaldamento ?', 'en': 'What is your main source of heating ?', 'fr': 'Quelle est votre principale source de chauffage ?'},
                            choices: [
                              {text: {'it': 'Sistemi di riscaldamento residenziale da gas naturale', 'en': 'Residential natural gas heating systems', 'fr': 'Systèmes résidentiels de chauffage au gaz naturel'}},
                              {text: {'it': 'Sistemi di riscaldamento residenziale da pellet', 'en': 'Residential pellet heating systems', 'fr': 'Systèmes résidentiels de chauffage au granulé de bois'}},
                              {text: {'it': 'Teleriscaldamento da impianto pubblico a gas naturale', 'en': 'District heating from natural gas-fired public plant', 'fr': 'Chauffage à distance par usine publique au gaz naturel'}},
                              {text: {'it': 'Riscaldamento a pellet', 'en': 'Heating pellets', 'fr': 'Chauffage au granulé de bois'}},
                              {text: {'it': 'Riscaldamento a legna', 'en': 'Wood-heating', 'fr': 'Chauffage au bois'}},
                              {text: {'it': 'Gas metano combustione - mix italiano (IT)', 'en': 'Natural gas combustion - Italian mix (IT)', 'fr': 'Combustion de gaz naturel - Mélange italien (IT)'}},
                              {text: {'it': 'Propano', 'en': 'Propane', 'fr': 'Propane'}},
                              {text: {'it': 'Olio combustibile', 'en': 'Fuel oil', 'fr': 'Mazout'}},
                              {text: {'it': 'GPL', 'en': 'LPG', 'fr': 'GPL'}},
                              {text: {'it': 'Carbone', 'en': 'Coal', 'fr': 'Charbon'}}
                            ],
                            hideNumber: true,
                            startWithNewLine: true
                          },{
                            type: 'text',
                            name: 'how_much_comsume_in_year',
                            title: {'it': 'Quanto consumate in un anno (standard metri quadri, kg, l, kWh) ?', 'en': 'How much do you consume in a year (standard square meters, kg, l, kWh) ?', 'fr': 'Combien consommez-vous en un an (mètres carrés standard, kg, l, kWh) ?'},
                            inputType: 'number',
                            startWithNewLine: false,
                            hideNumber: true
                          }
                        ],
                        showNumber: true,
                        startWithNewLine: true,
                      }
                    ],
                    hideNumber: true,
                    startWithNewLine: false,
                }
            ]
        },{
          name: 'page4',
          elements: [
            {
              type: "image",
              name: "fourth_page_image",
              imageLink: "https://surveyjs.io/Content/Images/examples/covid/01.png",
              imageFit: "none",
              imageHeight: 726,
              imageWidth: 600,
              width: "700px"
            },{
              type: 'panel',
              name: "fourth_page_container_panel",
              title: {'it': 'Mobilità', 'en': 'Transportation', 'fr': 'Transports'},
              elements: [
                {
                  type: 'dropdown',
                  name: 'how_many_km_drive_year',
                  title: {'it': "Quanti km percorrete in auto in un anno ?", 'en': "How many km do you drive in a year ?", 'fr': "Combien de km conduisez-vous en un an ?"},
                  choices: [
                    {text: {'it': 'Benzina', 'en': 'Gasoline', 'fr': 'Essence'}},
                    {text: {'it': 'Diesel', 'en': 'Diesel', 'fr': 'Diesel'}},
                    {text: {'it': 'Bifuel Benzina-GPL', 'en': 'Bifuel Gasoline-LPG', 'fr': 'Bifuel Essence-GPL'}},
                    {text: {'it': 'Bifuel Benzina-Metano', 'en': 'Bifuel Gasoline-Methane', 'fr': 'Bifuel Essence-Méthane'}},
                    {text: {'it': 'Ibrida Benzina-Elettrica', 'en': 'Hybrid Gasoline-Electric', 'fr': 'Hybride Essence-Électrique'}},
                  ],
                  startWithNewLine: false,
                  hideNumber: true
                },{
                  type: 'radiogroup',
                  name: 'car_sharing_service',
                  title: {'it': "Utilizzate i servizi di car sharing ?", 'en': "Do you use car sharing services ?", 'fr': "Utilisez-vous des services d’autopartage ?"},
                  choices: [
                    {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                    {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                  ],
                  startWithNewLine: false,
                  colCount: 2,
                  hideNumber: true
                },{
                  type: 'dropdown',
                  name: 'how_many_km_travel',
                  title: {'it': "Se si, quanti km percorrete in un anno e con quale carburante principalmente ?", 'en': "If yes, how many km do you travel in a year and with what fuel mainly ?", 'fr': "Dans ce cas, combien de km voyagez-vous en un an et avec quel carburant principalement ?"},
                  choices: [
                    {text: {'it': 'Benzina', 'en': 'Gasoline', 'fr': 'Essence'}},
                    {text: {'it': 'Diesel', 'en': 'Diesel', 'fr': 'Diesel'}},
                    {text: {'it': 'Bifuel Benzina-GPL', 'en': 'Bifuel Gasoline-LPG', 'fr': 'Bifuel Essence-GPL'}},
                    {text: {'it': 'Bifuel Benzina-Metano', 'en': 'Bifuel Gasoline-Methane', 'fr': 'Bifuel Essence-Méthane'}},
                    {text: {'it': 'Ibrida Benzina-Elettrica', 'en': 'Hybrid Gasoline-Electric', 'fr': 'Hybride Essence-Électrique'}},
                  ],
                  startWithNewLine: true,
                  hideNumber: true
                },{
                  type: 'dropdown',
                  name: 'how_many_travel_motorcycle',
                  title: {'it': "Quanti km percorrete in moto/ciclomotore in un anno ?", 'en': "How many km do you travel by motorcycle/moped in a year ?", 'fr': "Combien de km voyagez-vous en moto/cyclomoteur en un an ?"},
                  choices: [
                    {text: {'it': 'Moto a benzina', 'en': 'Gasoline Motorcycle', 'fr': 'Motocyclette à essence'}},
                    {text: {'it': 'Ciclomotori a benzina', 'en': 'Gasoline Moped', 'fr': 'Cyclomoteur à essence'}}
                  ],
                  startWithNewLine: false,
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'how_many_travel_train',
                  title: {'it': "Treno - Quanti km percorrete in un anno ?", 'en': "Train - How many km do you travel in a year ?", 'fr': "Train - Combien de km voyagez-vous en un an ?"},
                  startWithNewLine: true,
                  inputType: 'number',
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'how_many_travel_bus',
                  title: {'it': "Bus - Quanti km percorrete in un anno ?", 'en': "Bus - How many km do you travel in a year ?", 'fr': "Bus - Combien de km parcourez-vous en un an ?"},
                  startWithNewLine: false,
                  inputType: 'number',
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'how_many_travel_flights(<3h)',
                  title: {'it': "Voli: Quanti viaggi a breve raggio (< 3h) fate in un anno ?", 'en': "Flights: How many short-haul trips (< 3h) do you make in a year ?", 'fr': "Vols : Combien de voyages court-courriers (< 3h) effectuez-vous par an ?"},
                  startWithNewLine: true,
                  inputType: 'number',
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'how_many_travel_flights(>3h)',
                  title: {'it': "Voli: Quanti viaggi a lungo raggio (> 3h) fate in un anno ?", 'en': "Flights: How many long-haul trips (> 3h) do you make in a year ?", 'fr': "Vols : Combien de voyages long-courriers (> 3h) effectuez-vous par an ?"},
                  startWithNewLine: false,
                  inputType: 'number',
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'how_many_travel_ferries',
                  title: {'it': "Traghetti - Quanti km percorrete in un anno ?", 'en': "Ferries - How many km do you travel in a year ?", 'fr': "Ferries : Combien de km parcourez-vous par an ?"},
                  startWithNewLine: true,
                  inputType: 'number',
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'how_many_travel_taxi',
                  title: {'it': "Taxi - Quanti km percorrete in un anno ?", 'en': "Taxi - How many km do you travel in a year ?", 'fr': "Taxi - Combien de km parcourez-vous par an ?"},
                  startWithNewLine: false,
                  inputType: 'number',
                  hideNumber: true
                }
              ],
              startWithNewLine: false,
              hideNumber: true
            }
          ]
        },{
          name: 'page5',
          elements: [
            {
              type: "image",
              name: "fifth_page_image",
              imageLink: "https://surveyjs.io/Content/Images/examples/covid/01.png",
              imageFit: "none",
              imageHeight: 726,
              imageWidth: 600,
              width: "700px"
            },{
              type: 'panel',
              name: 'fifth_page_container_panel',
              title: {'it': 'Rifiuti', 'en': 'Waste', 'fr': 'Déchets'},
              elements: [
                {
                  type: 'radiogroup',
                  name: 'separate_paper',
                  title: {'it': "Fate la raccolta differenziata della carta ?", 'en': "Do you separate paper ?", 'fr': "Triez-vous le papier ?"},
                  choices: [
                    {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                    {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                  ],
                  startWithNewLine: true,
                  colCount: 2,
                  hideNumber: true
                },{
                  type: 'radiogroup',
                  name: 'separate_plastic',
                  title: {'it': "Fate la raccolta differenziata della plastica ?", 'en': "Do you separate plastic ?", 'fr': "Triez-vous la plastique ?"},
                  choices: [
                    {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                    {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                  ],
                  startWithNewLine: true,
                  colCount: 2,
                  hideNumber: true
                },{
                  type: 'radiogroup',
                  name: 'separate_glass',
                  title: {'it': "Fate la raccolta differenziata del vetro ?", 'en': "Do you separate glass ?", 'fr': "Triez-vous le verre ?"},
                  choices: [
                    {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                    {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                  ],
                  startWithNewLine: true,
                  colCount: 2,
                  hideNumber: true
                },{
                  type: 'radiogroup',
                  name: 'separate_aluminium',
                  title: {'it': "Fate la raccolta differenziata di alluminio/lattine ?", 'en': "Do the separate aluminum/cans ?", 'fr': "Triez-vous l’aluminium/canettes ?"},
                  choices: [
                    {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                    {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                  ],
                  startWithNewLine: true,
                  colCount: 2,
                  hideNumber: true
                },{
                  type: 'radiogroup',
                  name: 'separate_green_waste',
                  title: {'it': "Fate la raccolta differenziata dell’organico ?", 'en': "Do you separate the green waste ?", 'fr': "Triez-voux l’organique ?"},
                  choices: [
                    {value: true, text: {'it': 'Si', 'en': 'Yes', 'fr': 'Oui'}},
                    {value: false, text: {'it': 'No', 'en': 'No', 'fr': 'Non'}},
                  ],
                  startWithNewLine: true,
                  colCount: 2,
                  hideNumber: true
                }
              ],
              startWithNewLine: false,
              hideNumber: true
            }
          ]
        },{
          name: 'page6',
          elements: [
            {
              type: "image",
              name: "sixth_page_image",
              imageLink: "https://surveyjs.io/Content/Images/examples/covid/01.png",
              imageFit: "none",
              imageHeight: 726,
              imageWidth: 600,
              width: "700px"
            },{
              type: 'panel',
              name: 'sixth_page_container_panel',
              title: {'it': 'Stile di vita', 'en': 'Lifestyle', 'fr': 'Mode de vie'},
              elements: [
                {
                  type: 'panel',
                  name: 'food',
                  title: {'it': 'Alimentazione', 'en': 'Food', 'fr': 'Nourriture'},
                  elements: [
                    {
                      type: 'dropdown',
                      name: 'meal_of_eat',
                      title: {'it': 'Quale tipo di pasto consumate ?', 'en': 'What kind of meal do you eat ?', 'fr': 'Quel type de repas mangez-vous ?'},
                      choices: [
                        {text: {'it': 'Pasto tipico italiano (onnivoro - carne e pesce)', 'en': 'Typical Italian meal (omnivore - meat and fish)', 'fr': 'Repas italien typique (omnivore - viande et poisson)'}},
                        {text: {'it': 'Pasto tipico italiano (onnivoro - solo pesce)', 'en': 'Typical Italian meal (omnivore - fish only)', 'fr': 'Repas italien typique (omnivore - poisson uniquement)'}},
                        {text: {'it': 'Pasto tipico italiano (vegetariano)', 'en': 'Typical Italian meal (vegetarian)', 'fr': 'Repas typiquement italien (végétarien)'}},
                        {text: {'it': 'Pasto tipico italiano (vegano)', 'en': 'Typical Italian meal (vegan)', 'fr': 'Repas typiquement italien (végétalien)'}}
                      ],
                      startWithNewLine: true,
                      hideNumber: true
                    },{
                      type: 'text',
                      name: 'liter_per_week',
                      title: {'it': 'Qual è il vostro consumo di acqua in bottiglia a settimana (litri)?', 'en': 'What is your consumption of bottled water per week (liters)?', 'fr': "Quelle est votre consommation d'eau en bouteille par semaine (en litres) ?"},
                      inputType: 'number',
                      startWithNewLine: false,
                      hideNumber: true 
                    }
                  ],
                  startWithNewLine: true,
                  hideNumber: true
                },{
                  type: 'text',
                  name: 'drink_per_year',
                  title: {'it': 'Qual è il vostro consumo di acqua potabile in un anno (m3) ?', 'en': 'What is your drinking water consumption in a year (m3) ?', 'fr': "Quelle est votre consommation d'eau potable par an (m3) ?"},
                  inputType: 'number',
                  startWithNewLine: true,
                  hideNumber: true 
                },{
                  type: 'text',
                  name: 'IT_devices_in_home',
                  title: {'it': 'Quanti computer e dispositivi IT avete in casa ?', 'en': 'How many computers and IT devices do you have in your home ?', 'fr': "Combien d'ordinateurs et d'appareils informatiques avez-vous à la maison ?"},
                  choices: [
                    {text: {'it': 'Computer portatile', 'en': 'Laptop', 'fr': 'Ordinateur portable'}},
                    {text: {'it': 'Desktop computer (PC fisso)', 'en': 'Desktop computer', 'fr': 'Ordinateur de bureau'}},
                    {text: {'it': 'Stampante', 'en': 'Printer', 'fr': 'Imprimeur'}}
                  ],
                  startWithNewLine: true,
                  hideNumber: true 
                },{
                  type: 'text',
                  name: 'vehicles_family',
                  title: {'it': 'Quanti veicoli possedete in famiglia ?', 'en': 'How many vehicles do you own in your family ?', 'fr': "Combien de véhicules possédez-vous dans votre famille ?"},
                  inputType: 'number',
                  startWithNewLine: true,
                  hideNumber: true 
                },{
                  type: 'dropdown',
                  name: 'cost_other_purchases',
                  title: {'it': 'Quanto spendete ogni anno per altri acquisti ?', 'en': 'How much do you spend each year on other purchases ?', 'fr': "Combien dépensez-vous chaque année pour d'autres achats ?"},
                  choices: [
                    {text: {'it': 'Vestiti, tessuti e scarpe', 'en': 'Clothes, textiles and shoes', 'fr': 'Vêtements, tissus et chaussures'}},
                    {text: {'it': 'Telefono/smartphone, televisione, radio', 'en': 'Phone/smartphone, television, radio', 'fr': 'Téléphone/smartphone, télévision, radio'}},
                    {text: {'it': 'Alberghi, ristoranti e bar ecc', 'en': 'Hotels, restaurants and bars, etc', 'fr': 'Hôtels, restaurants et bars, etc'}},
                    {text: {'it': 'Attività ricreative, culturali e sportive', 'en': 'Recreational, cultural and sporting activities', 'fr': 'Activités récréatives, culturelles et sportives'}},
                    {text: {'it': 'Riviste e prodotti cartacei (libri, riviste, giornali)', 'en': 'Magazines and paper products (books, magazines, newspapers)', 'fr': 'Magazines et produits en papier (livres, magazines, journaux)'}},
                    {text: {'it': 'Mobili e altri manufatti', 'en': 'Furniture and other artifacts', 'fr': 'Meubles et autres objets'}},
                    {text: {'it': 'Abbonamenti attivi su telefono/smartphone', 'en': 'Active subscriptions on phone/smartphone', 'fr': 'Abonnements actifs sur téléphone/smartphone'}},
                    {text: {'it': 'Formazione scolastica', 'en': 'Education', 'fr': 'Formation scolaire'}},
                    {text: {'it': 'Prodotti farmaceutici', 'en': 'Pharmaceuticals', 'fr': 'Produits pharmaceutiques'}}
                  ],
                  startWithNewLine: true,
                  hideNumber: true 
                }
              ],
              startWithNewLine: false,
              hideNumber: true
            }
          ]
        }
    ]
};



window.survey = new SurveyVue.Model(json)
// You may set model properties
// survey.mode = "display"
window.survey.locale = 'en';

window.survey
  .onComplete
  .add(function (result) {
    document
      .querySelector('#surveyResult')
      .textContent = 'Result JSON:\n' + JSON.stringify(result.data, null, 3)
  })

window.survey
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses

        classes.panel = "panel-border";
        classes.title = "sq-title"
        classes.item = "sq-item";
        classes.label = "sq-label";

        if (options.question.getType() === "panel") {
            classes.root += " panel-border-style";
        }
    });

export default {
  data () {
    return {
      survey: window.survey
    }
  },
  watch: {
    '$i18n.locale'(val) {
          this.survey.locale = val;
     },
  },
  methods: {
    currentLocale(val) {
      console.log(val);
    }
  }
}
</script>
