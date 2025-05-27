# 🌐 Portfolio Website - Pramudi Samarawickrama

Welcome to the repository for my personal portfolio website!  
This project showcases my skills, experience, and creative work as an **IT undergraduate, Web UI Designer, and Artist**.

> 🚧 **Status:** Fully developed, awaiting deployment.

## ✨ Features

- My academic and professional journey  
- Projects and technical skills  
- **Contact form with email notification system**
- **Auto-reply confirmation emails for form submissions**
- Resume access
- Responsive design optimized for all devices
- Interactive UI elements with Angular

## ⚙️ Technologies Used

- **Frontend:** Angular  
- **Backend:** Node.js/Express (for email services)
- **Email Service:** Nodemailer with Gmail
- **Form Handling:** Angular Reactive Forms

## 📧 Email System Features

The portfolio includes an integrated contact system with:

- **Secure Form Submission:** Data validation on both client and server side
- **Email Notifications:** Instant delivery of contact messages to portfolio owner
- **Auto-Reply System:** Automatic confirmation emails to users who submit the form
- **Environment Variable Configuration:** Secure credential management
- **Responsive Status Updates:** Clear feedback on submission status

## 🛠️ Technical Implementation

- **Frontend Components:**
  - Reactive form with validation
  - Status indicators (loading, success, error)
  - Responsive design for all device sizes

- **Backend Services:**
  - RESTful API endpoint for form processing
  - Nodemailer integration with Gmail
  - Error handling and logging
  - Environment variable configuration for security

## 🖼️ Screenshots

### 🔹 Home Page  
<img src="src/assets/ss_home.png" alt="Home Page" width="700"/>

### 🔹 About Me Section  
<img src="src/assets/ss_aboutme.png" alt="About Me" width="700"/>

### 🔹 Skills Section  
<img src="src/assets/ss_skills.png" alt="Skills" width="700"/>

### 🔹 Projects Section  
<img src="src/assets/ss_projects.png" alt="Projects" width="700"/>

### 🔹 Contact Section  
<img src="src/assets/ss_contact.png" alt="Contact" width="700"/>

## 🔒 Security Considerations

- Environment variables for sensitive credentials
- No exposure of email passwords in client-side code
- Secure handling of form data
- Input validation to prevent injection attacks

## 🚀 Future Enhancements

- CAPTCHA integration to prevent spam submissions
- Rate limiting for the contact form
- Analytics tracking for form submissions
- Additional customization options for email templates

------
 Here is the **setup Instructions** for you


## Step 1: Clone the Repository

Open your terminal or command prompt and run:  
```bash
git clone https://github.com/Pramudi02/MyPortfolio
cd MyPortfolio
````

---

## Step 2: Setup and Run the Frontend

1. you already in the frontend folder:
2. Install dependencies:

```bash
npm install
```

3. Start the Angular development server:

```bash
npm start
ng serve
```

4. Open your browser and go to:

```
http://localhost:4200
```

---

## Step 3: Setup and Run the Backend

1. Open a new terminal window/tab.

2. Navigate to the backend folder:

```bash
cd backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the backend directory with the following variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password-or-app-password
PORT=3000
```

5. Start the backend server:

```bash
npm start
```

6. Your backend API will be running on:

```
http://localhost:3000
```

---

## Notes

* Replace `your-email@gmail.com` and `your-email-password-or-app-password` with your actual Gmail address and app password for Nodemailer email sending.
* Ensure you have Node.js and npm installed on your system before starting.
* The frontend will communicate with the backend for form submissions and email notifications.
* Keep your `.env` file secure and do **not** commit it to any public repositories.

---

## Troubleshooting

* If `npm start` fails, try updating your Node.js and npm versions.
* Make sure ports `4200` (frontend) and `3000` (backend) are not blocked or used by other apps.
* Check your email credentials and enable "App Passwords" if using Gmail with 2FA.

---

If you face any issues or have questions, feel free to reach out!

---

*Happy coding!*

```
