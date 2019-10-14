## Cafe Munk

Velkommen til vores projekt "Cafe Munk". 

Nedenfor vil du finde en beskrivelse af vores projekt.
Dette er efterfulgt af en kravspecifikation og til sidst et klassediagram.

**Beskrivelse af projekt Cafe Munk**

**Vores ide:** <br>
I forbindelse med vores BIS projekt, fandt vi en indisk inspireret restaurant ved Nørreport station. Restauranten havde på forhånd ikke en hjemmeside. Vi fik på en gang mulighed for at være kreative med hjemmesidens udformning samt at afprøve vores programmeringsevner i form af et bordreservationssystem. Vi vurderer, at projektet indeholder materiale nok til at arbejde med i både Business Information System og Programmering.
Cafe-Munk er en restaurant med mange forskellige tiltag - Restaurant/aften bar, take-away og catering. Restauranten havde en forholdsvis inaktivt Facebook- og Instagram-profil, der indeholdt begrænset information om restauranten samt en række billeder af maden der serveres.

Vores ide for Cafe-Munk var at skabe et administrativt system integreret i den hjemmeside vi laver i BIS. Hjemmesidens primære funktion set fra et programmeringssynspunkt vil være at kunder kan reservere et bord en given dag og tidspunkt for et antal gæster. Vi mener, at hjemmesiden potentielt giver restauranten mulighed for at give kunder større kendskab til restauranten og bedre adgang til information.

**Programmet udefra og ind:** <br>
Vores program består af en forside med en navigations bar som indeholder følgende punkter:
    
    1. Menu <br>
    2. Take Away <br>
    3. Catering <br>
    4. Kontakt <br>
    
Derudover skal hjemmesiden have en informationsboks på forsiden med “Om os” samt bordreservations system. Vi forventer at dette komme til at ligge som et banner i venstre side på forsiden. Se bilag for eksempel.
Hovedpointen i dette program er bordreservations system og vi vil herfra fokusere på denne del af programmet.

**Reservation** <br>
Som nævnt ovenfor har vi en informationsboks med en kort beskrivelse af restauranten, “Om os”, og et bordreservations program herunder i samme informationsboks. I toppen af vores program vil der være en string hvor der står “Ved booking af flere end 8 personer: Venligst send en mail til cafe.munk@yahoo.dk eller ring til os på 33 11 83 83”. Herefter vil man skulle vælge antallet af personer i ens selskab fra 1-8. Når man har angivet hvor mange personer man er, skal man vælge en dato i en kalender. I tilfælde af fuld booking vil dagene være “greyed out” og ikke kunne vælges. Efter man har valgt dato, skal man vælge et tidspunkt i et skema. Tidspunktet vil ligesom kalenderen være “greyed out” i tilfælde af fuld booking. Når man har lavet sine reservationsvalg, vil man som kunde blive bedt om at udfylde følgende kundeinformation: “Fornavn”, “Efternavn”, “E-mail”, “Telefon” og “Særlige ønsker”. Efter man har udfyldt informationen, vil man skulle trykke på en knap hvor der står “Book”. Kunden vil herefter få en pop-up der fortæller kunden at en bekræftelses vil blive sendt til deres mail. Efter den førnævnte pop-up lukkes vil kunden blive sendt til menuen. Derudover vil der blive sendt en reservationsbekræftelse pr. mail.

**Kravspecifikation**
<br>
**Aktører:** <br>
    a. Kunden <br>
    b. Cafe Munk <br>
    
**Liste over krav for kunden:** <br>
    a. Skal kunne vælge en antal personer for en reservation mellem 1-8. <br>
    b. Skal kunne vælge en dato for en reservation i en kalender/skema. <br>
    c. Skal kunne vælge et tidspunkt for reservation på den valgte dato. <br>
    d. Skal kunne tilføje en kommentar til reservationen. <br>
    e. Skal oplyse information om sig selv så Cafe Munk kan komme i kontakt med kunden. Navn, email og telefonnummer. <br>
    f. Skal kunne kontakte Cafe Munk på anden måde i tilfælde af reservation over 8 personer. <br>
    g. Skal kunne få tilsendt en bekræftelse på reservationen via e-mail. <br>
    h. Skal kunne kontakte Cafe Munk for at lave ændringer/slette en reservation. <br>

**Liste over krav Cafe Munk:** <br>
    a. Skal kunne få et overblik over reservationer og specifikationer ved dem (navn, email, telefonnummer og kommentar). <br>
    b. Skal kunne lave en reservation selv i tilfælde af en kunde ringer for at lave en reservation. <br>
    c. Skal kunne lave en reservation selv i tilfælde af en kunde vil lave en reservation over 8 personer. <br>
    d. Sende en bekræftelsesmail til kunden efter foretaget reservation. <br> 
    e. Skal kunne se information om kunden så Cafe Munk kan ringe og snakke med dem om eventuelle kommentarer eller andet. <br> 

**Klassediagram** 

![Alt Text](pictures/class_diagram.jpg?raw=true "Cafe Munk class diagram")
