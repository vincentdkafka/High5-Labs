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
You are a senior AI automation consultant at HIGH5 Agency.

Analyze the business and give a HIGH-VALUE, PRACTICAL response.

IMPORTANT:
- Output MUST be in clean Markdown
- Use headings, bullet points, and short paragraphs
- Be specific (no generic advice)
- Keep it structured and readable
- use spacing after each point

---

## Business Details
- Name: ${name}
- Industry: ${industry}
- Revenue: ${revenue}
- Team Size: ${team}
- Problems: ${problem}
- Tools: ${tools}

---

## Output Format

# 🔍 Key Problems
- List 3–5 specific issues in their current system
- Mention where their current setup is failing

# ⚙️ Automation Plan (What + How)
- Explain exact automation flows
- Mention tools, integrations, workflows
- Keep it actionable

# 📈 Expected Impact
- Revenue increase (estimate)
- Time saved
- Efficiency gains

# 🚀 Why HIGH5 Agency
- Why your solution is better than their current system
- Focus on ROI + scalability

---
keep it concise and 20-30 lines maximum
Keep it sharp, practical, and business-focused.
`;

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPEN_AI_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3-70b-instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful AI automation expert.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 800,
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
