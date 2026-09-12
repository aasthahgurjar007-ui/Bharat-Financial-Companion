const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let userData = {
  name: "Parth",
  balance: 50000,
  monthlyIncome: 30000,
  monthlyExpense: 18000,
  financialScore: 85
};

let transactions = [
  { id: 1, title: "Salary", amount: 30000, type: "income", date: "2026-09-01" },
  { id: 2, title: "Rent", amount: -8000, type: "expense", date: "2026-09-02" },
  { id: 3, title: "Groceries", amount: -2500, type: "expense", date: "2026-09-05" },
  { id: 4, title: "SIP Investment", amount: -5000, type: "saving", date: "2026-09-06" }
];

app.get('/api/user', (req, res) => { res.json(userData); });
app.get('/api/transactions', (req, res) => { res.json(transactions); });
app.get('/api/score', (req, res) => { res.json({ score: userData.financialScore, level: "Good", message: "Your saving habit is 40% better than last month!" }); });
app.get('/api/insights', (req, res) => { res.json(["You spent 30% on food this month", "Increase your SIP by Rs 2000", "Your emergency fund is 80% complete"]); });

app.listen(5000, () => { console.log('BFC Backend running on http://localhost:5000'); });