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

export default function Kona() {
  return (
    <>
      <IslandHeroSection
        island="kona"
        src=""
        islandLabel="Kona(Big Island)"
        islandShortDesc="The Green island!"
      />
      <div className="pre-headline" id="visit"></div>
      <h1 style={h1Style}>Visit</h1>

      <Item
        imageUrl="images/akaka.jpg"
        header="Akaka Falls State Park"
        text="Everywhere you look, you are surrounded by gorgeous plants including giant ti plants, birds of paradise, torch ginger, bamboo, and split leaf philodendron. You will hear the dull roar of the waterfall before you see it. Just as you round a corner, you'll catch a glimpse of Akaka Falls free falling 442 ft. Through a green-lined gorge. In our opinion, the best time to photograph the falls is early in the morning on a slightly cloudy day; the filtered sunlight allows the greenery to accentuate Akaka's misty waters. Further up the path are signs leading to Kahuna Falls, a beautiful but slightly less awe-inspiring waterfall, as most of it is obscured by greenery. The trail eventually loops back to the parking lot, where there are full facilities. Altogether, the path is only 0.4 miles long. Turn inland (mauka) between mile markers 14 and 13 onto Honomu Road. Bear right at the top of the hill onto the main street of Honomu town. Here you will find a delightful selection of art galleries and gift stores as well as several cafes. Take your first right onto Akaka Falls Road and continue for 3.75 miles until you reach the parking lot."
      />
      <Item
        imageUrl="images/mauna.jpg"
        header="Mauna Kea Summit"
        text="If you can only do one thing on the Big Island, you must visit Mauna Kea Summit. Measured from its base (at the seafloor) to the top, it is the tallest mountain in the world- and is simply wondrous to experience. Some of the clearest air on the planet can be found here, which means the star gazing is mind-blowing. Rent a car (or 4x4) or take a tour and make a stop at the Onizuka Center for International Astronomy (referred to as the ‘Visitors Center’) to learn more and to get acclimated to the altitude. The views from here are amazing, but can’t top those at the summit. Dress warmly and be prepared for a magical experience!"
      />
      <Item
        imageUrl="images/manini.jpg"
        header="Manini'owali Beach"
        text="Sometimes called ‘Mile 88’ for its nearby mile marker, or ‘Kua Bay’ for its ease of pronunciation, this beach appears regularly on many a ‘Best Big Island Beaches’ lists, and with good reason. Although words cannot do it justice, imagine the most pristine white sand and crystal blue waters you can- then multiply by 100. Swimming is a favorite here when waters are calm, and snorkelers will enjoy the Hawaiian sea turtles and colorful tropical fish. Boogie boarders give it high marks, too, as do those hankering for some R&R. Take your reef-safe sunscreen and get ready to be wowed by this crescent-shaped slice of paradise."
      />

      <div className="pre-headline" i d="go-eat"></div>
      <h1 style={h1Style} id="go-eat">
        Go Eat
      </h1>

      <Item
        imageUrl="images/manta.jpg"
        header="Manta & Pavilion Wine Bar"
        text="Any west side morning should start with the breakfast buffet at Manta & Pavilion Wine Bar. This is the place for long, leisurely breakfasts and chit chat over made-to-order waffles and omelets, fresh tropical fruits and juices, healthy whole grain cereals and various delicacies from the pastry kitchen with a cup of Big Island coffee. This is the Mauna Kea's breakfast buffet, with its ocean-overlook and birdsong symphony, and this is what your family will remember. Later on in the day venture to the exquisite crescent shaped white sand beach out front. You won't have to venture any further for great food or beach time."
      />

      <Item
        imageUrl="images/brew.jpg"
        header="Kailua-Kona Pub & Brewery"
        text="Just across the street from the cruise port, the pub at the Big Island's most famous brewery is a terrific place to wind down after shopping. Brewery tours are quick and personal – an added bonus is that visitors over 21 get to sample the products. Kona's on premises brewpub serves cold mugs of the brewery's top sellers, including Fire Rock Pale, Pacific Golden Ale, and Longboard Lager, and the cozy setting easily pulls you in, making it difficult to leave. Great Hawaiian influenced pub grub – pizzas, salads, and sandwiches – is also available. Sample what's in season since the rest of the brews can be found all year long."
      />
      <Item
        imageUrl="images/jackie.jpg"
        header="Jackie Rey's Ohana Grill"
        text="Jackie Rey's Ohana Grill is a casual local's joint featuring fresh seafood, steaks, pasta and a variety of salads at affordable prices. The restaurant (named after our daughter) is the culmination of much hard work and the dedication of ourselves and our crew. We invite you to be our guests and experience great food and old fashioned hospitality, island style. Angie and Paul—Proprietors of your Local Ohana Grill. Established 2004."
      />
      <div className="pre-headline" id="excursions"></div>
      <h1 style={h1Style} id="excursions">
        Excursions
      </h1>
      <Item
        imageUrl="images/fire.jpg"
        header="Circle of Fire Helicopter Tour from Hilo"
        text="Fly over Hawaii Volcanoes National Park on a scenic helicopter flight from Hilo. Enjoy an aerial perspective of the Kilauea and Mauna Loa volcanoes and stunning views of the most geologically active environment on earth. Ride in comfort and safety in your choice of either an ECO-Star or A-Star helicopter. You'll hear informative commentary from your pilot as you spot the Halemaumau Crater and other sights in the national park, and pass over waterfalls and the Hamakua Coast."
      />
      <Item
        imageUrl="images/ray.jpg"
        header="Manta Ray Night Snorkel"
        text="Swim near a manta ray natural habitat on this 1.5-hour night snorkeling tour from Kona. Led by an expert guide, journey five minutes off the Big Island’s west coast where the mantas come to feast on plankton. Dive in the water, and swim in an area known for manta ray sightings. The area is lit by your vessels diving lights, so you can get a clear view even in dark waters. Afterward, dry off, and enjoy warm soup, bread rolls, and hot drinks as you recount your underwater adventures."
      />
      <Item
        imageUrl="images/morning.jpg"
        header="Kealakekua Snorkel Tour"
        text="Casually cruise the Kona coastline and snorkel with tropical marine life, as you splash in the waters of Kealakekua Bay on this deluxe Kona snorkeling cruise. Snorkeling equipment is provided on board, and professional instruction makes this Big Island snorkeling cruise a fun-filled family adventure. On the cruise between shore and the snorkeling site, keep your eyes peeled for spinner dolphins, turtles or even manta rays, and enjoy views of volcanic formations along the Kona coast."
      />
      <ScrollToTopBtn />
    </>
  );
}
