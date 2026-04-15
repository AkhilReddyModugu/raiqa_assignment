import { Button, Stack } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import texts from "../constants/texts";

function Controls({ showAll, onToggleFilter, sortDir, onToggleSort }) {
  return (
    <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        onClick={onToggleFilter}
        size="small"
      >
        {showAll ? texts.showAvailable : texts.showAll}
      </Button>

      <Button
        variant="outlined"
        startIcon={<SortIcon />}
        onClick={onToggleSort}
        size="small"
      >
        {sortDir === "asc" ? texts.priceLowHigh : texts.priceHighLow}
      </Button>
    </Stack>
  );
}

export default Controls;