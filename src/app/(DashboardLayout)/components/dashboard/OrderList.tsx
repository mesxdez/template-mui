import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { IconDots } from "@tabler/icons-react";
import DashboardCard from "@/app/(DashboardLayout)//components/shared/DashboardCard";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Boat Headphone",
    subheader: "September 14, 2023",
    photo: "/images/products/s4.jpg",
    salesPrice: 375,
    price: 285,
    rating: 4,
    status: "Active",
    count: 20,
    createdBy: "Admin",
  },
  {
    id: 2,
    title: "MacBook Air Pro",
    subheader: "September 14, 2023",
    photo: "/images/products/s5.jpg",
    salesPrice: 650,
    price: 900,
    rating: 5,
    status: "Active",
    count: 10,
    createdBy: "Admin",
  },
  {
    id: 3,
    title: "Red Valvet Dress",
    subheader: "September 14, 2023",
    photo: "/images/products/s7.jpg",
    salesPrice: 150,
    price: 200,
    rating: 3,
    status: "Active",
    count: 30,
    createdBy: "Admin",
  },
  {
    id: 4,
    title: "Cute Soft Teddybear",
    subheader: "September 14, 2023",
    photo: "/images/products/s11.jpg",
    salesPrice: 2850,
    price: 3450,
    rating: 2,
    status: "Inactive",
    count: 120,
    createdBy: "Admin",
  },
];

const OrderList = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedProductId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedProductId(null);
  };

  const handleEdit = (id: number) => {
    console.log("Edit product:", id);
    handleClose();
  };

  const handleDelete = (id: number) => {
    console.log("Delete product:", id);
    handleClose();
  };
  return (
    <DashboardCard title="Order list">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600} align="center">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600} align="right">
                  Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600} align="right">
                  Total Sales
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Created
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <Avatar
                      src={product.photo}
                      variant="square"
                      sx={{
                        height: 64,
                        width: 64,
                        borderRadius: "8px",
                      }}
                    />
                    {product.title}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Chip label={product.status} variant="outlined" />
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {product.salesPrice.toFixed(2)}$
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Chip
                    sx={{
                      px: "4px",
                      color: "#fff",
                      backgroundColor: "lightgreen",
                    }}
                    size="small"
                    label={product.count}
                  ></Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{product.createdBy}</Typography>
                </TableCell>
                <TableCell align="right">
                  {/*TODO:Icon action and can click dropdown to edit delete */}
                  <IconButton
                    aria-controls={`menu-${product.id}`}
                    aria-haspopup="true"
                    onClick={(e) => handleMenuClick(e, product.id)}
                  >
                    <IconDots />
                  </IconButton>
                  <Menu
                    id={`menu-${product.id}`}
                    anchorEl={anchorEl}
                    keepMounted
                    open={selectedProductId === product.id}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleEdit(product.id)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete(product.id)}>
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default OrderList;
