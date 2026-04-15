import { Stack, Typography } from "@mui/material";
import MealCard from "./MealCard";

function MealList({ meals, onAdd, selectedIds }) {
  if (meals.length === 0) {
    return (
      <Typography color="text.secondary" sx={{ py: 2, textAlign: "center" }}>
        No meals to show.
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      {meals.map((meal) => (
        <MealCard
          key={meal.id}
          meal={meal}
          onAdd={onAdd}
          isSelected={selectedIds.includes(meal.id)}
        />
      ))}
    </Stack>
  );
}

export default MealList;