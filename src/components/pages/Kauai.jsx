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

export default function Kauai() {
  return (
    <>
      <IslandHeroSection
        island="kauai"
        src=""
        islandLabel="Kauai"
        islandShortDesc="The Green island!"
      />
      <div className="pre-headline" id="visit"></div>
      <h1 style={h1Style}>Visit</h1>

      <Item
        imageUrl="images/wailua.jpg"
        header="Wailua Falls"
        text="There are several reasons Wailua Falls is such a great (and popular) place for visitors to enjoy. First, it was catapulted into the international spotlight back in the 1970's by the well-known television series. It has also been widely utilized in print and other forms of media for decades as a symbol of Kauai's lush beauty. Second, unlike many other Kauai waterfalls, Wailua Falls is easily accessible, as no hiking is needed to reach it and appreciate its beauty up close. In fact, the parking lot basically overlooks the falls. But the main reason the falls is so special is its beauty; it has certainly earned its place as an international representation of Kauai's enchantment. As an added bonus, when the sun hits at just the right angle you'll get a beautiful rainbow extending out from the base of the falls in the mist, which is nothing short of spectacular. Note that during times of especially high precipitation on the island, the falls can actually turn into a single giant and raging falls. During high flow, the falls often sports a third-tier flow. And while Wailua Falls is always magnificent, we believe it is most beautiful when it has a moderate flow."
      />
      <Item
        imageUrl="images/kalalau.jpg"
        header="Kalalau Trail"
        text="The Kalalau Trail is an 11-mile trail that leads from Ke’e Beach to Kalalau Beach along the Nāpali Coast on the island of Kauai in Hawaii. This website has information and media that will help you plan your outing to the secluded Kalalau Beach and/or Kalalau Valley. The Kalalau Trail is in the Nāpali Coast State Wilderness Park which is part of the Hawaii State Parks system. The Kalalau Trail provides the only land access to this part of the rugged coast. The trail traverses 5 valleys before ending at Kalalau Beach where it is blocked by sheer, fluted pali. The 11-mile trail is graded but almost never level as it crosses above towering sea cliffs and through lush valleys. The trail drops to sea level at the beaches of Hanakāpīʻai and Kalalau."
      />
      <Item
        imageUrl="images/waimea.jpg"
        header="Waimea Canyon"
        text="Waimea Canyon, on Kauai's West Side, is described as “The Grand Canyon of the Pacific.” Although not as big or as old as its Arizona cousin, you won’t encounter anything like this geological wonder in Hawaii. Stretching 14 miles long, 1 mile wide and more than 3,600 feet deep, the Waimea Canyon Lookout provides panoramic views of crested buttes, rugged crags and deep valley gorges. The grand inland vistas go on for miles. The main road, Waimea Canyon Drive, leads you to a lower lookout point and the main Waimea Canyon Overlook, offering views of Kauai's dramatic interior. The road continues into the mountains and ends at Kokee State Park. There are numerous trails to traverse for beginners and seasoned hikers alike"
      />
      <div className="pre-headline" id="go-eat"></div>
      <h1 style={h1Style} id="go-eat">
        Go Eat
      </h1>
      <Item
        imageUrl="images/aina.jpg"
        header="Aloha Aina Juice Cafe"
        text="Even though açaí bowls are ubiquitous in Hawaii, they actually got their start on a whole other continent, in Brazil. According to Aloha Aina Juice Cafe owner Misha Taylor, Hawaii's residents adopted açaí bowls after Brazilian surfers migrated to the islands in search of the best waves. Because the focus in an açaí bowl is fresh fruit, it was a perfect match for tropical, local fruits: think passion fruit, dragon fruit, pineapple, and papaya. While you’ll find ingredients like shredded coconut and homemade macadamia nut granola throughout the menu, order the Aina bowl for a taste of a true Hawaiian specialty: poi. Made from the root of the taro plant, Taylor admits poi doesn’t taste all that great on its own, but when blended into the Aina bowl, it adds a whole new layer of consistency and flavor."
      />
      <Item
        imageUrl="images/mark.jpg"
        header="Mark’s Place"
        text="On the Hawaiian islands you’ll find a true melting pot of cultures, as the area’s plantation workers immigrated from places like Japan, China, Korea, the Philippines, and Portugal. That diversity melded into the state’s food, too -- and in no dish is that more clear than the plate lunch. Similar to a Southern meat and three plate or the Japanese bento box, the plate lunch consists of a main, served with white rice and macaroni salad on the side. At Mark’s Place on Kauai, those mains can be anything from chicken katsu to beef teriyaki to loco moco. There, all the plate lunches are served takeout style, but there are picnic tables outside if you would prefer to eat al fresco. It gets better though: that whole meal will set you back about $11 for lunch -- and you’ll have enough to skip dinner. (But, why would you want to?)"
      />
      <Item
        imageUrl="images/baracuda.jpg"
        header="Bar Acuda"
        text="When it comes to date night, experienced couples know the best way to tackle a menu is to strategize and share. Enter Chef Jim Moffat’s Bar Acuda. It often gets called out as a must-stop in Kauai, and for good reason: the European tapas menu is a unique addition to the island’s food scene. Reservations are a must, as locals will pack this place even on a Monday night, thanks to killer views of Hanalei’s emerald mountains and a lengthy wine list. If that doesn’t help set the mood, the tapas menu will. All the small plates are sourced seasonally and are based on what island fisherman and local farmers have available -- like mahi-mahi with roasted mushrooms and a sweet pepper butter sauce. You’ll find that the menu changes pretty frequently, too -- so there’s no shame in stopping by twice."
      />
      <div className="pre-headline" id="excursions"></div>
      <h1 style={h1Style} id="excursions">
        Excursions
      </h1>
      <Item
        imageUrl="images/napali-heli.jpg"
        header="Na Pali Coast Helicopter Tour"
        text="No Kauai Na Pali helicopter tour exclusive to visitors to the island, so guests will need to book a tour with one that brings you to the Na Pali Coast. Thankfully, it is related to fifteen helicopter tours that will spend up to ten minutes of the tour zigzagging, passing over or heading out to sea, so no area of the Na Pali Coast is missed.
Guests can experience the North Shore in a doors shut ride or make it an unforgettable Kauai doors off helicopter your - via Jack Harter or Mauna Loa Helicopters for one of the best helicopter tours in Kauai."
      />
      <Item
        imageUrl="images/sail.jpg"
        header="Na Pali Snorkel Sail"
        text="One of the Hawaiian Islands’ most spectacular and inaccessible landscapes, the Na Pali coast stretches along Kauai’s northwestern shore in a dramatic crest of emerald cathedral spires reaching as high as 4,000 feet (1,200 meters) and dotted with sea caves, waterfalls and secluded beaches. A sailing cruise is the perfect way to experience the coastline, as there are no roads that can access it. Make your way to Port Allen in the morning, where you'll meet your friendly captain and crew and board a 50-foot (15-meter) sailing catamaran equipped with restrooms and spacious sun decks. Enjoy an onboard breakfast and relax on deck as you cruise along the coastline, soaking up magnificent views around every bend. Learn about Na Pali’s sacred place in Kauai’s culture and legends, and look out for passing marine life like spinner dolphins, sea turtles and migrating humpback whales (December through April). If conditions are right, the crew will hoist the sails for an exciting wind-powered ride."
      />
      <Item
        imageUrl="images/zip.jpg"
        header="Eco-Friendly Zip-Line Adventure in Poipu"
        text="Kauai’s dramatic topography was seemingly made with zip-liners in mind. If soaring hundreds of feet over jungles, gorges and volcanic rock peaks suspended by only a thin wire sounds like a good way to spend a few hours, then this tour is for you. Featuring eight distinct lines that crisscross over the area, you’ll get a healthy dose of adrenaline and see Kauai’s scenery from a birds-eye-view that few get to experience. The tour lasts 2 ½ hours and includes all the equipment and instruction you’ll need to have a safe and unforgettable time. Dress accordingly and don’t forget a few bottles of water and some sunblock."
      />
      <ScrollToTopBtn />
    </>
  );
}
