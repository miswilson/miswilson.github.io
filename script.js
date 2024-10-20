function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

let figure_1_spec = "https://raw.githubusercontent.com/EconomicsObservatory/courses/main/2/s2_chart2.json"; // We're storing the URL of the graph we want to display in a variable
let figure_2_spec = "wk1_chart1.json"; // We're storing the URL of the graph we want to display in a variable
let figure_3_spec = "wk1_chart2.json";
let figure_4_spec = "visualization.vl.json";
let figure_5_spec = "fr_uk.json";
let figure_6_spec = "habits.json";
let figure_7_spec = "empire.json";
let figure_8_spec = "colonies_powers.json"


vegaEmbed('#Location1', figure_1_spec)
vegaEmbed('#Location2', figure_2_spec) 
vegaEmbed('#Location3', figure_3_spec)
vegaEmbed('#Location4', figure_4_spec)
vegaEmbed('#Location5', figure_5_spec)
vegaEmbed('#Location6', figure_6_spec)
vegaEmbed('#Location7', figure_7_spec)
vegaEmbed('#Location8', figure_8_spec)