import { Request, Response } from 'express';
import itemModel from '../models/itemModel';
import expressAsyncHandler from 'express-async-handler';

// --------------------------------------------------------------------

// GET
// Items
export const getItems = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const items = await itemModel.find();
      if (items.length == 0) {
        res.status(404);
        throw new Error('No items found');
      }
      res.status(200).json({ data: items });
    } catch (error: any) {
      res.status(400);
      throw new Error(error);
    }
  }
);

// GET
// Item
export const getItem = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const item = await itemModel.findById(id);
      if (!item) {
        res.status(404);
        throw new Error('No item found');
      }
      res.status(200).json({ data: item });
    } catch (error) {
      res.status(400);
      throw new Error('Server Error');
    }
  }
);

// POST
// Create Item
export const createItem = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { name, description, price } = req.body;
      if (!name || !description || !price) {
        res.status(400);
        throw new Error('All fields require');
      }
      const item = await itemModel.create({
        name,
        description,
        price,
      });

      res.status(200).json({ message: 'Item created', data: item });
    } catch (error: any) {
      res.status(500);
      throw new Error(error);
    }
  }
);

// PUT
// Update Item
export const updateItem = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const { name, description, price } = req.body;
      const item = await itemModel.findByIdAndUpdate(
        id,
        { name, description, price },
        { new: true, runValidators: true }
      );
      res.status(200).json({ message: 'Item updated', data: item });
    } catch (error) {
      res.status(500);
      throw new Error('Server Error');
    }
  }
);

// DELETE
// Delete Item
export const deleteItem = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const item = await itemModel.findByIdAndDelete(id);
      if (!item) {
        res.status(404);
        throw new Error('No item found');
      }
      res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
      res.status(400);
      throw new Error('Server Error');
    }
  }
);
