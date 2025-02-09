import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Button, InputNumber, Select, message } from 'antd';
import { Option } from 'antd/es/mentions';

export default function AddProductModal({ isVisible, onClose, onSave, productToEdit }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (productToEdit) {
      form.setFieldsValue(productToEdit);
    } else {
      form.resetFields();
    }
  }, [productToEdit, form]);

  const handleSubmit = (values) => {
    onSave(values);  
    form.resetFields();
    onClose(); 
    message.success(productToEdit ? 'Product updated successfully!' : 'Product added successfully!');
  };

  return (
    <Modal
      title={productToEdit ? 'Edit Product' : 'Add Product'}
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Maxsulot Nomi"
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input placeholder="Maxsulot Nomi" />
        </Form.Item>

        <Form.Item
          name="incomingPrice"
          label=" Kelgan Narxi"
          rules={[{ required: true, message: 'Please input incoming price!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Kelgan Narxi" min={0} precision={2} />
        </Form.Item>

        <Form.Item
          name="sellingPrice"
          label="Sotiladigan Narxi"
          rules={[{ required: true, message: 'Please input selling price!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Sotiladigan Narxi" min={0} precision={2} />
        </Form.Item>

        <Form.Item
          name="stock"
          label="Omborda bor"
          rules={[{ required: true, message: 'Please input stock!' }]}
        >
          <InputNumber style={{ width: '100%' }} placeholder="Omborda" min={0} />
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {productToEdit ? 'Update Product' : 'Add Product'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
