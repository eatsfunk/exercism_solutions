export function cookingStatus(remaining) {
  return remaining === 0 ? 'Lasagna is done.'  : !remaining ? 'You forgot to set the timer.' : 'Not done, please wait.';
}

export function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime;
}

export function quantities(layers) {
  let s = 0;
  let n = 0;
  for (let layer of layers) {
    layer === 'noodles' ? n++ : layer === 'sauce' ? s++ : null;
  }
  return {
    noodles: n * 50,
    sauce: s * 0.2
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  let recipeArr = Object.entries(recipe);
  let newRecipe = {};
  for (let item of recipeArr) {
    newRecipe[item[0]] = (item[1] / 2) * portions;
  }
  return newRecipe;
}
