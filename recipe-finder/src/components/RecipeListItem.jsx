import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RecipeListItem = ({ recipe }) => {
  return (
    <Card>
      <img src={recipe.image_url} alt="thumbnail" style={{ height: 170 }} />
      <Card.Content>
        <Card.Header content={recipe.title} />
        <Card.Description>
          <h4>{recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button
          as={Link} // This makes the button a link
          to={`/recipe/${recipe.recipe_id}`} // Example link to recipe details
          content="Details"
          color="blue"
          size="tiny"
        />
         <Button
          href={recipe.source_url}
          target="_blank"
          content="Recipe URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  );
};

export default RecipeListItem;
