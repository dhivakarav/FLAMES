# 🔥 FLAMES: Algorithmic Relationship Processor

A modern, interactive web application that uses string manipulation and cyclic elimination logic to calculate compatibility based on the classic "FLAMES" game. Built with a focus on clean UI/UX and real-time data tracking.

[Image of a clean, aesthetic web app user interface with pink and purple gradients]

## 🚀 Features

- **Strict Validation:** Custom Regex logic to prevent numeric or special character inputs.
- **Classic Algorithm:** Implements the character-cancellation and cyclic "FLAMES" elimination process.
- **Modern UI:** Responsive design built with React, Tailwind CSS, and Framer Motion.
- **Data Persistence:** Integrated with **Supabase** to track and log calculation results in real-time.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Animations:** Framer Motion
- **Database/Backend:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Icons:** Lucide-React

## 📐 How the Algorithm Works

The application follows a precise mathematical approach:
1. **Name Cancellation:** Removes common characters between Name 1 and Name 2.
2. **Count Calculation:** Sums the remaining unique characters ($n$).
3. **Cyclic Elimination:** Using $n$, it cyclically removes letters from the string `FLAMES` until only one remains.

$$Result = (n \pmod L)$$

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/dhivakarav/FLAMES.git](https://github.com/dhivakarav/FLAMES.git)
