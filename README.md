# 📝 Registration Portal

A responsive and interactive **Registration Portal** built with **React.js**, **Formik**, **Yup**, and the **Fetch API**. The application provides reusable form components, client-side validation, password visibility control, API integration, and a modern responsive user interface.

---

## 🚀 Features

- ✅ Responsive registration form
- ✅ Reusable React components
- ✅ Formik form state management
- ✅ Yup form validation
- ✅ First Name and Last Name validation
- ✅ Email validation
- ✅ 10-digit phone number validation
- ✅ Password strength validation
- ✅ Confirm password validation
- ✅ Gender selection
- ✅ Terms & Conditions checkbox
- ✅ Show/Hide password functionality
- ✅ API integration using Fetch API
- ✅ Loading state during registration
- ✅ Success and error messages
- ✅ Responsive design for mobile and desktop
- ✅ Clean and maintainable project structure

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| Formik | Form state management |
| Yup | Form validation |
| Fetch API | API integration |
| HTML5 | Page structure |
| CSS3 | Responsive UI styling |
| Git | Version control |
| GitHub | Project hosting |

---

## 📂 Project Structure

```text
registration-portal/
│
├── src/
│   │
│   ├── components/
│   │   ├── InputField.jsx
│   │   ├── PasswordField.jsx
│   │   └── SubmitButton.jsx
│   │
│   ├── pages/
│   │   └── Register.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 📋 Form Validation

The registration form validates the following fields:

### First Name

- Required
- Minimum 2 characters

### Last Name

- Required
- Minimum 2 characters

### Email

- Required
- Must be a valid email address

### Phone Number

- Required
- Must contain exactly 10 digits

### Password

Password must:

- Be at least 8 characters
- Contain an uppercase letter
- Contain a number

### Confirm Password

- Required
- Must match the password

### Gender

- Required

### Terms & Conditions

- User must accept the terms and conditions

---

## 🔌 API Integration

The project currently uses the following demo API:

```text
https://jsonplaceholder.typicode.com/users
```

Registration data is sent using a `POST` request.

Example:

```javascript
const response = await fetch(API_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(userData),
});
```

For a production application, replace the demo API with your own backend API.

Example:

```javascript
const API_URL = "http://localhost:8000/api/register";
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/registration-portal.git
```

Replace `your-username` with your GitHub username.

---

## 2. Navigate to the Project

```bash
cd registration-portal
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start the Development Server

```bash
npm run dev
```

---

## 5. Open in Browser

Open:

```text
http://localhost:5173
```

---

# 📦 Required Dependencies

The project uses:

```bash
npm install react react-dom
```

Formik:

```bash
npm install formik
```

Yup:

```bash
npm install yup
```

Or install everything after cloning:

```bash
npm install
```

---

# 🖥️ Application Workflow

```text
                 ┌─────────────────┐
                 │      User       │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Registration UI │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │     Formik      │
                 │ Form Management │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │      Yup        │
                 │   Validation    │
                 └────────┬────────┘
                          │
                   Valid Form?
                    /       \
                  No         Yes
                  │           │
                  ▼           ▼
            Show Errors    API Request
                              │
                              ▼
                       ┌──────────────┐
                       │ Backend/API  │
                       └──────┬───────┘
                              │
                              ▼
                       Success Message
```

---

# 🧩 Reusable Components

The application follows a reusable component structure.

### InputField

Used for:

```text
First Name
Last Name
Email
Phone
```

### PasswordField

Used for:

```text
Password
Confirm Password
```

It also provides:

```text
Show / Hide Password
```

### SubmitButton

Handles:

```text
Normal State
Loading State
Disabled State
```

---

# 🎨 UI Features

The interface includes:

- Modern card-based layout
- Responsive design
- Form input focus effects
- Validation error messages
- Success notification
- API error notification
- Password visibility toggle
- Mobile-friendly layout
- Clean typography
- Accessible form labels

---

# 📱 Responsive Design

The application works across:

```text
Desktop
Laptop
Tablet
Mobile
```

On smaller screens, the two-column form automatically changes to a single-column layout.

---

# 🔮 Future Enhancements

The following features can be added in future versions:

- 🔐 User Login
- 🔑 JWT Authentication
- 🔒 Password Hashing
- 👤 User Profile
- 📧 Email Verification
- 🔄 Forgot Password
- 🗄️ PostgreSQL/MySQL Database
- ⚡ FastAPI Backend
- 🛡️ Protected Routes
- 📊 Admin Dashboard
- 👥 User Management
- 🌙 Dark Mode
- 🔔 Toast Notifications
- 🚀 Deployment using Vercel/Netlify

---

# 🧪 Testing

Run the application:

```bash
npm run dev
```

Test the following scenarios:

### Empty Form

Expected:

```text
Required field validation errors
```

### Invalid Email

Example:

```text
abc.com
```

Expected:

```text
Enter a valid email address
```

### Invalid Phone

Example:

```text
12345
```

Expected:

```text
Phone number must contain 10 digits
```

### Weak Password

Example:

```text
password
```

Expected:

```text
Password must contain an uppercase letter
Password must contain a number
```

### Password Mismatch

Expected:

```text
Passwords must match
```

### Valid Registration

Expected:

```text
Registration successful!
Your account has been created.
```

---

# 📸 Screenshots

<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/615065d3-6534-49fa-8588-913da5b6002e" />

```markdown
## 📸 Screenshots
### For wrong input data validations:
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/c32fe3d1-ec5f-4a8f-acf6-3caa610158b6" />
### For correct input data validations:
<img width="1918" height="1032" alt="image" src="https://github.com/user-attachments/assets/b6a386d9-a515-45d7-94a1-01d178f796b9" />
Final output:
<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/ffc2b805-fae0-43b4-8fe4-5f66e366cef7" />

```

Recommended folder:

```text
screenshots/
└── registration-page.png
```

---

# 🌐 Deployment

You can deploy the React application using:

- Vercel
- Netlify
- GitHub Pages

Build the project:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

# 👨‍💻 Author

**Bachina Sai Harshith**

GitHub:  
https://github.com/saiharshith123

LinkedIn:  
https://www.linkedin.com/in/bachina-sai-harshith-b06a50208/

---

# 📄 License

This project is created for educational and portfolio purposes.

You are free to modify and use this project for learning and development.
