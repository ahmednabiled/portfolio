// Stage definitions for the LLM engineering roadmap.
// Shared by roadmap.html (public view) and x9k-admin-roadmap.html (editor).
window.ROADMAP_STAGES = [
  {
    name: "Foundations", topics: [
      ["Build a tokenizer", "Byte-pair encoding from scratch: vocab, merges, encode/decode round-trip."],
      ["Learn embeddings", "Embedding tables, dimensionality, weight tying, learned vs sinusoidal."]
    ]
  },
  {
    name: "Position & Attention", topics: [
      ["Implement RoPE / ALiBi", "Rotary position embeddings and attention linear biases; relative vs absolute."],
      ["Hand-wire attention", "Score, scale, mask, softmax, weighted sum by hand before trusting libraries."],
      ["Build MHA", "Multi-head attention: projections, head split, concat, output projection."]
    ]
  },
  {
    name: "Transformer", topics: [
      ["Build a Transformer block", "Residuals, pre/post-norm, MLP, activations, dropout."],
      ["Train a mini-former", "Full training loop: data, loss, optimizer, schedules, checkpoints."],
      ["Compare objectives", "Causal LM vs masked LM vs prefix/denoising; what each objective teaches."]
    ]
  },
  {
    name: "Inference", topics: [
      ["Build sampling", "Greedy, temperature, top-k, top-p, repetition penalties, beam search."],
      ["Speculative decoding", "Draft model, verification, acceptance rate, effective speedup."],
      ["KV cache", "Cache keys/values, memory layout, prefill vs decode, batching."]
    ]
  },
  {
    name: "Attention at Scale", topics: [
      ["MQA / GQA / MLA", "Multi-query, grouped-query and multi-head latent attention trade-offs."],
      ["Long context", "Context extension, sliding window, position interpolation, attention sinks."],
      ["FlashAttention", "Tiling, online softmax, IO-awareness, memory vs compute bound."]
    ]
  },
  {
    name: "Hardware & Efficiency", topics: [
      ["Hardware budgets", "FLOPs, memory bandwidth, arithmetic intensity, VRAM sizing, roofline."],
      ["Toy MoE", "Mixture-of-experts routing, top-k gating, load balancing, capacity factor."],
      ["Sparse model trade-offs", "Sparsity, structured vs unstructured, quality vs throughput."]
    ]
  },
  {
    name: "Alt Architectures", topics: [
      ["State-space / linear attention", "SSMs, Mamba-style recurrence and linear-attention variants."],
      ["Diffusion language models", "Discrete diffusion / masked generation as an alternative to autoregression."]
    ]
  },
  {
    name: "Data & Scaling", topics: [
      ["Data pipelines", "Collection, cleaning, dedup, tokenization, sharding, streaming."],
      ["Synthetic data", "Generation, filtering, verification and mixing with real data."],
      ["Scaling laws", "Loss vs compute/params/data, Chinchilla fits, extrapolating runs."]
    ]
  },
  {
    name: "Alignment", topics: [
      ["SFT / DPO / RLHF / GRPO", "Instruction tuning, preference optimization and policy-gradient RL methods."]
    ]
  },
  {
    name: "Serving", topics: [
      ["Quantization", "INT8/INT4, GPTQ/AWQ, SmoothQuant, calibration and quality recovery."],
      ["Serving stacks", "Continuous batching, paged attention, schedulers, vLLM/TGI-style serving."],
      ["Eval harnesses", "Benchmarks, harnesses, regression suites, human and model-based evals."]
    ]
  },
  {
    name: "Applications", topics: [
      ["RAG", "Retrieval, chunking, embeddings, reranking, grounded generation, evaluation."],
      ["Tool use / agents", "Function calling, planning, memory, multi-step control loops."],
      ["Vision-language adapters", "Vision encoders, projection adapters, multimodal token layout."]
    ]
  },
  {
    name: "Safety & Understanding", topics: [
      ["Interpretability", "Probing, feature attribution, sparse autoencoders, circuits."],
      ["Red-team suite", "Jailbreaks, adversarial prompts, refusal evals, safety regression tests."]
    ]
  },
  {
    name: "Capstone", topics: [
      ["Full capstone model system", "End-to-end: data, pretrain, adapt, align, serve, evaluate, document."]
    ]
  }
];
