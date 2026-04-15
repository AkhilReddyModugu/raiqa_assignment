import {
    Card,
    CardContent,
    Typography,
    Button,
    Box,
  } from "@mui/material";
  import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
  import CheckCircleIcon from "@mui/icons-material/CheckCircle";
  import texts from "../constants/texts";
  
  function MealCard({ meal, onAdd, isSelected }) {
    return (
      <Card
        variant="outlined"
        sx={{
          borderRadius: 2,
          px: 1,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1.5,
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {meal.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ₹{meal.price}
            </Typography>
          </Box>
  
          {meal.isAvailable && (
            <Button
              size="small"
              variant={isSelected ? "outlined" : "contained"}
              color={isSelected ? "success" : "primary"}
              startIcon={
                isSelected ? <CheckCircleIcon /> : <AddShoppingCartIcon />
              }
              onClick={() => onAdd(meal)}
              disabled={isSelected}
              sx={{
                minWidth: 100,
              }}
            >
              {isSelected ? texts.added : texts.add}
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }
  
  export default MealCard;