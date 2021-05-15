import React from "react";
import "../../App.css";
import IslandHeroSection from "../IslandHeroSection";
import Item from "../Item";
import ScrollToTopBtn from "../ScrollToTopBtn";

const h1Style = {
  fontFamily: "Alessa",
  margin: "50px",
  fontSize: "80px",
};

export default function Oahu() {
  return (
    <>
      <IslandHeroSection
        island="oahu"
        src=""
        islandLabel="Oahu"
        islandShortDesc="Most Popular Island!"
      />
      <div className="pre-headline" id="visit"></div>
      <h1 style={h1Style}>Visit</h1>

      <Item
        imageUrl="images/diamond.jpg"
        header="Diamont Head Crater"
        text="It only takes a short drive or bus ride to get to Diamond Head Crater from Waikiki. This moderately challenging trail includes two sets of stairs, totaling 175 steps, as well as dark, underground tunnels and old military bunkers that require a flashlight. The stunning views that greet you at the top of Diamond Head are well worth the effort. If you plan to hike on Saturday morning, don’t forget to stop by the Kapiolani Community College Farmer’s Market—Oahu’s premier farmers market showcasing locally grown food and produce—across the street from the monument entrance on Monsarrat Avenue. In fact, there are a few notable cafes and restaurants lining Monsarrat that will make for a great pre- or post-Diamond Head meal."
      />
      <Item
        imageUrl="images/hanauma.jpg"
        header="Hanauma Bay"
        text="Merely a 30-minute drive from Honolulu (when the traffic is good!), this stunning bay feels like a world away from the bustle of the city, which cannot even be seen from the beach as the large bay is surrounded by the lush green, gently fluted hills of Koko Head. The bay is secluded and tranquil in the early morning, but during the day becomes a very popular place for locals and visitors.  Before changes that occurred in 2020 (see below) due to the COVID-19 pandemic, thousands of people previously flocked to the bay each day to experience the excellent snorkeling in the area.  400 species of fish are known to inhabit the bay, and it is also known for its abundance of green sea turtles or honus."
      />
      <Item
        imageUrl="images/ridge.jpg"
        header="Kuliouou Ridge Trail"
        text="The Kuliouou Ridge Trail is about 4.4 miles round trip and takes a good three to four hours to complete. Less then half an hour from Waikiki, the trailhead is located at the end of residential Kalaau Place. It is moderate in its challenge and features some stairs that make the climb easier. It is a pretty rocky terrain on steep inclines with many local varieties of plants and trees. The trail travels through several different environments showcasing the diversity of the Oahu landscape.The trail continues through an interesting archway of banyan branches, to an even more breathtaking view from the ridge. Stairs make it easier to reach the final plateau where you will thank your lucky stars for persevering when you see the overwhelming views of beautiful East Oahu."
      />

      <div className="pre-headline" id="go-eat"></div>
      <h1 style={h1Style} id="go-eat">
        Go Eat
      </h1>

      <Item
        imageUrl="images/poi.jpg"
        header="Waiahole Poi Factory"
        text="This is one of the few Hawaiian restaurants owned by native Hawaiians. Charlene and Calvin Hoe bought an actual poi factory in 1971, using it primarily as an art gallery, then began serving food in 2009. Today, it’s also one of the few places that serves fresh pa‘i‘ai, cooked taro pounded with a lava rock pestle on a long wooden board to a mochi-like consistency. You’ll have to call in advance to reserve some, and if you’re lucky, you might catch the Hoes’ son, Liko, pounding it near the outdoor tables. Try the kanaka nui plate, a combination of pretty much everything on the menu, add a side of ho‘io (fiddlehead fern) salad, and finish with the Sweet Lady of Waiahole, warm kulolo (a taro and coconut dessert) topped with a scoop of haupia (coconut) ice cream. "
      />

      <Item
        imageUrl="images/over.jpg"
        header="Over Easy"
        text="Honolulu loves breakfast, and few places do it better than Over Easy, a warm, happy family operation anyone would be proud to support. Delicate, golden, crispy-edged pancakes are the highlight of sweet dishes, but don’t leave without trying the pig hash with lomi tomatoes and Okinawan sweet potatoes, or the bacon-cabbage broth poured over a bowl of rice and Portuguese sausage. Outside seating and takeout are available."
      />
      <Item
        imageUrl="images/coffee.jpg"
        header="Morning Glass Coffee"
        text="Since Morning Glass opened in 2011, plenty of other cafes have sprung up with interiors and menus seemingly designed for the ’gram. Morning Glass has retained its rustic, no-frills look, focusing instead on its coffee and solid baked goods, including a liliko‘i honey biscuit and savory breakfast sandwiches. While the space remains closed, you can still order food, espresso drinks, and fresh-brewed Hawai‘i-grown coffee to go, though orders must be placed online in advance. "
      />
      <div className="pre-headline" id="excursions"></div>
      <h1 style={h1Style} id="excursions">
        Excursions
      </h1>
      <Item
        imageUrl="images/shark.jpg"
        header="Shark Dive On The North Shore"
        text="Dare to enter the shark cage for the experience of a lifetime! A scenic boat ride will take you to the deep blue waters of the Pacific to reach the dive spot where you will enter the shark cage anchored off of Oahu’s North Shore. While submerged for about 20 minutes, you’ll get to see sharks swim right up to the cage! There is no real danger as you’ll likely just be viewing Sandbar Sharks which are harmless to humans. But that’s little comfort when you see a 15-foot shark swim just a few feet in front of your face. Your heart will definitely be racing when you see the first shark come into view. Of all the things we did while we lived on Oahu, this shark diving tour was by far our favorite! Depending on the season, you may also get a glimpse of Hawaiian green sea turtles, spinner dolphins, or even humpback whales. You’ll definitely want to bring your underwater camera for this epic Oahu tour!"
      />
      <Item
        imageUrl="images/scruise.jpg"
        header="Waikiki Sunset Catamaran Cruise"
        text="There’s no better way to end a perfect day on Oahu than sailing on the Pacific Ocean as the sun sets over the horizon. And the best part is that on this Waikiki sunset catamaran cruise the drinks and pupus (that’s Hawaiian for appetizers) are included! As you board the luxury 53-foot sailing catamaran and begin your voyage, you’ll be greeted with a cocktail (the first 2 are complimentary). You’ll sail past Waikiki Beach towards iconic Diamond Head as the sky lights up with magnificent oranges and reds. People say that the sunsets in Hawaii are the best in the world and we tend to agree which is why we think this sunset is sure to be one of the highlights of your trip to Oahu."
      />
      <Item
        imageUrl="images/ph.jpg"
        header="Pearl Harbor: USS Arizona Memorial "
        text="This Pearl Harbor tour departs from Waikiki and includes visits to both the USS Arizona Memorial and the USS Missouri battleship. Beforehand, you'll have the chance to learn about the Japanese attack at the Pearl Harbor Visitor Center, including its powerful documentary. The ride back to Waikiki takes you past Punchbowl (the National Memorial Cemetery of the Pacific) and the King Kamehameha statue. Book your Pearl Harbor tour in advance to save time on your Oahu trip Ask questions and gain insight about the events of December 7, 1941, from a guide Enjoy hassle-free round-trip transport from Waikiki Small-group tour provides a more personalized experience. Read more about Pearl Harbor: USS Arizona Memorial & USS Missouri Battleship Tour from Waikiki 2021 - Oahu - https://www.viator.com/tours/Oahu/Pearl-Harbor-USS-Arizona-Memorial-and-USS-Battleship-Missouri-from-Waikiki/d672-140273P4?mcid=56757"
      />
      <ScrollToTopBtn />
    </>
  );
}
