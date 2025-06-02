// 🔸 All your recipes live here
const recipes = {
  scbites: {
  title: "Strawberry Chocolate Bites",
  note: "Makes about 10 protein bites — a perfect grab-and-go snack!",
  ingredients: [
    "1/2 cup fresh strawberries, finely chopped",
    "1/2 cup rolled oats",
    "1/2 cup vanilla protein powder",
    "2 tbsp unsweetened cocoa powder",
    "2 tbsp almond butter (or peanut butter)",
    "1–2 tbsp maple syrup or honey",
    "1–2 tbsp milk of choice (only if needed)",
    "Optional: dark chocolate chips or chunks"
  ],
  steps: [
    "In a bowl, add chopped strawberries, oats, protein powder, cocoa powder, and almond butter.",
    "Mix everything well until a sticky dough forms. If too dry, add 1 tbsp milk at a time.",
    "Add maple syrup or honey for sweetness and mix again.",
    "Fold in optional chocolate chips.",
    "Roll the mixture into bite-sized balls.",
    "Refrigerate for at least 30 minutes before enjoying."
  ],
  facts: [
    "✔ ~6g protein per bite",
    "✔ Gluten-free if certified oats are used",
    "✔ Naturally sweetened",
    "✔ Store in fridge for 1 week or freeze up to 3 months"
  ],
  bakeTime: 0,
  bakeTemp: "N/A",
  needsOven: false,
  servings: 10,
  prepTime: "10 min"
},
  brownie: {
    title: "Protein Brownie",
    note: "This recipe is for 12 brownies, if you would like more or less, just multiply with each ingredient!",
    ingredients: [
      "1 cup mashed banana",
      "1/2 cup almond butter (or nut butter)",
      "1/4 cup cocoa powder",
      "1/2 cup chocolate protein powder",
      "Optional: dark chocolate chips or maple syrup for sweetness"
    ],
    steps: [
      "Preheat oven to 180°C (350°F) and line an 8x8 inch pan.",
      "Add all ingredients to a bowl or blender and mix until smooth.",
      "Pour the batter into the lined pan and spread evenly.",
      "Bake for 15–20 minutes, until the top is firm and a skewer comes out mostly clean.",
      "While still hot, gently press down on the top to create crackly surface.",
      "Let the brownies cool completely before slicing and serving."
    ],
    bakeTime: 15,
    bakeTemp: "180°C",
    needsOven: true,
    servings: 12,
    prepTime: "5 min"
  },

  // 🔧 Add more recipes here
  cookiedough: {
    title: "Cookie Dough",
    note: "This recipe is for one serving only, you can make more by multiplying the ingredients accordingly.",
    ingredients:[  
      "1/2 cup creamy peanut butter (or almond/cashew butter)",
      "2 tablespoons maple syrup or honey",
      "1/2 cup vanilla protein powder (preferably casein or vegan)",
      "1–2 tablespoons milk or water (as needed for texture)",
      "2 tablespoons dark chocolate chips" ],
    steps: [
     "In a mixing bowl, combine the peanut butter, protein powder, and maple syrup.",
      "Mix until a thick dough forms.",
      "If the dough is too dry, gradually add 1 tablespoon of milk or water at a time until you reach your desired texture.",
      "Fold in the chocolate chips.",
      "Enjoy immediately or refrigerate for 30 minutes for a thicker texture."
    ],
    facts: [  
      "✔ 30g protein per serving",
      "✔ Gluten-free, no added refined sugar",
      "✔ Can be made vegan or dairy-free",
      "✔ Store in fridge for up to 1 week or freeze up to 6 months" ]


  },
  cottagecheesepudding: {
  title: "Cottage Cheese Pudding",
  note: "This is a high-protein, 3-ingredient dessert you can enjoy even for breakfast!",
  ingredients: [
    "1 cup full-fat cottage cheese (or dairy-free alternative)",
    "1–2 tablespoons honey or maple syrup (adjust to taste)",
    "2 tablespoons unsweetened cocoa powder"
  ],
  steps: [
    "Add the cottage cheese, honey (or syrup), and cocoa powder into a blender.",
    "Blend until completely smooth and creamy.",
    "Taste and adjust sweetness if needed.",
    "Transfer to small bowls or cups.",
    "Refrigerate for at least 30 minutes to let it firm up.",
    "Serve chilled. Optionally, top with berries or whipped cream."
  ],
  facts: [
    "✔ 25g+ protein per serving",
    "✔ Just 3 ingredients",
    "✔ Naturally gluten-free",
    "✔ Can be made dairy-free"
  ],
  bakeTime: 0,
  bakeTemp: "No oven needed",
  needsOven: false,
  servings: 2,
  prepTime: "5 min"
},
// Add this inside your `recipes` object
yogurtpopsicles: {
  title: "Protein Yogurt Popsicles",
  note: "This recipe makes 6 delicious high-protein popsicles. Double the batch if you're meal prepping!",
  ingredients: [
    "1 cup Greek yogurt (plain or vanilla)",
    "1/2 scoop vanilla or strawberry protein powder",
    "1/2 cup mixed berries (fresh or frozen)",
    "1–2 tablespoons honey or maple syrup (optional, for sweetness)",
    "1/4 teaspoon vanilla extract (optional)"
  ],
  steps: [
    "In a blender, combine Greek yogurt, protein powder, sweetener, and vanilla extract.",
    "Blend until smooth. Add berries and pulse 1-2 times if you want berry chunks, or blend fully for a smooth texture.",
    "Pour the mixture into popsicle molds.",
    "Tap the molds gently to release air bubbles and ensure even filling.",
    "Insert sticks and freeze for at least 4–6 hours or until solid.",
    "To release, run the mold under warm water for 5–10 seconds and pull gently."
  ],
  facts: [
    "✔ 10–12g protein per popsicle",
    "✔ Low sugar and customizable",
    "✔ Can use dairy-free yogurt for vegan version",
    "✔ Great for hot days or post-workout treats"
  ],
  bakeTime: 0,
  bakeTemp: "No oven",
  needsOven: false,
  servings: 6,
  prepTime: "10 min"
},
Bananacake: {
  title: "Protein Banana Bread",
  note: "This recipe makes 8 slices. For more or fewer servings, adjust the ingredients proportionally.",
  ingredients: [
    "2 medium bananas, mashed",
    "1 cup milk (e.g., almond milk)",
    "1 tablespoon vinegar (apple cider or white)",
    "1 teaspoon vanilla extract",
    "2 cups self-rising flour",
    "1/2 cup almond flour (blanched, not almond meal)",
    "1/4 cup protein powder (vanilla, casein, or brown rice)",
    "1/2 cup brown sugar substitute or any sweetener"
  ],
  steps: [
    "Preheat the oven to 180°C (350°F) and line a loaf pan with parchment paper.",
    "In a large mixing bowl, combine mashed bananas, milk, vinegar, and vanilla extract. Mix until smooth.",
    "Gently add self-rising flour, almond flour, protein powder, and sweetener. Stir until just combined.",
    "Transfer the batter to the prepared loaf pan and smooth out the top.",
    "Bake for 35–45 minutes, or until a toothpick comes out mostly clean.",
    "Let the banana bread cool in the pan, then remove, slice, and enjoy."
  ],
  facts: [
    "✔ 25g protein per slice",
    "✔ Moist and fluffy texture",
    "✔ Freezer-friendly for up to 6 months",
    "✔ Customizable with mix-ins like nuts or chocolate chips"
  ],
  bakeTime: 45,
  bakeTemp: "180°C",
  needsOven: true,
  servings: 8,
  prepTime: "10 min"


},
cheesecakejars: {
  title: "Cheesecake Jars",
  note: "This recipe makes 2 small jars. Adjust ingredients to scale up!",
  ingredients: [
    "1/2 cup plain Greek yogurt (high protein, e.g. 2%)",
    "1/2 cup low-fat cream cheese, softened",
    "2 tablespoons vanilla protein powder",
    "2 tablespoons maple syrup or honey (optional)",
    "1/4 cup crushed graham crackers or oats (for crust)",
    "1 tablespoon melted coconut oil (to bind crust)",
    "Fruit or jam for topping (berries, mango, etc.)"
  ],
  steps: [
    "In a small bowl, mix crushed graham crackers with melted coconut oil to form the crust base.",
    "Divide the crust mixture between 2 jars and press down firmly.",
    "In a mixing bowl, blend Greek yogurt, cream cheese, protein powder, and maple syrup until smooth.",
    "Spoon the cheesecake mixture on top of the crust in each jar.",
    "Top with berries, jam, or your favorite fruit.",
    "Refrigerate for at least 30 minutes to firm up before serving."
  ],
  facts: [
    "✔ No-bake & fridge-friendly",
    "✔ ~20g protein per jar",
    "✔ Can be made sugar-free with stevia or monk fruit",
    "✔ Customize with nut butters or granola"
  ],
  bakeTime: 0,
  bakeTemp: "No oven",
  needsOven: false,
  servings: 2,
  prepTime: "10 min"
},
chickpeacake: {
  title: "Chickpea Protein Cake",
  note: "This fudgy chickpea cake serves 6. Great for post-workout or healthy dessert!",
  ingredients: [
    "1 can chickpeas (15 oz / ~1.5 cups), rinsed & drained",
    "1/2 cup peanut butter (or almond butter)",
    "1/4 cup maple syrup or honey",
    "1/4 cup chocolate or vanilla protein powder",
    "2 tablespoons cocoa powder",
    "1 teaspoon baking powder",
    "1 teaspoon vanilla extract",
    "1/4 cup dark chocolate chips (optional)",
    "2–4 tablespoons milk (only if needed for texture)"
  ],
  steps: [
    "Preheat oven to 180°C (350°F) and grease or line a small loaf or square pan.",
    "In a food processor or blender, add chickpeas, peanut butter, maple syrup, protein powder, cocoa powder, baking powder, and vanilla.",
    "Blend until completely smooth. If too thick, add 1 tablespoon milk at a time.",
    "Fold in chocolate chips if using.",
    "Spread batter evenly into the pan.",
    "Bake for 25–30 minutes, until the top is set and a toothpick comes out mostly clean.",
    "Cool before slicing and enjoy!"
  ],
  facts: [
    "✔ ~10g protein per slice",
    "✔ Gluten-free & flourless",
    "✔ Chickpeas = fiber + plant protein",
    "✔ Can be made dairy-free"
  ],
  bakeTime: 30,
  bakeTemp: "180°C",
  needsOven: true,
  servings: 6,
  prepTime: "5 min"
}



};

let selectedRecipe = null;
let currentStep = 0;

function showRecipe(name) {
  selectedRecipe = recipes[name];
  currentStep = 0;

  // Populate recipe title
  document.getElementById("recipe-title").innerText = selectedRecipe.title;
  document.getElementById("recipe-note").innerText = selectedRecipe.note;


  // Populate ingredients list
  const list = document.getElementById("ingredients-list");
  list.innerHTML = "";
  selectedRecipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  // Show recipe screen, hide menu
  document.getElementById("menu-screen").style.display = "none";
  document.getElementById("recipe-box").style.display = "block";
  document.getElementById("baking-steps").style.display = "none";
  document.getElementById("oven-screen").style.display = "none";
}

function goBack() {
  document.getElementById("menu-screen").style.display = "block";
  document.getElementById("recipe-box").style.display = "none";
  document.getElementById("baking-steps").style.display = "none";
  document.getElementById("oven-screen").style.display = "none";
}

function startBaking() {
  document.getElementById("recipe-box").style.display = "none";
  document.getElementById("baking-steps").style.display = "block";
  showNextStep();
}
function showNextStep() {
  if (currentStep >= selectedRecipe.steps.length) {
    // Hide baking steps screen
    document.getElementById("baking-steps").style.display = "none";

    // If oven is needed, show oven screen
    if (selectedRecipe.needsOven) {
      document.getElementById("bake-temp").innerText = selectedRecipe.bakeTemp;
      document.getElementById("bake-time").innerText = selectedRecipe.bakeTime;
      document.getElementById("oven-screen").style.display = "block";
    }

    return;
  }

  // Show current step text and optional image
  document.getElementById("step-text").innerText = selectedRecipe.steps[currentStep];
  if (selectedRecipe.title === "Strawberry Chocolate Bites") {
  document.getElementById("step-image").src = "scbites.png";}
  else if(selectedRecipe.title==="Protein Brownie"){
    document.getElementById("step-image").src="brownie.png";
  }
  else if(selectedRecipe.title==="Cookie Dough"){
    document.getElementById("step-image").src="cookiedough.png";
  }
  else if(selectedRecipe.title==="Cottage Cheese Pudding"){
    document.getElementById("step-image").src="cheese.png";
  }
  else if(selectedRecipe.title==="Protein Yogurt Popsicles"){
    document.getElementById("step-image").src="popsicle.png";
  }
  else if(selectedRecipe.title==="Protein Banana Bread"){
    document.getElementById("step-image").src="banana.png";
  }
  else if(selectedRecipe.title==="Cheesecake Jars"){
    document.getElementById("step-image").src="cheesecake.png";
  }
  else if(selectedRecipe.title==="Chickpea Protein Cake")
  {
    document.getElementById("step-image").src="chickpeacake.png";
  }
  // 🔥 HIDE the Next button if this is the LAST STEP
  if (currentStep === selectedRecipe.steps.length - 1) {
    document.getElementById("next-button").style.display = "none";
  } else {
    document.getElementById("next-button").style.display = "inline-block";
  }



  currentStep++;
}
