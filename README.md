<!-- DHIVA-HEADER -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24,30&height=170&section=header&text=FLAMES&fontSize=46&fontColor=ffffff&animation=fadeIn" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3000&pause=900&color=6C63FF&center=true&vCenter=true&width=600&lines=The%20classic%20FLAMES%20relationship%20game;by%20Dhivakar%20A%20V%20%E2%9C%A8" alt="FLAMES" />

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![GitHub](https://img.shields.io/badge/by-dhivakarav-181717?style=flat-square&logo=github)

</div>

🔥 _The classic FLAMES relationship game_

---

# FLAMES: Algorithmic Relationship Processor          
 
A modern, interactive web application that uses string manipulation and cyclic elimination logic to calculate compatibility based on the classic "FLAMES" game. Built with a focus on clean UI/UX and real-time data tracking.

[Image of a clean, aesthetic web app user interface with pink and purple gradients]
 
## Features
- **Strict Validation:** Custom Regex logic to prevent numeric or special character inputs.
- **Classic Algorithm:** Implements the character-cancellation and cyclic "FLAMES" elimination process.
- **Modern UI:** Responsive design built with React, Tailwind CSS, and Framer Motion.
- **Data Persistence:** Integrated with **Supabase** to track and log calculation results in real-time.

## Tech Stack 

- **Frontend:** React.js, Tailwind CSS
- **Animations:** Framer Motion
- **Database/Backend:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Icons:** Lucide-React

## How the Algorithm Works

The application follows a precise mathematical approach:
1. **Name Cancellation:** Removes common characters between Name 1 and Name 2.
2. **Count Calculation:** Sums the remaining unique characters ($n$).
3. **Cyclic Elimination:** Using $n$, it cyclically removes letters from the string `FLAMES` until only one remains.

$$Result = (n \pmod L)$$

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/dhivakarav/FLAMES.git](https://github.com/dhivakarav/FLAMES.git)
