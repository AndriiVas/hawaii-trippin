import React from "react";
import "../../App.css";
import IslandHeroSection from "../IslandHeroSection";
import Item from "../Item";

const h1Style = {
  fontFamily: "Alessa",
  margin: "50px",
  fontSize: "80px",
};

export default function Maui() {
  return (
    <>
      <IslandHeroSection
        src=""
        islandLabel="Maui"
        islandShortDesc="My Favorite island!"
      />
      <div className="pre-headline" id="visit"></div>
      <h1 style={h1Style}>Visit</h1>

      <Item
        imageUrl="images/honolua-bay.jpg"
        header="Honolua Bay"
        text="Honolua Bay is part of a Marine Life Conservation District, so there is no fishing (or taking of any natural resources, including marine life and even rocks.) We could take a lesson from the early Hawaiians, who were superb stewards of the land and carefully managed all of their important fishing grounds – including this area – in order to protect the abundant natural resources for future generations. The bay has been been recognized as an area of significant cultural, historical, and environmental value by present day Hawaii as well."
      />
      <Item
        imageUrl="images/haleakala.jpg"
        header="Haleakala Volcano Sunset"
        text="Towering over the island of Maui and visible from just about any point, Haleakala Crater is a force of nature in every sense. At 10,023 feet above sea level, this dormant volcano is the stage for a breathtaking range of landscapes—and skyscapes. Haleakala means 'house of the sun' in Hawaiian, and legend goes that the demigod Maui lassoed the sun from its journey across the sky as he stood on the volcano’s summit, slowing its descent to make the day last longer. Sunrises and sunsets are only two of the many reasons to pay Haleakala National Park a visit on your trip to Maui. Spanning more than 30,000 acres of public land, the stunning landscapes range from Mars-like red deserts and rock gardens near the summit to lush waterfalls and streams in the park’s coastal Kipahulu section, near Hana."
      />
      <Item
        imageUrl="images/kaanapali.jpg"
        header="Kaanapali Beach"
        text="With three miles of white sand and crystal clear water, it’s no wonder why Kaanapali Beach was once named America’s Best Beach. Fronting Kaanapali’s hotels and resorts, this former retreat for the royalty of Maui is now a popular getaway for the world.

        Kaanapali was Hawaii’s first planned resort and has become a model for resorts around the globe. Five hotels and six condominium villages face this renowned beach. Also fronting Kaanapali is the open air Whalers Village, a world-class shopping complex that features a variety of exceptional shops and restaurants, a renowned whaling museum and free Hawaiian entertainment. Kaanapali also has two championship golf courses, the Royal Kaanapali and the Kaanapali Kai, where you may even see a breaching whale as you try to line up a shot."
      />
      <div className="pre-headline" id="go-eat"></div>
      <h1 style={h1Style} id="go-eat">
        Go Eat
      </h1>
      <Item
        imageUrl="images/mamas.jpg"
        header="Mama's Fish House"
        text="Mama's Restaurant is quite unique. It is by far the most authentic Hawaiian experience you'll have while dining in Maui... and anywhere in Hawaii. Everything is beautifully crafted. There's even a banyan tree that has been grown and shaped into a path way arch.

        The restaurant sits on a large piece of land right on the ocean with a nice little beach. Always plan to spend a little time checking out the area in front of Mama's before or after dinner or lunch. Mama's Beach is well known for great wind surfing and kite surfing.
        
        They also have a few rooms for rent their at the Inn At Mama's. The cottages available are pretty nice with many enjoying ocean views."
      />
      <Item
        imageUrl="images/food-truck.jpg"
        header="Maui Food Trucks"
        text="There are many great food trucks scattered all over the island, but you’ll find a group of them clustered in an otherwise vacant lot across the street from Costco, Monday through Saturday. Hours generally start around 10 a.m. and continue until late afternoon or early evening, but it varies from truck to truck–and many run out of their specialties by mid-afternoon so close early. One of my favorites here is Kalei’s Lunch Box — great fresh fish preparations and other local food, with generous portions."
      />
      <Item
        imageUrl="images/foodland.jpg"
        header="Foodland Poke"
        text="Recommend by locals more than once. If you want to save some money on your trip and love POKE as I do. We have tried other Pokes on Maui and by far this is our favorite. You have to go to Fodland. Great people and service with a great variety of food at a great price. Take your food Togo and plan our day."
      />
      <div className="pre-headline" id="excursions"></div>
      <h1 style={h1Style} id="excursions">
        Excursions
      </h1>
      <Item
        imageUrl="images/molokini.jpg"
        header="Molokini crater"
        text="Molokini, Maui’s iconic crescent-shaped islet, is a beautiful reef known for its crystal clear waters, abundant coral, colorful fish, and resting seabirds. A protected marine conservation area, this volcanic crater is only accessible by boat with a certified tour operator. The 5-hour cruise includes a bonus snorkel site at Turtle Arches. Explore the underwater lava formations and while swimming with turtles. The tour includes a delicious BBQ lunch prepared on-board."
      />
      <Item
        imageUrl="images/sunset.jpg"
        header="Sunset Cruise with Champagne from Lahaina"
        text="Sunsets are a sight to behold in Maui, and they should be witnessed from as many different vantage points as possible. This tailor-made sunset cruise departs from nearby Lahaina, and is one of the area’s quintessential experiences. Though it’s only a 2-hour cruise, you won’t feel like you’ve missed anything after sipping a few beverages and watching the sun slip behind the darkening sea. Appetizers, local beer, and champagne are included, and remember that even in the summer the weather is subject to change out on the water, so bring a sweater or windbreaker just in case it gets windy and chilly."
      />
      <Item
        imageUrl="images/hana.jpg"
        header="Road to Hana"
        text="When it comes to driving the Hana Highway on Maui, it's the journey, not the destination, that is the main attraction. There are few words that can describe the beauty of this drive with its cliffs cloaked in green and lush valleys bursting with waterfalls. Curves hug the coast and gaze over an ocean that stretches uninterrupted all the way to the Alaskan coastline. Couple that with black, red, and white sand beaches, a multitude of trails, and beautiful gardens and you've discovered the highway to heaven itself."
      />
    </>
  );
}
