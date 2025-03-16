import { useNavigate } from "react-router-dom";
import WatchIcon from '@mui/icons-material/Watch';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Box, Typography } from "@mui/material";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

export default function Product() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Watch", icon: <WatchIcon  sx={{ color: "#ffffff" }} />, path:"/Watch" },
    { id: 2, name: "Laptop", icon: <LaptopIcon sx={{ color: "#ffffff" }} /> ,path:"/Laptop"},
    { id: 3, name: "Smart Phone", icon: <SmartphoneIcon sx={{ color: "#ffffff" }} /> ,path:"/Smart"},
    { id: 4, name: "Clothes", icon: <CheckroomIcon sx={{ color: "#ffffff" }} /> ,path:"/Clothes" },
    { id: 5, name: "Electricals", icon: <ElectricalServicesIcon sx={{ color: "#ffffff" }} />,path:"/Electricals" },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #1a1a1a, #333333)",
        minHeight: "100vh",
        padding: "20px",
        marginTop:"-40px"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginTop: "100px",
          color: "#ffffff",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(255, 255, 255, 0.3)",
        }}
      >
        Select Type Of Product You Want
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "60px",
          padding: "40px",
          marginTop: "40px",
        }}
      >
        {products.map((product) => (
          <Box
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              width: "150px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              borderRadius: "15px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              transition: "0.5s",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "scale(1.1)",
                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
                borderColor: "#ffffff",
              },
            }}
            onClick={() => product.path && navigate(product.path)}
          >
            {product.icon}
            <Typography
              sx={{
                fontSize: "14px",
                marginTop: "10px",
                color: "#ffffff",
                userSelect: "none",
                fontWeight: "500",
              }}
            >
              {product.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}