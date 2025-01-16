import React, { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AddProductModal from "../AddProductModal";  // Import your AddProductModal component
import './Product.scss'

export default function Product() {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [searchText, setSearchText] = useState(""); 

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, { key: Date.now(), ...newProduct }];
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setIsModalVisible(false);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product); 
    setIsModalVisible(true); 
  };

  const handleDeleteProduct = (key) => {
    const updatedProducts = products.filter((product) => product.key !== key);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <div className="product-container">
      <div className="nav-filter">
        <Space.Compact size="large">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Maxsulot Qidirish"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            size="large"
            style={{ marginBottom: 16, maxWidth: 200 }}
          />
        </Space.Compact>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setProductToEdit(null);
            setIsModalVisible(true);
          }}
          style={{ marginBottom: 16 }}
        >
          Add Product
        </Button>
      </div>

      {filteredProducts.length === 0 ? (
        <Typography variant="h6" color="textSecondary" align="center">
          Maxsulot topilmadi
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="product table">
            <TableHead>
              <TableRow>
                <TableCell>Maxsulot Nomi</TableCell>
                <TableCell>Kelgan Narxi</TableCell>
                <TableCell>Sotiladigan Narxi</TableCell>
                <TableCell>Omborda</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.key}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.incomingPrice}</TableCell>
                  <TableCell>{product.sellingPrice}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleEditProduct(product)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteProduct(product.key)}
                      color="error"
                      style={{ marginLeft: 8 }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Add or Edit Product Modal */}
      <AddProductModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleAddProduct}
        productToEdit={productToEdit}
      />
    </div>
  );
}
