<?php

class PizzaPi
{
    public function calculateDoughRequirement($pizzas, $persons_per_pizza)
    {
        $grams = $pizzas * (($persons_per_pizza * 20) + 200);
        return $grams;
    }

    public function calculateSauceRequirement($pizzas, $sauce_can_volume)
    {
        $sauce_per_pizza = 125;
        $number_of_cans = ($pizzas * $sauce_per_pizza) / $sauce_can_volume;
        return $number_of_cans;
    }

    public function calculateCheeseCubeCoverage($cheese_side_length, $cheese_layer_thickness, $pizza_diameter)
    {
        $pizzas = ($cheese_side_length ** 3) / ($cheese_layer_thickness * pi() * $pizza_diameter);
        return floor($pizzas);
    }

    public function calculateLeftOverSlices($pizzas, $friends)
    {
        $slices = $pizzas * 8;
        return ($slices % $friends);
    }
}
