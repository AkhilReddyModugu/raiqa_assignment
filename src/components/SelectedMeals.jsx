import {
    Paper,
    Typography,
    Button,
    Divider,
    Stack,
    Box,
  } from "@mui/material";
  import texts from "../constants/texts";
  import SelectedMealItem from "./SelectedMealItem";
  
  function SelectedMeals({ selected, onReset, onRemove }) {
    const total = selected.reduce((sum, m) => sum + m.price, 0);
  
    return (
      <Paper
        variant="outlined"
        sx={{
          p: 2.5,
          borderRadius: 2,
          position: { md: "sticky" },
          top: { md: 24 },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight={600}>
            {texts.selectedMeals}
          </Typography>
  
          {selected.length > 0 && (
            <Button
              size="small"
              color="error"
              variant="text"
              onClick={onReset}
            >
              {texts.reset}
            </Button>
          )}
        </Box>
  
        {selected.length === 0 ? (
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ py: 3, textAlign: "center" }}
          >
            {texts.noMeals}
          </Typography>
        ) : (
          <>
            <Stack spacing={1}>
              {selected.map((meal) => (
                <SelectedMealItem
                  key={meal.id}
                  meal={meal}
                  onRemove={onRemove}
                />
              ))}
            </Stack>
  
            <Divider sx={{ my: 2 }} />
  
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                {selected.length} item
                {selected.length > 1 ? "s" : ""}
              </Typography>
  
              <Typography variant="subtitle1" fontWeight={700}>
                {texts.total}: ₹{total}
              </Typography>
            </Box>
          </>
        )}
      </Paper>
    );
  }
  
  export default SelectedMeals;