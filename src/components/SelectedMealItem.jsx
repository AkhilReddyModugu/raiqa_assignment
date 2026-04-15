import { Box, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function SelectedMealItem({ meal, onRemove }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        borderBottom: "1px solid #eee",
      }}
    >
      <Box>
        <Typography fontWeight={500}>{meal.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{meal.price}
        </Typography>
      </Box>

      <IconButton
        size="small"
        color="error"
        onClick={() => onRemove(meal.id)}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default SelectedMealItem;