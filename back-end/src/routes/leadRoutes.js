const express = require('express');
const Lead = require('../models/Leads');
const User = require('../models/User');

const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, email, phone, source, createdAt, userId } = req.body;

    try {
        const user = await User.findById({ _id: userId });

        if (!user) {
            return res.status(400).json({ error: "Usuario não encontrado" })
        }

        const newLead = new Lead({
            name,
            email,
            phone,
            source,
            createdAt,
            user: userId
        });

        await newLead.save();
        res.status(200).json(newLead);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const Leads = await Lead.find({ userId: userId });

        if (!Leads) return res.status(204).send("Nenhum Lead disponível.");

        res.json(Leads);
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor");
    }
})

router.get('/bit-ai/:leadId', async (req, res) => {
    try {
        const { LeadId } = req.params;
        const Lead = await Lead.findById(LeadId);

        if (!Lead) return res.status(404).send("Lead não encontrado")

        res.json(Lead)
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor")
    }
})

module.exports = router;