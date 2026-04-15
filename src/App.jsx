import { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import mealsData from "./data/meals";
import texts from "./constants/texts";
import Controls from "./components/Controls";
import MealList from "./components/MealList";
import SelectedMeals from "./components/SelectedMeals";

function App() {
  const [showAll, setShowAll] = useState(false);
  const [sortDir, setSortDir] = useState("asc");
  const [selected, setSelected] = useState(() => {
    try {
      const saved = localStorage.getItem("selectedMeals");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("selectedMeals", JSON.stringify(selected));
  }, [selected]);

  const handleAdd = (meal) => {
    setSelected((prev) =>
      prev.find((m) => m.id === meal.id) ? prev : [...prev, meal]
    );
  };

  const handleRemove = (id) => {
    setSelected((prev) => prev.filter((m) => m.id !== id));
  };

  const handleReset = () => setSelected([]);

  const filteredMeals = showAll
    ? mealsData
    : mealsData.filter((meal) => meal.isAvailable);

  const sortedMeals = [...filteredMeals].sort((a, b) =>
    sortDir === "asc" ? a.price - b.price : b.price - a.price
  );

  const selectedIds = selected.map((m) => m.id);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight={700}>
            {texts.title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {texts.subtitle}
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
              {texts.availableMeals}
            </Typography>

            <Controls
              showAll={showAll}
              onToggleFilter={() => setShowAll((v) => !v)}
              sortDir={sortDir}
              onToggleSort={() =>
                setSortDir((d) => (d === "asc" ? "desc" : "asc"))
              }
            />

            <MealList
              meals={sortedMeals}
              onAdd={handleAdd}
              selectedIds={selectedIds}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <SelectedMeals
              selected={selected}
              onReset={handleReset}
              onRemove={handleRemove}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;