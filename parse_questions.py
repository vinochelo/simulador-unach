import re
import json

path = r"C:\Users\Mathew\.gemini\antigravity\brain\eebbab10-cfa0-4603-a9c0-f5c33d0607b4\.system_generated\steps\6\content.md"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Using the working regex from inspect_html.py
preguntas_blocks = re.findall(
    r'(<div[^>]+id="pregunta-[^"]+"[^>]*>[\s\S]*?)(?=<div[^>]+id="pregunta-|<\!--[^>]+-->|<!-- fin preguntas -->|id="btn-finalizar"|id="simulador-nav"|$)', 
    content
)

questions_list = []

for idx, block in enumerate(preguntas_blocks):
    # Extract ID
    id_match = re.search(r'id="pregunta-([^"]+)"', block)
    q_id = id_match.group(1) if id_match else f"q_{idx+1}"
    
    # Extract Category
    cat_match = re.search(r'<span id="categoria-pregunta">([^<]+)</span>', block)
    category = cat_match.group(1).strip() if cat_match else "General"
    
    # Extract Enunciado
    enun_match = re.search(r'class="[^"]*enunciado[^"]*"[^>]*>([\s\S]*?)</div>', block)
    if enun_match:
        enun_html = enun_match.group(1).strip()
        # Remove tags but keep text clean
        enun_text = re.sub(r'<[^>]+>', ' ', enun_html).strip()
        enun_text = " ".join(enun_text.split())
    else:
        enun_html = ""
        enun_text = "No se pudo extraer el enunciado."
        
    # Extract options
    options_raw = re.findall(r'<div\s+[^>]*class="[^"]*opcion-simulador[^"]*"[^>]*>([\s\S]*?)</div>', block)
    
    options = []
    for opt in options_raw:
        opt_id_match = re.search(r'id="opcion-([^"]+)"', opt)
        opt_id = opt_id_match.group(1) if opt_id_match else "unknown"
        
        opt_text = re.sub(r'<[^>]+>', ' ', opt).strip()
        opt_text = " ".join(opt_text.split())
        
        options.append({
            "id": opt_id,
            "text": opt_text
        })
        
    questions_list.append({
        "id": q_id,
        "category": category,
        "enunciado_html": enun_html,
        "enunciado": enun_text,
        "options": options
    })

print(f"Extracted {len(questions_list)} questions.")
with open("questions_raw.json", "w", encoding="utf-8") as f:
    json.dump(questions_list, f, indent=2, ensure_ascii=False)
print("Saved raw questions to questions_raw.json")
