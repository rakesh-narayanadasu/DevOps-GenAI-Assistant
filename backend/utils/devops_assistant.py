import os
from openai import OpenAI

def review_devops(content: str) -> str:
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    prompt = f"You are a DevOps expert. I am stuck with this error, I need your expertise to troubleshoot & resolve this error. Explain in very detail:\n\n{content}"

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content

