export const deepseek = {
  createChatCompletion: async (payload: any) => {
    const response = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok)
      throw new Error(`DeepSeek API error: ${response.statusText}`);
    return response.json();
  },
};
