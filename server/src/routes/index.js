import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'Everest API 🏔️' }));

// Mount feature routers here

export default router;
