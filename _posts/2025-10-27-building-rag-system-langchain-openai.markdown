---
layout: post
title: "Building a RAG System with LangChain and OpenAI"
date: 2025-10-27 10:00:00 -0400
categories: [Tutorials, AI/ML]
tags: [Python, LangChain, OpenAI, RAG, AI, GPT-4, Vector Database]
author: lana
excerpt: "Learn how to build a Retrieval-Augmented Generation (RAG) system using LangChain and OpenAI GPT-4. This tutorial covers vector databases, embeddings, and creating an AI assistant that can answer questions about your documents."
---

When building the **Study Buddy AI** project, one of the most exciting challenges was implementing a Retrieval-Augmented Generation (RAG) system that could accurately answer questions based on uploaded study materials. In this tutorial, I'll walk you through how to build your own RAG system using LangChain and OpenAI.

## What is RAG?

Retrieval-Augmented Generation combines the power of large language models (LLMs) with external knowledge retrieval. Instead of relying solely on the model's training data, RAG systems:

1. **Retrieve** relevant information from a knowledge base
2. **Augment** the LLM prompt with that information
3. **Generate** accurate, context-aware responses

This approach significantly reduces hallucinations and allows LLMs to work with up-to-date, domain-specific information.

## Prerequisites

Before we start, make sure you have:

- Python 3.9 or higher installed
- An OpenAI API key ([get one here](https://platform.openai.com/api-keys))
- Basic understanding of Python and APIs

## Setting Up the Environment

First, let's install the required packages:

```bash
pip install langchain openai chromadb tiktoken
```

Here's what each package does:
- **langchain**: Framework for building LLM applications
- **openai**: Official OpenAI Python client
- **chromadb**: Vector database for storing embeddings
- **tiktoken**: Token counting for OpenAI models

## Step 1: Loading and Chunking Documents

RAG systems work best when documents are split into manageable chunks. Here's how to load and chunk a text file:

```python
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load your document
loader = TextLoader('study_material.txt')
documents = loader.load()

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len,
)
chunks = text_splitter.split_documents(documents)

print(f"Split into {len(chunks)} chunks")
```

**Key parameters:**
- `chunk_size`: Maximum characters per chunk (1000 works well for most content)
- `chunk_overlap`: Overlap between chunks to maintain context (200 is a good starting point)

## Step 2: Creating Embeddings and Vector Store

Next, we convert text chunks into vector embeddings and store them in a vector database:

```python
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
import os

# Set your OpenAI API key
os.environ['OPENAI_API_KEY'] = 'your-api-key-here'

# Create embeddings
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Create vector store
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)

print("Vector store created successfully!")
```

The `text-embedding-3-small` model offers a good balance between performance and cost. For production applications with large document sets, consider `text-embedding-3-large`.

## Step 3: Building the RAG Chain

Now let's create the RAG chain that retrieves relevant chunks and generates answers:

```python
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

# Initialize the LLM
llm = ChatOpenAI(
    model="gpt-4",
    temperature=0.7
)

# Create a custom prompt template
prompt_template = """You are a helpful study assistant. Use the following context to answer the question.
If you don't know the answer based on the context, say "I don't have enough information to answer that."

Context: {context}

Question: {question}

Answer:"""

PROMPT = PromptTemplate(
    template=prompt_template,
    input_variables=["context", "question"]
)

# Create the RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    chain_type_kwargs={"prompt": PROMPT},
    return_source_documents=True
)
```

**Important parameters:**
- `temperature`: Controls randomness (0.7 is balanced)
- `k`: Number of relevant chunks to retrieve (3-5 is optimal)
- `chain_type`: "stuff" concatenates all retrieved docs into the prompt

## Step 4: Querying the RAG System

Let's put it all together and ask some questions:

```python
def ask_question(question):
    """Query the RAG system and return answer with sources."""
    result = qa_chain({"query": question})

    print(f"Question: {question}\n")
    print(f"Answer: {result['result']}\n")
    print("Sources:")
    for i, doc in enumerate(result['source_documents'], 1):
        print(f"{i}. {doc.page_content[:200]}...")
    print("\n" + "="*80 + "\n")

# Example queries
ask_question("What are the main themes in the study material?")
ask_question("Can you explain the key concepts?")
ask_question("What are the most important points to remember?")
```

## Step 5: Improving Performance

Here are some optimizations I implemented in Study Buddy AI:

### 1. Semantic Search with MMR

Maximum Marginal Relevance (MMR) retrieves diverse results:

```python
retriever = vectorstore.as_retriever(
    search_type="mmr",
    search_kwargs={
        "k": 5,
        "fetch_k": 20,
        "lambda_mult": 0.5
    }
)
```

### 2. Metadata Filtering

Add metadata to chunks for better filtering:

```python
chunks_with_metadata = []
for i, chunk in enumerate(chunks):
    chunk.metadata.update({
        "chunk_id": i,
        "subject": "Biology",
        "chapter": "Cell Structure"
    })
    chunks_with_metadata.append(chunk)
```

### 3. Caching for Common Queries

Implement caching to reduce API costs:

```python
from functools import lru_cache

@lru_cache(maxsize=100)
def cached_query(question):
    return qa_chain({"query": question})
```

## Real-World Considerations

When deploying a RAG system in production, consider:

1. **Cost Management**: OpenAI API calls can add up. Monitor usage and implement rate limiting.
2. **Latency**: Vector search is fast, but LLM generation takes 2-5 seconds. Consider streaming responses.
3. **Error Handling**: Always handle API errors gracefully with retry logic.
4. **Security**: Never expose API keys. Use environment variables or secret management services.

## Complete Example

Here's a complete, production-ready example:

```python
import os
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

class RAGSystem:
    def __init__(self, api_key, documents_path):
        os.environ['OPENAI_API_KEY'] = api_key

        # Load and process documents
        loader = TextLoader(documents_path)
        documents = loader.load()

        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        chunks = text_splitter.split_documents(documents)

        # Create vector store
        embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        self.vectorstore = Chroma.from_documents(
            documents=chunks,
            embedding=embeddings,
            persist_directory="./chroma_db"
        )

        # Initialize LLM
        llm = ChatOpenAI(model="gpt-4", temperature=0.7)

        # Create RAG chain
        prompt_template = """Use the following context to answer the question.
        If you don't know, say so.

        Context: {context}
        Question: {question}
        Answer:"""

        PROMPT = PromptTemplate(
            template=prompt_template,
            input_variables=["context", "question"]
        )

        self.qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=self.vectorstore.as_retriever(search_kwargs={"k": 3}),
            chain_type_kwargs={"prompt": PROMPT},
            return_source_documents=True
        )

    def query(self, question):
        """Ask a question and return the answer with sources."""
        try:
            result = self.qa_chain({"query": question})
            return {
                "answer": result['result'],
                "sources": [doc.page_content for doc in result['source_documents']]
            }
        except Exception as e:
            return {"error": str(e)}

# Usage
if __name__ == "__main__":
    rag = RAGSystem(
        api_key="your-api-key-here",
        documents_path="study_material.txt"
    )

    response = rag.query("What are the main topics covered?")
    print(f"Answer: {response['answer']}")
```

## Lessons Learned

Building Study Buddy AI taught me several valuable lessons:

1. **Chunk size matters**: Too small = loss of context. Too large = irrelevant information.
2. **Prompt engineering is crucial**: Clear instructions significantly improve answer quality.
3. **Always return sources**: This builds user trust and allows verification.
4. **Test with diverse queries**: Edge cases reveal system weaknesses.

## Next Steps

To further improve your RAG system:

- Implement **conversation memory** for multi-turn interactions
- Add **document preprocessing** to remove noise
- Use **hybrid search** combining semantic and keyword search
- Implement **query rewriting** for better retrieval
- Add **answer evaluation** to measure quality

## Conclusion

RAG systems bridge the gap between LLMs and custom knowledge bases, enabling powerful AI applications like Study Buddy AI. While this tutorial covers the basics, production systems require careful attention to error handling, performance optimization, and user experience.

The complete code for Study Buddy AI is available on my [GitHub](https://github.com/lanagasparyan). Feel free to reach out if you have questions or want to discuss RAG implementation strategies!

---

**What are you building with RAG?** Share your projects in the comments below!
