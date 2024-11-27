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
