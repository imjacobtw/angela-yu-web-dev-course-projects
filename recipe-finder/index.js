import axios from "axios";
import express from "express";
import "dotenv/config";

import { recipeData } from "./recipeData.js";

const PORT = process.env.PORT || 3000;
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const SPOONACULAR_QUERY_PARAMS = {
  cuisines: [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ],
  diets: [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ],
  intolerances: [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ],
  mealTypes: [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ],
};
const NUMBER_OF_RESULTS_PER_PAGE = 12;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/searchRecipes", async (req, res) => {});

app.get("/", async (req, res) => {
  let recipes = [];

  try {
    // const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
    //   params: {
    //     apiKey: SPOONACULAR_API_KEY,
    //     number: NUMBER_OF_RESULTS_PER_PAGE
    //   },
    // });
    // const data = response.data;
    // recipes = data.results;
    recipes = [
      {
        id: 715415,
        title: "Red Lentil Soup with Chicken and Turnips",
        image: "https://img.spoonacular.com/recipes/715415-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716406,
        title: "Asparagus and Pea Soup: Real Convenience Food",
        image: "https://img.spoonacular.com/recipes/716406-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 644387,
        title: "Garlicky Kale",
        image: "https://img.spoonacular.com/recipes/644387-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715446,
        title: "Slow Cooker Beef Stew",
        image: "https://img.spoonacular.com/recipes/715446-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 782601,
        title: "Red Kidney Bean Jambalaya",
        image: "https://img.spoonacular.com/recipes/782601-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716426,
        title: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        image: "https://img.spoonacular.com/recipes/716426-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716004,
        title:
          "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
        image: "https://img.spoonacular.com/recipes/716004-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 716627,
        title: "Easy Homemade Rice and Beans",
        image: "https://img.spoonacular.com/recipes/716627-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 664147,
        title: "Tuscan White Bean Soup with Olive Oil and Rosemary",
        image: "https://img.spoonacular.com/recipes/664147-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 640941,
        title: "Crunchy Brussels Sprouts Side Dish",
        image: "https://img.spoonacular.com/recipes/640941-312x231.jpg",
        imageType: "jpg",
      },
    ];
  } catch (err) {
    console.error(err);
  }

  res.render("index", {
    SPOONACULAR_QUERY_PARAMS,
    recipes,
  });
});

app.get("/recipe/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/${id}/information`,
    //   {
    //     params: {
    //       apiKey: SPOONACULAR_API_KEY,
    //       number: NUMBER_OF_RESULTS_PER_PAGE,
    //     },
    //   }
    // );
    // const data = response.data;
    res.render("recipe", {
      recipe: recipeData
    });
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
  
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
