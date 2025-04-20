import os
from openai import OpenAI

def explain_code(code: str) -> str:
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f"You are a DevOps Expert & I want You to Explain this code in detail with examples & real scenarios:\n\n{code}"

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content

