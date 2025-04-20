import os
from openai import OpenAI

def handle_interview(question: str) -> str:
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f"You are a DevOps technical interview bot. You are also a DevOps expert with DevOps Interview Knowldege Answer this question clearly & in very detail with examples well elaborated:\n\n{question}"

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content

