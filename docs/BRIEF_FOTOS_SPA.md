# Brief de Fotos — Salty Mango Studio (reemplazo, mismo tono)

> **Objetivo (Tatiana):** las fotos actuales se ven "diseño de interiores"; queremos fotos de
> **spa / estética / tratamientos** PERO conservando EXACTAMENTE el tono de la foto que ella
> aprobó ("El Estudio — Un espacio para cuidar tu piel con atención real…", `assets/espacio-salty-mango.jpg`).
> **La magia está en el TONO, no en el sujeto.** Mantenemos el mundo, cambiamos el sujeto.

---

## 1. EL ADN DEL ESTILO (la receta — TODO debe cumplirlo)

- **Paleta:** crema/beige (microcemento), **roble claro**, travertino, **latón/dorado envejecido**, **carbón/lino oscuro**. Tierra, cálido, monocromático.
- **Luz:** suave y difusa, dorada (golden hour); LED cálido escondido en las curvas. **Cero sombras duras**, cero flash.
- **Grade (color):** cálido, contraste bajo, ligeramente desaturado, altas luces cremosas, look de **película (medium format)**.
- **Composición:** minimalista, mucho **espacio negativo**, curvas orgánicas, profundidad de campo corta (fondo suave).
- **Mood:** *quiet luxury* / wellness sereno, premium, calmado.
- **Personas (cuando aparezcan):** clientela latina/caribeña, lino carbón, gestos naturales/candid.

### ❌ Evitar SIEMPRE (rompen la magia)
Tonos azules/fríos · blanco clínico de hospital · flash duro · desorden · piel plástica/"AI brillosa" · ojos/manos deformes · texto, logos, marcas de agua.

---

## 2. PLAN (híbrido)
- 🤖 **AI** (motor AdGen / DALL·E / Midjourney) → **ambientes, detalles y macros de piel** (clona el tono perfecto + coherencia).
- 📷 **Stock profesional real** → **tomas con personas / manos / rostros** (realismo sin artefactos).
- 🔑 **Coherencia entre las 16 = el GRADE.** Aunque vengan de fuentes distintas, se les aplica el mismo
  ajuste cálido (mismo LUT/filtro). Así se ven "del mismo set".

---

## 3. INVENTARIO (qué se queda / qué se reemplaza)

| # | Slot / sección | Archivo actual | Acción |
|---|---|---|---|
| 1 | **El Estudio** (espacio) | `assets/espacio-salty-mango.jpg` | ✅ **SE QUEDA** (ancla de estilo) |
| 2 | Hero | `…d3c8b1b5…_3840w.jpg` | 🤖 AI — ambiente hero |
| 3 | "Contrast recovery room" | `…2d71cc83…` (tmb. servicio Espalda) | 🤖 AI — sala de tratamiento facial |
| 4 | "Mobility and breath area" | `…96c79e30…` (tmb. servicio Glúteos) | 🤖 AI — rincón de skincare / repisa producto |
| 5 | "Resultados Visibles" | `…03e3bf84…` (tmb. servicio Láser) | 📷/🤖 — macro de piel luminosa |
| 6 | "Atención Personalizada" | `…ef35cb7d…` (tmb. servicio FibroBlast) | 📷 stock — esteticista + clienta |
| 7 | "Calidad Profesional" | `…702af30c…` (tmb. servicio Estrías) | 🤖 AI — detalle de herramientas/latón |
| 8 | Servicio · Limpieza Profunda | `assets/servicio-01-limpieza.jpg` | 📷/🤖 — facial limpieza |
| 9 | Servicio · Dermaplaning | `…19453e4f…` | 📷 stock — dermaplaning close-up |
| 10 | Servicio · Microagujas | `…c0340f36…` | 📷 stock — microneedling |
| 11 | Servicio · Express | `assets/servicio-04-express.jpg` | 🤖 AI — facial express detalle |

> Nota: los slots 3–7 reúsan imágenes Supabase que también son servicios (Espalda/Glúteos/Láser/FibroBlast/Estrías) → al reemplazarlas, se actualizan en ambos lugares.

---

## 4. PROMPTS DE AI (listos para AdGen / DALL·E 3 / Midjourney)

**BLOQUE DE ESTILO (pégalo al inicio de CADA prompt):**
```
Editorial wellness photography, quiet-luxury aesthetics spa. Palette: warm cream microcement,
blonde oak, travertine, aged brass, charcoal linen. Soft diffused golden natural light, hidden
warm LED glow, no harsh shadows. Filmic warm color grade, low contrast, slightly desaturated,
creamy highlights. Minimalist, lots of negative space, organic curved architecture, shallow
depth of field, medium-format film look. Calm, serene, premium. --no cold blue tones, clinical
white, harsh flash, clutter, plastic AI-glossy skin, deformed hands, text, logos, watermark.
```

**+ SUJETO por foto:**

- **Hero (#2):** `Wide atmospheric hero of a serene aesthetics studio: a softly lit treatment area with a linen-draped facial bed, oak shelving with rolled cream towels and brass tools, an olive tree, frosted floor-to-ceiling window. No people. Spacious, editorial.`
- **Sala de tratamiento (#3):** `A calm facial treatment room: linen-draped esthetic bed, cream microcement walls, blonde oak cabinetry, aged brass sconce, neatly arranged skincare in amber glass. Soft golden light. No people.`
- **Rincón skincare / repisa (#4):** `Detail of a curved oak shelf with minimalist skincare products in amber and frosted glass, a folded charcoal linen towel, a small ceramic bowl, brass tray. Warm soft light, shallow focus.`
- **Macro de piel (#5):** `Extreme close-up macro of healthy luminous bare skin on a cheek/jaw, dewy and even-toned, soft golden light, gentle film grain. Warm, natural, no makeup heavy. Latina skin tone.`
- **Detalle herramientas (#7):** `Close-up of professional aesthetics tools on a brass tray over travertine — a dermaplaning blade, facial roller, amber serum dropper — warm soft light, premium and clean. No hands.`
- **Express facial detalle (#11):** `Soft-focus detail of a facial in progress: gloved hand gliding a facial tool across a relaxed client's cheek, charcoal linen, cream towel, warm golden light. Calm, candid.`

> Para AdGen: usa el `dall_e_style_prompt` del Brand Kit con este mismo bloque de estilo para que TODO el motor genere en este tono.

---

## 5. FOTOS CON PERSONAS → STOCK PROFESIONAL REAL

Donde hay **manos/rostros/tratamiento real** (#6, #8, #9, #10) la AI suele fallar → stock real.

**Búsquedas (en inglés rinden mejor):**
`minimalist facial treatment spa` · `esthetician facial editorial warm` · `dermaplaning close up` ·
`microneedling treatment` · `laser hair removal spa` · `glowing skin facial candid` · `quiet luxury spa treatment`

**Fuentes (uso comercial):**
- **Unsplash** y **Pexels** — gratis, comercial. Filtrar por tonos cálidos/beige.
- **Stocksy** (de pago) — fotografía **editorial coherente**, ideal si quieres set uniforme.
- **Adobe Stock / iStock** — más variedad clínica/estética.

**Coherencia:** elige tomas ya cálidas; si una sale fría, se le aplica el mismo **grade cálido**
(LUT) que las demás para que el set se vea "de un mismo shooting".

---

## 6. CÓMO APLICARLAS (cuando estén listas)
- **Las 9 de servicios** → Tatiana (o yo) las cambia desde el **editor del CR Agent** (campo *Image URL* por servicio). Sin tocar código.
- **Las de la página** (hero, secciones) → las cambio yo en `index.html` (o pasan a salir del sistema).
- **Alojamiento:** subirlas a R2 (el bucket del tenant) o a la librería de assets, y usar el URL.

---

## 7. PRÓXIMO PASO
1. Genero/consigo un **primer lote (2–3)** con este brief → Tatiana aprueba el TONO.
2. Con el OK, completamos las 16 y las cargamos.

*(Brief preparado por Claude a partir del análisis de `espacio-salty-mango.jpg`, la foto aprobada por Tatiana — 2026-06-26.)*
