import { Router } from 'express';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from '../controllers/itemController';
const router = Router();

// ----------------------------------------------------------------

// GET
// Items
router.route('/').get(getItems);

// GET
// Item
router.route('/:id').get(getItem);

// POST
// Create Item
router.route('/').post(createItem);

// PUT
// Update Item
router.route('/:id').put(updateItem);

// DELETE
// Delete Item
router.route('/:id').delete(deleteItem);

export default router;
