import { IconButton, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const RestaurantCard = () => {
  const navigate = useNavigate();
  const { card } = useSelector((state) => state.restaurantMenu);

  return (
    <IconButton onClick={() => navigate("restaurant-menu-orders/card")}>
      <StyledBadge badgeContent={card.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
};

export default RestaurantCard;
