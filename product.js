const products = {
    "1": {
      titel: "Trui Keily | Peach",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Sweater_Keily_Peach_PI104_Trouser_Averi_Botanical_Stripe_PI34_3000x.jpg?v=1724774583",
      beschrijving: "De trui in de afbeelding is een stijlvolle en elegante top in een zachte perzikkleur, ideaal voor zowel casual als iets gekledere gelegenheden. De trui heeft een subtiel visgraatpatroon dat een verfijnde textuur toevoegt. Het ontwerp heeft lange mouwen met licht gepofte schouders, wat een vleugje vintage charme geeft. De mouwen eindigen met gesmokte boorden, die niet alleen comfortabel zijn maar ook zorgen voor een flatterende pasvorm. De ronde halslijn is eenvoudig en klassiek, waardoor de trui gemakkelijk te combineren is met diverse onderstukken.",
      prijs: "€44,95"
    },
    "2": {
      titel: "Jacket Zoya | Black / white print ",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Jacket_Zoya_Black_White_Print_PH41_3000x.jpg?v=1723047435",
      beschrijving: "Deze jas heeft een moderne uitstraling met een opvallende zwart-witte print die een vleugje karakter toevoegt aan elke outfit. De jas heeft een ritssluiting aan de voorkant, wat het een veelzijdig en praktisch kledingstuk maakt. De iets losse pasvorm zorgt voor een comfortabele look, terwijl de elastische boorden aan de mouwen een subtiel ballon-effect creëren. Door de grafische, bijna ikat-achtige print is deze jas perfect om een statement te maken en eenvoudig te combineren met zowel casual als formele outfits. Een ideale keuze voor wie houdt van tijdloze stijl met een artistieke twist.",
      prijs: "€74,95"
    },
    "3": {
      titel: "Broek Averi | Botanical Stripe ",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/autumn-2-2_0f9d5853-23ab-4254-9afb-944883fc1ab3_3000x.jpg?v=1724774669",
      beschrijving: "Deze broek heeft een elegante, tijdloze uitstraling met een moderne twist. Het ontwerp is uitgevoerd in een diepzwarte kleur, wat de broek veelzijdig en makkelijk te combineren maakt met verschillende stijlen en kleuren. De broek heeft een hoge taille en een flatterende, aansluitende pasvorm rond de heupen, die geleidelijk overgaat in een licht uitlopende pijp. Dit silhouet geeft de broek een verfijnde, vrouwelijke look en creëert optisch langere benen. De minimalistische details, zoals de onopvallende tailleband en subtiele knoopsluiting, dragen bij aan de strakke en stijlvolle uitstraling van het geheel. Perfect voor zowel zakelijke gelegenheden als een avondje uit.",
      prijs: "€49,95"
    },
    "4": {
      titel: "Jacket Chels | Multi color",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Jacket_Chels_Multi_Color_PA44_3000x.jpg?v=1708525163",
      beschrijving: "Deze jas is een opvallend en kleurrijk kledingstuk dat elke outfit direct een levendige uitstraling geeft. Het ontwerp kenmerkt zich door een speelse mix van kleuren en patronen, wat zorgt voor een unieke, bohemian vibe. De jas heeft een comfortabele pasvorm en valt iets losjes, waardoor hij ideaal is voor een gelaagde look in het najaar. Met een klassieke kraag en knoopsluiting aan de voorkant is hij veelzijdig genoeg om zowel open als dicht gedragen te worden. De jas kan gecombineerd worden met neutrale items om de kleuren te laten opvallen, of juist met andere prints voor een gedurfde, eclectische stijl. Perfect voor wie houdt van statement pieces!",
      prijs: "€79,95"
    },
    "5": {
      titel: "Blouse Kallie | Tiber River print ",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Blouse_Kallie_Tiber_River_Print_PI05_Trouser_Nathalia_Purple_PI36.1_2_3000x.jpg?v=1724771002",
      beschrijving: "De blouse heeft een speelse en levendige uitstraling, met een uniek Tiber River-printpatroon dat bestaat uit een mix van organische vormen en kleuren. De basis van de blouse is een lichte kleur, waarop de abstracte prints in verschillende tinten blauw en groen contrasteren. Het ontwerp is luchtig en geschikt voor zowel casual als semi-formele gelegenheden. De blouse heeft een elegante snit met lange mouwen en een comfortabele pasvorm, wat zorgt voor een flatterende look. De kraag en knopen aan de voorkant geven het een klassieke uitstraling, terwijl de stof waarschijnlijk licht en ademend is, perfect voor warmer weer.",
      prijs: "€49,95"
    },
    "6": {
      titel: "Top Lindi | Black / white print ",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Top_Lindi_Black_White_Print_PH06_Skirt_Theresa_Black_PH100_2_3000x.jpg?v=1723044815",
      beschrijving: "De Top Lindi heeft een moderne en verfijnde uitstraling, met een zwart-wit print die bestaat uit abstracte vormen en lijnen. De top heeft een elegante snit met korte mouwen en een ronde halslijn, wat zorgt voor een comfortabele en flatterende pasvorm. De lichte stof valt soepel, waardoor de top ideaal is voor zowel casual als meer formele gelegenheden. De monochrome kleurencombinatie maakt het eenvoudig om de top te combineren met verschillende onderstukken, van jeans tot een stijlvolle rok.",
      prijs: "€34,95"
    },
    "7": {
      titel: "Jurk Rayne | Green Pink Aztec ",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Dress_Rayne_Green_Pink_Aztec_PH22_3000x.jpg?v=1723045897",
      beschrijving: "De Jurk Rayne heeft een levendige en opvallende uitstraling, met een kleurrijke Aztekenprint in verschillende tinten groen en roze. De jurk heeft een vloeiende snit die de figuur mooi accentueert, met een tailleband die zorgt voor extra vorm. De lange mouwen en de V-hals geven het een vrouwelijke touch, terwijl de stof waarschijnlijk licht en ademend is, perfect voor warmer weer. Deze jurk is veelzijdig en kan gedragen worden voor zowel casual uitjes als feestelijke gelegenheden, en voegt een speelse flair toe aan elke outfit.",
      prijs: "€69,95"
    },
    "8": {
      titel: "Jurk Baylor | Black / white print ",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Dress_Baylor_Black_White_Print_PH25_3000x.jpg?v=1723045634",
      beschrijving: "De Jurk Baylor heeft een elegante en tijdloze uitstraling, met een gedetailleerd zwart-wit printpatroon dat een gevoel van sophistication uitstraalt. De jurk heeft een getailleerde pasvorm die de taille accentueert en een vloeiende rok die beweging en elegantie toevoegt. Met een klassieke ronde hals en zonder mouwen, is deze jurk perfect voor zowel dagelijkse activiteiten als meer formele evenementen. De monochrome kleuren zorgen voor een veelzijdige look die gemakkelijk kan worden gestyled met verschillende accessoires.",
      prijs: "€79,95"
    },
    "9": {
      titel: "Tas Chellie | Camel",
      afbeelding: "https://www.loftymanner.com/cdn/shop/files/Blouse_Kallie_Tiber_River_Print_PI05_Trouser_Nathalia_Purple_PI36.1_fbc2d108-9262-429b-85c0-73d12ab6d288_3000x.jpg?v=1724774565",
      beschrijving: "De tas heeft een moderne en trendy uitstraling, met een strakke vormgeving en een opvallende kleur. De tas is uitgevoerd in een diep paarse tint, wat een luxe en stijlvolle indruk maakt. Het ontwerp is minimalistisch, met een enkele schouderriem die zorgt voor comfort en functionaliteit. De tas heeft voldoende ruimte voor dagelijkse benodigdheden en kan gemakkelijk worden gecombineerd met verschillende outfits. De afwerking en details zijn zorgvuldig ontworpen, wat bijdraagt aan de overall elegantie van de tas.",
      prijs: "€49,95"
    },
    "aankoop":{
        titel: "Bedankt voor uw aankoop!",
        afbeelding: "https://ih1.redbubble.net/image.5537017383.0359/st,small,507x507-pad,600x600,f8f8f8.jpg",
        beschrijving: "Hartelijk dank voor uw aankoop bij ons! We zijn verheugd dat u gekozen heeft voor ons kledingstuk en hopen dat het een geweldige aanvulling zal zijn op uw garderobe. Bij Luus streven we ernaar om stijlvolle en kwalitatieve producten te bieden, en uw tevredenheid is voor ons van het grootste belang. Mocht u vragen hebben over uw bestelling of hulp nodig hebben, aarzel dan niet om contact met ons op te nemen. Geniet van uw nieuwe outfit en we hopen u binnenkort weer te zien! Met vriendelijke groet, Luus",
        prijs: ""
    }
  };
  
  function getProductID() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }
  function getSale() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("sale");
  }
  
  function loadProduct() {
    const productID = getProductID();
    const sale = getSale();
    const product = products[productID];
  
    if (product) {
      document.getElementById("productTitel").innerText = product.titel;
      document.getElementById("productAfbeelding").src = product.afbeelding;
      document.getElementById("productAfbeelding").alt = product.titel;
      document.getElementById("productBeschrijving").innerText = product.beschrijving;
      document.getElementById("productPrijs").innerText = product.prijs;
      if(sale === "1"){
        document.getElementById("productPrijs").style.color = "red";
      }
      if (productID === "aankoop") {
        document.querySelector(".kledingMaat").style.display = "none";  // Hides radio buttons
        document.querySelector(".button").style.display = "none";  // Hides "Koop Nu!" button
    }
    } else {
      document.getElementById("productTitel").innerText = "Product Not Found";
      document.getElementById("productAfbeelding").style.display = "none";
      document.getElementById("productBeschrijving").innerText = "The product you are looking for does not exist.";
      document.getElementById("productPrijs").innerText = "";
    }
  }
  window.onload = loadProduct;
  