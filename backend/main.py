from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from utils.interview import handle_interview
from utils.code_explainer import explain_code
from utils.devops_assistant import review_devops
from dotenv import load_dotenv
import os

load_dotenv()
print("🟢 API KEY LOADED:", os.getenv("OPENAI_API_KEY"))

app = FastAPI()

origins = ["*"]  # In production, use: ["http://13.232.92.206:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/interview")
def interview_bot(question: str = Form(...)):
    return {"response": handle_interview(question)}

@app.post("/explain-code")
def code_explainer(code: str = Form(...)):
    return {"response": explain_code(code)}

@app.post("/devops-assistant")
def devops_helper(content: str = Form(...)):
    return {"response": review_devops(content)}

