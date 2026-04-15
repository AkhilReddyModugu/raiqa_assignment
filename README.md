# 🍽 Home Chef Meals – RAIQA Assignment

A simple React application that allows users to browse meals prepared by home chefs and manage a selection list.

---

## 🚀 Live Demo

🔗 https://raiqa-assignment-ruby.vercel.app/

---

## 🧠 Features

### ✅ Meal List

- Displays a list of meals
- Each meal shows:

  - Name
  - Price

- Only available meals are shown by default

---

### 🔄 Availability Filter

- Toggle between:

  - Show only available meals
  - Show all meals

---

### ➕ Add to Selection

- Add meals to selected list
- Prevents duplicate additions
- Button is disabled after adding

---

### 🧾 Selected Meals

- Displays selected meals
- Shows total price
- Supports:

  - Removing individual meals
  - Resetting entire list

---

### 🔃 Sorting

- Toggle sorting:

  - Price: Low → High
  - Price: High → Low

---

### 💾 Persistence

- Selected meals are stored in `localStorage`
- Data persists after page refresh

---

## 🛠 Tech Stack

- React (Vite)
- Material UI (MUI)
- JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Controls.jsx
│   ├── MealCard.jsx
│   ├── MealList.jsx
│   ├── SelectedMeals.jsx
│   └── SelectedMealItem.jsx
├── constants/
│   └── texts.js
├── data/
│   └── meals.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/AkhilReddyModugu/raiqa_assignment

# Navigate into project
cd raiqa_assignment

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Notes

- No backend or APIs used (as per requirements)
- Focused on clean structure and clarity
- UI kept simple using Material UI

---

## 👤 Author

**Akhil Reddy Modugu**
