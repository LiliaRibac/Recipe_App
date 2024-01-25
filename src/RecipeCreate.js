import React, { useState } from 'react';

function RecipeCreate({ addRecipe }) {
  const initialRecipeState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };

  const [recipeData, setRecipeData] = useState({ ...initialRecipeState });

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const handleSubmit = (e) => {
    e.preventDefault();

    addRecipe(recipeData);
    setRecipeData({ ...initialRecipeState });
  };

  // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) => {
    setRecipeData({
      ...recipeData,
      [target.name]: target.value,
    });
  };
  // TODO: Add the required input and textarea form elements.
  return (
    <form name='create' onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id='name'
                type='text'
                name='name'
                onChange={handleChange}
                value={recipeData.name}
                placeholder='name'
              />
            </td>

            <td>
              <input
                id='cuisine'
                type='text'
                name='cuisine'
                onChange={handleChange}
                value={recipeData.cuisine}
                placeholder='cuisine'
              />
            </td>

            <td>
              <input
                id='photo'
                type='text'
                name='photo'
                onChange={handleChange}
                value={recipeData.photo}
                placeholder='photo'
              />
            </td>

            <td>
              <textarea
                id='text'
                type='ingredients'
                name='ingredients'
                onChange={handleChange}
                value={recipeData.ingredients}
                placeholder='ingredients'
                rows='2'
                cols='16'
              ></textarea>
            </td>

            <td>
              <textarea
                id='text'
                type='preparation'
                name='preparation'
                onChange={handleChange}
                value={recipeData.preparation}
                placeholder='preparation'
                rows='2'
                cols='16'
              ></textarea>
            </td>

            <td>
              <button type='submit'>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
