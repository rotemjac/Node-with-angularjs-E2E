
var DBInfoManager = function () {

}
DBInfoManager.prototype = function () {
    var Q = require('q');

    var initData = function() {
        var myDb = require('./DBconfig').db;
        var pageContent = myDb.collection('pageContent');
        myDb.collection('pageContent').insert(
          [
            {
                page: "Tumbnail",
                data: [
                    {
                        header:"Visitors story",
                        dataRows:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."

                    },
                    {
                        header:"Next event",
                        dataRows:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."

                    },
                    {
                        header:"Photo of the day",
                        dataRows:"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit."

                    }
                ]
            },
            {
                  page: "Hours",
                  data: [
                      {
                          header: "Spring/Summer Hours",
                          dataRows: [
                              "Open daily 10:00 am to 5:00 pm.",
                              "Admission into Zoo ends at 4:00 pm. Members may enter until 4:30 pm.",
                              "Children ages 14 years old and under must be accompanied by an adult while on Zoo grounds."
                          ]
                      },
                      {
                          header: "Free for Members",
                          dataRows: [
                              "San Francisco Zoological Society Members receive free admission."
                          ]
                      },
                      {
                          header: "Free Days for San Francisco Residents",
                          dataRows: [
                              "Once each month, we offer free admission to San Francisco residents.",
                              "Please check the Calendar of Events for confirmation of free days.",
                              "Upcoming Free Days are May 7, June 4, and July 9. Proof of San Francisco residency is required and can be established by providing the following: ",
                              "1. A valid driver’s license.",
                              "2. A valid identification card",
                              "3. A utility, phone, or other local bill with your name and address, along with a current, valid photo I.D."
                          ]
                      },
                      {
                          header: "Military Discount",
                          dataRows: [
                              "Retired and active military personnel receive San Francisco resident rates (free admission on SF Resident Free Days only applies to San Francisco residents with proof of residency)."
                          ]
                      },
                      {
                          header: "Docent Tours",
                          dataRows: [
                              "Our docent guides lead educational walking tours for school groups of 15 or more (subject to availability). Tours are available during the months of September through March (subject to change) and tour topics correlate with current California Science Content Standards (SCS). Requests must be made at least 4 weeks in advance of visit."
                          ]
                      }
                  ]
            },
            {
              page: "Prices",
              data: [
                  {category: "Members",                       price: "Free"},
                  {category: "Adult (15-64)",                 price: "17.00"},
                  {category: "Seniors (65 and over)",         price: "14.00"},
                  {category: "Children (4-14)",               price: "11.00"},
                  {category: "Children (3 and under)",        price: "Free"},
                  {category: "Parking, weekdays",             price: "8.00"},
                  {category: "Parking, weekends and holidays",price: "10.00"}
              ]
            },
            {
                page: "Directions",
                data: [
                    {
                        header: "Take Muni and Get a Discount",
                        dataRows: [
                            "We encourage you to use public transportation when visiting us.",
                            "Visitors who take Muni to the Zoo receive a $1 discount off the price of admission. Just show your same-day Muni receipt, transfer, or monthly pass at the ticket window. Within San Francisco, take the Muni L Taraval line outbound to the Zoo. Muni bus lines 23 and 18 also stop at the Zoo.",
                            "Use the 511 Take Transit Trip Planner for door-to-door directions by entering your starting address and SF Zoo for your destination address and San Francisco for your destination city. "

                        ]
                    },
                    {
                        header: "Driving From the East Bay",
                        dataRows: [
                            "1. Follow the next steps:",
                            "2. Take the Bay Bridge to San Francisco.",
                            "3. After crossing the Bay Bridge, take 101 South.",
                            "4. Follow 101 South to the 280 interchange.",
                            "5. Take 280 South to the Westlake District – John Daly Boulevard exit.",
                            "6. Make a right onto John Daly Boulevard and continue to Skyline Boulevard (Highway 35)." ,
                            "7. Turn right onto Skyline Boulevard (Highway 35).",
                            "8. At the Skyline/Great Highway junction, turn left onto the Great Highway.",
                            "9. Get into the right lane and take the right turn into the Zoo Entrance on the Great Highway."

                        ]
                    },
                    {
                        header: "Driving From the North Bay",
                        dataRows: [
                            "Follow the next steps:",
                            "1. Driving From the North Bay",
                            "2. Take the Golden Gate Bridge (Highway 101).",
                            "3. After passing through the toll plaza, merge into farthest right lane to take 19th Avenue – Golden Gate Park exit.",
                            "4. After passing through the toll plaza, merge into farthest right lane to take 19th Avenue – Golden Gate Park exit onto Presidio Parkway.",
                            "5. Take a right onto Fulton Avenue.",
                            "6. Take Fulton Avenue down to the ocean and turn left onto the Great Highway.",
                            "7. Continue south on the Great Highway.",
                            "8. Turn left onto Sloat Boulevard.",
                            "9. Get in the right hand lane and turn right into the Zoo Entrance on Sloat Boulevard."
                        ]
                    },
                    {
                        header: "Driving From the South Bay",
                        dataRows: [
                            "Follow the next steps:",
                            "1. Take 280 North to the Westlake District exit in Daly City. Continue going north (Junipero Serra Boulevard) to John Daly Boulevard.",
                            "2. Turn left at John Daly Boulevard and continue to Skyline Boulevard (Highway 35).",
                            "3. Turn right onto Skyline Boulevard (Highway 35).",
                            "4. At the Skyline/Great Highway junction, turn left onto the Great Highway.",
                            "5. Get into the right lane and take a right turn into the Zoo Entrance on the Great Highway."
                        ]
                    },
                    {
                        header:"Parking",
                        dataRows: [
                            "Our parking lot has two entrances, one off of the Great Highway for people driving from the East Bay and South Bay, and one off of Sloat Boulevard at 47th Avenue for those driving from the North Bay.",
                            "There is only one exit from the parking lot - putting everyone northbound on the Great Highway.",
                            "To exit, purchase a parking pass at the ticket counter at the Main Gate prior to leaving the Zoo. See the list above for parking fees. There is free parking on the street along Sloat Boulevard."
                        ]
                    }
                ]
            },
            {
                page: "ZooCamp",
                data: [
                {
                    overView: "We offer one of the most educational and entertaining day camp adventures in the Bay Area. There are three Zoo Camps per year to keep your children entertained and active during school breaks: Summer (weekly, June through August), Winter (December) and Spring (April)."
                },
                {
                    campHeader: "Spring",
                    ages:       "Ages 4 years old through grade 5",
                    dates:      "Week 1: March 31 - April 4. Week 2: April 21 - 25 (grades 1-3 only)",
                    moreData:   "Spring campers learn what all the buzz of Spring is about during a fun-filled week that highlights pollinators, plants, and nests.",
                    fees: [
                        {
                            category: "Grades pre K-K (must be at least 4 years old)",time: "9 am to noon",
                            costs:[
                                {cost:"SFZS Members" , price: "200"},
                                {cost:"Non-members"  , price: "235"}
                            ]
                        },
                        {
                            category: "Grades 1-5",time: "9 am to 4 pm",
                            costs:[
                                {cost:"SFZS Members" , price: "280"},
                                {cost:"Non-members"  , price: "320"}
                            ]
                        }
                    ],
                    additionalServices: [
                        {category: "Early drop-off  (8 am to 9 am)" ,price: "35"},
                        {category: "Late pick-up (4 pm to 5:30 pm)" ,price: "55"}
                    ]

                },
                {
                    campHeader: "Summer",
                    ages:       "Ages 4 years old through grade 7",
                    dates:      "June 2 - August 15",
                    moreData:   "Summer Zoo Camp is the perfect place for your animal-loving child. Campers in pre K to grade 5 can enjoy up to three weeks of Zoo Camp fun and learning. View our brochure for more details on course topics, camp dates, sample schedule, and more."
                        +"Campers in grades 6 and 7 delve deeper into the science behind wildlife conservation during a two-week program ending in an overnight stay (Thursday night of the last week with camp ending at 10 am on the final Friday of the two-week program). ",
                    fees: [
                        {
                            category: "Grades pre K-K (must be at least 4 years old)",time: "9 am to noon",
                            costs:[
                                {cost:"SFZS Members" , price: "200"},
                                {cost:"Non-members"  , price: "235"}
                            ]
                        },
                        {
                            category: "Grades 1-5", time: "9 am to 4 pm",
                            costs:[
                                {cost:"SFZS Members" , price: "280"},
                                {cost:"Non-members"  , price: "320"}
                            ]
                        },
                        {
                            category: "Grades 6-7 (two-week program)",time: "9 am to 4 pm",
                            costs:[
                                {cost:"SFZS Members" , price: "560"},
                                {cost:"Non-members"  , price: "660"}
                            ]

                        }
                    ],
                    additionalServices: [
                        {category: "Early drop-off  for pre K-grade 5 (8 am to 9 am) ", price: "35"},
                        {category: "Early drop-off for grades 6 and 7 (8 am to 9 am) ", price: "56"},
                        {category: "Late pick-up for pre K-grade 5 (4 pm to 5:30 pm) ", price: "55"},
                        {category: "Late pick-up for grades 6 and 7 (4 pm to 5:30 pm)", price: "88"},

                    ]
                }
                ]
            },
            {
                page: "FAQInfo",
                data: [
                    {
                        header:"Is smoking allowed at the Zoo?",
                        dataRows: [
                            "Smoking is not permitted on Zoo grounds. The designated smoking area for visitors is in the main Zoo parking lot."
                        ]
                    },
                    {
                        header:"Is outside food allowed in the Zoo?",
                        dataRows: [
                            "The Zoo welcomes guests who wish to bring their own picnics into the Zoo with them, and there are picnic areas scattered throughout the premises available on a first-come, first-served basis.",
                            "The Zoo requests that you do not bring aluminum cans, glassware or any other breakable materials and to refrain from using any small plastics items such as straws and cup lids that might accidentally find their way into an animal’s exhibit.",
                            "Coolers and picnic baskets are welcome at the Zoo, but the Zoo does not have storage lockers available for rent."
                        ]
                    },
                    {
                        header:"What items are not allowed on Zoo grounds?",
                        dataRows: [
                            "For the safety of our animals the following items are not allowed on Zoo grounds: glass bottles, aluminum cans, pets, laser pointers, bicycles, scooters, skateboards, rollerskates, inline skates, glass or otherwise breakable plates, bowls or cups. Additionally, no plastic lids or straws are allowed within the Zoo.",
                            "We request that visitors do not bring outside alcohol with them to the Zoo. However, beer is served at the Zoo Grill in the Winnick Family Children’s Zoo, La Casita, Mahale Café, South America, and various cart locations throughout the Zoo."
                        ]
                    },
                    {
                        header:"Are pets allowed in the Zoo?",
                        dataRows: [
                            "The Zoo does not allow pets of any kind, regardless of size or breed, into the Zoo. Outside animals are not allowed in the Zoo at any time for the protection of the animal residents, and for the protection of your pet.",
                            "The Zoo does allow fully trained service animals to enter the Zoo. Service animals that are in training are not allowed into the Zoo under any circumstances."
                        ]
                    },
                    {
                        header:"Can I donate my pet to the Zoo?",
                        dataRows: [
                            "While the Zoo encourages pet owners to learn as much as they can before adopting a pet, we understand that sometimes situations cannot be avoided where people are unable to care for their pet. Unfortunately, the Zoo cannot accommodate the large number of requests that are made each year."
                        ]
                    },
                    {
                        header:"Can I have a birthday party at the Zoo?",
                        dataRows: [
                            "Absolutely! The L.A. Zoo is a perfect place to celebrate birthdays for animal lovers of all ages."
                        ]
                    },
                    {
                        header:"Does the Zoo offer guided tours?",
                        dataRows: [
                            "Yes, the Zoo offers several different types of guided tours. If you are a member and would like a docent guided tour, please call our membership office.",
                            "Member tours become full several weeks in advance. To register, please visit the calendar and click on the date and time that you wish to attend."
                        ]
                    },
                    {
                        header:"It’s raining or extremely hot outside; where are the animals?",
                        dataRows: [
                            "Humans and animals alike have to shelter themselves from extreme weather condition to stay healthy and happy. The Zoo’s residents use the natural instincts that serve them well in the wild to determine when it’s too hot or cold to be outside.  On these occasions, they often take cover under trees and bushes, or return to their sleeping quarters. If take a closer look, you may be able to spot some animals that have camouflaged themselves so well that you wouldn’t see them at first glance."
                        ]
                    }
                ]
            }
          ]
            ,function(err, result) {
                if (err) {
                    throw err;
                }
                console.log("Initializing pageContent data in Database: " +result);
            }

        );
    };

    var getPageInfo = function (pageToSearch) {
        var deferred = Q.defer();
        var myDb = require('./DBconfig').db;

        myDb.collection('pageContent').findOne (
            {page: pageToSearch},
            {_id:0,data:1},
            {safe: true}
            ,function(err, document) {
                if (err) {
                    deferred.reject(err); // rejects the promise with `er` as the reason
                }
                else {
                    deferred.resolve(document); // fulfills the promise with `data` as the value
                }
            });
        return deferred.promise; // the promise is returned
    };


    var getAnimalInfo = function(type) {

        animalData = [];

        switch (type) {
            case 'Ostrich':          {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["1. It is just not true that the ostrich hides its head in the sand in time of danger. But young birds will conceal themselves by lying down and stretching their necks out along the ground. Mutually beneficial association occurs in the bush environment: four-footed mammals flush food for the ostrich, and in turn depend on the seven foot stretch of the birds’ neck and its keen vision to alert them to danger.",
                            "2. Adults can run faster than some antelope, and month-old chicks have been clocked at 35 miles per hour!",
                            "3. Rock carvings in the Sahara reveal that humans have used the ostrich and its products for at least 10,000 years. Decorated cups made from their strong eggshells have been found in Assyrian tombs dated at 3000 B.C. Ancient Egyptians also used the eggshells for drinking vessels. The size of the ostrich egg is remarkable in two ways: it is the largest bird egg in the world, yet the smallest in relation to the size of the adult bird."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "The ostrich is the largest living bird, weighing up to 300 pounds and standing as tall as eight feet. The ostrich has only two forward-facing toes on each foot, and the long, robust legs are bare of feathers. Females are gray-brown, and males are black with white tail and wing feathers. The wings are used for a great variety of highly developed displays, but not for flying. The head is small, with large eyes and a short, flat bill.",
                            "Their powerful legs make them capable of running up to 40 miles per hour. Because they live in open country, they are very difficult to approach because of their keen eyesight and swiftness."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "Ostriches can be found in sub-Saharan Africa. A non-migratory bird, the ostrich frequents sandy wastes, deserts, and some regions with low brush and thorn trees, feeding on seeds, berries, wild figs, and small animals such as tortoises and other reptiles. The ostrich will, in fact, swallow almost anything – from stones (needed for digestion) to coins and broken glass.",
                            "At the Zoo, the ostriches are fed a commercially-prepared pellet diet, as well as fresh produce."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "Ostriches usually travel in small flocks of five or six, but are also seen in groups of up to 50 members. The ostrich is an extremely wary bird – its height and keen sight make it an excellent sentry, and they can rarely be approached within 100 yards in the open. Males defend their territories in the breeding season by patrolling, displaying to chase out intruders, and by booming. Their call is surprisingly loud and deep, and is accompanied by inflation of the brightly colored neck skin. Their aggressive display consists of repeated flicking of wings, and postures with both wings raised. Breeding males display dramatically to females by laying down, waving their huge spread wings alternately.",
                            "Females may lay up to 20 eggs which are incubated for 42 days by both parents. The male and female share equally in guarding and later incubating the clutch, the female by day, the male by night. Unguarded nests are conspicuous from above and vulnerable to predation by Egyptian vultures, which throw stones at the huge eggs to break through their shells."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "The bird barely survived the 19th century plume trade. Up until the first part of the 20th century, they were found in many parts of southwest Asia and Africa, but are now extinct in essentially all of the Arabian peninsula, north Africa, and the Middle East, and common only in parts of east Africa. In 2005, the Association of Zoos and Aquariums partnered with the Sahara Conservation Fund in order to help conserve the Saharan race of the ostrich; ostriches raised in captivity have been released back to the wild in parts of their historic range in Niger’s Air Mountains.",
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "ou can find our ostriches roaming with other animals in the African Savanna exhibit."
                        ]
                    }
                ]
                break;

            }
            case 'Pelican':          {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["The American White Pelican is one of the largest birds in North America."]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: ["The American White Pelican's overall length is about 50–67 inches, courtesy of the huge beak, which measures 13–14.4 inches in males and 10.4–13 in in females. It has a wingspan of about 95–120 in and weighs between 11 and 20 lb. The plumage is almost entirely bright white, except the black primary and secondary remiges, which are hardly visible except in flight.",
                            "The bill is long and flat, with a large throat sac, and in the breeding season vivid orange like the iris, the bare skin around the eye, and the feet. Apart from the difference in size, males and females look exactly alike."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: ["Each bird eats around than 4 pounds of food a day. Mostly fish and crustaceans such as rainbow trout, common carp, and catfish, but are also known to eat crayfish and amphibians. Their diet at the zoo is fish. You can find them in North and Central America. These pelicans are found near lakes, salt bays, marshes, and beaches."]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "These pelicans are very fond of company, and they usually stay together in large colonies to bring up their families.",
                            "They are graceful fliers, either singly, in flight formations, or soaring on thermals in flocks. They are skilled swimmers, but they do not plunge-dive for prey like their coastal relatives the Brown Pelican. Instead they make shallow dives from the surface of the water or just plunge their heads underwater."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["This species is protected by the Migratory Bird Treaty Act of 1918. However, the species is common enough to qualify as a Species of Least Concern according to the IUCN."
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: ["The American White Pelican are found at Pelican Beach across from the South American Tropical Forest."
                        ]
                    }
                ];
                break;
            }
            case 'Crocodylus':       {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["The American alligator is the official state reptile of three states: Florida, Louisiana, and Mississippi.",
                            "Although alligators have no vocal cords, males bellow loudly to attract mates and warn off other males by sucking air into their lungs and blowing it out in intermittent, deep-toned roars.",
                            "The name alligator is the derived from the Spanish el lagarto which means the lizard."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "The American alligator has a large, slightly rounded body, with thick limbs, a broad head, and a very powerful tail. Adult Alligators generally have dark gray or nearly black color. They may at times appear to be lighter based on detritus or algae in the water covering their skin.",
                            "Juvenile alligators have a striped pattern for camouflage that they lose as they mature. Averaging about 9.5 in in length when newly hatched, alligators reach sexual maturity when they measure about 5–7 ft. Adult male alligators average 11.2 ft in length, while adult females average 8.2 to 9.8 ft.",
                            "Average adult body weights are reported from 270 to 800 lb (120 to 360 kg), with a few exceptionally large and old males exceeding 14 ft and 1,000 pounds."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "American alligators are mostly found in the Southeastern United States, from Great Dismal Swamp in North Carolina south to Everglades National Park in Florida and west to the southern tip of Texas. They are found in the U.S. states of North Carolina, South Carolina, Georgia, Florida, Louisiana, Alabama, Mississippi, Arkansas, Texas, and Oklahoma. Florida and Louisiana currently have the largest population of alligators. Florida has an estimated population of 1 to 1.5 million while Louisiana has an estimated population of 1.5 million.",
                            "Alligators live in wetlands and this is the vital habitat that holds the key to their continued long-term survival. Alligators depend on the wetlands, and in some ways the wetlands depend on them. As apex predators, they help control the population of rodents and other animals that might overtax the marshland vegetation",
                            "Their diet consists of fish, birds, turtles, snakes, mammals, and amphibians."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "Large male alligators are solitary, territorial animals. The largest males and females will defend prime territory. Smaller alligators can often be found in large numbers in close proximity to each other, because smaller alligators have a higher tolerance of other alligators within a similar size class.",
                            "During breeding season, the female builds a nest of vegetation, sticks, leaves, and mud in a sheltered spot in or near the water."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "Historically, alligators were depleted from many parts of their range as a result of market hunting and loss of habitat, and 30 years ago many people believed their population would never recover. In 1967, the alligator was listed as an endangered species (under a law that preceded the Endangered Species Act of 1973), meaning it was considered in danger of extinction throughout all or a significant portion of its range.",
                            "A combined effort by the United States Fish and Wildlife Service, state wildlife agencies in the South, and the creation of large, commercial alligator farms were instrumental in aiding the American alligator's recovery. The Endangered Species Act outlawed alligator hunting, and in 1987 the Fish and Wildlife Service pronounced the American alligator fully recovered and consequently removed the animal from the list of endangered species."
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: ["You can see our American alligator in the ARC window in the Children's Zoo."
                        ]
                    }
                ]
                break;
            }
            case 'Elephant':         {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Ganu':             {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Gray wolf':        {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Gorilla':          {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["The closest relatives of gorillas are chimpanzees and humans, all of whom diverged from a common ancestor about 7 million years ago.",
                            "Gorillas make separate nests for daytime use and night-time use. "]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "Gorillas are the largest of the great apes. With an extremely stocky body, gorillas can weigh up to 400 pounds. Silverbacks, the mature male of each gorilla group, have silver hair on their backs, and can stand up to six feet tall with an arm span of eight feet.",
                            "Gorilla faces are bare, with a short muzzle, large nostrils and small eyes and ears that lie close to the head. Each gorilla has a unique nose print, just like humans have different fingerprints. Their hands and feet are broad and strong, and they move about on all fours in a “knuckle-walk.” Gorillas and chimpanzees are the only animals to use the backs of their fingers like feet."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "The lowland gorilla is found primarily in lowland tropical forests, particularly where there is dense ground-level herbaceous growth, and in swamp forests. They are limited to small areas in Zaire, Gabon, Equatorial Guinea, Cameroon, and the Central African Republic.",
                            "In the wild, gorillas feed on fruit, leaves, grasses and insects. In Zoos their diet consists of much of the same food items such as fruit, vegetables and leaves."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "Despite their great size, gorillas are generally shy and peaceful, and live in groups, called troops, of five to 30 animals, with an average group size of about 11. Active during the day, gorillas spend most of their time looking for food. The silverback, the leader of the group, is more of a benevolent dictator, and his authority is rarely challenged. The group may have several “blackback” males, and twice as many females as males.",
                            "Gorillas sleep in trees, usually a different one each night. The females and youngsters will build comfortable nests of leaves and branches, while the silverback will settle in at the foot of the tree to protect his family.",
                            "Females start to breed around 10 years of age, while males do not start to breed before 15-20 years, due to competition."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "Gorillas are critically endangered. Currently the gorilla is considered to have three subspecies: the western lowland gorilla (Gorilla gorilla gorilla), the eastern lowland gorilla (Gorilla gorilla graueri) and the mountain gorilla (Gorilla gorilla beringei). Presumably, the species was once more widely distributed, becoming differentiated when localized populations were separated from each other",
                            "populations are seriously endangered by increasing human populations that cause direct predation and habitat destruction."
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "The Zoo has one adult male silverback, four females and an infant male western lowland gorilla living at the Jones Family Gorilla Preserve, a naturalistic exhibit featuring climbing rocks, tall trees and grass. The exhibit, with eight viewing areas, including a window viewing area eye-level to the gorillas, allows ample opportunities to observe the group partaking in daily activities, such as playing, foraging and resting."
                        ]
                    },
                ]
                break;
            }
            case 'Hippopotamus':     {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["The name hippopotamus means “river horse.” When hippos open their mouths wide, it is not a yawn, but is actually a threat gesture. Hippos can run as fast as a human, and have killed more people in Africa than any other wild animal. Heavier than water, hippos walk on river bottoms. Hippos play host to several animals. Fish sometimes graze on algae growing on the hippo’s skin. Turtles and young crocodiles bask on their backs. Birds, including cattle egrets and storks, use them as a perch for fishing."]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "The Hippopotamus is a huge, heavy animal with short legs and an enormous head with an extremely broad muzzle and a short neck. The body is barrel shaped and the belly hangs low, just above the ground. As the third biggest land animal — smaller but heavier than a white rhino — hippos weigh 4,000 pounds and are 12 feet in length and up to five feet tall at the shoulder. They have practically no hair, and their smooth skin is quite delicate. It exudes a red, oily liquid that keeps the skin moist and protected when the animal is out of the water. The mouth itself measures two feet across, with long tusk-like incisors and canines that grow continuously.",
                            "Hippos are both aquatic and terrestrial. Their ears and nostrils, which are located on top of the head, close automatically when the animal is under water."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "Nile hippopotamuses inhabit river areas with deep water and adjacent reed beds and grasslands of Africa, south of the Sahara and along the Nile. Their range once included Asia and large parts of Europe.",
                            "Distantly related to the pig, the Nile hippopotamus is a hoofed vegetarian, feeding on grass, fallen fruit, and occasionally on cultivated crops such as sugar cane or corn. At the Zoo, the hippos are fed a diet of alfalfa, horse chow and vegetables."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "Hippos spend most of the day in the water, but forage for food on land during the night, running to the water for safety if alarmed. Their feces are deposited in the water which nurtures abundant growth of the tiny plankton that feed the fish. The fish, in turn, are fed upon by humans or other carnivorous animals such as otters and crocodiles. Young hippos are prey to lions and crocodiles.",
                            "Bulls have a loud roar that can be heard over a great distance. They also have a cattle-like bellow accompanied by a wide open mouth that is used as a threat, or a horse-like neighing when alarmed.",
                            "Adult males compete for control of a herd and the territory it occupies. Fights between bulls are vicious and may last several hours. Their chief weapons are the large lower canines. The hippo herd is basically a matriarchy consisting of 10-30 mothers and their young. Older high-ranking bulls form a bachelor group outside the nursery and young males live in outlying areas. Generally, one calf is born after a gestation period of 227-250 days. Mating and birth usually occur underwater, and the calf can nurse underwater. The calf can swim before it can walk."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["Hippos are hunted extensively for their highly prized flesh, their abundance of fat, the superior quality of their tusk ivory, and for their hide. They are also hunted for sport and killed by farmers for the extensive damage they do to crops. It has become rare in much of its range, but there are still large populations in the upper Nile Valley of East Africa."]
                    },
                    {
                        header:"Other",
                        dataRows: ["You can see our male hippo accross from the big cats, next to the Black Rhino exhibit."]
                    },
                ]
                break;
            }
            case 'Iguana':           {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Komodo dragon':    {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["Komodo dragons are the world’s largest lizard, males can weigh up to 200 pounds and reach 9-feet long! It was once thought that Komodos killed their prey with bacteria inside their mouths, but they actually use complex venom that causes blood loss and low blood pressure",
                            "Once a Komodo bites its prey and administers the venom, it will follow the prey and wait for it to die. ",
                            "Komodos occasionally eat up to 80 percent of their body weight in one meal. When threatened, Komodos may throw up food to reduce their weight in order to flee. ",
                            "Cannibalism is prevalent and young dragons live in trees and sometimes roll in feces to reduce the risk of being eaten by an adult.",
                            "Although they are listed as vulnerable, a tourist trade has developed and people travel long distances to see these magnificent lizards. Hopefully the tourist trade and habitat preservation will help protect them in the future."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: ["Komodo dragons have a large body with a strong tail and powerful limbs. They are covered in thick, rough scales. They use their long tongue like a snake to help them smell their surroundings. They can smell rotting carrion from 5 miles away."]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: ["Komodo dragons live in open grasslands and lower forests on volcanic islands in Indonesia."]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: ["During mating season, adult males engage in upright combat, frequently drawing blood and throwing each other to the ground. The loser runs away or remains motionless but remains unaffected by the deadly venom."]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["Vulnerable IUCN 1996."]
                    },
                    {
                        header:"Other",
                        dataRows: ["Komodo dragons are one of only three venomous lizards in the world (the Gila monster and Mexican bearded lizard are the other two). The Komodo's venom makes up for the fact that it has a relatively weak bite force, making it easier to wound and release, than hold onto a struggling victim."]
                    },
                ]
                break;
            }
            case 'Leopard':          {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Lion':           	 {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["At a kill, male lions eat first, then females, then the cubs eat last. Cubs have a high mortality rate and less than half survive their first year.",
                            "Hunting takes place mostly at night, and digesting large amounts of meat protein involves effort, so lions often spend as many as 20 hours a day resting."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "Male lions weigh between 330 and 550 lbs., while female lions weigh from 265 to 395 lbs, with a head to body length of 4.6 to 6.3 feet and a tail length around three feet. The lion coat is light tawny yellow or buff with a white abdomen. The male has a mane that varies in color from light tawny to dark brown to black and is protection during a fight. Its color provides excellent camouflage in grassy plains and scrub country.",
                            "Lions have 9 distinct vocalizations; the roar can be heard at a distance of 5 miles and is usually heard at sundown, after a kill and after eating. The remaining sounds have not been interpreted, but appear to having meaning within the pride."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "African lions currently range in east, south and central Africa, in grassy plains, savannahs, open woodlands and scrub country. Their historic range was much wider, and some still persist in India.",
                            "In the wild, lions eat wildebeests, zebras, buffalo, gazelles, wart hogs and other ungulates that may be in its area. If large game is scarce, they will eat small game and even rodents. At the Zoo, the lions are fed a diet of fortified horsemeat, chicken and rabbits."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: ["In the wild, lions are very social animals, living and hunting in groups. The lion is the only large cat that lives in a group, or pride, which may number 5 to 35 members.",
                            "Female lions do most of the hunting, and their method varies depending on how many are involved in the hunt. A single lion will stalk and then leap upon the prey and if the chase is more than 100 yards, it will usually give up. Two lions will approach prey from opposite directions, or the hunting-age animals in the pride may surround the prey. The primary role of the males is breeding and protection of the pride.",
                            "Females breed every other year, but if a litter is lost, she may breed within a few days. A litter of 1 to 4 cubs is born after a gestation period of about 110 days. A female cub may remain with the pride for her entire life, but males are driven off by the time they are three. Cubs have rosette markings that fade as they mature."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["The lion is listed as Vulnerable, but its population is rapidly declining due to loss of habitat, hunting and poisoning by agriculture and livestock interests. By the end of this century, lions will probably exist only in parks and preserves."]
                    },
                    {
                        header:"Other",
                        dataRows: ["You can see our lions in the big cat grottos at the Lion House."]
                    },
                ]
                break;
            }
            case 'Night heron':   	 {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Orangutan':        {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Peacock':          {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Rhinoceros':       {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["The scientific name Rhinoceros unicornis is from Greek and Latin, and means, roughly, “one horn upon the nose.”",
                            "Rhinos have poor vision, and are extremely near-sighted, making them very dangerous and unpredictable and likely to charge unfamiliar sounds and smells.",
                            "Like horses, rhinos run and walk on their toes, and can run a surprising 28 to 35 miles per hour for short distances."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "The greater-one horned rhinoceros is the largest Asian rhino, and is also known as an Indian rhino. It is the largest land mammal after elephants, along with the African white rhino. Males weigh up to 5,000 pounds and females up to 3,500 pounds. Indian rhinos are characterized by skin folds that resemble armor plating and have wart-like bumps that cover the shoulder and upper leg region. They have a single blunt, somewhat stubby horn that sits on a bony knob and is composed of hardened, compressed keratin (hair-like) fibers.",
                            "Indian rhinos have a prehensile (grasping) upper lip that is flexible and is used to grasp bunches of grass in a browsing motion or can be tucked out of the way for grazing short grasses. Their excellent sense of smell and hearing gives rhinos information about their surroundings and help them detect danger."
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "Indian rhinos range in the floodplains of large rivers, swampy and tall grass areas, reed beds, grasslands and wooded meadows of Nepal and Northeastern India.",
                            "They are herbivores and are grazers. In the wild, they primarily forage on tall, reedy grasses, but also eat short species of small amounts of aquatic plants, bushes, tree twigs and sprouts. At the Zoo, the Indian rhino is fed a diet of grain, hay, fruits, vegetables and acacia."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "The Indian rhino is usually solitary except for females with young. However, they’re territorial when it comes to sleeping places. Generally a short grunting charge is enough to settle a conflict but fights do occur and serious wounds can be inflicted by their sharp lower incisors.",
                            "Rhinos feed in open areas during the early morning and early evening hours. Midday to late afternoon they rest and wallow in muddy water. The buoyancy of the water makes it easier to support their huge weight and also protects them from heat, sunburn, parasites, and bloodsucking flies and keeps their skin supple. Late in the evening, after feeding, adults rest lying down.",
                            "Urine spraying of plants, foot-dragging tracks and dung heaps are important forms of communication. Rhinos mark their paths by secretions from a gland located above and behind the ball of their foot. Communal dung heaps near wallows and on public paths become enormous and act as an updated directory of animals in the area.",
                            "A calf is born after a 16-month gestation period, and will have all the skin-folds of an adult and a smooth plate on its nose where the horn will grow. Newborns gain 4 to 6 pounds daily and remain with their mother until shortly before the next birth"
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["Greater one-horned rhinos are holding their own through intensive conservation and management efforts in Nepal and India. However, the IUCN lists them as 'Vulnerable.' Estimations by the World Wildlife Fund number them at around 2,500. Poaching, poisoning and other problems still threaten the rhino. In Taiwan, rhino horn sells for $9,000 a pound and is the most sought after horn in the world by Asians. Though the use of substitutes for rhino horn is advocated by doctors, pharmacists and conservationists, populations of Chinese in overseas countries insist on using rhino horn as opposed to a substitute material such as water buffalo horn."]
                    },
                    {
                        header:"Other",
                        dataRows: ["All animals at the Zoo receive regular 'behavioral enrichment' - a fancy word for toys and stimuli - and regular care from the veterinary staff. Gauhati wears down his horn on his own by rubbing it on the rocks in his enclosure but sometimes he needs help keeping it even. Our keepers and vet staff work together with Gauhati to file and trim his horn to keep it growing and healthy."]
                    }
                ]
                break;
            }
            case 'Russian tortoise': {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["The desert tortoise is California's state reptile, and practices lithophagy – swallowing rocks to aid in digestion."]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: ["These tortoises weigh from 10 to 20 pounds with a carapace (upper shell) length of up to 15 inches. The shell is high domed with prominent growth lines on shields of both carapace and plastron (lower) sections. The top is brown or horn-colored; bottom is yellowed. The limbs are stocky; and when drawn in completely close the opening of the shell. The head is fairly large in proportion to the body. The tail is short, though longer in males. Foot claws are longer and sharper in adults. The gular (throat) shields are longer on the male, with a scent gland lump on each side of the lower jaw."]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "Desert tortoises are found in the desert regions in the southwestern United States to northwestern Mexico. They are excellent burrowers and hibernate in communal burrows.",
                            "In the wild, these herbivores eat wild grass, flowers, cactus pads and fruit. At the Zoo, they are fed a variety of leafy greens and fruits and vegetables, as well as alfalfa hay."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: ["Desert tortoises engage in an elaborate courtship. The males have head bobbing and ramming matches. Males can have harems of 10 to 60 females. Females are able to store sperm for up to four years. In June, females lay 6 to13 elongated eggs in a ground hole. After incubating for 3 to 4 months, two-inch hatchlings hatch out. Parents exhibit no parental care."]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["Desert tortoises are threatened. In the wild, many tortoises empty their storage and anal bladder when threatened or picked up and dehydrate before reaching the next watering hole. Habitat destruction, pet trade, automobiles, and respiratory disease have reduced their numbers greatly. The respiratory disease was introduced into wild populations when people released infected desert tortoises they had as pets in an attempt to help re-establish the population. Unfortunately, it did more damage than good."]
                    },
                    {
                        header:"Other",
                        dataRows: ["The Zoo's desert tortoises are part of the collection of educational outreach animals that are housed at the Koret Animal Resource Center. The tortoises are brought to classrooms as part of the ZooMobile program, and can be seen by the public on the Nature Trail in the Children's Zoo between Memorial Day and Labor Day."]
                    }
                ]
                break;
            }
            case 'Sand cat':         {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: [
                            "","",""
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: [
                            "","",""
                        ]
                    },
                ]
                break;
            }
            case 'Sloth':            {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["Southern two-toed sloths spend most of their time high up in the forest canopy, only coming to the ground once a week to defecate.",
                            "Their diet of vegetation takes a long time to digest and food can remain in the digestive tract for up to a month.",
                            "Because they spend most of their time hanging in trees, their fur grows in the opposite direction of other mammals and has special grooves in it which hosts algae. This algae serves as camouflage."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: ["Southern two-toed sloths are between 21 – 29 inches in length and weigh between 8 – 17 pounds. They have four long limbs with two toes on their front feet and three toes on their back feet. Their teeth grow continuously and are worn down by their diet of leaves."]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: ["Southern two-toed sloths are found in lowland and montane tropical forest canopy. They feed on leaves, twigs, berries, fruits and the occasional insect or small animal."]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: ["Southern two-toed sloths are primarily nocturnal and solitary animals. Females reach sexual maturity at three years and males between four and five years. They have a gestation period of six months and give birth to one offspring, who will cling to its mother’s belly for five weeks and remain with its mother for several months. Southern two-toed sloths can live up to 20 years in the wild and 30 – 40 years in captivity."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["IUCN – Least Concern"]
                    }
                ]
                break;
            }
            case 'Zebra':            {
                animalData = [
                    {
                        header:"Fascinating Facts",
                        dataRows: ["Zebras, wild asses and Mongolian wild horses are found today only in Africa and Asia. Other wild populations are feral animals, horses that were once domesticated but escaped or were set free.",
                            "When alarmed, zebras will announce danger with a barking alarm call that sounds like a hoarse “kua-kua” ending in a horse-like whinney.",
                            "Zebras are swift runners and can travel up to 40 miles per hour. In defense or competition for mates, they use their hind feet to kick, and can strike less skillfully with their forefeet."
                        ]
                    },
                    {
                        header:"Physical Characteristics",
                        dataRows: ["The zebra looks very much like a horse, although the mane is short and stands upright, and the body is stockier and relatively short-legged. The distinctive black and white stripes make the zebra difficult to see in the light and shadow patterns of the grasslands. Smell, hearing and vision are keen, and zebras are swift runners."]
                    },
                    {
                        header:"Habitat/Diet",
                        dataRows: ["Grant’s zebra can be found in the grasslands, savannas and open country of Africa, including Southern Sudan and Ethiopia, down to central Angola and eastern South Africa.",
                            "Grazers, zebras prefer tall coarse grasses which, when removed, expose the shorter, more succulent blades preferred by wildebeest and gazelle. At the Zoo, the zebras are fed a diet of hay, grain and browse."
                        ]
                    },
                    {
                        header:"Social Behavior",
                        dataRows: ["Within each herd, cohesive family sub-groups are composed of one stallion, several mares and young. Mares normally stay in the same family group for their lifetime. Often a group of 10 or 12 share a home range with gnus (wildebeest) and ostrich. Surplus males may form bachelor herds; when these zebras reach their fifth or six year, they try to “kidnap” females to form an independent family. Lions are the most successful predators, preying chiefly on the young, ill or aging. Stallions may resist invaders with kicks and butts, but commonly direct these efforts to challenging males.",
                            "Stallions will fight for control of a harem of mares. No permanent bond exists between any two adult animals. After a gestation period of one year, one offspring may be born at any time during the year and weigh from 66-77 lbs, and is striped brown and cream, and like a horse foal, can stand and nurse soon after birth."
                        ]
                    },
                    {
                        header:"Status In The Wild",
                        dataRows: ["Grant’s zebras are also known as plains zebra or common zebra. Another subspecies, Equus quagga quagga is extinct. Other subspecies are not listed as endangered nor threatened."
                        ]
                    },
                    {
                        header:"Other",
                        dataRows: ["You can find our zebra roaming with other animals in the Leanne B. Roberts African Savanna exhibit."]
                    }
                ]
                break;
            }
            default : {
                animalData = [
                    {
                        header:"",
                        dataRows: ["",
                            "",
                            ""
                        ]
                    }
                ]
                break;
            }
        }
        return animalData;
    };

    return {
        initData:initData,
        getPageInfo:getPageInfo,
        getAnimalInfo:getAnimalInfo
    }
}();

module.exports = DBInfoManager;