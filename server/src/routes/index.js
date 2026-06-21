import { Router } from 'express';
import noteRoutes from './note.routes.js';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Everest API 🏔️' }));

// Mount feature routers here
router.use('/notes', noteRoutes);

export default router;
