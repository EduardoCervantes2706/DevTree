import { Router } from "express";

const router = Router()

// Autenticación y registro
router.post('/auth/register', (req, res) => {
    res.json({ msg: "Petición POST" })
});

export default router