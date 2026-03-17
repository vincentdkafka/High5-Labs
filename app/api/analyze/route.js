import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, industry, revenue, team, problem, tools } = body;

    if (!name || !industry || !problem) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const prompt = `
You are an AI automation consultant for HIGH5 Agency.

Business:
Name: ${name}
Industry: ${industry}
Revenue: ${revenue}
Team: ${team}
Problems: ${problem}
Tools: ${tools}

Give a concise, practical plan:

1. Problems
2. Automation (what + how)
3. Impact (revenue/conversion)
4. Why HIGH5

Be specific. No generic advice.
Make this concise points not too big
understand problem and hive automation solution about how can we as agency help you 
output should be suggestion way about where is your legacy system fails and how our system is better
`;

  
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPEN_AI_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI automation expert.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.8,
    });

    return Response.json(completion.choices[0].message);
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: error.message || "Server error. Try again." },
      { status: 500 },
    );
  }
}
