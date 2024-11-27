### Test AI Generative from Google with Gemini 

You need to install this nodejs package:

```
npm install @google/generative-ai
```
I tested with the default example from [ai.google.dev](https://ai.google.dev/gemini-api/docs/quickstart?lang=node)

The result of the running source code for this questioon :
```
prompt = "Find data about Catalin George Festila, born 1976, nicknames : catafest and mythcat. You can find it on linkedit,github,intsgram or web search.";
```

... has this reult :

```
generative_ai_001>node index.js
I cannot find publicly available data about a Catalin George Festila born in 1976 with the nicknames "catafest" and "mythcat."  My search across various online databases and public records yielded no results.  This doesn't necessarily mean the person doesn't exist, but rather that information about them isn't readily accessible online.

To find this information, you might need to try more specific searches,  explore less common databases, or consider contacting Romanian authorities if you believe the individual resides in Romania.  Knowing a more specific location (city, region) would significantly improve the chances of success.
```

Another question :

```
const prompt = "Make a summary from last months in 2024 and future year 2025, about hardware changes with iCPU AMD.";
```

... has this result:

```
node index.js
There's no publicly available, comprehensive "last month of 2024" data on AMD iCPU hardware changes as of October 26, 2023.  We are still in 2023.  Predicting future hardware releases (even for 2025) with certainty is impossible.  However, we can make some educated guesses based on current trends and AMD's typical release cycles:

**Looking forward from now (October 2023) to a hypothetical "last month of 2024" and into 2025, we might expect:**

* **Refined Zen 5 architecture:**  We'll likely see iterative improvements to the Zen 5 architecture (assuming it's released in late 2023 or early 2024 as expected) throughout 2024 and into 2025.  This might involve optimizations for power efficiency, improved IPC (instructions per clock),  higher clock speeds, and possibly new features. We could see various CPU SKUs catering to different market segments being released across this timeframe.
* **New AM5 socket support:**  It's probable AMD will continue to support the AM5 socket for at least a portion of 2025.  They may introduce new chipsets or minor revisions to the socket to support new features or higher-end CPUs.
* **Potential Zen 5+ or Zen 6 architecture introduction (2025):**  AMD typically introduces major architecture revisions every few years.  A new architecture (Zen 5+ or Zen 6) might appear in 2025, bringing substantial performance improvements.  The timing of this is uncertain.
* **Continued focus on integrated graphics:**  Expect ongoing advancements in integrated graphics capabilities, potentially including improved performance and feature sets,  possibly related to a new architecture or improved manufacturing processes.
* **Emphasis on AI acceleration:**  AMD will likely continue integrating features that improve performance for AI workloads, both in the CPU cores and potentially through specialized hardware additions.


**In short:**  The "last month of 2024" and 2025 are likely to see a progression of AMD's iCPU offerings built around iterative improvements to existing architectures (Zen 5) and possibly the introduction of a completely new architecture (Zen 5+ or Zen 6), focusing on increased performance, energy efficiency and AI capabilities.  The exact details will depend on AMD's product roadmap and market conditions.  These are projections based on current information;  actual releases may differ.
```
