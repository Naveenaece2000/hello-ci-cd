# 🚀 Hello CI/CD Project

This project implements a complete CI/CD pipeline using **GitHub Actions, Docker, Flask, and AWS EC2**.  
Whenever code is pushed to GitHub, the pipeline automatically:

- Runs tests 🧪
- Builds a Docker image 🐳
- Deploys the updated application to AWS EC2 ☁️

---

## 📌 Features

- CI/CD pipeline automation using GitHub Actions
- Flask web application running in a Docker container
- Deployment to AWS EC2 via SSH
- Automated testing using Pytest
- Continuous Deployment

---

## 🏗️ Architecture

```
Developer Push → GitHub Actions → Test + Build → Docker Container → Deploy to EC2 → Live App
```

---

## 🧠 Tech Stack

- Python (Flask)
- GitHub Actions
- Docker
- AWS EC2 (Amazon Linux 2023)
- Pytest

---

## 📂 Project Structure

```
hello-ci-cd/
│── app.py
│── Dockerfile
│── requirements.txt
│── tests/
│     └── test_app.py
└── .github/workflows/ci-cd.yml
```

---

## ▶️ Run Application Locally

```sh
git clone https://github.com/YOUR-USERNAME/hello-ci-cd.git
cd hello-ci-cd
pip install -r requirements.txt
python app.py
```

App will start at:

👉 http://localhost:5000

---

## 🐳 Run Using Docker

```sh
docker build -t hello-ci-cd .
docker run -p 5000:5000 hello-ci-cd
```

---

## 🤖 CI/CD Workflow

The CI/CD workflow automatically:

1. Installs dependencies  
2. Runs tests  
3. Builds Docker image  
4. Deploys to AWS EC2 over SSH  

---

## 🌍 Deployment

Once deployed, access the app using your EC2 public IP:

👉 http://YOUR-EC2-PUBLIC-IP:5000
![image alt](https://github.com/Naveenaece2000/hello-ci-cd/blob/b5f392bf473eb30b78547d6ddad9fef851f4d717/Screenshot%20(60).png)



---
