import React from 'react';

export default function RecipeItem({ recipe, index, deleteRecipe }) {
  // rendering elements to the DOM
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        {' '}
        <img src={recipe.photo} />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name='delete' onClick={() => deleteRecipe(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
